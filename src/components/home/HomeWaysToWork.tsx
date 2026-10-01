import React from 'react';
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

  const handleExplore = () => {
    if (onNavigate) {
      onNavigate('how-we-work');
    } else {
      onOpenConsultation();
    }
  };

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-100">
      {/* Background ambient light arcs */}
      <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full border-[55px] border-blue-50/60 blur-2xl pointer-events-none -z-0" />
      <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border-[60px] border-slate-50/80 blur-2xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* ============================================================== */}
          {/* SECTION HEADER MATCHING FIGMA                                  */}
          {/* ============================================================== */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#18529B]">
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
          {/* 2x2 GRID MATCHING FIGMA DESIGN                                 */}
          {/* 2 columns on tablet & desktop, 1 column on mobile               */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            {models.map((item) => (
              <div
                key={item.num}
                className="bg-[#EEF2F5] rounded-[24px] p-7 sm:p-9 lg:p-10 flex flex-col justify-start transition-all duration-300 hover:shadow-md group"
              >
                {/* Circular Number Badge */}
                <div className="w-10 h-10 rounded-full border-2 border-[#18529B] text-[#18529B] font-bold text-sm flex items-center justify-center bg-transparent mb-5">
                  {item.num}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-[#18529B] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm lg:text-[14px] text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ============================================================== */}
          {/* CENTERED PILL BUTTON MATCHING FIGMA                            */}
          {/* ============================================================== */}
          <div className="text-center pt-8 sm:pt-10">
            <button
              onClick={handleExplore}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#18529B] hover:bg-[#133F77] text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-900/15 cursor-pointer"
            >
              <span>Explore engagement models</span>
              <span className="text-base font-normal leading-none">→</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
