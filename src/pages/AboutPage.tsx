import React from 'react';
import { CtaCard } from '../components/layout/CtaCard';
import { AboutHero } from '../components/about/AboutHero';
import { AboutStory } from '../components/about/AboutStory';
import { AboutStatsGlobe } from '../components/about/AboutStatsGlobe';
import { AboutMission } from '../components/about/AboutMission';
import { AboutClients } from '../components/about/AboutClients';
import { PageId } from '../types';

export interface AboutPageProps {
  onOpenConsultation: () => void;
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenConsultation,
}) => {
  return (
    <div className="bg-white">
      {/* 1. First Section: AboutHero matching Frame 2121455182.png */}
      <AboutHero />

      {/* 2. Second Section: AboutStory matching Frame 2121455053 (1).png */}
      <AboutStory />

      {/* 3. Third Section: AboutStatsGlobe matching Frame 2085665124.png */}
      <AboutStatsGlobe />

      {/* 4. Fourth Section: AboutMission matching Frame 2121455054.png */}
      <AboutMission />

      {/* 5. Fifth Section: AboutClients matching Frame 2121455059.png */}
      <AboutClients />

      {/* Pre-footer CTA: Ready to build something great? */}
      <div className="py-8 sm:py-12">
        <CtaCard
          onOpenConsultation={onOpenConsultation}
          onOpenCalendly={onOpenConsultation}
        />
      </div>
    </div>
  );
};
