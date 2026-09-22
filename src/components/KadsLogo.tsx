"use client";

import Link from "next/link";

interface KadsLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export default function KadsLogo({
  size = "md",
  variant = "dark",
  showTagline = false,
  className = "",
}: KadsLogoProps) {
  const sizeMap = {
    sm: "h-9 w-auto",
    md: "h-12 w-auto",
    lg: "h-16 w-auto",
    xl: "h-24 w-auto",
  };

  const logoSrc =
    variant === "light"
      ? "/images/kads_logo_dark_transparent.png"
      : "/images/kads_logo_transparent.png";

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <img
        src={logoSrc}
        alt="KADS.COM - Ideas • Design • Solutions"
        className={`${sizeMap[size]} object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)]`}
      />
    </div>
  );
}
