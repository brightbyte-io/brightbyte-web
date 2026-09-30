import React, { useState } from 'react';
import { Cpu, Gauge, PackageCheck, ChevronLeft, ChevronRight, Code2, Cloud, BarChart3 } from 'lucide-react';
import { Container } from '../layout/Container';

export const AboutHero: React.FC = () => {
  // Mobile index for screens below 768px ("show one by one")
  const [mobileFeatureIndex, setMobileFeatureIndex] = useState(0);

  const features = [
    {
      id: 'tech',
      title: 'Technology',
      desc: 'Modern tech stacks, scalable cloud architectures, and enterprise engineering standards.',
      icon: <Cpu className="w-5 h-5 text-[#18529B]" />,
    },
    {
      id: 'eff',
      title: 'Efficiency',
      desc: 'Agile 2-week sprint cycles, automated CI/CD pipelines, and zero downtime deployments.',
      icon: <Gauge className="w-5 h-5 text-[#18529B]" />,
    },
    {
      id: 'del',
      title: 'Delivered',
      desc: '99.8% on-time milestone delivery with complete intellectual property and source code ownership.',
      icon: <PackageCheck className="w-5 h-5 text-[#18529B]" />,
    },
  ];

  const nextFeature = () => {
    setMobileFeatureIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setMobileFeatureIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#F5F9FE] via-[#F8FBFE] to-white border-b border-slate-100 select-none">
      {/* Background ambient soft glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -top-12 right-0 w-[550px] h-[550px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* FOR ALL SCREENS >= 768px: SAME ROW SIDE-BY-SIDE SPLIT          */}
        {/* Exactly matching Frame 2121455182.png                          */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Eyebrow, Supporting Copy */}
          <div className="md:col-span-6 lg:col-span-6 space-y-6 lg:pr-4">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#18529B]">
              ABOUT US
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Built by developers.<br />
              Trusted by growing<br />
              businesses.
            </h1>

            <p className="text-base sm:text-lg lg:text-[17px] text-slate-500 font-normal leading-relaxed max-w-xl">
              Bright Byte Consulting began with a vision to deliver quality software quickly and affordably. Today, our diverse team provides tailored solutions to clients worldwide.
            </p>
          </div>

          {/* Right Column: Visual Composition matching Frame 2121455182.png */}
          <div className="md:col-span-6 lg:col-span-6 relative">
            <div className="relative w-full max-w-lg lg:max-w-xl mx-auto min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center justify-center">
              {/* 1. STYLIZED DOTTED DIGITAL WIREFRAME GLOBE IN BACKGROUND */}
              <div className="absolute top-0 right-4 sm:right-8 w-[280px] sm:w-[360px] lg:w-[420px] h-[280px] sm:h-[360px] lg:h-[420px] pointer-events-none opacity-45 -z-0">
                <svg viewBox="0 0 400 400" className="w-full h-full text-blue-400">
                  <defs>
                    <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.4" />
                      <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#18529B" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="200" cy="200" r="180" fill="url(#globeGlow)" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  <ellipse cx="200" cy="200" rx="180" ry="85" fill="none" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.5" />
                  <ellipse cx="200" cy="200" rx="85" ry="180" fill="none" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.5" />
                  <line x1="20" y1="200" x2="380" y2="200" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
                  <line x1="200" y1="20" x2="200" y2="380" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
                  {/* Dotted network nodes on globe */}
                  <circle cx="160" cy="140" r="3.5" fill="#18529B" />
                  <circle cx="250" cy="170" r="3.5" fill="#18529B" />
                  <circle cx="200" cy="240" r="3" fill="#18529B" />
                  <circle cx="130" cy="220" r="3" fill="#60A5FA" />
                  <circle cx="280" cy="120" r="3" fill="#60A5FA" />
                  <line x1="160" y1="140" x2="250" y2="170" stroke="#93C5FD" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="250" y1="170" x2="200" y2="240" stroke="#93C5FD" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              </div>

              {/* 2. DEVELOPER AT DESK IMAGE / COMPOSITE */}
              <div className="relative z-10 w-full overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=85"
                  alt="Software Engineer Developer at BrightByte Consulting"
                  className="w-full h-[340px] sm:h-[400px] lg:h-[440px] object-cover object-center rounded-3xl shadow-xl shadow-blue-950/10 border border-white/80"
                  loading="lazy"
                />

                {/* Subtle gradient vignette to blend cleanly with light theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 3. DESK 3D GLOSSY TECH CUBES */}
              {/* Code cube </> */}
              <div className="absolute -bottom-4 left-6 z-20 w-11 h-11 rounded-xl bg-blue-500/85 backdrop-blur-md shadow-lg shadow-blue-500/30 border border-blue-300/60 flex items-center justify-center text-white transform hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>

              {/* Cloud DevOps cube */}
              <div className="absolute -bottom-3 right-20 z-20 w-11 h-11 rounded-xl bg-sky-500/85 backdrop-blur-md shadow-lg shadow-sky-500/30 border border-sky-300/60 flex items-center justify-center text-white transform hover:scale-110 transition-transform">
                <Cloud className="w-5 h-5" />
              </div>

              {/* Analytics bar chart cube */}
              <div className="absolute -bottom-4 right-6 z-20 w-11 h-11 rounded-xl bg-[#18529B]/90 backdrop-blur-md shadow-lg shadow-blue-900/30 border border-blue-400/50 flex items-center justify-center text-white transform hover:scale-110 transition-transform">
                <BarChart3 className="w-5 h-5" />
              </div>

              {/* 4. FLOATING GLASSMORPHISM CARD (TECHNOLOGY / EFFICIENCY / DELIVERED) */}
              <div className="hidden md:block absolute -top-4 right-0 lg:-right-4 z-20 bg-white/85 backdrop-blur-md border border-white/95 rounded-[26px] p-4 lg:p-5 shadow-[0_16px_36px_rgba(24,82,155,0.12)] space-y-2.5 min-w-[210px]">
                {features.map((feat) => (
                  <div
                    key={feat.id}
                    className="bg-white/95 rounded-2xl px-4 py-2.5 flex items-center gap-3 border border-slate-100 shadow-2xs hover:border-blue-200 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0">
                      {feat.icon}
                    </div>
                    <span className="text-sm font-bold text-[#18529B] tracking-tight">
                      {feat.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden mt-8 pt-8 border-t border-slate-100 space-y-4 max-w-sm mx-auto select-none">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Core Pillar {mobileFeatureIndex + 1} of {features.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevFeature}
                aria-label="Previous core pillar"
                className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextFeature}
                aria-label="Next core pillar"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE PILLAR CARD SHOWN ONE BY ONE */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center gap-4 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 shadow-2xs border border-blue-100">
              {features[mobileFeatureIndex].icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#18529B]">
                {features[mobileFeatureIndex].title}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {features[mobileFeatureIndex].desc}
              </p>
            </div>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {features.map((feat, idx) => (
              <button
                key={feat.id}
                onClick={() => setMobileFeatureIndex(idx)}
                aria-label={`Go to ${feat.title}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  mobileFeatureIndex === idx
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
