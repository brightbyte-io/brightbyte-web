import React from 'react';
import labels from '../../data/sectionLabels.json';
import './SectionLabel.css';

export const SectionLabel: React.FC<{ labelKey: string; className?: string; light?: boolean }> = ({ labelKey, className = '', light = false }) => (
  <span className={`section-label ${light ? 'section-label-light' : ''} ${className}`}>{(labels as Record<string, string>)[labelKey] || ''}</span>
);
