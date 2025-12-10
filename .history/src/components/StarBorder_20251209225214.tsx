import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 3,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-full ${className}`}
      {...rest}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="hidden absolute right-6 top-[90px] w-[100%] max-w-[365px] bg-[#FFF]/20 backdrop-blur-xl shadow-xl border-black rounded-xl overflow-hidden p-3 flex-col gap-3 z-[1004]">
        {children}
      </div>
      <div className="relative z-1 bg-[#FFF]/20 backdrop-blur-xl shadow-xl border-black text-white text-center text-[16px] py-[16px] px-[26px] rounded-full">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

