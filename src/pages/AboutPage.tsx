import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

export default function AboutPage() {
  const { ref: leftRef, inView: leftInView } = useInView(0.15);
  const { ref: rightRef, inView: rightInView } = useInView(0.15);
  const { ref: quoteRef, inView: quoteInView } = useInView(0.15);
  const { ref: architectRef, inView: architectInView } = useInView(0.15);
  const parallaxImageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: parallaxImageRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <div className="pt-28 md:pt-36 pb-28 md:pb-40 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-5">
            Craftsmanship & Legacy
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-charcoal tracking-wide mb-6">
            About Sigma
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-28">
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal tracking-wide mb-8 leading-tight">
              Decades of Engineering Precision,
              <br />
              <span className="italic text-charcoal/70">
                Infinite Attention to Detail
              </span>
            </h2>
            <p className="text-stone text-sm sm:text-base font-sans font-light leading-relaxed mb-6">
              Sigma Design is not a builder. We are a turnkey interior design
              and execution studio that treats every space as a curated
              editorial piece — from the first sketch to the final handover.
            </p>
            <p className="text-stone text-sm sm:text-base font-sans font-light leading-relaxed mb-6">
              Founded in Mumbai, we have spent decades developing a network of
              master craftsmen, material suppliers, and project managers who
              share our obsession with precision. Our process eliminates the
              friction between design vision and on-site execution.
            </p>
            <p className="text-stone text-sm sm:text-base font-sans font-light leading-relaxed">
              We source marble directly from Italian quarries, timber from
              sustainable FSC-certified forests, and brass hardware from
              heritage workshops. Every material is hand-selected, and every
              joint is inspected.
            </p>
          </div>

          {/* Stats Grid */}
          <div
            ref={rightRef}
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${
              rightInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-alabaster p-10 border border-charcoal/5">
              <p className="font-serif text-4xl md:text-5xl font-light text-gold mb-3">
                24+
              </p>
              <p className="text-charcoal text-sm font-sans font-light tracking-wide">
                Years of Excellence
              </p>
            </div>
            <div className="bg-alabaster p-10 border border-charcoal/5">
              <p className="font-serif text-4xl md:text-5xl font-light text-gold mb-3">
                340+
              </p>
              <p className="text-charcoal text-sm font-sans font-light tracking-wide">
                Projects Delivered
              </p>
            </div>
            <div className="bg-alabaster p-10 border border-charcoal/5">
              <p className="font-serif text-4xl md:text-5xl font-light text-gold mb-3">
                18
              </p>
              <p className="text-charcoal text-sm font-sans font-light tracking-wide">
                Average Weeks to Handover
              </p>
            </div>
            <div className="bg-alabaster p-10 border border-charcoal/5">
              <p className="font-serif text-4xl md:text-5xl font-light text-gold mb-3">
                100%
              </p>
              <p className="text-charcoal text-sm font-sans font-light tracking-wide">
                Turnkey Delivery
              </p>
            </div>
          </div>
        </div>

        {/* Principal Architect Section */}
        <div
          ref={architectRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-28 transition-all duration-1000 ${
            architectInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left: Heading and Social Links */}
          <div className="order-2 lg:order-1">
            <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-5">
              Leadership
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-gold tracking-wide leading-none">
              Shafayee Shaikh
            </h2>

            <p className="mt-3 text-sm sm:text-base font-sans font-light tracking-[0.28em] uppercase text-stone">
              Principal Architect
            </p>

            <br />

            {/* Social Links */}
            <div className="space-y-4 mb-10">
              <a
                href="https://www.instagram.com/shafayeeshaikh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-stone hover:text-gold transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-charcoal/10 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                  <Instagram size={18} />
                </div>
                <span className="text-sm font-sans font-light tracking-wide">
                  @shafayeeshaikh
                </span>
              </a>
              <a
                href="mailto:sigmaconstruction1991@gmail.com"
                className="flex items-center gap-4 text-stone hover:text-gold transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-charcoal/10 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-sans font-light tracking-wide">
                  sigmaconstruction1991@gmail.com
                </span>
              </a>
            </div>

            {/* Architect Bio */}
            <div className="space-y-5">
              <p className="text-stone text-sm sm:text-base font-sans font-light leading-relaxed">
                Shafayee Shaikh is a Mumbai-based Principal Architect and the
                creative force behind Sigma Construction. With a deep-rooted
                passion for spatial design and an unwavering commitment to
                excellence, he has spent years shaping luxury interiors that
                seamlessly blend form with function.
              </p>
              <p className="text-stone text-sm sm:text-base font-sans font-light leading-relaxed">
                His design philosophy centers on the belief that every space
                tells a story — one that should be crafted with intention,
                precision, and an intimate understanding of how people live.
                From initial concept to final handover, Shafayee ensures that
                each project reflects the unique vision of its inhabitants while
                maintaining the highest standards of craftsmanship.
              </p>
              <p className="text-stone text-sm sm:text-base font-sans font-light leading-relaxed">
                Under his leadership, Sigma has delivered over 340 projects
                across Mumbai, Alibaug, and Lonavala, earning a reputation for
                turnkey execution that transforms raw spaces into curated
                sanctuaries.
              </p>
              <p className="text-stone text-sm sm:text-base font-sans font-light leading-relaxed">
                When not immersed in design, Shafayee can be found exploring
                architectural heritage sites, mentoring emerging designers, and
                sourcing rare materials from artisans across the globe.
              </p>
            </div>
          </div>

          {/* Right: Image with Parallax */}
          <div className="order-1 lg:order-2">
            <div
              ref={parallaxImageRef}
              className="relative overflow-hidden rounded-3xl h-[550px] lg:h-[700px]"
            >
              <motion.img
                src="/assets/ar-shafayee-shaikh.png"
                alt="Shafayee Shaikh - Principal Architect"
                width={1200}
                height={788}
                style={{ y }}
                className="absolute inset-0 w-full h-[120%] object-cover rounded-3xl will-change-transform"
              />
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div
          ref={quoteRef}
          className={`text-center py-24 border-t border-b border-charcoal/5 transition-all duration-1000 ${
            quoteInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-wide leading-tight max-w-3xl mx-auto">
            "Curating spaces that balance spatial poetry
            <br />
            <span className="italic text-charcoal/70">
              with turnkey engineering precision."
            </span>
          </h2>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <p className="text-stone text-sm sm:text-base font-sans font-light mb-8">
            Ready to experience the Sigma difference?
          </p>
          <Link
            to="/consultation"
            className="inline-flex px-10 py-4 border border-gold text-gold text-xs font-sans tracking-ultra uppercase hover:bg-gold hover:text-charcoal transition-all duration-500"
          >
            Schedule a Design Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
