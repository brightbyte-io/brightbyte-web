import { MainHeading } from '../ui/MainHeading';
import React from 'react';
import { Container } from '../layout/Container';

export const AboutStory: React.FC = () => {
  const paragraphs = [
    {
      id: 'story-1',
      title: 'Our Inception',
      text: "BrightByte Consulting brings a developer-led approach to custom software. We focus on understanding business requirements, building maintainable systems, and keeping clients informed as their products take shape.",
    },
    {
      id: 'story-2',
      title: 'Global Growth',
      text: "Our work connects software engineering with business operations. From planning a new product to improving an existing platform, we help teams define priorities, choose suitable technology, and organize delivery around their needs.",
    },
    {
      id: 'story-3',
      title: 'Client-Centric Philosophy',
      text: "Effective software starts with a clear understanding of the people using it. We consider business workflows, technical constraints, and long-term maintenance so each feature serves a practical purpose and supports future development.",
    },
    {
      id: 'story-4',
      title: 'Comprehensive Capabilities',
      text: "Our services cover mobile and web development, AI integration, cloud delivery, ERP systems, technical reviews, project management, digital marketing and OEM sourcing. We align the scope, team and delivery approach with each engagement.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-14 sm:py-18 lg:py-20 bg-white">
      {/* Background ambient curved arcs matching Figma */}
      <div className="absolute -left-28 top-12 w-[520px] h-[520px] rounded-full border-[65px] border-blue-50/70 blur-2xl pointer-events-none -z-0" />
      <div className="absolute -right-32 bottom-0 w-[580px] h-[580px] rounded-full border-[70px] border-sky-50/80 blur-2xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-start">
          {/* ============================================================== */}
          {/* LEFT COLUMN: Title + 3D Isometric Laptop Graphic + Caption     */}
          {/* ============================================================== */}
          <div className="md:col-span-5 lg:col-span-5 pt-1 sm:pt-2 space-y-4 lg:space-y-5">
            <MainHeading headingKey="AboutStory" as="h2" variant="section" className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-950 tracking-tight leading-snug" />

            {/* Exact 3D Isometric Laptop & Workspace illustration */}
            <div className="py-1 flex justify-start">
              <img
                src="/images/about-story-laptop.svg"
                alt="The BrightByte Story 3D Isometric Laptop"
                className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>

            {/* Sub-caption matching screenshot */}
            <p className="text-sm sm:text-base font-semibold text-slate-500 tracking-tight">
              Where we started, where we are now.
            </p>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: Full Story Text (All 4 Paragraphs on all screens) */}
          {/* ============================================================== */}
          <div className="md:col-span-7 lg:col-span-7 pt-1 sm:pt-2 space-y-4 sm:space-y-5 lg:space-y-6 md:pl-4">
            {paragraphs.map((para) => (
              <p
                key={para.id}
                className="text-sm sm:text-base text-slate-600 font-normal leading-[1.68] tracking-normal"
              >
                {para.text}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
