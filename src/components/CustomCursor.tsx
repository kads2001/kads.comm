"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Only disable on true touch-only mobile devices without a fine pointer
    const isTouchOnly = window.matchMedia("(pointer: coarse) and (hover: none)").matches;
    if (isTouchOnly) {
      setIsEnabled(false);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (!isEnabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-3.5 h-3.5 bg-white rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
      animate={{
        x: mousePosition.x - 7,
        y: mousePosition.y - 7,
        scale: isHovered ? 2.8 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}
