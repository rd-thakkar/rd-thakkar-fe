export type CategoryIconKey =
  | "plywood"
  | "mdf"
  | "wood"
  | "laminate"
  | "veneer"
  | "hardware";

export type Category = {
  num: string;
  name: string;
  italic?: string;
  iconKey: CategoryIconKey;
  desc: string;
};

export const CATEGORIES: Category[] = [
  {
    num: "01",
    name: "Plywood",
    italic: "wood",
    iconKey: "plywood",
    desc: "BWP, MR, marine and commercial grades — for kitchens, wardrobes and shopfit.",
  },
  {
    num: "02",
    name: "MDF",
    italic: "Boards",
    iconKey: "mdf",
    desc: "Pre-laminated and plain MDF for furniture, panelling and CNC routing.",
  },
  {
    num: "03",
    name: "Solid",
    italic: "Wood",
    iconKey: "wood",
    desc: "Seasoned teak, sheesham and engineered hardwoods for joinery and door frames.",
  },
  {
    num: "04",
    name: "Laminates",
    italic: "&",
    iconKey: "laminate",
    desc: "0.8 / 1mm decorative laminates across textures, solids, woodgrains and acrylics.",
  },
  {
    num: "05",
    name: "Veneers",
    italic: "",
    iconKey: "veneer",
    desc: "Natural and reconstituted veneers — Italian walnut to oak and teak grain.",
  },
  {
    num: "06",
    name: "Hardware",
    italic: "",
    iconKey: "hardware",
    desc: "Hinges, channels, locks, profiles and fittings from Häfele, Hettich and Ebco.",
  },
];
