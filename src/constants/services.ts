export type ServiceIconKey =
  | "building"
  | "palette"
  | "truck"
  | "handshake"
  | "tools"
  | "shield";

export type Service = {
  iconKey: ServiceIconKey;
  titleStart: string;
  titleItalic: string;
  body: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    iconKey: "building",
    titleStart: "Turnkey ",
    titleItalic: "Projects",
    body: "Complete material packages for residences, offices and retail — from a single quotation to delivered-on-site, sequenced to your construction schedule.",
    bullets: [
      "Single-source supply across 6 categories",
      "Architect & contractor liaison",
      "Site-stage sequencing & daily dispatch",
      "Post-installation snag support",
    ],
  },
  {
    iconKey: "palette",
    titleStart: "Material ",
    titleItalic: "Consultation",
    body: "Bring a moodboard or a floor-plan — our team will translate it into a written material schedule with brand, grade, size and price.",
    bullets: [
      "In-showroom sample sessions",
      "Veneer & laminate curation",
      "Substrate & hardware specification",
      "Written material schedule",
    ],
  },
  {
    iconKey: "truck",
    titleStart: "Delivery & ",
    titleItalic: "Logistics",
    body: "Same-day delivery across Ahmedabad, sequenced dispatch to outstation sites, and dedicated handling for fragile sheet goods.",
    bullets: [
      "Same-day delivery within Ahmedabad",
      "Outstation transport across Gujarat & western India",
      "Edge-protected sheet handling",
      "On-site offloading support",
    ],
  },
  {
    iconKey: "handshake",
    titleStart: "Brand ",
    titleItalic: "Sourcing",
    body: "Need something outside our regular stock? As a long-standing dealer for ten premium brands we can pull from each brand's full national catalogue.",
    bullets: [
      "Special-order veneers & laminates",
      "Imported hardware on indent",
      "Direct factory dispatch where required",
      "Indent tracking & ETA updates",
    ],
  },
  {
    iconKey: "tools",
    titleStart: "Hardware ",
    titleItalic: "Specification",
    body: "From soft-close hinges to tandem channels and door-systems — our hardware team will spec the right Hettich, Häfele or Ebco line for each cabinet.",
    bullets: [
      "Concealed hinges, telescopic channels",
      "Wardrobe & pantry systems",
      "Locks, locking handles, profiles",
      "Quantity take-offs from drawings",
    ],
  },
  {
    iconKey: "shield",
    titleStart: "After-Sales ",
    titleItalic: "Care",
    body: "The handshake doesn't end at the invoice. We service warranty claims directly with the brand, and our team is on call long after a project closes.",
    bullets: [
      "Direct brand warranty support",
      "Replacement dispatch within 48 hours",
      "Three-generation customer relationships",
      "Lifetime contact with the proprietor",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    t: "Brief",
    d: "Share drawings, a moodboard or a verbal list — over WhatsApp, email or in person.",
  },
  {
    n: "02",
    t: "Specification",
    d: "We translate it into a line-by-line material schedule with brand, grade and quantity.",
  },
  {
    n: "03",
    t: "Sampling",
    d: "Physical swatches and sheet samples are delivered for client approval before order.",
  },
  {
    n: "04",
    t: "Dispatch",
    d: "Materials sequenced and delivered to site — same-day local, scheduled outstation.",
  },
];

export const SERVICES_PAGE = {
  head: {
    crumb: "Services we deliver",
    headline: {
      part1: "More than a ",
      italic: "material shop.",
    },
    lead: "For architects, designers, contractors and homeowners — we don't only sell sheets, we help you finish the room. Six services we have built over six decades.",
  },
  process: {
    eyebrow: "How we work",
    headlineStart: "Four steps from ",
    headlineItalic: "brief to dispatch.",
    lead: "A predictable, professional workflow refined across thousands of projects.",
  },
} as const;
