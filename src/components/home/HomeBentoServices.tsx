import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { PageId } from '../../types';

export interface HomeBentoServicesProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const HomeBentoServices: React.FC<HomeBentoServicesProps> = ({
  onNavigate,
}) => {
  // Mobile index for screens below 768px ("show one by one")
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextCard = () => {
    setMobileIndex((prev) => (prev + 1) % 8);
  };

  const prevCard = () => {
    setMobileIndex((prev) => (prev - 1 + 8) % 8);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-100">
      <Container>
        {/* ============================================================== */}
        {/* SECTION HEADER MATCHING Frame 2121455052.png                   */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#18529B]">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            Every service your product needs
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-normal">
            Nine practice areas. One focused team. No hand-offs to strangers.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): EXACT BENTO GRID              */}
        {/* Exactly matching Frame 2121455052.png                          */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {/* ------------------------------------------------------------ */}
          {/* ROW 1 - CARD 1: Mobile App Development (Dark Blue)           */}
          {/* ------------------------------------------------------------ */}
          <div
            onClick={() => onNavigate('service-detail', 'mobile-app')}
            className="rounded-3xl bg-[#124E96] text-white p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <div className="space-y-3 relative z-10 max-w-[280px]">
              <h3 className="text-xl lg:text-[22px] font-bold text-white leading-snug">
                Mobile App<br />Development
              </h3>
              <p className="text-xs lg:text-[13px] text-blue-100/90 leading-relaxed">
                Native <strong className="text-white font-semibold">Android</strong> and <strong className="text-white font-semibold">iOS apps</strong>, designed and built to production grade, from UI to App Store submission.
              </p>
            </div>

            {/* Angled Smartphone with BrightByte icon and app icons */}
            <div className="mt-4 flex justify-end relative select-none">
              <div className="w-56 h-48 relative -right-4 -bottom-6 transform rotate-6 group-hover:scale-105 transition-transform duration-300">
                {/* Phone chassis */}
                <div className="w-52 h-64 rounded-3xl bg-slate-950 p-2.5 shadow-2xl border-4 border-slate-700/80">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-b from-sky-900 via-slate-900 to-black p-3 text-white flex flex-col justify-between relative overflow-hidden">
                    {/* Notch & speaker */}
                    <div className="flex justify-between items-center px-2">
                      <span className="text-[9px] font-bold text-slate-300">9:41</span>
                      <div className="w-14 h-3 rounded-full bg-black/80" />
                      <div className="w-3 h-2 rounded bg-white/70" />
                    </div>

                    {/* App Icons Grid */}
                    <div className="grid grid-cols-3 gap-2.5 py-2">
                      {/* Browser icon */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-xl bg-blue-500/90 flex items-center justify-center shadow-xs">
                          <span className="font-extrabold text-xs text-white">M</span>
                        </div>
                        <span className="text-[9px] text-slate-300">Browser</span>
                      </div>

                      {/* Connect icon */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center shadow-xs">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                          </svg>
                        </div>
                        <span className="text-[9px] text-slate-300">Connect</span>
                      </div>

                      {/* Loudh icon */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center shadow-xs">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                          </svg>
                        </div>
                        <span className="text-[9px] text-slate-300">Loudh</span>
                      </div>
                    </div>

                    {/* Center BrightByte Official Logo on Phone Screen */}
                    <div className="grid grid-cols-3 gap-2.5 pb-2">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-xl bg-white p-1 flex flex-col items-center justify-center shadow-md">
                          <svg viewBox="0 0 94 76" className="w-6 h-5">
                            <path d="M17 26.5 C16 19.5 21 12 30 11.5 C38.5 11 44 17.5 44 26" stroke="#828E9E" strokeWidth="7" strokeLinecap="round" />
                            <path d="M37 26.5 C36 19.5 41 12 50 11.5 C58.5 11 64 17.5 64 26" stroke="#828E9E" strokeWidth="7" strokeLinecap="round" />
                            <path d="M57 41 C62 46.5 70 47.5 76 43 C79 40.5 81.5 36.5 82 32" stroke="#828E9E" strokeWidth="7" strokeLinecap="round" />
                            <path d="M9 5 L9 32 C9 43 17 48 25 48 C33 48 37 43 37 32" stroke="#18529B" strokeWidth="7" strokeLinecap="round" />
                            <path d="M29 5 L29 32 C29 43 37 48 45 48 C53 48 57 43 57 32" stroke="#18529B" strokeWidth="7" strokeLinecap="round" />
                            <path d="M57 32 C57 20 62 12.5 72 12.5 C77 12.5 81 14.5 83 17.5" stroke="#18529B" strokeWidth="7" strokeLinecap="round" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-bold text-sky-200">BRIGHTBYTE</span>
                      </div>

                      {/* Phone call icon */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-xl bg-rose-500 flex items-center justify-center shadow-xs">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.45-5.15-3.76-6.59-6.59l1.97-1.57c.27-.27.36-.66.24-1.01-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3.3 3 3.66 3 4.2c0 9.42 7.64 17.06 17.06 17.06.54 0 .99-.65.99-1.19v-3.7c0-.54-.45-.99-.99-.99z" />
                          </svg>
                        </div>
                        <span className="text-[9px] text-slate-300">Phone</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* ROW 1 - CARD 2: Web & Enterprise Apps (White with 3D </>)     */}
          {/* ------------------------------------------------------------ */}
          <div
            onClick={() => onNavigate('service-detail', 'web-enterprise')}
            className="rounded-3xl bg-white p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border border-slate-200/90 shadow-2xs"
          >
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl lg:text-[22px] font-bold text-slate-900 leading-snug">
                Web & Enterprise Apps
              </h3>
              <p className="text-xs lg:text-[13px] text-slate-500 leading-relaxed">
                Full-stack platforms, enterprise portals, and custom tools built for real workloads and complex workflows.
              </p>
            </div>

            {/* 3D Code Brackets </ > with orbital guide line */}
            <div className="mt-6 py-6 flex items-center justify-center relative select-none">
              {/* Elliptical background data trajectory */}
              <div className="absolute w-56 h-28 border border-blue-100 rounded-full -rotate-12 pointer-events-none" />
              <div className="absolute right-8 top-6 w-2.5 h-2.5 rounded-full bg-[#18529B]" />

              {/* 3D Rendered Code Symbol */}
              <div className="relative flex items-center justify-center gap-3 transform group-hover:scale-105 transition-transform">
                <span className="text-5xl lg:text-6xl font-black text-[#18529B] tracking-tighter drop-shadow-sm font-mono">
                  &lt;
                </span>
                <span className="text-5xl lg:text-6xl font-black text-slate-400 tracking-tighter drop-shadow-sm font-mono transform rotate-12">
                  /
                </span>
                <span className="text-5xl lg:text-6xl font-black text-slate-400 tracking-tighter drop-shadow-sm font-mono">
                  &gt;
                </span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* ROW 1 & 2 - CARD 3: AI App Development (Tall, Spans 2 Rows) */}
          {/* ------------------------------------------------------------ */}
          <div
            onClick={() => onNavigate('service-detail', 'ai-app')}
            className="rounded-3xl bg-gradient-to-b from-[#EFF6FD] via-[#E5F1FC] to-[#DDEBFA] p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border border-blue-200/60 md:row-span-2 shadow-2xs"
          >
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl lg:text-[22px] font-bold text-slate-900 leading-snug">
                AI App Development
              </h3>
              <p className="text-xs lg:text-[13px] text-slate-600 leading-relaxed">
                Industry 4.0 solutions using <strong className="text-slate-900 font-semibold">AI, ML</strong>, and <strong className="text-slate-900 font-semibold">IoT</strong>, intelligent automation and data-driven tools that change how you work.
              </p>
            </div>

            {/* 3D High-Fidelity White Android Robot with Laptop & AI Badge */}
            <div className="my-6 flex flex-col items-center justify-center relative select-none">
              <div className="relative w-56 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {/* Robot Illustration SVG */}
                <svg viewBox="0 0 220 260" className="w-full h-full drop-shadow-xl" fill="none">
                  {/* Soft ambient floor shadow */}
                  <ellipse cx="110" cy="245" rx="75" ry="14" fill="#93C5FD" fillOpacity="0.45" />

                  {/* Robot Body / Torso */}
                  <rect x="68" y="115" width="84" height="85" rx="32" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2.5" />
                  <rect x="80" y="132" width="60" height="50" rx="16" fill="#F1F5F9" />
                  <circle cx="110" cy="157" r="10" fill="#18529B" />
                  <circle cx="110" cy="157" r="4" fill="#38BDF8" />

                  {/* Robot Arms */}
                  <path d="M52 135 C52 165 65 190 85 200" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
                  <path d="M52 135 C52 165 65 190 85 200" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
                  <path d="M168 135 C168 165 155 190 135 200" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
                  <path d="M168 135 C168 165 155 190 135 200" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

                  {/* Over-ear blue headphones */}
                  <path d="M42 70 C42 30 178 30 178 70" stroke="#18529B" strokeWidth="9" strokeLinecap="round" fill="none" />
                  <rect x="36" y="55" width="16" height="34" rx="8" fill="#18529B" />
                  <rect x="168" y="55" width="16" height="34" rx="8" fill="#18529B" />

                  {/* Robot Head */}
                  <rect x="52" y="32" width="116" height="88" rx="42" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2.5" />

                  {/* Glossy Black Visor */}
                  <rect x="64" y="48" width="92" height="48" rx="20" fill="#0F172A" />

                  {/* Glowing Cyan Blue Eyes with reflections */}
                  <ellipse cx="88" cy="72" rx="10" ry="12" fill="#38BDF8" />
                  <circle cx="91" cy="69" r="3.5" fill="#FFFFFF" />
                  <ellipse cx="132" cy="72" rx="10" ry="12" fill="#38BDF8" />
                  <circle cx="135" cy="69" r="3.5" fill="#FFFFFF" />

                  {/* Dark Metallic Laptop */}
                  <g transform="translate(15, 20)">
                    {/* Laptop Screen Lid facing user */}
                    <rect x="105" y="145" width="90" height="58" rx="7" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                    {/* Embossed Bold "AI" on Laptop Lid */}
                    <text
                      x="150"
                      y="185"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontFamily="system-ui, sans-serif"
                      fontWeight="900"
                      fontSize="24"
                      letterSpacing="0.05em"
                    >
                      AI
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* ROW 2 - CARD 4: DevOps (Wide, Spans 2 Columns)               */}
          {/* ------------------------------------------------------------ */}
          <div
            onClick={() => onNavigate('service-detail', 'devops')}
            className="rounded-3xl bg-white p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border border-slate-200/90 md:col-span-2 shadow-2xs"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-7 space-y-3">
                <h3 className="text-xl lg:text-[22px] font-bold text-slate-900 leading-snug">
                  DevOps
                </h3>
                <p className="text-xs lg:text-[13px] text-slate-500 leading-relaxed max-w-md">
                  CI/CD pipelines, cloud infrastructure, and thorough QA incorporated into every stage of delivery, not bolted on at the end.
                </p>

                {/* 4 Authentic Tool Badges: GitHub, Docker, Kubernetes, Terraform */}
                <div className="pt-4 flex items-center gap-3 select-none">
                  {/* GitHub */}
                  <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>

                  {/* Docker */}
                  <div className="w-10 h-10 rounded-xl bg-[#0db7ed] flex items-center justify-center shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185m21.652-.872c-.506-.37-1.494-.465-2.28-.465-.07 0-.136.002-.2.007-.36-1.176-1.4-1.96-2.585-1.96a2.71 2.71 0 00-1.424.417c-.31-.157-.655-.246-1.02-.246h-1.085v2.983c0 .102.083.185.185.185h6.634c.484 0 .937.165 1.306.446.223.17.406.388.54.64.333-.143.633-.362.85-.644.204-.265.176-.757-.02-.963m-10.74 3.738c-.027-.003-.053-.008-.08-.008H2.18c-.41 0-.742.333-.742.743 0 1.547.464 2.977 1.258 4.148 1.15 1.698 2.946 2.898 5.01 3.35 1.144.252 2.348.243 3.493-.024 2.148-.501 3.99-1.848 5.068-3.705.518-.89.843-1.882.943-2.922h-3.32a.186.186 0 01-.186-.185v-1.218c0-.102.083-.186.186-.186h3.407a9.38 9.38 0 00-.125-.97H12.92a.186.186 0 01-.186-.185v-1.218c0-.102.083-.186.186-.186h3.197c-.08-.34-.19-.668-.328-.978h-2.87a.185.185 0 01-.185-.185v-1.218c0-.102.083-.186.185-.186h2.247c-.244-.336-.54-.627-.88-.865z" />
                    </svg>
                  </div>

                  {/* Kubernetes */}
                  <div className="w-10 h-10 rounded-xl bg-[#326ce5] flex items-center justify-center shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M11.968 2a.668.668 0 00-.317.086l-7.79 4.5a.667.667 0 00-.334.577v9.006c0 .24.129.462.334.577l7.79 4.5a.665.665 0 00.668 0l7.79-4.5a.667.667 0 00.334-.577V7.163a.667.667 0 00-.334-.577l-7.79-4.5a.668.668 0 00-.351-.086zm.032 1.832l6.592 3.808-2.222 1.284a3.86 3.86 0 00-1.637-.998l-.403-2.528-2.33-1.566zm-.606.012l-2.33 1.566-.403 2.528c-.596.223-1.152.564-1.637.998L4.8 7.64l6.594-3.796zm-7.06 4.793l2.222 1.284c-.23.593-.327 1.23-.284 1.868l-2.544.275V8.637zm15.333 0v3.425l-2.543-.275c.043-.638-.054-1.275-.285-1.868l2.222-1.284zM12 9.47a2.53 2.53 0 110 5.06 2.53 2.53 0 010-5.06zm-1.077 3.513c.123.633.444 1.205.918 1.635l-1.393 2.148-2.73-1.576 3.205-2.207zm2.154 0l3.205 2.207-2.73 1.576-1.393-2.148c.474-.43.795-1.002.918-1.635zM4.333 14.542l2.544-.275c.272.576.69 1.069 1.21 1.428L6.695 17.84l-2.362-3.298zm15.334 0l-2.362 3.298-1.392-2.145c.52-.359.938-.852 1.21-1.428l2.544.275zm-8.293 3.657l1.252 2.25-6.593-3.808 2.222-1.284c.485.434 1.041.775 1.637.998l.403 2.528c.36.077.727.116 1.079.116zm1.252 0c.352 0 .719-.039 1.079-.116l.403-2.528a3.86 3.86 0 001.637-.998l2.222 1.284-6.593 3.808 1.252-2.25z" />
                    </svg>
                  </div>

                  {/* Terraform */}
                  <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M1.5 2v7.1L7.7 13V5.8L1.5 2zm7.6 7.5v7.2L15.3 13V5.9L9.1 9.5zm7.6-3.8v7.2l6.2-3.6V2.2l-6.2 3.5zm-7.6 11.4v7.1l6.2-3.6v-7.1l-6.2 3.6z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Side: 3D Infinity Loop Ribbon on Cylinder Pedestal */}
              <div className="sm:col-span-5 flex justify-center sm:justify-end select-none">
                <div className="w-48 h-36 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 180 140" className="w-full h-full drop-shadow-md">
                    {/* Cylindrical white pedestal base */}
                    <ellipse cx="90" cy="115" rx="55" ry="18" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                    <rect x="35" y="115" width="110" height="15" fill="#F1F5F9" />
                    <ellipse cx="90" cy="130" rx="55" ry="18" fill="#E2E8F0" />
                    {/* Orange status LED dot */}
                    <circle cx="120" cy="122" r="3" fill="#F97316" />

                    {/* 3D Infinity loops */}
                    {/* Left Loop (Blue #18529B) */}
                    <path
                      d="M55 45 C75 45 85 85 105 85 C125 85 135 65 135 55 C135 45 125 35 110 35 C95 35 85 65 65 65 C45 65 35 55 35 45 C35 35 45 25 60 25 C75 25 85 55 105 55"
                      fill="none"
                      stroke="#18529B"
                      strokeWidth="16"
                      strokeLinecap="round"
                    />

                    {/* Right Loop overlay (Silver/Metallic Slate with Chevron arrows) */}
                    <path
                      d="M90 60 C105 85 125 85 135 65 C135 55 125 35 110 35"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="16"
                      strokeLinecap="round"
                    />

                    {/* Precision gear icon on the loop */}
                    <circle cx="58" cy="48" r="7" fill="#FFFFFF" />
                    <circle cx="58" cy="48" r="3.5" fill="#18529B" />

                    {/* Chevrons on the silver ribbon */}
                    <path d="M125 58 L130 52 L125 46" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* ROW 3 & 4 - CARD 5: ERP Systems (Tall, Spans 2 Rows)         */}
          {/* ------------------------------------------------------------ */}
          <div
            onClick={() => onNavigate('service-detail', 'erp')}
            className="rounded-3xl bg-[#124E96] text-white p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 md:row-span-2 shadow-2xs"
          >
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl lg:text-[22px] font-bold text-white leading-snug">
                ERP Systems
              </h3>
              <p className="text-xs lg:text-[13px] text-blue-100/90 leading-relaxed">
                Custom enterprise resource planning that unifies your operations, finance, and team management in one platform.
              </p>
            </div>

            {/* 3D Isometric Server & Database Architecture Graphics */}
            <div className="mt-8 flex flex-col items-center justify-end relative select-none">
              <div className="w-full max-w-[280px] h-64 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 240 220" className="w-full h-full drop-shadow-xl" fill="none">
                  {/* Connected glowing cyan conduit pipelines */}
                  <path d="M120 110 L45 75" stroke="#38BDF8" strokeWidth="3" strokeDasharray="4 4" />
                  <path d="M120 110 L200 80" stroke="#38BDF8" strokeWidth="3" strokeDasharray="4 4" />
                  <path d="M120 135 L45 165" stroke="#38BDF8" strokeWidth="3" />
                  <path d="M120 135 L195 165" stroke="#38BDF8" strokeWidth="3" />

                  {/* Central Dual Tier Master Server Node */}
                  {/* Bottom pedestal */}
                  <path d="M120 90 L170 115 L120 140 L70 115 Z" fill="#2563EB" />
                  <path d="M70 115 L120 140 L120 160 L70 135 Z" fill="#1D4ED8" />
                  <path d="M170 115 L120 140 L120 160 L170 135 Z" fill="#1E40AF" />
                  {/* Status LEDs */}
                  <circle cx="85" cy="126" r="2.5" fill="#67E8F9" />
                  <circle cx="95" cy="131" r="2.5" fill="#67E8F9" />
                  <circle cx="105" cy="136" r="2.5" fill="#67E8F9" />

                  {/* Top server slab */}
                  <path d="M120 75 L160 95 L120 115 L80 95 Z" fill="#3B82F6" />
                  <path d="M80 95 L120 115 L120 128 L80 108 Z" fill="#1D4ED8" />
                  <path d="M160 95 L120 115 L120 128 L160 108 Z" fill="#1E40AF" />

                  {/* Left Side: Server Blade Stack & 3D Pie Chart */}
                  {/* Server tower */}
                  <path d="M45 50 L65 60 L45 70 L25 60 Z" fill="#93C5FD" />
                  <path d="M25 60 L45 70 L45 88 L25 78 Z" fill="#60A5FA" />
                  <path d="M65 60 L45 70 L45 88 L65 78 Z" fill="#3B82F6" />

                  {/* 3D Segmented Donut Chart */}
                  <g transform="translate(15, 140)">
                    <ellipse cx="30" cy="20" rx="22" ry="12" fill="#E2E8F0" />
                    <path d="M8 20 C8 13.37 17.85 8 30 8 L30 20 Z" fill="#94A3B8" />
                    <ellipse cx="30" cy="20" rx="9" ry="5" fill="#124E96" />
                  </g>

                  {/* Right Side: Dual Mechanical Precision Gears */}
                  <g transform="translate(180, 70)">
                    {/* Upper Gear */}
                    <circle cx="15" cy="15" r="14" fill="#94A3B8" />
                    <circle cx="15" cy="15" r="5" fill="#124E96" />
                    <rect x="13" y="-1" width="4" height="32" rx="1.5" fill="#94A3B8" />
                    <rect x="-1" y="13" width="32" height="4" rx="1.5" fill="#94A3B8" />
                  </g>

                  {/* Lower Storage Disk Array */}
                  <g transform="translate(170, 150)">
                    <ellipse cx="25" cy="12" rx="20" ry="8" fill="#CBD5E1" />
                    <rect x="5" y="12" width="40" height="10" fill="#94A3B8" />
                    <ellipse cx="25" cy="22" rx="20" ry="8" fill="#94A3B8" />
                    <circle cx="12" cy="17" r="1.5" fill="#38BDF8" />
                    <circle cx="18" cy="17" r="1.5" fill="#38BDF8" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* ROW 3 - CARD 6: Business Auditing (White)                    */}
          {/* ------------------------------------------------------------ */}
          <div
            onClick={() => onNavigate('service-detail', 'business-auditing')}
            className="rounded-3xl bg-white p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border border-slate-200/90 shadow-2xs"
          >
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl lg:text-[22px] font-bold text-slate-900 leading-snug">
                Business Auditing
              </h3>
              <p className="text-xs lg:text-[13px] text-slate-500 leading-relaxed">
                We analyze your tech, processes, and operations and give you a clear, expansive report on what to fix and how.
              </p>
            </div>

            {/* 3 Interconnected Workflow Badges: Research -> Product Design -> Sourcing */}
            <div className="mt-8 py-4 flex items-center justify-between relative select-none">
              {/* Connecting dashed arrows */}
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-slate-300 pointer-events-none -z-0" />

              {/* Step 1: Research (Blue) */}
              <div className="relative z-10 flex flex-col items-center gap-1.5 transform group-hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-[#18529B] text-white flex items-center justify-center shadow-md shadow-blue-900/20">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21L16.65 16.65" />
                    <line x1="9" y1="13" x2="9" y2="10" />
                    <line x1="11" y1="13" x2="11" y2="8" />
                    <line x1="13" y1="13" x2="13" y2="11" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-slate-700">Research</span>
              </div>

              {/* Step 2: Product Design (Dark Grey/Slate) */}
              <div className="relative z-10 flex flex-col items-center gap-1.5 transform group-hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-slate-700 text-white flex items-center justify-center shadow-md shadow-slate-900/20">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-slate-700">Product Design</span>
              </div>

              {/* Step 3: Sourcing (Blue) */}
              <div className="relative z-10 flex flex-col items-center gap-1.5 transform group-hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-[#18529B] text-white flex items-center justify-center shadow-md shadow-blue-900/20">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-slate-700">Sourcing</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* ROW 3 - CARD 7: Project Management (Dark Blue)               */}
          {/* ------------------------------------------------------------ */}
          <div
            onClick={() => onNavigate('service-detail', 'project-management')}
            className="rounded-3xl bg-[#124E96] text-white p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 shadow-2xs"
          >
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl lg:text-[22px] font-bold text-white leading-snug">
                Project Management
              </h3>
              <p className="text-xs lg:text-[13px] text-blue-100/90 leading-relaxed">
                Experienced PMs who keep your project on time and on budget using <strong className="text-white font-semibold">Agile, Waterfall</strong>, or whichever methodology suits your needs.
              </p>
            </div>

            {/* 3D Isometric Timeline Sprint Gantt Schedule Bars */}
            <div className="mt-8 flex justify-center items-end select-none">
              <div className="w-full h-32 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 200 120" className="w-full h-full drop-shadow-lg">
                  {/* Isometric base grid plane */}
                  <path d="M100 20 L190 70 L100 115 L10 70 Z" fill="#0E3D75" />

                  {/* Stepped Gantt timeline bars */}
                  {/* Bar 1 */}
                  <path d="M35 60 L75 80 L70 85 L30 65 Z" fill="#60A5FA" />
                  <path d="M35 55 L75 75 L75 80 L35 60 Z" fill="#93C5FD" />

                  {/* Bar 2 */}
                  <path d="M70 45 L125 75 L120 80 L65 50 Z" fill="#3B82F6" />
                  <path d="M70 40 L125 70 L125 75 L70 45 Z" fill="#60A5FA" />

                  {/* Bar 3 */}
                  <path d="M110 35 L170 65 L165 70 L105 40 Z" fill="#2563EB" />
                  <path d="M110 30 L170 60 L170 65 L110 35 Z" fill="#38BDF8" />

                  {/* Bar 4 */}
                  <path d="M130 55 L180 80 L175 85 L125 60 Z" fill="#1D4ED8" />
                  <path d="M130 50 L180 75 L180 80 L130 55 Z" fill="#60A5FA" />
                </svg>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* ROW 4 - CARD 8: SEO & Social Media Marketing (Wide 2 Cols)   */}
          {/* ------------------------------------------------------------ */}
          <div
            onClick={() => onNavigate('service-detail', 'seo-marketing')}
            className="rounded-3xl bg-white p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border border-slate-200/90 md:col-span-2 shadow-2xs"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-6 space-y-3">
                <h3 className="text-xl lg:text-[22px] font-bold text-slate-900 leading-snug">
                  SEO & Social Media Marketing
                </h3>
                <p className="text-xs lg:text-[13px] text-slate-500 leading-relaxed max-w-sm">
                  Search engine optimisation, SEM, and social strategies that grow your visibility and convert the right audience.
                </p>

                {/* Floating Social Media Badges */}
                <div className="pt-4 flex items-center gap-2.5 select-none">
                  {/* Facebook */}
                  <div className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    f
                  </div>
                  {/* Instagram */}
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center text-xs shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  {/* X */}
                  <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    𝕏
                  </div>
                  {/* LinkedIn */}
                  <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    in
                  </div>
                  {/* Snapchat */}
                  <div className="w-8 h-8 rounded-lg bg-[#FFFC00] text-black flex items-center justify-center font-bold text-xs shadow-xs">
                    👻
                  </div>
                </div>
              </div>

              {/* Right Side: Analytics Wave + 3D Rocket + 3D "SEO" Keycap */}
              <div className="sm:col-span-6 flex items-center justify-center sm:justify-end gap-3 select-none">
                {/* 3D Space Rocket */}
                <div className="w-24 h-28 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 120 140" className="w-full h-full drop-shadow-md">
                    {/* Fire rocket exhaust plume */}
                    <path d="M45 105 C40 125 55 140 60 140 C65 140 80 125 75 105 Z" fill="#F97316" />
                    <path d="M50 105 C46 120 56 130 60 130 C64 130 74 120 70 105 Z" fill="#FBBF24" />

                    {/* Rocket Wings / Fins */}
                    <path d="M35 85 L20 108 L45 100 Z" fill="#18529B" />
                    <path d="M85 85 L100 108 L75 100 Z" fill="#18529B" />

                    {/* Rocket Main Body */}
                    <path d="M60 15 C75 35 80 75 80 100 L40 100 C40 75 45 35 60 15 Z" fill="#E2E8F0" />
                    <path d="M60 15 C68 35 72 75 72 100 L60 100 Z" fill="#CBD5E1" />

                    {/* Porthole Glass Window */}
                    <circle cx="60" cy="55" r="10" fill="#0284C7" stroke="#FFFFFF" strokeWidth="3" />
                    <circle cx="62" cy="53" r="3" fill="#FFFFFF" />
                  </svg>
                </div>

                {/* 3D "SEO" Keyboard Keycap */}
                <div className="w-22 h-22 rounded-2xl bg-gradient-to-b from-[#2563EB] to-[#18529B] text-white p-3 shadow-xl shadow-blue-900/30 flex items-center justify-center border-t-2 border-blue-300 transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <span className="font-black text-xl lg:text-2xl tracking-wider drop-shadow-sm font-sans">
                    SEO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Matches requirement: "only in bleow 768 show one by one"        */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-6">
          {/* Card counter header with Prev/Next buttons */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Service {mobileIndex + 1} of 8
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevCard}
                aria-label="Previous service"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextCard}
                aria-label="Next service"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white flex items-center justify-center shadow-xs hover:bg-[#133F77] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE SERVICE CARD DISPLAYED ONE BY ONE */}
          <div className="transition-all duration-300">
            {mobileIndex === 0 && (
              <div
                onClick={() => onNavigate('service-detail', 'mobile-app')}
                className="rounded-3xl bg-[#124E96] text-white p-7 flex flex-col justify-between min-h-[380px] shadow-lg cursor-pointer"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Mobile App Development</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Native <strong className="text-white font-semibold">Android</strong> and <strong className="text-white font-semibold">iOS apps</strong>, designed and built to production grade, from UI to App Store submission.
                  </p>
                </div>
                <div className="pt-6 flex justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-200">
                    Explore service <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}

            {mobileIndex === 1 && (
              <div
                onClick={() => onNavigate('service-detail', 'web-enterprise')}
                className="rounded-3xl bg-white p-7 flex flex-col justify-between min-h-[380px] shadow-lg border border-slate-200 cursor-pointer"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">Web & Enterprise Apps</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Full-stack platforms, enterprise portals, and custom tools built for real workloads and complex workflows.
                  </p>
                </div>
                <div className="py-6 flex items-center justify-center">
                  <span className="text-5xl font-black text-[#18529B] font-mono">&lt;/&gt;</span>
                </div>
                <div className="pt-2 flex justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18529B]">
                    Explore service <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}

            {mobileIndex === 2 && (
              <div
                onClick={() => onNavigate('service-detail', 'ai-app')}
                className="rounded-3xl bg-gradient-to-b from-[#EFF6FD] to-[#DDEBFA] p-7 flex flex-col justify-between min-h-[380px] shadow-lg border border-blue-200 cursor-pointer"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">AI App Development</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Industry 4.0 solutions using <strong className="text-slate-900 font-semibold">AI, ML</strong>, and <strong className="text-slate-900 font-semibold">IoT</strong>, intelligent automation and data-driven tools that change how you work.
                  </p>
                </div>
                <div className="py-4 flex justify-center">
                  <div className="px-4 py-2 rounded-xl bg-[#18529B] text-white font-extrabold text-sm tracking-wider">
                    AI Solutions
                  </div>
                </div>
                <div className="pt-2 flex justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18529B]">
                    Explore service <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}

            {mobileIndex === 3 && (
              <div
                onClick={() => onNavigate('service-detail', 'devops')}
                className="rounded-3xl bg-white p-7 flex flex-col justify-between min-h-[380px] shadow-lg border border-slate-200 cursor-pointer"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">DevOps</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    CI/CD pipelines, cloud infrastructure, and thorough QA incorporated into every stage of delivery, not bolted on at the end.
                  </p>
                </div>
                <div className="py-4 flex justify-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-bold text-slate-700">GitHub</span>
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 text-xs font-bold text-blue-600">Docker</span>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-xs font-bold text-indigo-600">K8s</span>
                </div>
                <div className="pt-2 flex justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18529B]">
                    Explore service <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}

            {mobileIndex === 4 && (
              <div
                onClick={() => onNavigate('service-detail', 'erp')}
                className="rounded-3xl bg-[#124E96] text-white p-7 flex flex-col justify-between min-h-[380px] shadow-lg cursor-pointer"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">ERP Systems</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Custom enterprise resource planning that unifies your operations, finance, and team management in one platform.
                  </p>
                </div>
                <div className="pt-6 flex justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-200">
                    Explore service <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}

            {mobileIndex === 5 && (
              <div
                onClick={() => onNavigate('service-detail', 'business-auditing')}
                className="rounded-3xl bg-white p-7 flex flex-col justify-between min-h-[380px] shadow-lg border border-slate-200 cursor-pointer"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">Business Auditing</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We analyze your tech, processes, and operations and give you a clear, expansive report on what to fix and how.
                  </p>
                </div>
                <div className="py-4 flex justify-center gap-3">
                  <span className="text-xs font-bold text-[#18529B]">Research</span>
                  <span className="text-slate-300">→</span>
                  <span className="text-xs font-bold text-slate-700">Design</span>
                  <span className="text-slate-300">→</span>
                  <span className="text-xs font-bold text-[#18529B]">Sourcing</span>
                </div>
                <div className="pt-2 flex justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18529B]">
                    Explore service <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}

            {mobileIndex === 6 && (
              <div
                onClick={() => onNavigate('service-detail', 'project-management')}
                className="rounded-3xl bg-[#124E96] text-white p-7 flex flex-col justify-between min-h-[380px] shadow-lg cursor-pointer"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Project Management</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Experienced PMs who keep your project on time and on budget using <strong className="text-white font-semibold">Agile, Waterfall</strong>, or whichever methodology suits your needs.
                  </p>
                </div>
                <div className="pt-6 flex justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-200">
                    Explore service <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}

            {mobileIndex === 7 && (
              <div
                onClick={() => onNavigate('service-detail', 'seo-marketing')}
                className="rounded-3xl bg-white p-7 flex flex-col justify-between min-h-[380px] shadow-lg border border-slate-200 cursor-pointer"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">SEO & Social Media Marketing</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Search engine optimisation, SEM, and social strategies that grow your visibility and convert the right audience.
                  </p>
                </div>
                <div className="py-4 flex justify-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-blue-600 to-[#18529B] text-white flex items-center justify-center font-bold text-base shadow-md">
                    SEO
                  </div>
                </div>
                <div className="pt-2 flex justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18529B]">
                    Explore service <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Navigation Dots for Mobile */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
              <button
                key={idx}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Jump to service ${idx + 1}`}
                className={`transition-all rounded-full h-1.5 ${
                  mobileIndex === idx
                    ? 'w-7 bg-[#18529B]'
                    : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* CENTERED PILL BUTTON MATCHING Frame 2121455052.png             */}
        {/* ============================================================== */}
        <div className="mt-14 text-center">
          <Button
            variant="primary"
            size="md"
            rounded="full"
            onClick={() => onNavigate('services')}
            iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
            className="px-8 py-3 bg-[#18529B] hover:bg-[#133F77] shadow-md font-semibold text-sm cursor-pointer"
          >
            See all services
          </Button>
        </div>
      </Container>
    </section>
  );
};
