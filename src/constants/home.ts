import { IMAGES } from "./images";

export const HOME = {
  hero: {
    eyebrow: "Plywood · Laminates · Hardware",
    kicker: "Ahmedabad · est. 1960",
    headline: {
      line1: "Materials for",
      line2Start: "the rooms ",
      line2Mid: "you",
      line2End: " imagine.",
    },
    sub: "For sixty-five years and three generations, R. D. Thakkar & Sons has supplied India's finest plywood, laminates, veneers and hardware — and built more than fifteen hundred dream interiors along the way.",
    primaryCta: { label: "Explore the Catalogue", href: "/products" },
    secondaryCta: { label: "Visit Showroom", href: "/contact" },
    badge: { value: "65", label: "Years" },
    featuredTag: {
      label: "Featured material",
      value: "Italian Walnut Veneer · Crown-Cut",
    },
    meta: [
      { k: "Heritage", v: "Since 1960" },
      { k: "Projects", v: "1,500+ delivered" },
      { k: "Brands", v: "10 premium partners" },
    ],
    image: IMAGES.hero,
  },
  stats: [
    { v: "1960", l: "Year Established" },
    { v: "65", plus: true, l: "Years of Heritage" },
    { v: "1,500", plus: true, l: "Projects & Clients" },
    { v: "10", plus: true, l: "Premium Brand Partners" },
  ],
  categoriesSection: {
    eyebrow: "01 — What we stock",
    headlineStart: "A material library, ",
    headlineItalic: "curated.",
    lead: "Six core categories, every variant a contractor or designer asks for, kept in stock at our Lati Bazar warehouse — and delivered same-day across Ahmedabad.",
  },
  heritage: {
    eyebrow: "02 — Heritage",
    headlineLine1: "Three generations.",
    headlineLine2Italic: "One showroom.",
    quote:
      "We don't sell sheets — we sell the rooms our customers will live in. That's why the family still picks every grain that leaves the godown.",
    attribution: "— Prakash Thakkar · Proprietor · 2nd Gen.",
    ctaPrimary: { label: "Read our story", href: "/about" },
    ctaSecondary: { label: "See completed homes", href: "/gallery" },
    image: IMAGES.workshop,
  },
  brandsSection: {
    eyebrow: "03 — Brand partners",
    headlineStart: "Authorised dealer of ",
    headlineItalic: "India's most-trusted",
    headlineEnd: " material brands.",
    lead: "From everyday workhorse plywood to specification-grade hardware, we stock only what the industry has chosen to trust.",
  },
  projectsSection: {
    eyebrow: "04 — In the wild",
    headlineStart: "Where our materials ",
    headlineItalic: "end up.",
    lead: "A small selection of recent residences, offices and turnkey fitouts built around our supply.",
    seeAll: { label: "See the full gallery", href: "/gallery" },
    items: [
      {
        image: IMAGES.livingRoom,
        meta: "Bodakdev · 2025",
        title: "Crown-Cut Walnut Residence",
        featured: true,
      },
      {
        image: IMAGES.kitchen,
        meta: "Vastrapur · 2024",
        title: "Modular Kitchen",
      },
      {
        image: IMAGES.office,
        meta: "CG Road · 2025",
        title: "Headquarters Fitout",
      },
      {
        image: IMAGES.bedroom,
        meta: "SG Highway · 2024",
        title: "Master Bedroom Suite",
      },
      {
        image: IMAGES.cabinet,
        meta: "Maninagar · 2024",
        title: "Library Cabinetry",
      },
    ],
  },
  awardsSection: {
    eyebrow: "05 — Recognised",
    headlineStart: "Awarded for what we ",
    headlineItalic: "don't compromise on.",
    lead: "Recognised by our principal brand partners for sales performance, retail excellence and customer trust — year after year.",
    items: [
      {
        issuer: "Durian · 2023",
        titleStart: "Highest Sales ",
        titleItalic: "Performance",
        titleEnd: " — Projects",
        body: "Recognised for the largest specification volume of Durian decorative laminates across western India in FY 2022–23.",
      },
      {
        issuer: "Century Prowud · 2024",
        titleStart: "Diamond ",
        titleItalic: "Circle",
        titleEnd: " Member",
        body: "Inducted into Century Regal Club's Diamond Circle — the top tier of authorised Century dealers in India.",
      },
      {
        issuer: "Industry · ongoing",
        titleStart: "Three ",
        titleItalic: "generations",
        titleEnd: " of trust",
        body: "Architects, interior designers and contractors who began with our grandfather still walk in on Saturday mornings.",
      },
    ],
  },
} as const;
