export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(body: unknown): ValidationResult {
  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return { ok: false, error: "Name, email, and message are required." };
  }

  if (!emailPattern.test(email)) {
    return { ok: false, error: "Invalid email address." };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    },
  };
}
