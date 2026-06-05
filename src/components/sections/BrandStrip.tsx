import { BRANDS } from "@/constants/brands";
import { BrandLogo } from "@/components/ui/BrandLogos";

export function BrandStrip() {
  return (
    <div className="brands">
      {BRANDS.map((b) => (
        <div key={b.name} className="brand-cell">
          <div className="brand-logo-wrap">
            <BrandLogo logoKey={b.logoKey} />
          </div>
          <div className="brand-tag">{b.tag}</div>
        </div>
      ))}
    </div>
  );
}
