import { MainHeading } from '../ui/MainHeading';
import { SectionLabel } from '../ui/SectionLabel';
﻿import React from 'react';
import { Search } from 'lucide-react';
import { Container } from '../layout/Container';
import './BlogHeroSection.css';

export interface BlogHeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSubmitSearch?: () => void;
}

export const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({ searchQuery, onSearchChange, onSubmitSearch }) => {
  const heading = <div className="space-y-6"><SectionLabel labelKey="ourBlog" /><MainHeading headingKey="BlogHeroSection" as="h1" variant="hero" className="blog-hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-black tracking-tight leading-[1.08]" /></div>;
  const search = <div className="relative w-full max-w-md pt-2"><div className="flex items-center bg-white rounded-full border border-slate-200 shadow-sm px-5 py-3.5 focus-within:border-[#18529B]"><input type="search" aria-label="Search blog articles" placeholder="What are you searching for?" value={searchQuery} onChange={event => onSearchChange(event.target.value)} onKeyDown={event => { if (event.key === 'Enter') onSubmitSearch?.(); }} className="min-w-0 w-full bg-transparent text-sm sm:text-base text-[#0B1528] placeholder:text-slate-400 focus:outline-none pr-3" /><button type="button" onClick={onSubmitSearch} aria-label="Submit search" className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[#18529B] hover:bg-blue-50"><Search size={20} /></button></div></div>;
  const artwork = <img src="/images/blog-hero-image.svg" alt="Workstation with laptop, desk lamp, mug, and plant" className="block w-full h-auto" />;
  return <section className="blog-hero-section relative pt-28 md:pt-[72px] pb-6 md:pb-0 bg-white overflow-hidden" style={{ backgroundImage: 'url(/images/blog-hero-background.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    <Container className="relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
        <div className="md:col-span-6 space-y-6">{heading}{search}</div>
        <div className="md:col-span-6 flex items-center justify-center lg:justify-end"><div className="blog-hero-art w-full md:w-[115%] max-w-[660px] shrink-0 md:translate-x-2 lg:translate-x-6">{artwork}</div></div>
      </div>
    </Container>
  </section>;
};
