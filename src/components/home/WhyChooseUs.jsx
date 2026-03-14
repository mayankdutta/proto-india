import { ShieldCheck, Clock, Users } from "lucide-react";
import { WHY_CHOOSE_US } from "../../data/siteData";
import { useInView } from "../../hooks/useInView";
import SectionHeading from "../ui/SectionHeading";

const ICON_MAP = { ShieldCheck, Clock, Users };

export default function WhyChooseUs() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          title="Why Choose Sharma Tools?"
          subtitle="We combine technical expertise with commitment to quality and customer satisfaction"
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className="group text-center p-8 rounded-2xl border border-surface-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-surface-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-800/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
