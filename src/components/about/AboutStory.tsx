import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

// Custom 3D Isometric Laptop & Workspace illustration matching Frame 2121455053 (1).png
const IsometricStoryIllustration: React.FC = () => (
  <div className="relative w-full max-w-[440px] sm:max-w-[480px] mx-auto aspect-[1.15/1] flex items-center justify-center select-none">
    <svg
      viewBox="0 0 540 440"
      className="w-full h-full drop-shadow-xl overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft shadow under elements */}
        <radialGradient id="baseShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.14" />
          <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
        </radialGradient>

        {/* Laptop screen gradient */}
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B2B59" />
          <stop offset="100%" stopColor="#18529B" />
        </linearGradient>

        {/* Metallic laptop body */}
        <linearGradient id="laptopBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="50%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>

        {/* Blue ceramic mug gradient */}
        <linearGradient id="mugGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#13437F" />
          <stop offset="40%" stopColor="#1D5EAF" />
          <stop offset="100%" stopColor="#0E3261" />
        </linearGradient>

        {/* Circuit glow */}
        <linearGradient id="circuitLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Ground ambient shadow */}
      <ellipse cx="270" cy="270" rx="220" ry="110" fill="url(#baseShadow)" />

      {/* ============================================================== */}
      {/* 1. CIRCUIT TRACE LINES ON GROUND                               */}
      {/* ============================================================== */}
      <g stroke="url(#circuitLine)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" opacity="0.85">
        <path d="M 120 280 L 170 305 L 230 275 L 290 305 L 360 270" />
        <path d="M 160 230 L 210 255 L 210 295" />
        <path d="M 280 320 L 330 345 L 400 310" />
        <path d="M 330 220 L 370 240 L 410 220" />
      </g>
      {/* Circuit Nodes */}
      <circle cx="120" cy="280" r="3" fill="#38BDF8" />
      <circle cx="170" cy="305" r="3" fill="#38BDF8" />
      <circle cx="230" cy="275" r="2.5" fill="#60A5FA" />
      <circle cx="360" cy="270" r="3" fill="#38BDF8" />
      <circle cx="400" cy="310" r="3" fill="#38BDF8" />

      {/* ============================================================== */}
      {/* 2. LEFT COFFEE MUG ON SAUCER                                   */}
      {/* ============================================================== */}
      <g transform="translate(45, 215)">
        {/* Saucer */}
        <ellipse cx="45" cy="72" rx="34" ry="16" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <ellipse cx="45" cy="70" rx="30" ry="14" fill="#E2E8F0" />

        {/* Mug Shadow */}
        <ellipse cx="45" cy="62" rx="22" ry="10" fill="#0F172A" opacity="0.15" />

        {/* Mug Body */}
        <path
          d="M 22 28 C 22 28, 22 58, 45 58 C 68 58, 68 28, 68 28 Z"
          fill="url(#mugGrad)"
        />
        <rect x="22" y="24" width="46" height="26" fill="url(#mugGrad)" />

        {/* Mug Rim */}
        <ellipse cx="45" cy="24" rx="23" ry="11" fill="#18529B" />
        {/* Coffee Liquid */}
        <ellipse cx="45" cy="25" rx="20" ry="9" fill="#2E1B10" />
        <ellipse cx="43" cy="26" rx="14" ry="6" fill="#1A0F0A" />

        {/* Mug Handle */}
        <path
          d="M 66 28 C 80 28, 80 50, 64 52"
          fill="none"
          stroke="#18529B"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 66 29 C 78 29, 78 49, 64 51"
          fill="none"
          stroke="#2B6CB0"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* ============================================================== */}
      {/* 3. LEFT SERVER / CODE BLOCK PEDESTAL                           */}
      {/* ============================================================== */}
      <g transform="translate(100, 140)">
        {/* Bottom pedestal slab */}
        <polygon points="40,50 85,25 130,50 85,75" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
        <polygon points="40,50 85,75 85,87 40,62" fill="#94A3B8" />
        <polygon points="130,50 85,75 85,87 130,62" fill="#CBD5E1" />

        {/* Server drive slot lines */}
        <line x1="90" y1="78" x2="115" y2="64" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="120" cy="61" r="1.5" fill="#38BDF8" />

        {/* Blue Cube with </> Code */}
        <g transform="translate(58, 0)">
          {/* Top face */}
          <polygon points="27,15 54,0 81,15 54,30" fill="#3B82F6" />
          {/* Left face */}
          <polygon points="27,15 54,30 54,54 27,39" fill="#1D4ED8" />
          {/* Right face */}
          <polygon points="81,15 54,30 54,54 81,39" fill="#2563EB" />
          {/* </> text/symbol on top face */}
          <text
            x="54"
            y="18"
            fill="#FFFFFF"
            fontSize="12"
            fontWeight="bold"
            fontFamily="monospace"
            textAnchor="middle"
            transform="rotate(0)"
          >
            &lt;/&gt;
          </text>
        </g>
      </g>

      {/* ============================================================== */}
      {/* 4. ISOMETRIC LAPTOP (CENTERPIECE)                              */}
      {/* ============================================================== */}
      <g transform="translate(145, 105)">
        {/* Base / Keyboard Lower Section (Isometric Plane) */}
        {/* Base Top */}
        <polygon
          points="80,195 230,110 320,160 170,250"
          fill="url(#laptopBody)"
          stroke="#94A3B8"
          strokeWidth="1.5"
        />
        {/* Base Left Edge */}
        <polygon points="80,195 170,250 170,258 80,203" fill="#64748B" />
        {/* Base Right Edge */}
        <polygon points="320,160 170,250 170,258 320,168" fill="#94A3B8" />

        {/* Keyboard recess on base */}
        <polygon points="120,185 215,130 280,165 185,222" fill="#1E293B" opacity="0.9" />

        {/* Individual key matrix details */}
        <g stroke="#334155" strokeWidth="1" fill="#0F172A">
          <polygon points="135,182 165,165 175,171 145,188" />
          <polygon points="170,162 200,145 210,151 180,168" />
          <polygon points="205,142 235,125 245,131 215,148" />
          {/* Spacebar */}
          <polygon points="160,205 205,180 213,185 168,210" fill="#1E293B" stroke="#475569" />
          {/* Trackpad */}
          <polygon points="140,225 175,205 195,216 160,237" fill="#CBD5E1" stroke="#94A3B8" />
        </g>

        {/* Laptop Display (Upright angled isometric lid) */}
        {/* Display Back Lid */}
        <polygon points="180,12 305,82 230,110 105,40" fill="#334155" stroke="#1E293B" strokeWidth="2" />
        {/* Display Inner Bezel */}
        <polygon points="175,15 295,82 225,122 105,55" fill="#0F172A" />

        {/* Glowing Screen Area */}
        <polygon points="172,20 288,83 222,118 110,56" fill="url(#screenGrad)" />

        {/* Official BrightByte Logo Mark on Laptop Screen */}
        <g transform="translate(160, 48) scale(0.95)">
          {/* Left 'b' Stem & loop */}
          <path
            d="M 12 8 L 12 38 A 10 10 0 0 0 32 38 A 10 10 0 0 0 12 38"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Middle 'b' */}
          <path
            d="M 32 16 L 32 38 A 10 10 0 0 0 52 38 A 10 10 0 0 0 32 38"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Right 'c' curve */}
          <path
            d="M 72 26 A 10 10 0 1 0 72 44"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* ============================================================== */}
      {/* 5. RIGHT POTTED SUCCULENT PLANT                                */}
      {/* ============================================================== */}
      <g transform="translate(370, 160)">
        {/* Pot Base */}
        <ellipse cx="28" cy="72" rx="20" ry="10" fill="#94A3B8" opacity="0.3" />
        <path d="M 12 40 L 16 68 C 16 74, 40 74, 40 68 L 44 40 Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
        <ellipse cx="28" cy="40" rx="16" ry="8" fill="#F8FAFC" />
        <ellipse cx="28" cy="41" rx="14" ry="6" fill="#78350F" opacity="0.6" />

        {/* Succulent Blue Foliage */}
        <path d="M 28 39 C 24 20, 18 10, 26 6 C 30 14, 30 25, 28 39 Z" fill="#38BDF8" />
        <path d="M 28 39 C 34 22, 42 12, 36 6 C 30 16, 28 26, 28 39 Z" fill="#0284C7" />
        <path d="M 28 39 C 14 30, 6 22, 10 16 C 18 20, 24 28, 28 39 Z" fill="#0EA5E9" />
        <path d="M 28 39 C 40 32, 50 25, 46 18 C 38 22, 32 30, 28 39 Z" fill="#0369A1" />
        <path d="M 28 38 C 26 22, 28 12, 30 2 C 34 10, 32 24, 28 38 Z" fill="#7DD3FC" />
      </g>

      {/* ============================================================== */}
      {/* 6. RIGHT TIERED ARCHITECTURAL DATA PEDESTAL                    */}
      {/* ============================================================== */}
      <g transform="translate(325, 220)">
        {/* Tier 1 (Bottom block) */}
        <polygon points="30,55 75,30 120,55 75,80" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
        <polygon points="30,55 75,80 75,98 30,73" fill="#94A3B8" />
        <polygon points="120,55 75,80 75,98 120,73" fill="#CBD5E1" />

        {/* LED slot lines on Tier 1 */}
        <line x1="45" y1="72" x2="65" y2="82" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="70" cy="85" r="1.5" fill="#38BDF8" />

        {/* Tier 2 (Middle Blue block) */}
        <polygon points="45,40 75,23 105,40 75,57" fill="#18529B" />
        <polygon points="45,40 75,57 75,70 45,53" fill="#0F3870" />
        <polygon points="105,40 75,57 75,70 105,53" fill="#1E65BF" />

        {/* Tier 3 (Top White block) */}
        <polygon points="58,28 75,18 92,28 75,38" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
        <polygon points="58,28 75,38 75,46 58,36" fill="#CBD5E1" />
        <polygon points="92,28 75,38 75,46 92,36" fill="#E2E8F0" />

        {/* Small blue top button with Analytics icon */}
        <polygon points="68,22 75,18 82,22 75,26" fill="#38BDF8" />
        <polygon points="68,22 75,26 75,30 68,26" fill="#0284C7" />
        <polygon points="82,22 75,26 75,30 82,26" fill="#0EA5E9" />
        {/* Tiny analytics bars */}
        <line x1="73" y1="24" x2="73" y2="21" stroke="#FFFFFF" strokeWidth="1" />
        <line x1="75" y1="24" x2="75" y2="19" stroke="#FFFFFF" strokeWidth="1" />
        <line x1="77" y1="24" x2="77" y2="20" stroke="#FFFFFF" strokeWidth="1" />
      </g>
    </svg>
  </div>
);

export const AboutStory: React.FC = () => {
  // Mobile index for screens below 768px ("show one by one")
  const [mobileStoryIndex, setMobileStoryIndex] = useState(0);

  const paragraphs = [
    {
      id: 'story-1',
      title: 'Our Inception',
      text: 'Bright Byte Consulting was founded by a team of developers who wanted to build a company that does software the right way; prioritizing quality, client satisfaction, and honest communication above everything else.',
    },
    {
      id: 'story-2',
      title: 'Global Growth',
      text: "Over the years we've grown from a small team into a company with offices in Toronto and Islamabad, working with clients ranging from funded startups to financial institutions and government agencies across North America.",
    },
    {
      id: 'story-3',
      title: 'Client-Centric Philosophy',
      text: "We've always believed the best technology companies are the ones that understand their clients' businesses deeply and build things that actually move the needle, not just technically impressive work for its own sake.",
    },
    {
      id: 'story-4',
      title: 'Comprehensive Capabilities',
      text: 'Today, Bright Byte offers mobile and web development, AI integration, DevOps, SEO, ERP systems, business auditing, project management, and global OEM hardware sourcing, all performed by dedicated teams that specialize in the relevant fields.',
    },
  ];

  const nextStory = () => {
    setMobileStoryIndex((prev) => (prev + 1) % paragraphs.length);
  };

  const prevStory = () => {
    setMobileStoryIndex((prev) => (prev - 1 + paragraphs.length) % paragraphs.length);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100 select-none">
      {/* Background ambient curved arcs matching Frame 2121455053 (1).png */}
      <div className="absolute -left-28 top-12 w-[520px] h-[520px] rounded-full border-[65px] border-blue-50/70 blur-2xl pointer-events-none -z-0" />
      <div className="absolute -right-32 bottom-0 w-[580px] h-[580px] rounded-full border-[70px] border-sky-50/80 blur-2xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* FOR ALL SCREENS >= 768px: SAME ROW SPLIT                       */}
        {/* Exactly matching Frame 2121455053 (1).png                      */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading + 3D Isometric Laptop Graphic + Caption */}
          <div className="md:col-span-5 lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-950 tracking-tight leading-tight">
              The BrightByte Story
            </h2>

            {/* Custom 3D Isometric Platform Graphic */}
            <div className="py-2">
              <IsometricStoryIllustration />
            </div>

            {/* Sub-caption matching Frame 2121455053 (1).png */}
            <p className="text-base sm:text-lg lg:text-[20px] font-bold text-slate-500 tracking-tight">
              Where we started, where we are now.
            </p>
          </div>

          {/* Right Column: 4 Clean Story Paragraphs */}
          <div className="md:col-span-7 lg:col-span-7 space-y-6 lg:pl-6">
            {paragraphs.map((para) => (
              <p
                key={para.id}
                className="text-base sm:text-lg lg:text-[17px] text-slate-600 font-normal leading-[1.7] tracking-[-0.005em]"
              >
                {para.text}
              </p>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-6 max-w-sm mx-auto select-none">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
              The BrightByte Story
            </h2>
            <p className="text-sm font-semibold text-slate-500">
              Where we started, where we are now.
            </p>
          </div>

          <div className="py-2">
            <IsometricStoryIllustration />
          </div>

          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Chapter {mobileStoryIndex + 1} of {paragraphs.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevStory}
                aria-label="Previous story chapter"
                className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStory}
                aria-label="Next story chapter"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE STORY CARD SHOWN ONE BY ONE */}
          <div className="bg-[#F8FAFD] rounded-3xl p-7 shadow-xs border border-blue-100/70 space-y-3 transition-all duration-300">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#18529B]">
              {paragraphs[mobileStoryIndex].title}
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {paragraphs[mobileStoryIndex].text}
            </p>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {paragraphs.map((para, idx) => (
              <button
                key={para.id}
                onClick={() => setMobileStoryIndex(idx)}
                aria-label={`Go to chapter ${idx + 1}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  mobileStoryIndex === idx
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
