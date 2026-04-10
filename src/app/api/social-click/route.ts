import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type SocialPlatform = "linkedin" | "github";

function isSocialPlatform(value: unknown): value is SocialPlatform {
  return value === "linkedin" || value === "github";
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const platform =
    typeof body === "object" && body !== null && "platform" in body
      ? (body as { platform: unknown }).platform
      : undefined;

  if (!isSocialPlatform(platform)) {
    return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
  }

  const userAgent = req.headers.get("user-agent") || "Unknown";
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    "Unknown";

  const label =
    platform === "linkedin" ? "LinkedIn" : "GitHub";
  const emoji = platform === "linkedin" ? "🔗" : "🐙";

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
    subject: `${emoji} ${label} link clicked!`,
    text: `
Someone opened your ${label} profile from the portfolio.

🌍 IP: ${ip}
🖥️ User-Agent: ${userAgent}
🕒 Time: ${new Date().toLocaleString()}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Social click email sent" });
  } catch (error) {
    console.error("Social click email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
