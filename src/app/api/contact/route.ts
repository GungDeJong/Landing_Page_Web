import { NextResponse } from "next/server";

// Pesan dari form kontak diteruskan ke Formspree, terus Formspree ngririm
// sebagai email ke info@inerrad-tech.com.

const FORMSPREE_ENDPOINT =
    process.env.FORMSPREE_ENDPOINT ?? "https://formspree.io/f/moeeappk";

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

    try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
                name,
                email,
                company,
                message,
                _subject: `Pesan baru dari website: ${name}`,
                _replyto: email, // tombol Reply di email langsung ke pengirim
            }),
        });

        if (!res.ok) {
            console.error("Formspree error:", res.status, await res.text());
            throw new Error("Formspree rejected the message");
        }
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Failed to send message:", err);
        return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 500 });
    }
}
