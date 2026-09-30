import React, { useState } from 'react';
import { Landmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

export interface IndustryItem {
  id: string;
  name: string;
}

export const INDUSTRIES_SERVED: IndustryItem[] = [
  { id: 'fintech', name: 'Fintech & Banking' },
  { id: 'telecom', name: 'Telecom' },
  { id: 'startups', name: 'Startups' },
  { id: 'government', name: 'Government' },
];

export const MobileAppIndustriesSection: React.FC = () => {
  // Mobile active index for screens below 768px ("only in bleow 768 show one by one")
  const [activeIdx, setActiveIdx] = useState(0);

  const nextItem = () => {
    setActiveIdx((prev) => (prev + 1) % INDUSTRIES_SERVED.length);
  };

  const prevItem = () => {
    setActiveIdx((prev) => (prev - 1 + INDUSTRIES_SERVED.length) % INDUSTRIES_SERVED.length);
  };

  const currentItem = INDUSTRIES_SERVED[activeIdx];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 select-none">
      <Container>
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455064.png                          */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
            Industries we serve
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-3.5 max-w-2xl mx-auto">
            Mobile experience across regulated and consumer-facing industries alike.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): 4 PILLS IN A ROW             */}
        {/* Exactly matching Frame 2121455064.png                          */}
        {/* ============================================================== */}
        <div className="hidden md:flex flex-row justify-center items-center gap-4 lg:gap-5 flex-wrap">
          {INDUSTRIES_SERVED.map((industry) => (
            <div
              key={industry.id}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#18529B] text-white font-semibold text-sm lg:text-[15px] shadow-[0_4px_14px_rgba(24,82,155,0.22)] transition-all duration-200 hover:bg-[#133F77] hover:scale-[1.02] cursor-default"
            >
              <Landmark className="w-5 h-5 text-white shrink-0" strokeWidth={2.2} />
              <span>{industry.name}</span>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-5 max-w-xs mx-auto select-none pt-2">
          {/* Controls & Stepper count */}
          <div className="flex items-center justify-between px-1 text-slate-500">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Industry 0{activeIdx + 1} of 0{INDUSTRIES_SERVED.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevItem}
                aria-label="Previous industry"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-90 flex items-center justify-center transition-all cursor-pointer text-slate-700 border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextItem}
                aria-label="Next industry"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white hover:bg-[#133F77] active:scale-90 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE PILL DISPLAYED ONE BY ONE */}
          <div className="flex justify-center py-2">
            <div className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#18529B] text-white font-semibold text-base shadow-[0_6px_20px_rgba(24,82,155,0.25)] transition-all duration-300">
              <Landmark className="w-5 h-5 text-white shrink-0" strokeWidth={2.2} />
              <span>{currentItem.name}</span>
            </div>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {INDUSTRIES_SERVED.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Go to ${item.name}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  activeIdx === idx
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
