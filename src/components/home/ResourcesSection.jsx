import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Wrench, Lightbulb, IndianRupee } from "lucide-react";
import { RESOURCES } from "../../data/siteData";
import { useInView } from "../../hooks/useInView";
import SectionHeading from "../ui/SectionHeading";

const TAG_ICONS = {
  Guide: BookOpen,
  Toolkit: Wrench,
  "Design Tip": Lightbulb,
};

export default function ResourcesSection() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-surface-50/50">
      <div className="container-max">
        <SectionHeading
          title="Manufacturing Resources"
          subtitle="Design guides, toolkits, and tips to help you get the best parts at the best price."
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {RESOURCES.map((res, i) => {
            const TagIcon = TAG_ICONS[res.tag] || Lightbulb;
            return (
              <Link
                key={res.title}
                to={res.href}
                className={`group bg-white rounded-xl border border-surface-100 overflow-hidden card-hover
                  transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
              >
                {/* Top color bar */}
                <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-surface-50 flex items-center justify-center mb-3">
                    <TagIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-surface-800/40">
                    {res.tag}
                  </span>
                  <h3 className="mt-1 font-heading font-bold text-sm text-surface-900 group-hover:text-primary-500 transition-colors leading-snug">
                    {res.title}
                  </h3>
                  <p className="mt-2 text-xs text-surface-800/60 leading-relaxed line-clamp-3">
                    {res.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary-500 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
