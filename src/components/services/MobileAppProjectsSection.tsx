import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

export interface ProjectCardItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const PORTFOLIO_PROJECTS: ProjectCardItem[] = [
  {
    id: 'banking-app',
    tag: 'IOS & ANDROID',
    title: 'Consumer banking app',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc dictum in risus suspendisse vitae nulla amet.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    alt: 'Hand holding smartphone with consumer banking interface',
  },
  {
    id: 'self-service-app',
    tag: 'IOS & ANDROID',
    title: 'Self-service app',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc dictum in risus suspendisse vitae nulla amet.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    alt: 'Person using self-service ordering application on mobile device at table',
  },
  {
    id: 'marketplace-mvp',
    tag: 'IOS & ANDROID',
    title: 'Marketplace MVP',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc dictum in risus suspendisse vitae nulla amet.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    alt: 'Laptop displaying marketplace dashboard and platform metrics on desk',
  },
];

export const MobileAppProjectsSection: React.FC = () => {
  // Mobile single card navigation (< 768px: "only in bleow 768 show one by one")
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % PORTFOLIO_PROJECTS.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length);
  };

  const currentProject = PORTFOLIO_PROJECTS[activeStep];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#FAFCFF] border-b border-slate-100 overflow-hidden select-none">
      {/* ============================================================== */}
      {/* AMBIENT CURVED WATERMARK ACCENT IN BOTTOM RIGHT               */}
      {/* Exactly matching subtle curved arc in Frame 2121455066.png    */}
      {/* ============================================================== */}
      <div
        className="absolute -right-24 -bottom-24 w-[500px] h-[500px] rounded-full border-[70px] border-[#18529B]/[0.06] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455066.png                          */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-3">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#18529B]">
            OUR PORTFOLIO
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
            Projects we’ve shipped
          </h2>

          <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            A sample of mobile work. Full case studies with outcomes and metrics.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): 3 CARDS IN A ROW             */}
        {/* Exactly matching Frame 2121455066.png                          */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[26px] overflow-hidden border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-start">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {project.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1528] tracking-tight mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-5 max-w-sm mx-auto select-none pt-2">
          {/* Stepper Header with Navigation Buttons */}
          <div className="flex items-center justify-between px-2 text-slate-500">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Project 0{activeStep + 1} of 0{PORTFOLIO_PROJECTS.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevStep}
                aria-label="Previous project"
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 active:scale-90 flex items-center justify-center transition-all cursor-pointer text-slate-700 border border-slate-200 shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                aria-label="Next project"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white hover:bg-[#133F77] active:scale-90 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE PROJECT CARD DISPLAYED ONE BY ONE */}
          <div className="bg-white rounded-[26px] overflow-hidden border border-slate-200/80 shadow-[0_8px_28px_rgba(0,0,0,0.06)] flex flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <img
                src={currentProject.image}
                alt={currentProject.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col justify-start">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                {currentProject.tag}
              </span>

              <h3 className="text-xl font-extrabold text-[#0B1528] tracking-tight mb-2.5">
                {currentProject.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {currentProject.description}
              </p>
            </div>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {PORTFOLIO_PROJECTS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveStep(idx)}
                aria-label={`Go to ${item.title}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  activeStep === idx
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
