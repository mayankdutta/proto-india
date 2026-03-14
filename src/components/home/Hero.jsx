import { ArrowRight, Play, Shield } from "lucide-react";
import Button from "../ui/Button";
import { COMPANY, TRUSTED_COMPANIES } from "../../data/siteData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-mesh">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-max section-padding !pt-12 !pb-8 lg:!pt-20 lg:!pb-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-semibold mb-6 animate-fade-in">
              <Shield className="w-3.5 h-3.5" />
              {COMPANY.certifications.join(" · ")}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-surface-900 leading-[1.1] tracking-tight animate-slide-up"
            >
              Digital Manufacturing for{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  India
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 120 8"
                  fill="none"
                >
                  <path
                    d="M2 6c20-4 40-4 58-2s40 2 58-2"
                    stroke="#FF6B00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="mt-6 text-lg text-surface-800/70 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              From rapid prototyping to full-scale production — we're India's fastest and most
              comprehensive digital manufacturer. Get an online quote in hours, parts shipped
              pan-India.
            </p>

            <div
              className="flex flex-wrap gap-3 mt-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button href="/quote" variant="accent" arrow className="text-base px-8 py-3.5">
                Get Instant Quote
              </Button>
              <Button href="/services/production" variant="outline" className="text-base px-8 py-3.5">
                Start Production Quote
              </Button>
            </div>

            {/* Stats Row */}
            <div
              className="flex gap-8 mt-10 pt-8 border-t border-surface-200/60 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {[
                { value: "1 Day", label: "Fastest Delivery" },
                { value: "500+", label: "Materials" },
                { value: "10L+", label: "Parts Delivered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-heading font-extrabold text-surface-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-surface-800/50 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10 border border-surface-100">
              {/* Placeholder for hero image — gradient card instead */}
              <div className="aspect-[4/3] bg-gradient-to-br from-surface-50 via-white to-primary-50 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <h3 className="font-heading font-bold text-xl text-surface-900">
                  See How It Works
                </h3>
                <p className="text-sm text-surface-800/60 mt-2 max-w-xs">
                  Upload CAD → Get Quote → Manufacture → Ship — all in days, not weeks.
                </p>

                {/* Floating cards */}
                <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-3 border border-surface-100">
                  <div className="text-xs font-semibold text-emerald-600">✓ Quote Ready</div>
                  <div className="text-[10px] text-surface-800/50 mt-0.5">2 hours ago</div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-3 border border-surface-100">
                  <div className="text-xs font-semibold text-primary-600">🚚 Parts Shipped</div>
                  <div className="text-[10px] text-surface-800/50 mt-0.5">Delhi → Mumbai</div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 rounded-full bg-primary-500/10 blur-3xl" />
          </div>
        </div>

        {/* Trusted Companies Bar */}
        <div className="mt-16 pt-8 border-t border-surface-200/60 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-xs font-semibold text-surface-800/40 uppercase tracking-wider text-center mb-6">
            Trusted by India's leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            {TRUSTED_COMPANIES.map((name) => (
              <span
                key={name}
                className="text-lg font-heading font-bold text-surface-800/20 hover:text-surface-800/40 transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
