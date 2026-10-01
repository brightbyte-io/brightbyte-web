import React from 'react';
import { Container } from '../components/layout/Container';
import { CtaCard } from '../components/layout/CtaCard';
import { HowWeWorkHero } from '../components/howWeWork/HowWeWorkHero';
import { HowWeWorkEngagementModelsSection } from '../components/howWeWork/HowWeWorkEngagementModelsSection';
import { MobileAppDeliveryProcessSection } from '../components/services/MobileAppDeliveryProcessSection';
import { MobileAppTechnologiesSection } from '../components/services/MobileAppTechnologiesSection';
import { FaqSection } from '../components/layout/FaqSection';
import { PageId } from '../types';

export interface HowWeWorkPageProps {
  onOpenConsultation: () => void;
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const HowWeWorkPage: React.FC<HowWeWorkPageProps> = ({
  onOpenConsultation,
  onNavigate: _onNavigate,
}) => {
  return (
    <div className="bg-white">
      {/* 1. First Section: Matching How we workss.png */}
      <HowWeWorkHero />

      {/* 2. Second Section: Matching Frame 2121455061 (2).png */}
      <HowWeWorkEngagementModelsSection />

      {/* 3. "How we deliver every project" Section from Mobile App Development */}
      <MobileAppDeliveryProcessSection />

      {/* 4. "What we build with" Section from Mobile App Development */}
      <MobileAppTechnologiesSection />

      {/* 5. "Frequently Asked Questions" Section */}
      <FaqSection page="how-we-work" />

      {/* Pre-footer Call to Action: "Ready to build something great?" */}
      <CtaCard
        onOpenConsultation={onOpenConsultation}
        onOpenCalendly={onOpenConsultation}
      />
    </div>
  );
};
