import React from 'react';
import { DeliveryProcessSection } from '../shared/DeliveryProcessSection';
import content from '../../data/deliverySections.json';

export const HowWeWorkDeliverySection: React.FC = () => (
  <DeliveryProcessSection content={content.howWeWork} />
);
