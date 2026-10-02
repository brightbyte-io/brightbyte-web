import React from 'react';
import { Container } from '../layout/Container';

// Hexagonal Brand Logo matching screenshot
const HexBrandItem: React.FC = () => (
  <div className="flex items-center gap-3 shrink-0 group transition-transform duration-200 hover:scale-105">
    <svg
      viewBox="0 0 28 32"
      fill="none"
      className="w-[26px] h-7 shrink-0 text-[#475569]"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 6.5H8L3 16L8 25.5H20L25 16L21 9.5H15" />
    </svg>
    <span className="text-[17px] sm:text-[18px] font-bold tracking-tight text-[#475569] whitespace-nowrap">
      Brand Icon
    </span>
  </div>
);

// Interlocking Circles Brand Logo matching screenshot
const CirclesBrandItem: React.FC = () => (
  <div className="flex items-center gap-3 shrink-0 group transition-transform duration-200 hover:scale-105">
    <svg
      viewBox="0 0 40 32"
      fill="none"
      className="w-[35px] h-7 shrink-0 text-[#475569]"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="14" cy="16" r="10.5" />
      <circle cx="26" cy="16" r="10.5" />
    </svg>
    <span className="text-[17px] sm:text-[18px] font-bold tracking-tight text-[#475569] whitespace-nowrap">
      Brand Icon
    </span>
  </div>
);

// Sequence of alternating brands matching the screenshot
const BRANDS_SEQUENCE = [
  { id: 'b1', component: HexBrandItem },
  { id: 'b2', component: CirclesBrandItem },
  { id: 'b3', component: HexBrandItem },
  { id: 'b4', component: CirclesBrandItem },
  { id: 'b5', component: HexBrandItem },
  { id: 'b6', component: CirclesBrandItem },
];

export const AboutClients: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exact typography and styling matching screenshot                */}
        {/* ============================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#18529B]">
            OUR CLIENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-950 tracking-tight leading-[1.18]">
            Only the best choose to work
            <br />
            with BrightByte
          </h2>
        </div>
      </Container>

      {/* ============================================================== */}
      {/* SEAMLESS CLIENT LOGOS MARQUEE                                  */}
      {/* Edge gradient fades on left and right, smooth endless flow     */}
      {/* ============================================================== */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left edge gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 lg:w-56 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Right edge gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 lg:w-56 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous infinite marquee track */}
        <div className="animate-marquee-scroll flex items-center gap-16 sm:gap-20 lg:gap-24">
          {/* First set of brands */}
          {BRANDS_SEQUENCE.map((brand, idx) => {
            const Component = brand.component;
            return <Component key={`brand-set1-${idx}`} />;
          })}

          {/* Duplicated set for seamless 100% loop */}
          {BRANDS_SEQUENCE.map((brand, idx) => {
            const Component = brand.component;
            return <Component key={`brand-set2-${idx}`} />;
          })}
        </div>
      </div>
    </section>
  );
};
