import { useState } from "react";
import { LIFECYCLE_STAGES } from "../../data/siteData";
import { useInView } from "../../hooks/useInView";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { ChevronRight, RefreshCw, Zap, Settings, Package } from "lucide-react";

const STAGE_ICONS = [RefreshCw, Zap, Settings, Package];

export default function Lifecycle() {
  const [active, setActive] = useState(0);
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-surface-50/50">
      <div className="container-max">
        <SectionHeading
          title="Digital Manufacturing Across Your Product Life Cycle"
          subtitle="Like git branches — each stage has its own workflow, but they all merge into one product."
        />

        <div
          ref={ref}
          className={`grid lg:grid-cols-[280px_1fr] gap-6 transition-all duration-700
            ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Left Nav */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {LIFECYCLE_STAGES.map((stage, i) => {
              const Icon = STAGE_ICONS[i];
              return (
                <button
                  key={stage.title}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap lg:whitespace-normal text-sm font-medium transition-all
                    ${active === i
                      ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                      : "bg-white text-surface-800/70 hover:bg-surface-100 border border-surface-100"
                    }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="font-heading font-semibold">{stage.title}</span>
                  <ChevronRight
                    className={`w-4 h-4 ml-auto hidden lg:block shrink-0 transition-transform
                      ${active === i ? "translate-x-0" : "-translate-x-1 opacity-0"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Content */}
          <div
            key={active}
            className="bg-white rounded-2xl border border-surface-100 p-8 lg:p-10 animate-fade-in"
          >
            <div className="flex items-center gap-3 mb-4">
              {(() => {
                const Icon = STAGE_ICONS[active];
                return (
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </div>
                );
              })()}
              <h3 className="font-heading font-bold text-xl text-surface-900">
                {LIFECYCLE_STAGES[active].title}
              </h3>
            </div>
            <p className="text-surface-800/70 leading-relaxed text-base">
              {LIFECYCLE_STAGES[active].description}
            </p>

            {/* Visual timeline bar */}
            <div className="mt-8 flex gap-1">
              {LIFECYCLE_STAGES.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full flex-1 transition-colors duration-300
                    ${i <= active ? "bg-primary-500" : "bg-surface-100"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button href="/resources/product-life-cycle" variant="outline" arrow>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
