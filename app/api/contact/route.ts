import { NextResponse } from "next/server";

const TO_EMAIL = "works.imanav@gmail.com";

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  // No email provider configured → tell the client to fall back to mailto.
  if (!apiKey) {
    return NextResponse.json({ ok: false, fallback: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Portfolio contact from ${name}`,
        text: `${message}\n\n— ${name} (${email})`,
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, fallback: true });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, fallback: true });
  }
}
