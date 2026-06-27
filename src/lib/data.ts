export interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  // category: "Residential" | "Commercial" | "Holiday Home";
  description: string;
  brief: string;
  materials: string[];
  solution: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Amazonika",
    location: "Goa",
    image: "/assets/Amazonika/Amazonika1.jpg",
    // category: "Residential",
    description:
      "Nestled in the vibrant coastal town of Baga, Goa, Amazonika Boutique Resort offers a tranquil retreat amidst the bustling energy of the region.",
    brief:
      "The client sought to transform a raw, dark resort shell into a luminous, warm-minimalist resort that balanced open-plan entertaining with intimate family zones.",
    materials: [
      "Statuario marble flooring",
      "White oak wall paneling",
      "Brushed bronze fixtures",
      "Linen-upholstered custom furniture",
      "Fluted glass partitions",
    ],
    solution:
      "We opened the central core by removing non-structural walls, inserting a 14-foot fluted glass partition that separates the living area from the private suite while preserving natural light.",
    gallery: [
      "/assets/Amazonika/Amazonika2.jpg",
      "/assets/Amazonika/Amazonika3.jpg",
      "/assets/Amazonika/Amazonika4.jpg",
      "/assets/Amazonika/Amazonika5.jpg",
      "/assets/Amazonika/Amazonika6.jpg",
      "/assets/Amazonika/Amazonika7.jpg",
      "/assets/Amazonika/Amazonika8.jpg",
    ],
  },
  {
    id: "p2",
    title: "GlassHouse Goa",
    location: "Goa",
    image:
      "/assets/GlassHouse_Goa/GlassHouse_Goa1.jpg?auto=format&fit=crop&w=800&q=80",
    // category: "Holiday Home",
    description:
      "A coastal retreat where restrained architecture meets the rhythm of the sea.",
    brief:
      "A weekend home for a family of four that needed to feel serene, easy to maintain, and deeply connected to the surrounding landscape.",
    materials: [
      "Kota stone flooring",
      "Teak wood ceiling slats",
      "Lime-plaster walls",
      "Woven rattan screens",
      "Raw concrete countertops",
    ],
    solution:
      "The resort's common areas feature textured stone, artisanal lighting, and bespoke wooden elements that celebrate local craftsmanship while maintaining a refined contemporary aesthetic.",
    gallery: [
      "/assets/GlassHouse_Goa/GlassHouse_Goa2.jpg?auto=format&fit=crop&w=800&q=80",
      "/assets/GlassHouse_Goa/GlassHouse_Goa3.jpg?auto=format&fit=crop&w=800&q=80",
      "/assets/GlassHouse_Goa/GlassHouse_Goa4.jpg?auto=format&fit=crop&w=800&q=80",
      "/assets/GlassHouse_Goa/GlassHouse_Goa5.jpg?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p3",
    title: "Ukiyo DIFC",
    location: "Night club in Dubai, United Arab Emirates",
    image: "/assets/Ukiyo_DIFC/Ukiyo_DIFC_After1.jpg",
    // category: "Holiday Home",
    description:
      "Ukiyo is your go-to spot for an unforgettable nightlife experience in the heart of Dubai, located in Zaabeel 2 near the financial center",
    brief:
      "A weekend home for a family of four that needed to feel serene, easy to maintain, and deeply connected to the surrounding landscape.",
    materials: [
      "Kota stone flooring",
      "Teak wood ceiling slats",
      "Lime-plaster walls",
      "Woven rattan screens",
      "Raw concrete countertops",
    ],
    solution:
      "The renovation reimagined the interiors to deliver an upscale entertainment experience, balancing bold aesthetics with guest comfort. Carefully curated lighting, luxurious textures, and efficient space planning create an environment that feels exclusive, energetic, and welcoming.",
    gallery: [
      "/assets/Ukiyo_DIFC/Ukiyo_DIFC_After2.jpg",
      "/assets/Ukiyo_DIFC/Ukiyo_DIFC_After3.jpg",
      "/assets/Ukiyo_DIFC/Ukiyo_DIFC_After4.jpg",
      "/assets/Ukiyo_DIFC/Ukiyo_DIFC_After5.jpg",
    ],
  },
];

export const processSteps = [
  {
    step: 1,
    title: "The Design Brief & Site Analysis",
    description:
      "We begin with an intimate conversation — understanding how you live, what you value, and how the space must perform. Our team conducts a rigorous site analysis, documenting structural constraints, light conditions, and spatial flow.",
  },
  {
    step: 2,
    title: "3D Visualization & Architectural Layouts",
    description:
      "Your vision is rendered into photorealistic 3D walkthroughs and precise architectural drawings. Every material, fixture, and finish is specified before a single brick is moved.",
  },
  {
    step: 3,
    title: "Bespoke Curation & Material Procurement",
    description:
      "We source materials directly from quarries, workshops, and studios — eliminating middlemen. Each slab of marble, each oak plank, and each brass fitting is selected for its character and quality.",
  },
  {
    step: 4,
    title: "On-site Construction & Turnkey Handover",
    description:
      "Our master craftsmen execute with obsessive precision. Weekly site inspections, real-time photo updates, and a dedicated project manager ensure delivery on time and above expectation.",
  },
];

// export const categories = ["All", "Residential", "Commercial", "Holiday Home"] as const;
