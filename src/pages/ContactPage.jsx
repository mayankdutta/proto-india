import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { COMPANY } from "../data/siteData";
import { useInView } from "../hooks/useInView";

function PageHero() {
  return (
    <section className="relative overflow-hidden gradient-mesh">
      <div className="container-max section-padding !pb-12 text-center">
        <p className="text-sm font-semibold text-primary-500 mb-3">Contact</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-900 leading-tight animate-slide-up">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-surface-800/60 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Get in Touch with Our Expert Team
        </p>
      </div>
    </section>
  );
}

function ContactInfo() {
  const [ref, isInView] = useInView();

  const items = [
    { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, label: "Location", value: `${COMPANY.address.city}, ${COMPANY.address.country}` },
    { icon: Clock, label: "Business Hours", value: COMPANY.hours },
  ];

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {items.map((item) => (
        <div key={item.label} className="bg-surface-50 rounded-2xl p-5 border border-surface-100 text-center">
          <div className="w-10 h-10 mx-auto rounded-lg bg-primary-50 flex items-center justify-center mb-3">
            <item.icon className="w-5 h-5 text-primary-500" />
          </div>
          <p className="text-xs font-semibold text-surface-800/40 uppercase tracking-wider mb-1">{item.label}</p>
          {item.href ? (
            <a href={item.href} className="text-sm font-semibold text-surface-900 hover:text-primary-500 transition-colors">
              {item.value}
            </a>
          ) : (
            <p className="text-sm font-semibold text-surface-900">{item.value}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend/email service
    alert("Thank you! We will get back to you shortly.");
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg border border-surface-200 bg-white text-sm text-surface-800 placeholder:text-surface-800/30 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 lg:p-8 border border-surface-100 shadow-sm">
      <h3 className="text-xl font-bold text-surface-900 mb-6">Send Us a Message</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-surface-800 mb-1.5">Your Name *</label>
          <input type="text" name="name" required placeholder="John Doe" className={inputCls} value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-surface-800 mb-1.5">Email Address *</label>
          <input type="email" name="email" required placeholder="john@company.com" className={inputCls} value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-surface-800 mb-1.5">Phone Number *</label>
          <input type="tel" name="phone" required placeholder="+91-9876543210" className={inputCls} value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-surface-800 mb-1.5">Company Name</label>
          <input type="text" name="company" placeholder="Your Company" className={inputCls} value={formData.company} onChange={handleChange} />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-semibold text-surface-800 mb-1.5">Message *</label>
        <textarea name="message" required rows={5} placeholder="Tell us about your project requirements..." className={`${inputCls} resize-none`} value={formData.message} onChange={handleChange} />
      </div>
      <button
        type="submit"
        id="contact-form-submit-cta"
        className="btn-accent w-full mt-6 py-3.5"
      >
        Send Message
      </button>
    </form>
  );
}

function VisitSection() {
  const [ref, isInView] = useInView();
  const fullAddress = `${COMPANY.address.line1}, ${COMPANY.address.line2}, ${COMPANY.address.city} - ${COMPANY.address.pin}, ${COMPANY.address.country}`;

  return (
    <section className="section-padding bg-surface-50">
      <div
        ref={ref}
        className={`container-max transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-surface-900 mb-4">Visit Our Facility</h2>
            <div className="space-y-3 text-sm text-surface-800/70 mb-6">
              <p><span className="font-bold text-surface-900">Address:</span> {fullAddress}</p>
              <p><span className="font-bold text-surface-900">GST Number:</span> {COMPANY.gst}</p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-open-in-maps-cta"
              className="btn-outline inline-flex items-center gap-2 text-sm"
            >
              Open in Maps <ExternalLink className="w-4 h-4" />
            </a>
            <p className="mt-4 text-xs text-surface-800/40">
              Get Directions — We are located in the heart of Delhi&apos;s industrial area with easy access to major highways.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-surface-100">
            <h4 className="font-bold text-surface-900 mb-3">Why Visit Us?</h4>
            <ul className="space-y-2.5">
              {[
                "Tour our state-of-the-art manufacturing facility",
                "Meet our engineering team in person",
                "See our CNC machines and equipment in action",
                "Discuss your project requirements face-to-face",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-surface-800/70">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <section className="section-padding bg-white">
        <div className="container-max space-y-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <VisitSection />
    </>
  );
}
