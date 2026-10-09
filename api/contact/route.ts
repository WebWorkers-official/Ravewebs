const getEnv = (name: string): string | undefined =>
  (globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  }).process?.env?.[name];

async function forwardToN8n(payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
  build?: string;
}) {
  const webhookUrl = getEnv("N8N_WEBHOOK_URL");
  if (!webhookUrl) {
    console.warn("N8N_WEBHOOK_URL is not configured; skipping n8n forwarding.");
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) console.warn(`n8n webhook returned HTTP ${response.status}.`);
  } catch (error) {
    console.warn("Unable to forward contact lead to n8n.", error);
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, build } = body ?? {};

    if (!name || !email || !phone || !message) {
      return Response.json(
        { success: false, error: "Name, email, phone, and message are required." },
        { status: 400 }
      );
    }

    const fullMessage = build
      ? `${message}\n\nWhat they want to build: ${build}`
      : message;

    const response = await fetch("https://leadapp.ravewebs.in/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RaveWebs-Key": getEnv("RAVEWEBS_API_KEY") ?? "",
      },
      body: JSON.stringify({ name, email, phone, message: fullMessage }),
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error("RaveWebs Lead API error:", result);
      return Response.json({ success: false, error: "Failed to submit lead." }, { status: 500 });
    }

    await forwardToN8n({ name, email, phone, message, build });
    return Response.json({ success: true, id: result.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
