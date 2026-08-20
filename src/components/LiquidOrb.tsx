"use client";

import { useEffect, useRef } from "react";

export default function LiquidOrb() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      time += 0.015;
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.44;

      ctx.clearRect(0, 0, width, height);

      // Outer Ambient Glow
      const ambientGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.3,
        centerX,
        centerY,
        radius * 1.4
      );
      ambientGlow.addColorStop(0, "rgba(139, 92, 246, 0.2)");
      ambientGlow.addColorStop(0.6, "rgba(99, 102, 241, 0.08)");
      ambientGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // Glass Orb Base Sphere
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.clip();

      // Rich Deep Refracted Liquid Gradient
      const baseGradient = ctx.createRadialGradient(
        centerX - radius * 0.35,
        centerY - radius * 0.35,
        radius * 0.05,
        centerX,
        centerY,
        radius
      );
      baseGradient.addColorStop(0, "#ffffff");
      baseGradient.addColorStop(0.2, "#e9d5ff");
      baseGradient.addColorStop(0.5, "#a855f7");
      baseGradient.addColorStop(0.8, "#6366f1");
      baseGradient.addColorStop(1, "#1e1b4b");

      ctx.fillStyle = baseGradient;
      ctx.fill();

      // Dynamic Liquid Swirls
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const waveOffset = time * (1 + i * 0.35);
        const waveRadius = radius * (0.6 + Math.sin(waveOffset) * 0.12);

        ctx.ellipse(
          centerX + Math.cos(waveOffset) * 18,
          centerY + Math.sin(waveOffset * 1.2) * 22,
          waveRadius,
          waveRadius * 0.7,
          time * 0.4 + i,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          i === 0
            ? "rgba(255, 255, 255, 0.35)"
            : i === 1
            ? "rgba(192, 132, 252, 0.4)"
            : "rgba(99, 102, 241, 0.35)";
        ctx.fill();
      }

      // Specular Glass Reflection Arc
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.92, -Math.PI * 0.75, -Math.PI * 0.25);
      ctx.lineWidth = radius * 0.08;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineCap = "round";
      ctx.stroke();

      // Second Specular Highlight Dot
      ctx.beginPath();
      ctx.arc(centerX + radius * 0.45, centerY + radius * 0.45, radius * 0.12, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-44 h-44 sm:w-60 sm:h-60 lg:w-76 lg:h-76 mx-auto select-none pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
