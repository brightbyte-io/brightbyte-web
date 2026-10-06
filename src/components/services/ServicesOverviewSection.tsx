import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
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

  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-14 bg-white">
      <Container>
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching screenshot                                    */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#18529B]">
            SERVICES OVERVIEW
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-bold text-[#0B1528] tracking-tight leading-[1.2]">
            We’ve got pretty much every service<br />
            you need, covered.
          </h2>
        </div>

        {/* ============================================================== */}
        {/* ALL SERVICE CARDS: STACKED ON ALL SCREEN SIZES                 */}
        {/* ============================================================== */}
        <div className="flex flex-col space-y-5 sm:space-y-6 lg:space-y-8">
          {SERVICES_LIST.map((service) => {
            const isExpanded = expandedCardId === service.id;

            return (
              <div
                key={service.id}
                className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#EEF2F6] transition-all duration-300 border border-slate-200/50"
              >
                <div className="relative z-10 p-5 sm:p-7 md:p-9 lg:p-11">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 lg:gap-10 items-start">
                    {/* LEFT COLUMN: Icon + Title */}
                    <div className="md:col-span-5 flex items-start gap-4 sm:gap-5">
                      <div className="shrink-0 text-slate-950 mt-1">
                        <AndroidDevIcon className="w-7 h-9 sm:w-8 sm:h-10 md:w-9 md:h-11" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-[27px] font-extrabold text-slate-950 leading-[1.2] whitespace-pre-line tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* RIGHT COLUMN: Description + (Sub-accordions if expanded) + Actions */}
                    <div className="md:col-span-7 space-y-5 sm:space-y-6">
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
                                className="bg-white rounded-xl sm:rounded-2xl shadow-2xs border border-slate-100 transition-all duration-200 overflow-hidden"
                              >
                                <button
                                  onClick={() => toggleSubItem(sub.id)}
                                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50/60 transition-colors"
                                >
                                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                                    {sub.title}
                                  </span>
                                  {isSubOpen ? (
                                    <ChevronUp className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700 shrink-0" />
                                  ) : (
                                    <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700 shrink-0" />
                                  )}
                                </button>

                                {isSubOpen && (
                                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50">
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
                          className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#18529B] text-white text-xs sm:text-sm font-semibold hover:bg-[#133F77] transition-all shadow-xs cursor-pointer active:scale-95"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => toggleCard(service.id)}
                          aria-label={isExpanded ? 'Collapse service' : 'Expand service'}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-xs border border-slate-200/70 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-all cursor-pointer active:scale-90"
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
      </Container>
    </section>
  );
};
