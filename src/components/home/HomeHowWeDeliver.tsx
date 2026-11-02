import { MainHeading } from '../ui/MainHeading';
import { SectionLabel } from '../ui/SectionLabel';
import React from 'react';
import { Container } from '../layout/Container';

export const HomeHowWeDeliver: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Design',
      desc: "Define user journeys, interface designs and system architecture. Agree on requirements before development begins.",
    },
    {
      num: '02',
      title: 'Development',
      desc: "Build in focused sprints, with code reviews and regular demos to track progress.",
    },
    {
      num: '03',
      title: 'Testing',
      desc: "Test features throughout delivery, with functional checks and regression testing before release.",
    },
    {
      num: '04',
      title: 'Deployment',
      desc: "Plan the release, monitor key workflows and agree on support as your product moves into use.",
    },
  ];

  return (
    <section className="pt-14 pb-8 sm:pt-18 sm:pb-10 lg:pt-20 lg:pb-12 bg-white">
      <Container>
        {/* Header matching Home V1-2 */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <SectionLabel labelKey="whatWeDo" />
          <MainHeading headingKey="HomeHowWeDeliver" as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight" />
          <p className="text-sm sm:text-base text-slate-600">
            
              A clear delivery process, from initial design through release and support.
            </p>
        </div>

        {/* 4 Cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#F8FAFD] rounded-3xl p-7 sm:p-8 border border-blue-100/70 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all space-y-3 flex flex-col justify-start"
            >
              {/* Circular Number Badge */}
              <div className="w-9 h-9 rounded-full border border-blue-400 text-[#18529B] font-bold text-xs flex items-center justify-center bg-white shadow-2xs">
                {step.num}
              </div>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
