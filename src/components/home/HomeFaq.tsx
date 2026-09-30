import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Container } from '../layout/Container';

export const HomeFaq: React.FC = () => {
  // First item ('faq-1') is open by default as requested
  const [openId, setOpenId] = useState<string | null>('faq-1');

  // Single-item accordion: opening one automatically closes any other
  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqs = [
    {
      id: 'faq-1',
      question: 'Why partner with Brightbyte Consulting?',
      answer:
        'We combine enterprise-grade technical expertise with boutique agility. Dedicated senior engineers, zero hand-offs to third parties, and transparent milestone delivery.',
    },
    {
      id: 'faq-2',
      question: 'What services does Brightbyte Consulting provide?',
      answer:
        'We offer end-to-end software engineering across mobile apps, web and enterprise platforms, AI development, DevOps, ERP systems, business auditing, project management, SEO marketing, and OEM global sourcing.',
    },
    {
      id: 'faq-3',
      question: 'How do I initiate a consultation?',
      answer:
        'You can click "Get a free consultation" or "Schedule on Calendly" to pick a 30-minute slot on our calendar, or submit our consultation form with your project details. We will respond within one business day.',
    },
    {
      id: 'faq-4',
      question: 'Can I request a project estimate online?',
      answer:
        'Yes, you can outline your project requirements through our consultation form, and our engineering leadership will provide a comprehensive scope, timeline, and budget estimate within one business day.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-100 select-none">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-5 sm:py-6 transition-colors duration-200">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                        isOpen
                          ? 'text-[#18529B]'
                          : 'text-slate-900 group-hover:text-[#18529B]'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isOpen
                          ? 'text-[#18529B] bg-blue-50'
                          : 'text-slate-400 group-hover:text-slate-700'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {/* Smooth animated accordion disclosure */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pt-3'
                        : 'grid-rows-[0fr] opacity-0 pt-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-8 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
