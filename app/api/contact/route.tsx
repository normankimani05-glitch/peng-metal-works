import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json({ success: false, error: "All fields required" }, { status: 400 });
    }

    const formspreeId = process.env.FORMSPREE_ID;
    if (!formspreeId) {
      return NextResponse.json(
        { success: false, error: "Server email config missing", missing: ["FORMSPREE_ID"] },
        { status: 500 }
      );
    }

    const endpoint = `https://formspree.io/f/${formspreeId}`;
    const payload = {
      name: String(name).trim(),
      email: String(email).trim(),
      phone: phone || "Not provided",
      service,
      message,
      _subject: `New website inquiry: ${service}`,
    };

    const resp = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error("Formspree error: ", text);
      return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Sent!" });
  } catch (error) {
    console.error("Crash:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}