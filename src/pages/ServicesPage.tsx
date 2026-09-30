import React from 'react';
import { CtaCard } from '../components/layout/CtaCard';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesOverviewSection } from '../components/services/ServicesOverviewSection';
import { ServicesFaqSection } from '../components/services/ServicesFaqSection';
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

      {/* 3. Third Section: ServicesFaqSection matching FAQ.png */}
      <ServicesFaqSection />

      {/* Pre-footer CTA */}
      <div className="py-8 sm:py-12">
        <CtaCard
          onOpenConsultation={onOpenConsultation}
          onOpenCalendly={onOpenConsultation}
        />
      </div>
    </div>
  );
};
