import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icon";
import { CTA_BAND } from "@/constants/cta";
import { SITE } from "@/constants/site";

export function CTABand() {
  return (
    <section className="cta-band">
      <div className="container">
        <span className="eyebrow salmon">
          <span className="dot" />
          {CTA_BAND.eyebrow}
        </span>
        <h2>
          {CTA_BAND.headlineStart}
          <span className="it">{CTA_BAND.headlineItalic}</span>
          {CTA_BAND.headlineEnd}
        </h2>
        <div className="cta-row">
          <Link href={CTA_BAND.primary.href} className="btn btn-light">
            {CTA_BAND.primary.label} <ArrowIcon />
          </Link>
          <Link
            href={CTA_BAND.secondary.href}
            className="btn btn-outline btn-line-light"
          >
            {CTA_BAND.secondary.label} <ArrowIcon />
          </Link>
          <span className="hours-note">{SITE.hours.short}</span>
        </div>
      </div>
    </section>
  );
}
