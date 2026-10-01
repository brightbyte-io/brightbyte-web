import React from 'react';
import { FaqSection, FaqSectionProps, MOBILE_APP_FAQS } from '../layout/FaqSection';

export { MOBILE_APP_FAQS };
export type { FaqItem as MobileFaqItem } from '../../types';

/**
 * @deprecated Use `<FaqSection page="mobile-app" />` from `'../layout/FaqSection'` directly.
 */
export const MobileAppFaqSection: React.FC<Partial<FaqSectionProps>> = (props) => {
  return <FaqSection page="mobile-app" {...props} />;
};
