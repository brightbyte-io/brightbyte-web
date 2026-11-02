import { MainHeading } from '../ui/MainHeading';
import { SectionLabel } from '../ui/SectionLabel';
import React from 'react';
import { Check } from 'lucide-react';
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
      "One delivery team coordinates app design, development, testing and store submission preparation.",
  },
  {
    id: 'native-or-cross',
    title: 'Native or cross-platform',
    description:
      "Choose native or shared-code development around device needs, product scope and maintenance.",
  },
  {
    id: 'store-ready',
    title: 'Store-ready from day one',
    description:
      "Prepare builds, store listings and release checks as part of delivery, with support for review feedback.",
  },
  {
    id: 'qa-stage',
    title: 'QA at every stage',
    description:
      "Review app behavior throughout development, including critical journeys and release checks.",
  },
];

export const MobileAppWhyChooseSection: React.FC<{ items?: WhyChooseItem[]; subtitle?: string }> = ({ items, subtitle }) => {
  return (
    <section className="relative pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-[#EEF4F9] overflow-hidden" style={{ backgroundImage: "url(/images/single-service-why-choose-background.svg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455056.png                          */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <SectionLabel labelKey="whyChoose" />

          <MainHeading headingKey="MobileAppWhyChooseSection" as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1528] tracking-tight leading-tight" />

          <p className="text-base sm:text-lg text-slate-500 font-normal max-w-2xl mx-auto">
            {subtitle || 'What working with our mobile team actually gets you.'}
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): 4 CARDS IN ONE ROW           */}
        {/* Exactly matching Frame 2121455056.png                          */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {(items || WHY_CHOOSE_DATA).map((item) => (
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
      </Container>
    </section>
  );
};
