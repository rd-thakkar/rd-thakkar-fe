import { BRANDS } from "@/constants/brands";

export function BrandStrip() {
  return (
    <div className="brands">
      {BRANDS.map((b) => (
        <div key={b.name} className="brand-cell">
          <div className={`brand-name ${b.variant ?? "default"}`}>{b.name}</div>
          <div className="brand-tag">{b.tag}</div>
        </div>
      ))}
    </div>
  );
}
