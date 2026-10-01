import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { HomeTrustedBy } from '../components/home/HomeTrustedBy';
import { HomeBentoServices } from '../components/home/HomeBentoServices';
import { HomeOemSourcing } from '../components/home/HomeOemSourcing';
import { HomeWaysToWork } from '../components/home/HomeWaysToWork';
import { HomeNumbers } from '../components/home/HomeNumbers';
import { HomeHowWeDeliver } from '../components/home/HomeHowWeDeliver';
import { HomeReviews } from '../components/home/HomeReviews';
import { FaqSection } from '../components/layout/FaqSection';
import { CtaCard } from '../components/layout/CtaCard';
import { PageId } from '../types';

export interface HomePageProps {
  onOpenConsultation: () => void;
  onOpenConsultationWithScope?: (scope: {
    serviceType: string;
    budget: string;
    description: string;
  }) => void;
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  return (
    <main className="bg-white">
      {/* 1. Hero: Headline, subhead, 2 buttons, 3D isometric platform */}
      <HomeHero
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* 2. Trusted by the best (Frame 2121455038) */}
      <HomeTrustedBy />

      {/* 3. What We Do: Every service your product needs (8 bento cards) */}
      <HomeBentoServices
        onNavigate={onNavigate}
      />

      {/* 3. OEM Global Sourcing: 4 cards + Learn more */}
      <HomeOemSourcing
        onNavigate={onNavigate}
      />

      {/* 4. How We Engage: Four ways to work with us (01-04 cards + Explore models) */}
      <HomeWaysToWork
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 5. It's all there in the numbers! (50+, 95%, 2x, 30%) */}
      <HomeNumbers />

      {/* 6. What We Do: How we deliver every project (01-04 Design, Dev, Test, Deploy) */}
      <HomeHowWeDeliver />

      {/* 7. Client Reviews: Our work has got people vouching for us! (Slider) */}
      <HomeReviews />

      {/* 8. Frequently Asked Questions */}
      <FaqSection page="home" className="!pt-6 sm:!pt-8 lg:!pt-10" />

      {/* 9. Ready to build something great? (Pre-footer callout) */}
      <CtaCard
        onOpenConsultation={onOpenConsultation}
        onOpenCalendly={onOpenConsultation}
      />
    </main>
  );
};
