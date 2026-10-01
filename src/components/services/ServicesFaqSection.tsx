import React from 'react';
import { FaqSection, FaqSectionProps, SERVICES_FAQS } from '../layout/FaqSection';

export { SERVICES_FAQS, SERVICES_FAQS as FAQ_DATA };
export type { FaqItem } from '../../types';

/**
 * @deprecated Use `<FaqSection page="services" />` from `'../layout/FaqSection'` directly.
 */
export const ServicesFaqSection: React.FC<Partial<FaqSectionProps>> = (props) => {
  return <FaqSection page="services" {...props} />;
};
