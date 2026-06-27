import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-alabaster border-t border-charcoal/5 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 mb-20">
          <div>
            <div className="flex items-center mb-8">
              {/* Charcoal container for white logo */}
              <div className="bg-charcoal px-5 py-3">
                <img
                  src="/assets/Sigma_Logo.png"
                  alt="Sigma Logo"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-stone text-sm font-sans font-light leading-relaxed max-w-sm">
              Curating luxury interiors with decades of engineering precision.
              Mumbai, Alibaug & Lonavala.
            </p>
          </div>

          <div>
            <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-8">
              Navigation
            </p>
            <div className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Our Process", href: "/process" },
                { label: "About Us", href: "/about" },
                { label: "Consultation", href: "/consultation" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-charcoal/70 text-sm font-sans font-light hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-8">
              Contact
            </p>
            <div className="space-y-4">
              <a
                href="https://wa.me/+919773596207"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-charcoal/70 text-sm font-sans font-light hover:text-gold transition-colors duration-300"
              >
                +91 97735 96207
                <ArrowUpRight size={14} />
              </a>
              <p className="text-stone text-sm font-sans font-light">
                Mumbai, Maharashtra, India
              </p>
              <p className="text-stone text-sm font-sans font-light">
                Mon — Sat, 10:00 AM to 7:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-10 border-t border-charcoal/5">
          <p className="text-stone-muted text-xs font-sans font-light">
            &copy; {new Date().getFullYear()} Sigma Design. All rights reserved.
          </p>
          <p className="text-stone-muted text-xs font-sans font-light">
            Luxury Interior Designers in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
