import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";
import Button from "../components/ui/Button";

export default function PlaceholderPage() {
  const { pathname } = useLocation();

  // Convert path to title: /services/cnc-machining → Services › CNC Machining
  const breadcrumb = pathname
    .split("/")
    .filter(Boolean)
    .map((seg) =>
      seg
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    )
    .join(" › ");

  return (
    <section className="section-padding min-h-[60vh] flex items-center">
      <div className="container-max text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-6">
          <Construction className="w-8 h-8 text-amber-500" />
        </div>
        <p className="text-sm font-semibold text-primary-500 font-heading mb-2">
          {breadcrumb}
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-surface-900">
          Page Under Construction
        </h1>
        <p className="mt-3 text-surface-800/60 max-w-md mx-auto">
          This page is a placeholder for the <strong>{breadcrumb}</strong> section.
          In a production build, this would be a fully fleshed-out page.
        </p>
        <div className="mt-8">
          <Button href="/" variant="outline">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
