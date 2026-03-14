import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../data/siteData";
import { useInView } from "../../hooks/useInView";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by industry leaders for quality and reliability"
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-surface-50 rounded-2xl p-6 lg:p-8 border border-surface-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <blockquote className="text-sm text-surface-800/70 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="mt-6 pt-4 border-t border-surface-200/60">
                <p className="font-bold text-surface-900 text-sm">
                  {t.author}
                </p>
                <p className="text-xs text-surface-800/50 mt-0.5">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
