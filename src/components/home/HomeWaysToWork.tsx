import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { PageId } from '../../types';

export interface HomeWaysToWorkProps {
  onNavigate?: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const HomeWaysToWork: React.FC<HomeWaysToWorkProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  // Mobile index for screens below 768px ("show one by one")
  const [mobileIndex, setMobileIndex] = useState(0);

  const models = [
    {
      num: '01',
      title: 'Staff Augmentation',
      desc: 'Our engineers join your team directly and help you ship 1.5–2× faster. Perfect when you have deadlines or skill gaps.',
    },
    {
      num: '02',
      title: 'Dedicated Teams',
      desc: 'A focused squad assembled for your product, working full-time alongside your existing developers.',
    },
    {
      num: '03',
      title: 'Project Outsourcing',
      desc: 'Hand us the brief and we handle everything. Design, Dev, QA, and Delivery. All the while saving up to 30% in costs.',
    },
    {
      num: '04',
      title: 'Managed IT Services',
      desc: 'Ongoing IT stability, monitoring, and operations for businesses without an in-house IT team.',
    },
  ];

  const nextCard = () => {
    setMobileIndex((prev) => (prev + 1) % models.length);
  };

  const prevCard = () => {
    setMobileIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      {/* Background ambient light arcs matching Figma series */}
      <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full border-[55px] border-blue-50/60 blur-2xl pointer-events-none -z-0" />
      <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border-[60px] border-slate-50/80 blur-2xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER MATCHING Frame 2121455055.png                   */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 lg:mb-16 space-y-2.5">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#18529B]">
            HOW WE ENGAGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-tight">
            Four ways to work with us
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-normal max-w-2xl mx-auto">
            Flexible engagement models built around how your team operates.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): ALL 4 IN THE SAME ROW         */}
        {/* Exactly matching Frame 2121455055.png                          */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-4 gap-5 lg:gap-6 mb-12 select-none">
          {models.map((item) => (
            <div
              key={item.num}
              className="bg-[#F8FAFD] rounded-3xl p-7 lg:p-8 flex flex-col justify-between border border-blue-100/70 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Circular Number Badge */}
                <div className="w-10 h-10 rounded-full border border-blue-200/90 text-[#18529B] font-extrabold text-xs flex items-center justify-center bg-white shadow-2xs group-hover:bg-[#18529B] group-hover:text-white group-hover:border-[#18529B] transition-colors">
                  {item.num}
                </div>

                <h3 className="text-lg lg:text-[21px] font-bold text-slate-950 leading-snug group-hover:text-[#18529B] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs lg:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Matches requirement: "only in bleow 768 show one by one"        */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-6 mb-10 select-none">
          {/* Card counter header with Prev/Next buttons */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Model {mobileIndex + 1} of {models.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevCard}
                aria-label="Previous model"
                className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextCard}
                aria-label="Next model"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE CARD SHOWN ONE BY ONE */}
          <div className="bg-[#F8FAFD] rounded-3xl p-8 shadow-md border border-blue-100/80 min-h-[220px] flex flex-col justify-center space-y-3.5 transition-all duration-300">
            <div className="w-9 h-9 rounded-full bg-white text-[#18529B] font-extrabold text-xs flex items-center justify-center border border-blue-200 shadow-2xs">
              {models[mobileIndex].num}
            </div>
            <h3 className="text-2xl font-bold text-slate-950 leading-snug">
              {models[mobileIndex].title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {models[mobileIndex].desc}
            </p>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {models.map((item, idx) => (
              <button
                key={item.num}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Go to model ${idx + 1}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  mobileIndex === idx
                    ? 'w-6 bg-[#18529B]'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* CENTERED PILL BUTTON MATCHING Frame 2121455055.png             */}
        {/* ============================================================== */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#18529B] hover:bg-[#133F77] text-white font-semibold text-sm transition-all shadow-md shadow-blue-900/15 cursor-pointer select-none"
          >
            <span>Explore engagement models</span>
            <span className="text-base font-normal leading-none">→</span>
          </button>
        </div>
      </Container>
    </section>
  );
};
