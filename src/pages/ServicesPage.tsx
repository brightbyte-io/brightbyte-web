import React from 'react';
import { CtaCard } from '../components/layout/CtaCard';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesOverviewSection } from '../components/services/ServicesOverviewSection';
import { FaqSection } from '../components/layout/FaqSection';
import { PageId } from '../types';

export interface ServicesPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="bg-white">
      {/* 1. First Section: ServicesHero matching Frame 2121455182 (1).png */}
      <ServicesHero />

      {/* 2. Second Section: ServicesOverviewSection matching Frame 2121455061.png */}
      <ServicesOverviewSection
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 3. Third Section: Frequently Asked Questions */}
      <FaqSection page="services" />

      {/* Pre-footer CTA */}
      <CtaCard
        onOpenConsultation={onOpenConsultation}
        onOpenCalendly={onOpenConsultation}
      />
    </div>
  );
};
