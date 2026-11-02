import React, { useEffect, useRef, useState } from 'react';
import { ImagePlus, Trash2 } from 'lucide-react';
import { safeImageUrl } from '../../utils/blogContent';

export const BlogImagePicker: React.FC<{
  value: string;
  onChange: (value: string) => void;
  label: string;
  alt?: string;
  onLoadingChange?: (loading: boolean) => void;
}> = ({ value, onChange, label, alt = '', onLoadingChange }) => {
  const input = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [filename, setFilename] = useState('');
  const mounted = useRef(true);
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);
  useEffect(() => {
    if (!loading) return;
    onLoadingChange?.(true);
    return () => onLoadingChange?.(false);
  }, [loading, onLoadingChange]);

  const selectImage = async (file?: File) => {
    if (!file) return;
    setError('');
    if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type)) {
      setError('Choose a JPG, PNG, WebP, or GIF image.'); return;
    }
    if (file.size > 1024 * 1024) { setError('Choose an image smaller than 1 MB.'); return; }
    setLoading(true);
    try {
      const data = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => typeof reader.result === 'string' ? resolve(reader.result) : reject();
        reader.onerror = () => reject();
        reader.readAsDataURL(file);
      });
      // Decode before storing so renamed or damaged files are rejected.
      const image = new window.Image();
      image.src = data;
      await image.decode();
      if (mounted.current) { onChange(data); setFilename(file.name); }
    } catch { if (mounted.current) setError('This image could not be read. Please choose another file.'); }
    finally { if (mounted.current) setLoading(false); }
  };

  return <div className="wp-image-picker">
    {value && safeImageUrl(value) && <img src={value} alt={alt} />}
    <input ref={input} type="file" accept="image/jpeg,image/png,image/webp,image/gif" aria-label={label} disabled={loading} onChange={e => { void selectImage(e.target.files?.[0]); e.target.value = ''; }} />
    <div className="wp-image-picker-actions"><button type="button" disabled={loading} onClick={() => input.current?.click()}><ImagePlus size={16} />{loading ? 'Reading image…' : value ? 'Replace image' : 'Select image'}</button>{value && <button type="button" disabled={loading} className="danger" aria-label={`Remove ${label.toLowerCase()}`} onClick={() => { onChange(''); setFilename(''); setError(''); }}><Trash2 size={15} />Remove</button>}</div>
    {filename && <small className="wp-image-filename">{filename}</small>}
    <small>JPG, PNG, WebP or GIF · Up to 1 MB. Saved with your post in the database.</small>
    {error && <p className="wp-image-error" role="alert">{error}</p>}
  </div>;
};
