import React from 'react';
import { Container } from '../layout/Container';
import { PageId } from '../../types';

export interface HomeHeroProps {
  onOpenConsultation: () => void;
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-4 sm:pt-26 sm:pb-6 lg:pt-28 lg:pb-8 bg-gradient-to-r from-white via-white to-blue-50/50">
      {/* Background ambient light wash on right side */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[600px] bg-gradient-to-bl from-blue-100/40 via-sky-50/30 to-transparent blur-3xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* For all screens >= 768px (md), display in the same row; below 768px, display in the second line (stacked) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-8 items-center min-h-0">
          {/* Left Column: Heading and CTAs */}
          <div className="md:col-span-6 lg:col-span-6 space-y-4 lg:space-y-5 md:pr-2">
            <h1 className="text-2xl sm:text-3xl md:text-[30px] lg:text-[42px] xl:text-[48px] font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              We build software that
              moves businesses
              forward.
            </h1>

            <p className="text-sm sm:text-base lg:text-[17px] text-slate-500 leading-relaxed max-w-md font-normal">
              From mobile apps and AI tools to ERP systems, DevOps, and global OEM sourcing, one experienced team across two continents.
            </p>

            <div className="flex flex-col sm:flex-row md:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#18529B] hover:bg-[#133F77] text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-900/10 cursor-pointer"
              >
                <span>Get a free consultation</span>
                <span className="text-base font-normal leading-none">→</span>
              </button>

              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('services');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 hover:bg-white text-[#18529B] font-semibold text-xs sm:text-sm transition-all border border-[#18529B]/30 hover:border-[#18529B]/60 cursor-pointer shadow-2xs"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right Column: 3D Isometric Network Architecture (same row on >=768px, second line on <768px) */}
          <div className="md:col-span-6 lg:col-span-6 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[440px] md:max-w-[380px] lg:max-w-[540px] aspect-[16/11]">
              <svg
                viewBox="0 0 760 540"
                className="w-full h-full drop-shadow-md select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Frosted Glass Pedestal Top */}
                  <linearGradient id="pedestalTop" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="40%" stopColor="#E9F3FC" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#D2E7FA" stopOpacity="0.85" />
                  </linearGradient>

                  {/* Frosted Glass Pedestal Extrusion */}
                  <linearGradient id="pedestalSide" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C4E0FA" />
                    <stop offset="100%" stopColor="#96C6F5" />
                  </linearGradient>

                  {/* Core Blue Processor */}
                  <linearGradient id="coreChassis" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#256FD0" />
                    <stop offset="50%" stopColor="#18529B" />
                    <stop offset="100%" stopColor="#0F3870" />
                  </linearGradient>

                  {/* Neon Glow Cyan Tube */}
                  <linearGradient id="neonCyanTube" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#67E8F9" />
                    <stop offset="50%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#0284C7" />
                  </linearGradient>

                  {/* Upward Energy Beam */}
                  <linearGradient id="beamGrad" x1="0" y1="1" x2="0.8" y2="0">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
                    <stop offset="40%" stopColor="#7DD3FC" stopOpacity="0.9" />
                    <stop offset="80%" stopColor="#BAE6FD" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.98" />
                  </linearGradient>

                  {/* Drop Shadow filter */}
                  <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#18529B" floodOpacity="0.12" />
                  </filter>

                  <filter id="glowEffect" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Ambient Floor Shadows */}
                <ellipse cx="430" cy="360" rx="140" ry="40" fill="#18529B" fillOpacity="0.08" />
                <ellipse cx="360" cy="180" rx="60" ry="20" fill="#18529B" fillOpacity="0.06" />
                <ellipse cx="190" cy="270" rx="65" ry="22" fill="#18529B" fillOpacity="0.06" />
                <ellipse cx="260" cy="450" rx="70" ry="24" fill="#18529B" fillOpacity="0.06" />
                <ellipse cx="560" cy="470" rx="70" ry="24" fill="#18529B" fillOpacity="0.06" />
                <ellipse cx="660" cy="360" rx="65" ry="22" fill="#18529B" fillOpacity="0.06" />

                {/* ============================================================== */}
                {/* GLOWING NEON CYAN TUBES / PIPES CONNECTING CENTER TO PODS      */}
                {/* ============================================================== */}
                {/* Tube 1: Center to Top (Phone) */}
                <path
                  d="M400 240 C380 200 370 180 370 160"
                  stroke="#38BDF8"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M400 240 C380 200 370 180 370 160"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Tube 2: Center to Left (Code Browser) */}
                <path
                  d="M380 270 C310 260 270 250 220 240"
                  stroke="#38BDF8"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M380 270 C310 260 270 250 220 240"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Tube 3: Center to Bottom-Left (Database & Gear) */}
                <path
                  d="M390 320 C340 360 300 390 280 410"
                  stroke="#38BDF8"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M390 320 C340 360 300 390 280 410"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Tube 4: Center to Bottom-Right (Cloud & Blocks) */}
                <path
                  d="M470 330 C510 370 530 400 550 420"
                  stroke="#38BDF8"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M470 330 C510 370 530 400 550 420"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Tube 5: Center to Right (Architecture Hierarchy Tree) */}
                <path
                  d="M480 280 C540 280 600 300 630 320"
                  stroke="#38BDF8"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M480 280 C540 280 600 300 630 320"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* ============================================================== */}
                {/* 1. SATELLITE POD: TOP-CENTER (MOBILE SMARTPHONE)               */}
                {/* ============================================================== */}
                <g transform="translate(320, 90)">
                  {/* Isometric Pedestal */}
                  {/* Side extrusion */}
                  <path d="M20 70 L60 90 L100 70 L100 82 L60 102 L20 82 Z" fill="url(#pedestalSide)" />
                  {/* Top face */}
                  <path d="M20 70 L60 50 L100 70 L60 90 Z" fill="url(#pedestalTop)" stroke="#BAE0FD" strokeWidth="1.5" />

                  {/* Standing Smartphone */}
                  <g transform="translate(42, 10)">
                    {/* Shadow behind phone */}
                    <ellipse cx="18" cy="65" rx="14" ry="4" fill="#18529B" fillOpacity="0.2" />
                    {/* Phone Body */}
                    <rect x="5" y="5" width="26" height="52" rx="4" fill="#0F172A" stroke="#475569" strokeWidth="1" />
                    {/* Phone Screen (Blue gradient) */}
                    <rect x="7" y="9" width="22" height="44" rx="2.5" fill="url(#coreChassis)" />
                    {/* App Tiles on screen */}
                    <rect x="9" y="13" width="8" height="8" rx="1.5" fill="#38BDF8" />
                    <rect x="19" y="13" width="8" height="8" rx="1.5" fill="#60A5FA" />
                    <rect x="9" y="24" width="8" height="8" rx="1.5" fill="#93C5FD" />
                    <rect x="19" y="24" width="8" height="8" rx="1.5" fill="#38BDF8" />
                    <rect x="9" y="36" width="18" height="12" rx="2" fill="#FFFFFF" fillOpacity="0.9" />
                  </g>
                </g>

                {/* ============================================================== */}
                {/* 2. SATELLITE POD: MIDDLE-LEFT (CODE BROWSER WINDOW)            */}
                {/* ============================================================== */}
                <g transform="translate(130, 180)">
                  {/* Isometric Pedestal */}
                  <path d="M15 90 L75 120 L135 90 L135 106 L75 136 L15 106 Z" fill="url(#pedestalSide)" />
                  <path d="M15 90 L75 60 L135 90 L75 120 Z" fill="url(#pedestalTop)" stroke="#BAE0FD" strokeWidth="1.5" />

                  {/* Standing Browser Window */}
                  <g transform="translate(38, 20)">
                    {/* Window Chassis */}
                    <rect
                      x="0"
                      y="10"
                      width="70"
                      height="58"
                      rx="7"
                      fill="#FFFFFF"
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                      filter="url(#softShadow)"
                    />
                    {/* Window Header bar */}
                    <path d="M0 17 C0 13.13 3.13 10 7 10 L63 10 C66.87 10 70 13.13 70 17 L70 23 L0 23 Z" fill="#64748B" />
                    {/* Window dots */}
                    <circle cx="8" cy="16.5" r="2" fill="#EF4444" />
                    <circle cx="14" cy="16.5" r="2" fill="#F59E0B" />
                    <circle cx="20" cy="16.5" r="2" fill="#10B981" />

                    {/* Window Inner Code Area with </> */}
                    <rect x="5" y="27" width="60" height="36" rx="4" fill="#F1F5F9" />
                    <text
                      x="35"
                      y="52"
                      textAnchor="middle"
                      fontFamily="monospace"
                      fontSize="17"
                      fontWeight="bold"
                      fill="#1E5FAF"
                    >
                      &lt;/&gt;
                    </text>
                  </g>
                </g>

                {/* ============================================================== */}
                {/* 3. SATELLITE POD: BOTTOM-LEFT (DATABASE DISKS & GEAR)          */}
                {/* ============================================================== */}
                <g transform="translate(190, 360)">
                  {/* Isometric Pedestal */}
                  <path d="M20 90 L85 122 L150 90 L150 106 L85 138 L20 106 Z" fill="url(#pedestalSide)" />
                  <path d="M20 90 L85 58 L150 90 L85 122 Z" fill="url(#pedestalTop)" stroke="#BAE0FD" strokeWidth="1.5" />

                  {/* Database Cylinders Stack */}
                  <g transform="translate(56, 30)">
                    {/* Bottom cylinder */}
                    <ellipse cx="26" cy="46" rx="22" ry="9" fill="#94A3B8" />
                    <path d="M4 36 L4 46 C4 51 14 55 26 55 C38 55 48 51 48 46 L48 36 Z" fill="#CBD5E1" />
                    <ellipse cx="26" cy="36" rx="22" ry="9" fill="#E2E8F0" />
                    {/* Middle cylinder */}
                    <path d="M4 22 L4 32 C4 37 14 41 26 41 C38 41 48 37 48 32 L48 22 Z" fill="#94A3B8" />
                    <ellipse cx="26" cy="22" rx="22" ry="9" fill="#CBD5E1" />
                    {/* Top cylinder */}
                    <path d="M4 8 L4 18 C4 23 14 27 26 27 C38 27 48 23 48 18 L48 8 Z" fill="#64748B" />
                    <ellipse cx="26" cy="8" rx="22" ry="9" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
                    {/* Database active indicator slot */}
                    <line x1="16" y1="20" x2="24" y2="20" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
                    <line x1="16" y1="34" x2="24" y2="34" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
                  </g>

                  {/* Mechanical Gear Cog beside database */}
                  <g transform="translate(94, 62)">
                    <circle cx="16" cy="16" r="14" fill="#94A3B8" stroke="#64748B" strokeWidth="1.5" />
                    <circle cx="16" cy="16" r="6" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    {/* Gear Teeth */}
                    <rect x="14" y="0" width="4" height="4" fill="#64748B" />
                    <rect x="14" y="28" width="4" height="4" fill="#64748B" />
                    <rect x="0" y="14" width="4" height="4" fill="#64748B" />
                    <rect x="28" y="14" width="4" height="4" fill="#64748B" />
                    <rect x="4" y="4" width="4" height="4" fill="#64748B" />
                    <rect x="24" y="24" width="4" height="4" fill="#64748B" />
                    <rect x="24" y="4" width="4" height="4" fill="#64748B" />
                    <rect x="4" y="24" width="4" height="4" fill="#64748B" />
                  </g>
                </g>

                {/* ============================================================== */}
                {/* 4. SATELLITE POD: BOTTOM-RIGHT (CLOUD & DATA CUBES)            */}
                {/* ============================================================== */}
                <g transform="translate(480, 380)">
                  {/* Isometric Pedestal */}
                  <path d="M20 90 L85 122 L150 90 L150 106 L85 138 L20 106 Z" fill="url(#pedestalSide)" />
                  <path d="M20 90 L85 58 L150 90 L85 122 Z" fill="url(#pedestalTop)" stroke="#BAE0FD" strokeWidth="1.5" />

                  {/* 3D Stylized White Cloud */}
                  <g transform="translate(48, 25)">
                    {/* Shadow below cloud */}
                    <ellipse cx="40" cy="55" rx="30" ry="10" fill="#18529B" fillOpacity="0.15" />
                    {/* Cloud body */}
                    <path
                      d="M20 50 C12 50 6 44 6 36 C6 28 12 23 18 22 C20 14 28 8 38 8 C48 8 56 14 58 22 C64 22 70 27 70 34 C70 42 64 48 56 49 C54 50 30 50 20 50 Z"
                      fill="#FFFFFF"
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                    />
                    {/* Embedded Blue Isometric Data Blocks */}
                    <g transform="translate(32, 28)">
                      <path d="M0 8 L10 2 L20 8 L10 14 Z" fill="#60A5FA" />
                      <path d="M0 8 L10 14 L10 24 L0 18 Z" fill="#2563EB" />
                      <path d="M20 8 L10 14 L10 24 L20 18 Z" fill="#1D4ED8" />
                    </g>
                    <g transform="translate(16, 34)">
                      <path d="M0 6 L8 1 L16 6 L8 11 Z" fill="#93C5FD" />
                      <path d="M0 6 L8 11 L8 19 L0 14 Z" fill="#3B82F6" />
                      <path d="M16 6 L8 11 L8 19 L16 14 Z" fill="#2563EB" />
                    </g>
                  </g>
                </g>

                {/* ============================================================== */}
                {/* 5. SATELLITE POD: MIDDLE-RIGHT (SYSTEM HIERARCHY TREE)         */}
                {/* ============================================================== */}
                <g transform="translate(590, 270)">
                  {/* Isometric Pedestal */}
                  <path d="M15 85 L75 115 L135 85 L135 100 L75 130 L15 100 Z" fill="url(#pedestalSide)" />
                  <path d="M15 85 L75 55 L135 85 L75 115 Z" fill="url(#pedestalTop)" stroke="#BAE0FD" strokeWidth="1.5" />

                  {/* 3D Organizational / System Architecture Hierarchy Tree */}
                  <g transform="translate(42, 25)">
                    {/* Root Block */}
                    <rect x="22" y="5" width="22" height="18" rx="3" fill="#1E5FAF" stroke="#60A5FA" strokeWidth="1" />
                    <rect x="25" y="8" width="16" height="12" rx="1.5" fill="#3B82F6" />

                    {/* Connecting Trunk lines */}
                    <line x1="33" y1="23" x2="33" y2="35" stroke="#475569" strokeWidth="2" />
                    <line x1="10" y1="35" x2="56" y2="35" stroke="#475569" strokeWidth="2" />
                    <line x1="10" y1="35" x2="10" y2="44" stroke="#475569" strokeWidth="2" />
                    <line x1="33" y1="35" x2="33" y2="44" stroke="#475569" strokeWidth="2" />
                    <line x1="56" y1="35" x2="56" y2="44" stroke="#475569" strokeWidth="2" />

                    {/* 3 Child Nodes */}
                    <rect x="3" y="44" width="14" height="12" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="1" />
                    <rect x="26" y="44" width="14" height="12" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="1" />
                    <rect x="49" y="44" width="14" height="12" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="1" />
                  </g>
                </g>

                {/* ============================================================== */}
                {/* CENTRAL HUB: MULTI-TIERED PROCESSOR CORE                       */}
                {/* ============================================================== */}
                <g transform="translate(320, 200)">
                  {/* Tier 1: Glass Pedestal Base Extrusion */}
                  <path
                    d="M10 130 L110 180 L210 130 L210 155 L110 205 L10 155 Z"
                    fill="url(#pedestalSide)"
                  />
                  {/* Tier 1: Top Surface */}
                  <path
                    d="M10 130 L110 80 L210 130 L110 180 Z"
                    fill="url(#pedestalTop)"
                    stroke="#BAE0FD"
                    strokeWidth="2"
                  />

                  {/* Tier 2: Raised Metallic Collar Extrusion */}
                  <path
                    d="M35 125 L110 162 L185 125 L185 140 L110 177 L35 140 Z"
                    fill="#18529B"
                  />
                  {/* Tier 2: Top Surface */}
                  <path
                    d="M35 125 L110 88 L185 125 L110 162 Z"
                    fill="#3B82F6"
                  />

                  {/* Tier 3: Core Deep Royal Blue Microchip Block */}
                  {/* Side faces */}
                  <path
                    d="M50 115 L110 145 L170 115 L170 130 L110 160 L50 130 Z"
                    fill="#0B2B5C"
                  />
                  {/* Top face */}
                  <path
                    d="M50 115 L110 85 L170 115 L110 145 Z"
                    fill="url(#coreChassis)"
                    stroke="#60A5FA"
                    strokeWidth="1.5"
                  />

                  {/* Micro-LED Dots on Front Bevel */}
                  <circle cx="85" cy="144" r="1.5" fill="#38BDF8" />
                  <circle cx="95" cy="148" r="1.5" fill="#38BDF8" />
                  <circle cx="105" cy="151" r="1.5" fill="#38BDF8" />
                  <circle cx="115" cy="151" r="1.5" fill="#38BDF8" />
                  <circle cx="125" cy="148" r="1.5" fill="#38BDF8" />
                  <circle cx="135" cy="144" r="1.5" fill="#38BDF8" />

                  {/* Recessed Glowing Core Chamber */}
                  <path
                    d="M80 115 L110 100 L140 115 L110 130 Z"
                    fill="#0F172A"
                  />
                  <path
                    d="M88 115 L110 104 L132 115 L110 126 Z"
                    fill="#0284C7"
                  />
                  {/* Glowing Core Crystal */}
                  <rect
                    x="105"
                    y="108"
                    width="10"
                    height="10"
                    transform="rotate(45 110 113)"
                    fill="#38BDF8"
                    filter="url(#glowEffect)"
                  />
                  <rect
                    x="107"
                    y="110"
                    width="6"
                    height="6"
                    transform="rotate(45 110 113)"
                    fill="#FFFFFF"
                  />

                  {/* Vertical Light Columns Erupting from Core */}
                  <rect x="108" y="70" width="4" height="38" fill="#38BDF8" opacity="0.75" />
                  <rect x="103" y="78" width="3" height="28" fill="#67E8F9" opacity="0.8" />
                  <rect x="114" y="75" width="3" height="30" fill="#67E8F9" opacity="0.8" />
                  <rect x="106" y="65" width="8" height="8" rx="1.5" fill="#E0F2FE" opacity="0.9" />
                  <rect x="109" y="55" width="6" height="6" rx="1" fill="#FFFFFF" opacity="0.95" />
                </g>

                {/* ============================================================== */}
                {/* MAGNIFICENT UPWARD-SWOOPING NEON ARROW TRAIL                   */}
                {/* Originating from core and curving upward towards top-right (↗) */}
                {/* ============================================================== */}
                <g filter="url(#glowEffect)">
                  {/* Outer Ethereal Glow Trail */}
                  <path
                    d="M430 290 C500 280 570 240 620 180 C660 130 680 85 710 50"
                    stroke="#38BDF8"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeOpacity="0.25"
                  />

                  {/* Main Cyan Energy Ribbon */}
                  <path
                    d="M430 290 C500 280 570 240 620 180 C660 130 680 85 710 50"
                    stroke="url(#beamGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                  />

                  {/* Core Brilliant White Filament */}
                  <path
                    d="M430 290 C500 280 570 240 620 180 C660 130 680 85 710 50"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Parallel dynamic energy trails */}
                  <path
                    d="M440 285 C510 270 580 230 628 172 C668 122 686 78 715 45"
                    stroke="#67E8F9"
                    strokeWidth="2.5"
                    strokeDasharray="8 6"
                    opacity="0.85"
                  />
                  <path
                    d="M422 295 C492 288 560 250 610 190 C650 140 672 95 702 58"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                    opacity="0.7"
                  />

                  {/* 3D Dynamic Arrow Tip pointing Up and Right (↗) */}
                  <g transform="translate(710, 48) rotate(-35)">
                    {/* Glowing Arrow Chevron */}
                    <path
                      d="M-22 18 L6 0 L-22 -18 L-14 0 Z"
                      fill="#FFFFFF"
                      stroke="#38BDF8"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>

                {/* Atmospheric Floating Light Sparks */}
                <circle cx="630" cy="150" r="3.5" fill="#38BDF8" />
                <circle cx="670" cy="110" r="2.5" fill="#FFFFFF" />
                <circle cx="590" cy="210" r="2" fill="#67E8F9" />
                <circle cx="440" cy="230" r="3" fill="#BAE6FD" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
