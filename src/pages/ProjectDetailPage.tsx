import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { projects } from "../lib/data";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const { ref: headerRef, inView: headerInView } = useInView(0.1);
  const { ref: galleryRef, inView: galleryInView } = useInView(0.1);

  if (!project) {
    return (
      <div className="pt-36 pb-28 text-center bg-canvas min-h-screen">
        <h1 className="font-serif text-3xl font-light text-charcoal mb-5">
          Project Not Found
        </h1>
        <Link
          to="/portfolio"
          className="text-gold text-sm font-sans tracking-ultra uppercase hover:underline"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-canvas min-h-screen">
      {/* Hero Image with scrim */}
      <div className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient scrim for text visibility */}
        <div className="absolute inset-0 hero-image-scrim" />

        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-10 pb-14 max-w-7xl mx-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-canvas/60 text-xs font-sans tracking-ultra uppercase hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </Link>
          <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-4">
            {project.category}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-canvas tracking-wide mb-3">
            {project.title}
          </h1>
          <p className="text-canvas/80 text-sm font-sans font-light italic">
            {project.location}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        {/* Overview */}
        <div
          ref={headerRef}
          className={`mb-20 transition-all duration-1000 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-charcoal text-base sm:text-lg font-sans font-light leading-relaxed mb-14">
            {project.description}
          </p>
        </div>

        {/* Gallery */}
        <div
          ref={galleryRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-20 transition-all duration-1000 ${
            galleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {project.gallery.map((img, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden">
              <img
                src={img}
                alt={`${project.title} gallery ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-alabaster border border-charcoal/5 p-10">
            <h3 className="font-serif text-lg font-light text-charcoal mb-4 tracking-wide">
              The Design Brief
            </h3>
            <p className="text-stone text-sm font-sans font-light leading-relaxed">
              {project.brief}
            </p>
          </div>
          <div className="bg-alabaster border border-charcoal/5 p-10">
            <h3 className="font-serif text-lg font-light text-charcoal mb-4 tracking-wide">
              Material Palette
            </h3>
            <ul className="space-y-2">
              {project.materials.map((m, i) => (
                <li key={i} className="text-stone text-sm font-sans font-light">
                  <span className="text-gold mr-2">—</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-alabaster border border-charcoal/5 p-10">
            <h3 className="font-serif text-lg font-light text-charcoal mb-4 tracking-wide">
              Spatial Solution
            </h3>
            <p className="text-stone text-sm font-sans font-light leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <p className="text-stone text-sm sm:text-base font-sans font-light mb-8">
            Inspired by this project? Let's discuss yours.
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
