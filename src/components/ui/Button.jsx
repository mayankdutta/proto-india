import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const VARIANTS = {
  primary: "btn-primary",
  accent: "btn-accent",
  outline: "btn-outline",
};

export default function Button({
  children,
  variant = "primary",
  href,
  arrow = false,
  className = "",
  ...props
}) {
  const cls = `${VARIANTS[variant] || VARIANTS.primary} ${className}`;

  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (href?.startsWith("http")) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} className={cls} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {inner}
    </button>
  );
}
