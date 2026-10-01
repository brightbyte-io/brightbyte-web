import React from 'react';
import { FaqSection, FaqSectionProps, HOME_FAQS } from '../layout/FaqSection';

export { HOME_FAQS };

/**
 * @deprecated Use `<FaqSection page="home" />` from `'../layout/FaqSection'` directly.
 */
export const HomeFaq: React.FC<Partial<FaqSectionProps>> = (props) => {
  return <FaqSection page="home" {...props} />;
};
