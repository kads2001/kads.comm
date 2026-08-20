"use client";

export default function BlueprintGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* Clean architectural grid lines */}
      <div className="absolute inset-0 bg-architectural-grid opacity-75" />

      {/* Crosshair intersections (+) */}
      <div className="absolute top-10 left-10 text-zinc-300 font-mono text-xs font-semibold">+</div>
      <div className="absolute top-10 right-10 text-zinc-300 font-mono text-xs font-semibold">+</div>
      <div className="absolute bottom-10 left-10 text-zinc-300 font-mono text-xs font-semibold">+</div>
      <div className="absolute bottom-10 right-10 text-zinc-300 font-mono text-xs font-semibold">+</div>
    </div>
  );
}
