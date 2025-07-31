"use client";
import { useEffect } from "react";

export const Analitics = () => {
  useEffect(() => {
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "mount" }),
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
