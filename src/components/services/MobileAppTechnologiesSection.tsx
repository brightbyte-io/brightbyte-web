import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

export interface TechStackItem {
  title: string;
  description: string;
}

export const TECHNOLOGIES_DATA: TechStackItem[] = [
  {
    title: 'iOS',
    description: 'Swift, native App Store-ready code.',
  },
  {
    title: 'Android',
    description: 'Kotlin, built for performance across devices.',
  },
  {
    title: 'Cross-platform',
    description: 'Shared codebase where it fits your budget and timeline.',
  },
  {
    title: 'Backend & APIs',
    description: 'REST APIs, cloud infrastructure, and third-party integrations.',
  },
];

export const MobileAppTechnologiesSection: React.FC = () => {
  // Mobile single-card navigation (< 768px: "only in bleow 768 show one by one")
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % TECHNOLOGIES_DATA.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + TECHNOLOGIES_DATA.length) % TECHNOLOGIES_DATA.length);
  };

  const currentItem = TECHNOLOGIES_DATA[activeStep];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#18529B] text-white overflow-hidden select-none">
      {/* ============================================================== */}
      {/* DECORATIVE AMBIENT WATERMARK RINGS MATCHING Frame 2121455063   */}
      {/* ============================================================== */}
      <div
        className="absolute -left-36 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-[70px] border-white/[0.04] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -right-36 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-[70px] border-white/[0.04] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455063.png                          */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-3.5">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#93C5FD]">
            TECHNOLOGIES WE USE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight">
            What we build with
          </h2>

          <p className="text-base sm:text-lg text-blue-100/90 font-normal max-w-2xl mx-auto">
            Chosen for what's right for your app, not what's trending.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): 4 CARDS IN A ROW             */}
        {/* Exactly matching Frame 2121455063.png                          */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto items-stretch">
          {TECHNOLOGIES_DATA.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[24px] p-7 lg:p-8 shadow-[0_12px_32px_rgba(0,0,0,0.14)] flex flex-col justify-start transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-2xl lg:text-[26px] font-extrabold text-[#0B1528] tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-[14px] lg:text-[15px] text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-5 max-w-sm mx-auto select-none pt-2">
          {/* Stepper Header with Cursor Click Controls */}
          <div className="flex items-center justify-between px-2 text-white">
            <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">
              Item 0{activeStep + 1} of 0{TECHNOLOGIES_DATA.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevStep}
                aria-label="Previous technology"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 flex items-center justify-center transition-all cursor-pointer border border-white/20 text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                aria-label="Next technology"
                className="w-8 h-8 rounded-full bg-white text-[#18529B] hover:bg-blue-50 active:scale-90 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE WHITE CARD SHOWN ONE BY ONE */}
          <div className="relative">
            <div className="bg-white rounded-[24px] p-7 shadow-[0_12px_32px_rgba(0,0,0,0.18)] flex flex-col justify-start min-h-[170px]">
              <h3 className="text-2xl font-extrabold text-[#0B1528] tracking-tight mb-3">
                {currentItem.title}
              </h3>
              <p className="text-[14px] text-slate-600 leading-relaxed font-normal">
                {currentItem.description}
              </p>
            </div>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {TECHNOLOGIES_DATA.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setActiveStep(idx)}
                aria-label={`Go to ${item.title}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  activeStep === idx
                    ? 'w-6 bg-white'
                    : 'w-1.5 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
