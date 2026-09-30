import React, { useState } from 'react';
import { Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'why-partner',
    question: 'Why partner with Brightbyte Consulting?',
    answer:
      'We combine senior architecture expertise with rapid agile delivery, offering 100% code ownership from day one, radical communication transparency, and dedicated squads that scale with your roadmap.',
  },
  {
    id: 'what-services',
    question: 'What services does Brightbyte Consulting provide?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: 'how-consultation',
    question: 'How do I initiate a consultation?',
    answer:
      'You can schedule a free 30-minute discovery call directly through our booking calendar or submit your project scope via our contact form for an immediate consultation with an engineering lead.',
  },
  {
    id: 'request-estimate',
    question: 'Can I request a project estimate online?',
    answer:
      'Yes, submit your technical requirements, estimated timeline, and expected milestones. Our principal architects will review your specifications and provide a detailed itemized estimate within 48 hours.',
  },
];

export const ServicesFaqSection: React.FC = () => {
  // Desktop open item ID: defaults to 'what-services' matching FAQ.png screenshot
  const [openId, setOpenId] = useState<string | null>('what-services');

  // Mobile active index for screens below 768px ("show one by one")
  const [mobileIndex, setMobileIndex] = useState(0);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % FAQ_DATA.length);
  };

  const prevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + FAQ_DATA.length) % FAQ_DATA.length);
  };

  const currentMobileFaq = FAQ_DATA[mobileIndex];
  const isMobileOpen = openId === currentMobileFaq.id;

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-100 select-none">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* ============================================================== */}
          {/* SECTION HEADER                                                 */}
          {/* Left-aligned clean title matching FAQ.png                      */}
          {/* ============================================================== */}
          <div className="mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-tight">
              Frequently asked questions
            </h2>
          </div>

          {/* ============================================================== */}
          {/* DESKTOP & TABLET VIEW (>= 768px): SAME STACKED LIST            */}
          {/* Exactly matching FAQ.png with thin dark dividers               */}
          {/* ============================================================== */}
          <div className="hidden md:block">
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="border-b border-slate-900 transition-colors"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-6 lg:py-7 flex items-center justify-between text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg lg:text-[19px] font-bold text-slate-950 tracking-tight pr-6 group-hover:text-[#18529B] transition-colors">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-slate-950 group-hover:text-[#18529B] transition-colors">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2.2]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2.2]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-7 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ============================================================== */}
          {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
          {/* Requirement: "only in bleow 768 show one by one"                 */}
          {/* ============================================================== */}
          <div className="md:hidden space-y-4 pt-2">
            {/* Mobile Stepper Header with Cursor Click Controls */}
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Question {mobileIndex + 1} of {FAQ_DATA.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevMobile}
                  aria-label="Previous question"
                  className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 active:scale-90 flex items-center justify-center transition-all cursor-pointer border border-slate-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextMobile}
                  aria-label="Next question"
                  className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] active:scale-90 flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ACTIVE QUESTION SHOWN ONE BY ONE */}
            <div className="rounded-2xl border-y border-slate-900 bg-white py-6 px-1 transition-all space-y-3">
              <div
                onClick={() => toggleItem(currentMobileFaq.id)}
                className="flex items-start justify-between gap-4 cursor-pointer"
              >
                <h3 className="text-base font-bold text-slate-950 leading-snug">
                  {currentMobileFaq.question}
                </h3>
                <span className="shrink-0 text-slate-950 mt-0.5">
                  {isMobileOpen ? (
                    <Minus className="w-5 h-5 stroke-[2.2]" />
                  ) : (
                    <Plus className="w-5 h-5 stroke-[2.2]" />
                  )}
                </span>
              </div>

              {isMobileOpen && (
                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  {currentMobileFaq.answer}
                </p>
              )}
            </div>

            {/* Indicator dots for mobile navigation */}
            <div className="flex items-center justify-center gap-1.5 pt-2">
              {FAQ_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileIndex(idx);
                    setOpenId(item.id);
                  }}
                  aria-label={`Go to question ${idx + 1}`}
                  className={`transition-all rounded-full h-1.5 cursor-pointer ${
                    mobileIndex === idx
                      ? 'w-6 bg-[#18529B]'
                      : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
