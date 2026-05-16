import { IMAGES } from "./images";

export type GalleryCategory =
  | "Residential"
  | "Kitchen"
  | "Commercial"
  | "Cabinetry"
  | "Materials";

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
];

export const GALLERY: GalleryItem[] = [
  {
    src: IMAGES.livingRoom,
    label: "Crown-Cut Walnut Living · Bodakdev",
    cat: "Residential",
    colSpan: 6,
    rowSpan: 4,
  },
  {
    src: IMAGES.kitchen,
    label: "Modular Kitchen · Vastrapur",
    cat: "Kitchen",
    colSpan: 3,
    rowSpan: 3,
  },
  {
    src: IMAGES.cabinet,
    label: "Library Cabinetry · Maninagar",
    cat: "Cabinetry",
    colSpan: 3,
    rowSpan: 3,
  },
  {
    src: IMAGES.bedroom,
    label: "Master Bedroom · SG Highway",
    cat: "Residential",
    colSpan: 3,
    rowSpan: 3,
  },
  {
    src: IMAGES.office,
    label: "Headquarters Fitout · CG Road",
    cat: "Commercial",
    colSpan: 3,
    rowSpan: 3,
  },
  {
    src: IMAGES.bath,
    label: "Powder Room · Thaltej",
    cat: "Residential",
    colSpan: 4,
    rowSpan: 3,
  },
  {
    src: IMAGES.hall,
    label: "Foyer · Iscon Cross Roads",
    cat: "Residential",
    colSpan: 4,
    rowSpan: 3,
  },
  {
    src: IMAGES.reception,
    label: "Reception Lounge · Navrangpura",
    cat: "Commercial",
    colSpan: 4,
    rowSpan: 3,
  },
  {
    src: IMAGES.texture1,
    label: "Smoked Oak Panelling",
    cat: "Materials",
    colSpan: 6,
    rowSpan: 3,
  },
  {
    src: IMAGES.facade,
    label: "Showroom Façade · Lati Bazar",
    cat: "Materials",
    colSpan: 6,
    rowSpan: 3,
  },
];

export const GALLERY_PAGE = {
  head: {
    crumb: "Project gallery",
    headline: {
      part1: "Fifteen hundred ",
      italic: "finished rooms.",
    },
    lead: "Residences, offices, retail fitouts and turnkey interiors finished with materials supplied from our shelves. A small selection follows.",
  },
} as const;
