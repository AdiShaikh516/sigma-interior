import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "../hooks/useInView";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const { ref: sectionRef, inView } = useInView(0.15);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePos(clientX);
    },
    [isDragging, updatePos]
  );

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    const stop = () => setIsDragging(false);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [isDragging, handleMove]);

  return (
    <section ref={sectionRef} className="py-28 md:py-40 bg-canvas">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-5">
            Transformation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal tracking-wide mb-6">
            From Structure to Sanctuary
          </h2>
          <p className="text-stone text-sm sm:text-base font-sans font-light max-w-xl mx-auto">
            Drag the slider to reveal the metamorphosis — from raw concrete to a
            curated living space.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-[16/10] rounded-sm overflow-hidden cursor-ew-resize select-none"
          onMouseDown={(e) => {
            setIsDragging(true);
            updatePos(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            updatePos(e.touches[0].clientX);
          }}
        >
          {/* After image (full visible) */}
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="After renovation"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
              alt="Before renovation"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-charcoal/15" />
          </div>

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-gold cursor-ew-resize"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-charcoal rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#baa170"
                strokeWidth="2"
              >
                <path d="M9 18l-6-6 6-6" />
                <path d="M15 6l6 6-6 6" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-8 left-8 bg-charcoal/85 backdrop-blur-sm px-4 py-2">
            <span className="text-canvas text-xs font-sans tracking-ultra uppercase">
              Before — Raw Concrete
            </span>
          </div>
          <div className="absolute bottom-8 right-8 bg-charcoal/85 backdrop-blur-sm px-4 py-2">
            <span className="text-gold text-xs font-sans tracking-ultra uppercase">
              After — Curated Living
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
