import React, { useState } from 'react';
import { Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

export interface MobileFaqItem {
  id: string;
  question: string;
  answer: string;
}

export const MOBILE_APP_FAQS: MobileFaqItem[] = [
  {
    id: 'partner',
    question: 'Why partner with Brightbyte Consulting?',
    answer:
      'We bring senior engineering pods, direct stakeholder access, transparent sprint cycles, and end-to-end product ownership from architecture to post-launch optimization.',
  },
  {
    id: 'services',
    question: 'What services does Brightbyte Consulting provide?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: 'consultation',
    question: 'How do I initiate a consultation?',
    answer:
      'You can book an exploratory discovery call directly through our scheduler, or submit your scoping requirements for a same-day technical review.',
  },
  {
    id: 'estimate',
    question: 'Can I request a project estimate online?',
    answer:
      'Yes, you can use our interactive project estimator or submit your requirements to receive a detailed breakdown of sprints, timeline, and team composition.',
  },
];

export const MobileAppFaqSection: React.FC = () => {
  // Desktop accordion open state (defaults to index 1 open matching FAQ (1).png)
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  // Mobile active index (< 768px: "only in bleow 768 show one by one")
  const [mobileStep, setMobileStep] = useState(1);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const nextStep = () => {
    const nextIdx = (mobileStep + 1) % MOBILE_APP_FAQS.length;
    setMobileStep(nextIdx);
    setOpenIndex(nextIdx);
  };

  const prevStep = () => {
    const prevIdx = (mobileStep - 1 + MOBILE_APP_FAQS.length) % MOBILE_APP_FAQS.length;
    setMobileStep(prevIdx);
    setOpenIndex(prevIdx);
  };

  const currentMobileFaq = MOBILE_APP_FAQS[mobileStep];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 select-none">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* ============================================================== */}
          {/* SECTION TITLE                                                  */}
          {/* Exactly matching FAQ (1).png (Left-aligned, bold, clean)       */}
          {/* ============================================================== */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1528] tracking-tight leading-tight mb-12 sm:mb-16">
            Frequently asked questions
          </h2>

          {/* ============================================================== */}
          {/* DESKTOP & TABLET VIEW (>= 768px): ALL 4 ITEMS WITH DIVIDERS    */}
          {/* Exactly matching FAQ (1).png                                  */}
          {/* ============================================================== */}
          <div className="hidden md:block border-t border-black/85">
            {MOBILE_APP_FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.id}
                  className="border-b border-black/85 transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0B1528] tracking-tight group-hover:text-[#18529B] transition-colors pr-6">
                      {faq.question}
                    </span>

                    <span className="text-[#0B1528] shrink-0 p-1">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2.2]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2.2]" />
                      )}
                    </span>
                  </button>

                  {/* Expandable answer */}
                  {isOpen && (
                    <div className="pb-6 sm:pb-7 pr-12 text-sm sm:text-base text-slate-600 leading-relaxed font-normal animate-fadeIn">
                      {faq.answer}
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
          <div className="md:hidden space-y-6 select-none pt-2">
            {/* Stepper Header with Navigation */}
            <div className="flex items-center justify-between text-slate-500 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Question 0{mobileStep + 1} of 0{MOBILE_APP_FAQS.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevStep}
                  aria-label="Previous question"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-90 flex items-center justify-center transition-all cursor-pointer text-slate-700 border border-slate-200 shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextStep}
                  aria-label="Next question"
                  className="w-8 h-8 rounded-full bg-[#18529B] text-white hover:bg-[#133F77] active:scale-90 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* SINGLE FAQ CARD ITEM */}
            <div className="border-t border-b border-black/85 py-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-bold text-[#0B1528] tracking-tight">
                  {currentMobileFaq.question}
                </h3>
                <span className="text-[#0B1528] shrink-0 mt-0.5">
                  <Minus className="w-5 h-5 stroke-[2.2]" />
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {currentMobileFaq.answer}
              </p>
            </div>

            {/* Indicator dots for mobile navigation */}
            <div className="flex items-center justify-center gap-1.5 pt-2">
              {MOBILE_APP_FAQS.map((faq, idx) => (
                <button
                  key={faq.id}
                  onClick={() => {
                    setMobileStep(idx);
                    setOpenIndex(idx);
                  }}
                  aria-label={`Go to question ${idx + 1}`}
                  className={`transition-all rounded-full h-1.5 cursor-pointer ${
                    mobileStep === idx
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
