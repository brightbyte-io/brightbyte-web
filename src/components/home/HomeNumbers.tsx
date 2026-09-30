import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

export const HomeNumbers: React.FC = () => {
  const [mobileIndex, setMobileIndex] = useState(0);

  const stats = [
    { value: '50+', label: 'Projects Shipped' },
    { value: '95%', label: 'Client Retention Rate' },
    { value: '2×', label: 'Avg. Velocity Gain' },
    { value: '30%', label: 'Avg. Cost Reduction' },
  ];

  const nextCard = () => {
    setMobileIndex((prev) => (prev + 1) % stats.length);
  };

  const prevCard = () => {
    setMobileIndex((prev) => (prev - 1 + stats.length) % stats.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#EFF6FD] via-[#E6F1FD] to-[#EFF6FD] relative overflow-hidden">
      {/* Background ambient curve */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-white/50 blur-3xl pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 tracking-tight leading-tight">
            It's all there in the numbers!
          </h2>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): ALL 4 IN THE SAME ROW         */}
        {/* Styled exactly matching Container.png                          */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 max-w-5xl mx-auto select-none">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-[26px] py-10 px-6 sm:py-12 sm:px-7 border-t-4 border-t-[#18529B] border-x border-b border-slate-100 shadow-[0_12px_32px_rgba(24,82,155,0.06),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center space-y-2 group"
            >
              <div className="text-4xl sm:text-[46px] lg:text-[50px] font-extrabold text-[#18529B] tabular-nums tracking-tight leading-none group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-600 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Consistent with "only in bleow 768 show one by one"             */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-5 max-w-sm mx-auto select-none">
          {/* Card counter header with Prev/Next buttons */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Stat {mobileIndex + 1} of {stats.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevCard}
                aria-label="Previous stat"
                className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextCard}
                aria-label="Next stat"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE STAT CARD MATCHING Container.png */}
          <div className="bg-white rounded-[26px] py-12 px-8 border-t-4 border-t-[#18529B] border-x border-b border-slate-100 shadow-[0_14px_36px_rgba(24,82,155,0.08),0_2px_8px_rgba(0,0,0,0.04)] text-center flex flex-col items-center justify-center space-y-3 transition-all duration-300">
            <div className="text-5xl font-extrabold text-[#18529B] tabular-nums tracking-tight leading-none">
              {stats[mobileIndex].value}
            </div>
            <div className="text-base font-medium text-slate-600">
              {stats[mobileIndex].label}
            </div>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {stats.map((stat, idx) => (
              <button
                key={stat.label}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Go to stat ${idx + 1}`}
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
