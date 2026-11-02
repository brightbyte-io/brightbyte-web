import { MainHeading } from '../ui/MainHeading';
import { SectionLabel } from '../ui/SectionLabel';
import React from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Container } from "../layout/Container";
import "./HowWeWorkHero.css";

export const HowWeWorkHero: React.FC = () => {
  return (
    <section
      className="how-work-hero relative bg-white overflow-hidden"
      style={{
        backgroundImage: "url(/images/how-we-work-hero-background.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="how-work-hero-container">
        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): EXACT MATCH TO How we workss.png */}
        {/* 2-Column layout: Left text block + Right overhead team photo   */}
        {/* ============================================================== */}
        <div className="how-work-hero-layout grid items-center">
          {/* Left Column: Eyebrow + Headline + Subtitle */}
          <div className="how-work-hero-copy">
            <SectionLabel className="how-work-hero-eyebrow" labelKey="howWeWork" />

            <MainHeading headingKey="HowWeWorkHero" as="h1" variant="hero" className="how-work-hero-title" />

            <p className="how-work-hero-description">
              
              Choose the delivery model that fits your team, from adding engineering capacity to working with a dedicated project team.
            </p>
          </div>

          <div className="how-work-hero-art flex items-center justify-center">
            <img
              src="/images/how-we-work-hero.svg"
              alt="Team collaboration and project delivery"
              className="block w-full h-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
