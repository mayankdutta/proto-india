import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, User } from "lucide-react";
import { NAV_LINKS, COMPANY } from "../../data/siteData";
import Button from "../ui/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
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
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <span className="text-white font-heading font-extrabold text-sm">PF</span>
          </div>
          <div className="leading-none">
            <span className="font-heading font-extrabold text-lg text-surface-900 tracking-tight">
              ProtoFab
            </span>
            <span className="block text-[10px] font-semibold text-primary-500 tracking-widest uppercase">
              India
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.href}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors
                  ${location.pathname.startsWith(link.href) ? "text-primary-500 bg-primary-50" : "text-surface-800 hover:text-primary-500 hover:bg-surface-50"}`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
              </Link>

              {/* Mega Dropdown */}
              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in">
                  <div className="bg-white rounded-xl shadow-2xl shadow-black/10 border border-surface-100 p-6 min-w-[600px]">
                    <div className="grid grid-cols-3 gap-6">
                      {link.children.map((group) => (
                        <div key={group.group}>
                          <Link
                            to={group.href}
                            className="font-heading font-bold text-sm text-surface-900 hover:text-primary-500 transition-colors"
                          >
                            {group.group}
                          </Link>
                          <ul className="mt-2 space-y-1">
                            {group.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  to={item.href}
                                  className="block text-sm text-surface-800/70 hover:text-primary-500 hover:translate-x-1 transition-all py-0.5"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-surface-50 transition-colors text-surface-800/60">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-surface-50 transition-colors text-surface-800/60">
            <User className="w-5 h-5" />
          </button>
          <Button href="/quote" variant="accent" className="text-sm px-5 py-2.5">
            Get Instant Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-surface-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
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
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-surface-800 hover:bg-surface-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-surface-100 mt-3 space-y-2">
              <Button href="/quote" variant="accent" className="w-full text-sm">
                Get Instant Quote
              </Button>
              <Button href="/login" variant="outline" className="w-full text-sm">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
