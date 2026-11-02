import serviceHeroImages from '../data/serviceHeroImages.json';
﻿import React from 'react';
import { Layers } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { CtaCard } from '../components/layout/CtaCard';
import { MobileAppHero } from '../components/services/MobileAppHero';
import { MobileAppServicesSection } from '../components/services/MobileAppServicesSection';
import { MobileAppWhyChooseSection } from '../components/services/MobileAppWhyChooseSection';
import { MobileAppDeliveryProcessSection } from '../components/services/MobileAppDeliveryProcessSection';
import { MobileAppTechnologiesSection } from '../components/services/MobileAppTechnologiesSection';
import { MobileAppIndustriesSection } from '../components/services/MobileAppIndustriesSection';
import { MobileAppProjectsSection } from '../components/services/MobileAppProjectsSection';
import { FaqSection } from '../components/layout/FaqSection';
import portfolioContent from '../data/portfolioSections.json';
import { servicesData } from '../data/mockData';
import { PageId } from '../types';

export interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId, onOpenConsultation }) => {
  const normalizedId = serviceId.replace(/-development$/, '');
  const service = servicesData.find(item => item.id === serviceId) || servicesData.find(item => item.id === normalizedId) || servicesData.find(item => serviceId.includes(item.id)) || servicesData[0];
  const mobile = service.id === 'mobile-app' || service.id === 'mobile-app-development';
  return <div className="bg-white">
    <MobileAppHero image={serviceHeroImages[service.id as keyof typeof serviceHeroImages]} imageAlt={`${service.title} illustration`} headingKey={`service.${service.id}.hero`} onOpenConsultation={onOpenConsultation} content={mobile ? undefined : { labelKey: service.id, title: service.heroHeadline, description: service.heroSubtitle, button: service.ctaText || "Let's discuss your project" }} />
    <MobileAppServicesSection headingKey={`service.${service.id}.overview`}
      title={mobile ? undefined : service.overviewHeading}
      description={mobile ? undefined : service.overviewDescription}
      tags={mobile ? undefined : service.overviewTags}
      cards={mobile ? undefined : service.features.map((feature, index) => ({ id: `${service.id}-${index}`, title: feature.title, description: feature.description, icon: <Layers className="w-10 h-10 text-slate-950" /> }))}
    />
    <MobileAppWhyChooseSection items={mobile ? undefined : service.whyChoosePoints.map((point, index) => ({ ...point, id: `${service.id}-${index}` }))} subtitle={mobile ? undefined : `What working with our ${service.title.toLowerCase()} team gets you.`} />
    <MobileAppDeliveryProcessSection />
    <MobileAppTechnologiesSection backgroundImage="/images/single-service-what-we-build-with.svg" items={mobile ? undefined : service.technologies.map(item => ({ title: item.category, description: item.skills }))} subtitle={mobile ? undefined : "Chosen for what's right for your project, not what's trending."} />
    <MobileAppIndustriesSection subtitle={mobile ? undefined : 'Experience across regulated and consumer-facing industries alike.'} />
    <MobileAppProjectsSection content={portfolioContent[service.id as keyof typeof portfolioContent] || portfolioContent['mobile-app']} />
    <FaqSection page={mobile ? 'mobile-app' : service.id} />
    <div className="pb-6 sm:pb-8"><Container><CtaCard className="!mt-12 !mb-8" onOpenConsultation={onOpenConsultation} onOpenCalendly={onOpenConsultation} /></Container></div>
  </div>;
};
