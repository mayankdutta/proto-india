import { useState } from "react";
import { Link } from "react-router-dom";
import { Layers, Cog, Printer, ArrowRight, Check } from "lucide-react";
import { SERVICES } from "../../data/siteData";
import { useInView } from "../../hooks/useInView";
import SectionHeading from "../ui/SectionHeading";

const ICONS = { Layers, Cog, Printer };

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [ref, isInView] = useInView();

  const current = SERVICES[active];

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-max">
        <SectionHeading
          title="Our Manufacturing Services"
          subtitle="Three core technologies under one roof — like a monorepo for physical manufacturing."
        />

        {/* Tab Buttons */}
        <div
          ref={ref}
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100
            ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {SERVICES.map((svc, i) => {
            const Icon = ICONS[svc.icon];
            return (
              <button
                key={svc.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-heading font-semibold transition-all duration-200
                  ${active === i
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                    : "bg-surface-50 text-surface-800/70 hover:bg-surface-100 border border-surface-200/60"
                  }`}
              >
                {Icon && <Icon className="w-4.5 h-4.5" />}
                {svc.title}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div
          key={current.id}
          className={`grid lg:grid-cols-2 gap-10 items-center bg-surface-50 rounded-2xl p-8 lg:p-12 border border-surface-100 
            transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Text */}
          <div>
            <div
              className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${current.color} text-white text-xs font-bold mb-4`}
            >
              {current.title}
            </div>
            <p className="text-surface-800/70 leading-relaxed mb-6">
              {current.shortDesc}
            </p>
            <ul className="space-y-3 mb-8">
              {current.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm">
                  <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-surface-800/80">{feat}</span>
                </li>
              ))}
            </ul>
            <Link
              to={current.href}
              className="inline-flex items-center gap-2 text-primary-500 font-heading font-semibold text-sm hover:gap-3 transition-all"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Visual Placeholder */}
          <div className="relative">
            <div
              className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${current.color} opacity-10`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center shadow-2xl`}
              >
                {(() => {
                  const Icon = ICONS[current.icon];
                  return Icon ? <Icon className="w-10 h-10 text-white" /> : null;
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
