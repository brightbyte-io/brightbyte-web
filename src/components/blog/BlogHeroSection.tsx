import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';

export interface BlogHeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSubmitSearch?: () => void;
}

// 3D Workstation Scene matching Blog Mainss.png
// Open sleek laptop, potted bonsai plant, cobalt blue ceramic mug, and architect desk lamp with light cone
export const WorkstationGraphic: React.FC<{ className?: string }> = ({
  className = 'w-full h-auto',
}) => (
  <svg
    viewBox="0 0 760 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Workstation illustration with laptop, lamp, mug, and plant"
  >
    <defs>
      {/* Surface soft drop shadow */}
      <filter id="deskShadow" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="14" result="blur" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.08   0 0 0 0 0.12   0 0 0 0 0.2  0 0 0 0.18 0" />
      </filter>

      {/* Lamp light beam gradient */}
      <linearGradient id="lampLightBeam" x1="620" y1="180" x2="420" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
        <stop offset="25%" stopColor="#EFF6FF" stopOpacity="0.25" />
        <stop offset="70%" stopColor="#DBEAFE" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0" />
      </linearGradient>

      {/* Laptop metallic chassis gradients */}
      <linearGradient id="laptopLid" x1="390" y1="200" x2="560" y2="350" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#94A3B8" />
        <stop offset="50%" stopColor="#64748B" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>

      <linearGradient id="laptopScreen" x1="420" y1="210" x2="550" y2="350" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="40%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>

      <linearGradient id="laptopBase" x1="370" y1="365" x2="630" y2="415" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8193A8" />
        <stop offset="35%" stopColor="#94A3B8" />
        <stop offset="85%" stopColor="#64748B" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>

      <linearGradient id="laptopKeyboard" x1="410" y1="375" x2="590" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>

      {/* Blue ceramic mug gradients */}
      <linearGradient id="mugBody" x1="595" y1="290" x2="640" y2="385" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#256FD1" />
        <stop offset="35%" stopColor="#18529B" />
        <stop offset="75%" stopColor="#13427C" />
        <stop offset="100%" stopColor="#0E2E56" />
      </linearGradient>

      {/* Pot gradients */}
      <linearGradient id="potBody" x1="340" y1="280" x2="400" y2="380" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A8B2BF" />
        <stop offset="45%" stopColor="#8E99A8" />
        <stop offset="80%" stopColor="#6C7787" />
        <stop offset="100%" stopColor="#515B69" />
      </linearGradient>

      {/* Lamp metal chrome gradients */}
      <linearGradient id="lampChrome" x1="600" y1="120" x2="680" y2="240" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="30%" stopColor="#94A3B8" />
        <stop offset="70%" stopColor="#475569" />
        <stop offset="100%" stopColor="#1E293B" />
      </linearGradient>

      <linearGradient id="lampShadeInner" x1="610" y1="170" x2="650" y2="210" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#FEF08A" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>

    {/* ============================================================== */}
    {/* 1. CONTACT SHADOWS                                            */}
    {/* ============================================================== */}
    <g filter="url(#deskShadow)">
      {/* Plant shadow */}
      <ellipse cx="368" cy="384" rx="36" ry="12" fill="#0F172A" opacity="0.32" />

      {/* Laptop shadow */}
      <polygon points="360,378 630,378 645,418 385,418" fill="#0F172A" opacity="0.35" />

      {/* Mug shadow */}
      <ellipse cx="616" cy="385" rx="24" ry="10" fill="#0F172A" opacity="0.35" />

      {/* Lamp base shadow */}
      <ellipse cx="678" cy="380" rx="32" ry="12" fill="#0F172A" opacity="0.32" />
    </g>

    {/* ============================================================== */}
    {/* 2. LAMP LIGHT CONE (PROJECTED LIGHT BEAM)                      */}
    {/* ============================================================== */}
    <polygon
      points="625,188 340,430 580,430 648,206"
      fill="url(#lampLightBeam)"
      className="mix-blend-screen"
    />

    {/* ============================================================== */}
    {/* 3. POTTED PLANT (LEFT OF LAPTOP)                               */}
    {/* ============================================================== */}
    <g id="pottedPlant">
      {/* Ribbed conical pot */}
      <path
        d="M 342 292 C 342 292 344 340 350 368 C 354 382 382 382 386 368 C 392 340 394 292 394 292 Z"
        fill="url(#potBody)"
      />
      {/* Pot rim ellipse */}
      <ellipse cx="368" cy="292" rx="26" ry="6" fill="#8895A5" stroke="#CBD5E1" strokeWidth="1" />
      <ellipse cx="368" cy="293" rx="23" ry="5" fill="#3E4753" />

      {/* Pot texture grooves */}
      <path d="M 345 312 Q 368 318 391 312" stroke="#4B5563" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M 347 332 Q 368 338 389 332" stroke="#4B5563" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M 350 352 Q 368 357 386 352" stroke="#4B5563" strokeWidth="1.2" fill="none" opacity="0.6" />

      {/* Lush Green Bonsai Foliage (spherical foliage cluster matching image) */}
      <g>
        <circle cx="368" cy="245" r="32" fill="#1E5E28" />
        <circle cx="352" cy="235" r="24" fill="#2E7D32" />
        <circle cx="384" cy="235" r="24" fill="#2E7D32" />
        <circle cx="368" cy="220" r="26" fill="#388E3C" />
        <circle cx="356" cy="210" r="18" fill="#4CAF50" />
        <circle cx="378" cy="210" r="18" fill="#4CAF50" />
        <circle cx="368" cy="198" r="14" fill="#66BB6A" />

        {/* Highlight foliage leaves texture */}
        <circle cx="362" cy="225" r="8" fill="#81C784" opacity="0.75" />
        <circle cx="376" cy="232" r="7" fill="#81C784" opacity="0.75" />
        <circle cx="350" cy="252" r="9" fill="#43A047" opacity="0.8" />
        <circle cx="385" cy="250" r="9" fill="#43A047" opacity="0.8" />
        <circle cx="368" cy="240" r="10" fill="#A5D6A7" opacity="0.6" />
      </g>
    </g>

    {/* ============================================================== */}
    {/* 4. SLEEK MODERN OPEN LAPTOP (ANGLED 3D PERSPECTIVE)           */}
    {/* ============================================================== */}
    <g id="laptop">
      {/* Screen Lid Back Cover */}
      <polygon
        points="398,206 548,226 564,360 414,342"
        fill="url(#laptopLid)"
      />

      {/* Screen Bezel Frame */}
      <polygon
        points="404,212 542,230 558,354 420,338"
        fill="#0F172A"
      />

      {/* Active Screen Surface */}
      <polygon
        points="408,216 538,233 554,350 424,334"
        fill="url(#laptopScreen)"
      />

      {/* Screen Subtle Ambient Reflection Line */}
      <polygon
        points="408,216 480,225 435,335 424,334"
        fill="#FFFFFF"
        opacity="0.06"
      />

      {/* Webcam dot */}
      <circle cx="473" cy="224" r="1.5" fill="#64748B" />

      {/* Laptop Bottom Base (Keyboard chassis) */}
      <polygon
        points="414,342 564,360 635,404 380,386"
        fill="url(#laptopBase)"
      />

      {/* Chassis Front Lip Chamfer Edge */}
      <polygon
        points="380,386 635,404 632,410 376,392"
        fill="#475569"
      />
      <polygon
        points="376,392 632,410 629,414 373,396"
        fill="#334155"
      />

      {/* Keyboard Well Inset */}
      <polygon
        points="430,352 560,368 598,396 422,382"
        fill="url(#laptopKeyboard)"
      />

      {/* Keyboard subtle keys rows illusion */}
      <line x1="432" y1="358" x2="565" y2="373" stroke="#334155" strokeWidth="2.5" />
      <line x1="430" y1="365" x2="574" y2="380" stroke="#334155" strokeWidth="2.5" />
      <line x1="428" y1="372" x2="583" y2="388" stroke="#334155" strokeWidth="2.5" />
      <line x1="425" y1="379" x2="592" y2="395" stroke="#334155" strokeWidth="2.5" />

      {/* Trackpad */}
      <polygon
        points="488,386 540,392 534,402 482,396"
        fill="#75889E"
        stroke="#64748B"
        strokeWidth="0.8"
      />
    </g>

    {/* ============================================================== */}
    {/* 5. COBALT BLUE CERAMIC COFFEE MUG                              */}
    {/* ============================================================== */}
    <g id="blueMug">
      {/* Mug Handle */}
      <path
        d="M 628 322 C 648 322 648 360 628 362"
        stroke="url(#mugBody)"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 628 324 C 644 324 644 358 628 360"
        stroke="#18529B"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Mug Cylinder Body */}
      <path
        d="M 602 310 L 604 374 C 604 382 630 382 630 374 L 632 310 Z"
        fill="url(#mugBody)"
      />

      {/* Mug Top Rim */}
      <ellipse cx="617" cy="310" rx="15" ry="5.5" fill="#3B82F6" stroke="#93C5FD" strokeWidth="0.8" />
      <ellipse cx="617" cy="311" rx="13" ry="4.5" fill="#133E75" />

      {/* Mug Specular Highlight Curve */}
      <path
        d="M 608 316 L 609 368"
        stroke="#93C5FD"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </g>

    {/* ============================================================== */}
    {/* 6. METALLIC ARCHITECT DESK LAMP WITH LIGHT BULB                */}
    {/* ============================================================== */}
    <g id="deskLamp">
      {/* Lamp Base Stand */}
      <ellipse cx="678" cy="372" rx="28" ry="10" fill="url(#lampChrome)" stroke="#94A3B8" strokeWidth="1" />
      <ellipse cx="678" cy="370" rx="22" ry="7" fill="#64748B" />
      <circle cx="678" cy="369" r="6" fill="#334155" />

      {/* Lamp Lower Arm (Angled to the left) */}
      <line x1="678" y1="368" x2="656" y2="282" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
      <line x1="678" y1="368" x2="656" y2="282" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

      {/* Tension springs */}
      <line x1="674" y1="360" x2="652" y2="286" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Mid Arm Articulation Elbow Joint */}
      <circle cx="656" cy="282" r="7" fill="#334155" stroke="#94A3B8" strokeWidth="1.5" />
      <circle cx="656" cy="282" r="3" fill="#E2E8F0" />

      {/* Upper Arm (Angled left-downwards towards laptop) */}
      <line x1="656" y1="282" x2="628" y2="198" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
      <line x1="656" y1="282" x2="628" y2="198" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

      {/* Upper arm joint */}
      <circle cx="628" cy="198" r="6" fill="#334155" stroke="#94A3B8" strokeWidth="1.5" />

      {/* Lamp Conical Shade (Facing left-downwards) */}
      <g transform="rotate(-36 628 198)">
        {/* Metal shade cone */}
        <path
          d="M 610 180 L 655 180 L 670 220 L 595 220 Z"
          fill="url(#lampChrome)"
        />
        {/* Top finial / switch cap */}
        <ellipse cx="632" cy="180" rx="22" ry="7" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="632" cy="172" r="5" fill="#334155" />

        {/* Shade bottom rim ellipse */}
        <ellipse cx="632" cy="220" rx="38" ry="11" fill="url(#lampShadeInner)" stroke="#FEF08A" strokeWidth="1" />

        {/* Illuminated Light Bulb */}
        <circle cx="632" cy="216" r="14" fill="#FFFFFF" filter="drop-shadow(0 0 10px #FEF08A)" />
      </g>
    </g>
  </svg>
);

export const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  onSubmitSearch,
}) => {
  // Mobile stepper active index (< 768px: "only in bleow 768 show one by one")
  const [mobileStep, setMobileStep] = useState(0);

  const nextStep = () => setMobileStep((prev) => (prev + 1) % 3);
  const prevStep = () => setMobileStep((prev) => (prev - 1 + 3) % 3);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmitSearch) {
      onSubmitSearch();
    }
  };

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 bg-white overflow-hidden select-none">
      {/* ============================================================== */}
      {/* AMBIENT CURVED BLUE BACKGROUND RIBBONS MATCHING Blog Mainss.png */}
      {/* ============================================================== */}
      {/* Left curved ribbon */}
      <div
        className="absolute -top-32 -left-48 w-[620px] h-[620px] rounded-full border-[52px] border-[#D6E6F7]/45 pointer-events-none -z-0"
        aria-hidden="true"
      />
      {/* Right curved ribbon */}
      <div
        className="absolute -top-16 -right-36 w-[700px] h-[700px] rounded-full border-[56px] border-[#D8E8F8]/45 pointer-events-none -z-0"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): EXACT MATCH TO Blog Mainss.png */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[380px]">
          {/* Left Column: Eyebrow + Headline + Search Pill */}
          <div className="md:col-span-6 lg:col-span-6 space-y-6">
            <span className="inline-block text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#18529B]">
              OUR BLOG
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0B1528] tracking-tight leading-[1.08]">
              Insights That Move<br />Business Forward.
            </h1>

            {/* Big Search Input Pill matching Blog Mainss.png */}
            <div className="relative w-full max-w-md pt-2">
              <div className="relative flex items-center bg-white rounded-full border border-slate-200 shadow-[0_6px_25px_rgba(15,23,42,0.06)] px-5 py-3.5 transition-all focus-within:border-[#18529B] focus-within:shadow-[0_8px_30px_rgba(24,82,155,0.12)]">
                <input
                  type="text"
                  placeholder="What are you searching for?"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-sm sm:text-base text-[#0B1528] placeholder:text-slate-400 placeholder:font-normal focus:outline-none pr-3"
                />

                <button
                  type="button"
                  onClick={onSubmitSearch}
                  aria-label="Submit search"
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[#18529B] hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <Search className="w-5 h-5 stroke-[2.2]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Workstation Scene (Laptop, Plant, Mug, Lamp) */}
          <div className="md:col-span-6 lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px] transform lg:translate-x-4">
              <WorkstationGraphic className="w-full h-auto drop-shadow-sm" />
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px: "only in bleow 768 show one by one")      */}
        {/* Stepper showing items one by one                                */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-5">
          {/* Mobile Stepper Header */}
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Item 0{mobileStep + 1} of 03
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prevStep}
                aria-label="Previous item"
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer text-slate-700 border border-slate-200 shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                aria-label="Next item"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white hover:bg-[#133F77] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Mobile Slide (< 768px) */}
          <div className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 shadow-xs min-h-[220px] flex flex-col justify-center animate-fadeIn">
            {mobileStep === 0 && (
              <div className="space-y-3">
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#18529B]">
                  OUR BLOG
                </span>
                <h1 className="text-3xl font-black text-[#0B1528] tracking-tight leading-[1.12]">
                  Insights That Move Business Forward.
                </h1>
                <p className="text-xs text-slate-500">
                  Engineering perspectives, architectural blueprints, and field notes from BrightByte.
                </p>
              </div>
            )}

            {mobileStep === 1 && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Search Articles
                </span>
                <div className="relative flex items-center bg-white rounded-full border border-slate-200 shadow-xs px-5 py-3.5 focus-within:border-[#18529B]">
                  <input
                    type="text"
                    placeholder="What are you searching for?"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-transparent text-sm text-[#0B1528] placeholder:text-slate-400 focus:outline-none pr-2"
                  />
                  <button
                    type="button"
                    onClick={onSubmitSearch}
                    className="shrink-0 text-[#18529B]"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </div>
                {searchQuery && (
                  <p className="text-[11px] text-slate-500">
                    Filtering results for: <span className="font-bold text-[#18529B]">"{searchQuery}"</span>
                  </p>
                )}
              </div>
            )}

            {mobileStep === 2 && (
              <div className="flex items-center justify-center py-2">
                <WorkstationGraphic className="w-full max-w-[320px] h-auto" />
              </div>
            )}
          </div>

          {/* Stepper Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
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
