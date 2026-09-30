import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { useToast } from '../ui/Toast';
import { servicesData } from '../../data/mockData';

export interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: {
    serviceType?: string;
    budget?: string;
    description?: string;
  };
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialScope,
}) => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: initialScope?.serviceType || 'mobile-app-development',
    budget: initialScope?.budget || '$25,000 – $50,000 CAD',
    description: initialScope?.description || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initial scope if updated
  React.useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({
        ...prev,
        serviceType: initialScope.serviceType || prev.serviceType,
        budget: initialScope.budget || prev.budget,
        description: initialScope.description || prev.description,
      }));
    }
  }, [initialScope]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Valid corporate email is required';
    if (!formData.description.trim())
      newErrors.description = 'Please provide a brief overview of your technical requirements';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      addToast({
        type: 'success',
        title: 'Consultation Scheduled',
        description: 'Our Toronto lead architect will contact you within 24 hours with scoping notes.',
      });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      serviceType: 'mobile-app-development',
      budget: '$25,000 – $50,000 CAD',
      description: '',
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Book a Free Technical Consultation"
      subtitle="Speak directly with a BrightByte solution architect to map your digital roadmap."
      maxWidth="md"
    >
      {isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            Consultation Request Received!
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out. A senior solutions architect from BrightByte Consulting will review your scope and get in touch within 24 business hours.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={handleReset}>
              Close Dialog
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Full Name *"
              placeholder="e.g. Alex Morgan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
            />
            <Input
              label="Corporate Email *"
              type="email"
              placeholder="alex@organization.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Company Name"
              placeholder="Company or Organization"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
            <Input
              label="Phone Number"
              placeholder="+1 (647) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                Primary Practice Area
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full rounded-xl border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 focus:outline-none focus:border-[#18529B]"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                Target Budget
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full rounded-xl border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 focus:outline-none focus:border-[#18529B]"
              >
                <option value="$12,000 – $25,000 CAD">$12,000 – $25,000 CAD (MVP)</option>
                <option value="$25,000 – $50,000 CAD">$25,000 – $50,000 CAD (Scale)</option>
                <option value="$50,000 – $100,000+ CAD">$50,000 – $100,000+ CAD (Enterprise)</option>
                <option value="Staff Augmentation / Hourly">Staff Augmentation / Sourcing</option>
              </select>
            </div>
          </div>

          <Textarea
            label="Brief Description of Scope or Objectives *"
            placeholder="Tell us about the project goals, target launch timeline, or key technical challenges..."
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            error={errors.description}
          />

          <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Strict NDA & 100% Privacy</span>
            </div>

            <div className="flex items-center gap-2">
              <Button type="button" variant="outline" size="sm" onClick={handleReset}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                loading={isSubmitting}
                iconRight={<Send className="w-3.5 h-3.5" />}
              >
                Submit Request
              </Button>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
};
