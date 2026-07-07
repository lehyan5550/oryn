import { NextResponse } from "next/server";

export async function POST(request) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "L'inscription newsletter n'est pas encore configurée. Ajoutez BREVO_API_KEY dans .env.local (voir README).",
      },
      { status: 503 }
    );
  }

  const { email } = await request.json();
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const listIds = process.env.BREVO_LIST_ID
    ? [Number(process.env.BREVO_LIST_ID)]
    : undefined;

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({ email, listIds, updateEnabled: true }),
    });

    const data = await res.json().catch(() => ({}));
    const alreadySubscribed = res.status === 400 && data.code === "duplicate_parameter";

    if (!res.ok && !alreadySubscribed) {
      return NextResponse.json(
        { error: data.message || "Impossible de vous inscrire pour le moment." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur réseau." }, { status: 500 });
  }
}
