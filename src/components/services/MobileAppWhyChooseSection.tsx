import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: 'one-team',
    title: 'One team, start to finish',
    description:
      'Design, development, QA, and store submission handled by the same dedicated team. No hand-offs.',
  },
  {
    id: 'native-or-cross',
    title: 'Native or cross-platform',
    description:
      'We recommend the right approach for your users and budget, not a default we push on everyone.',
  },
  {
    id: 'store-ready',
    title: 'Store-ready from day one',
    description:
      'App Store and Google Play submission and approval handling built into the process, not an afterthought.',
  },
  {
    id: 'qa-stage',
    title: 'QA at every stage',
    description:
      'Testing throughout development, not just before launch, fewer surprises after you ship.',
  },
];

export const MobileAppWhyChooseSection: React.FC = () => {
  // Mobile active index for screens below 768px ("show one by one")
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % WHY_CHOOSE_DATA.length);
  };

  const prevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + WHY_CHOOSE_DATA.length) % WHY_CHOOSE_DATA.length);
  };

  const currentItem = WHY_CHOOSE_DATA[mobileIndex];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#EEF4F9] border-b border-slate-100 overflow-hidden">
      {/* Background soft ambient curved light rings matching Frame 2121455056.png */}
      <div className="absolute -left-36 top-6 w-[520px] h-[520px] rounded-full border-[70px] border-white/55 blur-2xl pointer-events-none -z-0" />
      <div className="absolute -right-36 -bottom-16 w-[580px] h-[580px] rounded-full border-[80px] border-white/60 blur-2xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455056.png                          */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#18529B]">
            WHY CHOOSE THIS SERVICE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
            Built for launch, built for growth
          </h2>

          <p className="text-base sm:text-lg text-slate-500 font-normal max-w-2xl mx-auto">
            What working with our mobile team actually gets you.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): 4 CARDS IN ONE ROW           */}
        {/* Exactly matching Frame 2121455056.png                          */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {WHY_CHOOSE_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[28px] p-7 sm:p-8 border border-slate-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-start transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Blue circular checkmark icon matching screenshot */}
              <div className="w-9 h-9 rounded-full border-[2.2px] border-[#18529B] flex items-center justify-center text-[#18529B] mb-7 shrink-0">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>

              <h3 className="text-lg sm:text-[20px] font-extrabold text-slate-950 tracking-tight leading-snug mb-3">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-4 max-w-sm mx-auto pt-2">
          {/* Mobile Stepper Header with Cursor Click Controls */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Benefit 0{mobileIndex + 1} of 0{WHY_CHOOSE_DATA.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevMobile}
                aria-label="Previous benefit"
                className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 active:scale-90 flex items-center justify-center transition-all cursor-pointer border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextMobile}
                aria-label="Next benefit"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] active:scale-90 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE BENEFIT CARD SHOWN ONE BY ONE */}
          <div className="bg-white rounded-[28px] p-7 sm:p-8 shadow-xs border border-slate-100 space-y-4">
            <div className="w-9 h-9 rounded-full border-[2.2px] border-[#18529B] flex items-center justify-center text-[#18529B]">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-950 tracking-tight leading-snug">
              {currentItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
              {currentItem.description}
            </p>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {WHY_CHOOSE_DATA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Go to ${item.title}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  mobileIndex === idx
                    ? 'w-6 bg-[#18529B]'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
