import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "../../data/siteData";
import Button from "../ui/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/[0.04]"
          : "bg-white"
      }`}
    >
      <nav className="container-max flex items-center justify-between h-16 lg:h-[72px] px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md shadow-primary-500/20">
            <span className="text-white font-heading font-extrabold text-sm tracking-tight">
              {COMPANY.shortName}
            </span>
          </div>
          <div className="leading-none">
            <span className="font-heading font-extrabold text-lg text-surface-900 tracking-tight">
              {COMPANY.name.split(" ")[0].toUpperCase()}
            </span>
            <span className="block text-[10px] font-semibold text-primary-500 tracking-[0.2em] uppercase">
              {COMPANY.name.split(" ")[1]}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors
                  ${
                    location.pathname === link.href
                      ? "text-primary-500 bg-primary-50"
                      : "text-surface-800 hover:text-primary-500 hover:bg-surface-50"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Button
            href="/quote"
            variant="accent"
            id="nav-get-quote-cta"
            className="text-sm px-5 py-2.5"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-surface-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="nav-mobile-toggle"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-surface-100 bg-white animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium
                  ${
                    location.pathname === link.href
                      ? "text-primary-500 bg-primary-50"
                      : "text-surface-800 hover:bg-surface-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-surface-100 mt-3">
              <Button
                href="/quote"
                variant="accent"
                id="nav-mobile-get-quote-cta"
                className="w-full text-sm"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
