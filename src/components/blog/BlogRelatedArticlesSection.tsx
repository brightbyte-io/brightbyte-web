import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageId } from '../../types';

export interface RelatedArticle {
  id: string;
  title: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  snippet: string;
  image: string;
}

export const RELATED_ARTICLES_DATA: RelatedArticle[] = [
  {
    id: 'right-place-to-work',
    title: 'Is this the right place for me to work?',
    author: {
      name: 'Ahmed Nadeem',
      role: 'Financial Risk Analyst',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    snippet:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'could-have-been-an-email',
    title: 'This surely could have been an email right?',
    author: {
      name: 'Ahmed Nadeem',
      role: 'Financial Risk Analyst',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    snippet:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    image:
      'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cargo-shipment-insurance',
    title: 'Have you gotten the right kind of insurance for your shipment?',
    author: {
      name: 'Ahmed Nadeem',
      role: 'Financial Risk Analyst',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    snippet:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
];

export interface BlogRelatedArticlesSectionProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const BlogRelatedArticlesSection: React.FC<BlogRelatedArticlesSectionProps> = ({
  onNavigate,
}) => {
  // Mobile stepper active index (< 768px: "only in bleow 768 show one by one")
  const [mobileIdx, setMobileIdx] = useState(0);

  const nextMobile = () => {
    setMobileIdx((prev) => (prev + 1) % RELATED_ARTICLES_DATA.length);
  };

  const prevMobile = () => {
    setMobileIdx(
      (prev) => (prev - 1 + RELATED_ARTICLES_DATA.length) % RELATED_ARTICLES_DATA.length
    );
  };

  const currentMobileArticle = RELATED_ARTICLES_DATA[mobileIdx];

  return (
    <div className="w-full my-16 sm:my-24">
      {/* Section Title matching Frame 2085662449.png */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1528] tracking-tight">
          You may also be interested in
        </h2>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP & TABLET VIEW (>= 768px): EXACT MATCH TO Frame 2085662448.png */}
      {/* 3-Column Grid side by side                                     */}
      {/* ============================================================== */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-10">
        {RELATED_ARTICLES_DATA.map((article) => (
          <div
            key={article.id}
            className="flex flex-col space-y-4 group cursor-pointer"
            onClick={() => onNavigate('blog-post', article.id)}
          >
            {/* 1. Header Image */}
            <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-slate-100 shadow-xs group-hover:shadow-md transition-shadow">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* 2. Article Title */}
            <h3 className="text-lg sm:text-[19px] font-bold text-[#0B1528] leading-snug line-clamp-2 group-hover:text-[#18529B] transition-colors pt-1">
              {article.title}
            </h3>

            {/* 3. Author Info Row (Avatar + Name + Role) */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                <img
                  src={article.author.avatarUrl}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-[13px] font-bold text-[#0B1528] leading-tight">
                  {article.author.name}
                </h4>
                <p className="text-[11.5px] text-slate-500 font-normal leading-tight">
                  {article.author.role}
                </p>
              </div>
            </div>

            {/* 4. Description Excerpt */}
            <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed line-clamp-3">
              {article.snippet}
            </p>
          </div>
        ))}
      </div>

      {/* ============================================================== */}
      {/* MOBILE VIEW (< 768px: "only in bleow 768 show one by one")      */}
      {/* Responsive one-by-one stepper                                   */}
      {/* ============================================================== */}
      <div className="md:hidden space-y-5">
        {/* Mobile Header Controls */}
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Related Article 0{mobileIdx + 1} of 0{RELATED_ARTICLES_DATA.length}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={prevMobile}
              aria-label="Previous related article"
              className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer text-slate-700 border border-slate-200 shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextMobile}
              aria-label="Next related article"
              className="w-8 h-8 rounded-full bg-[#18529B] text-white hover:bg-[#133F77] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Active Mobile Single Card */}
        {currentMobileArticle && (
          <div
            onClick={() => onNavigate('blog-post', currentMobileArticle.id)}
            className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4 animate-fadeIn cursor-pointer"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 shadow-xs">
              <img
                src={currentMobileArticle.image}
                alt={currentMobileArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#0B1528] leading-snug">
              {currentMobileArticle.title}
            </h3>

            {/* Author Row */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                <img
                  src={currentMobileArticle.author.avatarUrl}
                  alt={currentMobileArticle.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1528]">
                  {currentMobileArticle.author.name}
                </h4>
                <p className="text-xs text-slate-500">
                  {currentMobileArticle.author.role}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-500 leading-relaxed">
              {currentMobileArticle.snippet}
            </p>
          </div>
        )}

        {/* Stepper Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-2">
          {RELATED_ARTICLES_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setMobileIdx(idx)}
              aria-label={`Go to related article ${idx + 1}`}
              className={`transition-all rounded-full h-1.5 cursor-pointer ${
                mobileIdx === idx
                  ? 'w-6 bg-[#18529B]'
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
