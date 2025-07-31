// /app/api/analytics/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { type } = await req.json();

  const userAgent = req.headers.get("user-agent") || "Unknown";
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    "Unknown";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: "narek.petrosyan.005@gmail.com",
    subject: `Portfolio ${type === "mount" ? "Visit" : "Exit"} Event`,
    text: `
📬 A user just ${type === "mount" ? "opened" : "closed"} your site.

🖥️ User-Agent: ${userAgent}
🌍 IP Address: ${ip}
⏱️ Event Type: ${type}
⏰ Time: ${new Date().toLocaleString()}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
