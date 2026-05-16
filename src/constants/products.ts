import { IMAGES } from "./images";

export type ProductCategory =
  | "Plywood"
  | "MDF"
  | "Wood"
  | "Laminates"
  | "Veneers"
  | "Hardware";

export type Product = {
  name: string;
  italic: string;
  cat: ProductCategory;
  brand: string;
  desc: string;
  image: string;
};

export const PRODUCT_FILTERS: Array<"All" | ProductCategory> = [
  "All",
  "Plywood",
  "MDF",
  "Wood",
  "Laminates",
  "Veneers",
  "Hardware",
];

export const PRODUCTS: Product[] = [
  {
    name: "Marine Grade",
    italic: "Plywood",
    cat: "Plywood",
    brand: "Century",
    desc: "BWP-grade IS:710 plywood — boiling-water-proof, ideal for kitchens, bathrooms and exterior use.",
    image: IMAGES.plywood,
  },
  {
    name: "Club Prime",
    italic: "BWR",
    cat: "Plywood",
    brand: "Royal Touche",
    desc: "Boiling-water-resistant plywood for premium interior cabinetry and wardrobes.",
    image: IMAGES.plywood,
  },
  {
    name: "Ecotec",
    italic: "MR Ply",
    cat: "Plywood",
    brand: "GreenPly",
    desc: "Moisture-resistant commercial plywood — the everyday workhorse for furniture.",
    image: IMAGES.plywood,
  },
  {
    name: "Pre-Lam",
    italic: "MDF Board",
    cat: "MDF",
    brand: "Century Maxpro",
    desc: "Pre-laminated medium density fibreboard in 50+ shades. Ready-to-fabricate.",
    image: IMAGES.mdf,
  },
  {
    name: "HDHMR",
    italic: "Board",
    cat: "MDF",
    brand: "Action Tesa",
    desc: "High-density, high-moisture-resistant board for premium kitchens and shutters.",
    image: IMAGES.mdf,
  },
  {
    name: "Burma",
    italic: "Teak",
    cat: "Wood",
    brand: "House sourced",
    desc: "Air-seasoned Burmese teak planks for door frames, mouldings and bespoke joinery.",
    image: IMAGES.wood,
  },
  {
    name: "Italian",
    italic: "Walnut Veneer",
    cat: "Veneers",
    brand: "Century Veneers",
    desc: "Crown-cut natural walnut veneer in 4×8 sheets. Curated by the family.",
    image: IMAGES.veneer,
  },
  {
    name: "Smoked",
    italic: "Oak Veneer",
    cat: "Veneers",
    brand: "Royal Touche",
    desc: "Quarter-cut smoked oak — for restrained, contemporary panelling.",
    image: IMAGES.veneer,
  },
  {
    name: "Decorative",
    italic: "Laminate · 1mm",
    cat: "Laminates",
    brand: "Airolam",
    desc: "1mm decorative laminate range — over 400 designs across woodgrains, solids and abstracts.",
    image: IMAGES.laminate,
  },
  {
    name: "Worktop",
    italic: "Laminate · 0.8mm",
    cat: "Laminates",
    brand: "Formica",
    desc: "Heat- and stain-resistant worktop laminate — kitchen and bar specification.",
    image: IMAGES.laminate,
  },
  {
    name: "Concealed",
    italic: "Hinges",
    cat: "Hardware",
    brand: "Hettich",
    desc: "Sensys soft-close concealed hinges — engineered for a quarter-million cycles.",
    image: IMAGES.hardware,
  },
  {
    name: "Telescopic",
    italic: "Channels",
    cat: "Hardware",
    brand: "Häfele",
    desc: "Full-extension telescopic drawer channels in tandem and standard variants.",
    image: IMAGES.hardware,
  },
];

export const PRODUCTS_PAGE = {
  head: {
    crumb: "Products & materials",
    headline: { part1: "The ", italic: "catalogue." },
    lead: "Every product in our showroom — plywood, MDF, solid wood, laminates, veneers and architectural hardware — across ten premium brand partners.",
  },
  brandStripSection: {
    eyebrow: "Our shelves carry",
    headlineStart: "Ten brand partners. ",
    headlineItalic: "One showroom.",
    lead: "Authorised dealer status, held continuously, with every brand displayed on our shelves.",
  },
} as const;
