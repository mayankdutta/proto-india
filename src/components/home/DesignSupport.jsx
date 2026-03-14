import { useInView } from "../../hooks/useInView";
import Button from "../ui/Button";
import { COMPANY } from "../../data/siteData";
import { Phone, Mail, Calendar, MessageCircle } from "lucide-react";

export default function DesignSupport() {
  const [ref, isInView] = useInView();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700
            ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-50 via-white to-accent-500/5 border border-surface-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                  {[
                    { icon: MessageCircle, label: "Live Chat", color: "bg-emerald-50 text-emerald-600" },
                    { icon: Phone, label: "Phone Support", color: "bg-blue-50 text-blue-600" },
                    { icon: Mail, label: "Email Support", color: "bg-purple-50 text-purple-600" },
                    { icon: Calendar, label: "Design Review", color: "bg-orange-50 text-orange-600" },
                  ].map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className={`rounded-xl p-4 ${color} flex flex-col items-center gap-2`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="text-xs font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-900 leading-tight">
              Design & Engineering Support
            </h2>
            <p className="mt-4 text-surface-800/70 leading-relaxed">
              We offer both automated and live manufacturing support. With every quote,
              you get free interactive manufacturability analysis to quickly improve part
              design. Our applications engineers are always available to talk through your
              project.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-surface-800/70">
                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                <span>{COMPANY.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-surface-800/70">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <span>{COMPANY.email}</span>
              </div>
            </div>

            <div className="mt-8">
              <Button href="/design-review" variant="primary" arrow>
                Schedule a Free Design Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
