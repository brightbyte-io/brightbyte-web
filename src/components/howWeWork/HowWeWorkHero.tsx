import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';

export const HowWeWorkHero: React.FC = () => {
  // Mobile active index for screens below 768px ("only in bleow 768 show one by one")
  const [mobileStep, setMobileStep] = useState(0);

  const nextStep = () => {
    setMobileStep((prev) => (prev + 1) % 2);
  };

  const prevStep = () => {
    setMobileStep((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 bg-[#F3F6FA] border-b border-slate-200/60 overflow-hidden">
      <Container>
        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): EXACT MATCH TO How we workss.png */}
        {/* 2-Column layout: Left text block + Right overhead team photo   */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Eyebrow + Headline + Subtitle */}
          <div className="md:col-span-7 lg:col-span-7 space-y-5">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#18529B]">
              HOW WE WORK
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-[#0B1528] tracking-tight leading-[1.12]">
              Four ways to work with us. Pick the one that fits your project.
            </h1>

            <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-xl">
              We adapt to how your team operates. From embedding a single engineer to taking full ownership of a project end-to-end.
            </p>
          </div>

          {/* Right Column: Overhead Aerial Team Pod Photo */}
          {/* Exactly matching the top-down perspective from How we workss.png */}
          <div className="md:col-span-5 lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_24px_50px_-12px_rgba(24,82,155,0.18)] border border-white/80 bg-white group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Overhead aerial view of tech and product team collaborating at workstations with laptops"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />

              {/* Ambient blue overlay tint matching brand color scheme */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#18529B]/20 via-transparent to-transparent pointer-events-none" />

              {/* Subtle top-down badge indicator */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-700">Dedicated Engineering Pods</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-6">
          {/* Stepper Header with Navigation */}
          <div className="flex items-center justify-between px-1 text-slate-500">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {mobileStep === 0 ? '01 / 02 Overview' : '02 / 02 Collaboration Pod'}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prevStep}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 active:scale-90 flex items-center justify-center transition-all cursor-pointer text-slate-700 border border-slate-200 shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white hover:bg-[#133F77] active:scale-90 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SLIDE 1: The Core Value Proposition & Headline */}
          {mobileStep === 0 && (
            <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-slate-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.05)] space-y-4 animate-fadeIn">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#18529B]">
                HOW WE WORK
              </span>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] tracking-tight leading-tight">
                Four ways to work with us. Pick the one that fits your project.
              </h1>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                We adapt to how your team operates. From embedding a single engineer to taking full ownership of a project end-to-end.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#18529B]">
                <Sparkles className="w-4 h-4" />
                <span>Flexible engagement tailored to your sprint velocity</span>
              </div>
            </div>
          )}

          {/* SLIDE 2: The Overhead Aerial Collaboration Image */}
          {mobileStep === 1 && (
            <div className="bg-white rounded-[24px] overflow-hidden border border-slate-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.05)] animate-fadeIn">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Overhead aerial view of tech and product team collaborating at workstations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#18529B]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#18529B]" />
                  <span className="text-xs font-bold text-slate-900">Dedicated Engineering Pods</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Overhead perspective</span>
              </div>
            </div>
          )}

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {[0, 1].map((idx) => (
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
