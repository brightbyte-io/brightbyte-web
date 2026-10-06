import React from 'react';
import { Container } from '../layout/Container';

// Hexagonal Brand Logo matching screenshot & About page
const HexBrandItem: React.FC<{ isLight?: boolean }> = ({ isLight = false }) => (
  <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 group/item transition-transform duration-200 hover:scale-105 cursor-pointer">
    <svg
      viewBox="0 0 28 32"
      fill="none"
      className={`w-6 sm:w-[26px] h-6 sm:h-7 shrink-0 ${isLight ? 'text-[#94A3B8]' : 'text-[#475569]'}`}
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 6.5H8L3 16L8 25.5H20L25 16L21 9.5H15" />
    </svg>
    <span className={`text-[15px] sm:text-[17px] lg:text-[18px] font-bold tracking-tight whitespace-nowrap ${isLight ? 'text-[#94A3B8]' : 'text-[#475569]'}`}>
      Brand Icon
    </span>
  </div>
);

// Interlocking Circles Brand Logo matching screenshot & About page
const CirclesBrandItem: React.FC<{ isLight?: boolean }> = ({ isLight = false }) => (
  <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 group/item transition-transform duration-200 hover:scale-105 cursor-pointer">
    <svg
      viewBox="0 0 40 32"
      fill="none"
      className={`w-8 sm:w-[35px] h-6 sm:h-7 shrink-0 ${isLight ? 'text-[#94A3B8]' : 'text-[#475569]'}`}
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="14" cy="16" r="10.5" />
      <circle cx="26" cy="16" r="10.5" />
    </svg>
    <span className={`text-[15px] sm:text-[17px] lg:text-[18px] font-bold tracking-tight whitespace-nowrap ${isLight ? 'text-[#94A3B8]' : 'text-[#475569]'}`}>
      Brand Icon
    </span>
  </div>
);

// Sequence of alternating brands
const BRANDS_SEQUENCE = [
  { id: 'b1', component: CirclesBrandItem, isLight: true },
  { id: 'b2', component: HexBrandItem, isLight: false },
  { id: 'b3', component: CirclesBrandItem, isLight: false },
  { id: 'b4', component: HexBrandItem, isLight: false },
  { id: 'b5', component: CirclesBrandItem, isLight: false },
  { id: 'b6', component: HexBrandItem, isLight: false },
];

export const HomeTrustedBy: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-100/90 py-5 sm:py-6 md:py-7 overflow-hidden select-none">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12">
          {/* Left Title: "Trusted by the best" */}
          <div className="shrink-0 text-center md:text-left md:pr-4 lg:pr-6 md:border-r md:border-slate-200/80">
            <h3 className="text-sm sm:text-base lg:text-[18px] font-bold text-slate-800 leading-[1.25] tracking-tight">
              Trusted by<br className="hidden md:inline" /> the best
            </h3>
          </div>

          {/* Marquee Track Container with gradient fades and hover-pause */}
          <div className="relative flex-1 w-full overflow-hidden py-1 group">
            {/* Left edge gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

            {/* Right edge gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            {/* Continuous infinite marquee track: auto-scrolls, pauses on mouse hover, resumes on leave */}
            <div className="animate-marquee-scroll group-hover:[animation-play-state:paused] flex items-center gap-10 sm:gap-14 lg:gap-16">
              {/* First set of brands */}
              {BRANDS_SEQUENCE.map((brand, idx) => {
                const Component = brand.component;
                return <Component key={`home-brand-1-${idx}`} isLight={brand.isLight} />;
              })}

              {/* Duplicated set for seamless 100% infinite loop */}
              {BRANDS_SEQUENCE.map((brand, idx) => {
                const Component = brand.component;
                return <Component key={`home-brand-2-${idx}`} isLight={brand.isLight} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
