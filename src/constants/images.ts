// Centralised image references.
// All Unsplash URLs below were verified via direct lookup on unsplash.com —
// they show wood, plywood, cabinetry, kitchens, or wood-rich interiors.
//
// To swap a photo: replace a URL — every page picks it up automatically.

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;
const uPlus = (id: string) =>
  `https://plus.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const IMAGES = {
  // ── Hero & carousel — luxury interiors with wood ──────────────────────
  hero: u("photo-1600585154340-be6161a56a0c"),
  heroCarousel2: uPlus("premium_photo-1661962841993-99a07c27c9f4"), // modern luxury living
  heroCarousel3: uPlus("premium_photo-1661876005092-57b7b5d4060d"), // modern chalet interior
  heroCarousel4: uPlus("premium_photo-1683141318297-75a3d8e86476"), // modern living with wooden dresser
  heroCarousel5: u("photo-1622372738946-62e02505feb3"), // modern kitchen with wood cabinetry

  // ── Material close-ups (verified wood photos) ─────────────────────────
  wood: u("photo-1611072337226-1140ab367200"), // light oak plank texture
  plywood: u("photo-1700973408133-b45276ec8feb"), // stack of wooden boards
  veneer: u("photo-1597113366853-fea190b6cd82"), // brown wooden plank close
  mdf: u("photo-1576092762791-dd9e2220abd1"), // wood parquet
  laminate: u("photo-1700906026482-f409e961aabc"), // wooden surface with squares
  hardware: u("photo-1581244277943-fe4a9c777189"), // hardware/fittings (kept)

  // ── Wood textures & paneling (all verified wood) ──────────────────────
  woodGrain: u("photo-1762978902169-e5789f7b56b8"), // light brown wood grain
  woodPlankLight: u("photo-1611072337226-1140ab367200"), // duplicate of wood — convenience alias
  woodBoardBrown: u("photo-1611600700192-d87eaeed4f81"), // brown/white wooden board
  woodPanels: u("photo-1700906026482-f409e961aabc"), // wooden surface squares
  woodWallLit: u("photo-1531824475211-72594993ce2a"), // wooden wall with light
  woodPlankClose: u("photo-1597113366853-fea190b6cd82"), // brown wooden plank close
  woodParquet: u("photo-1576092762791-dd9e2220abd1"), // parquet floor
  woodBoardsStacked: u("photo-1700973408133-b45276ec8feb"), // stacked boards

  // ── Spaces — wood-rich completed interiors ─────────────────────────────
  livingRoom: uPlus("premium_photo-1661962841993-99a07c27c9f4"), // luxury living
  kitchen: u("photo-1622372738946-62e02505feb3"), // kitchen with wood cabinets
  kitchenWhiteBrown: u("photo-1600489000022-c2086d79f9d4"), // white & brown kitchen
  bedroom: u("photo-1722349674028-a148f4364e43"), // bedroom with wooden closet
  office: u("photo-1682450195449-32ab08ddf7e7"), // room with large wooden door
  hall: uPlus("premium_photo-1661876005092-57b7b5d4060d"), // chalet interior hallway feel
  cabinet: u("photo-1558997519-83ea9252edf8"), // brown wooden 2-door cabinet
  reception: uPlus("premium_photo-1683141318297-75a3d8e86476"), // living with dresser
  showroom: u("photo-1600489000022-c2086d79f9d4"), // showroom feel — kitchen cabinets
  workshop: u("photo-1700973408133-b45276ec8feb"), // boards stacked = warehouse
  woodenDoor: u("photo-1682450195449-32ab08ddf7e7"), // large wooden door

  // ── Awards — real photos from the showroom ───────────────────────────
  awardCenturyCertificate: "/awards/century-diamond-certificate.jpeg",
  awardCenturyBook: "/awards/century-diamond-book.jpeg",
  awardDurianTrophy: "/awards/durian-highest-sales.jpeg",

  // ── Legacy aliases kept for older imports ────────────────────────────
  texture1: u("photo-1762978902169-e5789f7b56b8"),
  texture2: u("photo-1611600700192-d87eaeed4f81"),
  facade: uPlus("premium_photo-1661876005092-57b7b5d4060d"),
  store: uPlus("premium_photo-1683141318297-75a3d8e86476"),
} as const;

export type ImageKey = keyof typeof IMAGES;
