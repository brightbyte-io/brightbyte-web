import { MainHeading } from '../ui/MainHeading';
import { SectionLabel } from '../ui/SectionLabel';
import React, { useId } from 'react';
import './DeliveryProcessSection.css';

export interface DeliveryProcessContent {
  labelKey: string;
  headingKey: string;
  description: string;
  steps: { title: string; description: string }[];
}

// Frame the visible artwork, excluding each asset's different transparent margins.
const pinFrames = ['350 150 420 520', '246 218 428 452', '350 150 420 520', '246 218 428 452'];

export const DeliveryProcessSection: React.FC<{ content: DeliveryProcessContent }> = ({ content }) => {
  const titleId = useId();
  const { steps } = content;
  return (
  <section className="work-delivery" aria-labelledby={titleId}>
    <div className="work-delivery-grid" aria-hidden="true" />
    <div className="work-delivery-inner">
      <header className="work-delivery-heading">
        <SectionLabel labelKey={content.labelKey} />
        <MainHeading headingKey={content.headingKey} as="h2" variant="section" id={titleId}></MainHeading>
        <p>{content.description}</p>
      </header>
      <ol className="work-delivery-steps">
        {steps.map((step, index) => (
          <li className={`work-delivery-step work-delivery-step-${index + 1}`} key={step.title}>
            <article className="delivery-note">
              <svg className="delivery-pin" viewBox={pinFrames[index % pinFrames.length]} aria-hidden="true">
                <image href={`/images/pin${index % 4 + 1}.svg`} width="1024" height="1024" />
              </svg>
              <span className="delivery-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
            {index < steps.length - 1 && (
              <svg className={`delivery-arrow ${index === 1 ? 'delivery-arrow-top' : ''}`} viewBox="0 0 88 24" fill="none" aria-hidden="true">
                <path d={index === 1 ? 'M2 17 Q42 -1 72 14' : 'M2 6 Q42 24 72 11'} stroke="#565656" strokeWidth="3" strokeDasharray="5 6" />
                <path d={index === 1 ? 'M70 5L85 18L66 19Z' : 'M69 4L86 7L75 21Z'} fill="#565656" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </div>
  </section>
);
};
