import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const {
      name,
      email,
      phone,
      message,
      build,
    } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, phone, and message are required.",
      });
    }

    const fullMessage = build
      ? `${message}\n\nWhat they want to build: ${build}`
      : message;

    const response = await fetch(
      "https://leadapp.ravewebs.in/api/leads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RaveWebs-Key":
            (globalThis as typeof globalThis & {
              process?: {
                env?: Record<string, string | undefined>;
              };
            }).process?.env?.RAVEWEBS_API_KEY ?? "",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: fullMessage,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("RaveWebs Lead API error:", result);

      return res.status(500).json({
        success: false,
        error: "Failed to submit lead.",
      });
    }

    return res.status(200).json({
      success: true,
      id: result.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      error: "Something went wrong. Please try again.",
    });
  }
}