import { Link } from "react-router-dom";
import { COMPANY, FOOTER_LINKS } from "../../data/siteData";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-white/80">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-max section-padding !py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-heading font-bold text-white">
              Stay updated with ProtoFab India
            </h3>
            <p className="text-sm text-white/50 mt-1">
              Manufacturing insights, design tips, and product updates.
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-4 py-3 rounded-l-lg bg-white/10 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary-400 transition-colors"
            />
            <button className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-heading font-semibold text-sm rounded-r-lg transition-colors whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="container-max section-padding !py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white font-heading font-extrabold text-sm">PF</span>
              </div>
              <div className="leading-none">
                <span className="font-heading font-extrabold text-lg text-white">ProtoFab</span>
                <span className="block text-[10px] font-semibold text-primary-400 tracking-widest uppercase">
                  India
                </span>
              </div>
            </Link>
            <div className="space-y-2 text-sm text-white/50">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {COMPANY.address.line1}, {COMPANY.address.line2},{" "}
                  {COMPANY.address.pin}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{COMPANY.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>{COMPANY.email}</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
                {key}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} ProtoFab India Pvt. Ltd. All rights reserved.</span>
          <div className="flex gap-4">
            {COMPANY.certifications.map((cert) => (
              <span key={cert} className="px-2 py-1 rounded bg-white/5 text-white/50 font-medium">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
