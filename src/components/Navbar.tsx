import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Process", href: "/process" },
  { label: "About Us", href: "/about" },
  { label: "Consultation", href: "/consultation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-canvas/95 backdrop-blur-md border-b border-charcoal/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center">
            <div className="bg-charcoal px-5 py-3">
              <img
                src="/assets/Sigma_Logo.png"
                alt="Sigma Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative text-xs font-sans tracking-ultra uppercase transition-colors duration-300 ${
                    active
                      ? "text-gold"
                      : scrolled
                        ? "text-charcoal/70 hover:text-gold"
                        : "text-canvas/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <Link
              to="/consultation"
              className={`hidden lg:inline-flex px-7 py-3 text-xs font-sans tracking-ultra uppercase transition-all duration-300 border ${
                scrolled
                  ? "border-charcoal/20 text-charcoal hover:border-gold hover:text-gold"
                  : "border-canvas/30 text-canvas hover:border-gold hover:text-gold"
              }`}
            >
              Book Consultation
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                scrolled ? "text-charcoal" : "text-canvas"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-canvas transition-all duration-500 flex flex-col items-center justify-center ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-3xl font-light text-charcoal hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-12 flex items-center gap-5">
          <span className="text-stone-muted text-xs font-sans tracking-ultra uppercase">
            Mumbai
          </span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span className="text-stone-muted text-xs font-sans tracking-ultra uppercase">
            Alibaug
          </span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span className="text-stone-muted text-xs font-sans tracking-ultra uppercase">
            Lonavala
          </span>
        </div>
      </div>
    </>
  );
}
