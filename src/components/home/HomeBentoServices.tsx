import { MainHeading } from '../ui/MainHeading';
import { SectionLabel } from '../ui/SectionLabel';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { PageId } from '../../types';

export interface HomeBentoServicesProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

const BG_PATH = '/images/home-what-we-do';

/**
 * Where each SVG sits inside its card box (percentages of the card).
 * Some SVGs contain shadow padding or art that overflows the card
 * (AI laptop, ERP cluster, SEO key) so they are placed exactly like in Figma
 * instead of using object-cover.
 */
type Geo = { l: string; t: string; w: string; h: string };

const GEO: Record<string, Geo> = {
  bg1: { l: '0%', t: '0%', w: '100%', h: '100%' },
  bg2: { l: '-2.806%', t: '-3.056%', w: '105.612%', h: '106.111%' },
  bg3: { l: '-2.778%', t: '-1.507%', w: '121.717%', h: '106.301%' },
  bg4: { l: '-1.385%', t: '-3.073%', w: '102.771%', h: '106.145%' },
  bg5: { l: '-6.061%', t: '0%', w: '106.061%', h: '100%' },
  bg6: { l: '-2.806%', t: '-3.611%', w: '105.612%', h: '106.111%' },
  bg7: { l: '0%', t: '0%', w: '100%', h: '100%' },
  bg8: { l: '-1.385%', t: '-3.611%', w: '111.335%', h: '106.111%' },
};

interface ServiceItem {
  id: string; // detail id passed to onNavigate
  bg: keyof typeof GEO;
  title: React.ReactNode;
  label: string;
  body: React.ReactNode;
  dark?: boolean;
  /**
   * Wide cards (DevOps, SEO) are too short on phones to put text on top of the
   * art, so on mobile they become "text on top, art underneath".
   */
  wide?: boolean;
  textWidth: string;
  /** grid placement + size (literal classes so Tailwind can see them) */
  className: string;
}

const B: React.FC<{ dark?: boolean; children: React.ReactNode }> = ({
  dark,
  children,
}) => (
  <strong className={`font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>
    {children}
  </strong>
);

const SERVICES: ServiceItem[] = [
  {
    id: 'mobile-app',
    bg: 'bg1',
    label: 'Mobile App Development',
    title: (
      <>
        Mobile App
        <br />
        Development
      </>
    ),
    dark: true,
    textWidth: 'max-w-[52%]',
    body: (
      <>
        Native <B dark>Android</B> and <B dark>iOS apps</B>, designed and built
        to production grade, from UI to App Store submission.
      </>
    ),
    className:
      'aspect-[392/360] sm:col-start-1 sm:row-start-1 lg:col-start-1 lg:row-start-1',
  },
  {
    id: 'web-enterprise',
    bg: 'bg2',
    label: 'Web & Enterprise Apps',
    title: 'Web & Enterprise Apps',
    textWidth: 'max-w-[92%]',
    body: (
      <>
        Full-stack platforms, enterprise portals, and custom tools built for
        real workloads and complex workflows.
      </>
    ),
    className:
      'aspect-[392/360] sm:col-start-1 sm:row-start-2 lg:col-start-2 lg:row-start-1',
  },
  {
    id: 'ai-development',
    bg: 'bg3',
    label: 'AI App Development',
    title: 'AI App Development',
    textWidth: 'max-w-[94%]',
    body: (
      <>
        Industry 4.0 solutions using <B>AI, ML,</B> and <B>IoT,</B>{' '}
        intelligent automation and data-driven tools that change how you work.
      </>
    ),
    // Mobile: card is narrowed to 82% so the laptop that overflows the card
    // on the right still fits inside the screen.
    className:
      'aspect-[396/730] max-sm:w-[82%] max-sm:ml-[2.5%] sm:aspect-auto sm:col-start-2 sm:row-start-1 sm:row-span-2 lg:col-start-3 lg:row-start-1',
  },
  {
    id: 'devops',
    bg: 'bg4',
    label: 'DevOps',
    title: 'DevOps',
    wide: true,
    textWidth: 'sm:max-w-[46%]',
    body: (
      <>
        CI/CD pipelines, cloud infrastructure, and thorough QA incorporated
        into every stage of delivery, not bolted on at the end.
      </>
    ),
    className:
      'max-sm:overflow-hidden sm:aspect-[794/360] sm:col-span-2 sm:col-start-1 sm:row-start-3 lg:col-start-1 lg:row-start-2',
  },
  {
    id: 'erp',
    bg: 'bg5',
    label: 'ERP Systems',
    title: 'ERP Systems',
    dark: true,
    textWidth: 'max-w-[92%]',
    body: (
      <>
        Custom enterprise resource planning that unifies your operations,
        finance, and team management in one platform.
      </>
    ),
    // Mobile: narrowed + pushed right so the art that overflows on the left fits.
    className:
      'aspect-[396/730] max-sm:w-[94%] max-sm:ml-[5.7%] sm:aspect-auto sm:col-start-1 sm:row-start-4 sm:row-span-2 lg:col-start-1 lg:row-start-3',
  },
  {
    id: 'business-auditing',
    bg: 'bg6',
    label: 'Business Auditing',
    title: 'Business Auditing',
    textWidth: 'max-w-[92%]',
    body: (
      <>
        We analyze your tech, processes, and operations and give you a clear,
        expansive report on what to fix and how.
      </>
    ),
    className:
      'aspect-[392/360] sm:col-start-2 sm:row-start-4 lg:col-start-2 lg:row-start-3',
  },
  {
    id: 'project-management',
    bg: 'bg7',
    label: 'Project Management',
    title: 'Project Management',
    dark: true,
    textWidth: 'max-w-[92%]',
    body: (
      <>
        Experienced PMs who keep your project on time and on budget using{' '}
        <B dark>Agile, Waterfall,</B> or whichever methodology suits your needs.
      </>
    ),
    className:
      'aspect-[392/360] sm:col-start-2 sm:row-start-5 lg:col-start-3 lg:row-start-3',
  },
  {
    id: 'seo-marketing',
    bg: 'bg8',
    label: 'SEO & Social Media Marketing',
    title: 'SEO & Social Media Marketing',
    wide: true,
    textWidth: 'sm:max-w-[52%]',
    body: (
      <>
        Search engine optimisation, SEM, and social strategies that grow your
        visibility and convert the right audience.
      </>
    ),
    // Mobile: 90% width so the SEO key that overflows the card on the right fits
    // (no overflow-hidden here on purpose, the key must stick out like on desktop).
    className:
      'max-sm:w-[90%] sm:aspect-[794/360] sm:col-span-2 sm:col-start-1 sm:row-start-6 lg:col-start-2 lg:row-start-4',
  },
];

export const HomeBentoServices: React.FC<HomeBentoServicesProps> = ({
  onNavigate,
}) => {
  return (
    // overflow-x-clip: art that overflows a card never creates a horizontal scrollbar
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-100 overflow-x-clip">
      <Container>
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14 space-y-2.5">
          <SectionLabel labelKey="whatWeDo" />
          <MainHeading headingKey="HomeBentoServices" as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-[1.15]" />
          <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-normal">
            Nine practice areas. One focused team. No hand-offs to strangers.
          </p>
        </div>

        {/* BENTO GRID
            mobile: 1 col | tablet (sm): 2 cols | desktop (lg): 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] gap-y-4 sm:gap-y-[10px]">
          {SERVICES.map((s) => {
            const g = GEO[s.bg];
            const vars = {
              '--l': g.l,
              '--t': g.t,
              '--w': g.w,
              '--h': g.h,
            } as React.CSSProperties;

            return (
              <div
                key={s.id}
                role="button"
                tabIndex={0}
                aria-label={s.label}
                onClick={() => onNavigate('service-detail', s.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate('service-detail', s.id);
                  }
                }}
                // container-type lets text scale with the card width (cqw)
                className={`group relative cursor-pointer [container-type:inline-size] ${s.wide
                    ? 'max-sm:aspect-[392/380] max-sm:rounded-xl max-sm:border max-sm:border-slate-200/70 max-sm:bg-white max-sm:shadow-sm'
                    : ''
                  } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18529B] ${s.className}`}
              >
                {/* TEXT (rendered first so wide cards stack "text, then art" on mobile) */}
                <div
                  className={`relative z-10 p-[clamp(18px,6.1cqw,26px)] ${s.wide ? 'sm:p-[clamp(18px,3.3cqw,26px)]' : ''} ${s.textWidth} ${s.wide
                      ? 'max-sm:max-w-none'
                      : ''
                    }`}
                >
                  <h3
                    className={`text-[clamp(22px,6.8cqw,28px)] ${s.wide ? 'sm:text-[clamp(20px,3.5cqw,28px)]' : ''} font-semibold tracking-tight leading-[1.15] ${s.dark ? 'text-white' : 'text-slate-950'
                      }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-[clamp(10px,3.6cqw,16px)] text-[clamp(12px,3.9cqw,16px)] ${s.wide ? 'sm:mt-[clamp(8px,2cqw,16px)] sm:text-[clamp(12px,2cqw,16px)] sm:leading-[1.65]' : ''} leading-[1.7] ${s.dark ? 'text-blue-100/90' : 'text-slate-600'
                      }`}
                  >
                    {s.body}
                  </p>
                </div>

                {/* ART: exactly the card box. Absolute behind the text everywhere,
                    except wide cards on mobile where it sits under the text. */}
                <div
                  className={
                    s.wide
                      ? 'pointer-events-none absolute inset-x-0 bottom-0 aspect-[794/360] max-sm:[clip-path:inset(5%_-15%_0_0)] sm:inset-0 sm:aspect-auto sm:h-full'
                      : 'pointer-events-none absolute inset-0'
                  }
                >
                  <img
                    src={`${BG_PATH}/what-we-do-${s.bg}.svg`}
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    style={vars}
                    className="select-none absolute max-w-none left-[var(--l)] top-[var(--t)] w-[var(--w)] h-[var(--h)] transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  {/* mobile only: soft white fade so the art blends into the text area */}
                  {s.wide && (
                    <div className="absolute inset-x-0 top-0 h-2/5 sm:hidden bg-[linear-gradient(to_bottom,#fff,rgba(255,255,255,0))]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CENTERED PILL BUTTON */}
        <div className="mt-12 lg:mt-16 text-center">
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#18529B] hover:bg-[#133F77] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <span>See all services</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </Container>
    </section>
  );
};
