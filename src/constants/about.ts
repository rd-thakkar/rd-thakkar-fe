import { IMAGES } from "./images";

export const ABOUT = {
  head: {
    crumb: "About the house of Thakkar",
    headline: {
      part1: "Sixty-five years of ",
      italic: "grain, gloss",
      part2: " and the quiet handshake.",
    },
    lead: "What began in 1960 as a single shop in Sahakari Lati Bazar is today Ahmedabad's most trusted plywood and laminate house — supplied to over fifteen hundred projects across India.",
  },
  story: {
    eyebrow: "Our story",
    headlineLine1: "A merchant's eye",
    headlineLine2Start: "for ",
    headlineLine2Italic: "good wood.",
    paragraphs: [
      "R. D. Thakkar & Sons was founded in 1960 by Rambhai Thakkar — a young trader who believed Gujarat's growing middle class deserved better materials than the local market then offered. He opened a single shop in Sahakari Lati Bazar with a handful of teak planks and a phone line.",
      "Six decades on, the shop has become a destination. His son Prakash Thakkar now runs the business with the same principles: stock only what you'd put in your own home, and price it as if the customer's grandfather were watching.",
      "Today our customers include leading architects, interior designers, contractors, and the same families — now in their third generation — who once walked in with our grandfather.",
    ],
    image: IMAGES.store,
  },
  milestones: {
    eyebrow: "Milestones",
    headlineStart: "Six decades, ",
    headlineItalic: "one ledger.",
    lead: "A short timeline of the milestones that brought us from a single shop to a sixty-five-year-old institution.",
    items: [
      {
        year: "1960",
        title: "The first counter",
        body: "Rambhai Thakkar opens a single-counter shop in Sahakari Lati Bazar, Ahmedabad — trading in teak and Burma sal planks.",
      },
      {
        year: "1978",
        title: "Branded plywood enters India",
        body: "R. D. Thakkar & Sons becomes one of the earliest dealers in Gujarat for branded boiling-water-proof plywood.",
      },
      {
        year: "1995",
        title: "Second generation",
        body: "Prakash Thakkar joins the business and begins expanding into decorative laminates, architectural hardware and door systems.",
      },
      {
        year: "2008",
        title: "Turnkey projects division",
        body: "A dedicated team begins delivering complete material packages to architects and contractors across western India.",
      },
      {
        year: "2019",
        title: "Century Diamond Circle",
        body: "Inducted into the Century Regal Club's Diamond Circle — the top tier of authorised Century dealers in the country.",
      },
      {
        year: "2023",
        title: "Durian — Highest Sales, Projects",
        body: "Recognised for the highest specification-grade laminate sales for project work in western India.",
      },
      {
        year: "2025",
        title: "1,500 projects served",
        body: "Crossed fifteen hundred completed homes, offices and turnkey interiors — and still counting.",
      },
    ],
  },
  leadership: {
    eyebrow: "Leadership",
    headlineStart: "The family ",
    headlineItalic: "on the counter.",
    lead: "Walk into the showroom on any working day and you will find a Thakkar on the counter. That has not changed since 1960.",
    leader: {
      initials: "PT",
      kicker: "Proprietor · 2nd Generation",
      nameFirst: "Prakash",
      nameLastItalic: "Thakkar",
      bio: "Prakash joined the family business in 1995 after a degree in commerce. Under his stewardship the company has grown from a neighbourhood plywood store into Ahmedabad's most-respected materials house — and the authorised home of more than ten premium brands.",
    },
  },
  values: {
    eyebrow: "Values",
    headlineStart: "What we keep ",
    headlineItalic: "in our grain.",
    lead: "Three rules our grandfather wrote down. We've not edited them since.",
    items: [
      {
        num: "01 · Stock",
        headlineStart: "Only what we'd put in ",
        headlineItalic: "our own home.",
        body: "Every sheet, every roll, every fitting that enters our warehouse is something we'd be comfortable installing for a member of our own family.",
      },
      {
        num: "02 · Price",
        headlineStart: "As if the customer's ",
        headlineItalic: "grandfather",
        headlineEnd: " were watching.",
        body: "Fair, transparent pricing — the same number for a first-time walk-in as for a thirty-year client. No hidden grades, no fake \"discounts\".",
      },
      {
        num: "03 · Service",
        headlineStart: "The handshake ",
        headlineItalic: "lasts longer",
        headlineEnd: " than the receipt.",
        body: "If something is wrong after the truck has left, the same family that sold it to you will arrive — usually within the hour, almost always with a replacement.",
      },
    ],
  },
  awards: {
    eyebrow: "Recognition",
    headlineStart: "Awards from ",
    headlineItalic: "our partners.",
    lead: "A handful of the trophies and certifications our principal brands have presented us — each one earned on the showroom floor, not in a boardroom.",
    items: [
      {
        issuer: "Durian · FY 2022–23",
        titleStart: "Highest Sales Performance — ",
        titleItalic: "Projects",
        body: "The largest project-specification volume of Durian decorative laminates across western India.",
      },
      {
        issuer: "Century Prowud",
        titleStart: "Diamond ",
        titleItalic: "Circle",
        titleEnd: " · Regal Club",
        body: "Inducted into the Diamond Circle — the highest tier in Century's Regal Club programme for authorised dealers.",
      },
      {
        issuer: "Multiple partners",
        titleStart: "Authorised ",
        titleItalic: "dealer status",
        body: "Held continuously with Royal Touche, GreenPly, Airolam, Formica, Häfele, Hettich, Rehau, Ebco and others.",
      },
    ],
  },
} as const;
