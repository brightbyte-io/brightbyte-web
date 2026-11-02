import React from 'react';
import settings from '../../data/mainHeadings.json';
import './MainHeading.css';

type HeadingEntry = { text?: string; mobile?: number; tablet?: number; desktop?: number; weight?: number; lineHeight?: number; letterSpacing?: number };
export interface MainHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> { headingKey: string; as?: 'h1' | 'h2'; variant?: 'hero' | 'section'; }
export const MainHeading: React.FC<MainHeadingProps> = ({ headingKey, as: Tag = 'h2', variant = 'section', children, className = '', style, ...props }) => {
  const entry = (settings.headings as Record<string, HeadingEntry>)[headingKey] || {};
  const config = { ...settings.defaults[variant], ...entry };
  const headingStyle = { '--heading-mobile': config.mobile + 'px', '--heading-tablet': config.tablet + 'px', '--heading-desktop': config.desktop + 'px', '--heading-weight': config.weight, '--heading-line-height': config.lineHeight, '--heading-spacing': config.letterSpacing + 'px', ...style } as React.CSSProperties;
  return <Tag {...props} className={`main-heading ${className}`} style={headingStyle}>{entry.text !== undefined ? entry.text.split('\n').map((line, index) => <React.Fragment key={index}>{index > 0 && <br />}{line}</React.Fragment>) : children}</Tag>;
};
