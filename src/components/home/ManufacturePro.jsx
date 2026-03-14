import { useInView } from "../../hooks/useInView";
import Button from "../ui/Button";

export default function ManufacturePro() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div
        ref={ref}
        className={`container-max relative transition-all duration-700
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-surface-900 leading-tight">
            Manufacture Like a{" "}
            <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
              Pro
            </span>
            ™
          </h2>
          <p className="mt-5 text-lg text-surface-800/70 leading-relaxed">
            We're your single resource from prototyping to production. Partner with
            ProtoFab India to accelerate product development and get to market faster
            than ever before. When you're ready for production, get complete program
            management with a team of manufacturing experts who will help optimise your
            project around cost, quantity, and quality.
          </p>
          <div className="mt-8">
            <Button href="/prototyping-to-production" variant="primary" arrow className="text-base px-8 py-3.5">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
