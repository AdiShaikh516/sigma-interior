import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { projects } from "../lib/data";

export default function HomePage() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { ref: previewRef, inView: previewInView } = useInView(0.1);
  const { ref: philosophyRef, inView: philosophyInView } = useInView(0.1);
  const { ref: ctaRef, inView: ctaInView } = useInView(0.1);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY * 0.35;
        parallaxRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#philosophy");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section - Full-screen image with scrim */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85')",
          }}
        />
        {/* Linear scrim gradient for text visibility */}
        <div className="absolute inset-0 hero-image-scrim" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-8 opacity-0-start animate-fade-in-up delay-200">
            Turnkey Luxury Interior Execution
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-canvas leading-tight tracking-wide mb-10 opacity-0-start animate-fade-in-up delay-400">
            We architect your legacy.
            <br />
            <span className="italic text-canvas/90">We craft your home.</span>
          </h1>

          <p className="text-canvas/90 text-base sm:text-lg font-sans font-light max-w-2xl mx-auto mb-14 leading-relaxed opacity-0-start animate-fade-in-up delay-600">
            Curating spaces that balance spatial poetry with turnkey engineering
            precision. Residential, commercial & holiday homes across Mumbai.
          </p>

          <div className="opacity-0-start animate-fade-in-up delay-900">
            <Link
              to="/consultation"
              className="inline-flex px-10 py-4 border border-gold text-gold text-xs font-sans tracking-ultra uppercase hover:bg-gold hover:text-charcoal transition-all duration-500"
            >
              Schedule a Design Consultation
            </Link>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-canvas/50 hover:text-gold transition-colors duration-300 animate-bounce-slow"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Philosophy Statement - Pure white canvas */}
      <section
        id="philosophy"
        ref={philosophyRef}
        className="py-28 md:py-40 bg-canvas"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div
            className={`transition-all duration-1000 ${
              philosophyInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-8">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal leading-tight tracking-wide mb-10">
              "Curating spaces that balance spatial poetry
              <br />
              <span className="italic text-charcoal/70">
                with turnkey engineering precision."
              </span>
            </h2>
            <p className="text-stone text-sm sm:text-base font-sans font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Every line we draw, every material we select, and every joint we
              inspect is guided by a singular belief: that your space should feel
              like a carefully edited story — not a catalogue of finishes.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-gold-dark text-xs font-sans tracking-ultra uppercase hover:text-gold transition-colors duration-300"
            >
              Discover Our Story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <BeforeAfterSlider />

      {/* Featured Projects - Alabaster cream section */}
      <section className="py-28 md:py-40 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              previewInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            ref={previewRef}
          >
            <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-5">
              Featured Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal tracking-wide mb-6">
              Recent Projects
            </h2>
            <p className="text-stone text-sm sm:text-base font-sans font-light max-w-xl mx-auto">
              A curated selection of our most recent transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <Link
                to={`/portfolio/${project.id}`}
                key={project.id}
                className={`group cursor-pointer overflow-hidden transition-all duration-700 ${
                  previewInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500" />
                  {/* Text over image with frosted card */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-serif text-xl md:text-2xl font-light text-canvas italic tracking-wide text-center px-6">
                      {project.title}
                    </p>
                    <p className="text-gold text-xs font-sans tracking-ultra uppercase mt-3">
                      {project.location}
                    </p>
                  </div>
                </div>
                {/* Info below image */}
                <div className="pt-5">
                  <p className="text-charcoal text-sm font-sans font-light tracking-wide">
                    {project.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 border border-charcoal/20 text-charcoal text-xs font-sans tracking-ultra uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              View Full Portfolio
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Charcoal with gold accents */}
      <section
        ref={ctaRef}
        className="py-28 md:py-40 bg-charcoal"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div
            className={`transition-all duration-1000 ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-8">
              Begin Your Project
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-canvas tracking-wide mb-10">
              Ready to Transform Your Space?
            </h2>
            <p className="text-stone text-sm sm:text-base font-sans font-light max-w-xl mx-auto leading-relaxed mb-12">
              Our Principal Architect is available to discuss your vision,
              timeline, and budget. Schedule a complimentary design consultation
              today.
            </p>
            <Link
              to="/consultation"
              className="inline-flex px-10 py-4 border border-gold text-gold text-xs font-sans tracking-ultra uppercase hover:bg-gold hover:text-charcoal transition-all duration-500"
            >
              Schedule a Design Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
