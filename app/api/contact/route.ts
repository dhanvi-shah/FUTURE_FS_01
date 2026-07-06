import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validate-contact";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = validateContact(body);

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  console.log("[contact]", {
    ...result.data,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json(
    { success: true, message: "Message received successfully." },
    { status: 201 }
  );
}
