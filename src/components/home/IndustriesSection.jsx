import { Link } from "react-router-dom";
import { Rocket, Car, Smartphone, Heart, Bot, Wrench, ArrowRight } from "lucide-react";
import { INDUSTRIES } from "../../data/siteData";
import { useInView } from "../../hooks/useInView";
import SectionHeading from "../ui/SectionHeading";

const ICONS = { Rocket, Car, Smartphone, Heart, Bot, Wrench };

const GRADIENT_PAIRS = [
  "from-blue-500/10 to-indigo-500/5",
  "from-emerald-500/10 to-teal-500/5",
  "from-violet-500/10 to-purple-500/5",
  "from-rose-500/10 to-pink-500/5",
  "from-amber-500/10 to-orange-500/5",
  "from-cyan-500/10 to-sky-500/5",
];

export default function IndustriesSection() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          title="Major Industries Served"
          subtitle="We work with leading companies across India's fastest-growing sectors."
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[ind.icon];
            return (
              <Link
                key={ind.id}
                to={ind.href}
                className={`group relative rounded-xl border border-surface-100 p-6 card-hover overflow-hidden
                  transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: isInView ? `${i * 80}ms` : "0ms" }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${GRADIENT_PAIRS[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-surface-50 group-hover:bg-white flex items-center justify-center mb-4 transition-colors border border-surface-100">
                    {Icon && <Icon className="w-5 h-5 text-primary-500" />}
                  </div>
                  <h3 className="font-heading font-bold text-surface-900 group-hover:text-primary-600 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm text-surface-800/60 leading-relaxed">
                    {ind.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary-500 group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
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
