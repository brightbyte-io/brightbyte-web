import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Building2, Globe2 } from 'lucide-react';
import { Container } from '../layout/Container';

export interface LocationHub {
  id: string;
  city: string;
  country: string;
  role: string;
  addressLines: string[];
  x: number; // percentage on 1000px map
  y: number; // percentage on 500px map
  isPrimary?: boolean;
}

export const GLOBAL_HUBS: LocationHub[] = [
  {
    id: 'islamabad',
    city: 'Islamabad',
    country: 'Pakistan',
    role: 'Global Engineering & Delivery Center',
    addressLines: [
      'Plot 207, Service Rd N. East,',
      'Industrial Area I-10/3 I-10,',
      'Islamabad, 44000',
    ],
    x: 630,
    y: 215,
    isPrimary: true,
  },
  {
    id: 'toronto',
    city: 'Toronto',
    country: 'Canada',
    role: 'North American Client Services & Solutions',
    addressLines: [
      '608-250 The East Mall,',
      'Toronto, ON M9B 6L3,',
      'Canada',
    ],
    x: 265,
    y: 165,
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    role: 'EMEA Enterprise Advisory Pod',
    addressLines: [
      'Central London Hub,',
      'EC2A Delivery Practice,',
      'United Kingdom',
    ],
    x: 488,
    y: 145,
  },
  {
    id: 'bogota',
    city: 'Bogotá',
    country: 'Colombia',
    role: 'LATAM Nearshore Engineering Pod',
    addressLines: [
      'Carrera 7 Tech District,',
      'Bogotá D.C.,',
      'Colombia',
    ],
    x: 295,
    y: 260,
  },
  {
    id: 'nairobi',
    city: 'Nairobi',
    country: 'Kenya',
    role: 'East Africa Digital Infrastructure Pod',
    addressLines: [
      'Westlands Technology Center,',
      'Nairobi,',
      'Kenya',
    ],
    x: 474,
    y: 312,
  },
  {
    id: 'sydney',
    city: 'Sydney',
    country: 'Australia',
    role: 'APAC Product Delivery Pod',
    addressLines: [
      'Barangaroo Digital Precinct,',
      'Sydney NSW 2000,',
      'Australia',
    ],
    x: 780,
    y: 355,
  },
];

// Helper to determine if a point (x, y) on a 1000x500 grid belongs to a continent landmass
// Generates accurate dot-matrix map matching Frame 2121455062.png
const isLandDot = (x: number, y: number): boolean => {
  // 1. Greenland
  if (x >= 320 && x <= 420 && y >= 30 && y <= 90) {
    if (x >= 335 && x <= 405 && y >= 35 && y <= 85) return true;
  }

  // 2. North America (Canada, Alaska, USA, Mexico)
  if (x >= 130 && x <= 340 && y >= 60 && y <= 260) {
    // Alaska & NW Canada
    if (x >= 130 && x <= 220 && y >= 70 && y <= 150) return true;
    // Canada & Northern US
    if (x >= 190 && x <= 330 && y >= 90 && y <= 190) return true;
    // Central & Southern US
    if (x >= 200 && x <= 315 && y >= 170 && y <= 225) return true;
    // Mexico & Central America
    if (x >= 210 && x <= 290 && y >= 215 && y <= 260 && x - y * 0.7 < 110) return true;
    // Caribbean
    if (x >= 295 && x <= 325 && y >= 225 && y <= 245) return true;
  }

  // 3. South America
  if (x >= 265 && x <= 375 && y >= 250 && y <= 445) {
    // Northern South America (Colombia, Venezuela, Brazil north)
    if (x >= 270 && x <= 365 && y >= 250 && y <= 320) return true;
    // Central South America (Brazil, Peru, Bolivia)
    if (x >= 275 && x <= 370 && y >= 310 && y <= 375) return true;
    // Southern South America (Argentina, Chile)
    if (x >= 290 && x <= 340 && y >= 370 && y <= 445) return true;
  }

  // 4. Europe & Scandinavia & UK
  if (x >= 440 && x <= 560 && y >= 70 && y <= 200) {
    // Scandinavia
    if (x >= 485 && x <= 535 && y >= 70 && y <= 130) return true;
    // UK & Ireland
    if (x >= 445 && x <= 475 && y >= 110 && y <= 150) return true;
    // Western & Central Europe (France, Germany, Poland, Alps)
    if (x >= 460 && x <= 550 && y >= 130 && y <= 180) return true;
    // Iberian Peninsula & Italy & Balkans
    if (x >= 450 && x <= 540 && y >= 170 && y <= 210) return true;
  }

  // 5. Africa & Madagascar
  if (x >= 430 && x <= 565 && y >= 190 && y <= 390) {
    // North Africa (Sahara, Egypt, Maghreb)
    if (x >= 435 && x <= 560 && y >= 190 && y <= 265) return true;
    // Central & West Africa
    if (x >= 430 && x <= 540 && y >= 255 && y <= 325) return true;
    // East Africa & Horn
    if (x >= 490 && x <= 565 && y >= 260 && y <= 335) return true;
    // Southern Africa
    if (x >= 470 && x <= 535 && y >= 320 && y <= 390) return true;
    // Madagascar
    if (x >= 545 && x <= 565 && y >= 330 && y <= 375) return true;
  }

  // 6. Asia (Middle East, Russia, Central Asia, India, China, SE Asia, Japan)
  if (x >= 540 && x <= 860 && y >= 60 && y <= 325) {
    // Siberia & Northern Russia
    if (x >= 540 && x <= 850 && y >= 60 && y <= 145) return true;
    // Central Asia & Mongolia
    if (x >= 560 && x <= 770 && y >= 135 && y <= 195) return true;
    // Middle East (Arabia, Iran, Iraq)
    if (x >= 540 && x <= 620 && y >= 190 && y <= 255) return true;
    // South Asia (Pakistan, India, Bangladesh)
    if (x >= 605 && x <= 695 && y >= 195 && y <= 290) return true;
    // East Asia (China, Korea)
    if (x >= 670 && x <= 810 && y >= 170 && y <= 265) return true;
    // Japan
    if (x >= 805 && x <= 840 && y >= 165 && y <= 220) return true;
    // Southeast Asia (Indochina, Malaysia, Philippines)
    if (x >= 680 && x <= 810 && y >= 240 && y <= 315) return true;
    // Indonesia & Pacific islands
    if (x >= 710 && x <= 855 && y >= 300 && y <= 345) return true;
  }

  // 7. Australia & New Zealand
  if (x >= 715 && x <= 845 && y >= 325 && y <= 440) {
    // Western & Central Australia
    if (x >= 720 && x <= 790 && y >= 335 && y <= 405) return true;
    // Eastern Australia (Queensland, NSW, Victoria)
    if (x >= 770 && x <= 815 && y >= 330 && y <= 415) return true;
    // Tasmania
    if (x >= 780 && x <= 795 && y >= 420 && y <= 435) return true;
    // New Zealand
    if (x >= 820 && x <= 845 && y >= 390 && y <= 440) return true;
  }

  return false;
};

export const ContactGlobalLocationsSection: React.FC = () => {
  // Mobile stepper active index (< 768px: "only in bleow 768 show one by one")
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  // Desktop active hovered or selected hub
  const [selectedHubId, setSelectedHubId] = useState<string>('islamabad');

  const activeHub = useMemo(() => {
    return GLOBAL_HUBS.find((h) => h.id === selectedHubId) || GLOBAL_HUBS[0];
  }, [selectedHubId]);

  const currentMobileHub = GLOBAL_HUBS[activeMobileIdx];

  const nextMobile = () => {
    const nextIdx = (activeMobileIdx + 1) % GLOBAL_HUBS.length;
    setActiveMobileIdx(nextIdx);
    setSelectedHubId(GLOBAL_HUBS[nextIdx].id);
  };

  const prevMobile = () => {
    const prevIdx = (activeMobileIdx - 1 + GLOBAL_HUBS.length) % GLOBAL_HUBS.length;
    setActiveMobileIdx(prevIdx);
    setSelectedHubId(GLOBAL_HUBS[prevIdx].id);
  };

  // Pre-generate grid dots for performance
  const mapDots = useMemo(() => {
    const dots: { cx: number; cy: number }[] = [];
    const stepX = 14;
    const stepY = 14;

    for (let y = 35; y <= 455; y += stepY) {
      const offsetX = (Math.round(y / stepY) % 2) * (stepX / 2);
      for (let x = 120; x <= 875; x += stepX) {
        const dotX = x + offsetX;
        if (isLandDot(dotX, y)) {
          dots.push({ cx: Math.round(dotX), cy: Math.round(y) });
        }
      }
    }
    return dots;
  }, []);

  const islamabadHub = GLOBAL_HUBS[0];

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden select-none border-t border-slate-100">
      <Container>
        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): EXACT MATCH TO Frame 2121455062.png */}
        {/* Full width dotted world map with radiating connection arcs     */}
        {/* ============================================================== */}
        <div className="relative w-full max-w-5xl mx-auto hidden md:block">
          <div className="relative w-full aspect-[2/1] min-h-[460px] flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Brightbyte Global Delivery Network Map"
            >
              <defs>
                {/* Islamabad Target Glow */}
                <radialGradient id="islamabadTargetGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#18529B" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                </radialGradient>

                {/* Destination Node Glow */}
                <radialGradient id="destNodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2A5C91" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#2A5C91" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* 1. DOTTED CONTINENTS LAYER MATCHING Frame 2121455062.png */}
              <g className="transition-opacity duration-300">
                {mapDots.map((dot, idx) => (
                  <circle
                    key={idx}
                    cx={dot.cx}
                    cy={dot.cy}
                    r={3.2}
                    fill="#C5DCF4"
                  />
                ))}
              </g>

              {/* 2. CONNECTING CURVED ARCS RADIATING FROM ISLAMABAD (cx=630, cy=215) */}
              <g stroke="#5686B8" strokeWidth="2.2" fill="none" strokeLinecap="round">
                {/* Arc 1: To North America (Toronto/NY) cx=265, cy=165 */}
                <path
                  d="M 630 215 C 500 110, 370 120, 265 165"
                  className="transition-all duration-300 hover:stroke-[#18529B] hover:stroke-[3]"
                />

                {/* Arc 2: To South America (Bogota) cx=295, cy=260 */}
                <path
                  d="M 630 215 C 470 165, 360 190, 295 260"
                  className="transition-all duration-300 hover:stroke-[#18529B] hover:stroke-[3]"
                />

                {/* Arc 3: To Europe (London) cx=488, cy=145 */}
                <path
                  d="M 630 215 C 580 160, 530 140, 488 145"
                  className="transition-all duration-300 hover:stroke-[#18529B] hover:stroke-[3]"
                />

                {/* Arc 4: To Africa (Nairobi) cx=474, cy=312 */}
                <path
                  d="M 630 215 C 540 220, 490 250, 474 312"
                  className="transition-all duration-300 hover:stroke-[#18529B] hover:stroke-[3]"
                />

                {/* Arc 5: To Australia (Sydney) cx=780, cy=355 */}
                <path
                  d="M 630 215 C 710 240, 765 285, 780 355"
                  className="transition-all duration-300 hover:stroke-[#18529B] hover:stroke-[3]"
                />
              </g>

              {/* 3. DESTINATION NODES (SECONDARY GLOBAL HUBS) */}
              {GLOBAL_HUBS.filter((h) => !h.isPrimary).map((hub) => {
                const isSelected = selectedHubId === hub.id;
                return (
                  <g
                    key={hub.id}
                    onClick={() => setSelectedHubId(hub.id)}
                    className="cursor-pointer group"
                  >
                    {/* Soft halo */}
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r={isSelected ? 16 : 10}
                      fill="url(#destNodeGlow)"
                      className="transition-all duration-300 group-hover:r-14"
                    />
                    {/* Node circle */}
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r={isSelected ? 7 : 5.5}
                      fill="#4A7AA8"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      className="transition-all duration-300 group-hover:fill-[#18529B] group-hover:r-7"
                    />
                  </g>
                );
              })}

              {/* 4. PRIMARY HUB NODE: ISLAMABAD, PAKISTAN */}
              <g
                onClick={() => setSelectedHubId('islamabad')}
                className="cursor-pointer"
              >
                {/* Large outer soft glow */}
                <circle
                  cx={islamabadHub.x}
                  cy={islamabadHub.y}
                  r={30}
                  fill="url(#islamabadTargetGlow)"
                />

                {/* White target disc with subtle shadow */}
                <circle
                  cx={islamabadHub.x}
                  cy={islamabadHub.y}
                  r={16}
                  fill="#FFFFFF"
                  stroke="#BFDBFE"
                  strokeWidth="1.5"
                  filter="drop-shadow(0 4px 10px rgba(24,82,155,0.2))"
                />

                {/* Inner brand blue bullseye */}
                <circle
                  cx={islamabadHub.x}
                  cy={islamabadHub.y}
                  r={9.5}
                  fill="#4578AA"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                />

                {/* Center dot */}
                <circle
                  cx={islamabadHub.x}
                  cy={islamabadHub.y}
                  r={3.5}
                  fill="#FFFFFF"
                />
              </g>
            </svg>

            {/* 5. FLOATING ADDRESS CARD ANCHORED OVER ISLAMABAD */}
            {/* Exactly matching Frame 2121455062.png */}
            <div
              className="absolute z-20 transition-all duration-300 pointer-events-auto"
              style={{
                top: `${(activeHub.y / 500) * 100 - (activeHub.isPrimary ? 25 : 22)}%`,
                left: `${(activeHub.x / 1000) * 100 + (activeHub.x > 700 ? -26 : 2.5)}%`,
              }}
            >
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.12)] p-4 sm:p-5 w-[250px] sm:w-[270px] animate-fadeIn">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[#18529B] tracking-tight">
                    {activeHub.city}, {activeHub.country}
                  </h4>
                  {activeHub.isPrimary && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </div>

                <div className="space-y-0.5 text-[12.5px] sm:text-[13px] text-slate-600 font-normal leading-relaxed">
                  {activeHub.addressLines.map((line, lIdx) => (
                    <p key={lIdx} className="m-0 p-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px: "only in bleow 768 show one by one")      */}
        {/* Responsive one-by-one location card stepper with mini map       */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-6">
          {/* Stepper Header (< 768px) */}
          <div className="flex items-center justify-between px-1">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#18529B]">
                GLOBAL PRESENCE
              </span>
              <p className="text-xs text-slate-500 font-medium">
                Location 0{activeMobileIdx + 1} of 0{GLOBAL_HUBS.length}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevMobile}
                aria-label="Previous global office"
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer text-slate-700 border border-slate-200 shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextMobile}
                aria-label="Next global office"
                className="w-9 h-9 rounded-full bg-[#18529B] text-white hover:bg-[#133F77] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Interactive Map Preview */}
          <div className="relative w-full aspect-[2/1] rounded-2xl bg-slate-50/60 border border-slate-200/80 overflow-hidden flex items-center justify-center p-2">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dotted Continents */}
              {mapDots.map((dot, idx) => (
                <circle
                  key={idx}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={3.4}
                  fill="#C5DCF4"
                />
              ))}

              {/* Connecting Arcs */}
              <g stroke="#5686B8" strokeWidth="2.5" fill="none" opacity="0.6">
                <path d="M 630 215 C 500 110, 370 120, 265 165" />
                <path d="M 630 215 C 470 165, 360 190, 295 260" />
                <path d="M 630 215 C 580 160, 530 140, 488 145" />
                <path d="M 630 215 C 540 220, 490 250, 474 312" />
                <path d="M 630 215 C 710 240, 765 285, 780 355" />
              </g>

              {/* Inactive Hub Dots */}
              {GLOBAL_HUBS.map((hub) => (
                <circle
                  key={hub.id}
                  cx={hub.x}
                  cy={hub.y}
                  r={hub.isPrimary ? 8 : 5}
                  fill={currentMobileHub.id === hub.id ? '#18529B' : '#739CC4'}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              ))}

              {/* Active Mobile Hub Highlight Indicator */}
              <circle
                cx={currentMobileHub.x}
                cy={currentMobileHub.y}
                r={22}
                fill="none"
                stroke="#18529B"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                className="animate-spin"
                style={{ transformOrigin: `${currentMobileHub.x}px ${currentMobileHub.y}px` }}
              />
              <circle
                cx={currentMobileHub.x}
                cy={currentMobileHub.y}
                r={10}
                fill="#18529B"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Active Mobile Location Card (< 768px) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#18529B]">
                <MapPin className="w-5 h-5 shrink-0" />
                <h4 className="text-lg font-bold text-[#18529B]">
                  {currentMobileHub.city}, {currentMobileHub.country}
                </h4>
              </div>

              {currentMobileHub.isPrimary && (
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-[#18529B] border border-blue-200">
                  Headquarters
                </span>
              )}
            </div>

            <p className="text-xs font-semibold text-slate-700">
              {currentMobileHub.role}
            </p>

            <div className="pt-1 text-xs text-slate-500 space-y-1 border-t border-slate-100">
              {currentMobileHub.addressLines.map((line, idx) => (
                <p key={idx} className="m-0">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {GLOBAL_HUBS.map((hub, idx) => (
              <button
                key={hub.id}
                onClick={() => {
                  setActiveMobileIdx(idx);
                  setSelectedHubId(hub.id);
                }}
                aria-label={`Go to ${hub.city}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  activeMobileIdx === idx
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
