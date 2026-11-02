import { MainHeading } from '../ui/MainHeading';
import React, { useEffect, useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Container } from './Container';
import { FaqItem } from '../../types';

import faqContent from '../../data/faqSections.json';

export const HOME_FAQS: FaqItem[] = faqContent.home;
export const SERVICES_FAQS: FaqItem[] = faqContent.services;
export const MOBILE_APP_FAQS: FaqItem[] = faqContent['mobile-app'];
export const HOW_WE_WORK_FAQS: FaqItem[] = faqContent['how-we-work'];
const PAGE_FAQ_MAP: Record<string, FaqItem[]> = { ...faqContent, mobile: MOBILE_APP_FAQS };

export interface FaqSectionProps {
  /** Page key to automatically populate page-specific FAQs ('home' | 'services' | 'mobile-app' | 'how-we-work') */
  page?: 'home' | 'services' | 'mobile-app' | 'mobile' | 'how-we-work' | string;
  /** Explicit list of FAQs (overrides page preset if provided) */
  items?: FaqItem[];
  /** Section title (default: "Frequently asked questions") */
  title?: string;
  /** Optional container className */
  className?: string;
  /** Index of question open by default (defaults to 0) */
  defaultOpenIndex?: number | null;
}

// ============================================================================
// UNIFIED FAQ SECTION COMPONENT
// ============================================================================

export const FaqSection: React.FC<FaqSectionProps> = ({
  page = 'home',
  items,
  title = 'Frequently asked questions',
  className = '',
  defaultOpenIndex = 0,
}) => {
  // Resolve FAQ list based on explicit items prop or page preset
  const faqs = items || PAGE_FAQ_MAP[page] || HOME_FAQS;

  const sectionId = useId();
  useEffect(() => { setOpenIndex(defaultOpenIndex); }, [page, items, defaultOpenIndex]);

  // Accordion state (single item open)
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={`pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16 bg-white ${className}`}>
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* ============================================================== */}
          {/* SECTION TITLE (Left-aligned, bold, clean)                       */}
          {/* ============================================================== */}
          <MainHeading headingKey="faq" as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1528] tracking-tight leading-tight mb-8 sm:mb-12">
            {title}
          </MainHeading>

          {/* ============================================================== */}
          {/* ALL SCREEN SIZES: ALL ITEMS WITH DIVIDERS                      */}
          {/* No top line; bottom divider on each item including the last     */}
          {/* ============================================================== */}
          <div className="w-full">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.id || idx}
                  className="border-b border-black/85 transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left group cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`${sectionId}-answer-${idx}`}
                    id={`${sectionId}-question-${idx}`}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0B1528] tracking-tight group-hover:text-[#18529B] transition-colors pr-6">
                      {faq.question}
                    </span>

                    <span className="text-[#0B1528] shrink-0 p-1 group-hover:text-[#18529B] transition-colors">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2.2]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2.2]" />
                      )}
                    </span>
                  </button>

                  {/* Expandable answer */}
                  <div
                    id={`${sectionId}-answer-${idx}`}
                    role="region"
                    aria-labelledby={`${sectionId}-question-${idx}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pb-5 sm:pb-7'
                        : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-4 sm:pr-12 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
