import React from 'react';
import { ContactHeroSection } from '../components/contact/ContactHeroSection';
import { ContactGlobalLocationsSection } from '../components/contact/ContactGlobalLocationsSection';
import { ContactCalendlyBannerSection } from '../components/contact/ContactCalendlyBannerSection';

export interface ContactPageProps {
  onOpenConsultation?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-white">
      {/* 1. First Section: Consultation Hero Header & Form (Matching Frame 2121455032.png & Frame 2121455261.png) */}
      <ContactHeroSection />

      {/* 2. Second Section: Global Delivery Network World Map (Matching Frame 2121455062.png) */}
      <ContactGlobalLocationsSection />

      {/* 3. Third Section: Calendly Skip-The-Form Banner (Matching Frame 2121455058.png) */}
      <ContactCalendlyBannerSection onOpenCalendly={onOpenConsultation} />
    </div>
  );
};
