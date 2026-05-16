export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const NAV: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "products", label: "Products", href: "/products" },
  { id: "services", label: "Services", href: "/services" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export const FOOTER_CATEGORIES = [
  { label: "All Plywood", href: "/products" },
  { label: "MDF Boards", href: "/products" },
  { label: "Solid Wood", href: "/products" },
  { label: "Laminates", href: "/products" },
  { label: "Veneers", href: "/products" },
  { label: "Hardware & Fittings", href: "/products" },
];
