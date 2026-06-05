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
  brands: string[];
};

export const CATEGORIES: Category[] = [
  {
    num: "01",
    name: "Plywood",
    italic: "",
    iconKey: "plywood",
    desc: "BWP, MR, Commercial, Fire Retardant, Film Face & Calibrated grades.",
    brands: ["Royal Touche", "Century", "GreenPly"],
  },
  {
    num: "02",
    name: "MDF",
    italic: "& Boards",
    iconKey: "mdf",
    desc: "MDF, HDF, Fire Smart Panel, Boilo, Particle Board — plain & pre-laminated.",
    brands: ["Century"],
  },
  {
    num: "03",
    name: "Solid",
    italic: "Wood",
    iconKey: "wood",
    desc: "Burma Teak, Ivory Teak, Ghana Teak, Pine, White Ash, White Oak, Chillwood.",
    brands: ["Burma Teak", "Ghana Teak", "Pine"],
  },
  {
    num: "04",
    name: "Laminates",
    italic: "",
    iconKey: "laminate",
    desc: "Decorative 1mm & 0.8mm HPL — woodgrains, solids, abstracts and textures.",
    brands: ["Royal Touche", "Airolam", "Formica", "Rehau"],
  },
  {
    num: "05",
    name: "Veneers",
    italic: "",
    iconKey: "veneer",
    desc: "Burma teak veneer, all types of natural and reconstituted veneers in 4×8 sheets.",
    brands: ["Century", "Natural", "Recon"],
  },
  {
    num: "06",
    name: "Hardware",
    italic: "",
    iconKey: "hardware",
    desc: "Concealed hinges, channels, drawer systems, handles, fittings and accessories.",
    brands: ["Hettich", "Häfele", "Ebco"],
  },
];
