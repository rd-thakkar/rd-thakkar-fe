// Stylised SVG marks for each brand we deal with.
// These are simple text-led typographic marks in each brand's primary colour —
// not facsimiles of the registered trademark artwork.

const SIZE = { w: 140, h: 56 } as const;

type LogoProps = { className?: string };

const wrap = (children: React.ReactNode) => (
  <svg
    viewBox="0 0 200 80"
    width={SIZE.w}
    height={SIZE.h}
    style={{ maxHeight: SIZE.h, width: "auto", display: "block" }}
    aria-hidden="true"
  >
    {children}
  </svg>
);

// 1. Royal Touche — crown above wordmark, deep red
export function RoyalToucheLogo(_: LogoProps) {
  return wrap(
    <>
      <g transform="translate(100 16)" fill="#8B2014">
        {/* Three-peak crown */}
        <path d="M-22 6 L-22 -2 L-12 6 L-7 -10 L0 6 L7 -10 L12 6 L22 -2 L22 6 Z" />
        {/* Crown band */}
        <rect x="-24" y="7" width="48" height="2.5" />
      </g>
      {/* Crown gems */}
      <g fill="#D4A23C">
        <circle cx="88" cy="21" r="1.6" />
        <circle cx="100" cy="6" r="1.8" />
        <circle cx="112" cy="21" r="1.6" />
      </g>
      <text
        x="100"
        y="48"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="17"
        letterSpacing="3"
        fill="#8B2014"
      >
        ROYAL
      </text>
      <text
        x="100"
        y="66"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="12"
        letterSpacing="3.5"
        fill="#8B2014"
      >
        TOUCHE
      </text>
    </>,
  );
}

// 2. Century — red sun-burst mark with bold wordmark
export function CenturyLogo(_: LogoProps) {
  return wrap(
    <>
      <g transform="translate(28 38)">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x1 = Math.cos(a) * 5;
          const y1 = Math.sin(a) * 5;
          const x2 = Math.cos(a) * 14;
          const y2 = Math.sin(a) * 14;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#D11920"
              strokeWidth="3"
              strokeLinecap="round"
            />
          );
        })}
        <circle r="4" fill="#fff" stroke="#D11920" strokeWidth="2" />
      </g>
      <text
        x="52"
        y="42"
        fontFamily="Arial Black, 'Helvetica Neue', sans-serif"
        fontWeight="900"
        fontSize="22"
        letterSpacing="0.5"
        fill="#D11920"
      >
        CENTURY
      </text>
      <text
        x="52"
        y="56"
        fontFamily="Arial, sans-serif"
        fontWeight="500"
        fontSize="6.5"
        letterSpacing="0.8"
        fill="#666"
      >
        PLYBOARDS · VENEERS · DOORS
      </text>
    </>,
  );
}

// 3. Airolam — bold A in black square, wordmark + tag
export function AirolamLogo(_: LogoProps) {
  return wrap(
    <>
      <rect x="14" y="22" width="34" height="34" rx="2" fill="#111" />
      <text
        x="31"
        y="48"
        textAnchor="middle"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="28"
        fill="#fff"
      >
        A
      </text>
      <rect x="14" y="58" width="34" height="3" fill="#D11920" />
      <text
        x="54"
        y="46"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="20"
        letterSpacing="1"
        fill="#111"
      >
        AIROLAM
      </text>
      <text
        x="54"
        y="58"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
        fontSize="6.5"
        letterSpacing="0.8"
        fill="#444"
      >
        DECORATIVE LAMINATES
      </text>
    </>,
  );
}

// 4. GreenPly — green leaf + italic wordmark
export function GreenPlyLogo(_: LogoProps) {
  return wrap(
    <>
      {/* Leaf */}
      <g transform="translate(30 30)" fill="#2E8B3F">
        <path d="M0 -16 C 14 -10, 14 8, 0 16 C -14 8, -14 -10, 0 -16 Z" />
        <path
          d="M0 -14 L0 14"
          stroke="#fff"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M0 -8 L7 -3 M0 -8 L-7 -3 M0 0 L8 5 M0 0 L-8 5"
          stroke="#fff"
          strokeWidth="0.8"
          fill="none"
        />
      </g>
      <text
        x="55"
        y="40"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="22"
        letterSpacing="-0.5"
        fill="#2E8B3F"
      >
        GreenPly
      </text>
      <line x1="55" y1="46" x2="180" y2="46" stroke="#2E8B3F" strokeWidth="1" />
      <text
        x="118"
        y="58"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
        fontSize="8"
        letterSpacing="3"
        fill="#2E8B3F"
      >
        PLYWOOD
      </text>
    </>,
  );
}

// 5. Formica — stylised F + italic wordmark
export function FormicaLogo(_: LogoProps) {
  return wrap(
    <>
      <text
        x="38"
        y="55"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="900"
        fontSize="58"
        fill="#C8102E"
      >
        F
      </text>
      <text
        x="120"
        y="48"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="24"
        letterSpacing="-0.5"
        fill="#5A5A5A"
      >
        Formica
      </text>
      <text
        x="120"
        y="60"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
        fontSize="6.5"
        letterSpacing="1.4"
        fill="#5A5A5A"
      >
        LAMINATES
      </text>
    </>,
  );
}

// 6. Rehau — bold wordmark with diagonal accent
export function RehauLogo(_: LogoProps) {
  return wrap(
    <>
      <text
        x="100"
        y="50"
        textAnchor="middle"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="32"
        letterSpacing="2"
        fill="#111"
      >
        REHAU
      </text>
      {/* Diagonal accent under R */}
      <path d="M44 56 L74 56 L80 64 L50 64 Z" fill="#D11920" />
    </>,
  );
}

// 7. Hettich — lowercase wordmark with colour bar
export function HettichLogo(_: LogoProps) {
  return wrap(
    <>
      <text
        x="100"
        y="48"
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="700"
        fontSize="30"
        letterSpacing="-0.5"
        fill="#111"
      >
        hettich
      </text>
      {/* Multi-segment colour bar (signature element) */}
      <g transform="translate(56 56)">
        <rect width="22" height="3" fill="#E2231A" />
        <rect x="22" width="22" height="3" fill="#F49600" />
        <rect x="44" width="22" height="3" fill="#FFD500" />
        <rect x="66" width="22" height="3" fill="#009639" />
      </g>
    </>,
  );
}

// 8. Häfele — clean uppercase wordmark
export function HafeleLogo(_: LogoProps) {
  return wrap(
    <>
      <text
        x="100"
        y="50"
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="3"
        fill="#111"
      >
        HÄFELE
      </text>
      <line x1="58" y1="58" x2="142" y2="58" stroke="#D11920" strokeWidth="2.5" />
    </>,
  );
}

// 9. Ebco — blue italic wordmark
export function EbcoLogo(_: LogoProps) {
  return wrap(
    <>
      <text
        x="100"
        y="54"
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontStyle="italic"
        fontWeight="900"
        fontSize="36"
        letterSpacing="-1"
        fill="#0E4E96"
      >
        ebco
      </text>
      <text
        x="146"
        y="34"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
        fontSize="9"
        fill="#0E4E96"
      >
        ®
      </text>
    </>,
  );
}

// Dispatch helper
export type BrandLogoKey =
  | "royalTouche"
  | "century"
  | "airolam"
  | "greenPly"
  | "formica"
  | "rehau"
  | "hettich"
  | "hafele"
  | "ebco";

export function BrandLogo({ logoKey }: { logoKey: BrandLogoKey }) {
  switch (logoKey) {
    case "royalTouche":
      return <RoyalToucheLogo />;
    case "century":
      return <CenturyLogo />;
    case "airolam":
      return <AirolamLogo />;
    case "greenPly":
      return <GreenPlyLogo />;
    case "formica":
      return <FormicaLogo />;
    case "rehau":
      return <RehauLogo />;
    case "hettich":
      return <HettichLogo />;
    case "hafele":
      return <HafeleLogo />;
    case "ebco":
      return <EbcoLogo />;
  }
}
