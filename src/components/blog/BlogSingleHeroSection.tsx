import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar, User, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';
import { BlogPost } from '../../types';

export interface BlogSingleHeroSectionProps {
  post: BlogPost;
}

export const BlogSingleHeroSection: React.FC<BlogSingleHeroSectionProps> = ({ post }) => {
  // Mobile stepper active slide (< 768px: "only in bleow 768 show one by one")
  const [mobileStep, setMobileStep] = useState(0);

  const heroImage =
    post.image ||
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80';

  const authorName =
    typeof post.author === 'object' && post.author
      ? post.author.name
      : post.author || 'Ahmed Nadeem';

  const authorRole =
    typeof post.author === 'object' && post.author
      ? post.author.role
      : post.authorRole || 'Lead Technical Architect';

  const nextMobile = () => setMobileStep((prev) => (prev + 1) % 3);
  const prevMobile = () => setMobileStep((prev) => (prev - 1 + 3) % 3);

  return (
    <div className="relative w-full mb-10 overflow-hidden">
      {/* ============================================================== */}
      {/* DESKTOP & TABLET VIEW (>= 768px): EXACT MATCH TO Frame 2121455182 (5).png */}
      {/* Panoramic hero image stretching behind the floating navbar     */}
      {/* ============================================================== */}
      <div className="hidden md:block relative w-full h-[380px] sm:h-[430px] lg:h-[470px] bg-slate-900 overflow-hidden">
        {/* Main Hero Photograph */}
        <img
          src={heroImage}
          alt={post.title}
          className="w-full h-full object-cover object-[50%_35%] transition-transform duration-700 hover:scale-105"
          priority-eager="true"
        />

        {/* Ambient subtle vignette overlay to ensure crisp navbar contrast */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />

        {/* Soft atmospheric white gradient on the right edge matching Frame 2121455182 (5).png */}
        <div
          className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/70 via-white/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Bottom subtle edge fade to seamless white background */}
        <div
          className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* ============================================================== */}
      {/* MOBILE VIEW (< 768px: "only in bleow 768 show one by one")      */}
      {/* Stepper displaying the hero elements one by one                 */}
      {/* ============================================================== */}
      <div className="md:hidden pt-24 px-4 space-y-4">
        {/* Mobile Stepper Header */}
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Article Overview 0{mobileStep + 1} of 03
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={prevMobile}
              aria-label="Previous overview item"
              className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer text-slate-700 border border-slate-200 shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextMobile}
              aria-label="Next overview item"
              className="w-8 h-8 rounded-full bg-[#18529B] text-white hover:bg-[#133F77] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Active Mobile Slide (< 768px) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden animate-fadeIn">
          {/* Slide 1: Hero Banner Photo */}
          {mobileStep === 0 && (
            <div className="relative aspect-[16/10] w-full bg-slate-900">
              <img
                src={heroImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#18529B] shadow-2xs">
                {post.category || 'HIRING'}
              </div>
            </div>
          )}

          {/* Slide 2: Headline & Category */}
          {mobileStep === 1 && (
            <div className="p-6 space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#18529B] bg-blue-50 px-3 py-1 rounded-full">
                {post.category || 'HIRING'}
              </span>
              <h2 className="text-xl font-extrabold text-[#0B1528] tracking-tight leading-snug">
                {post.title}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                {post.summary}
              </p>
            </div>
          )}

          {/* Slide 3: Author & Meta Info */}
          {mobileStep === 2 && (
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#18529B] font-bold flex items-center justify-center border border-blue-200">
                  {authorName.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{authorName}</h4>
                  <p className="text-xs text-slate-500">{authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.readTime || '4 Min Read'}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.date || 'Recent'}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stepper Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setMobileStep(idx)}
              aria-label={`Go to overview slide ${idx + 1}`}
              className={`transition-all rounded-full h-1.5 cursor-pointer ${
                mobileStep === idx
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
