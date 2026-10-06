import React, { useState } from 'react';
import {
  CheckCircle2,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { useToast } from '../ui/Toast';

export interface ContactHeroSectionProps {
  onSuccess?: () => void;
}

// Custom Exact Smartphone Icon matching Frame 2121455032.png
export const ExactPhoneBadgeIcon: React.FC<{ className?: string }> = ({
  className = 'w-7 h-10',
}) => (
  <svg
    viewBox="0 0 32 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer rounded smartphone chassis */}
    <rect
      x="2.5"
      y="2.5"
      width="27"
      height="39"
      rx="6"
      stroke="#18529B"
      strokeWidth="2.8"
    />
    {/* Top speaker notch line */}
    <line
      x1="12"
      y1="7"
      x2="20"
      y2="7"
      stroke="#18529B"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

// Custom Exact Location Map Pin Icon matching Frame 2121455032.png
export const ExactPinBadgeIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-10',
}) => (
  <svg
    viewBox="0 0 36 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Teardrop outer pin path */}
    <path
      d="M 18 2.5 C 9.5 2.5 2.5 9.5 2.5 18 C 2.5 28.5 18 41.5 18 41.5 C 18 41.5 33.5 28.5 33.5 18 C 33.5 9.5 26.5 2.5 18 2.5 Z"
      stroke="#64748B"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Inner circular hole */}
    <circle
      cx="18"
      cy="17.5"
      r="5.5"
      stroke="#64748B"
      strokeWidth="2.8"
    />
  </svg>
);

const SERVICES_LIST = [
  { left: 'Mobile App Development', right: 'Web Development' },
  { left: 'AI Development', right: 'DevOps' },
  { left: 'SEO / Digital Marketing', right: 'ERP System' },
  { left: 'Business Auditing', right: 'Project Management' },
  { left: 'Staff Augmentation', right: 'OEM Global Sourcing' },
];

export const ContactHeroSection: React.FC<ContactHeroSectionProps> = ({ onSuccess }) => {
  const { addToast } = useToast();

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessEmail: '',
    projectDescription: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.businessEmail.trim() || !formData.businessEmail.includes('@')) {
      errs.businessEmail = 'A valid business email is required';
    }
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please describe your project';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      addToast({
        type: 'success',
        title: 'Consultation Request Received',
        description: 'Our team will reach out within one business day to discuss your project.',
      });
      if (onSuccess) onSuccess();
    }, 700);
  };

  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 bg-white overflow-hidden">
      {/* Ambient background soft light and glowing arcs matching Figma */}
      <div className="absolute -left-28 -top-20 w-[520px] h-[520px] rounded-full border-[54px] border-[#DCE7F5]/45 blur-lg pointer-events-none -z-0" />
      <div className="absolute -right-24 top-16 w-[560px] h-[560px] rounded-full border-[58px] border-[#E2EEF8]/55 blur-lg pointer-events-none -z-0" />
      <div className="absolute right-1/4 top-28 w-[380px] h-[380px] rounded-full bg-blue-100/25 blur-3xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* HERO HEADER: EXACT MATCH TO FIGMA                             */}
        {/* ============================================================== */}
        <div className="pt-2 sm:pt-4 pb-14 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Eyebrow + 2-line Heading + Subtitle */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#18529B]">
                CONTACT US
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[52px] font-extrabold text-[#0B1528] tracking-tight leading-[1.12]">
                Let's talk about<br />your project.
              </h1>

              <p className="text-sm sm:text-base lg:text-[16px] text-slate-500 font-normal leading-relaxed max-w-[460px] pt-1">
                Tell us what you’re building. We will respond within one business day and set up a free call to discuss the details properly.
              </p>
            </div>

            {/* Right Column: 3D Paper Airplane + 2 Floating Contact Cards */}
            <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end justify-center">
              {/* 3D Blue Origami Paper Airplane (Desktop / Tablet) */}
              <div className="hidden lg:block absolute -left-24 xl:-left-32 top-1/2 -translate-y-[62%] w-52 xl:w-60 pointer-events-none select-none z-10 transition-transform duration-500 hover:scale-105">
                <img
                  src="/images/contact-paper-plane.png"
                  alt=""
                  className="w-full h-auto drop-shadow-[0_16px_28px_rgba(24,82,155,0.22)] select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Mobile Paper Airplane Illustration */}
              <div className="flex lg:hidden justify-center pb-6">
                <img
                  src="/images/contact-paper-plane.png"
                  alt=""
                  className="w-40 sm:w-48 h-auto drop-shadow-md select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* 2 Floating Contact Cards */}
              <div className="relative z-20 w-full max-w-[420px] space-y-5 sm:space-y-6">
                {/* Card 1: Email */}
                <div className="relative bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 lg:p-7 shadow-[0_10px_32px_rgba(15,23,42,0.06)] border border-slate-100/90 pr-18 sm:pr-20">
                  <h3 className="text-lg sm:text-[20px] font-bold text-[#0B1528] tracking-tight mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@brightbyte.io"
                    className="text-sm sm:text-[15px] text-slate-500 hover:text-[#18529B] transition-colors font-normal block truncate"
                  >
                    contact@brightbyte.io
                  </a>

                  {/* Circular Badge at top-right corner */}
                  <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-16 h-16 sm:w-[74px] sm:h-[74px] rounded-full bg-white shadow-[0_12px_28px_rgba(15,23,42,0.1),0_2px_8px_rgba(15,23,42,0.04)] border border-slate-100/90 flex items-center justify-center shrink-0">
                    <ExactPhoneBadgeIcon className="w-6 h-8 sm:w-7 sm:h-9" />
                  </div>
                </div>

                {/* Card 2: Pakistan • Islamabad */}
                <div className="relative bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 lg:p-7 shadow-[0_10px_32px_rgba(15,23,42,0.06)] border border-slate-100/90 pr-18 sm:pr-20">
                  <h3 className="text-lg sm:text-[20px] font-bold text-[#0B1528] tracking-tight mb-1">
                    Pakistan • Islamabad
                  </h3>
                  <a
                    href="tel:+92512719015"
                    className="text-sm sm:text-[15px] text-slate-500 hover:text-[#18529B] transition-colors font-normal block truncate"
                  >
                    +92 51 2719015
                  </a>

                  {/* Circular Badge at bottom-right corner */}
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-16 h-16 sm:w-[74px] sm:h-[74px] rounded-full bg-white shadow-[0_12px_28px_rgba(15,23,42,0.1),0_2px_8px_rgba(15,23,42,0.04)] border border-slate-100/90 flex items-center justify-center shrink-0">
                    <ExactPinBadgeIcon className="w-6 h-8 sm:w-7 sm:h-9" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SCHEDULE A CONSULTATION FORM CONTAINER                         */}
        {/* Exactly matching Frame 2121455261.png                          */}
        {/* ============================================================== */}
        <div className="w-full bg-white rounded-[32px] sm:rounded-[36px] border border-slate-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)] p-6 sm:p-10 lg:p-14 mb-8">
          <div className="space-y-2 mb-8">
            <h2 className="text-2xl sm:text-[30px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
              Schedule a Consultation
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-500 font-normal leading-relaxed">
              Fill in the form below and one of our team will be in touch to arrange a call and discuss your project in detail.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1528]">Thank You!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your consultation request has been received. Our team will review your requirements and reach out within one business day.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    phone: '',
                    businessEmail: '',
                    projectDescription: '',
                  });
                  setSelectedServices([]);
                }}
                className="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name * & Phone Number * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-bold text-[#0B1528]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full rounded-[14px] border ${
                      errors.fullName ? 'border-rose-400' : 'border-slate-200'
                    } bg-white px-4 py-3.5 text-sm text-[#0B1528] placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-[#18529B] transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 font-medium">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-bold text-[#0B1528]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full rounded-[14px] border ${
                      errors.phone ? 'border-rose-400' : 'border-slate-200'
                    } bg-white px-4 py-3.5 text-sm text-[#0B1528] placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-[#18529B] transition-colors`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-500 font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Business Email * */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-bold text-[#0B1528]">
                  Business Email *
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={formData.businessEmail}
                  onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                  className={`w-full rounded-[14px] border ${
                    errors.businessEmail ? 'border-rose-400' : 'border-slate-200'
                  } bg-white px-4 py-3.5 text-sm text-[#0B1528] placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-[#18529B] transition-colors`}
                />
                {errors.businessEmail && (
                  <p className="text-xs text-rose-500 font-medium">{errors.businessEmail}</p>
                )}
              </div>

              {/* Row 3: Services You're Interested In */}
              <div className="space-y-3 pt-1">
                <label className="block text-xs sm:text-[13px] font-bold text-[#0B1528]">
                  Services You’re Interested In
                </label>

                {/* 2-Column Grid of 10 Pills matching Frame 2121455261.png */}
                <div className="space-y-3">
                  {SERVICES_LIST.map((pair, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {/* Left Pill */}
                      <button
                        type="button"
                        onClick={() => toggleService(pair.left)}
                        className={`w-full text-left px-5 py-3.5 rounded-[14px] border text-xs sm:text-[13.5px] font-semibold transition-all cursor-pointer ${
                          selectedServices.includes(pair.left)
                            ? 'bg-[#18529B] text-white border-[#18529B] shadow-2xs'
                            : 'bg-[#F1F3F6] hover:bg-[#E5EAEF] text-[#0B1528] border-transparent'
                        }`}
                      >
                        {pair.left}
                      </button>

                      {/* Right Pill */}
                      <button
                        type="button"
                        onClick={() => toggleService(pair.right)}
                        className={`w-full text-left px-5 py-3.5 rounded-[14px] border text-xs sm:text-[13.5px] font-semibold transition-all cursor-pointer ${
                          selectedServices.includes(pair.right)
                            ? 'bg-[#18529B] text-white border-[#18529B] shadow-2xs'
                            : 'bg-[#F1F3F6] hover:bg-[#E5EAEF] text-[#0B1528] border-transparent'
                        }`}
                      >
                        {pair.right}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 4: Project Description * */}
              <div className="space-y-2 pt-1">
                <label className="block text-xs sm:text-[13px] font-bold text-[#0B1528]">
                  Project Description *
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you are building. Your goals, timeline, and any relevant context."
                  value={formData.projectDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, projectDescription: e.target.value })
                  }
                  className={`w-full rounded-[14px] border ${
                    errors.projectDescription ? 'border-rose-400' : 'border-slate-200'
                  } bg-white p-4 text-sm text-[#0B1528] placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-[#18529B] transition-colors resize-none`}
                />
                {errors.projectDescription && (
                  <p className="text-xs text-rose-500 font-medium">
                    {errors.projectDescription}
                  </p>
                )}
              </div>

              {/* Row 5: Send Message Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#18529B] hover:bg-[#133F77] text-white font-bold text-sm sm:text-base py-4 rounded-[14px] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message →'}</span>
                </button>
              </div>

              {/* Bottom disclaimer */}
              <p className="text-xs text-slate-500 font-normal leading-relaxed text-left pt-1">
                By submitting this form you agree to be contacted by Bright Byte Consulting regarding your enquiry. We do not share your details with anyone.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};
