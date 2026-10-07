import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "messages.json");

type Message = {
    id: string;
    name: string;
    email: string;
    company: string;
    message: string;
    createdAt: string;
};

// Antrian sederhana supaya dua pesan yang masuk bersamaan tidak saling menimpa
let queue: Promise<unknown> = Promise.resolve();

async function readAll(): Promise<Message[]> {
    try {
        return JSON.parse(await fs.readFile(FILE, "utf-8"));
    } catch (err) {
        if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
        throw err;
    }
}

async function append(entry: Message) {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const all = await readAll();
    all.push(entry);
    const tmp = `${FILE}.tmp`;
    await fs.writeFile(tmp, JSON.stringify(all, null, 2), "utf-8");
    await fs.rename(tmp, FILE); // tulis atomik, file tidak rusak kalau proses terhenti
}

export async function POST(req: Request) {
    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // Honeypot: field tersembunyi, diisi hanya oleh bot
    if (typeof body.website === "string" && body.website.trim() !== "") {
        return NextResponse.json({ ok: true }); // pura-pura sukses
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
        return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    if (name.length > 100 || email.length > 200 || company.length > 150 || message.length > 3000) {
        return NextResponse.json({ error: "Input is too long." }, { status: 400 });
    }

    const entry: Message = {
        id: randomUUID(),
        name,
        email,
        company,
        message,
        createdAt: new Date().toISOString(),
    };

    try {
        const job = queue.then(() => append(entry));
        queue = job.catch(() => { });
        await job;
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Failed to save message:", err);
        return NextResponse.json({ error: "Could not save your message. Please try again." }, { status: 500 });
    }
}