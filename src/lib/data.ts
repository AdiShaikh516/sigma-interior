export interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  category: "Residential" | "Commercial" | "Holiday Home";
  description: string;
  brief: string;
  materials: string[];
  solution: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "The Penthouse",
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    category: "Residential",
    description: "A 3,400 sqft penthouse reimagined as a light-filled sanctuary of warm minimalism.",
    brief: "The client sought to transform a raw, dark penthouse shell into a luminous, warm-minimalist residence that balanced open-plan entertaining with intimate family zones.",
    materials: ["Statuario marble flooring", "White oak wall paneling", "Brushed bronze fixtures", "Linen-upholstered custom furniture", "Fluted glass partitions"],
    solution: "We opened the central core by removing non-structural walls, inserting a 14-foot fluted glass partition that separates the living area from the private suite while preserving natural light.",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p2",
    title: "Minimalist Villa",
    location: "Alibaug, Maharashtra",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
    category: "Holiday Home",
    description: "A coastal retreat where restrained architecture meets the rhythm of the sea.",
    brief: "A weekend home for a family of four that needed to feel serene, easy to maintain, and deeply connected to the surrounding landscape.",
    materials: ["Kota stone flooring", "Teak wood ceiling slats", "Lime-plaster walls", "Woven rattan screens", "Raw concrete countertops"],
    solution: "We designed the living spaces around the central courtyard, using Kota stone floors that stay cool in summer and teak wood ceilings that add warmth.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p3",
    title: "The Executive Suite",
    location: "Bandra, Mumbai",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    category: "Commercial",
    description: "A corporate headquarters where authority meets understated comfort.",
    brief: "A 2,800 sqft law office in Bandra requiring a spatial language that communicates gravitas, trust, and quiet confidence.",
    materials: ["Nero Marquina marble", "Dark walnut cabinetry", "Brushed brass accents", "Leather-upholstered boardroom seating", "Matte black metal framing"],
    solution: "The reception is wrapped in a monolithic Nero Marquina marble desk. Dark walnut panelling runs the length of the boardroom.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p4",
    title: "The Heritage Apartment",
    location: "South Mumbai",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=800&q=80",
    category: "Residential",
    description: "A century-old apartment restored with classical editorial restraint.",
    brief: "A heritage-listed apartment in South Mumbai whose owner wanted to preserve the original architectural details while introducing a modern, functional kitchen and bathroom.",
    materials: ["Restored Burma teak flooring", "Hand-plastered cornices", "Calacatta marble countertops", "Antique brass hardware", "Velvet drapery in sage green"],
    solution: "We restored original Burma teak flooring and hand-plastered cornices, then introduced a Calacatta marble kitchen with antique brass hardware.",
    gallery: [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80b8f13?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p5",
    title: "The Garden House",
    location: "Lonavala, Maharashtra",
    image: "https://images.unsplash.com/photo-1600585154363-67ebad55a6b2?auto=format&fit=crop&w=800&q=80",
    category: "Holiday Home",
    description: "A hill-station retreat where every window frames a painting.",
    brief: "A 2,200 sqft weekend home in the hills, designed for three generations of a family who gather there for festivals.",
    materials: ["Exposed basalt stone walls", "Cedar wood ceiling beams", "Polished concrete floors", "Khadi linen upholstery", "Copper pendant lighting"],
    solution: "The house is built around a central living-dining space with a double-height ceiling, exposed basalt stone walls, and cedar beams.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154363-67ebad55a6b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p6",
    title: "The Artisan Loft",
    location: "Worli, Mumbai",
    image: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=800&q=80",
    category: "Commercial",
    description: "A creative studio space where raw industrial textures meet curated warmth.",
    brief: "A 1,800 sqft fashion design studio requiring a workspace that feels inspiring and gallery-like for client presentations.",
    materials: ["Polished cement floors", "Exposed brick walls", "Blackened steel shelving", "Velvet-upholstered lounge seating", "Hand-blown glass pendant clusters"],
    solution: "We preserved the original exposed brick walls and polished cement floors, then added blackened steel shelving and custom velvet seating.",
    gallery: [
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

export const processSteps = [
  {
    step: 1,
    title: "The Design Brief & Site Analysis",
    description: "We begin with an intimate conversation — understanding how you live, what you value, and how the space must perform. Our team conducts a rigorous site analysis, documenting structural constraints, light conditions, and spatial flow.",
  },
  {
    step: 2,
    title: "3D Visualization & Architectural Layouts",
    description: "Your vision is rendered into photorealistic 3D walkthroughs and precise architectural drawings. Every material, fixture, and finish is specified before a single brick is moved.",
  },
  {
    step: 3,
    title: "Bespoke Curation & Material Procurement",
    description: "We source materials directly from quarries, workshops, and studios — eliminating middlemen. Each slab of marble, each oak plank, and each brass fitting is selected for its character and quality.",
  },
  {
    step: 4,
    title: "On-site Construction & Turnkey Handover",
    description: "Our master craftsmen execute with obsessive precision. Weekly site inspections, real-time photo updates, and a dedicated project manager ensure delivery on time and above expectation.",
  },
];

export const categories = ["All", "Residential", "Commercial", "Holiday Home"] as const;
