import type { BrandLogoKey } from "@/components/ui/BrandLogos";

export type Brand = {
  name: string;
  tag: string;
  logoKey: BrandLogoKey;
};

// Brands shown in the official R.D. Thakkar & Sons marketing card.
// Order matches the card: Royal Touche, Century, Airolam, GreenPly (top row),
// Formica, Rehau, Hettich, Häfele, Ebco (bottom row).
export const BRANDS: Brand[] = [
  { name: "Royal Touche", tag: "Plywood", logoKey: "royalTouche" },
  { name: "Century", tag: "Plyboards · Veneers · Doors", logoKey: "century" },
  { name: "Airolam", tag: "Decorative Laminates", logoKey: "airolam" },
  { name: "GreenPly", tag: "Plywood", logoKey: "greenPly" },
  { name: "Formica", tag: "Laminates", logoKey: "formica" },
  { name: "Rehau", tag: "Edge Bands · Profiles", logoKey: "rehau" },
  { name: "Hettich", tag: "Furniture Fittings", logoKey: "hettich" },
  { name: "Häfele", tag: "Architectural Hardware", logoKey: "hafele" },
  { name: "Ebco", tag: "Hardware Systems", logoKey: "ebco" },
];

// Marquee on home page — same 9 brands
export const BRAND_TICKER: string[] = [
  "Royal Touche",
  "Century",
  "Airolam",
  "GreenPly",
  "Formica",
  "Rehau",
  "Hettich",
  "Häfele",
  "Ebco",
];
