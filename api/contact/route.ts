export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      message,
      build,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return Response.json(
        {
          success: false,
          error: "Name, email, phone, and message are required.",
        },
        { status: 400 }
      );
    }

    // Combine message + build requirement
    const fullMessage = build
      ? `${message}\n\nWhat they want to build: ${build}`
      : message;

    // Send lead to RaveWebs Lead Management System
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

      return Response.json(
        {
          success: false,
          error: "Failed to submit lead.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      id: result.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}