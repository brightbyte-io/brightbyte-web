import React from 'react';
import { Container } from '../layout/Container';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#F7FAFD] via-[#FBFCFE] to-white">
      {/* Background ambient soft glow behind the illustration */}
      <div className="absolute top-1/3 right-4 w-[550px] lg:w-[650px] h-[550px] lg:h-[650px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* ============================================================== */}
          {/* LEFT COLUMN: Headings and Story Intro (Matching Figma)          */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 space-y-5 lg:pr-2">
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
          {/* Developer at desk, globe, cubes, and core pillars card          */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] lg:max-w-[620px] transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="/images/about-hero-illustration.jpg"
                alt="Software Engineer Developer at BrightByte Consulting"
                className="w-full h-auto object-contain rounded-2xl drop-shadow-sm select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
