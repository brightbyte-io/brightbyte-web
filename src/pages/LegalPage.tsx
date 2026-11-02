import React from 'react';
import { Container } from '../components/layout/Container';
import { MainHeading } from '../components/ui/MainHeading';
import { SectionLabel } from '../components/ui/SectionLabel';
import content from '../data/legalPages.json';

export const LegalPage: React.FC<{ type: 'privacy' | 'terms' }> = ({ type }) => {
  const page = content[type];
  return <main className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-white">
    <Container size="narrow">
      <header className="space-y-5 mb-10"><SectionLabel labelKey={type === 'privacy' ? 'privacy' : 'legal'} /><MainHeading headingKey={type === 'privacy' ? 'privacyPolicy' : 'termsOfService'} as="h1" variant="hero" className="text-[#0B1528]" /><p className="text-sm text-slate-500">Last updated: {page.updated}</p><p className="text-slate-600 leading-relaxed">{page.intro}</p></header>
      <div className="space-y-8">{page.sections.map(section => <section key={section.title}><h2 className="text-xl font-semibold text-[#0B1528] mb-3">{section.title}</h2><p className="text-slate-600 leading-relaxed">{section.text}</p>{section.title === 'Privacy' && <a href="/privacy-policy" className="inline-block mt-3 text-[#18529B] underline">Read our Privacy Policy</a>}</section>)}</div>
      <nav className="flex flex-wrap gap-6 mt-12 pt-6 border-t border-slate-200" aria-label="Legal pages"><a href="/privacy-policy" className="text-[#18529B] underline">Privacy Policy</a><a href="/terms-of-service" className="text-[#18529B] underline">Terms of Service</a><a href="mailto:contact@brightbyte.io" className="text-[#18529B] underline">contact@brightbyte.io</a></nav>
    </Container>
  </main>;
};
