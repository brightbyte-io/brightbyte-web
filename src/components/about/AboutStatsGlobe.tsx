import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

// Digital Honeycomb Hexagonal Continent Globe matching Frame 2085665124.png
const DigitalMosaicGlobe: React.FC = () => (
  <div className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-[1.15/1] mx-auto flex items-center justify-center select-none">
    <svg
      viewBox="0 0 500 440"
      className="w-full h-full drop-shadow-md overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft diffused globe glow */}
        <radialGradient id="globeAtmosphere" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#1E40AF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
        </radialGradient>

        {/* Ocean sphere gradient */}
        <radialGradient id="oceanGrad" cx="42%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#256EB5" />
          <stop offset="55%" stopColor="#18529B" />
          <stop offset="85%" stopColor="#10386C" />
          <stop offset="100%" stopColor="#0B2548" />
        </radialGradient>

        {/* Ambient background ripples */}
        <radialGradient id="rippleGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#E0EDFB" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#EFF4FA" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ============================================================== */}
      {/* 1. AMBIENT CONCENTRIC RIPPLE RINGS IN BACKGROUND               */}
      {/* ============================================================== */}
      <circle cx="250" cy="220" r="215" fill="none" stroke="#DCE8F6" strokeWidth="1" strokeDasharray="4 6" opacity="0.8" />
      <circle cx="250" cy="220" r="185" fill="none" stroke="#CFE0F4" strokeWidth="1.2" opacity="0.6" />
      <circle cx="250" cy="220" r="160" fill="url(#globeAtmosphere)" />

      {/* ============================================================== */}
      {/* 2. THE BLUE OCEAN GLOBE SPHERE                                 */}
      {/* ============================================================== */}
      {/* Shadow behind globe */}
      <circle cx="250" cy="226" r="138" fill="#0B2344" opacity="0.22" filter="blur(10px)" />
      {/* Sphere body */}
      <circle cx="250" cy="220" r="136" fill="url(#oceanGrad)" />

      {/* Spherical inner edge shadow/depth */}
      <circle
        cx="250"
        cy="220"
        r="135"
        fill="none"
        stroke="#091C36"
        strokeWidth="4"
        opacity="0.3"
      />

      {/* ============================================================== */}
      {/* 3. DIGITAL HONEYCOMB HEXAGONAL CONTINENTS (North/South America & Europe/Africa/Asia) */}
      {/* ============================================================== */}
      <g fill="#EAF3FD" opacity="0.92">
        {/* Helper hexagon macro markers */}
        {/* NORTH AMERICA (Left Upper Hemisphere) */}
        {/* Alaska & Northern Canada */}
        <circle cx="168" cy="132" r="3.2" />
        <circle cx="176" cy="132" r="3.2" />
        <circle cx="184" cy="132" r="3.2" />
        <circle cx="192" cy="134" r="3.2" fill="#BAE6FD" />
        <circle cx="172" cy="139" r="3.2" />
        <circle cx="180" cy="139" r="3.2" />
        <circle cx="188" cy="139" r="3.2" />
        <circle cx="196" cy="141" r="3.2" />
        <circle cx="204" cy="143" r="3.2" fill="#BAE6FD" />
        {/* Canada & Greenland */}
        <circle cx="164" cy="146" r="3.2" />
        <circle cx="172" cy="146" r="3.2" />
        <circle cx="180" cy="146" r="3.2" />
        <circle cx="188" cy="146" r="3.2" />
        <circle cx="196" cy="148" r="3.2" />
        <circle cx="204" cy="150" r="3.2" />
        <circle cx="212" cy="150" r="3.2" fill="#BAE6FD" />
        <circle cx="220" cy="144" r="3.2" />
        <circle cx="228" cy="146" r="3.2" />
        {/* USA Midwest & East Coast */}
        <circle cx="160" cy="153" r="3.2" />
        <circle cx="168" cy="153" r="3.2" />
        <circle cx="176" cy="153" r="3.2" />
        <circle cx="184" cy="153" r="3.2" />
        <circle cx="192" cy="155" r="3.2" />
        <circle cx="200" cy="157" r="3.2" fill="#FFFFFF" />
        <circle cx="208" cy="157" r="3.2" />
        <circle cx="216" cy="155" r="3.2" />
        {/* Southern USA & Florida */}
        <circle cx="168" cy="160" r="3.2" />
        <circle cx="176" cy="160" r="3.2" />
        <circle cx="184" cy="160" r="3.2" />
        <circle cx="192" cy="162" r="3.2" />
        <circle cx="200" cy="164" r="3.2" />
        <circle cx="208" cy="164" r="3.2" />
        {/* Mexico & Central America */}
        <circle cx="176" cy="167" r="3.2" />
        <circle cx="184" cy="167" r="3.2" />
        <circle cx="192" cy="169" r="3.2" />
        <circle cx="180" cy="174" r="3.2" />
        <circle cx="188" cy="176" r="3.2" />
        <circle cx="184" cy="181" r="3.2" />
        <circle cx="192" cy="183" r="3.2" />
        <circle cx="196" cy="190" r="3" />
        <circle cx="202" cy="195" r="3" fill="#BAE6FD" />

        {/* SOUTH AMERICA */}
        {/* Colombia / Venezuela */}
        <circle cx="206" cy="204" r="3.2" />
        <circle cx="214" cy="204" r="3.2" />
        <circle cx="222" cy="206" r="3.2" />
        <circle cx="202" cy="211" r="3.2" />
        <circle cx="210" cy="211" r="3.2" />
        <circle cx="218" cy="213" r="3.2" />
        <circle cx="226" cy="213" r="3.2" fill="#FFFFFF" />
        {/* Brazil / Amazon */}
        <circle cx="206" cy="218" r="3.2" />
        <circle cx="214" cy="218" r="3.2" />
        <circle cx="222" cy="220" r="3.2" />
        <circle cx="230" cy="220" r="3.2" />
        <circle cx="238" cy="222" r="3.2" />
        <circle cx="244" cy="224" r="3.2" fill="#BAE6FD" />
        <circle cx="210" cy="225" r="3.2" />
        <circle cx="218" cy="225" r="3.2" />
        <circle cx="226" cy="227" r="3.2" />
        <circle cx="234" cy="227" r="3.2" />
        <circle cx="242" cy="229" r="3.2" />
        <circle cx="214" cy="232" r="3.2" />
        <circle cx="222" cy="232" r="3.2" />
        <circle cx="230" cy="234" r="3.2" />
        <circle cx="238" cy="236" r="3.2" />
        {/* Peru / Bolivia / Argentina */}
        <circle cx="210" cy="239" r="3.2" />
        <circle cx="218" cy="239" r="3.2" />
        <circle cx="226" cy="241" r="3.2" />
        <circle cx="234" cy="243" r="3.2" />
        <circle cx="214" cy="246" r="3.2" />
        <circle cx="222" cy="246" r="3.2" />
        <circle cx="230" cy="248" r="3.2" />
        <circle cx="218" cy="253" r="3.2" />
        <circle cx="226" cy="253" r="3.2" />
        <circle cx="220" cy="260" r="3" />
        <circle cx="226" cy="262" r="3" />
        <circle cx="222" cy="267" r="2.8" />
        <circle cx="224" cy="274" r="2.6" />

        {/* EUROPE & SCANDINAVIA */}
        <circle cx="274" cy="126" r="3.2" fill="#BAE6FD" />
        <circle cx="282" cy="126" r="3.2" />
        <circle cx="270" cy="133" r="3.2" />
        <circle cx="278" cy="133" r="3.2" />
        <circle cx="286" cy="133" r="3.2" />
        <circle cx="294" cy="133" r="3.2" />
        <circle cx="266" cy="140" r="3.2" />
        <circle cx="274" cy="140" r="3.2" />
        <circle cx="282" cy="140" r="3.2" />
        <circle cx="290" cy="140" r="3.2" />
        <circle cx="298" cy="140" r="3.2" />
        <circle cx="270" cy="147" r="3.2" />
        <circle cx="278" cy="147" r="3.2" />
        <circle cx="286" cy="147" r="3.2" />
        <circle cx="294" cy="147" r="3.2" />
        <circle cx="302" cy="147" r="3.2" />
        <circle cx="310" cy="147" r="3.2" />

        {/* AFRICA */}
        <circle cx="262" cy="158" r="3.2" />
        <circle cx="270" cy="158" r="3.2" />
        <circle cx="278" cy="158" r="3.2" />
        <circle cx="286" cy="160" r="3.2" />
        <circle cx="294" cy="162" r="3.2" />
        <circle cx="302" cy="162" r="3.2" />
        {/* Sahara & West Africa */}
        <circle cx="258" cy="165" r="3.2" />
        <circle cx="266" cy="165" r="3.2" />
        <circle cx="274" cy="165" r="3.2" />
        <circle cx="282" cy="167" r="3.2" />
        <circle cx="290" cy="169" r="3.2" />
        <circle cx="298" cy="169" r="3.2" />
        <circle cx="306" cy="169" r="3.2" />
        <circle cx="314" cy="171" r="3.2" fill="#BAE6FD" />
        <circle cx="260" cy="172" r="3.2" />
        <circle cx="268" cy="172" r="3.2" />
        <circle cx="276" cy="174" r="3.2" />
        <circle cx="284" cy="176" r="3.2" />
        <circle cx="292" cy="176" r="3.2" />
        <circle cx="300" cy="176" r="3.2" />
        <circle cx="308" cy="178" r="3.2" />
        {/* Central / East Africa */}
        <circle cx="270" cy="179" r="3.2" />
        <circle cx="278" cy="181" r="3.2" />
        <circle cx="286" cy="183" r="3.2" />
        <circle cx="294" cy="183" r="3.2" />
        <circle cx="302" cy="185" r="3.2" />
        <circle cx="310" cy="185" r="3.2" />
        <circle cx="274" cy="186" r="3.2" />
        <circle cx="282" cy="188" r="3.2" />
        <circle cx="290" cy="190" r="3.2" />
        <circle cx="298" cy="192" r="3.2" />
        <circle cx="306" cy="192" r="3.2" />
        {/* Southern Africa */}
        <circle cx="278" cy="195" r="3.2" />
        <circle cx="286" cy="197" r="3.2" />
        <circle cx="294" cy="199" r="3.2" />
        <circle cx="302" cy="201" r="3.2" />
        <circle cx="282" cy="204" r="3.2" />
        <circle cx="290" cy="206" r="3.2" />
        <circle cx="298" cy="208" r="3.2" />
        <circle cx="286" cy="213" r="3.2" />
        <circle cx="294" cy="215" r="3.2" />
        <circle cx="290" cy="222" r="3" />
        <circle cx="296" cy="224" r="2.8" />

        {/* ASIA & MIDDLE EAST (Right Upper Side) */}
        <circle cx="320" cy="130" r="3.2" />
        <circle cx="328" cy="130" r="3.2" />
        <circle cx="336" cy="132" r="3.2" />
        <circle cx="344" cy="134" r="3.2" />
        <circle cx="352" cy="136" r="3.2" />
        <circle cx="316" cy="137" r="3.2" />
        <circle cx="324" cy="137" r="3.2" />
        <circle cx="332" cy="139" r="3.2" />
        <circle cx="340" cy="141" r="3.2" />
        <circle cx="348" cy="143" r="3.2" />
        <circle cx="356" cy="145" r="3.2" />
        <circle cx="318" cy="144" r="3.2" />
        <circle cx="326" cy="146" r="3.2" />
        <circle cx="334" cy="148" r="3.2" />
        <circle cx="342" cy="150" r="3.2" />
        <circle cx="350" cy="152" r="3.2" />
        <circle cx="358" cy="154" r="3.2" fill="#BAE6FD" />
        {/* India & South Asia */}
        <circle cx="326" cy="153" r="3.2" />
        <circle cx="334" cy="155" r="3.2" />
        <circle cx="342" cy="157" r="3.2" />
        <circle cx="350" cy="159" r="3.2" />
        <circle cx="330" cy="162" r="3.2" />
        <circle cx="338" cy="164" r="3.2" />
        <circle cx="346" cy="166" r="3.2" />
        <circle cx="334" cy="171" r="3.2" />
        <circle cx="340" cy="173" r="3.2" />
        <circle cx="336" cy="180" r="3" />
      </g>
    </svg>
  </div>
);

export const AboutStatsGlobe: React.FC = () => {
  // Item 1 is active by default (matching Frame 2085665124.png)
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
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100 select-none">
      <Container>
        {/* ============================================================== */}
        {/* FOR ALL SCREENS >= 768px: SAME ROW SPLIT                       */}
        {/* Exactly matching Frame 2085665124.png                          */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Milestones List */}
          <div className="md:col-span-6 lg:col-span-6 space-y-6 lg:pr-4">
            {stats.map((stat, idx) => {
              const isActive = activeId === stat.id;

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

          {/* Right Column: Digital Honeycomb Globe in soft card */}
          <div className="md:col-span-6 lg:col-span-6">
            <div className="bg-[#EFF4FA] rounded-[32px] p-6 sm:p-8 lg:p-10 flex items-center justify-center border border-slate-100 shadow-xs">
              <DigitalMosaicGlobe />
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-6 max-w-sm mx-auto select-none">
          {/* Globe card on mobile */}
          <div className="bg-[#EFF4FA] rounded-[28px] p-4 flex items-center justify-center border border-slate-100 shadow-xs">
            <DigitalMosaicGlobe />
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
