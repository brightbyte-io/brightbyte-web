import React, { useState } from 'react';
import { Container } from '../layout/Container';

export const AboutStatsGlobe: React.FC = () => {
  // Item 2 is active by default (matching Frame 2085665124.png)
  const [activeId, setActiveId] = useState('stat-2');

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

  return (
    <section className="pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24 bg-white relative overflow-hidden">
      {/* Background ambient soft glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Stats List (shown on all screens as in larger screens) */}
          <div className="md:col-span-6 lg:col-span-6 space-y-6">
            {stats.map((stat) => {
              const isActive = stat.id === activeId;

              return (
                <div
                  key={stat.id}
                  onClick={() => setActiveId(stat.id)}
                  className="group cursor-pointer transition-all duration-300 flex items-start gap-4"
                >
                  {/* Left Vertical Indicator Bar matching screenshot */}
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
              className="w-full max-w-[420px] sm:max-w-[490px] lg:max-w-[510px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
