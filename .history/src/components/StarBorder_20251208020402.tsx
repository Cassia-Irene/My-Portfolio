// src/components/StarBorder.tsx
import React from "react";

type Props = {
  color?: string;
  speed?: string; // ex: "5s"
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;

  children?: React.ReactNode;
};

const StarBorder: React.FC<Props> = ({
  color = "#FFBB1B",
  speed = "6s",
  className = "",
  as: Tag = "div",
  children,
}) => {
  // O SVG tem viewBox relativo ao contêiner, usamos stroke-dasharray para animação
  return (
    <Tag style={{ position: "relative", display: "block" }} className={className}>
      {/* conteúdo por cima */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>

      {/* SVG sobreposto (borda) */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.95" />
            <stop offset="60%" stopColor={color} stopOpacity="0.5" />
            <stop offset="100%" stopColor={color} stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* retângulo arredondado que funciona como borda */}
        <rect
          x="2"
          y="2"
          rx="18"
          ry="18"
          width="96"
          height="96"
          fill="none"
          stroke="url(#g)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 320,
            strokeDashoffset: 0,
            transformOrigin: "50% 50%",
            animation: `dash ${speed} linear infinite`,
            filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.25))",
          }}
        />
        <style>{`
          @keyframes dash {
            0% { stroke-dashoffset: 320; opacity: 0.9; transform: rotate(0deg); }
            50% { stroke-dashoffset: 80; opacity: 1; transform: rotate(8deg); }
            100% { stroke-dashoffset: 320; opacity: 0.9; transform: rotate(0deg); }
          }
        `}</style>
      </svg>
    </Tag>
  );
};

export default StarBorder;
