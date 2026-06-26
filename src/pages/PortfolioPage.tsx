import { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { projects, categories, type Project } from "../lib/data";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { ref: headerRef, inView: headerInView } = useInView(0.15);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 md:pt-36 pb-28 md:pb-40 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-5">
            Curated Projects
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-charcoal tracking-wide mb-6">
            Case Studies
          </h1>
          <p className="text-stone text-sm sm:text-base font-sans font-light max-w-xl mx-auto">
            Every project is a story of spatial transformation. Click any card
            to explore the full case study.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-xs font-sans tracking-ultra uppercase border transition-all duration-300 ${
                activeCategory === cat
                  ? "border-gold text-gold"
                  : "border-charcoal/10 text-stone hover:border-charcoal/20 hover:text-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isLarge={i === 0 && activeCategory === "All"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  isLarge,
}: {
  project: Project;
  index: number;
  isLarge: boolean;
}) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        to={`/portfolio/${project.id}`}
        className={`group cursor-pointer overflow-hidden block ${
          isLarge ? "md:row-span-2 md:col-span-1" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden ${
            isLarge ? "aspect-[3/4]" : "aspect-[4/3]"
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500" />
          {/* Text overlay with hover reveal */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="font-serif text-xl md:text-2xl font-light text-canvas italic tracking-wide text-center px-6">
              {project.title}
            </p>
            <p className="text-gold text-xs font-sans tracking-ultra uppercase mt-3">
              {project.location}
            </p>
          </div>
          {/* Category badge */}
          <div className="absolute top-5 left-5 bg-canvas/90 backdrop-blur-sm px-4 py-1.5">
            <span className="text-charcoal/70 text-xs font-sans tracking-ultra uppercase">
              {project.category}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
