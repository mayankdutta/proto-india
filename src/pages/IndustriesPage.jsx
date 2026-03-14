import {
  Smartphone, Car, Zap, Refrigerator, Package, Heart,
  Award, ShieldCheck, TrendingUp, Headphones,
} from "lucide-react";
import {
  INDUSTRIES, INDUSTRY_STRENGTHS, SUCCESS_STORIES,
} from "../data/siteData";
import { useInView } from "../hooks/useInView";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

const ICON_MAP = {
  Smartphone, Car, Zap, Refrigerator, Package, Heart,
  Award, ShieldCheck, TrendingUp, Headphones,
};

function PageHero() {
  return (
    <section className="relative overflow-hidden gradient-mesh">
      <div className="container-max section-padding !pb-12 text-center">
        <p className="text-sm font-semibold text-primary-500 mb-3">Industries</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-900 leading-tight animate-slide-up">
          Industries We Serve
        </h1>
        <p className="mt-4 text-lg text-surface-800/60 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Trusted by Leading Companies Across Diverse Sectors
        </p>
      </div>
    </section>
  );
}

function IndustryCards() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {INDUSTRIES.map((ind) => {
            const Icon = ICON_MAP[ind.icon];
            return (
              <div
                key={ind.id}
                className="group bg-surface-50 rounded-2xl p-6 border border-surface-100 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-surface-900">{ind.title}</h3>
                <p className="mt-2 text-sm text-surface-800/60 leading-relaxed">
                  {ind.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyIndustries() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-max">
        <SectionHeading title="Why Industries Choose Sharma Tools" />
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {INDUSTRY_STRENGTHS.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-surface-100 flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-bold text-surface-900">{item.title}</h4>
                  <p className="mt-1 text-sm text-surface-800/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SuccessStoriesSection() {
  const [ref, isInView] = useInView();

  const gradients = [
    "from-blue-400 to-indigo-600",
    "from-emerald-400 to-teal-600",
    "from-rose-400 to-pink-600",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading title="Success Stories" />
        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {SUCCESS_STORIES.map((story, i) => (
            <div key={story.title} className="rounded-2xl overflow-hidden border border-surface-100 card-hover">
              <div className={`h-44 bg-gradient-to-br ${gradients[i]} opacity-80 flex items-center justify-center`}>
                <span className="text-white/60 font-heading font-bold text-sm uppercase tracking-wider">
                  {story.industry}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-surface-900">{story.title}</h4>
                <p className="mt-2 text-sm text-surface-800/60 leading-relaxed">{story.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-surface-50 rounded-2xl p-8 border border-surface-100 max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-surface-900">
              Let&apos;s Discuss Your Industry Requirements
            </h3>
            <p className="text-sm text-surface-800/60 mt-2">
              Get industry-specific solutions tailored to your needs
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary" id="industries-cta-contact-experts">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero />
      <IndustryCards />
      <WhyIndustries />
      <SuccessStoriesSection />
    </>
  );
}
