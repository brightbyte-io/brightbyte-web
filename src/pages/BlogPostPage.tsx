import React from 'react';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, CheckCircle2, ChevronRight, User, Tag, ArrowRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CtaCard } from '../components/layout/CtaCard';
import { BlogSingleHeroSection } from '../components/blog/BlogSingleHeroSection';
import { BlogRelatedArticlesSection } from '../components/blog/BlogRelatedArticlesSection';
import { PageId, BlogPost } from '../types';
import { asPublicPost, usePublicBlogs } from '../utils/blogContent';
import { BlogBlocks } from '../components/blog/BlogBlocks';

export interface BlogPostPageProps {
  postId?: string;
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  postId,
  onNavigate,
  onOpenConsultation,
}) => {
  const { posts: managed, loading, error } = usePublicBlogs();
  const customPost = managed.find(post => post.status === 'published' && (post.slug === postId || post.id === postId));
  const post: BlogPost | undefined = customPost ? asPublicPost(customPost) : undefined;
  if (loading || error) return <main className="pt-40 pb-24 text-center" role="status"><p>{loading ? 'Loading article…' : error}</p></main>;
  if (!post) return <main className="pt-40 pb-24 text-center"><h1 className="text-3xl font-semibold">Article not found</h1><a className="inline-block mt-6 text-[#18529B]" href="/blog">Back to articles</a></main>;

  const authorName = typeof post.author === 'object' && post.author ? post.author.name : post.author || 'Ahmed Nadeem';
  const authorRole = typeof post.author === 'object' && post.author ? post.author.role : post.authorRole || 'Lead Technical Architect';
  const authorAvatar = typeof post.author === 'object' && post.author?.avatar ? post.author.avatar : 'AN';

  return (
    <div className="bg-white">
      {/* 1. First Section: Blog Single Hero Visual Banner matching Frame 2121455182 (5).png */}
      <BlogSingleHeroSection post={post} />

      <div className="pb-16 sm:pb-24">
        <Container>
          {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-slate-900 cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button
            onClick={() => onNavigate('blog')}
            className="hover:text-slate-900 cursor-pointer"
          >
            Blog
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-900 truncate max-w-xs">{post.title}</span>
        </div>

        {/* Back Link */}
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#18529B] hover:underline mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>

        {/* Article Header matching Blog Individual.png */}
        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#18529B] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-500">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {post.summary}
          </p>

          {/* Author bar */}
          <div className="pt-4 border-t border-b border-slate-100 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 text-[#18529B] flex items-center justify-center font-bold text-xs">
                {authorAvatar}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{authorName}</h4>
                <p className="text-xs text-slate-500">{authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-xs font-medium text-slate-500">Share:</span>
              <button
                aria-label="Share article"
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Article Body matching Blog Individual.png */}
        <div className="max-w-3xl mx-auto prose prose-slate space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          {post.blocks ? <BlogBlocks blocks={post.blocks} /> : post.content?.length ? post.content.map((paragraph, index) => (
            <p className="whitespace-pre-wrap" key={index}>{paragraph}</p>
          )) : <>
          <p>
            When architecting modern enterprise digital products, the distinction between functional code and enduring, maintainable software comes down to architectural intentionality. As engineering systems scale, unstructured dependencies and coupled domain logic compound into critical bottlenecks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 tracking-tight pt-4">
            1. Decomposing Monoliths Without Introducing Microservice Chaos
          </h2>
          <p>
            One of the most frequent anti-patterns we encounter during our technical audits is the premature adoption of dozens of microservices before domain boundaries are stabilized. A disciplined modular monolith or bounded context architecture frequently delivers higher throughput with 80% lower operational complexity.
          </p>

          {/* Technical Code/Schema Callout Box */}
          <div className="rounded-2xl bg-slate-900 p-5 sm:p-6 text-slate-200 font-mono text-xs overflow-x-auto space-y-2 border border-slate-800">
            <div className="text-slate-400 text-[11px] pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>// Architecture Pattern: Clean Domain-Driven Service Boundary</span>
              <span className="text-emerald-400">Production TypeScript</span>
            </div>
            <pre className="text-slate-300">
{`interface OrderService {
  executeCheckout(command: CheckoutCommand): Promise<Result<OrderSnapshot, DomainError>>;
  reconcileInventory(reservationId: UUID): Promise<void>;
}

export class EnterpriseOrderEngine implements OrderService {
  constructor(
    private readonly repo: OrderRepository,
    private readonly telemetry: TelemetryEmitter,
    private readonly eventBus: EventPublisher
  ) {}
  
  // Enforces immutable transaction semantics and audit logging
}`}
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 tracking-tight pt-4">
            2. High-Velocity Continuous Integration Standards
          </h2>
          <p>
            Production stability requires continuous automated verification. At BrightByte Consulting, our standard delivery template mandates that all pull requests must pass automated linting, end-to-end integration suites, and security dependency audits before merging into mainline branches.
          </p>

          {/* Key takeaways callout box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#18529B]" />
              <span>Key Architectural Takeaways:</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18529B] mt-2 shrink-0" />
                <span>Establish strict interface contracts before writing implementation logic.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18529B] mt-2 shrink-0" />
                <span>Automate regression testing in CI pipelines to maintain 99.9% release reliability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18529B] mt-2 shrink-0" />
                <span>Integrate observability and distributed tracing from sprint 1, not post-launch.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 tracking-tight pt-4">
            3. Blended Global Engineering Pods
          </h2>
          <p>
            By pairing onshore lead architects with dedicated international engineering pods, organizations unlock round-the-clock development momentum. With clear milestone handovers and structured documentation, sprints advance seamlessly across time zones without quality degradation.
          </p>
          </>}
        </div>

        {/* Author Bio Box */}
        <div className="max-w-3xl mx-auto my-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 text-[#18529B] flex items-center justify-center font-extrabold text-xl shrink-0">
            {authorAvatar}
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">{authorName}</h4>
            <p className="text-xs font-semibold text-[#18529B]">{authorRole} at BrightByte Consulting</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Leading enterprise solution architectures, distributed engineering teams, and cloud product migrations for global clients.
            </p>
          </div>
        </div>

        {/* Related Articles matching Frame 2085662448.png */}
        <BlogRelatedArticlesSection excludeId={post.id} onNavigate={onNavigate} />

        {/* Pre-footer CTA */}
        <CtaCard
          onOpenConsultation={onOpenConsultation}
          onOpenCalendly={onOpenConsultation}
        />
      </Container>
      </div>
    </div>
  );
};
