import {
  Smartphone, Car, Zap, Refrigerator, Package, Heart,
} from "lucide-react";
import { INDUSTRIES } from "../../data/siteData";
import { useInView } from "../../hooks/useInView";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const ICON_MAP = { Smartphone, Car, Zap, Refrigerator, Package, Heart };

export default function IndustriesSection() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-max">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Trusted by leading companies across diverse sectors"
        />

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {INDUSTRIES.map((ind) => {
            const Icon = ICON_MAP[ind.icon];
            return (
              <div
                key={ind.id}
                className="group bg-white rounded-2xl overflow-hidden border border-surface-100 card-hover"
              >
                {/* Industry image */}
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-4 text-center">
                  <div className="w-10 h-10 mx-auto -mt-9 relative z-10 rounded-lg bg-white shadow-md flex items-center justify-center border border-surface-100">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <h3 className="mt-2 font-bold text-surface-900 text-sm lg:text-base">
                    {ind.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button href="/industries" variant="outline" id="home-explore-industries-cta">
            Explore All Industries
          </Button>
        </div>
      </div>
    </section>
  );
}
