import React from 'react';
import { BlogBlock, safeImageUrl } from '../../utils/blogContent';
import './BlogBlocks.css';

function safeLink(url: string): boolean {
  return /^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(url) && !/[\s\\]/.test(url);
}

// A small, text-only formatter. User HTML is never inserted into the DOM.
export const InlineText: React.FC<{ text: string }> = ({ text }) => {
  const pattern = /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index!;
    nodes.push(text.slice(last, index));
    if (match[1]) nodes.push(<strong key={index}>{match[1]}</strong>);
    else if (match[2]) nodes.push(<em key={index}>{match[2]}</em>);
    else if (safeLink(match[4])) nodes.push(<a key={index} href={match[4]}>{match[3]}</a>);
    else nodes.push(match[3]);
    last = index + match[0].length;
  }
  nodes.push(text.slice(last));
  return <>{nodes}</>;
};

export const BlogBlocks: React.FC<{ blocks: BlogBlock[]; eagerImages?: boolean }> = ({ blocks, eagerImages = false }) => (
  <div className="blog-blocks">
    {blocks.map(block => {
      const text = <InlineText text={block.text} />;
      switch (block.type) {
        case 'heading': return block.level === 3 ? <h3 key={block.id}>{text}</h3> : <h2 key={block.id}>{text}</h2>;
        case 'quote': return <blockquote key={block.id}>{text}</blockquote>;
        case 'list': return <ul key={block.id}>{block.text.split('\n').filter(Boolean).map((line, index) => <li key={index}><InlineText text={line} /></li>)}</ul>;
        case 'image': return block.url && safeImageUrl(block.url) ? <figure key={block.id}><img src={block.url} alt={block.alt || ''} loading={eagerImages ? 'eager' : 'lazy'} />{block.caption && <figcaption>{block.caption}</figcaption>}</figure> : null;
        case 'accordion': return <section className="blog-faq" key={block.id} aria-label={block.text || 'Frequently asked questions'}>{block.text && <h2>{text}</h2>}{(block.items || []).filter(item => item.question.trim()).map(item => <details key={item.id}><summary><InlineText text={item.question} /><span aria-hidden="true">+</span></summary><div><InlineText text={item.answer} /></div></details>)}</section>;
        case 'divider': return <hr key={block.id} />;
        default: return <p key={block.id}>{text}</p>;
      }
    })}
  </div>
);
