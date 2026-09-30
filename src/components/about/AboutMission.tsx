import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

// Exact double quotation mark SVG glyph matching Frame 2121455054.png
const QuoteMarkIcon: React.FC<{ className?: string }> = ({
  className = 'w-11 h-8',
}) => (
  <svg
    viewBox="0 0 46 36"
    className={`${className} text-[#18529B] fill-current select-none`}
    aria-hidden="true"
  >
    <path d="M13.2 0C5.9 0 0 5.9 0 13.2c0 7.3 4.4 13.3 10.9 14.8l-2 8h7.2l3.3-10.1c.8-2.3 1.3-4.8 1.3-7.5C20.7 5.9 17.3 0 13.2 0zm25.3 0C31.2 0 25.3 5.9 25.3 13.2c0 7.3 4.4 13.3 10.9 14.8l-2 8h7.2l3.3-10.1c.8-2.3 1.3-4.8 1.3-7.5C46 5.9 42.6 0 38.5 0z" />
  </svg>
);

export const AboutMission: React.FC = () => {
  // Mobile index for screens below 768px ("show one by one")
  const [mobileIndex, setMobileIndex] = useState(0);

  const pillars = [
    {
      id: 'reach',
      title: 'Global reach',
      desc: 'Comprehensive technology services delivered to businesses around the world via a diverse team of experts.',
    },
    {
      id: 'cost',
      title: 'Reduced time and cost',
      desc: "Top-tier solutions that don't require enterprise budgets or enterprise timelines.",
    },
    {
      id: 'innovation',
      title: 'A catalyst for innovation',
      desc: 'Products and services that genuinely help businesses compete and grow, not just technically impressive boxes ticked.',
    },
    {
      id: 'needs',
      title: 'Built around your needs',
      desc: 'Understanding and resonating with the evolving needs of the businesses we serve is central to everything we do.',
    },
  ];

  const nextPillar = () => {
    setMobileIndex((prev) => (prev + 1) % pillars.length);
  };

  const prevPillar = () => {
    setMobileIndex((prev) => (prev - 1 + pillars.length) % pillars.length);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F9FBFE] via-[#F4F8FD] to-white border-b border-slate-100 select-none">
      {/* Ambient background soft light and rings */}
      <div className="absolute -left-24 bottom-12 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -right-32 -bottom-24 w-[580px] h-[580px] rounded-full border-[70px] border-blue-100/40 blur-2xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455054.png                          */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#18529B]">
            OUR MISSION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-[1.18]">
            Delivering quality technology, efficiently<br className="hidden sm:inline" /> and cost-effectively.
          </h2>
        </div>

        {/* ============================================================== */}
        {/* FOR ALL SCREENS >= 768px: SAME ROW SPLIT                       */}
        {/* Exactly matching Frame 2121455054.png                          */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: 4 Clean White Rounded Feature Cards */}
          <div className="md:col-span-6 lg:col-span-6 space-y-4 lg:space-y-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-[24px] p-6 lg:p-7 shadow-[0_4px_24px_rgba(24,82,155,0.06)] border border-slate-100/90 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(24,82,155,0.1)] transition-all duration-300 space-y-2"
              >
                <h3 className="text-lg sm:text-[20px] font-bold text-slate-900 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Executive Portrait + Quote & Attribution */}
          <div className="md:col-span-6 lg:col-span-6 space-y-6 lg:pl-2">
            {/* CEO Portrait with smooth large rounded corners */}
            <div className="relative overflow-hidden rounded-[32px] shadow-xl shadow-blue-950/10 border border-slate-200/60 aspect-[1.18/1] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85"
                alt="CEO BrightByte Consulting"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* CEO Quote & Attribution */}
            <div className="space-y-3 pt-1">
              <QuoteMarkIcon className="w-11 h-8" />
              <blockquote className="text-base sm:text-lg lg:text-[18px] font-bold text-slate-950 leading-snug">
                “At Bright Byte, we prioritise client satisfaction through careful planning and precise execution. We are working towards a better future, one product at a time.”
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-600 font-medium tracking-tight">
                - CEO BrightByte
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-8 max-w-sm mx-auto select-none">
          {/* 1. Feature Cards Shown One by One */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Pillar {mobileIndex + 1} of {pillars.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevPillar}
                  aria-label="Previous pillar"
                  className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextPillar}
                  aria-label="Next pillar"
                  className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Active Pillar Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md shadow-blue-950/5 border border-slate-100 space-y-2 transition-all duration-300">
              <h3 className="text-lg font-bold text-[#18529B] tracking-tight">
                {pillars[mobileIndex].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {pillars[mobileIndex].desc}
              </p>
            </div>

            {/* Indicator dots for mobile navigation */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {pillars.map((pillar, idx) => (
                <button
                  key={pillar.id}
                  onClick={() => setMobileIndex(idx)}
                  aria-label={`Go to ${pillar.title}`}
                  className={`transition-all rounded-full h-1.5 cursor-pointer ${
                    mobileIndex === idx
                      ? 'w-6 bg-[#18529B]'
                      : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 2. Executive Portrait & CEO Quote */}
          <div className="space-y-5 pt-2 border-t border-slate-200/80">
            <div className="relative overflow-hidden rounded-[26px] shadow-lg shadow-blue-950/10 border border-slate-200/60 aspect-[1.15/1] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85"
                alt="CEO BrightByte Consulting"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            <div className="space-y-3 px-1">
              <QuoteMarkIcon className="w-9 h-7" />
              <blockquote className="text-base font-bold text-slate-950 leading-snug">
                “At Bright Byte, we prioritise client satisfaction through careful planning and precise execution. We are working towards a better future, one product at a time.”
              </blockquote>
              <p className="text-xs text-slate-600 font-medium">
                - CEO BrightByte
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
