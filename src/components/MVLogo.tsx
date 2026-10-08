import React from 'react';

interface MVLogoProps {
  className?: string;
  variant?: 'color' | 'white';
  showSubtitle?: boolean;
}

export const MVLogo: React.FC<MVLogoProps> = ({
  className = 'h-9 w-auto',
  variant = 'color',
  showSubtitle = true,
}) => {
  const magenta = variant === 'white' ? '#FFFFFF' : '#D90070';
  const gray = variant === 'white' ? '#F5F5F7' : '#4B4B4B';

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        viewBox="0 0 240 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-label="MV Insurance Logo"
      >
        {/* 'm' letter in iconic magenta arches */}
        <path
          d="M20 72V42C20 28 31 18 45 18C56 18 64 24 69 33C74 24 83 18 94 18C108 18 119 28 119 42V72H103V43C103 35 97 30 89 30C80 30 74 36 74 45V72H58V43C58 35 52 30 45 30C37 30 36 36 36 43V72H20Z"
          fill={magenta}
        />
        {/* 'v' letter in charcoal gray with angled cut */}
        <path
          d="M119 18L151 72H170L202 18H182L160 55L139 18H119Z"
          fill={gray}
        />

        {showSubtitle && (
          <text
            x="20"
            y="93"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="3.5"
            fill={magenta}
          >
            INSURANCE
          </text>
        )}
      </svg>
    </div>
  );
};
