import { MainHeading } from '../ui/MainHeading';
import React from 'react';
import { Landmark } from 'lucide-react';
import { Container } from '../layout/Container';

export interface IndustryItem {
  id: string;
  name: string;
}

export const INDUSTRIES_SERVED: IndustryItem[] = [
  { id: 'fintech', name: 'Fintech & Banking' },
  { id: 'telecom', name: 'Telecom' },
  { id: 'startups', name: 'Startups' },
  { id: 'government', name: 'Government' },
];

export const MobileAppIndustriesSection: React.FC<{ subtitle?: string }> = ({ subtitle }) => {
  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white border-b border-slate-100">
      <Container>
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455064.png                          */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <MainHeading headingKey="MobileAppIndustriesSection" as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1528] tracking-tight leading-tight" />
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-3.5 max-w-2xl mx-auto">
            {subtitle || "Mobile app solutions for business workflows and customer experiences."}
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): 4 PILLS IN A ROW             */}
        {/* Exactly matching Frame 2121455064.png                          */}
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-5 md:flex-wrap">
          {INDUSTRIES_SERVED.map((industry) => (
            <div
              key={industry.id}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#18529B] text-white font-semibold text-sm lg:text-[15px] shadow-[0_4px_14px_rgba(24,82,155,0.22)] transition-all duration-200 hover:bg-[#133F77] hover:scale-[1.02] cursor-default"
            >
              <Landmark className="w-5 h-5 text-white shrink-0" strokeWidth={2.2} />
              <span>{industry.name}</span>
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
