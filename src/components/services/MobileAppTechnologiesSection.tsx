import { MainHeading } from '../ui/MainHeading';
import { SectionLabel } from '../ui/SectionLabel';
import React from 'react';
import { Container } from '../layout/Container';

export interface TechStackItem {
  title: string;
  description: string;
}

export const TECHNOLOGIES_DATA: TechStackItem[] = [
  {
    title: 'iOS',
    description: "Swift development for native iOS apps.",
  },
  {
    title: 'Android',
    description: "Kotlin for native Android app development.",
  },
  {
    title: 'Cross-platform',
    description: "Shared app code where platform needs and scope align.",
  },
  {
    title: 'Backend & APIs',
    description: "Application APIs, cloud services and external integrations.",
  },
];

export const MobileAppTechnologiesSection: React.FC<{ backgroundImage?: string; items?: TechStackItem[]; subtitle?: string }> = ({ backgroundImage, items, subtitle }) => {
  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[#18529B] text-white overflow-hidden" style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : undefined}>
      {/* ============================================================== */}
      {/* DECORATIVE AMBIENT WATERMARK RINGS MATCHING Frame 2121455063   */}
      {/* ============================================================== */}
      {!backgroundImage && <>
      <div
        className="absolute -left-36 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-[70px] border-white/[0.04] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -right-36 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-[70px] border-white/[0.04] pointer-events-none"
        aria-hidden="true"
      />

      </>}
      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455063.png                          */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 space-y-3">
          <SectionLabel light labelKey="technologies" />

          <MainHeading headingKey="MobileAppTechnologiesSection" as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight" />

          <p className="text-base sm:text-lg text-white font-normal max-w-2xl mx-auto">
            {subtitle || "Chosen for what's right for your app, not what's trending."}
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): 4 CARDS IN A ROW             */}
        {/* Exactly matching Frame 2121455063.png                          */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto items-stretch">
          {(items || TECHNOLOGIES_DATA).map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[24px] p-6 lg:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.14)] flex flex-col justify-start transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-2xl lg:text-[26px] font-extrabold text-[#0B1528] tracking-tight mb-2">
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
      </Container>
    </section>
  );
};
