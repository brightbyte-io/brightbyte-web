import React from 'react';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-6 pb-10 sm:pb-14 lg:pb-0 bg-white">
      {/* Background SVG */}
      <img
        src="/images/service-hero-background.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none -z-0"
        draggable={false}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end min-h-0">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 lg:self-center lg:pt-10 lg:pb-16 space-y-4 lg:space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#18529B]">
              OUR SERVICES
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#0B1528] tracking-tight leading-[1.14]">
              Everything your<br />
              product needs to<br />
              ship and scale.
            </h1>

            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-md">
              From Android apps to AI integrations, DevOps pipelines, ERP systems, and global hardware sourcing, all delivered by teams that specialize in them.
            </p>
          </div>

          {/* RIGHT COLUMN — image bottom-anchored, overflows naturally */}
          <div className="lg:col-span-7 relative flex items-end justify-center lg:justify-end self-end w-full px-4 sm:px-6 lg:px-0">
            <div className="relative w-full max-w-[480px] sm:max-w-[500px] lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[540px] transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="/images/service-hero.svg"
                alt="BrightByte Services"
                className="w-full h-auto object-contain object-bottom drop-shadow-sm pointer-events-none block"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
