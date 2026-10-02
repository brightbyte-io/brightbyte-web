import React from 'react';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-0 pb-10 sm:pb-14 lg:pb-0 bg-white">
      {/* Background SVG from /images/about-us-hero-background.svg */}
      <img
        src="/images/about-us-hero-background.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none -z-0"
        draggable={false}
      />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end min-h-0">
          {/* ============================================================== */}
          {/* LEFT COLUMN: Headings and Story Intro (Matching Figma)          */}
          {/* Aligns with standard Container (max-w-7xl) on left              */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 px-4 sm:px-6 lg:px-0 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-6 xl:pr-10 lg:self-start lg:pt-28 xl:pt-32 2xl:pt-36 lg:pb-16 space-y-4 lg:space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#18529B]">
              ABOUT US
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#0B1528] tracking-tight leading-[1.14]">
              Built by developers.<br />
              Trusted by growing<br />
              businesses.
            </h1>

            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-md">
              Bright Byte Consulting began with a vision to deliver quality software quickly and affordably. Today, our diverse team provides tailored solutions to clients worldwide.
            </p>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: Ultra-crisp illustration matching Figma           */}
          {/* Extends flush to the right end edge and bottom desk boundary   */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 relative flex items-end justify-center lg:justify-end self-end w-full px-4 sm:px-6 lg:px-0">
            <div className="relative w-full max-w-[560px] lg:max-w-none transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="/images/about-us-hero.svg"
                alt="About BrightByte Consulting"
                className="w-full h-auto object-contain object-bottom drop-shadow-sm pointer-events-none block"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
