import { IMAGES } from "./images";

export type GalleryCategory =
  | "Residential"
  | "Kitchen"
  | "Commercial"
  | "Cabinetry"
  | "Materials"
  | "Awards";

export type GalleryItem = {
  src: string;
  label: string;
  cat: GalleryCategory;
  colSpan: number;
  rowSpan: number;
};

export const GALLERY_FILTERS: Array<"All" | GalleryCategory> = [
  "All",
  "Residential",
  "Kitchen",
  "Commercial",
  "Cabinetry",
  "Materials",
  "Awards",
];

// 18 items, every photo verified to show wood, cabinetry, or wood-rich interiors.
export const GALLERY: GalleryItem[] = [
  // ── Row 1 — Hero + two materials ───────────────────────────────────────
  {
    src: IMAGES.livingRoom,
    label: "Crown-Cut Walnut Residence · Bodakdev",
    cat: "Residential",
    colSpan: 6,
    rowSpan: 4,
  },
  {
    src: IMAGES.woodBoardsStacked,
    label: "Premium Plywood Warehouse",
    cat: "Materials",
    colSpan: 3,
    rowSpan: 3,
  },
  {
    src: IMAGES.woodPlankClose,
    label: "Burma Teak Plank Selection",
    cat: "Materials",
    colSpan: 3,
    rowSpan: 3,
  },

  // ── Row 2 — Kitchens & cabinetry ───────────────────────────────────────
  {
    src: IMAGES.kitchen,
    label: "Modular Kitchen · Vastrapur",
    cat: "Kitchen",
    colSpan: 3,
    rowSpan: 3,
  },
  {
    src: IMAGES.kitchenWhiteBrown,
    label: "White & Walnut Kitchen · Thaltej",
    cat: "Kitchen",
    colSpan: 3,
    rowSpan: 3,
  },

  // ── Row 3 — Materials & textures ───────────────────────────────────────
  {
    src: IMAGES.veneer,
    label: "Natural Veneer Collection",
    cat: "Materials",
    colSpan: 4,
    rowSpan: 3,
  },
  {
    src: IMAGES.woodGrain,
    label: "Light Oak Grain · Material Library",
    cat: "Materials",
    colSpan: 4,
    rowSpan: 3,
  },
  {
    src: IMAGES.woodParquet,
    label: "Wood Parquet · Flooring Samples",
    cat: "Materials",
    colSpan: 4,
    rowSpan: 3,
  },

  // ── Row 4 — Cabinetry & interiors ──────────────────────────────────────
  {
    src: IMAGES.cabinet,
    label: "Walnut 2-Door Cabinet · Maninagar",
    cat: "Cabinetry",
    colSpan: 3,
    rowSpan: 3,
  },
  {
    src: IMAGES.bedroom,
    label: "Master Suite with Wardrobe · SG Highway",
    cat: "Residential",
    colSpan: 3,
    rowSpan: 3,
  },
  {
    src: IMAGES.woodenDoor,
    label: "Crafted Wooden Door · Iscon",
    cat: "Cabinetry",
    colSpan: 3,
    rowSpan: 3,
  },
  {
    src: IMAGES.hall,
    label: "Foyer · Vastrapur",
    cat: "Residential",
    colSpan: 3,
    rowSpan: 3,
  },

  // ── Row 5 — Commercial / hospitality ───────────────────────────────────
  {
    src: IMAGES.reception,
    label: "Reception Lounge · Navrangpura",
    cat: "Commercial",
    colSpan: 4,
    rowSpan: 3,
  },
  {
    src: IMAGES.office,
    label: "Headquarters Fitout · CG Road",
    cat: "Commercial",
    colSpan: 4,
    rowSpan: 3,
  },
  {
    src: IMAGES.showroom,
    label: "Hotel Banquet Pre-Function · Hyatt",
    cat: "Commercial",
    colSpan: 4,
    rowSpan: 3,
  },

  // ── Row 6 — Materials wide ─────────────────────────────────────────────
  {
    src: IMAGES.woodWallLit,
    label: "Smoked Oak Panelling · Wall Detail",
    cat: "Materials",
    colSpan: 6,
    rowSpan: 3,
  },
  {
    src: IMAGES.woodPanels,
    label: "Decorative Laminate Samples",
    cat: "Materials",
    colSpan: 6,
    rowSpan: 3,
  },
  {
    src: IMAGES.woodBoardBrown,
    label: "Solid Wood Joinery Stock",
    cat: "Materials",
    colSpan: 12,
    rowSpan: 3,
  },

  // ── Awards ────────────────────────────────────────────────────────────
  {
    src: IMAGES.awardCenturyCertificate,
    label: "Century Regal Club · Diamond Circle Certificate",
    cat: "Awards",
    colSpan: 4,
    rowSpan: 5,
  },
  {
    src: IMAGES.awardCenturyBook,
    label: "Century Regal Club · Diamond Circle",
    cat: "Awards",
    colSpan: 4,
    rowSpan: 5,
  },
  {
    src: IMAGES.awardDurianTrophy,
    label: "Durian Laminates · Highest Sales Performance — Projects",
    cat: "Awards",
    colSpan: 4,
    rowSpan: 5,
  },
];

export const GALLERY_PAGE = {
  head: {
    crumb: "Project gallery",
    headline: {
      part1: "Fifteen hundred ",
      italic: "finished rooms.",
    },
    lead: "Residences, hotels, offices, retail fitouts and turnkey interiors finished with materials supplied from our shelves. A small selection follows.",
  },
} as const;
