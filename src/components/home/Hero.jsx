import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import BlueprintOverlay from "../ui/BlueprintOverlay";
import SparkBurst from "../ui/SparkBurst";
import { STATS } from "../../data/siteData";
import { useInView } from "../../hooks/useInView";

export default function Hero() {
  const [statsRef, statsInView] = useInView();

  return (
    <section className="relative overflow-hidden">
      {/* Background — blueprint grid over gradient mesh */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 blueprint-grid" />

      {/* Blueprint corner brackets and crosshairs */}
      <BlueprintOverlay />

      <div className="container-max section-padding !pt-16 !pb-8 lg:!pt-24 lg:!pb-16 relative">
        {/* Split layout: text left, image right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — text content */}
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-semibold mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse-glow" />
              Your Trusted Tooling Partner
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-surface-900 leading-[1.08] tracking-tight animate-slide-up">
              Precision Moulds,{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                CNC Machining
              </span>{" "}
              &amp; Injection Molding
            </h1>

            <p
              className="mt-6 text-lg lg:text-xl text-surface-800/70 leading-relaxed max-w-xl lg:mx-0 mx-auto animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Engineering excellence with 15+ years of experience in precision
              injection mould design &amp; manufacturing
            </p>

            {/* Capability tags — like technical specs on a blueprint */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-2 mt-5 animate-fade-in"
              style={{ animationDelay: "0.25s" }}
            >
              {["SolidWorks", "AutoCAD", "CNC", "EDM", "ISO 9001"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono text-primary-600/70 bg-primary-50/60 border border-primary-100/50 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                href="/quote"
                variant="accent"
                arrow
                id="hero-get-quote-cta"
                className="text-base px-8 py-3.5 press-effect"
              >
                Get a Quote
              </Button>
              <Button
                href="/gallery"
                variant="outline"
                id="hero-view-work-cta"
                className="text-base px-8 py-3.5"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right — hero image with wireframe-to-solid reveal */}
          <div className="relative animate-fade-in hidden lg:block">
            {/* Wireframe outline behind the image — appears first */}
            <div
              className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary-200/40 scale-[1.02] animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            />

            {/* Technical dimension lines around the image */}
            <div className="absolute -top-6 left-4 right-4 flex items-center gap-2 opacity-30">
              <div className="h-px flex-1 bg-primary-500/30" />
              <span className="text-[10px] font-mono text-primary-500/50">480mm</span>
              <div className="h-px flex-1 bg-primary-500/30" />
            </div>
            <div className="absolute -right-8 top-4 bottom-4 flex flex-col items-center gap-2 opacity-30">
              <div className="w-px flex-1 bg-primary-500/30" />
              <span className="text-[10px] font-mono text-primary-500/50 [writing-mode:vertical-rl]">420mm</span>
              <div className="w-px flex-1 bg-primary-500/30" />
            </div>

            {/* Main image — solid form that materializes */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10 border border-surface-200/50 animate-wipe-right"
              style={{ animationDelay: "0.3s" }}
            >
              <img
                src="/assets/hero/hero-bg.webp"
                alt="Industrial manufacturing at Sharma Tools"
                className="w-full h-[420px] object-cover"
              />
              {/* Subtle grid overlay on image — like a CAD viewport */}
              <div className="absolute inset-0 blueprint-grid opacity-20 mix-blend-overlay" />
            </div>

            {/* Decorative accent behind image */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20" />

            {/* Spark burst on materialization */}
            <SparkBurst active className="z-20" />
          </div>
        </div>

        {/* Stats Bar — stamp/press animation */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-surface-200/60`}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${statsInView ? "animate-stamp-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="text-3xl lg:text-4xl font-heading font-extrabold text-primary-500">
                {stat.value}
              </div>
              <div className="text-sm text-surface-800/50 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative blobs */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-500/5 blur-3xl" />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent-500/5 blur-3xl" />
    </section>
  );
}
