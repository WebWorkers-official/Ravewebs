import type { VercelRequest, VercelResponse } from "@vercel/node";

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

    if (!response.ok) {
      console.warn(`n8n webhook returned HTTP ${response.status}.`);
    }
  } catch (error) {
    // n8n is an additional destination: its failure must not undo a lead
    // already accepted by the existing RaveWebs Lead Management API.
    console.warn("Unable to forward contact lead to n8n.", error);
  } finally {
    clearTimeout(timeout);
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message, build } = req.body ?? {};

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, phone, and message are required.",
      });
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
      return res.status(500).json({ success: false, error: "Failed to submit lead." });
    }

    // Keep the original lead-system behavior, then send the same form fields
    // to n8n for AI scoring and Airtable storage.
    await forwardToN8n({ name, email, phone, message, build });

    return res.status(200).json({ success: true, id: result.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong. Please try again.",
    });
  }
}
