import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
const UAParser = require("ua-parser-js");

// 1. DEFINE a new interface that includes Vercel's custom properties
interface NextRequestWithGeo extends NextRequest {
  geo?: {
    city?: string;
    country?: string;
    region?: string;
  };
  ip?: string;
}

export async function POST(req: NextRequest) {
  // 2. CAST the incoming request to our new type
  const reqWithGeo = req as NextRequestWithGeo;

  const {
    type,
    pathname,
    screenWidth,
    screenHeight,
    timezone,
    connection,
    prefersColorScheme,
    touchSupport,
  } = await req.json();

  if (type === "unmount") {
    return NextResponse.json({ message: "Exit event received" });
  }

  // --- Information Gathering & Bot Detection ---
  const userAgent = req.headers.get("user-agent") || "Unknown";
  const deviceInfo = new UAParser(userAgent).getResult();

  const isBot =
    req.headers.get("x-vercel-bot") === "1" || deviceInfo.device.type === "bot";

  // 3. USE the new reqWithGeo object to access ip and geo without errors
  const ip =
    reqWithGeo.ip ??
    req.headers.get("x-forwarded-for")?.split(",")[0] ??
    req.headers.get("x-real-ip") ??
    "Unknown";
  const referer = req.headers.get("referer") || "Direct";
  const languages = req.headers.get("accept-language")?.split(",")[0] || "N/A";
  const deploymentUrl = req.headers.get("x-vercel-deployment-url") || "Local";

  // --- Data Enrichment ---
  let geoData = null;
  if (reqWithGeo.geo) {
    geoData = {
      country: reqWithGeo.geo.country,
      city: reqWithGeo.geo.city,
      region: reqWithGeo.geo.region,
    };
  } else if (ip && ip !== "Unknown" && ip !== "127.0.0.1" && ip !== "::1") {
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}`);
      const data = await response.json();
      if (data.status === "success") geoData = data;
    } catch (error) {
      console.error("Geolocation fetch error:", error);
    }
  }

  // --- Email Configuration ---
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
  });

  const botLabel = isBot ? "[BOT] " : "";
  const eventTitle = `${botLabel}New Visit on ${pathname} ${
    isBot ? "🤖" : "🚀"
  }`;
  const subject = `${botLabel}Portfolio Visit on ${pathname} from ${
    geoData?.country || "Unknown"
  }`;

  // --- Final, Detailed HTML Email Template ---
  const htmlBody = `
    <html lang="en">
    <head>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f7; color: #333; margin: 0; padding: 20px; }
        .container { background-color: #ffffff; border-radius: 8px; padding: 24px; max-width: 600px; margin: auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        h1 { color: #1a1a1a; margin-top: 0; }
        .bot-warning { background-color: #fffbe6; border: 1px solid #ffe58f; padding: 12px; border-radius: 4px; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e9e9e9; }
        th { background-color: #f9f9f9; font-weight: 600; color: #555; text-align: center; }
        td { color: #333; }
        strong { color: #000; }
        .footer { text-align: center; margin-top: 24px; font-size: 12px; color: #888; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${eventTitle}</h1>
        ${
          isBot
            ? '<div class="bot-warning"><strong>🤖 Bot Detected:</strong> This visit was identified as a web crawler.</div>'
            : ""
        }
        <table>
          <tr><th colspan="2">🌐 Site &amp; Request Info</th></tr>
          <tr><td><strong>Visited Page</strong></td><td>${pathname}</td></tr>
          <tr><td><strong>Source (Referer)</strong></td><td>${referer}</td></tr>
          <tr><td><strong>Time</strong></td><td>${new Date().toLocaleString(
            "en-US",
            { timeZone: "Asia/Yerevan" }
          )} (Yerevan Time)</td></tr>

          <tr><th colspan="2">📍 Location Info</th></tr>
          <tr><td><strong>IP Address</strong></td><td>${ip}</td></tr>
          <tr><td><strong>Location</strong></td><td>${
            geoData?.city || "N/A"
          }, ${geoData?.country || "N/A"}</td></tr>
          
          <tr><th colspan="2">💻 Client &amp; Device Info</th></tr>
          <tr><td><strong>Device</strong></td><td>${
            deviceInfo.device.vendor || ""
          } ${deviceInfo.device.model || "Desktop"} (${
    deviceInfo.os.name || "N/A"
  })</td></tr>
          <tr><td><strong>Browser</strong></td><td>${
            deviceInfo.browser.name || "N/A"
          } ${deviceInfo.browser.version || ""}</td></tr>
          <tr><td><strong>Screen Size</strong></td><td>${
            screenWidth || "N/A"
          }x${screenHeight || "N/A"}</td></tr>
          <tr><td><strong>Touchscreen</strong></td><td>${
            touchSupport ? "Yes" : "No"
          }</td></tr>
          
          <tr><th colspan="2">⚙️ Technical Details</th></tr>
          <tr><td><strong>Browser Timezone</strong></td><td>${
            timezone || "N/A"
          }</td></tr>
          <tr><td><strong>Color Scheme</strong></td><td>${
            prefersColorScheme
              ? prefersColorScheme.charAt(0).toUpperCase() +
                prefersColorScheme.slice(1)
              : "N/A"
          }</td></tr>
          <tr><td><strong>Network</strong></td><td>${
            connection || "N/A"
          }</td></tr>
          <tr><td><strong>Language</strong></td><td>${languages}</td></tr>
          <tr><td><strong>Deployment</strong></td><td>${deploymentUrl}</td></tr>
        </table>
        <div class="footer">
          Full User Agent: ${userAgent}
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: "narek.petrosyan.005@gmail.com",
    subject: subject,
    html: htmlBody,
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
