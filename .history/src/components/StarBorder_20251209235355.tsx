import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'div'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'div';

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-xl md:rounded-full ${className}`}
      {...rest}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>

      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>

      <div
        className="
          relative z-1 bg-[#FFF]/30 shadow-xl md:bg-[#FFF]/20 backdrop-blur-xl md:shadow-xl text-white 
          md:text-[16px] py-[16px] px-[20px] md:py-[16px] md:px-[26px]
          rounded-lg md:rounded-full
        "
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

