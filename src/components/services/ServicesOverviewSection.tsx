import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { PageId } from '../../types';

// Android smartphone with antenna ears and </> code mark matching Frame 2121455061.png
export const AndroidDevIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-10' }) => (
  <svg
    viewBox="0 0 36 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Android ears/antennas */}
    <path d="M12 6L9 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M24 6L27 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    {/* Smartphone body */}
    <rect x="5" y="6" width="26" height="36" rx="6" stroke="currentColor" strokeWidth="2.4" />
    {/* Code symbol </> inside screen */}
    <path
      d="M14 20L10.5 24L14 28"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 20L25.5 24L22 28"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19 19L17 29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export interface SubServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  subServices: SubServiceItem[];
}

export const SERVICES_LIST: ServiceCardData[] = [
  {
    id: 'mobile-app-development',
    title: 'Mobile App\nDevelopment',
    description:
      'We develop Android and iOS apps from MVPs to full-featured solutions, handling design, development, testing, and app store submissions, tailored to your users and goals.',
    subServices: [
      {
        id: 'native-android',
        title: 'Native Android (Kotlin)',
        description: 'Modern high-performance apps built with Jetpack Compose, Coroutines, and clean MVVM architecture.',
      },
      {
        id: 'cross-platform',
        title: 'Cross-Platform (React Native & Flutter)',
        description: 'Single codebase efficiency with native-like 60fps animations, offline sync, and deep platform API integration.',
      },
      {
        id: 'ios-apps',
        title: 'iOS App Architecture (Swift & SwiftUI)',
        description: 'Enterprise iOS solutions adhering strictly to Apple Human Interface Guidelines and App Store compliance.',
      },
      {
        id: 'app-store-ops',
        title: 'App Store Submission & Lifecycle',
        description: 'Automated TestFlight distribution, Google Play console staging, certificate signing, and post-launch telemetry.',
      },
    ],
  },
  {
    id: 'web-enterprise-app-development',
    title: 'Web & Enterprise\nApplication\nDevelopment',
    description:
      'We build secure, scalable full-stack web and enterprise apps—from internal tools to e-commerce—using modern frameworks and clean, documented code.',
    subServices: [
      {
        id: 'web-applications',
        title: 'Web Applications',
        description: 'User-focused design from wireframes through to final, polished screens.',
      },
      {
        id: 'enterprise-software',
        title: 'Enterprise Software',
        description: 'Custom internal ERP systems, role-based workflows, automated audit logs, and mission-critical reliability.',
      },
      {
        id: 'api-integration',
        title: 'API Integration',
        description: 'Secure GraphQL and REST APIs connecting complex legacy databases to modern frontend applications.',
      },
      {
        id: 'e-commerce',
        title: 'E-Commerce',
        description: 'High-converting custom storefronts, omnichannel checkout flows, Stripe billing, and live inventory sync.',
      },
    ],
  },
  {
    id: 'ai-app-development',
    title: 'AI App\nDevelopment',
    description:
      'We create AI-powered software combining AI, machine learning, and IoT to build smarter products and efficient workflows that solve real business problems.',
    subServices: [
      {
        id: 'rag-workflows',
        title: 'Generative AI & Agent Workflows',
        description: 'Custom LLM integration, retrieval-augmented generation (RAG), and reasoning agents tailored to your business data.',
      },
      {
        id: 'computer-vision',
        title: 'Computer Vision & OCR Automation',
        description: 'Automated document processing, image classification, real-time quality control, and edge camera inference.',
      },
      {
        id: 'predictive-ml',
        title: 'Predictive Analytics & ML Models',
        description: 'Custom scikit-learn and PyTorch time-series forecasting, predictive maintenance, and churn prevention engines.',
      },
      {
        id: 'iot-edge',
        title: 'IoT & Edge Device Intelligence',
        description: 'Lightweight on-device model deployment (TensorFlow Lite, ONNX) communicating securely over MQTT and BLE.',
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    description:
      'We help teams build reliable deployment pipelines, integrating development, operations, and QA for faster, stable releases, plus standalone QA consulting for testing standards.',
    subServices: [
      {
        id: 'cicd',
        title: 'Automated CI/CD Pipelines',
        description: 'Zero-downtime automated workflows using GitHub Actions, GitLab CI, and ArgoCD with automated canary testing.',
      },
      {
        id: 'cloud-iac',
        title: 'Cloud Infrastructure & Terraform (AWS/GCP)',
        description: 'Modular Infrastructure as Code (IaC) provisioning high-availability Kubernetes (EKS/GKE) and serverless backends.',
      },
      {
        id: 'observability',
        title: 'Observability & APM Monitoring',
        description: 'Full-stack Prometheus, Grafana, Datadog dashboards, distributed tracing, and proactive incident response.',
      },
      {
        id: 'security-compliance',
        title: 'SOC2 & Security Hardening',
        description: 'Automated vulnerability scanning, secrets management, SSL governance, and continuous penetration compliance.',
      },
    ],
  },
  {
    id: 'seo-and-marketing',
    title: 'SEO & Social Media\nMarketing',
    description:
      'We grow your online presence with SEO and social media marketing, building lasting visibility that continues beyond paid campaigns.',
    subServices: [
      {
        id: 'technical-seo',
        title: 'Technical SEO & Core Web Vitals',
        description: 'Complete codebase audits, Schema.org JSON-LD structured data, SSR rendering, and crawl budget optimization.',
      },
      {
        id: 'search-authority',
        title: 'High-Intent Search Authority',
        description: 'Data-driven keyword clustering, competitive positioning, and bottom-of-funnel conversion copywriting.',
      },
      {
        id: 'social-growth',
        title: 'B2B & Social Media Campaigns',
        description: 'Targeted LinkedIn and multi-channel campaigns engineered to generate qualified enterprise inbound leads.',
      },
      {
        id: 'cro',
        title: 'Conversion Rate Optimization (CRO)',
        description: 'A/B testing user landing pages, heatmaps, interactive calculators, and checkout funnel optimization.',
      },
    ],
  },
  {
    id: 'erp',
    title: 'Enterprise\nResource Planning\n(ERP)',
    description:
      'We design custom ERP solutions unifying operations, finance, inventory, and team management, tailored to your business processes for clear leadership control.',
    subServices: [
      {
        id: 'financial-ledger',
        title: 'Core Financials & Multi-Currency Ledger',
        description: 'Automated invoice generation, tax calculations, expense approvals, and real-time P&L reporting.',
      },
      {
        id: 'inventory-ops',
        title: 'Supply Chain & Inventory Management',
        description: 'Barcode scanning, warehouse tracking, automated re-ordering thresholds, and logistics synchronization.',
      },
      {
        id: 'workforce-hr',
        title: 'Workforce & Project Resource Planning',
        description: 'Team bandwidth scheduling, contractor billable hour tracking, and role-based access management.',
      },
      {
        id: 'legacy-migration',
        title: 'Legacy Database to Cloud ERP Migration',
        description: 'Risk-free zero-downtime data ETL scripts and validation rules ensuring 100% data integrity.',
      },
    ],
  },
  {
    id: 'business-auditing',
    title: 'Business Auditing',
    description:
      'Our business audit identifies inefficiencies in your tech, processes, and operations, providing clear insights and practical recommendations.',
    subServices: [
      {
        id: 'codebase-audit',
        title: 'Codebase & Architecture Due Diligence',
        description: 'Deep architectural audits assessing scalability, tech debt, licensing risks, and documentation completeness.',
      },
      {
        id: 'cost-optimization',
        title: 'Cloud Spend & License Optimization',
        description: 'Comprehensive AWS/GCP bill audits, rightsizing idle instances, and cutting recurring SaaS overhead.',
      },
      {
        id: 'process-audit',
        title: 'Agile Team Velocity & Sprint Audits',
        description: 'Identifying delivery bottlenecks, sprint churn, and implementing predictable milestone cadences.',
      },
      {
        id: 'exec-roadmap',
        title: 'Executive Remediation Roadmap',
        description: 'Prioritized ROI-ranked roadmap tailored for board members, CTOs, and investment stakeholders.',
      },
    ],
  },
  {
    id: 'project-management',
    title: 'Project\nManagement',
    description:
      'Experienced project managers who keep your build on track, on budget, and clearly communicated throughout. Whether embedded in an existing team or leading independently, our PMs use Agile methodologies adapted to your project.',
    subServices: [
      {
        id: 'sprint-governance',
        title: 'Agile Sprint Planning & Execution',
        description: 'Two-week sprint cadences, Jira/Linear task breakdown, daily asynchronous standups, and demo recordings.',
      },
      {
        id: 'budget-control',
        title: 'Scope Creep & Budget Governance',
        description: 'Transparent milestone burn-up charts, change order management, and upfront milestone approvals.',
      },
      {
        id: 'stakeholder-sync',
        title: 'Executive Reporting & Communication',
        description: 'Weekly written progress digests, live staging environment releases, and real-time Slack/Teams access.',
      },
      {
        id: 'global-coordination',
        title: 'Onshore / Global Pod Coordination',
        description: 'Seamless time-zone overlap management ensuring 24-hour continuous development cycles without friction.',
      },
    ],
  },
  {
    id: 'oem-global-sourcing',
    title: 'OEM Global\nSourcing',
    description:
      'We source hardware and physical products from OEM manufacturers worldwide, managing the entire process from supplier identification and quality control through to customs clearance and delivery to your door.',
    subServices: [
      {
        id: 'factory-vetting',
        title: 'Factory Identification & On-Site Audits',
        description: 'Direct verification of ISO-certified manufacturing facilities, background checks, and production capacity vetting.',
      },
      {
        id: 'cad-prototyping',
        title: 'Tooling, CAD & Rapid PCB Prototyping',
        description: 'Design-for-manufacturing (DFM) reviews, physical component sampling, tooling validation, and sign-offs.',
      },
      {
        id: 'qa-inspection',
        title: 'Batch Inspection & CE/FCC Compliance',
        description: 'Pre-shipment batch testing, drop tests, thermal analysis, and international regulatory certifications.',
      },
      {
        id: 'logistics-customs',
        title: 'Door-to-Door Freight & Customs Clearance',
        description: 'Managing international bills of lading, tariff optimization, port clearance, and insured delivery to your facility.',
      },
    ],
  },
];

export interface ServicesOverviewSectionProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenConsultation?: () => void;
}

export const ServicesOverviewSection: React.FC<ServicesOverviewSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  // Desktop expanded card ID: default to Card 2 matching Frame 2121455061.png
  const [expandedCardId, setExpandedCardId] = useState<string | null>('web-enterprise-app-development');

  // Expanded sub-accordion inside the active card (default to first sub-item)
  const [expandedSubId, setExpandedSubId] = useState<string | null>('web-applications');

  // Mobile active index for screens below 768px ("show one by one")
  const [mobileIndex, setMobileIndex] = useState(0);

  const toggleCard = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const toggleSubItem = (subId: string) => {
    setExpandedSubId((prev) => (prev === subId ? null : subId));
  };

  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % SERVICES_LIST.length);
  };

  const prevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + SERVICES_LIST.length) % SERVICES_LIST.length);
  };

  const currentMobileService = SERVICES_LIST[mobileIndex];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      <Container>
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455061.png                          */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3.5">
          <span className="inline-block text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#18529B]">
            SERVICES OVERVIEW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-950 tracking-tight leading-[1.16]">
            We’ve got pretty much every service<br className="hidden sm:inline" /> you need, covered.
          </h2>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): ALL 9 CARDS STACKED          */}
        {/* Exactly matching Frame 2121455061.png                          */}
        {/* ============================================================== */}
        <div className="hidden md:flex flex-col space-y-6 lg:space-y-8">
          {SERVICES_LIST.map((service) => {
            const isExpanded = expandedCardId === service.id;

            return (
              <div
                key={service.id}
                className="relative overflow-hidden rounded-[28px] bg-[#EEF2F6] transition-all duration-300 border border-slate-200/50"
              >
                {/* Large watermark Android Dev Icon in background of expanded card */}
                {isExpanded && (
                  <div className="absolute -bottom-8 -left-6 pointer-events-none opacity-[0.09] text-[#18529B] z-0">
                    <AndroidDevIcon className="w-64 h-80" />
                  </div>
                )}

                <div className="relative z-10 p-7 sm:p-9 lg:p-11">
                  <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
                    {/* LEFT COLUMN: Icon + Title */}
                    <div className="col-span-5 flex items-start gap-5">
                      <div className="shrink-0 text-slate-950 mt-1">
                        <AndroidDevIcon className="w-8 h-10 sm:w-9 sm:h-11" />
                      </div>
                      <h3 className="text-2xl lg:text-[27px] font-extrabold text-slate-950 leading-[1.2] whitespace-pre-line tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* RIGHT COLUMN: Description + (Sub-accordions if expanded) + Actions */}
                    <div className="col-span-7 space-y-6">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                        {service.description}
                      </p>

                      {/* SUB-SERVICES ACCORDION (Visible when card is expanded) */}
                      {isExpanded && (
                        <div className="space-y-2.5 pt-2 animate-in fade-in duration-200">
                          {service.subServices.map((sub) => {
                            const isSubOpen = expandedSubId === sub.id;

                            return (
                              <div
                                key={sub.id}
                                className="bg-white rounded-2xl shadow-2xs border border-slate-100 transition-all duration-200 overflow-hidden"
                              >
                                <button
                                  onClick={() => toggleSubItem(sub.id)}
                                  className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50/60 transition-colors"
                                >
                                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                                    {sub.title}
                                  </span>
                                  {isSubOpen ? (
                                    <ChevronUp className="w-5 h-5 text-slate-700 shrink-0" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-slate-700 shrink-0" />
                                  )}
                                </button>

                                {isSubOpen && (
                                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                                    {sub.description}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* BOTTOM ACTIONS: Explore Button + Chevron Toggle */}
                      <div className="flex items-center justify-between pt-2">
                        <button
                          onClick={() => onNavigate('service-detail', service.id)}
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#18529B] text-white text-xs sm:text-sm font-semibold hover:bg-[#133F77] transition-all shadow-xs cursor-pointer active:scale-95"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => toggleCard(service.id)}
                          aria-label={isExpanded ? 'Collapse service' : 'Expand service'}
                          className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200/70 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-all cursor-pointer active:scale-90"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-4 max-w-sm mx-auto pt-2">
          {/* Mobile Stepper Header with Cursor Click Controls */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Service {mobileIndex + 1} of {SERVICES_LIST.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevMobile}
                aria-label="Previous service"
                className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 active:scale-90 flex items-center justify-center transition-all cursor-pointer border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextMobile}
                aria-label="Next service"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] active:scale-90 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE SERVICE CARD SHOWN ONE BY ONE */}
          <div className="rounded-3xl bg-[#EEF2F6] p-6 shadow-xs border border-slate-200/50 space-y-5">
            {/* Header: Icon + Title */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 text-slate-950 mt-0.5">
                <AndroidDevIcon className="w-8 h-10" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-950 leading-tight whitespace-pre-line">
                {currentMobileService.title}
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {currentMobileService.description}
            </p>

            {/* Sub-capabilities list */}
            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Practice Highlights:
              </div>
              {currentMobileService.subServices.slice(0, 3).map((sub) => (
                <div key={sub.id} className="bg-white rounded-xl p-3 shadow-2xs border border-slate-100">
                  <div className="font-bold text-slate-900 text-xs">{sub.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{sub.description}</div>
                </div>
              ))}
            </div>

            {/* Mobile Action: Explore Practice */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => onNavigate('service-detail', currentMobileService.id)}
                className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#18529B] text-white text-xs font-semibold hover:bg-[#133F77] transition-all shadow-xs cursor-pointer"
              >
                <span>Explore {currentMobileService.title.replace('\n', ' ')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {SERVICES_LIST.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Go to service ${idx + 1}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  mobileIndex === idx
                    ? 'w-6 bg-[#18529B]'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
