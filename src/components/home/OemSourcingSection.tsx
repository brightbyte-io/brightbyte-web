import React, { useState } from 'react';
import { Users, Shield, Zap, Clock, CheckCircle2, ArrowRight, Globe, Layers, UserCheck } from 'lucide-react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { engagementModels } from '../../data/mockData';
import { PageId } from '../../types';

export interface OemSourcingSectionProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const OemSourcingSection: React.FC<OemSourcingSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeModelId, setActiveModelId] = useState<string>(engagementModels[0].id);

  const activeModel = engagementModels.find((m) => m.id === activeModelId) || engagementModels[0];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="bluePill">GLOBAL DELIVERY CAPABILITIES</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            End-to-End OEM & Global Sourcing Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Overcome talent shortages, reduce overhead, and accelerate time-to-market with rigorously vetted engineering pods, offshore software teams, and managed technology infrastructure.
          </p>
        </div>

        {/* 4 Models Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {engagementModels.map((model) => {
            const isSelected = model.id === activeModelId;
            return (
              <button
                key={model.id}
                onClick={() => setActiveModelId(model.id)}
                className={`text-left p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#18529B] shadow-md ring-2 ring-[#18529B]/20'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-bold text-sm ${
                    isSelected ? 'bg-[#18529B] text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">{model.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {model.description || model.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Model Deep Dive Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#18529B] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Engagement Model Detail
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Ideal for: {activeModel.idealFor || activeModel.tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeModel.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeModel.description || activeModel.summary}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Advantages & Guarantees
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(activeModel.benefits || (activeModel.features ? activeModel.features.map(f => f.title) : [])).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  onClick={onOpenConsultation}
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss {activeModel.title}
                </Button>
                <button
                  onClick={() => onNavigate('service-detail', 'oem-global-sourcing')}
                  className="text-xs font-bold text-[#18529B] hover:underline cursor-pointer"
                >
                  Read full OEM Global Sourcing guide →
                </button>
              </div>
            </div>

            {/* Quick Model Metric Highlights */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-100 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Operational Framework
              </h4>
              <div className="space-y-3">
                <div className="p-3.5 bg-white rounded-lg border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#18529B]" />
                    <span className="text-xs font-medium text-slate-700">Deployment Velocity</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">1 – 2 Weeks</span>
                </div>
                <div className="p-3.5 bg-white rounded-lg border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <UserCheck className="w-4 h-4 text-[#18529B]" />
                    <span className="text-xs font-medium text-slate-700">Vetting Process</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600">Top 3% Pre-screened</span>
                </div>
                <div className="p-3.5 bg-white rounded-lg border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-[#18529B]" />
                    <span className="text-xs font-medium text-slate-700">IP Protection & NDA</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">100% Client Ownership</span>
                </div>
                <div className="p-3.5 bg-white rounded-lg border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#18529B]" />
                    <span className="text-xs font-medium text-slate-700">Time-Zone Overlap</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">Minimum 4-6 Hours EST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
