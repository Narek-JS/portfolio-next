"use client";
import { useEffect } from "react";

// Extend the global Navigator interface to include experimental properties
declare global {
  interface Navigator {
    connection?: {
      effectiveType: string;
    };
  }
}

export const Analytics = () => {
  useEffect(() => {
    // Gather all the data we want to send
    const analyticsData = {
      type: "mount",
      pathname: window.location.pathname,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      // NEW: Add more technical details
      connection: navigator.connection?.effectiveType,
      prefersColorScheme: window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light",
      touchSupport: "ontouchstart" in window || navigator.maxTouchPoints > 0,
    };

    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(analyticsData),
    });

    const handleExit = () => {
      navigator.sendBeacon(
        "/api/analytics",
        new Blob([JSON.stringify({ type: "unmount" })], {
          type: "application/json",
        })
      );
    };

    window.addEventListener("pagehide", handleExit);
    return () => window.removeEventListener("pagehide", handleExit);
  }, []);

  return null;
};
