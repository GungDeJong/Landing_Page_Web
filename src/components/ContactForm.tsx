"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        setStatus("loading");
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const json = await res.json();
            if (!res.ok) throw new Error(json.error || "Something went wrong.");

            form.reset();
            setStatus("success");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
            setStatus("error");
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input name="name" placeholder="Full name" aria-label="Full name" required maxLength={100} />
            <input name="email" type="email" placeholder="Email" aria-label="Email" required maxLength={200} />
            <input name="company" placeholder="Company" aria-label="Company" maxLength={150} />
            <textarea name="message" rows={4} placeholder="How can we help?" aria-label="Message" required maxLength={3000} />

            {/* Honeypot: disembunyikan dari pengguna asli */}
            <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />

            <button
                className="btn pri"
                type="submit"
                disabled={status === "loading"}
                style={{ justifyContent: "center", cursor: "pointer" }}
            >
                {status === "loading" ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
                <p role="status" style={{ margin: 0, color: "#157347", fontSize: 14 }}>
                    Thank you! Your message has been sent. We&apos;ll be in touch soon.
                </p>
            )}
            {status === "error" && (
                <p role="alert" style={{ margin: 0, color: "#B3261E", fontSize: 14 }}>
                    {error}
                </p>
            )}
        </form>
    );
}