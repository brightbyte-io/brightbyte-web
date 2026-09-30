import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Folder, FileCode, Layers, Terminal, Sparkles, Smartphone } from 'lucide-react';
import { Container } from '../layout/Container';

export const ServicesHero: React.FC = () => {
  // Mobile index for screens below 768px ("show one by one")
  const [mobileStep, setMobileStep] = useState(0);

  const mobileSlides = [
    {
      id: 'terminal',
      title: 'Automated Build Pipeline',
      tag: '01 / CODE & DEPLOY',
      desc: 'Type-safe React Native & modern architecture with CI/CD passing all quality checks.',
    },
    {
      id: 'wireframes',
      title: 'Mobile & UI Architecture',
      tag: '02 / USER EXPERIENCE',
      desc: 'High-fidelity wireframes, consumer-grade ergonomics, and responsive multi-platform layouts.',
    },
    {
      id: 'services',
      title: 'End-to-End Delivery Stack',
      tag: '03 / SCALE & OPS',
      desc: 'From Android apps to AI integrations, DevOps pipelines, ERP systems, and hardware sourcing.',
    },
  ];

  const nextStep = () => setMobileStep((prev) => (prev + 1) % mobileSlides.length);
  const prevStep = () => setMobileStep((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#F5F9FE] via-[#F8FBFE] to-white border-b border-slate-100 select-none">
      {/* Background ambient soft glows */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -top-12 right-0 w-[550px] h-[550px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* FOR ALL SCREENS >= 768px: SAME ROW SIDE-BY-SIDE SPLIT          */}
        {/* Exactly matching Frame 2121455182 (1).png                      */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Eyebrow, Supporting Copy */}
          <div className="md:col-span-6 lg:col-span-6 space-y-6 lg:pr-4">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#18529B]">
              ABOUT US
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Everything your<br />product needs to<br />ship and scale.
            </h1>

            <p className="text-base sm:text-lg lg:text-[17px] text-slate-500 font-normal leading-relaxed max-w-xl">
              From Android apps to AI integrations, DevOps pipelines, ERP systems, and global hardware sourcing, all delivered by teams that specialize in them.
            </p>
          </div>

          {/* Right Column: Visual Composition matching Frame 2121455182 (1).png */}
          <div className="hidden md:block md:col-span-6 lg:col-span-6 relative">
            <div className="relative w-full max-w-xl mx-auto min-h-[380px] lg:min-h-[440px] flex items-center justify-center">
              {/* 1. BACKGROUND SMARTPHONE WIREFRAME SCREENS */}
              <div className="absolute inset-0 flex items-center justify-end pr-2 pointer-events-none overflow-hidden opacity-90">
                <svg
                  viewBox="0 0 520 340"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto max-h-[380px]"
                >
                  {/* Phone Screen 1 (Left background) */}
                  <g opacity="0.75">
                    <rect x="50" y="20" width="130" height="270" rx="20" fill="white" stroke="#CBD5E1" strokeWidth="1.8" />
                    {/* Speaker notch */}
                    <rect x="95" y="28" width="40" height="4" rx="2" fill="#E2E8F0" />
                    {/* Header placeholder */}
                    <rect x="65" y="44" width="70" height="8" rx="4" fill="#F1F5F9" />
                    {/* Card box */}
                    <rect x="65" y="62" width="100" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                    <rect x="65" y="205" width="100" height="16" rx="8" fill="#E2E8F0" />
                  </g>

                  {/* Phone Screen 2 (Middle background) */}
                  <g opacity="0.85">
                    <rect x="170" y="10" width="135" height="280" rx="22" fill="white" stroke="#CBD5E1" strokeWidth="1.8" />
                    {/* Speaker notch */}
                    <rect x="215" y="18" width="45" height="4" rx="2" fill="#E2E8F0" />
                    {/* Header line + toggle switch */}
                    <rect x="185" y="34" width="50" height="7" rx="3.5" fill="#E2E8F0" />
                    <circle cx="285" cy="37" r="5" fill="#94A3B8" />
                    {/* Big app content card */}
                    <rect x="185" y="52" width="105" height="110" rx="14" fill="#E2E8F0" opacity="0.5" />
                    {/* Blue pill accent */}
                    <rect x="185" y="172" width="75" height="14" rx="7" fill="#BFDBFE" opacity="0.8" />
                    {/* 3 circular avatar icons */}
                    <circle cx="200" cy="202" r="6" fill="#CBD5E1" />
                    <circle cx="222" cy="202" r="6" fill="#CBD5E1" />
                    <circle cx="244" cy="202" r="6" fill="#CBD5E1" />
                  </g>

                  {/* Phone Screen 3 (Right background) */}
                  <g opacity="0.75">
                    <rect x="295" y="10" width="135" height="280" rx="22" fill="white" stroke="#CBD5E1" strokeWidth="1.8" />
                    <rect x="340" y="18" width="45" height="4" rx="2" fill="#E2E8F0" />
                    <rect x="310" y="34" width="45" height="7" rx="3.5" fill="#E2E8F0" />
                    <circle cx="410" cy="37" r="5" fill="#94A3B8" />
                    {/* Text block placeholder */}
                    <rect x="310" y="55" width="105" height="60" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                    {/* 3 circular icons */}
                    <circle cx="325" cy="132" r="6" fill="#CBD5E1" />
                    <circle cx="347" cy="132" r="6" fill="#CBD5E1" />
                    <circle cx="369" cy="132" r="6" fill="#CBD5E1" />
                    {/* Blue primary action button */}
                    <rect x="310" y="152" width="105" height="20" rx="10" fill="#93C5FD" opacity="0.7" />
                    <rect x="310" y="182" width="105" height="20" rx="10" fill="#E2E8F0" opacity="0.6" />
                  </g>

                  {/* Phone Screen 4 (Far right flank) */}
                  <g opacity="0.5">
                    <rect x="420" y="12" width="100" height="270" rx="20" fill="white" stroke="#CBD5E1" strokeWidth="1.8" />
                    <circle cx="435" cy="90" r="5" fill="#CBD5E1" />
                    <circle cx="452" cy="90" r="5" fill="#CBD5E1" />
                    <circle cx="469" cy="90" r="5" fill="#CBD5E1" />
                  </g>

                  {/* SWOOPING BLUE WAVE PATH MATCHING Frame 2121455182 (1).png */}
                  <path
                    d="M245 155C270 155 285 110 320 60C350 15 375 140 405 130C435 120 460 -10 520 15"
                    stroke="#18529B"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Subtle wave gradient shadow below line */}
                  <path
                    d="M245 155C270 155 285 110 320 60C350 15 375 140 405 130C435 120 460 -10 520 15 L520 300 L245 300 Z"
                    fill="url(#waveFillGradient)"
                    opacity="0.08"
                  />

                  <defs>
                    <linearGradient id="waveFillGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#18529B" />
                      <stop offset="100%" stopColor="#18529B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* 2. FOREGROUND DARK CODE TERMINAL WINDOW */}
              <div className="relative z-20 w-[310px] sm:w-[335px] bg-[#1E293B] rounded-2xl shadow-2xl border border-slate-700/60 overflow-hidden text-left -ml-16 sm:-ml-24 mt-8">
                {/* Window title bar with 3 dots */}
                <div className="px-3.5 py-2.5 bg-[#172033] border-b border-slate-700/50 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>

                {/* Window body split into sidebar and editor */}
                <div className="flex">
                  {/* Left Sidebar */}
                  <div className="w-[95px] bg-[#172033]/70 p-2.5 text-[11px] font-mono text-slate-400 space-y-2 border-r border-slate-700/40 select-none">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Folder className="w-3 h-3 text-[#38BDF8]" />
                      <span>components</span>
                    </div>
                    <div className="flex items-center gap-1.5 pl-1.5">
                      <FileCode className="w-3 h-3 text-slate-500" />
                      <span>pages</span>
                    </div>
                    <div className="flex items-center gap-1.5 pl-1.5">
                      <FileCode className="w-3 h-3 text-slate-500" />
                      <span>services</span>
                    </div>
                    <div className="flex items-center gap-1.5 pl-1.5">
                      <FileCode className="w-3 h-3 text-slate-500" />
                      <span>utils</span>
                    </div>
                    <div className="flex items-center gap-1.5 pl-1.5">
                      <FileCode className="w-3 h-3 text-slate-500" />
                      <span>styles</span>
                    </div>
                  </div>

                  {/* Right Code Editor Pane */}
                  <div className="flex-1 p-3 text-[11px] font-mono leading-relaxed text-slate-200 select-none">
                    <div className="text-emerald-400 font-semibold mb-1">// Build feature</div>
                    <div className="text-slate-300">
                      <span className="text-[#38BDF8]">const</span> Feature = () =&gt; &#123;
                    </div>
                    <div className="pl-3 text-slate-400">return (</div>
                    <div className="pl-6 text-[#38BDF8]">&lt;View&gt;</div>
                    <div className="pl-9 text-blue-300">&lt;Header /&gt;</div>
                    <div className="pl-9 text-blue-300">&lt;Card /&gt;</div>
                    <div className="pl-9 text-blue-300">&lt;Button /&gt;</div>
                    <div className="pl-6 text-[#38BDF8]">&lt;/View&gt;</div>
                    <div className="pl-3 text-slate-400">);</div>
                    <div className="text-slate-300">&#125;;</div>
                  </div>
                </div>

                {/* 3. FLOATING "BUILD SUCCESSFUL" TOAST NOTIFICATION */}
                <div className="absolute -bottom-1 -left-2 sm:left-4 z-30 translate-y-1/2 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-3 min-w-[210px]">
                  <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                      Build successful
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      All checks passed
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. SOFT REFLECTION SHADOW UNDERNEATH */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-5 bg-slate-400/25 blur-lg rounded-full pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-6 pt-6 select-none max-w-sm mx-auto">
          {/* Mobile Stepper Header with Cursor Click Controls */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {mobileSlides[mobileStep].tag}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevStep}
                aria-label="Previous step"
                className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 active:scale-90 flex items-center justify-center transition-all cursor-pointer border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                aria-label="Next step"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] active:scale-90 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE STEP CARD SHOWN ONE BY ONE */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-4">
            {mobileStep === 0 && (
              <div className="space-y-4">
                {/* Code Terminal preview for mobile */}
                <div className="bg-[#1E293B] rounded-2xl p-4 shadow-md text-left text-xs font-mono text-slate-200">
                  <div className="flex items-center gap-1.5 pb-2.5 border-b border-slate-700/60 mb-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
                    <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span className="text-[10px] text-slate-400 pl-2">Feature.tsx</span>
                  </div>
                  <div className="text-emerald-400">// Build feature</div>
                  <div className="text-slate-300">
                    <span className="text-[#38BDF8]">const</span> Feature = () =&gt; &#123;
                  </div>
                  <div className="pl-3 text-[#38BDF8]">&lt;View&gt;&lt;Header /&gt;&lt;/View&gt;</div>
                  <div className="text-slate-300">&#125;;</div>
                </div>

                {/* Build successful notification */}
                <div className="bg-[#F8FAFD] rounded-2xl p-3.5 border border-blue-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Build successful</div>
                    <div className="text-xs text-slate-500">All checks passed</div>
                  </div>
                </div>
              </div>
            )}

            {mobileStep === 1 && (
              <div className="space-y-3 text-center py-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#18529B] flex items-center justify-center mx-auto">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Wireframe to Scaled App</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Interactive multi-platform UI architectures designed for high retention, lightning-fast rendering, and native device performance.
                </p>
              </div>
            )}

            {mobileStep === 2 && (
              <div className="space-y-3 text-center py-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#18529B] flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Full Spectrum Delivery</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mobile apps, AI integrations, DevOps infrastructure, ERP migrations, and global hardware sourcing teams.
                </p>
              </div>
            )}

            <div>
              <h4 className="font-bold text-slate-900 text-sm">{mobileSlides[mobileStep].title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-1">
                {mobileSlides[mobileStep].desc}
              </p>
            </div>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5">
            {mobileSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setMobileStep(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  mobileStep === idx
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
