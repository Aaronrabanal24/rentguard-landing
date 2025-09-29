import type { NextApiRequest, NextApiResponse } from "next";
import { enforceRateLimit, isRateLimitEnabled } from "@/lib/ratelimit";
import { waitlistSchema, type WaitlistData } from "@/lib/types";

// If you want emails, install Resend and uncomment below:
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  try {
    const identifier =
      (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ??
      req.socket.remoteAddress ??
      "unknown";

    const rateLimitResult = await enforceRateLimit(identifier);

    if (!rateLimitResult.success) {
      if (isRateLimitEnabled()) {
        res.setHeader("RateLimit-Limit", rateLimitResult.limit.toString());
        res.setHeader("RateLimit-Remaining", rateLimitResult.remaining.toString());
        res.setHeader("RateLimit-Reset", rateLimitResult.reset.toString());
      }

      return res.status(429).json({ message: "Too many requests. Please slow down and try again." });
    }

    const parsedBody = waitlistSchema.safeParse(req.body);

    if (!parsedBody.success) {
      const errors = parsedBody.error.flatten().fieldErrors;
      return res.status(400).json({
        message: "Invalid form submission.",
        errors,
      });
    }

    const { email, name, userType, location } = parsedBody.data as WaitlistData;

    // TODO: Save to your datastore here (Prisma, Supabase, etc.)

    // Example Resend emails (optional):
    /*
    await resend.emails.send({
      from: "RentMatch <hello@rentmatch.com>",
      to: [email],
      subject: "Welcome to the RentMatch waitlist",
      html: `<p>Thanks for joining, ${name}. We will keep you posted.</p>`,
    });

    await resend.emails.send({
      from: "RentMatch <noreply@rentmatch.com>",
      to: ["admin@rentmatch.com"],
      subject: "New waitlist signup",
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${userType}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });
    */

    console.log("New waitlist signup:", { email, name, userType, location });

    if (isRateLimitEnabled()) {
      res.setHeader("RateLimit-Limit", rateLimitResult.limit.toString());
      res.setHeader("RateLimit-Remaining", rateLimitResult.remaining.toString());
      res.setHeader("RateLimit-Reset", rateLimitResult.reset.toString());
    }

    return res.status(200).json({
      message: "Successfully joined waitlist",
      data: { email, name, userType, location },
    });
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
