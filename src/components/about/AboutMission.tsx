import React from 'react';
import { Container } from '../layout/Container';

export const AboutMission: React.FC = () => {
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

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white">
      {/* Background SVG from /images/about-mission-background.svg */}
      <img
        src="/images/about-mission-background.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none -z-0"
        draggable={false}
      />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exact typography matching Figma screenshot                      */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#18529B]">
            OUR MISSION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-950 tracking-tight leading-snug">
            Delivering quality technology, efficiently<br className="hidden sm:inline" /> and cost-effectively.
          </h2>
        </div>

        {/* ============================================================== */}
        {/* CONTENT GRID                                                   */}
        {/* Left: 4 feature cards | Right: CEO portrait + quote             */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 4 Clean White Rounded Feature Cards */}
          <div className="md:col-span-6 lg:col-span-6 space-y-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-[22px] p-5 sm:p-6 shadow-[0_4px_24px_rgba(24,82,155,0.06)] border border-slate-100/90 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(24,82,155,0.1)] transition-all duration-300 space-y-1.5"
              >
                <h3 className="text-base sm:text-[17px] font-bold text-slate-900 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Executive Portrait + Quote & Attribution */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-start lg:pl-3">
            <div className="w-full max-w-[430px] xl:max-w-[450px] space-y-4 sm:space-y-5">
              {/* CEO Portrait matching Figma screenshot */}
              <div className="overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-sm">
                <img
                  src="/images/about-mission-ceo.svg"
                  alt="CEO BrightByte Consulting"
                  className="w-full h-auto object-cover select-none"
                  loading="lazy"
                />
              </div>

              {/* CEO Quote & Attribution */}
              <div className="space-y-2 pt-1">
                <img
                  src="/images/quote-mark-icon.svg"
                  alt="Quote"
                  className="w-8 h-auto select-none"
                  loading="lazy"
                />
                <blockquote className="text-sm sm:text-[14.5px] font-bold text-slate-900 leading-snug tracking-tight">
                  “At Bright Byte, we prioritise client satisfaction through careful planning and precise execution. We are working towards a better future, one product at a time.”
                </blockquote>
                <p className="text-xs text-slate-500 font-normal mt-1">
                  - CEO BrightByte
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
