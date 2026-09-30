import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export interface HomeCtaCardProps {
  onOpenConsultation?: () => void;
  onOpenCalendly?: () => void;
}

export const HomeCtaCard: React.FC<HomeCtaCardProps> = ({
  onOpenConsultation,
  onOpenCalendly,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="rounded-[36px] bg-gradient-to-br from-[#1E5FAD] via-[#1B57A0] to-[#113B70] text-white p-10 sm:p-14 lg:p-16 text-center space-y-6 shadow-xl shadow-blue-900/15 relative overflow-hidden">
          {/* Subtle circuit lines overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-40" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
              Ready to build something great?
            </h2>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-xl mx-auto">
              Book a free 30-minute consultation. We'll listen to your goals and tell you honestly how we can help. No pitch, no pressure.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="white"
              size="md"
              rounded="full"
              onClick={onOpenConsultation}
              iconRight={<ArrowRight className="w-4 h-4 ml-1 text-[#18529B]" />}
              className="px-8 py-3.5 font-bold shadow-md bg-white text-[#18529B] hover:bg-slate-50 text-sm"
            >
              Book a Free Call
            </Button>

            <Button
              variant="whiteOutline"
              size="md"
              rounded="full"
              onClick={onOpenCalendly || onOpenConsultation}
              className="px-8 py-3.5 font-medium border-white/60 text-white hover:bg-white/10 text-sm"
            >
              Schedule on Calendly
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
