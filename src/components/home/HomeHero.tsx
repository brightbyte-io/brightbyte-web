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
    <section className="relative overflow-hidden pt-28 sm:pt-28 lg:pt-20 pb-4 sm:pb-6 lg:pb-8 bg-white">
      {/* Background SVG from /images/home-hero-background.svg */}
      <img
        src="/images/home-hero-background.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none -z-0"
        draggable={false}
      />

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
            <div className="relative w-full max-w-[480px] md:max-w-[440px] lg:max-w-[580px]">
              <img
                src="/images/home-hero.svg"
                alt="3D Isometric Network Architecture"
                className="w-full h-auto object-contain drop-shadow-md select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
