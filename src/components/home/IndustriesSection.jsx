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
                className="group bg-white rounded-2xl p-6 border border-surface-100 text-center card-hover"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-4 font-bold text-surface-900 text-sm lg:text-base">
                  {ind.title}
                </h3>
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
