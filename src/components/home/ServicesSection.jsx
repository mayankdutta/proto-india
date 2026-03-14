import {
  PenTool, Layers, Cog, Wrench, Factory, Lightbulb, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../data/siteData";
import { useInView } from "../../hooks/useInView";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const ICON_MAP = { PenTool, Layers, Cog, Wrench, Factory, Lightbulb };

export default function ServicesSection() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-max">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive tooling solutions from design to production"
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-6 border border-surface-100 card-hover"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-surface-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-surface-800/60 leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {service.features.slice(0, 3).map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-surface-800/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button href="/services" variant="outline" id="home-view-all-services-cta">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
