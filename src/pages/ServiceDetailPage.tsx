import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, ChevronDown, Smartphone, Globe, Sparkles, Server, Database, FileCheck, CalendarCheck, BarChart3, Users, ShieldCheck, Zap, Layers, ArrowLeft } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CtaCard } from '../components/layout/CtaCard';
import { MobileAppHero } from '../components/services/MobileAppHero';
import { MobileAppServicesSection } from '../components/services/MobileAppServicesSection';
import { MobileAppWhyChooseSection } from '../components/services/MobileAppWhyChooseSection';
import { MobileAppDeliveryProcessSection } from '../components/services/MobileAppDeliveryProcessSection';
import { MobileAppTechnologiesSection } from '../components/services/MobileAppTechnologiesSection';
import { MobileAppIndustriesSection } from '../components/services/MobileAppIndustriesSection';
import { MobileAppProjectsSection } from '../components/services/MobileAppProjectsSection';
import { FaqSection } from '../components/layout/FaqSection';
import { servicesData } from '../data/mockData';
import { PageId, ServiceItem } from '../types';

export interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onNavigate,
  onOpenConsultation,
}) => {
  const service: ServiceItem =
    servicesData.find(
      (s) =>
        s.id === serviceId ||
        s.id === serviceId.replace(/-development$/, '') ||
        serviceId.includes(s.id) ||
        s.id.includes(serviceId)
    ) || servicesData[0];

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'mobile-app-development':
        return <Smartphone className="w-8 h-8 text-[#18529B]" />;
      case 'web-enterprise-app-development':
        return <Globe className="w-8 h-8 text-[#18529B]" />;
      case 'ai-app-development':
        return <Sparkles className="w-8 h-8 text-[#18529B]" />;
      case 'devops':
        return <Server className="w-8 h-8 text-[#18529B]" />;
      case 'erp':
        return <Database className="w-8 h-8 text-[#18529B]" />;
      case 'business-auditing':
        return <FileCheck className="w-8 h-8 text-[#18529B]" />;
      case 'project-management':
        return <CalendarCheck className="w-8 h-8 text-[#18529B]" />;
      case 'seo-and-marketing':
        return <BarChart3 className="w-8 h-8 text-[#18529B]" />;
      case 'oem-global-sourcing':
        return <Users className="w-8 h-8 text-[#18529B]" />;
      default:
        return <Globe className="w-8 h-8 text-[#18529B]" />;
    }
  };

  const getCategoryTitle = (id: string) => {
    switch (id) {
      case 'mobile-app-development':
        return 'MOBILE APP ENGINEERING PRACTICE';
      case 'web-enterprise-app-development':
        return 'WEB & ENTERPRISE ARCHITECTURE';
      case 'ai-app-development':
        return 'ENTERPRISE AI & MACHINE LEARNING';
      case 'devops':
        return 'CLOUD INFRASTRUCTURE & DEVOPS';
      case 'erp':
        return 'ENTERPRISE RESOURCE PLANNING';
      case 'business-auditing':
        return 'TECHNICAL & SECURITY AUDITING';
      case 'project-management':
        return 'AGILE DELIVERY & PMO';
      case 'seo-and-marketing':
        return 'DIGITAL GROWTH & MARKETING';
      case 'oem-global-sourcing':
        return 'GLOBAL SOURCING & DEDICATED PODS';
      default:
        return 'SPECIALIZED PRACTICE';
    }
  };

  const isMobileAppPage =
    service.id === 'mobile-app' ||
    service.id === 'mobile-app-development' ||
    serviceId === 'mobile-app' ||
    serviceId === 'mobile-app-development' ||
    (service.title && service.title.toLowerCase().includes('mobile'));

  return (
    <div className="bg-white">
      {/* 1. First Section: If Mobile App Development, exact match to Frame 2121455182 (2).png */}
      {/* 2. Second Section: Exact match to Frame 2121455061 (1).png */}
      {/* 3. Third Section: Exact match to Frame 2121455056.png */}
      {/* 4. Fourth Section: Exact match to Frame 2121455183.png */}
      {isMobileAppPage ? (
        <>
          <MobileAppHero
            onOpenConsultation={onOpenConsultation}
            onNavigate={onNavigate}
          />
          <MobileAppServicesSection />
          <MobileAppWhyChooseSection />
          <MobileAppDeliveryProcessSection />
          <MobileAppTechnologiesSection />
          <MobileAppIndustriesSection />
          <MobileAppProjectsSection />
          <FaqSection page="mobile-app" />
        </>
      ) : (
        <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 border-b border-slate-100">
          <Container>
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-slate-900 cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <button
                onClick={() => onNavigate('services')}
                className="hover:text-slate-900 cursor-pointer"
              >
                Services
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-900">{service.title}</span>
            </div>

            {/* Hero Section matching other services layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <Badge variant="bluePill">{getCategoryTitle(service.id)}</Badge>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  {service.overviewDescription || service.heroSubtitle || service.fullDescription}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={onOpenConsultation}
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Schedule Technical Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => onNavigate('how-we-work')}
                  >
                    Our Delivery Process
                  </Button>
                </div>

                {/* Quick Guarantees bar */}
                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Dedicated Lead Architect</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Enterprise SLA & NDA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>100% Client Code Ownership</span>
                  </div>
                </div>
              </div>

              {/* Right Visual Card */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/50 via-white to-slate-50 p-7 shadow-md space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-blue-100 flex items-center justify-center shadow-xs">
                    {getServiceIcon(service.id)}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{service.title} Overview</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Engineered and overseen by senior Canadian technical leads and distributed full-stack pods.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Core Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(service.overviewTags || []).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-semibold bg-white border border-slate-200 text-[#18529B] px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Rest of the detail page sections */}
      <div className="py-14 sm:py-20">
        <Container>
          {/* For non-mobile app pages, show the standard capabilities and advantage */}
          {!isMobileAppPage && (
            <>
              {/* Core Capabilities Breakdown (6 cards matching the service screenshot) */}
              <div className="mb-20">
                <div className="max-w-2xl mb-12 space-y-2">
                  <Badge variant="bluePill">PRACTICE CAPABILITIES</Badge>
                  <h2 className="text-3xl font-extrabold text-slate-900">
                    End-to-End Solutions in {service.title}
                  </h2>
                  <p className="text-sm text-slate-600">
                    Comprehensive technical workflows engineered for speed, stability, and zero-defect delivery.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.features.map((feat, idx) => (
                    <Card
                      key={feat.title}
                      variant="white"
                      className="p-6 sm:p-7 space-y-3 border-slate-200 hover:border-[#18529B] hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#18529B] flex items-center justify-center font-bold text-xs">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                          Production-Ready
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base">{feat.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {feat.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Why Choose BrightByte For This Service */}
              <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="max-w-2xl mb-10 space-y-2">
                  <Badge variant="bluePill">THE BRIGHTBYTE ADVANTAGE</Badge>
                  <h2 className="text-3xl font-extrabold text-slate-900">
                    Why Forward-Thinking Teams Partner With Us
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                    <Zap className="w-6 h-6 text-[#18529B]" />
                    <h4 className="font-bold text-slate-900 text-base">Accelerated Sprints</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bi-weekly demo releases with continuous automated testing so you see real working software constantly.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                    <ShieldCheck className="w-6 h-6 text-[#18529B]" />
                    <h4 className="font-bold text-slate-900 text-base">Enterprise Security</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      SOC2-aligned coding guidelines, automated dependency scanning, and zero-trust authentication standard.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                    <Layers className="w-6 h-6 text-[#18529B]" />
                    <h4 className="font-bold text-slate-900 text-base">Modular Architecture</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Clean component boundaries and microservice-ready schemas that your in-house team can inherit with ease.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                    <Users className="w-6 h-6 text-[#18529B]" />
                    <h4 className="font-bold text-slate-900 text-base">Elite Talent Pods</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Only senior software engineers with 5+ years of production experience work on your codebase.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

        {/* Practice FAQs (hidden on Mobile App page as it has dedicated MobileAppFaqSection) */}
        {!isMobileAppPage && (
          <div className="mb-20 max-w-3xl mx-auto">
            <div className="text-center mb-10 space-y-2">
              <Badge variant="bluePill">PRACTICE FAQS</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Questions About {service.title}
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: `How quickly can BrightByte kick off a ${service.title} engagement?`,
                  a: 'Following our initial technical discovery call and architecture scoping session, we typically spin up the dedicated engineering squad and development environment within 5 to 10 business days.',
                },
                {
                  q: 'Who owns the code and intellectual property produced during sprints?',
                  a: 'You retain 100% exclusive intellectual property ownership of all code, schemas, infrastructure configurations, and documentation from day one. Repositories are hosted directly in your organization.',
                },
                {
                  q: 'Can BrightByte collaborate with our existing in-house team?',
                  a: 'Yes. Over 60% of our engagements operate under a hybrid staff augmentation or co-development model where our engineers participate in your daily standups and sprint planning.',
                },
              ].map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#18529B]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Other Services Switcher Bar (hidden on Mobile App page) */}
        {!isMobileAppPage && (
          <div className="mb-20 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Explore Other Practice Areas:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {servicesData
                    .filter((s) => s.id !== service.id)
                    .slice(0, 4)
                    .map((other) => (
                      <button
                        key={other.id}
                        onClick={() => onNavigate('service-detail', other.id)}
                        className="text-xs font-semibold text-[#18529B] bg-white border border-slate-200 px-3 py-1 rounded-lg hover:border-[#18529B] hover:shadow-2xs transition-all cursor-pointer"
                      >
                        {other.title}
                      </button>
                    ))}
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onNavigate('services')}
                iconRight={<ArrowRight className="w-3.5 h-3.5" />}
              >
                All 9 Services
              </Button>
            </div>
          </div>
        )}

        {/* Pre-footer CTA */}
        <CtaCard
          onOpenConsultation={onOpenConsultation}
          onOpenCalendly={onOpenConsultation}
        />
      </Container>
      </div>
    </div>
  );
};
