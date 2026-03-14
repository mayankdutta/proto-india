import {
  Workflow,
  ShieldCheck,
  FlaskConical,
  ClipboardCheck,
  PackageCheck,
  Factory,
  Zap,
  Wrench,
  Clock,
  Settings,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { PRODUCT_LIFECYCLE_PAGE } from "../data/siteData";
import { useInView } from "../hooks/useInView";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

// ==============================================================================
// Icon Lookup — maps string names from siteData to actual Lucide components
// ==============================================================================

const ICON_MAP = {
  Workflow,
  ShieldCheck,
  FlaskConical,
  ClipboardCheck,
  PackageCheck,
  Factory,
  Zap,
  Wrench,
  Clock,
  Settings,
};

// ==============================================================================
// Reusable Building Blocks
// ==============================================================================

function AnimatedSection({ children, className = "" }) {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SubsectionCard({ title, description, icon }) {
  const Icon = ICON_MAP[icon];
  return (
    <div className="bg-white rounded-2xl border border-surface-100 p-6 lg:p-8 card-hover">
      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
        {Icon && <Icon className="w-6 h-6 text-primary-500" />}
      </div>
      <h3 className="font-heading font-bold text-lg text-surface-900 mb-2">
        {title}
      </h3>
      <p className="text-surface-800/70 leading-relaxed text-[0.95rem]">
        {description}
      </p>
    </div>
  );
}

// ==============================================================================
// Page Sections
// ==============================================================================

function Hero() {
  const { hero } = PRODUCT_LIFECYCLE_PAGE;
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 text-white">
      {/* Decorative background mesh */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="relative section-padding">
        <div className="container-max text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight font-heading animate-fade-in">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed animate-slide-up">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-up">
            <Button href="/quote" variant="accent" arrow id="plc-hero-get-quote-cta">
              Get a Quote
            </Button>
            <Button href="/contact" variant="outline" className="!border-white/30 !text-white hover:!bg-white/10" id="plc-hero-contact-cta">
              Talk to an Engineer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FullSupportSection() {
  const { fullSupport } = PRODUCT_LIFECYCLE_PAGE;
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          title={fullSupport.title}
          subtitle={fullSupport.description}
        />
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {fullSupport.subsections.map((sub) => (
              <SubsectionCard key={sub.title} {...sub} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function PrototypingSection() {
  const { prototyping } = PRODUCT_LIFECYCLE_PAGE;
  return (
    <section className="section-padding bg-surface-50/50">
      <div className="container-max">
        <SectionHeading
          title={prototyping.title}
          subtitle={prototyping.description}
        />
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {prototyping.subsections.map((sub) => (
              <SubsectionCard key={sub.title} {...sub} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ProductionSection() {
  const { production } = PRODUCT_LIFECYCLE_PAGE;
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          title={production.title}
          subtitle={production.description}
        />
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {production.subsections.map((sub) => (
              <SubsectionCard key={sub.title} {...sub} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ShortTermSection() {
  const { shortTerm } = PRODUCT_LIFECYCLE_PAGE;
  return (
    <section className="section-padding bg-surface-50/50">
      <div className="container-max">
        <SectionHeading title={shortTerm.title} />
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {shortTerm.subsections.map((sub) => (
              <SubsectionCard key={sub.title} {...sub} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ResourceCardsSection() {
  const { resourceCards } = PRODUCT_LIFECYCLE_PAGE;
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading title="Resources" subtitle="Explore guides and tools to support your manufacturing journey." />
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {resourceCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group bg-surface-50 rounded-2xl border border-surface-100 p-6 lg:p-8 card-hover flex items-center justify-between gap-4"
              >
                <h3 className="font-heading font-bold text-surface-900 group-hover:text-primary-500 transition-colors">
                  {card.title}
                </h3>
                <ChevronRight className="w-5 h-5 text-surface-800/40 group-hover:text-primary-500 group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function BottomCta() {
  const { bottomCta } = PRODUCT_LIFECYCLE_PAGE;
  return (
    <section className="section-padding bg-gradient-to-r from-primary-900 to-primary-700 text-white">
      <div className="container-max text-center max-w-2xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading leading-tight">
            {bottomCta.text}
          </h2>
          <div className="mt-8">
            <Button href="/quote" variant="accent" arrow id="plc-bottom-get-quote-cta">
              Get a Quote
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ==============================================================================
// Page Composition — sections assembled top to bottom
// ==============================================================================

export default function ProductLifeCyclePage() {
  return (
    <>
      <Hero />
      <FullSupportSection />
      <PrototypingSection />
      <ProductionSection />
      <ShortTermSection />
      <ResourceCardsSection />
      <BottomCta />
    </>
  );
}
