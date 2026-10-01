import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Settings, SlidersHorizontal, Clock, Heart, User, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';

// Apple Logo SVG
export const AppleLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 170 170"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.8-8.12-12.33-15.12-6.53-10.15-11.75-21.72-15.66-34.71-3.91-13-5.86-25.26-5.86-36.79 0-14.34 3.59-26.24 10.77-35.7 7.18-9.45 16.27-14.28 27.27-14.49 4.35 0 9.4 1.16 15.15 3.49 5.75 2.33 9.46 3.54 11.13 3.65 1.52-.11 5.37-1.38 11.55-3.81 6.18-2.43 11.28-3.54 15.3-3.33 10.87.53 19.82 4.65 26.85 12.37-9.56 5.82-14.24 13.96-14.04 24.43.21 8.25 3.4 15.22 9.57 20.93 6.17 5.71 13.55 8.94 22.14 9.68-2.33 7.08-5.24 14.38-8.73 21.9zM119.22 31.06c0-6.77 2.43-13.23 7.29-19.38 4.87-6.14 11.05-10.42 18.55-12.83-.22 1.37-.48 2.75-.79 4.12-1.38 6.56-4.44 12.69-9.19 18.39-4.76 5.71-10.68 9.57-17.76 11.58-.42-.64-.85-1.28-1.29-1.93-.54-.95-.81-1.97-.81-3.05z" />
  </svg>
);

// Android Mascot SVG
export const AndroidMascotIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 100 80"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <line x1="28" y1="18" x2="16" y2="4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <line x1="72" y1="18" x2="84" y2="4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M12 55C12 34 29 18 50 18C71 18 88 34 88 55H12Z" />
    <circle cx="34" cy="38" r="4.5" fill="white" />
    <circle cx="66" cy="38" r="4.5" fill="white" />
  </svg>
);

export interface MobileAppHeroProps {
  onOpenConsultation?: () => void;
  onNavigate?: (page: any, detailId?: string) => void;
}

export const MobileAppHero: React.FC<MobileAppHeroProps> = ({
  onOpenConsultation,
}) => {
  // Mobile index for screens below 768px ("show one by one")
  const [mobileStep, setMobileStep] = useState(0);

  const nextStep = () => setMobileStep((prev) => (prev + 1) % 3);
  const prevStep = () => setMobileStep((prev) => (prev - 1 + 3) % 3);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#F5F9FE] via-[#F8FBFE] to-white border-b border-slate-100">
      {/* Background ambient soft glows */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -top-12 right-0 w-[550px] h-[550px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* FOR ALL SCREENS >= 768px: SAME ROW SIDE-BY-SIDE SPLIT          */}
        {/* Exactly matching Frame 2121455182 (2).png                      */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Eyebrow, Supporting Copy, CTA */}
          <div className="md:col-span-6 lg:col-span-6 space-y-6 lg:pr-4">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#18529B]">
              MOBILE APP DEVELOPMENT
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Native Android and iOS<br />apps, built to launch<br />and built to last.
            </h1>

            <p className="text-base sm:text-lg lg:text-[17px] text-slate-500 font-normal leading-relaxed max-w-xl">
              From a focused MVP to a fully featured consumer or enterprise app, UI/UX, development, QA, and store submission, all handled by one dedicated team.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#18529B] text-white text-sm sm:text-base font-semibold hover:bg-[#133F77] transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Let's build an app</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composition matching Frame 2121455182 (2).png */}
          <div className="hidden md:block md:col-span-6 lg:col-span-6 relative">
            <div className="relative w-full max-w-xl mx-auto min-h-[480px] lg:min-h-[520px] flex items-center justify-center">
              {/* 1. BACKGROUND PHONE (Offset right & back) */}
              <div className="absolute right-4 lg:right-8 top-3 w-[220px] sm:w-[235px] h-[440px] sm:h-[470px] rounded-[34px] bg-white border-[3px] border-slate-200/90 shadow-lg p-2.5 flex flex-col pointer-events-none opacity-85 z-0">
                {/* Speaker pill notch */}
                <div className="w-16 h-3.5 bg-slate-200 rounded-full mx-auto mt-1 mb-3" />

                {/* Circular Gauge Card */}
                <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100 flex flex-col items-center justify-center my-2 shadow-2xs">
                  <svg viewBox="0 0 100 60" className="w-24 h-14">
                    <path
                      d="M 15 50 A 35 35 0 0 1 85 50"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 15 50 A 35 35 0 0 1 70 20"
                      fill="none"
                      stroke="#4F8AC9"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 22 50 A 28 28 0 0 1 78 50"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="1.2"
                      strokeDasharray="2 3"
                    />
                  </svg>
                </div>

                {/* List rows */}
                <div className="space-y-2 mt-2 px-1">
                  <div className="h-4 bg-slate-100 rounded-md w-full" />
                  <div className="h-4 bg-slate-100 rounded-md w-4/5" />
                  <div className="h-4 bg-slate-100 rounded-md w-full" />
                </div>

                {/* Bottom bar */}
                <div className="mt-auto pt-2 border-t border-slate-100 flex items-center justify-around text-slate-300">
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-200" />
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-200" />
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-200" />
                </div>
              </div>

              {/* 2. FOREGROUND PHONE (Main, Center-Left) */}
              <div className="relative z-10 w-[245px] sm:w-[260px] h-[470px] sm:h-[500px] rounded-[38px] bg-white border-[3px] border-slate-300/90 shadow-2xl p-3 flex flex-col -ml-16 sm:-ml-20">
                {/* Speaker notch */}
                <div className="w-20 h-4 bg-slate-200 rounded-full mx-auto mt-1 mb-2.5" />

                {/* Header bar: left pill & right circular avatar */}
                <div className="flex items-center justify-between px-1 mb-2.5">
                  <div className="space-y-1">
                    <div className="w-14 h-2 bg-slate-200 rounded-full" />
                    <div className="w-9 h-1.5 bg-slate-100 rounded-full" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#18529B] flex items-center justify-center text-white">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
                  </div>
                </div>

                {/* Search bar placeholder */}
                <div className="flex items-center justify-between px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50/70 mb-2.5 text-[10px] text-slate-400">
                  <span>Search places</span>
                  <SlidersHorizontal className="w-3 h-3 text-slate-400" />
                </div>

                {/* Category pills */}
                <div className="flex items-center gap-1.5 mb-2.5">
                  <div className="w-14 h-5 rounded-full bg-[#18529B]" />
                  <div className="w-11 h-5 rounded-full bg-slate-100" />
                  <div className="w-11 h-5 rounded-full bg-slate-100" />
                </div>

                {/* Featured Scenery Image Card (Teal/Ocean Gradient with Mountain Silhouette) */}
                <div className="relative h-44 rounded-2xl bg-gradient-to-br from-[#4EA8A1] via-[#2F8590] to-[#1E5666] overflow-hidden shadow-inner flex flex-col justify-end p-2.5">
                  {/* Sun / Moon circle */}
                  <div className="absolute top-4 right-5 w-7 h-7 rounded-full bg-white/35 blur-2xs" />
                  {/* Mountain silhouettes */}
                  <svg
                    viewBox="0 0 200 110"
                    fill="none"
                    className="absolute bottom-0 inset-x-0 w-full h-28 pointer-events-none"
                  >
                    <path
                      d="M-20 110 L50 45 L110 85 L165 25 L230 110 Z"
                      fill="#154452"
                      opacity="0.85"
                    />
                    <path
                      d="M30 110 L95 60 L140 90 L195 40 L240 110 Z"
                      fill="#1E5C6E"
                      opacity="0.65"
                    />
                  </svg>
                </div>

                {/* Bottom Navigation Icons */}
                <div className="mt-auto pt-2 border-t border-slate-100 flex items-center justify-around text-slate-400 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <Heart className="w-3.5 h-3.5" />
                  <User className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* 3. FLOATING BADGES AROUND PHONES (Matching Screenshot) */}
              {/* Badge 1: Top-Left Code Symbol </> */}
              <div className="absolute -left-3 sm:left-2 top-28 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-[#18529B] font-extrabold text-base">
                &lt;/&gt;
              </div>

              {/* Badge 2: Middle-Left Gear Settings */}
              <div className="absolute -left-1 sm:left-4 top-52 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-[#18529B]">
                <Settings className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* Badge 3: Top-Right Android Mascot with text */}
              <div className="absolute right-12 sm:right-16 top-16 z-20 w-14 h-14 rounded-full bg-white shadow-lg border border-slate-100 flex flex-col items-center justify-center text-[#3DDC84] p-1">
                <AndroidMascotIcon className="w-6 h-6 text-[#3DDC84]" />
                <span className="text-[8px] font-bold text-slate-800 -mt-0.5 tracking-tighter">android</span>
              </div>

              {/* Badge 4: Bottom-Right Apple Logo */}
              <div className="absolute right-0 sm:right-2 bottom-20 z-20 w-14 h-14 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-900">
                <AppleLogoIcon className="w-6 h-6" />
              </div>

              {/* 4. FLOATING "READY TO GO LIVE!" TOAST NOTIFICATION */}
              <div className="absolute -bottom-2 -left-6 sm:left-0 z-30 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-3 min-w-[210px]">
                <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 shadow-xs text-white">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                    Ready to go live!
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    All checks passed
                  </div>
                </div>
              </div>

              {/* 5. SOFT REFLECTION FLOOR SHADOWS */}
              <div className="absolute -bottom-5 left-1/3 -translate-x-1/2 w-72 h-5 bg-slate-400/25 blur-lg rounded-full pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-5 pt-8 max-w-sm mx-auto">
          {/* Mobile Stepper Header with Cursor Click Controls */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {mobileStep === 0 && '01 / LAUNCH EXPERIENCE'}
              {mobileStep === 1 && '02 / PERFORMANCE & GAUGE'}
              {mobileStep === 2 && '03 / NATIVE ECOSYSTEMS'}
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

          {/* ACTIVE DEVICE SHOWN ONE BY ONE */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center space-y-4">
            {mobileStep === 0 && (
              <div className="flex flex-col items-center w-full">
                {/* Foreground Phone Rendered on Mobile */}
                <div className="w-[230px] h-[400px] rounded-[34px] bg-white border-[3px] border-slate-300 shadow-xl p-2.5 flex flex-col relative overflow-hidden">
                  <div className="w-16 h-3 bg-slate-200 rounded-full mx-auto mt-0.5 mb-2" />
                  <div className="flex items-center justify-between px-1 mb-2">
                    <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
                    <div className="w-5 h-5 rounded-full bg-[#18529B]" />
                  </div>
                  <div className="px-2 py-1 rounded-lg border border-slate-200 bg-slate-50 mb-2 text-[9px] text-slate-400 flex items-center justify-between">
                    <span>Search places</span>
                    <SlidersHorizontal className="w-2.5 h-2.5" />
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-12 h-4 rounded-full bg-[#18529B]" />
                    <div className="w-9 h-4 rounded-full bg-slate-100" />
                  </div>
                  <div className="h-36 rounded-xl bg-gradient-to-br from-[#4EA8A1] via-[#2F8590] to-[#1E5666] relative overflow-hidden p-2 text-white">
                    <div className="w-5 h-5 rounded-full bg-white/30 absolute top-2 right-3" />
                  </div>
                </div>

                {/* Floating "Ready to go live!" Toast */}
                <div className="mt-3 bg-white rounded-2xl p-3 shadow-md border border-slate-100 flex items-center gap-3 w-[230px]">
                  <div className="w-7 h-7 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Ready to go live!</div>
                    <div className="text-[10px] text-slate-500">All checks passed</div>
                  </div>
                </div>
              </div>
            )}

            {mobileStep === 1 && (
              <div className="flex flex-col items-center w-full">
                {/* Background Gauge Phone Rendered on Mobile */}
                <div className="w-[230px] h-[400px] rounded-[34px] bg-white border-[3px] border-slate-200 shadow-xl p-2.5 flex flex-col relative overflow-hidden">
                  <div className="w-16 h-3 bg-slate-200 rounded-full mx-auto mt-0.5 mb-2" />
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col items-center justify-center my-3">
                    <svg viewBox="0 0 100 60" className="w-24 h-14">
                      <path d="M 15 50 A 35 35 0 0 1 85 50" fill="none" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
                      <path d="M 15 50 A 35 35 0 0 1 70 20" fill="none" stroke="#4F8AC9" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="space-y-2 px-1">
                    <div className="h-3.5 bg-slate-100 rounded w-full" />
                    <div className="h-3.5 bg-slate-100 rounded w-3/4" />
                    <div className="h-3.5 bg-slate-100 rounded w-full" />
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-800 text-center mt-3">
                  Telemetry & Performance Dashboards
                </div>
              </div>
            )}

            {mobileStep === 2 && (
              <div className="flex flex-col items-center justify-center py-6 space-y-4">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center text-[#3DDC84] p-1">
                    <AndroidMascotIcon className="w-7 h-7 text-[#3DDC84]" />
                    <span className="text-[9px] font-bold text-slate-800">android</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-900">
                    <AppleLogoIcon className="w-7 h-7" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#18529B] font-bold">
                    &lt;/&gt;
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#18529B]">
                    <Settings className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-800 text-center">
                  Android & Apple Ecosystem Compliance
                </div>
              </div>
            )}

            <div className="w-full pt-3">
              <button
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#18529B] text-white text-xs sm:text-sm font-semibold hover:bg-[#133F77] shadow-xs cursor-pointer"
              >
                <span>Let's build an app</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setMobileStep(idx)}
                aria-label={`Go to step ${idx + 1}`}
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
