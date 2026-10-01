import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

export const AboutStatsGlobe: React.FC = () => {
  // Item 2 is active by default (matching Frame 2085665124.png)
  const [activeId, setActiveId] = useState('stat-2');
  const [mobileIndex, setMobileIndex] = useState(1);

  const stats = [
    {
      id: 'stat-1',
      title: 'Founded in 2018',
      desc: 'Established in Toronto with a commitment to engineering excellence, pragmatic cloud architecture, and zero-friction client collaboration.',
    },
    {
      id: 'stat-2',
      title: '50+ Products shipped worldwide',
      desc: 'Across mobile, web, enterprise, and AI platforms, delivering innovative solutions that drive business growth and operational excellence. Our expertise spans from intuitive mobile applications and dynamic web interfaces to robust enterprise systems and cutting-edge artificial intelligence integrations, ensuring comprehensive digital transformation for our clients.',
    },
    {
      id: 'stat-3',
      title: '95% Client Retention',
      desc: 'Long-term client partnerships built on radical transparency, sprint-by-sprint accountability, and dedicated engineering pods that scale seamlessly with business demands.',
    },
    {
      id: 'stat-4',
      title: 'Service Areas',
      desc: 'Serving enterprises, high-growth tech startups, and government entities across North America, Europe, and Asia with 24/7 delivery velocity and high-availability cloud infrastructure.',
    },
  ];

  const handleSelect = (id: string, index: number) => {
    setActiveId(id);
    setMobileIndex(index);
  };

  const nextStat = () => {
    const nextIdx = (mobileIndex + 1) % stats.length;
    setMobileIndex(nextIdx);
    setActiveId(stats[nextIdx].id);
  };

  const prevStat = () => {
    const prevIdx = (mobileIndex - 1 + stats.length) % stats.length;
    setMobileIndex(prevIdx);
    setActiveId(stats[prevIdx].id);
  };

  return (
    <section className="pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24 bg-white relative overflow-hidden">
      {/* Background ambient soft glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Stats List */}
          <div className="md:col-span-6 lg:col-span-6 space-y-6">
            {stats.map((stat, idx) => {
              const isActive = stat.id === activeId;

              return (
                <div
                  key={stat.id}
                  onClick={() => handleSelect(stat.id, idx)}
                  className="group cursor-pointer transition-all duration-300 flex items-start gap-4"
                >
                  {/* Left Vertical Indicator Bar matching Frame 2085665124.png */}
                  <div
                    className={`shrink-0 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-1.5 self-stretch bg-[#18529B] min-h-[48px]'
                        : 'w-1 h-5 bg-[#E2E8F0] mt-1 group-hover:bg-slate-300'
                    }`}
                  />

                  {/* Text Container */}
                  <div className="space-y-2.5 flex-1">
                    <h3
                      className={`text-lg sm:text-[19px] font-bold tracking-tight transition-colors duration-200 ${
                        isActive
                          ? 'text-[#18529B]'
                          : 'text-slate-900 group-hover:text-[#18529B]'
                      }`}
                    >
                      {stat.title}
                    </h3>

                    {/* Expanded detail copy matching screenshot */}
                    {isActive && (
                      <p className="text-sm sm:text-[15px] text-slate-700 font-normal leading-[1.7] tracking-[-0.005em] pt-1">
                        {stat.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Globe Map Image */}
          <div className="md:col-span-6 lg:col-span-6 flex items-center justify-center">
            <img
              src="/images/about-map.svg"
              alt="Global impact and client locations map"
              className="w-full max-w-[490px] lg:max-w-[510px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-6 max-w-sm mx-auto mt-10">
          {/* Globe map on mobile */}
          <div className="flex items-center justify-center">
            <img
              src="/images/about-map.svg"
              alt="Global impact and client locations map"
              className="w-full max-w-[360px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>

          {/* Header & Navigation */}
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Fact {mobileIndex + 1} of {stats.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevStat}
                aria-label="Previous fact"
                className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStat}
                aria-label="Next fact"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE CARD SHOWN ONE BY ONE */}
          <div className="bg-[#EFF4FA] rounded-3xl p-6 shadow-xs border border-blue-100 space-y-3 transition-all duration-300">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-6 bg-[#18529B] rounded-full" />
              <h3 className="text-base font-bold text-[#18529B]">
                {stats[mobileIndex].title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {stats[mobileIndex].desc}
            </p>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {stats.map((stat, idx) => (
              <button
                key={stat.id}
                onClick={() => {
                  setMobileIndex(idx);
                  setActiveId(stat.id);
                }}
                aria-label={`Go to ${stat.title}`}
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
