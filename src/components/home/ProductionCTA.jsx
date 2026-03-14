import { useInView } from "../../hooks/useInView";
import Button from "../ui/Button";
import { Zap, Users, BarChart3 } from "lucide-react";

export default function ProductionCTA() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-surface-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-500/10 blur-[100px]" />

      <div
        ref={ref}
        className={`container-max text-center relative transition-all duration-700
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Smart Production Starts Here
        </h2>
        <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
          Led by technology and backed by human support, our production manufacturing
          can be tailored to your project, industry, budget, and timeframe.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {[
            { icon: Zap, label: "Fast Turnaround", desc: "Parts in 1–15 days" },
            { icon: Users, label: "Dedicated Team", desc: "Program management" },
            { icon: BarChart3, label: "Volume Pricing", desc: "Scale efficiently" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-3 text-left">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <div className="text-sm font-heading font-bold text-white">{label}</div>
                <div className="text-xs text-white/50">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/services/production" variant="accent" arrow className="text-base px-8 py-3.5">
            Explore Production
          </Button>
        </div>
      </div>
    </section>
  );
}
