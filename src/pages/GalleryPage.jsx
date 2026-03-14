import { useState } from "react";
import { GALLERY_ITEMS, FEATURED_PROJECTS } from "../data/siteData";
import { useInView } from "../hooks/useInView";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

const FILTERS = ["All", "CNC Machining", "Moulds", "Manufacturing"];
const FILTER_MAP = {
  "All": null,
  "CNC Machining": "cnc",
  "Moulds": "mould",
  "Manufacturing": "manufacturing",
};

function PageHero() {
  return (
    <section className="relative overflow-hidden gradient-mesh">
      <div className="container-max section-padding !pb-12 text-center">
        <p className="text-sm font-semibold text-primary-500 mb-3">Gallery</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-900 leading-tight animate-slide-up">
          Our Work Gallery
        </h1>
        <p className="mt-4 text-lg text-surface-800/60 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Showcasing Precision, Quality &amp; Craftsmanship
        </p>
      </div>
    </section>
  );
}

function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [ref, isInView] = useInView();

  const filtered = FILTER_MAP[active]
    ? GALLERY_ITEMS.filter((item) => item.category === FILTER_MAP[active])
    : GALLERY_ITEMS;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === f
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                  : "bg-surface-50 text-surface-800/60 hover:bg-surface-100 border border-surface-200/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Image Grid — using colored placeholders with overlay text */}
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {filtered.map((item, i) => {
            // Deterministic gradient based on category
            const gradients = {
              cnc: "from-blue-400 to-indigo-600",
              mould: "from-emerald-400 to-teal-600",
              manufacturing: "from-orange-400 to-red-500",
            };
            return (
              <div
                key={`${item.title}-${i}`}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[item.category]} opacity-80 group-hover:opacity-90 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <p className="text-white font-bold text-sm drop-shadow-lg">
                    {item.title}
                  </p>
                  <span className="mt-2 text-[10px] uppercase tracking-wider text-white/70 font-semibold bg-white/10 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-max">
        <SectionHeading title="Featured Projects" />
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden border border-surface-100 card-hover"
            >
              {/* Placeholder visual */}
              <div className="h-48 bg-gradient-to-br from-primary-500/10 to-primary-600/5 flex items-center justify-center">
                <span className="text-primary-500/30 font-heading font-bold text-xl">
                  {project.specs.Industry}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-surface-900">{project.title}</h3>
                <p className="mt-2 text-sm text-surface-800/60 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {Object.entries(project.specs).map(([key, val]) => (
                    <div key={key} className="text-xs">
                      <span className="font-bold text-surface-800/50">{key}:</span>{" "}
                      <span className="text-surface-800/70">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 border border-surface-100 max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-surface-900">Want to See More?</h3>
            <p className="text-sm text-surface-800/60 mt-2">
              Contact us to discuss your project and see more examples
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary" id="gallery-cta-get-in-touch">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GalleryPage() {
  return (
    <>
      <PageHero />
      <GalleryGrid />
      <FeaturedProjects />
    </>
  );
}
