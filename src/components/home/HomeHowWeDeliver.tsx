import React from 'react';
import { Container } from '../layout/Container';

export const HomeHowWeDeliver: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Design',
      desc: 'Wireframes, user interfaces, and system architecture. All aligned before a single line of code is written.',
    },
    {
      num: '02',
      title: 'Development',
      desc: 'Agile sprints, regular check-ins, and clean code. You see real progress every week.',
    },
    {
      num: '03',
      title: 'Testing',
      desc: 'QA at every stage, not just the end. Bugs are found and fixed before they reach your users.',
    },
    {
      num: '04',
      title: 'Deployment',
      desc: 'We ship, monitor, and stay on hand after launch. Going live is just the beginning.',
    },
  ];

  return (
    <section className="pt-14 pb-8 sm:pt-18 sm:pb-10 lg:pt-20 lg:pb-12 bg-white">
      <Container>
        {/* Header matching Home V1-2 */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#18529B]">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight">
            How we deliver every project
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            The same four-step process. Every project, every engagement, every time.
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
