import { useInView } from "../../hooks/useInView";

export default function SectionHeading({ title, subtitle, center = true, className = "" }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`mb-12 lg:mb-16 ${center ? "text-center" : ""} ${className}
        transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-surface-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-surface-800/70 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
