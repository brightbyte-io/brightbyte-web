import React from 'react';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-[#18529B]',
}) => {
  // Height configurations corresponding to standard navbar and layout sizes
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-18',
  };

  return (
    <div
      className={`inline-flex flex-col items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 94 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClasses[size]} w-auto drop-shadow-2xs`}
        aria-label="BrightByte Consulting Logo"
      >
        {/* ============================================================== */}
        {/* 1. SLATE-GREY ACCENT CURVES (#828E9E)                          */}
        {/* Rendered underneath the blue foreground strokes                 */}
        {/* ============================================================== */}
        
        {/* Left 'b' upper grey loop */}
        <path
          d="M17 26.5 C16 19.5 21 12 30 11.5 C38.5 11 44 17.5 44 26"
          stroke="#828E9E"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Middle 'b' upper grey loop */}
        <path
          d="M37 26.5 C36 19.5 41 12 50 11.5 C58.5 11 64 17.5 64 26"
          stroke="#828E9E"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right 'c' lower grey terminal curl */}
        <path
          d="M57 41 C62 46.5 70 47.5 76 43 C79 40.5 81.5 36.5 82 32"
          stroke="#828E9E"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ============================================================== */}
        {/* 2. PRIMARY NAVY BLUE EMBLEM STROKES (#18529B)                  */}
        {/* Main ribbon forming interlocking lowercase 'bbc' waveforms     */}
        {/* ============================================================== */}
        
        {/* Left stem & bottom U-loop */}
        <path
          d="M9 5 L9 32 C9 43 17 48 25 48 C33 48 37 43 37 32"
          stroke="#18529B"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Middle stem & bottom U-loop */}
        <path
          d="M29 5 L29 32 C29 43 37 48 45 48 C53 48 57 43 57 32"
          stroke="#18529B"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right wave arching up and into 'c' */}
        <path
          d="M57 32 C57 20 62 12.5 72 12.5 C77 12.5 81 14.5 83 17.5"
          stroke="#18529B"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ============================================================== */}
        {/* 3. WORDMARK "BRIGHTBYTE" MATCHING Group 1171278491.png          */}
        {/* ============================================================== */}
        {showText && (
          <text
            x="47"
            y="69"
            textAnchor="middle"
            fill="#18529B"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="10"
            letterSpacing="0.14em"
            className={textColor}
          >
            BRIGHTBYTE
          </text>
        )}
      </svg>
    </div>
  );
};
