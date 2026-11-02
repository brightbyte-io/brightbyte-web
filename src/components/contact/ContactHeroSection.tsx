import { MainHeading } from '../ui/MainHeading';
import { SectionLabel } from '../ui/SectionLabel';
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../layout/Container";
import "./ContactHeroSection.css";
import { useToast } from "../ui/Toast";
import { apiRequest } from "../../utils/adminApi";

export interface ContactHeroSectionProps {
  onSuccess?: () => void;
}

const SERVICES_LIST = [
  { left: "Mobile App Development", right: "Web Development" },
  { left: "AI Development", right: "DevOps" },
  { left: "SEO / Digital Marketing", right: "ERP System" },
  { left: "Business Auditing", right: "Project Management" },
  { left: "Staff Augmentation", right: "OEM Global Sourcing" },
];

export const ContactHeroSection: React.FC<ContactHeroSectionProps> = ({
  onSuccess,
}) => {
  const { addToast } = useToast();

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    businessEmail: "",
    projectDescription: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (
      !formData.businessEmail.trim() ||
      !formData.businessEmail.includes("@")
    ) {
      errs.businessEmail = "A valid business email is required";
    }
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = "Please describe your project";
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await apiRequest("/contact/submissions", { method: "POST", body: JSON.stringify({ ...formData, services: selectedServices }) });
      setIsSubmitted(true);
      addToast({
        type: "success",
        title: "Consultation Request Received",
        description:
          "Our team will review your inquiry and contact you to discuss your project.",
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      addToast({ type: "error", title: "Request could not be sent", description: (error as Error).message });
    } finally { setIsSubmitting(false); }
  };

  return (
    <section
      className="contact-hero-section relative pt-28 sm:pt-32 lg:pt-[184px] pb-16 sm:pb-24 overflow-hidden"
    >
      <Container className="relative z-10 lg:!max-w-[1280px] lg:!px-10">
        <div className="contact-hero-layout">
          <div className="contact-hero-copy">
            <SectionLabel labelKey="contactUs" />
            <MainHeading headingKey="ContactHeroSection" as="h1" variant="hero" />
            <p>Tell us about your project, existing systems and goals. Our team will review your inquiry and arrange a call to discuss next steps.</p>
          </div>
          <div className="contact-hero-details">
            <img className="contact-hero-plane" src="/images/contact-paper-plane.svg" alt="" width={365} height={243} />
            <div className="contact-hero-card">
              <h2>Email</h2>
              <a href="mailto:contact@brightbyte.io">contact@brightbyte.io</a>
              <span className="contact-hero-badge contact-hero-phone" aria-hidden="true"><img src="/images/contact-badge-phone.svg" alt="" /></span>
            </div>
            <div className="contact-hero-card">
              <h2>Pakistan <span aria-hidden="true">•</span> Islamabad</h2>
              <a href="tel:+92512719015">+92 51 2719015</a>
              <span className="contact-hero-badge contact-hero-pin" aria-hidden="true"><img src="/images/contact-badge-location.svg" alt="" /></span>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* SCHEDULE A CONSULTATION FORM CONTAINER                         */}
        {/* Exactly matching Frame 2121455261.png                          */}
        {/* ============================================================== */}
        <div className="w-full bg-white rounded-[32px] sm:rounded-[36px] border border-slate-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)] p-5 sm:p-7 lg:p-8 mb-8">
          <div className="space-y-2 mb-8">
            <MainHeading headingKey="ContactHeroSection.2" as="h2" variant="section" className="text-2xl sm:text-[30px] font-extrabold text-[#0B1528] tracking-tight leading-tight" />
            <p className="text-sm sm:text-[15px] text-slate-500 font-normal leading-relaxed">
              
              Share your requirements below. Our team will review your inquiry and contact you to discuss the scope and next steps.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1528]">
                Thank You!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your consultation request has been received. Our team will
                review your requirements and contact you about the next steps.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    phone: "",
                    businessEmail: "",
                    projectDescription: "",
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
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className={`w-full rounded-[14px] border ${
                      errors.fullName ? "border-rose-400" : "border-slate-200"
                    } bg-white px-4 py-3.5 text-sm text-[#0B1528] placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-[#18529B] transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 font-medium">
                      {errors.fullName}
                    </p>
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
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full rounded-[14px] border ${
                      errors.phone ? "border-rose-400" : "border-slate-200"
                    } bg-white px-4 py-3.5 text-sm text-[#0B1528] placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-[#18529B] transition-colors`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-500 font-medium">
                      {errors.phone}
                    </p>
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
                  onChange={(e) =>
                    setFormData({ ...formData, businessEmail: e.target.value })
                  }
                  className={`w-full rounded-[14px] border ${
                    errors.businessEmail
                      ? "border-rose-400"
                      : "border-slate-200"
                  } bg-white px-4 py-3.5 text-sm text-[#0B1528] placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-[#18529B] transition-colors`}
                />
                {errors.businessEmail && (
                  <p className="text-xs text-rose-500 font-medium">
                    {errors.businessEmail}
                  </p>
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
                    <div
                      key={idx}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                    >
                      {/* Left Pill */}
                      <button
                        type="button"
                        onClick={() => toggleService(pair.left)}
                        className={`w-full text-left px-5 py-3.5 rounded-[14px] border text-xs sm:text-[13.5px] font-semibold transition-all cursor-pointer ${
                          selectedServices.includes(pair.left)
                            ? "bg-[#18529B] text-white border-[#18529B] shadow-2xs"
                            : "bg-[#F1F3F6] hover:bg-[#E5EAEF] text-[#0B1528] border-transparent"
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
                            ? "bg-[#18529B] text-white border-[#18529B] shadow-2xs"
                            : "bg-[#F1F3F6] hover:bg-[#E5EAEF] text-[#0B1528] border-transparent"
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
                    setFormData({
                      ...formData,
                      projectDescription: e.target.value,
                    })
                  }
                  className={`w-full rounded-[14px] border ${
                    errors.projectDescription
                      ? "border-rose-400"
                      : "border-slate-200"
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
                  <span>
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </span>
                  {!isSubmitting && (
                    <img src="/images/arrow-right-white.svg" alt="" aria-hidden="true" className="h-5 w-5 shrink-0" />
                  )}
                </button>
              </div>

              {/* Bottom disclaimer */}
              <p className="text-xs text-slate-500 font-normal leading-relaxed text-left pt-1">
                By submitting this form you agree to be contacted by Bright Byte
                Consulting regarding your enquiry. We do not share your details
                with anyone.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};
