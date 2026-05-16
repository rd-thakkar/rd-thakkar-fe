type LogoProps = {
  size?: number;
};

export function Logo({ size = 44 }: LogoProps) {
  const total = 13;
  const spikes = Array.from({ length: total }, (_, i) => {
    const t = i / (total - 1);
    const ang = -160 + t * 140;
    const color = i % 2 === 0 ? "#1a2a5e" : "#d83a2f";
    const len = i === 6 ? 38 : 30 + Math.sin(t * Math.PI) * 10;
    return { ang, color, len };
  });

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-label="R. D. Thakkar & Sons mark"
    >
      <g transform="translate(50 55)">
        {spikes.map((s, i) => {
          const a = (s.ang * Math.PI) / 180;
          const tipX = Math.cos(a) * s.len;
          const tipY = Math.sin(a) * s.len;
          const w = 2.8;
          const perp = a + Math.PI / 2;
          const bx1 = Math.cos(a) * 16 + Math.cos(perp) * w;
          const by1 = Math.sin(a) * 16 + Math.sin(perp) * w;
          const bx2 = Math.cos(a) * 16 - Math.cos(perp) * w;
          const by2 = Math.sin(a) * 16 - Math.sin(perp) * w;
          return (
            <polygon
              key={i}
              points={`${tipX},${tipY} ${bx1},${by1} ${bx2},${by2}`}
              fill={s.color}
            />
          );
        })}
        <circle r="18" fill="#15140f" stroke="#fff" strokeWidth="1.2" />
        <g fill="#fff">
          <rect x="-9" y="-11" width="5" height="22" rx="0.6" />
          <rect x="-9" y="-2" width="11" height="3" />
          <rect x="2" y="-11" width="5" height="11" rx="0.6" />
          <rect x="-9" y="-11" width="16" height="3" />
          <polygon points="2,1 7,1 8,11 3,11" />
        </g>
      </g>
    </svg>
  );
}
