import { useInView } from "../hooks/useInView";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const { ref: leftRef, inView: leftInView } = useInView(0.15);
  const { ref: rightRef, inView: rightInView } = useInView(0.15);
  const { ref: quoteRef, inView: quoteInView } = useInView(0.15);

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
              Sigma Design is not a builder. We are a turnkey interior design and
              execution studio that treats every space as a curated editorial piece
              — from the first sketch to the final handover.
            </p>
            <p className="text-stone text-sm sm:text-base font-sans font-light leading-relaxed mb-6">
              Founded in Mumbai, we have spent decades developing a network of
              master craftsmen, material suppliers, and project managers who share
              our obsession with precision. Our process eliminates the friction
              between design vision and on-site execution.
            </p>
            <p className="text-stone text-sm sm:text-base font-sans font-light leading-relaxed">
              We source marble directly from Italian quarries, timber from
              sustainable FSC-certified forests, and brass hardware from heritage
              workshops. Every material is hand-selected, and every joint is
              inspected.
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

        {/* Quote Section */}
        <div
          ref={quoteRef}
          className={`text-center py-24 border-t border-b border-charcoal/5 transition-all duration-1000 ${
            quoteInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
