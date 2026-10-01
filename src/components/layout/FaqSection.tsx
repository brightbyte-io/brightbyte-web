import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Container } from './Container';
import { FaqItem } from '../../types';

// ============================================================================
// PAGE-SPECIFIC FAQ PRESETS
// ============================================================================

export const HOME_FAQS: FaqItem[] = [
  {
    id: 'home-partner',
    question: 'Why partner with Brightbyte Consulting?',
    answer:
      'We combine enterprise-grade technical expertise with boutique agility. Dedicated senior engineers, zero hand-offs to third parties, and transparent milestone delivery.',
  },
  {
    id: 'home-services',
    question: 'What services does Brightbyte Consulting provide?',
    answer:
      'We offer end-to-end software engineering across mobile apps, web and enterprise platforms, AI development, DevOps, ERP systems, business auditing, project management, SEO marketing, and OEM global sourcing.',
  },
  {
    id: 'home-consultation',
    question: 'How do I initiate a consultation?',
    answer:
      'You can click "Book a Free Call" or "Schedule on Calendly" to pick a 30-minute slot on our calendar, or submit our consultation form with your project details. We will respond within one business day.',
  },
  {
    id: 'home-estimate',
    question: 'Can I request a project estimate online?',
    answer:
      'Yes, you can outline your project requirements through our consultation form, and our engineering leadership will provide a comprehensive scope, timeline, and budget estimate within one business day.',
  },
];

export const SERVICES_FAQS: FaqItem[] = [
  {
    id: 'services-why-partner',
    question: 'Why partner with Brightbyte Consulting?',
    answer:
      'We combine senior architecture expertise with rapid agile delivery, offering 100% code ownership from day one, radical communication transparency, and dedicated squads that scale with your roadmap.',
  },
  {
    id: 'services-what-services',
    question: 'What services does Brightbyte Consulting provide?',
    answer:
      'We offer full-cycle product engineering spanning web platforms, cross-platform and native mobile apps, cloud infrastructure, AI integrations, data pipelines, and ERP systems.',
  },
  {
    id: 'services-how-consultation',
    question: 'How do I initiate a consultation?',
    answer:
      'You can schedule a free 30-minute discovery call directly through our booking calendar or submit your project scope via our contact form for an immediate consultation with an engineering lead.',
  },
  {
    id: 'services-request-estimate',
    question: 'Can I request a project estimate online?',
    answer:
      'Yes, submit your technical requirements, estimated timeline, and expected milestones. Our principal architects will review your specifications and provide a detailed itemized estimate within 48 hours.',
  },
];

export const MOBILE_APP_FAQS: FaqItem[] = [
  {
    id: 'mobile-partner',
    question: 'Why partner with Brightbyte Consulting for mobile apps?',
    answer:
      'We bring senior mobile engineering pods, direct stakeholder access, transparent sprint cycles, and end-to-end product ownership from UI/UX design to App Store approval.',
  },
  {
    id: 'mobile-services',
    question: 'What mobile platforms and technologies do you support?',
    answer:
      'We specialize in native iOS (Swift) & Android (Kotlin), cross-platform React Native & Flutter, offline-first sync architectures, Bluetooth/IoT connectivity, and enterprise MDM deployments.',
  },
  {
    id: 'mobile-consultation',
    question: 'How do I initiate a consultation?',
    answer:
      'You can book an exploratory discovery call directly through our scheduler, or submit your scoping requirements for a same-day technical review.',
  },
  {
    id: 'mobile-estimate',
    question: 'Can I request a project estimate online?',
    answer:
      'Yes, you can use our interactive project estimator or submit your requirements to receive a detailed breakdown of sprints, timeline, and team composition.',
  },
];

export const HOW_WE_WORK_FAQS: FaqItem[] = [
  {
    id: 'hww-methodology',
    question: 'What delivery methodology does Brightbyte use?',
    answer:
      'We run two-week agile sprints with continuous integration, bi-weekly client demos, and direct access to your dedicated senior engineering squad via Slack and Jira.',
  },
  {
    id: 'hww-ip',
    question: 'Who owns the code and intellectual property produced during sprints?',
    answer:
      'You retain 100% exclusive intellectual property ownership of all code, schemas, infrastructure configurations, and documentation from day one. Repositories are hosted directly in your organization.',
  },
  {
    id: 'hww-kickoff',
    question: 'How quickly can Brightbyte kick off an engagement?',
    answer:
      'Following our initial technical discovery call and architecture scoping session, we typically spin up the dedicated engineering squad and development environment within 5 to 10 business days.',
  },
  {
    id: 'hww-collaboration',
    question: 'Can BrightByte collaborate with our existing in-house team?',
    answer:
      'Yes. Over 60% of our engagements operate under a hybrid staff augmentation or co-development model where our engineers participate in your daily standups and sprint planning.',
  },
];

// Map page names to their corresponding FAQ sets
const PAGE_FAQ_MAP: Record<string, FaqItem[]> = {
  home: HOME_FAQS,
  services: SERVICES_FAQS,
  'mobile-app': MOBILE_APP_FAQS,
  mobile: MOBILE_APP_FAQS,
  'how-we-work': HOW_WE_WORK_FAQS,
};

// ============================================================================
// COMPONENT PROPS
// ============================================================================

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
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1528] tracking-tight leading-tight mb-8 sm:mb-12">
            {title}
          </h2>

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
