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
    // Build URL-encoded body like the Formspree HTML example
    const form = new URLSearchParams();
    form.append("email", String(email).trim());
    form.append("message", String(message));
    // Include additional fields (these show up in the email)
    form.append("name", String(name).trim());
    form.append("phone", phone ? String(phone) : "Not provided");
    form.append("service", String(service));
    form.append("_subject", `New website inquiry: ${service}`);

    const resp = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form.toString(),
    });

    if (!resp.ok) {
      let details: any = null;
      let text = "";
      const contentType = resp.headers.get("content-type") || "";
      try {
        if (contentType.includes("application/json")) {
          details = await resp.json();
        } else {
          text = await resp.text();
        }
      } catch (e) {
        // ignore parse errors
      }
      console.error("Formspree error:", details || text || `status ${resp.status}`);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send",
          status: resp.status,
          details: details || text || null,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Sent!" });
  } catch (error) {
    console.error("Crash:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}