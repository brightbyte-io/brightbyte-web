import { MainHeading } from '../ui/MainHeading';
import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, Clock, Users, DollarSign } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export interface InteractiveEstimatorProps {
  onOpenConsultationWithScope: (scope: {
    serviceType: string;
    budget: string;
    description: string;
  }) => void;
}

export const InteractiveEstimator: React.FC<InteractiveEstimatorProps> = ({
  onOpenConsultationWithScope,
}) => {
  const [serviceType, setServiceType] = useState<string>('mobile');
  const [projectScale, setProjectScale] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [capabilities, setCapabilities] = useState<string[]>([
    'cloud_infra',
    'auth_rbac',
  ]);

  const toggleCapability = (id: string) => {
    setCapabilities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getEstimation = () => {
    let weeks = '6 – 8 Weeks';
    let budget = '$25,000 – $45,000 CAD';
    let team = '1 Technical Lead, 2 Senior Full-Stack Engineers, 1 QA Specialist';

    if (projectScale === 'mvp') {
      weeks = '3 – 5 Weeks';
      budget = '$12,000 – $25,000 CAD';
      team = '1 Senior Lead Architect, 1 Senior Full-Stack Engineer';
    } else if (projectScale === 'enterprise') {
      weeks = '10 – 16 Weeks';
      budget = '$50,000 – $100,000+ CAD';
      team = '1 Solutions Architect, 3 Senior Devs, 1 DevOps Engineer, 1 Dedicated QA';
    }

    if (capabilities.length >= 3 && projectScale === 'growth') {
      weeks = '8 – 10 Weeks';
      budget = '$35,000 – $55,000 CAD';
    }

    return { weeks, budget, team };
  };

  const est = getEstimation();

  const handleApplyScope = () => {
    onOpenConsultationWithScope({
      serviceType,
      budget: est.budget,
      description: `Project Scope: ${projectScale.toUpperCase()} scale with ${capabilities.join(', ')}`,
    });
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50/40 border-b border-slate-200/80">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="bluePill">INSTANT SCOPING CALCULATOR</Badge>
          <MainHeading headingKey="InteractiveEstimator" as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Select your target engagement model and architectural components to receive an instant sprint timeline and squad composition estimate.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-8">
          {/* Service Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              1. Primary Discipline or Service
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'mobile', label: 'Mobile App' },
                { id: 'web', label: 'Web & Enterprise' },
                { id: 'ai', label: 'AI & Data Engineering' },
                { id: 'devops', label: 'DevOps & Cloud' },
                { id: 'erp', label: 'ERP & Systems' },
                { id: 'auditing', label: 'Code / Sec Audit' },
                { id: 'pm', label: 'Agile Delivery' },
                { id: 'oem', label: 'OEM Global Sourcing' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setServiceType(item.id)}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                    serviceType === item.id
                      ? 'bg-[#18529B] text-white border-[#18529B] shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Scale */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              2. Solution Scale & Maturity
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: 'mvp',
                  title: 'Rapid MVP / Pilot',
                  desc: 'Core feature validation, rapid prototype, initial test launch',
                },
                {
                  id: 'growth',
                  title: 'Growth / Production',
                  desc: 'Full-featured robust platform ready for scale and paying customers',
                },
                {
                  id: 'enterprise',
                  title: 'Enterprise Architecture',
                  desc: 'High-availability, zero-downtime microservices, strict compliance',
                },
              ].map((scale) => (
                <button
                  key={scale.id}
                  onClick={() => setProjectScale(scale.id as any)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    projectScale === scale.id
                      ? 'bg-blue-50/70 border-[#18529B] ring-1 ring-[#18529B]'
                      : 'bg-slate-50/60 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold text-sm text-slate-900 mb-1">{scale.title}</div>
                  <div className="text-xs text-slate-500 leading-normal">{scale.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Capabilities multi-select */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              3. Architectural Capabilities
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'cloud_infra', label: 'AWS / Azure / GCP Cloud Infra' },
                { id: 'auth_rbac', label: 'SSO & Multi-Role RBAC' },
                { id: 'payments', label: 'Payment & Billing Integrations' },
                { id: 'ai_copilot', label: 'LLM / AI Workflows' },
                { id: 'realtime_sync', label: 'WebSockets & Real-Time Sync' },
                { id: 'cicd_audit', label: 'Automated CI/CD & Pentest' },
              ].map((cap) => {
                const isChecked = capabilities.includes(cap.id);
                return (
                  <button
                    key={cap.id}
                    onClick={() => toggleCapability(cap.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs text-left cursor-pointer transition-colors ${
                      isChecked
                        ? 'border-[#18529B] bg-blue-50/50 text-[#18529B] font-semibold'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked
                          ? 'border-[#18529B] bg-[#18529B] text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{cap.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Estimated Output Result */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                  Estimated Delivery Window
                </span>
                <div className="text-2xl font-bold flex items-center gap-2 mt-1">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>{est.weeks}</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                  Indicative Budget Range
                </span>
                <div className="text-2xl font-bold text-emerald-400 flex items-center gap-1 mt-1">
                  <span>{est.budget}</span>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Recommended Squad Composition:
              </span>
              <p className="text-sm font-semibold text-slate-200">
                {est.team}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                *Includes full intellectual property transfer, milestone code releases, and warranty period.
              </p>
              <Button
                variant="white"
                size="md"
                onClick={handleApplyScope}
                iconRight={<ArrowRight className="w-4 h-4 text-slate-900" />}
                className="shrink-0"
              >
                Schedule Scoping Session
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
