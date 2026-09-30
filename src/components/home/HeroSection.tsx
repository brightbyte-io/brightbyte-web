import React from 'react';
import { ArrowRight, Calendar, ShieldCheck, Zap, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { trustedClients, heroStats } from '../../data/mockData';
import { PageId } from '../../types';

export interface HeroSectionProps {
  onOpenConsultation: () => void;
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-18 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      {/* Decorative background grid and gradient accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18529B0a_1px,transparent_1px),linear-gradient(to_bottom,#18529B0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Subtle glowing ambient circles */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-tr from-blue-200/40 via-sky-100/30 to-transparent blur-3xl pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#18529B] text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#18529B] animate-pulse" />
            <span>Digital Engineering & Strategic IT Consulting</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-normal">Toronto, Canada & Worldwide</span>
          </div>

          {/* Headline from Home V1-2 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] [text-wrap:balance]">
            We Build Software That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18529B] via-[#2563eb] to-[#0284c7]">
              Moves Businesses Forward.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            From concept to enterprise deployment, we design, develop, and scale high-impact mobile apps, web systems, AI workflows, and global engineering pods that accelerate growth.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenConsultation}
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('how-we-work')}
              iconLeft={<Calendar className="w-4 h-4 text-[#18529B]" />}
            >
              How We Work
            </Button>
          </div>

          {/* Value Props Micro-Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Dedicated Senior Engineers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full IP & Code Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% On-Time Agile Sprints</span>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-slate-200/80">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#18529B] tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Visual Showcase Banner matching BrightByte Home mockup */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
          {/* Top Browser Bar */}
          <div className="px-5 py-3.5 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400/80" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs font-mono text-slate-500">
                https://brightbyteconsulting.com/ecosystem
              </span>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Active
            </span>
          </div>

          {/* Interactive Core Platform Preview */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-white to-blue-50/40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature card 1 */}
              <div className="p-5 rounded-xl border border-slate-200/80 bg-white/90 shadow-xs space-y-3 hover:border-blue-300 transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#18529B] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Full-Cycle App Engineering</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Architecting native iOS, Android, and responsive web platforms with scalable microservices and zero-downtime CI/CD.
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  <span className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">React Native</span>
                  <span className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Flutter</span>
                  <span className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Next.js</span>
                </div>
              </div>

              {/* Feature card 2 */}
              <div className="p-5 rounded-xl border border-blue-200 bg-gradient-to-b from-blue-50/50 to-white shadow-xs space-y-3 relative overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-[#18529B] text-white flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Enterprise AI & Cloud</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Integrating intelligent LLM workflows, automated predictive pipelines, AWS/Azure Kubernetes, and robust data security.
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  <span className="text-[10px] font-medium bg-blue-100 text-[#18529B] px-2 py-0.5 rounded">GenAI</span>
                  <span className="text-[10px] font-medium bg-blue-100 text-[#18529B] px-2 py-0.5 rounded">Docker</span>
                  <span className="text-[10px] font-medium bg-blue-100 text-[#18529B] px-2 py-0.5 rounded">Kubernetes</span>
                </div>
              </div>

              {/* Feature card 3 */}
              <div className="p-5 rounded-xl border border-slate-200/80 bg-white/90 shadow-xs space-y-3 hover:border-blue-300 transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#18529B] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="font-bold text-slate-900 text-sm">OEM & Global Sourcing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Scaling development pods with pre-vetted international engineering squads, slashing overhead while maintaining elite quality.
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  <span className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Dedicated Squads</span>
                  <span className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">24/7 SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Trust Logos */}
        <div className="mt-14 pt-8 border-t border-slate-200/70 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Trusted by Forward-Thinking Brands & High-Growth Companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
            {trustedClients.map((client) => (
              <div key={client.name} className="flex items-center gap-2 font-bold text-sm text-slate-700">
                <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-xs font-extrabold text-[#18529B]">
                  {client.logo}
                </div>
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
