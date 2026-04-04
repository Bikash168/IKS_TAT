import React from "react";

interface MandalaProps {
  size?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Mandala({ size = 200, opacity = 0.08, className, style }: MandalaProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      style={{ opacity, position: "absolute", pointerEvents: "none", ...style }}
    >
      {[0, 30, 60, 90, 120, 150].map((r) => (
        <g key={r} transform={`rotate(${r} 100 100)`}>
          <ellipse cx="100" cy="55" rx="8" ry="20" fill="none" stroke="var(--saffron)" strokeWidth="0.8" />
          <circle cx="100" cy="35" r="3" fill="var(--saffron)" />
        </g>
      ))}
      <circle cx="100" cy="100" r="30"  fill="none" stroke="var(--saffron)" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="55"  fill="none" stroke="var(--saffron)" strokeWidth="0.5" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="75"  fill="none" stroke="var(--gold)"    strokeWidth="0.5" />
      <circle cx="100" cy="100" r="8"   fill="var(--saffron)" opacity={0.6} />
    </svg>
  );
}
