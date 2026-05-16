export type Brand = {
  name: string;
  tag: string;
  variant?: "default" | "red" | "green" | "gold";
};

export const BRANDS: Brand[] = [
  { name: "Royal Touche", tag: "Plywood", variant: "default" },
  { name: "Century", tag: "Plyboards · Veneers · Doors", variant: "red" },
  { name: "GreenPly", tag: "Plywood", variant: "green" },
  { name: "Airolam", tag: "Decorative Laminates", variant: "default" },
  { name: "Formica", tag: "Laminates · Worktops", variant: "red" },
  { name: "Häfele", tag: "Architectural Hardware", variant: "default" },
  { name: "Hettich", tag: "Furniture Fittings", variant: "default" },
  { name: "Rehau", tag: "Edge Bands · Profiles", variant: "default" },
  { name: "Ebco", tag: "Hardware Systems", variant: "default" },
  { name: "Durian", tag: "Decorative Laminates", variant: "gold" },
];

export const BRAND_TICKER: string[] = [
  "Royal Touche",
  "Century Plyboards",
  "GreenPly",
  "Airolam",
  "Formica",
  "Häfele",
  "Hettich",
  "Rehau",
  "Ebco",
  "Durian",
];
