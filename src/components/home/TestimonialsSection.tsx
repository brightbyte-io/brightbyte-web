import React from 'react';
import { Star, CheckCircle2, Building, Quote } from 'lucide-react';
import { Container } from '../layout/Container';
import { Badge } from '../ui/Badge';
import { testimonialsData } from '../../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="bluePill">TESTIMONIALS & REVIEWS</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Leaders Across High-Growth Industries
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See how BrightByte Consulting empowers engineering heads, product owners, and founders to accelerate delivery and scale with certainty.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-200 transition-all space-y-6"
            >
              <div className="space-y-4">
                {/* 5 Stars and Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-blue-100" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 text-[#18529B] flex items-center justify-center font-bold text-xs">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.author}</h4>
                    <p className="text-xs text-slate-500">
                      {item.role}, <span className="font-semibold text-slate-700">{item.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
