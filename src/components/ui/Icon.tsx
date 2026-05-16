type SizeProps = { size?: number };

export const ArrowIcon = ({ size = 16 }: SizeProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowURIcon = ({ size = 18 }: SizeProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export const PhoneIcon = ({ size = 14 }: SizeProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" />
  </svg>
);

export const MailIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const PinIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ClockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const MenuIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const PlywoodIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <rect x="6" y="14" width="52" height="6" />
    <rect x="6" y="24" width="52" height="6" />
    <rect x="6" y="34" width="52" height="6" />
    <rect x="6" y="44" width="52" height="6" />
    <path d="M6 14h52M6 50h52" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export const MdfIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <rect x="6" y="22" width="52" height="20" />
    <path d="M10 28h44M10 33h44M10 38h44" opacity=".5" />
  </svg>
);

export const WoodIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <rect x="14" y="8" width="36" height="48" />
    <path
      d="M22 14c4 8 4 14 0 22M28 14c4 8 4 14 0 22M36 14c4 8 4 14 0 22M44 14c4 8 4 14 0 22"
      opacity=".6"
    />
    <circle cx="32" cy="46" r="2" />
  </svg>
);

export const LaminateIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M10 16l44-4v36l-44 4z" />
    <path d="M10 26l44-4M10 36l44-4M10 46l44-4" opacity=".5" />
  </svg>
);

export const VeneerIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <rect x="8" y="10" width="48" height="44" />
    <path
      d="M32 10c6 12 6 32 0 44M16 10c10 12 10 32 0 44M48 10c-10 12-10 32 0 44"
      opacity=".5"
    />
  </svg>
);

export const HardwareIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <circle cx="22" cy="32" r="10" />
    <circle cx="22" cy="32" r="3" />
    <path d="M32 28h22v8H32z" />
    <path d="M42 28v8M50 28v8" opacity=".6" />
  </svg>
);

export const TruckIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <rect x="2" y="8" width="16" height="12" />
    <path d="M18 12h6l4 4v4h-10z" />
    <circle cx="8" cy="23" r="2.5" />
    <circle cx="23" cy="23" r="2.5" />
  </svg>
);

export const BuildingIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M4 28V8l10-4 10 4v20" />
    <path d="M4 28h26" />
    <rect x="10" y="14" width="3" height="3" />
    <rect x="15" y="14" width="3" height="3" />
    <rect x="10" y="20" width="3" height="3" />
    <rect x="15" y="20" width="3" height="3" />
  </svg>
);

export const PaletteIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M16 4a12 12 0 1 0 0 24 3 3 0 0 0 3-3 3 3 0 0 1 3-3h2a4 4 0 0 0 4-4 12 12 0 0 0-12-14z" />
    <circle cx="10" cy="14" r="1.5" fill="currentColor" />
    <circle cx="15" cy="10" r="1.5" fill="currentColor" />
    <circle cx="21" cy="11" r="1.5" fill="currentColor" />
  </svg>
);

export const HandshakeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M3 14l4-4 5 1 5 5-2 2-3-3-3 3-3-1" />
    <path d="M29 14l-4-4-5 1-5 5 2 2 3-3 3 3 3-1" />
    <path d="M14 16l4 4" />
  </svg>
);

export const ToolsIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M22 4l-3 3 4 4 3-3-4-4z" />
    <path d="M19 7L7 19l-3 7 7-3 12-12" />
    <path d="M14 14l4 4" />
  </svg>
);

export const ShieldIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M16 3l11 4v9c0 7-5 12-11 13-6-1-11-6-11-13V7l11-4z" />
    <path d="M11 16l3 3 7-7" />
  </svg>
);

export const TrophyIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M6 4h12v5a6 6 0 0 1-12 0V4z" />
    <path d="M6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3" />
    <path d="M10 15h4v3h-4zM8 20h8" />
  </svg>
);

import type { CategoryIconKey } from "@/constants/categories";
import type { ServiceIconKey } from "@/constants/services";

const CATEGORY_ICONS: Record<CategoryIconKey, React.ComponentType> = {
  plywood: PlywoodIcon,
  mdf: MdfIcon,
  wood: WoodIcon,
  laminate: LaminateIcon,
  veneer: VeneerIcon,
  hardware: HardwareIcon,
};

const SERVICE_ICONS: Record<ServiceIconKey, React.ComponentType> = {
  building: BuildingIcon,
  palette: PaletteIcon,
  truck: TruckIcon,
  handshake: HandshakeIcon,
  tools: ToolsIcon,
  shield: ShieldIcon,
};

export function CategoryIcon({ name }: { name: CategoryIconKey }) {
  const C = CATEGORY_ICONS[name];
  return <C />;
}

export function ServiceIcon({ name }: { name: ServiceIconKey }) {
  const C = SERVICE_ICONS[name];
  return <C />;
}
