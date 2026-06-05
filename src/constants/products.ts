import { IMAGES } from "./images";

export type ProductCategory =
  | "Plywood"
  | "MDF & Boards"
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
  "MDF & Boards",
  "Wood",
  "Laminates",
  "Veneers",
  "Hardware",
];

// All brand attributions limited to the 9 brands shown on our marketing card.
export const PRODUCTS: Product[] = [
  // ── Plywood ──────────────────────────────────────────────────────────────
  {
    name: "Royal Touche",
    italic: "BWP Plywood",
    cat: "Plywood",
    brand: "Royal Touche",
    desc: "Boiling-water-proof IS:710 marine plywood — ideal for kitchens, wardrobes, bathrooms and exterior cabinetry.",
    image: IMAGES.plywood,
  },
  {
    name: "Century",
    italic: "Plywood",
    cat: "Plywood",
    brand: "Century",
    desc: "ISI-marked BWP marine, BWR commercial, fire-retardant and calibrated plywood — India's most-trusted plyboards.",
    image: IMAGES.plywood,
  },
  {
    name: "GreenPly",
    italic: "MR Plywood",
    cat: "Plywood",
    brand: "GreenPly",
    desc: "Eco-certified plywood range — MR, BWR and heavy-duty grades for residential and project use.",
    image: IMAGES.plywood,
  },
  {
    name: "Film Face",
    italic: "Shuttering Ply",
    cat: "Plywood",
    brand: "Royal Touche / Century",
    desc: "Film-faced shuttering plywood for concrete formwork — high reuse value, smooth face for clean finishes.",
    image: IMAGES.plywood,
  },
  // ── MDF & Boards ─────────────────────────────────────────────────────────
  {
    name: "Century",
    italic: "MDF",
    cat: "MDF & Boards",
    brand: "Century",
    desc: "Plain and pre-laminated MDF — E1-grade, consistent density, ideal for modular furniture and shutters.",
    image: IMAGES.mdf,
  },
  {
    name: "Century",
    italic: "Boilo Moisture-Proof MDF",
    cat: "MDF & Boards",
    brand: "Century",
    desc: "Boilo moisture-proof MDF for kitchen shutters and bathroom cabinetry — engineered for humid environments.",
    image: IMAGES.mdf,
  },
  {
    name: "Century",
    italic: "HDF & Fire Smart Panel",
    cat: "MDF & Boards",
    brand: "Century",
    desc: "High-density fibreboard and fire-smart panel MDF for commercial, hospitality and institutional projects.",
    image: IMAGES.mdf,
  },
  {
    name: "Particle Board",
    italic: "Plain & Pre-Lam",
    cat: "MDF & Boards",
    brand: "Century",
    desc: "Plain and pre-laminated particle boards — economical, stable substrate for bedroom and office furniture.",
    image: IMAGES.mdf,
  },
  // ── Wood ─────────────────────────────────────────────────────────────────
  {
    name: "Burma",
    italic: "Teak",
    cat: "Wood",
    brand: "House sourced",
    desc: "Air-seasoned Burmese teak planks — for door frames, mouldings and bespoke joinery.",
    image: IMAGES.wood,
  },
  {
    name: "Ivory & Ghana",
    italic: "Teak",
    cat: "Wood",
    brand: "House sourced",
    desc: "Ivory Teak and Ghana Teak — versatile, medium-density hardwoods widely used in interior carpentry.",
    image: IMAGES.wood,
  },
  {
    name: "Pine · White Ash",
    italic: "& White Oak",
    cat: "Wood",
    brand: "House sourced",
    desc: "Pine wood, White Ashwood and White Oakwood — light-toned hardwoods for contemporary interiors.",
    image: IMAGES.wood,
  },
  {
    name: "SP",
    italic: "Chillwood",
    cat: "Wood",
    brand: "House sourced",
    desc: "SP Chillwood — a locally valued timber species ideal for construction and commercial joinery work.",
    image: IMAGES.wood,
  },
  // ── Laminates ────────────────────────────────────────────────────────────
  {
    name: "Royal Touche",
    italic: "Laminates",
    cat: "Laminates",
    brand: "Royal Touche",
    desc: "Decorative high-pressure laminates — textured, matte and gloss finishes across a wide design range.",
    image: IMAGES.laminate,
  },
  {
    name: "Airolam",
    italic: "1mm Laminates",
    cat: "Laminates",
    brand: "Airolam",
    desc: "1mm decorative laminates — 400+ designs spanning woodgrains, solids, abstracts and metallics.",
    image: IMAGES.laminate,
  },
  {
    name: "Formica",
    italic: "Laminates",
    cat: "Laminates",
    brand: "Formica",
    desc: "International-grade laminate for worktops, shutters and high-traffic surfaces. Heat and stain resistant.",
    image: IMAGES.laminate,
  },
  {
    name: "Rehau",
    italic: "Edge Bands",
    cat: "Laminates",
    brand: "Rehau",
    desc: "PVC and ABS edge bands precision-matched to laminate decors — for a seamless furniture finish.",
    image: IMAGES.laminate,
  },
  // ── Veneers ──────────────────────────────────────────────────────────────
  {
    name: "Burma Teak",
    italic: "Veneer",
    cat: "Veneers",
    brand: "Century",
    desc: "Sliced and rotary-cut Burma teak veneer — rich golden-brown grain, the classic choice for luxury interiors.",
    image: IMAGES.veneer,
  },
  {
    name: "Natural",
    italic: "Veneers",
    cat: "Veneers",
    brand: "Century",
    desc: "All types of natural veneers — walnut, oak, wenge, maple and more in 4×8 sheets, curated by the family.",
    image: IMAGES.veneer,
  },
  {
    name: "Recon",
    italic: "Veneers",
    cat: "Veneers",
    brand: "Century",
    desc: "Reconstituted veneers — uniform grain, consistent colour and excellent yield. Ideal for large panel projects.",
    image: IMAGES.veneer,
  },
  // ── Hardware ─────────────────────────────────────────────────────────────
  {
    name: "Hettich",
    italic: "Fittings",
    cat: "Hardware",
    brand: "Hettich",
    desc: "Soft-close concealed hinges, full-extension drawer runners and wardrobe lift systems — German precision.",
    image: IMAGES.hardware,
  },
  {
    name: "Häfele",
    italic: "Hardware",
    cat: "Hardware",
    brand: "Häfele",
    desc: "Handles, locks, telescopic channels, architectural fittings and lighting — a complete hardware solution.",
    image: IMAGES.hardware,
  },
  {
    name: "Ebco",
    italic: "Hardware Systems",
    cat: "Hardware",
    brand: "Ebco",
    desc: "Drawer systems, wardrobe accessories, kitchen baskets and a full suite of furniture fittings.",
    image: IMAGES.hardware,
  },
];

export const PRODUCTS_PAGE = {
  head: {
    crumb: "Products & materials",
    headline: { part1: "The ", italic: "catalogue." },
    lead: "Plywood, MDF, particle boards, solid wood, laminates, veneers and hardware — every product in our showroom across our nine trusted brand partners.",
  },
  brandStripSection: {
    eyebrow: "Our shelves carry",
    headlineStart: "Nine brand partners. ",
    headlineItalic: "One showroom.",
    lead: "Authorised dealer status, held continuously, with every brand displayed on our shelves.",
  },
} as const;
