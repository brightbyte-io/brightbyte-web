import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { PageId } from '../../types';

export interface HomeOemSourcingProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const HomeOemSourcing: React.FC<HomeOemSourcingProps> = ({
  onNavigate,
}) => {
  // Mobile index for screens below 768px ("show one by one")
  const [mobileIndex, setMobileIndex] = useState(0);

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

  const nextCard = () => {
    setMobileIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setMobileIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#EFF6FD] via-[#E8F2FC] to-[#EFF6FD] border-b border-blue-100/70">
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
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 lg:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-tight">
            OEM Global Sourcing
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-normal max-w-2xl mx-auto">
            End-to-end sourcing solutions from trusted global suppliers to your doorstep.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): ALL 4 IN THE SAME ROW         */}
        {/* Exactly matching Frame 2121455053.png                          */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-4 gap-5 lg:gap-6 mb-12 select-none">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-3xl p-7 lg:p-8 flex flex-col justify-start shadow-xs hover:shadow-md transition-all duration-300 border border-slate-100/80 group"
            >
              <h3 className="text-xl lg:text-[22px] font-bold text-slate-950 leading-snug mb-3 group-hover:text-[#18529B] transition-colors">
                {card.title}
              </h3>
              <p className="text-sm lg:text-[14px] text-slate-500 leading-relaxed font-normal">
                {card.description}
              </p>
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
              Step {mobileIndex + 1} of {cards.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevCard}
                aria-label="Previous step"
                className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextCard}
                aria-label="Next step"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE CARD SHOWN ONE BY ONE */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 min-h-[200px] flex flex-col justify-center space-y-3 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#18529B] font-extrabold text-xs flex items-center justify-center">
              {cards[mobileIndex].step}
            </div>
            <h3 className="text-2xl font-bold text-slate-950 leading-snug">
              {cards[mobileIndex].title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {cards[mobileIndex].description}
            </p>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {cards.map((card, idx) => (
              <button
                key={card.title}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Go to step ${idx + 1}`}
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
        {/* CENTERED PILL BUTTON MATCHING Frame 2121455053.png             */}
        {/* ============================================================== */}
        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('service-detail', 'oem-sourcing')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#18529B] hover:bg-[#133F77] text-white font-semibold text-sm transition-all shadow-md shadow-blue-900/15 cursor-pointer select-none"
          >
            <span>Learn more</span>
            <span className="text-base font-normal leading-none">→</span>
          </button>
        </div>
      </Container>
    </section>
  );
};
