import { MainHeading } from '../ui/MainHeading';
import { SectionLabel } from '../ui/SectionLabel';
import React from 'react';
import { Container } from '../layout/Container';

export interface ProjectCardItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface PortfolioContent {
  labelKey: string;
  headingKey: string;
  description: string;
  backgroundImage: string;
  projects: ProjectCardItem[];
}

export const MobileAppProjectsSection: React.FC<{ content: PortfolioContent }> = ({ content }) => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-18 bg-[#FAFCFF] overflow-hidden" style={{ backgroundImage: `url(${content.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455066.png                          */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14 space-y-3">
          <SectionLabel labelKey={content.labelKey} />

          <MainHeading headingKey={content.headingKey} as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
            
          </MainHeading>

          <p className="text-base sm:text-lg text-[#848484] font-medium max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): 3 CARDS IN A ROW             */}
        {/* Exactly matching Frame 2121455066.png                          */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {content.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[26px] overflow-hidden border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-start">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {project.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1528] tracking-tight mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
      </Container>
    </section>
  );
};
