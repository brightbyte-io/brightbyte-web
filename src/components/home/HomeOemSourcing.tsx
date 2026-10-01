import React from 'react';
import { Container } from '../layout/Container';
import { PageId } from '../../types';

export interface HomeOemSourcingProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const HomeOemSourcing: React.FC<HomeOemSourcingProps> = ({
  onNavigate,
}) => {
  const cards = [
    {
      step: '01',
      title: 'Supplier Identification',
      description:
        'Verified OEM manufacturers matched to your specifications and budget.',
    },
    {
      step: '02',
      title: 'Quality Control',
      description:
        'Pre-shipment inspection ensuring products meet your requirements before they leave the factory.',
    },
    {
      step: '03',
      title: 'Shipping & Logistics',
      description:
        'Shipped from the source using the most appropriate, yet cost-effective shipping methods.',
    },
    {
      step: '04',
      title: 'Customs & Delivery',
      description:
        'Import documentation, duty handling, and last-mile delivery to your location.',
    },
  ];

  return (
    <section className="relative overflow-hidden py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#EFF6FD] via-[#E8F2FC] to-[#EFF6FD] border-b border-blue-100/70">
      {/* ============================================================== */}
      {/* AMBIENT CURVED LIGHT RINGS MATCHING Frame 2121455053.png       */}
      {/* ============================================================== */}
      {/* Top-left ambient ring arc */}
      <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full border-[60px] border-white/40 blur-2xl pointer-events-none -z-0" />
      <div className="absolute -top-12 -left-12 w-[340px] h-[340px] rounded-full border-[40px] border-sky-100/50 blur-xl pointer-events-none -z-0" />

      {/* Bottom-right ambient ring arc */}
      <div className="absolute -bottom-28 -right-28 w-[560px] h-[560px] rounded-full border-[70px] border-white/50 blur-2xl pointer-events-none -z-0" />
      <div className="absolute -bottom-16 -right-16 w-[420px] h-[420px] rounded-full border-[45px] border-sky-100/60 blur-xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER MATCHING Frame 2121455053.png                   */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12 space-y-2.5">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-tight">
            OEM Global Sourcing
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-normal max-w-2xl mx-auto">
            End-to-end sourcing solutions from trusted global suppliers to your doorstep.
          </p>
        </div>

        {/* ============================================================== */}
        {/* ALL SCREENS: ALL 4 CARDS SHOWN FULLY (NO SLIDER)               */}
        {/* Grid responsive across mobile (1 col), sm (2 cols), md (4 cols)*/}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-3xl p-6 sm:p-7 lg:p-8 flex flex-col justify-start shadow-xs hover:shadow-md transition-all duration-300 border border-slate-100/80 group"
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-slate-950 leading-snug mb-2.5 group-hover:text-[#18529B] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-[14px] text-slate-500 leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* CENTERED PILL BUTTON MATCHING Frame 2121455053.png             */}
        {/* ============================================================== */}
        <div className="text-center pt-1">
          <button
            onClick={() => onNavigate('service-detail', 'oem-sourcing')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#18529B] hover:bg-[#133F77] text-white font-semibold text-sm transition-all shadow-md shadow-blue-900/15 cursor-pointer"
          >
            <span>Learn more</span>
            <span className="text-base font-normal leading-none">→</span>
          </button>
        </div>
      </Container>
    </section>
  );
};
