import type { NextApiRequest, NextApiResponse } from "next";

// If you want emails, install Resend and uncomment below:
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

interface WaitlistData {
  email: string;
  name: string;
  userType: "renter" | "landlord";
  location: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  try {
    const { email, name, userType, location } = req.body as WaitlistData;

    if (!email || !name || !userType || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

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

    return res.status(200).json({
      message: "Successfully joined waitlist",
      data: { email, name, userType, location },
    });
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
