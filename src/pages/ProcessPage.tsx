import { useInView } from "../hooks/useInView";
import { processSteps } from "../lib/data";

export default function ProcessPage() {
  const { ref: headerRef, inView: headerInView } = useInView(0.15);

  return (
    <div className="pt-28 md:pt-36 pb-28 md:pb-40 bg-canvas min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div
          ref={headerRef}
          className={`text-center mb-28 transition-all duration-1000 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-5">
            Our Methodology
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-charcoal tracking-wide mb-6">
            The Sigma Process
          </h1>
          <p className="text-stone text-sm sm:text-base font-sans font-light max-w-xl mx-auto">
            A four-step journey from vision to reality, executed with obsessive
            precision and transparent communication.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-charcoal/5 md:-translate-x-px" />

          <div className="space-y-20 md:space-y-28">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ProcessStepCard
                  key={step.step}
                  step={step}
                  index={i}
                  isLeft={isLeft}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessStepCard({
  step,
  index,
  isLeft,
}: {
  step: (typeof processSteps)[0];
  index: number;
  isLeft: boolean;
}) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-8 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-canvas md:-translate-x-1/2 mt-1.5" />

      {/* Step number */}
      <div
        className={`hidden md:flex w-1/2 ${
          isLeft ? "justify-end pr-20" : "justify-start pl-20"
        }`}
      >
        <span className="font-serif text-8xl font-light text-charcoal/[0.03]">
          {String(step.step).padStart(2, "0")}
        </span>
      </div>

      {/* Content card */}
      <div className="md:w-1/2 pl-14 md:pl-0">
        <div
          className={`bg-alabaster border border-charcoal/5 p-10 md:p-12 ${
            isLeft ? "md:mr-20" : "md:ml-20"
          }`}
        >
          <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-4">
            Step {step.step}
          </p>
          <h3 className="font-serif text-xl md:text-2xl font-light text-charcoal tracking-wide mb-5">
            {step.title}
          </h3>
          <p className="text-stone text-sm sm:text-base font-sans font-light leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}
