// Centralised image references.
// To swap a photo, change a URL here — every page picks it up automatically.

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  livingRoom: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
  kitchen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  bedroom: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  wood: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1200&q=80",
  laminate: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80",
  plywood: "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?auto=format&fit=crop&w=1200&q=80",
  hardware: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1200&q=80",
  veneer: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=1200&q=80",
  mdf: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?auto=format&fit=crop&w=1200&q=80",
  workshop: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
  showroom: "https://images.unsplash.com/photo-1556909195-450ba646b059?auto=format&fit=crop&w=1400&q=80",
  hall: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  bath: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
  cabinet: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
  texture1: "https://images.unsplash.com/photo-1610552050890-fe99536c2615?auto=format&fit=crop&w=1200&q=80",
  texture2: "https://images.unsplash.com/photo-1620735692151-c531ac6c7e2c?auto=format&fit=crop&w=1200&q=80",
  facade: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
  store: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
  reception: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
} as const;

export type ImageKey = keyof typeof IMAGES;
