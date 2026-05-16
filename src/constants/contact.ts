export const CONTACT_PAGE = {
  head: {
    crumb: "Visit, call or write",
    headline: {
      part1: "Walk in. ",
      italic: "Or, ring us.",
    },
    lead: "The showroom is open six days a week. Bring your drawings, a moodboard — or just a sample of the wood you fell in love with. We'll take it from there.",
  },
  form: {
    eyebrow: "Send an enquiry",
    headlineStart: "Tell us what your ",
    headlineItalic: "space needs.",
    fields: {
      name: { label: "Your name", placeholder: "e.g. Anjali Mehta" },
      phone: { label: "Phone", placeholder: "+91 ………" },
      email: { label: "Email", placeholder: "you@example.com" },
      interest: { label: "Material of interest" },
      message: {
        label: "Tell us what you're building",
        placeholder:
          "A few sentences about your project, drawings, or what you're looking for…",
      },
    },
    interests: [
      "Plywood",
      "MDF Boards",
      "Solid Wood",
      "Laminates",
      "Veneers",
      "Hardware & Fittings",
      "Turnkey project",
      "Other",
    ],
    whatsappNote: "Or WhatsApp the same details to",
    submit: "Send enquiry",
    successMessage:
      "Your enquiry has reached our counter — Prakash or a member of our team will respond within the working day.",
    successPrefix: "Thank you.",
  },
  map: {
    eyebrow: "Find the showroom",
    headlineStart: "Lati Bazar, ",
    headlineItalic: "Ahmedabad.",
    lead: "Tucked behind Gita Mandir in old Ahmedabad. Free customer parking; ten minutes from Kalupur station and twenty from the airport.",
  },
  labels: {
    showroom: "Showroom & warehouse",
    speakTo: "Speak to Prakash Thakkar",
    landline: "Landline",
    altMobile: "Alt. mobile",
    email: "Email the office",
    hours: "Showroom hours",
  },
} as const;
