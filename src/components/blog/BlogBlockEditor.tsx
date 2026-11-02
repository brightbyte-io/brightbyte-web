import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUp, Bold, Heading2, Image, Italic, Link, List, ListCollapse, Minus, Plus, Quote, Trash2, Type } from 'lucide-react';
import { BlogBlock, BlogBlockType } from '../../utils/blogContent';
import { BlogImagePicker } from './BlogImagePicker';

const blockTypes = [
  { type: 'paragraph', label: 'Paragraph', icon: Type },
  { type: 'heading', label: 'Heading', icon: Heading2 },
  { type: 'list', label: 'List', icon: List },
  { type: 'quote', label: 'Quote', icon: Quote },
  { type: 'image', label: 'Image', icon: Image },
  { type: 'divider', label: 'Separator', icon: Minus },
  { type: 'accordion', label: 'FAQ accordion', icon: ListCollapse },
] as const;

export const BlogBlockEditor: React.FC<{ blocks: BlogBlock[]; onChange: (blocks: BlogBlock[]) => void; onImageLoadingChange?: (loading: boolean) => void }> = ({ blocks, onChange, onImageLoadingChange }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [adding, setAdding] = useState<'top' | 'bottom' | null>(null);
  const [linkUrl, setLinkUrl] = useState<string | null>(null);
  const fields = useRef<Record<string, HTMLTextAreaElement | null>>({});
  const latestBlocks = useRef(blocks);
  latestBlocks.current = blocks;
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!adding) return;
    const close = (event: PointerEvent) => { if (!menu.current?.contains(event.target as Node) && !(event.target as Element).closest?.('[data-block-inserter]')) setAdding(null); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setAdding(null); };
    document.addEventListener('pointerdown', close); document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', escape); };
  }, [adding]);
  const selection = useRef({ start: 0, end: 0 });
  const patch = (id: string, values: Partial<BlogBlock>) => onChange(latestBlocks.current.map(block => block.id === id ? { ...block, ...values } : block));

  const insert = (type: BlogBlockType) => {
    const block: BlogBlock = { id: crypto.randomUUID(), type, text: '', ...(type === 'heading' ? { level: 2 } : {}), ...(type === 'accordion' ? { text: 'Frequently asked questions', items: [{ id: crypto.randomUUID(), question: '', answer: '' }] } : {}) };
    const index = adding === 'bottom' ? blocks.length - 1 : blocks.findIndex(item => item.id === selected);
    const next = [...blocks]; next.splice(index >= 0 ? index + 1 : blocks.length, 0, block);
    onChange(next); setSelected(block.id); setAdding(null);
    requestAnimationFrame(() => fields.current[block.id]?.focus());
  };

  const picker = (position: 'top' | 'bottom') => adding === position && <div ref={menu} className="wp-block-picker" role="group" aria-label="Choose a block">{blockTypes.map(({ type, label, icon: Icon }) => <button type="button" key={type} onClick={() => insert(type)}><Icon size={23} />{label}</button>)}</div>;
  const move = (index: number, offset: number) => {
    const next = [...blocks]; [next[index], next[index + offset]] = [next[index + offset], next[index]]; onChange(next);
  };
  const format = (kind: 'bold' | 'italic' | 'link', url?: string) => {
    const block = blocks.find(item => item.id === selected);
    if (!block || !fields.current[block.id]) return;
    const { start, end } = selection.current;
    const value = block.text.slice(start, end) || (kind === 'link' ? 'link text' : 'text');
    const wrapped = kind === 'bold' ? `**${value}**` : kind === 'italic' ? `*${value}*` : `[${value}](${url})`;
    patch(block.id, { text: block.text.slice(0, start) + wrapped + block.text.slice(end) });
    requestAnimationFrame(() => {
      const field = fields.current[block.id]; field?.focus(); field?.setSelectionRange(start, start + wrapped.length);
    });
  };

  return (
    <div className="wp-block-editor">
      {blocks.length === 0 && <button type="button" className="wp-empty-block" onClick={() => insert('paragraph')}>Start writing or add a block <Plus size={20} /></button>}
      {blocks.map((block, index) => (
        <section key={block.id} className={`wp-block ${selected === block.id ? 'is-selected' : ''}`} aria-label={`${block.type} block ${index + 1}`} onFocus={() => setSelected(block.id)} onClick={() => setSelected(block.id)}>
          <div className="wp-block-toolbar">
            <label><span className="sr-only">Block type</span><select value={block.type} onChange={e => patch(block.id, { type: e.target.value as BlogBlockType })}>{blockTypes.map(type => <option key={type.type} value={type.type}>{type.label}</option>)}</select></label>
            {block.type === 'heading' && <select aria-label="Heading level" value={block.level || 2} onChange={e => patch(block.id, { level: Number(e.target.value) as 2 | 3 })}><option value={2}>H2</option><option value={3}>H3</option></select>}
            {!['image', 'divider', 'accordion'].includes(block.type) && <>
              <button type="button" aria-label="Bold selected text" onMouseDown={e => e.preventDefault()} onClick={() => format('bold')}><Bold size={15} /></button>
              <button type="button" aria-label="Italic selected text" onMouseDown={e => e.preventDefault()} onClick={() => format('italic')}><Italic size={15} /></button>
              <button type="button" aria-label="Add link to selected text" onMouseDown={e => e.preventDefault()} onClick={() => { setSelected(block.id); setLinkUrl('https://'); }}><Link size={15} /></button>
            </>}
            <span className="wp-toolbar-spacer" />
            <button type="button" disabled={index === 0} aria-label="Move block up" onClick={() => move(index, -1)}><ArrowUp size={15} /></button>
            <button type="button" disabled={index === blocks.length - 1} aria-label="Move block down" onClick={() => move(index, 1)}><ArrowDown size={15} /></button>
            <button type="button" aria-label="Remove block" onClick={() => onChange(blocks.filter(item => item.id !== block.id))}><Trash2 size={15} /></button>
          </div>
          {selected === block.id && linkUrl !== null && <div className="wp-link-input"><input aria-label="Link URL" value={linkUrl} onChange={e => setLinkUrl(e.target.value)} placeholder="https://example.com" /><button type="button" onClick={() => { if (/^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(linkUrl) && !/[\s\\]/.test(linkUrl)) { format('link', linkUrl); setLinkUrl(null); } }}>Apply link</button><button type="button" onClick={() => setLinkUrl(null)}>Cancel</button></div>}
          {block.type === 'image' ? <div className="wp-image-block">
            <BlogImagePicker value={block.url || ''} onChange={url => patch(block.id, { url })} label="Block image" alt={block.alt || ''} onLoadingChange={onImageLoadingChange} />
            <label>Alternative text<input value={block.alt || ''} onChange={e => patch(block.id, { alt: e.target.value })} placeholder="Describe the image for screen readers" /></label>
            <label>Caption<input value={block.caption || ''} onChange={e => patch(block.id, { caption: e.target.value })} placeholder="Optional image caption" /></label>
          </div> : block.type === 'accordion' ? <div className="wp-faq-editor">
            <label>FAQ heading<input value={block.text} onChange={e => patch(block.id, { text: e.target.value })} placeholder="Frequently asked questions" /></label>
            {(block.items || []).map((item, itemIndex) => <div className="wp-faq-item" key={item.id}>
              <div><strong>Question {itemIndex + 1}</strong><button type="button" aria-label={`Remove question ${itemIndex + 1}`} onClick={() => patch(block.id, { items: block.items?.filter(question => question.id !== item.id) })}><Trash2 size={15} /></button></div>
              <label>Question {itemIndex + 1}<input value={item.question} onChange={e => patch(block.id, { items: block.items?.map(question => question.id === item.id ? { ...question, question: e.target.value } : question) })} placeholder="What would your reader like to know?" /></label>
              <label>Answer {itemIndex + 1}<textarea aria-label={`Answer ${itemIndex + 1}`} rows={4} value={item.answer} onChange={e => patch(block.id, { items: block.items?.map(question => question.id === item.id ? { ...question, answer: e.target.value } : question) })} placeholder="Write the answer…" /></label>
            </div>)}
            <button type="button" onClick={() => patch(block.id, { items: [...(block.items || []), { id: crypto.randomUUID(), question: '', answer: '' }] })}><Plus size={16} />Add question</button>
          </div> : block.type === 'divider' ? <hr /> : <textarea
            ref={element => { fields.current[block.id] = element; }}
            className={`wp-block-text wp-block-${block.type}`}
            aria-label={`${block.type} text`}
            rows={block.type === 'heading' ? 2 : block.type === 'list' ? 4 : 5}
            value={block.text}
            onChange={e => patch(block.id, { text: e.target.value })}
            onSelect={e => { selection.current = { start: e.currentTarget.selectionStart, end: e.currentTarget.selectionEnd }; }}
            placeholder={block.type === 'heading' ? 'Write a heading…' : block.type === 'list' ? 'One list item per line…' : block.type === 'quote' ? 'Write a quotation…' : 'Write your paragraph…'}
          />}
        </section>
      ))}
      {blocks.length > 0 && <div className="wp-bottom-inserter"><button type="button" data-block-inserter className="wp-append-block" onClick={() => setAdding(adding === 'bottom' ? null : 'bottom')} aria-expanded={adding === 'bottom'}><Plus size={18} />Insert another block</button>{picker('bottom')}</div>}
    </div>
  );
};
