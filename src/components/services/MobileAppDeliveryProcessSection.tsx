import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

// Exact 3D Blue Pushpin matching "Silver Pin.D04.2k 1.svg" and "Frame 2121455183.png"
export const Exact3DBluePushPin: React.FC<{ className?: string }> = ({ className = 'w-12 h-13' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      {/* Ground contact shadow */}
      <radialGradient id="blueGroundShadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#0B132B" stopOpacity="0.32" />
        <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
      </radialGradient>

      {/* Bulbous body gradient */}
      <radialGradient id="blueBulbGrad" cx="42%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#76ADF2" />
        <stop offset="30%" stopColor="#3C84E0" />
        <stop offset="70%" stopColor="#1E5EBA" />
        <stop offset="100%" stopColor="#103A76" />
      </radialGradient>

      {/* Stem gradient */}
      <linearGradient id="blueStemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1B4F94" />
        <stop offset="28%" stopColor="#5B9CEE" />
        <stop offset="65%" stopColor="#2A6DC9" />
        <stop offset="100%" stopColor="#113B75" />
      </linearGradient>

      {/* Top Cap Face Gradient */}
      <radialGradient id="blueCapFaceGrad" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#6CAAF5" />
        <stop offset="45%" stopColor="#3B83DF" />
        <stop offset="85%" stopColor="#2467C4" />
        <stop offset="100%" stopColor="#1852A2" />
      </radialGradient>

      {/* Cap Edge Gradient */}
      <linearGradient id="blueCapEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#17488B" />
        <stop offset="50%" stopColor="#387ED9" />
        <stop offset="100%" stopColor="#0E3368" />
      </linearGradient>
    </defs>

    {/* Ground shadow under card contact */}
    <ellipse cx="48" cy="74" rx="14" ry="5" fill="url(#blueGroundShadow)" />

    {/* Steel needle tip entering card */}
    <path d="M44 60L42.5 67L45 61Z" fill="#3D5A7D" />
    <path d="M43.8 59L42.5 67L44.6 60Z" fill="#7593B5" />

    {/* Bulbous base sphere */}
    <path
      d="M34.5 48.5C33.5 56.5 40 64.5 49 63.5C57.5 62.5 62.5 54.5 60.5 46.5C59 40 50.5 37 43 39C37.5 40.5 35 44 34.5 48.5Z"
      fill="url(#blueBulbGrad)"
    />

    {/* Specular curved highlight on bulb */}
    <ellipse cx="42" cy="46" rx="5" ry="3" fill="#9AC5F8" fillOpacity="0.55" transform="rotate(-30 42 46)" />
    <circle cx="46" cy="43" r="1.5" fill="white" fillOpacity="0.6" />

    {/* Cylindrical neck / stem */}
    <path
      d="M44 40.5L53.5 28L63.5 34.5L54 47C50.5 45.5 47 43.5 44 40.5Z"
      fill="url(#blueStemGrad)"
    />

    {/* Collar / rim under cap */}
    <ellipse cx="58.5" cy="31" rx="8" ry="4.5" fill="#144280" transform="rotate(-32 58.5 31)" />

    {/* Cap side / thickness rim */}
    <path
      d="M51 27L54 22C54 22 66 14.5 72 23.5L69 28.5C63 20 51 27 51 27Z"
      fill="url(#blueCapEdgeGrad)"
    />

    {/* Top round flat cap disc */}
    <ellipse cx="61.5" cy="24.5" rx="12" ry="7.5" fill="url(#blueCapFaceGrad)" transform="rotate(-32 61.5 24.5)" />
    <ellipse cx="61.5" cy="24.5" rx="11.2" ry="6.8" stroke="#90C3FC" strokeWidth="0.8" fill="none" transform="rotate(-32 61.5 24.5)" />
  </svg>
);

// Exact 3D Silver Pushpin matching "Frame 2121455183.png"
export const Exact3DSilverPushPin: React.FC<{ className?: string }> = ({ className = 'w-12 h-13' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      {/* Ground contact shadow */}
      <radialGradient id="silverGroundShadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#0B132B" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
      </radialGradient>

      {/* Bulbous body gradient */}
      <radialGradient id="silverBulbGrad" cx="42%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="30%" stopColor="#CBD5E1" />
        <stop offset="70%" stopColor="#64748B" />
        <stop offset="100%" stopColor="#1E293B" />
      </radialGradient>

      {/* Stem gradient */}
      <linearGradient id="silverStemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="28%" stopColor="#F1F5F9" />
        <stop offset="65%" stopColor="#94A3B8" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>

      {/* Top Cap Face Gradient */}
      <radialGradient id="silverCapFaceGrad" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="45%" stopColor="#D5DEE8" />
        <stop offset="85%" stopColor="#8A9BAE" />
        <stop offset="100%" stopColor="#475569" />
      </radialGradient>

      {/* Cap Edge Gradient */}
      <linearGradient id="silverCapEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64748B" />
        <stop offset="50%" stopColor="#CBD5E1" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
    </defs>

    {/* Ground shadow */}
    <ellipse cx="48" cy="74" rx="14" ry="5" fill="url(#silverGroundShadow)" />

    {/* Needle tip */}
    <path d="M44 60L42.5 67L45 61Z" fill="#1E293B" />
    <path d="M43.8 59L42.5 67L44.6 60Z" fill="#475569" />

    {/* Bulbous base */}
    <path
      d="M34.5 48.5C33.5 56.5 40 64.5 49 63.5C57.5 62.5 62.5 54.5 60.5 46.5C59 40 50.5 37 43 39C37.5 40.5 35 44 34.5 48.5Z"
      fill="url(#silverBulbGrad)"
    />

    {/* Highlight */}
    <ellipse cx="42" cy="46" rx="5" ry="3" fill="#FFFFFF" fillOpacity="0.6" transform="rotate(-30 42 46)" />
    <circle cx="46" cy="43" r="1.5" fill="white" fillOpacity="0.7" />

    {/* Stem */}
    <path
      d="M44 40.5L53.5 28L63.5 34.5L54 47C50.5 45.5 47 43.5 44 40.5Z"
      fill="url(#silverStemGrad)"
    />

    {/* Collar */}
    <ellipse cx="58.5" cy="31" rx="8" ry="4.5" fill="#475569" transform="rotate(-32 58.5 31)" />

    {/* Cap edge */}
    <path
      d="M51 27L54 22C54 22 66 14.5 72 23.5L69 28.5C63 20 51 27 51 27Z"
      fill="url(#silverCapEdgeGrad)"
    />

    {/* Cap face */}
    <ellipse cx="61.5" cy="24.5" rx="12" ry="7.5" fill="url(#silverCapFaceGrad)" transform="rotate(-32 61.5 24.5)" />
    <ellipse cx="61.5" cy="24.5" rx="11.2" ry="6.8" stroke="#FFFFFF" strokeWidth="0.8" fill="none" transform="rotate(-32 61.5 24.5)" />
  </svg>
);

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
  bgColor: string;
  pinType: 'blue' | 'silver';
  pinPositionClass: string;
  cardRotationClass: string;
}

export const DELIVERY_PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Design',
    description:
      'Wireframes, user interfaces, and system architecture. All aligned before a single line of code is written.',
    bgColor: 'bg-[#FFF9DE]', // Soft Pastel Yellow matching Frame 2121455183.png
    pinType: 'blue',
    pinPositionClass: 'left-1/2 -translate-x-1/2 -top-5',
    cardRotationClass: 'rotate-[3.5deg]', // Slopes DOWN to the right
  },
  {
    step: '02',
    title: 'Development',
    description:
      'Agile sprints, regular check-ins, and clean code. You see real progress every week.',
    bgColor: 'bg-[#FEEBF0]', // Pastel Pink
    pinType: 'silver',
    pinPositionClass: 'left-1/2 -translate-x-1/2 -top-5',
    cardRotationClass: '-rotate-[2.5deg]', // Slopes UP to the right
  },
  {
    step: '03',
    title: 'Testing',
    description:
      'QA at every stage, not just the end. Bugs are found and fixed before they reach your users.',
    bgColor: 'bg-[#FFF9DE]', // Pastel Yellow
    pinType: 'blue',
    pinPositionClass: 'left-1/2 -translate-x-1/2 -top-5',
    cardRotationClass: 'rotate-[2deg]', // Slopes DOWN to the right
  },
  {
    step: '04',
    title: 'Deployment',
    description:
      'We ship, monitor, and stay on hand after launch. Going live is just the beginning.',
    bgColor: 'bg-[#EBF2FC]', // Pastel Blue
    pinType: 'silver',
    pinPositionClass: 'left-1/2 -translate-x-1/2 -top-5',
    cardRotationClass: '-rotate-[3.5deg]', // Slopes UP to the right
  },
];

export const MobileAppDeliveryProcessSection: React.FC = () => {
  // Mobile active index for screens below 768px ("only in bleow 768 show one by one")
  const [mobileStep, setMobileStep] = useState(0);

  const nextStep = () => {
    setMobileStep((prev) => (prev + 1) % DELIVERY_PROCESS_STEPS.length);
  };

  const prevStep = () => {
    setMobileStep((prev) => (prev - 1 + DELIVERY_PROCESS_STEPS.length) % DELIVERY_PROCESS_STEPS.length);
  };

  const currentStep = DELIVERY_PROCESS_STEPS[mobileStep];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#FAFCFF] border-b border-slate-100 overflow-hidden">
      {/* ============================================================== */}
      {/* BLUEPRINT GRID BACKGROUND                                      */}
      {/* ============================================================== */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(to right, #CBD5E1 1px, transparent 1px),
            linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#18529B]">
            WHAT WE DO
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
            How we deliver every project
          </h2>

          <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            The same four-step process. Every project, every engagement, every time.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): 4 CARDS ROW                  */}
        {/* ARROWS LOCATED COMPLETELY IN THE OPEN GAP BETWEEN CARDS        */}
        {/* "add spacing between card as much that arrow from end of card  */}
        {/* not on card" matching Frame 2121455183.png                     */}
        {/* ============================================================== */}
        <div className="hidden md:flex flex-row justify-center items-center max-w-6xl mx-auto pt-6 pb-6">
          {/* Card 01 - Design */}
          <div className="relative w-[216px] lg:w-[224px] shrink-0">
            <div
              className={`relative ${DELIVERY_PROCESS_STEPS[0].bgColor} rounded-[26px] p-5 pt-6 pb-5 shadow-[0_14px_32px_rgba(0,0,0,0.07),0_3px_10px_rgba(0,0,0,0.02)] border border-black/[0.02] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_38px_rgba(0,0,0,0.1)] flex flex-col justify-start h-auto ${DELIVERY_PROCESS_STEPS[0].cardRotationClass}`}
            >
              <div
                className={`absolute ${DELIVERY_PROCESS_STEPS[0].pinPositionClass} z-20 pointer-events-none drop-shadow-md`}
              >
                <Exact3DBluePushPin className="w-12 h-13" />
              </div>

              <div className="w-8 h-8 rounded-full border-[2.2px] border-[#18529B] text-[#18529B] flex items-center justify-center font-bold text-xs mb-3.5 shrink-0 bg-transparent">
                01
              </div>

              <h3 className="text-xl lg:text-[22px] font-extrabold text-[#0B1528] tracking-tight mb-2">
                {DELIVERY_PROCESS_STEPS[0].title}
              </h3>

              <p className="text-[13px] text-slate-600 leading-[1.55] font-normal m-0 p-0">
                {DELIVERY_PROCESS_STEPS[0].description}
              </p>
            </div>
          </div>

          {/* OPEN GAP 1 -> 2: Arrow bridges between cards completely in the gap (NOT ON CARD) */}
          <div className="w-10 lg:w-14 h-[250px] flex items-end pb-8 justify-center shrink-0 pointer-events-none">
            <svg width="44" height="20" viewBox="0 0 44 20" fill="none">
              <path
                d="M 2 5 C 16 16, 26 16, 36 10"
                stroke="#334155"
                strokeWidth="2.2"
                strokeDasharray="4 3.5"
                strokeLinecap="round"
              />
              <polygon points="34,6 42,10 35,15" fill="#334155" />
            </svg>
          </div>

          {/* Card 02 - Development */}
          <div className="relative w-[216px] lg:w-[224px] shrink-0">
            <div
              className={`relative ${DELIVERY_PROCESS_STEPS[1].bgColor} rounded-[26px] p-5 pt-6 pb-5 shadow-[0_14px_32px_rgba(0,0,0,0.07),0_3px_10px_rgba(0,0,0,0.02)] border border-black/[0.02] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_38px_rgba(0,0,0,0.1)] flex flex-col justify-start h-auto ${DELIVERY_PROCESS_STEPS[1].cardRotationClass}`}
            >
              <div
                className={`absolute ${DELIVERY_PROCESS_STEPS[1].pinPositionClass} z-20 pointer-events-none drop-shadow-md`}
              >
                <Exact3DSilverPushPin className="w-12 h-13" />
              </div>

              <div className="w-8 h-8 rounded-full border-[2.2px] border-[#18529B] text-[#18529B] flex items-center justify-center font-bold text-xs mb-3.5 shrink-0 bg-transparent">
                02
              </div>

              <h3 className="text-xl lg:text-[22px] font-extrabold text-[#0B1528] tracking-tight mb-2">
                {DELIVERY_PROCESS_STEPS[1].title}
              </h3>

              <p className="text-[13px] text-slate-600 leading-[1.55] font-normal m-0 p-0">
                {DELIVERY_PROCESS_STEPS[1].description}
              </p>
            </div>
          </div>

          {/* OPEN GAP 2 -> 3: Arrow bridges between cards completely in the gap (NOT ON CARD) */}
          <div className="w-10 lg:w-14 h-[250px] flex items-start pt-10 justify-center shrink-0 pointer-events-none">
            <svg width="44" height="20" viewBox="0 0 44 20" fill="none">
              <path
                d="M 2 15 C 16 4, 26 4, 36 10"
                stroke="#334155"
                strokeWidth="2.2"
                strokeDasharray="4 3.5"
                strokeLinecap="round"
              />
              <polygon points="34,6 42,10 35,15" fill="#334155" />
            </svg>
          </div>

          {/* Card 03 - Testing */}
          <div className="relative w-[216px] lg:w-[224px] shrink-0">
            <div
              className={`relative ${DELIVERY_PROCESS_STEPS[2].bgColor} rounded-[26px] p-5 pt-6 pb-5 shadow-[0_14px_32px_rgba(0,0,0,0.07),0_3px_10px_rgba(0,0,0,0.02)] border border-black/[0.02] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_38px_rgba(0,0,0,0.1)] flex flex-col justify-start h-auto ${DELIVERY_PROCESS_STEPS[2].cardRotationClass}`}
            >
              <div
                className={`absolute ${DELIVERY_PROCESS_STEPS[2].pinPositionClass} z-20 pointer-events-none drop-shadow-md`}
              >
                <Exact3DBluePushPin className="w-12 h-13" />
              </div>

              <div className="w-8 h-8 rounded-full border-[2.2px] border-[#18529B] text-[#18529B] flex items-center justify-center font-bold text-xs mb-3.5 shrink-0 bg-transparent">
                03
              </div>

              <h3 className="text-xl lg:text-[22px] font-extrabold text-[#0B1528] tracking-tight mb-2">
                {DELIVERY_PROCESS_STEPS[2].title}
              </h3>

              <p className="text-[13px] text-slate-600 leading-[1.55] font-normal m-0 p-0">
                {DELIVERY_PROCESS_STEPS[2].description}
              </p>
            </div>
          </div>

          {/* OPEN GAP 3 -> 4: Arrow bridges between cards completely in the gap (NOT ON CARD) */}
          <div className="w-10 lg:w-14 h-[250px] flex items-end pb-8 justify-center shrink-0 pointer-events-none">
            <svg width="44" height="20" viewBox="0 0 44 20" fill="none">
              <path
                d="M 2 5 C 16 16, 26 16, 36 10"
                stroke="#334155"
                strokeWidth="2.2"
                strokeDasharray="4 3.5"
                strokeLinecap="round"
              />
              <polygon points="34,6 42,10 35,15" fill="#334155" />
            </svg>
          </div>

          {/* Card 04 - Deployment */}
          <div className="relative w-[216px] lg:w-[224px] shrink-0">
            <div
              className={`relative ${DELIVERY_PROCESS_STEPS[3].bgColor} rounded-[26px] p-5 pt-6 pb-5 shadow-[0_14px_32px_rgba(0,0,0,0.07),0_3px_10px_rgba(0,0,0,0.02)] border border-black/[0.02] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_38px_rgba(0,0,0,0.1)] flex flex-col justify-start h-auto ${DELIVERY_PROCESS_STEPS[3].cardRotationClass}`}
            >
              <div
                className={`absolute ${DELIVERY_PROCESS_STEPS[3].pinPositionClass} z-20 pointer-events-none drop-shadow-md`}
              >
                <Exact3DSilverPushPin className="w-12 h-13" />
              </div>

              <div className="w-8 h-8 rounded-full border-[2.2px] border-[#18529B] text-[#18529B] flex items-center justify-center font-bold text-xs mb-3.5 shrink-0 bg-transparent">
                04
              </div>

              <h3 className="text-xl lg:text-[22px] font-extrabold text-[#0B1528] tracking-tight mb-2">
                {DELIVERY_PROCESS_STEPS[3].title}
              </h3>

              <p className="text-[13px] text-slate-600 leading-[1.55] font-normal m-0 p-0">
                {DELIVERY_PROCESS_STEPS[3].description}
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-5 max-w-[230px] mx-auto pt-4">
          {/* Stepper Header with Cursor Click Controls */}
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Step 0{mobileStep + 1} of 0{DELIVERY_PROCESS_STEPS.length}
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

          {/* ACTIVE PINNED STICKY CARD SHOWN ONE BY ONE - NO EXTRA BOTTOM SPACE */}
          <div className="relative pt-6">
            <div
              className={`relative ${currentStep.bgColor} rounded-[26px] p-5 pt-6 pb-5 shadow-[0_14px_32px_rgba(0,0,0,0.07)] border border-black/[0.02] flex flex-col justify-start h-auto`}
            >
              {/* Pushpin placed matching Frame 2121455183.png */}
              <div
                className={`absolute ${currentStep.pinPositionClass} z-20 pointer-events-none drop-shadow-md`}
              >
                {currentStep.pinType === 'blue' ? (
                  <Exact3DBluePushPin className="w-12 h-13" />
                ) : (
                  <Exact3DSilverPushPin className="w-12 h-13" />
                )}
              </div>

              {/* Number Badge */}
              <div className="w-8 h-8 rounded-full border-[2.2px] border-[#18529B] text-[#18529B] flex items-center justify-center font-bold text-xs mb-3.5 shrink-0 bg-transparent">
                {currentStep.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-[#0B1528] tracking-tight mb-2">
                {currentStep.title}
              </h3>

              {/* Description - no trailing space */}
              <p className="text-[13px] text-slate-600 leading-[1.55] font-normal m-0 p-0">
                {currentStep.description}
              </p>
            </div>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {DELIVERY_PROCESS_STEPS.map((card, idx) => (
              <button
                key={card.step}
                onClick={() => setMobileStep(idx)}
                aria-label={`Go to step ${card.step}`}
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
