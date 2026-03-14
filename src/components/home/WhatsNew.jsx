import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { WHATS_NEW } from "../../data/siteData";
import { useInView } from "../../hooks/useInView";
import SectionHeading from "../ui/SectionHeading";

const TAG_COLORS = {
  Certification: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Platform: "bg-purple-50 text-purple-700 border-purple-200",
  Production: "bg-blue-50 text-blue-700 border-blue-200",
  "3D Printing": "bg-orange-50 text-orange-700 border-orange-200",
  Quality: "bg-teal-50 text-teal-700 border-teal-200",
  Learning: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function WhatsNew() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          title="What's New at ProtoFab?"
          subtitle="Latest capabilities, certifications, and platform updates."
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {WHATS_NEW.map((item, i) => (
            <Link
              key={item.title}
              to={item.href}
              className={`group relative bg-white rounded-xl border border-surface-100 p-6 card-hover
                transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isInView ? `${i * 80}ms` : "0ms" }}
            >
              <span
                className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold border
                  ${TAG_COLORS[item.tag] || "bg-surface-50 text-surface-800 border-surface-200"}`}
              >
                {item.tag}
              </span>
              <h3 className="mt-3 font-heading font-bold text-surface-900 group-hover:text-primary-500 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-surface-800/60 leading-relaxed line-clamp-3">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary-500 group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
