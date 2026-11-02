import { MainHeading } from '../ui/MainHeading';
import React from "react";
import { Container } from "../layout/Container";
import { PageId } from "../../types";

export interface HomeOemSourcingProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const HomeOemSourcing: React.FC<HomeOemSourcingProps> = ({
  onNavigate,
}) => {
  const cards = [
    {
      step: "01",
      title: "Supplier Identification",
      description:
        "OEM supplier research aligned with your specifications and budget.",
    },
    {
      step: "02",
      title: "Quality Control",
      description:
        "Product inspections and quality checks against agreed specifications before factory dispatch.",
    },
    {
      step: "03",
      title: "Shipping & Logistics",
      description:
        "Freight options and shipment coordination based on delivery needs, product type and budget.",
    },
    {
      step: "04",
      title: "Customs & Delivery",
      description:
        "Import paperwork, customs coordination and final delivery planning for your location.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12 lg:py-14 bg-[#EFF6FD] bg-cover bg-center bg-no-repeat border-b border-blue-100/70"
      style={{ backgroundImage: "url('/images/home-oem-background.svg')" }}
    >
      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER MATCHING Frame 2121455053.png                   */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12 space-y-2.5">
          <MainHeading headingKey="HomeOemSourcing" as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-tight" />
          <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-normal max-w-2xl mx-auto">
            
              OEM sourcing support, from supplier research to shipment and delivery.
            </p>
        </div>

        {/* ============================================================== */}
        {/* ALL SCREENS: ALL 4 CARDS SHOWN FULLY (NO SLIDER)               */}
        {/* Grid responsive across mobile (1 col), sm (2 cols), md (4 cols)*/}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-3xl p-6 sm:p-7 lg:p-8 flex flex-col justify-start shadow-xs hover:shadow-md transition-all duration-300 border border-slate-100/80 group"
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-slate-950 leading-snug mb-2.5 group-hover:text-[#18529B] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-[14px] text-slate-500 leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* CENTERED PILL BUTTON MATCHING Frame 2121455053.png             */}
        {/* ============================================================== */}
        <div className="text-center pt-1">
          <button
            onClick={() => onNavigate("service-detail", "oem-sourcing")}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#18529B] hover:bg-[#133F77] text-white font-semibold text-sm transition-all shadow-md shadow-blue-900/15 cursor-pointer"
          >
            <span>Learn more</span>
            <img src="/images/arrow-right-white.svg" alt="" aria-hidden="true" className="h-5 w-5 shrink-0" />
          </button>
        </div>
      </Container>
    </section>
  );
};
