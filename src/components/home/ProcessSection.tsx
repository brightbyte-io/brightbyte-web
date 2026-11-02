import { MainHeading } from '../ui/MainHeading';
import React from 'react';
import { ArrowRight, Compass, Layout, Code2, ShieldAlert, Rocket, CheckCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { processSteps } from '../../data/mockData';
import { PageId } from '../../types';

export interface ProcessSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const getStepIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Compass className="w-5 h-5 text-[#18529B]" />;
      case '02':
        return <Layout className="w-5 h-5 text-[#18529B]" />;
      case '03':
        return <Code2 className="w-5 h-5 text-[#18529B]" />;
      case '04':
        return <ShieldAlert className="w-5 h-5 text-[#18529B]" />;
      case '05':
        return <Rocket className="w-5 h-5 text-[#18529B]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#18529B]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="bluePill">DELIVERY METHODOLOGY</Badge>
          <MainHeading headingKey="ProcessSection" as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our structured, milestone-driven agile methodology guarantees transparent communication, zero scope surprises, and rigorous engineering excellence.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Connector line for large screens */}
          <div className="hidden lg:block absolute top-14 left-10 right-10 h-0.5 bg-blue-100 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#18529B] hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#18529B] group-hover:text-white transition-colors">
                      {getStepIcon(step.number)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#18529B] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#18529B] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  <span className="text-slate-400 block mb-1 uppercase tracking-wider text-[10px]">Deliverable:</span>
                  <span className="text-slate-700">{step.deliverables?.[0] || 'Technical Milestone'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout & Button */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-base">Want to inspect our detailed agile sprint breakdown?</h4>
            <p className="text-xs text-slate-600">Explore our step-by-step interactive accordion with full governance artifacts and tooling.</p>
          </div>
          <Button
            variant="primary"
            onClick={() => onNavigate('how-we-work')}
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Explore How We Work
          </Button>
        </div>
      </Container>
    </section>
  );
};
