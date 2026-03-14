import { Upload, FileCheck, Factory, Truck } from "lucide-react";
import { PROCESS_STEPS } from "../../data/siteData";
import { useInView } from "../../hooks/useInView";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const ICONS = { Upload, FileCheck, Factory, Truck };

export default function HowItWorks() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-surface-50/50">
      <div className="container-max">
        <SectionHeading
          title="How to Work With Us"
          subtitle="Four steps from CAD to delivered parts. Think of it as a CI/CD pipeline — but for physical objects."
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <div
                key={step.step}
                className={`relative bg-white rounded-xl p-6 border border-surface-100 text-center
                  transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: isInView ? `${i * 120}ms` : "0ms" }}
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary-500 text-white text-xs font-bold flex items-center justify-center shadow-md shadow-primary-500/30">
                  {step.step}
                </div>

                {/* Connector line (not on last) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-2 w-4 border-t-2 border-dashed border-surface-200" />
                )}

                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mt-2 mb-4">
                  {Icon && <Icon className="w-6 h-6 text-primary-500" />}
                </div>
                <h3 className="font-heading font-bold text-surface-900 text-base">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-surface-800/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button href="/quote" variant="accent" arrow>
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}
