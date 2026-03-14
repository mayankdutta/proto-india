import Button from "../ui/Button";
import { useInView } from "../../hooks/useInView";

export default function HomeCTA() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

      <div
        ref={ref}
        className={`container-max text-center relative z-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
          Get a free consultation and quote today
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button
            href="/quote"
            variant="accent"
            arrow
            id="home-cta-request-quote"
            className="text-base px-8 py-3.5"
          >
            Request a Quote
          </Button>
          <Button
            href="/contact"
            className="btn-white text-base px-8 py-3.5"
            id="home-cta-contact-us"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
