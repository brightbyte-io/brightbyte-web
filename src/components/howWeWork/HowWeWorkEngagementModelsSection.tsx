import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Zap,
  Cpu,
  Target,
  Clock,
  Users,
  Compass,
  Laptop,
  BarChart3,
  Percent,
  Sliders,
  Layers,
  CalendarCheck,
  ClipboardList,
  RefreshCw,
  TrendingUp,
  Coins,
} from 'lucide-react';
import { Container } from '../layout/Container';

export interface ModelFeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface EngagementModelData {
  number: string;
  title: string;
  badge: string;
  paragraphs: string[];
  features: ModelFeatureCard[];
  bgStyle: 'white' | 'gray';
}

export const ENGAGEMENT_MODELS: EngagementModelData[] = [
  {
    number: '01',
    title: 'Staff Augmentation',
    badge: 'Best for: Skill gaps and deadlines',
    paragraphs: [
      'Our engineers and specialists join your existing team directly, attending standups, committing to your codebase, and working in your tools. There is no lengthy onboarding or process friction.',
    ],
    bgStyle: 'white',
    features: [
      {
        id: 'faster-delivery',
        title: 'Faster delivery',
        description: '1.5–2× velocity increase reported by clients using augmentation.',
        icon: <Zap className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'seamless-integration',
        title: 'Seamless integration',
        description: 'Our engineers work in your tools, your process, your codebase.',
        icon: <Cpu className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'skill-targeted',
        title: 'Skill-targeted',
        description: 'Add exactly the expertise you need, not a generic package.',
        icon: <Target className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'flexible-duration',
        title: 'Flexible duration',
        description: 'Scale up or down as your project needs change.',
        icon: <Clock className="w-5 h-5 text-[#18529B]" />,
      },
    ],
  },
  {
    number: '02',
    title: 'Dedicated Teams',
    badge: 'Best for: Product roadmaps',
    paragraphs: [
      'We assemble a cross-functional team built around your specific product. Designers, Developers and QA working full-time alongside your own staff.',
      'This works well for companies that have project deadlines or skill gaps but want a team that integrates closely with their existing developers rather than taking the project over entirely.',
    ],
    bgStyle: 'gray',
    features: [
      {
        id: 'cross-functional',
        title: 'Cross-functional',
        description: 'Dev, design, and QA assembled specifically for your product.',
        icon: <Users className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'product-focused',
        title: 'Product-focused',
        description: 'Your dedicated team is not split across other clients.',
        icon: <Compass className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'works-with-team',
        title: 'Works with your team',
        description: 'Integrated alongside your existing developers to enhance their productivity.',
        icon: <Laptop className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'transparent-progress',
        title: 'Transparent progress',
        description: 'Full visibility into what the team is working on and why.',
        icon: <BarChart3 className="w-5 h-5 text-[#18529B]" />,
      },
    ],
  },
  {
    number: '03',
    title: 'Project Outsourcing',
    badge: 'Best for: Minimal involvement',
    paragraphs: [
      'You hand us the project and we take ownership of the outcome. Design, development, QA, and delivery, all managed by us, with updates at agreed intervals.',
    ],
    bgStyle: 'white',
    features: [
      {
        id: 'cost-savings',
        title: 'Up to 30% cost savings',
        description: 'Compared to building and managing the project internally.',
        icon: <Percent className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'minimal-management',
        title: 'Minimal management',
        description: 'You focus on your business while we own the delivery.',
        icon: <Sliders className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'end-to-end',
        title: 'End-to-end',
        description: 'From brief to deployed product, fully in our hands.',
        icon: <Layers className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'regular-updates',
        title: 'Regular updates',
        description: 'Agreed reporting cadence so you are never in the dark.',
        icon: <CalendarCheck className="w-5 h-5 text-[#18529B]" />,
      },
    ],
  },
  {
    number: '04',
    title: 'Managed IT Services',
    badge: 'Best for: No in-house IT team',
    paragraphs: [
      'We ensure IT stability by handling routine monitoring, maintenance, and operations on an ongoing basis, giving your business the benefits of a capable IT function without the cost and overhead of building one in-house.',
      'Ideal for growing businesses that need reliable IT infrastructure managed by people who know what they’re doing.',
    ],
    bgStyle: 'gray',
    features: [
      {
        id: 'project-management',
        title: 'Project Management',
        description: 'Proactive monitoring and management to keep things running.',
        icon: <ClipboardList className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'routine-operations',
        title: 'Routine operations',
        description: 'Maintenance, updates, and day-to-day IT tasks handled for you.',
        icon: <RefreshCw className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'strategic-input',
        title: 'Strategic input',
        description: 'We flag issues before they become problems and advise proactively.',
        icon: <TrendingUp className="w-5 h-5 text-[#18529B]" />,
      },
      {
        id: 'lower-overheads',
        title: 'Lower overheads',
        description: 'No need to recruit, manage, or retain a full IT team in-house.',
        icon: <Coins className="w-5 h-5 text-[#18529B]" />,
      },
    ],
  },
];

export const HowWeWorkEngagementModelsSection: React.FC = () => {
  // Desktop collapsible state for cards inside (all open by default matching Frame 2121455061 (2).png)
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({
    '01': true,
    '02': true,
    '03': true,
    '04': true,
  });

  const toggleCards = (num: string) => {
    setOpenCards((prev) => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  // Mobile single model navigation (< 768px: "only in bleow 768 show one by one")
  const [mobileStep, setMobileStep] = useState(0);
  const [mobileCardsOpen, setMobileCardsOpen] = useState(true);

  const nextStep = () => {
    setMobileStep((prev) => (prev + 1) % ENGAGEMENT_MODELS.length);
    setMobileCardsOpen(true);
  };

  const prevStep = () => {
    setMobileStep((prev) => (prev - 1 + ENGAGEMENT_MODELS.length) % ENGAGEMENT_MODELS.length);
    setMobileCardsOpen(true);
  };

  const currentMobileModel = ENGAGEMENT_MODELS[mobileStep];

  return (
    <section className="bg-white border-b border-slate-100 select-none">
      {/* ============================================================== */}
      {/* SECTION HEADER                                                 */}
      {/* Exactly matching Frame 2121455061 (2).png                      */}
      {/* ============================================================== */}
      <div className="pt-20 pb-14 sm:pt-24 sm:pb-16 text-center max-w-3xl mx-auto px-4 space-y-3.5">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#18529B]">
          HOW WE ENGAGE
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
          Our engagement models
        </h2>

        <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto">
          Each model is designed around a different set of needs. Most clients pick one, while some combine them as a project evolves.
        </p>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP & TABLET VIEW (>= 768px): ALL 4 ROWS                    */}
      {/* Descriptions always visible; ONLY cards collapsible with arrow   */}
      {/* No text like "click arrow to collapse cards"                   */}
      {/* ============================================================== */}
      <div className="hidden md:block">
        {ENGAGEMENT_MODELS.map((model) => {
          const isCardsOpen = !!openCards[model.number];
          const isGray = model.bgStyle === 'gray';
          const cardBg = isGray ? 'bg-white' : 'bg-[#EDF2F7]';
          const cardBorder = isGray ? 'border-slate-200/80 shadow-xs' : 'border-slate-200/60';

          return (
            <div
              key={model.number}
              className={`py-14 sm:py-18 lg:py-20 border-t border-slate-100/80 transition-colors duration-300 ${
                isGray ? 'bg-[#EDF2F7]/55' : 'bg-white'
              }`}
            >
              <Container>
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Left Column: Number + Title + Pill Badge (ALWAYS VISIBLE) */}
                    <div className="col-span-12 md:col-span-4 space-y-3">
                      <span className="block text-5xl lg:text-6xl font-extrabold text-[#18529B] tracking-tight leading-none">
                        {model.number}
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] tracking-tight pt-1">
                        {model.title}
                      </h3>

                      <div className="pt-1.5">
                        <span className="inline-block text-xs font-semibold text-slate-600 bg-white border border-slate-200/90 rounded-full px-4 py-1.5 shadow-2xs">
                          {model.badge}
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Paragraph descriptions (ALWAYS VISIBLE) + Cards (Collapsible with Arrow) */}
                    <div className="col-span-12 md:col-span-8 space-y-4">
                      {/* Paragraph descriptions (NEVER COLLAPSED) */}
                      <div className="space-y-3">
                        {model.paragraphs.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed"
                          >
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Circular Arrow Toggle Button MOVED DOWN UNDER DESCRIPTION with white background, shadow, black arrow */}
                      <div className="flex items-center justify-end pt-0.5">
                        <button
                          onClick={() => toggleCards(model.number)}
                          aria-label={isCardsOpen ? 'Collapse cards' : 'Expand cards'}
                          className={`w-9 h-9 rounded-full bg-white text-black border border-slate-200/80 shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex items-center justify-center shrink-0 transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer ${
                            isCardsOpen ? 'rotate-180' : ''
                          }`}
                        >
                          <ChevronDown className="w-4 h-4 stroke-[2.5] text-black" />
                        </button>
                      </div>

                      {/* ONLY CARDS ARE COLLAPSIBLE */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isCardsOpen ? 'max-h-[900px] opacity-100 pt-1' : 'max-h-0 opacity-0 pt-0'
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-4 lg:gap-5">
                          {model.features.map((feature) => (
                            <div
                              key={feature.id}
                              className={`${cardBg} ${cardBorder} border rounded-[20px] p-5 sm:p-6 flex flex-col justify-start transition-all hover:shadow-md cursor-default`}
                            >
                              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-2xs mb-3.5">
                                {feature.icon}
                              </div>

                              <h4 className="text-base font-bold text-[#0B1528] tracking-tight mb-1.5">
                                {feature.title}
                              </h4>

                              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                                {feature.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          );
        })}
      </div>

      {/* ============================================================== */}
      {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
      {/* Descriptions always visible; ONLY cards collapsible with arrow   */}
      {/* No text like "click arrow to collapse cards"                   */}
      {/* ============================================================== */}
      <div className="md:hidden px-4 pb-16 space-y-5 select-none">
        {/* Stepper Header with Navigation */}
        <div className="flex items-center justify-between px-1 text-slate-500">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Model 0{mobileStep + 1} of 0{ENGAGEMENT_MODELS.length}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={prevStep}
              aria-label="Previous model"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-90 flex items-center justify-center transition-all cursor-pointer text-slate-700 border border-slate-200 shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextStep}
              aria-label="Next model"
              className="w-8 h-8 rounded-full bg-[#18529B] text-white hover:bg-[#133F77] active:scale-90 flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ACTIVE MODEL CARD DISPLAYED ONE BY ONE */}
        <div className="bg-[#F8FAFD] rounded-[26px] p-6 border border-slate-200 shadow-[0_8px_24px_rgba(0,0,0,0.04)] space-y-4 animate-fadeIn">
          {/* Header (ALWAYS VISIBLE) */}
          <div className="space-y-1.5">
            <span className="block text-4xl font-extrabold text-[#18529B] tracking-tight leading-none">
              {currentMobileModel.number}
            </span>
            <h3 className="text-2xl font-extrabold text-[#0B1528] tracking-tight">
              {currentMobileModel.title}
            </h3>
            <div>
              <span className="inline-block text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1 shadow-2xs">
                {currentMobileModel.badge}
              </span>
            </div>
          </div>

          {/* Description (ALWAYS VISIBLE) */}
          <div className="space-y-2 pt-1">
            {currentMobileModel.paragraphs.map((p, idx) => (
              <p key={idx} className="text-xs text-slate-700 leading-relaxed font-normal">
                {p}
              </p>
            ))}
          </div>

          {/* Circular Arrow Button on Mobile MOVED DOWN UNDER DESCRIPTION */}
          <div className="flex items-center justify-end pt-0.5">
            <button
              onClick={() => setMobileCardsOpen(!mobileCardsOpen)}
              aria-label={mobileCardsOpen ? 'Collapse cards' : 'Expand cards'}
              className={`w-8 h-8 rounded-full bg-white text-black border border-slate-200/90 shadow-[0_3px_12px_rgba(0,0,0,0.08)] flex items-center justify-center shrink-0 transition-transform duration-300 hover:shadow-md active:scale-95 cursor-pointer ${
                mobileCardsOpen ? 'rotate-180' : ''
              }`}
            >
              <ChevronDown className="w-4 h-4 stroke-[2.5] text-black" />
            </button>
          </div>

          {/* ONLY CARDS ARE COLLAPSIBLE */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              mobileCardsOpen ? 'max-h-[600px] opacity-100 pt-2' : 'max-h-0 opacity-0 pt-0'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentMobileModel.features.map((feat) => (
                <div
                  key={feat.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs flex flex-col justify-start"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50/80 flex items-center justify-center mb-2">
                    {feat.icon}
                  </div>
                  <h4 className="text-sm font-bold text-[#0B1528] mb-1">{feat.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicator dots for mobile navigation */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {ENGAGEMENT_MODELS.map((item, idx) => (
            <button
              key={item.number}
              onClick={() => {
                setMobileStep(idx);
                setMobileCardsOpen(true);
              }}
              aria-label={`Go to ${item.title}`}
              className={`transition-all rounded-full h-1.5 cursor-pointer ${
                mobileStep === idx ? 'w-6 bg-[#18529B]' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
