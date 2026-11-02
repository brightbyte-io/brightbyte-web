import { MainHeading } from '../ui/MainHeading';
import React from 'react';
import { ArrowRight, Smartphone, Globe, Sparkles, Server, Database, FileCheck, CalendarCheck, BarChart3, Users, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { servicesData } from '../../data/mockData';
import { PageId } from '../../types';

export interface ServicesSectionProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'mobile-app-development':
        return <Smartphone className="w-5 h-5 text-[#18529B]" />;
      case 'web-enterprise-app-development':
        return <Globe className="w-5 h-5 text-[#18529B]" />;
      case 'ai-app-development':
        return <Sparkles className="w-5 h-5 text-[#18529B]" />;
      case 'devops':
        return <Server className="w-5 h-5 text-[#18529B]" />;
      case 'erp':
        return <Database className="w-5 h-5 text-[#18529B]" />;
      case 'business-auditing':
        return <FileCheck className="w-5 h-5 text-[#18529B]" />;
      case 'project-management':
        return <CalendarCheck className="w-5 h-5 text-[#18529B]" />;
      case 'seo-and-marketing':
        return <BarChart3 className="w-5 h-5 text-[#18529B]" />;
      case 'oem-global-sourcing':
        return <Users className="w-5 h-5 text-[#18529B]" />;
      default:
        return <Globe className="w-5 h-5 text-[#18529B]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="bluePill">OUR EXPERTISE</Badge>
          <MainHeading headingKey="ServicesSection" as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From intuitive consumer mobile apps to robust enterprise architectures and AI solutions, we deliver precision digital products tailored to your business goals.
          </p>
        </div>

        {/* 9 Services Grid matching the exact practice areas from the screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => (
            <Card
              key={service.id}
              variant="white"
              hoverEffect={true}
              className="flex flex-col justify-between p-6 sm:p-7 relative group border-slate-200"
            >
              <div>
                {/* Header row with icon & category index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#18529B] group-hover:text-white transition-colors duration-200">
                    <span className="group-hover:text-white transition-colors">
                      {getIcon(service.id)}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#18529B] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {service.overviewDescription || service.shortDescription || service.heroSubtitle}
                </p>

                {/* Key practice bullet tags */}
                <div className="space-y-1.5 mb-6">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18529B]" />
                      <span className="truncate">{feat.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {(service.overviewTags || []).slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => onNavigate('service-detail', service.id)}
                  className="text-xs font-bold text-[#18529B] flex items-center gap-1 hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Explore</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Global CTA button below grid */}
        <div className="mt-14 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={onOpenConsultation}
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Need a Custom Architecture or Team Sizing? Talk to an Expert
          </Button>
        </div>
      </Container>
    </section>
  );
};
