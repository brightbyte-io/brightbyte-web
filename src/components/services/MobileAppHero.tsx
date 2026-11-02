import { MainHeading } from '../ui/MainHeading';
import { SectionLabel } from '../ui/SectionLabel';
import React from "react";
import { Container } from "../layout/Container";
import "./MobileAppHero.css";

// Apple Logo SVG
export const AppleLogoIcon: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => (
  <svg
    viewBox="0 0 170 170"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.8-8.12-12.33-15.12-6.53-10.15-11.75-21.72-15.66-34.71-3.91-13-5.86-25.26-5.86-36.79 0-14.34 3.59-26.24 10.77-35.7 7.18-9.45 16.27-14.28 27.27-14.49 4.35 0 9.4 1.16 15.15 3.49 5.75 2.33 9.46 3.54 11.13 3.65 1.52-.11 5.37-1.38 11.55-3.81 6.18-2.43 11.28-3.54 15.3-3.33 10.87.53 19.82 4.65 26.85 12.37-9.56 5.82-14.24 13.96-14.04 24.43.21 8.25 3.4 15.22 9.57 20.93 6.17 5.71 13.55 8.94 22.14 9.68-2.33 7.08-5.24 14.38-8.73 21.9zM119.22 31.06c0-6.77 2.43-13.23 7.29-19.38 4.87-6.14 11.05-10.42 18.55-12.83-.22 1.37-.48 2.75-.79 4.12-1.38 6.56-4.44 12.69-9.19 18.39-4.76 5.71-10.68 9.57-17.76 11.58-.42-.64-.85-1.28-1.29-1.93-.54-.95-.81-1.97-.81-3.05z" />
  </svg>
);

// Android Mascot SVG
export const AndroidMascotIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7",
}) => (
  <svg
    viewBox="0 0 100 80"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <line
      x1="28"
      y1="18"
      x2="16"
      y2="4"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <line
      x1="72"
      y1="18"
      x2="84"
      y2="4"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path d="M12 55C12 34 29 18 50 18C71 18 88 34 88 55H12Z" />
    <circle cx="34" cy="38" r="4.5" fill="white" />
    <circle cx="66" cy="38" r="4.5" fill="white" />
  </svg>
);

export interface MobileAppHeroProps {
  onOpenConsultation?: () => void;
  headingKey?: string;
  image?: string;
  imageAlt?: string;
  content?: { labelKey: string; title: string; description: string; button: string };
  onNavigate?: (page: any, detailId?: string) => void;
}

export const MobileAppHero: React.FC<MobileAppHeroProps> = ({
  onOpenConsultation,
  headingKey = "service.mobile-app.hero",
  content,
  image = "/images/services-hero-images/single-service-mobile.svg",
  imageAlt = "Mobile app development for Android and iOS",
}) => (
  <section
    className="mobile-service-hero relative overflow-hidden bg-white"
    style={{
      backgroundImage: "url(/images/single-service-background.svg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Container className="mobile-service-container relative z-10">
      <div className="mobile-service-layout grid items-center">
        <div className="mobile-service-copy">
          <SectionLabel className="mobile-service-eyebrow" labelKey={content?.labelKey || 'mobile-app'} />
          <MainHeading headingKey={headingKey} as="h1" variant="hero" className="mobile-service-heading">{content?.title || "Native Android and iOS apps, built to launch."}</MainHeading>
          <p className="mobile-service-description">{content?.description || "From a focused MVP to a fully featured consumer or enterprise app, UI/UX, development, QA, and store submission, all handled by one dedicated team."}</p>
          <button
            onClick={onOpenConsultation}
            className="mobile-service-button inline-flex items-center gap-2 rounded-full text-white font-semibold hover:bg-[#133F77] transition-colors"
          >
            <span>{content?.button || "Let's build an app"}</span>
            <img
              src="/images/arrow-right-white.svg"
              alt=""
              aria-hidden="true"
              className="w-4 h-4"
            />
          </button>
        </div>
        <div className="mobile-service-art flex items-center justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="block w-full h-auto object-contain"
            loading="eager"
          />
        </div>
      </div>
    </Container>
  </section>
);
