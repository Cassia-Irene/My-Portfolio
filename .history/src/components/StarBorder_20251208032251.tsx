// src/components/StarBorder.tsx
import React from "react";

type StarBorderOwnProps = {
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties["animationDuration"];
  thickness?: number;
};

// Componente genérico: aceita `as` para renderizar outro elemento (div, button, header...)
type StarBorderProps<T extends React.ElementType> = StarBorderOwnProps & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof StarBorderOwnProps | "as">;

const StarBorder = <T extends React.ElementType = "div">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = (as || "div") as React.ElementType;
  // restProps corretamente tipados
  const restProps = rest as React.ComponentPropsWithoutRef<T>;

  // Se o usuário fornecer style via props, vamos mesclar com o nosso padding
  const incomingStyle = (restProps && (restProps as any).style) || {}; // only for style extraction; not used as `any` to spread props

  return (
    <Component
      {...restProps}
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...incomingStyle,
      }}
    >
      {/* camada de conteúdo por cima */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>

      {/* SVG/efeitos arredor da borda */}
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
    </Component>
  );
};

export default StarBorder;
