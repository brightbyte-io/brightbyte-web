import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

// Icon 1: UI / UX Design (Window wireframe with cursor click)
export const UiUxDesignIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Window frame */}
    <rect x="3" y="5" width="38" height="28" rx="5" stroke="currentColor" strokeWidth="2.4" />
    {/* Header line with 3 dots */}
    <line x1="3" y1="12" x2="41" y2="12" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="7.5" cy="8.5" r="1.2" fill="currentColor" />
    <circle cx="11.5" cy="8.5" r="1.2" fill="currentColor" />
    <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" />
    {/* Left wireframe box */}
    <rect x="7" y="16" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
    {/* Right wireframe elements */}
    <line x1="24" y1="17" x2="37" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="21" x2="34" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Cursor Pointer arrow */}
    <path
      d="M24 23L24 35L27.5 31.5L31 37L33.5 35.5L30 30L34.5 30L24 23Z"
      fill="white"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

// Icon 2: Android Development (Smartphone with Android ears and </> code)
export const AndroidDevCardIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-10' }) => (
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

// Icon 3: iOS Development (Modern Smartphone with </> code)
export const IosDevCardIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-10' }) => (
  <svg
    viewBox="0 0 34 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Smartphone body */}
    <rect x="4" y="4" width="26" height="36" rx="6" stroke="currentColor" strokeWidth="2.4" />
    {/* Code symbol </> inside screen */}
    <path
      d="M13 18L9.5 22L13 26"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 18L24.5 22L21 26"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M18 17L16 27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// Icon 4: QA & Testing (Clipboard checklist with magnifying glass)
export const QaTestingCardIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-10' }) => (
  <svg
    viewBox="0 0 42 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Clipboard top clip */}
    <path d="M15 5H23V8H15V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M13 8V5C13 3.89543 13.8954 3 15 3H23C24.1046 3 25 3.89543 25 5V8" stroke="currentColor" strokeWidth="2" />
    {/* Clipboard board */}
    <rect x="6" y="7" width="26" height="33" rx="4" stroke="currentColor" strokeWidth="2.4" />
    {/* Checklist ticks and lines */}
    <path d="M11 16L13 18L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="20" y1="16" x2="27" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M11 23L13 25L17 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="20" y1="23" x2="25" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M11 30L13 32L17 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Magnifying glass in bottom right */}
    <circle cx="28" cy="30" r="6" fill="white" stroke="currentColor" strokeWidth="2.4" />
    <line x1="33" y1="34" x2="38" y2="39" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

export interface MobileAppServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const MOBILE_APP_SERVICES: MobileAppServiceCard[] = [
  {
    id: 'ui-ux-design',
    title: 'UI / UX Design',
    description: 'User-focused design from wireframes through to final, polished screens.',
    icon: <UiUxDesignIcon className="w-10 h-10 text-slate-950" />,
  },
  {
    id: 'android-development',
    title: 'Android Development',
    description: 'Native Android apps built for performance and usability across devices.',
    icon: <AndroidDevCardIcon className="w-9 h-11 text-slate-950" />,
  },
  {
    id: 'ios-development',
    title: 'iOS Development',
    description: 'Native iOS apps designed for Apple ecosystem with Apple Store-ready code.',
    icon: <IosDevCardIcon className="w-9 h-11 text-slate-950" />,
  },
  {
    id: 'qa-testing',
    title: 'QA & Testing',
    description: 'Thorough testing at every stage so issues are caught before they reach users.',
    icon: <QaTestingCardIcon className="w-10 h-11 text-slate-950" />,
  },
];

export const MobileAppServicesSection: React.FC = () => {
  // Mobile index for screens below 768px ("show one by one")
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % MOBILE_APP_SERVICES.length);
  };

  const prevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + MOBILE_APP_SERVICES.length) % MOBILE_APP_SERVICES.length);
  };

  const currentService = MOBILE_APP_SERVICES[mobileIndex];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      <Container>
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455061 (1).png                      */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-tight">
            Mobile App Development
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We build Android and iOS applications ranging from a focused MVP to a fully featured consumer or enterprise app. Our team handles UI/UX design, development, quality assurance, and App Store or Google Play submission.
          </p>

          {/* Badges / Pill Tags Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {['Android', 'iOS', 'UI/UX Design', 'QA & Testing'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-[13px] font-medium shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): 2x2 GRID                     */}
        {/* Exactly matching Frame 2121455061 (1).png                      */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {MOBILE_APP_SERVICES.map((card) => (
            <div
              key={card.id}
              className="rounded-[28px] bg-[#EEF2F6] p-8 sm:p-10 lg:p-11 border border-slate-200/50 flex flex-col justify-start transition-all duration-200 hover:shadow-xs"
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-2xl lg:text-[27px] font-extrabold text-slate-950 tracking-tight mb-2.5">
                {card.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-md">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-4 max-w-sm mx-auto pt-2">
          {/* Mobile Stepper Header with Cursor Click Controls */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Service 0{mobileIndex + 1} of 0{MOBILE_APP_SERVICES.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevMobile}
                aria-label="Previous card"
                className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 active:scale-90 flex items-center justify-center transition-all cursor-pointer border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextMobile}
                aria-label="Next card"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] active:scale-90 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIVE CARD SHOWN ONE BY ONE */}
          <div className="rounded-[28px] bg-[#EEF2F6] p-7 shadow-xs border border-slate-200/50 space-y-4">
            <div>{currentService.icon}</div>
            <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              {currentService.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentService.description}
            </p>
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {MOBILE_APP_SERVICES.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Go to ${card.title}`}
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
