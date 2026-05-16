import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, ArrowURIcon, CategoryIcon, TrophyIcon } from "@/components/ui/Icon";
import { CTABand } from "@/components/layout/CTABand";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { SectionHead } from "@/components/sections/SectionHead";
import { HOME } from "@/constants/home";
import { CATEGORIES } from "@/constants/categories";
import { BRAND_TICKER } from "@/constants/brands";

export default function HomePage() {
  const tickerRow = (
    <span>
      {BRAND_TICKER.map((b, i) => (
        <span key={i}>
          {b} <span className="dot" />
        </span>
      ))}
    </span>
  );

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <span className="eyebrow">
                  <span className="dot" />
                  {HOME.hero.eyebrow}
                </span>
                <span className="kicker">{HOME.hero.kicker}</span>
              </div>
              <h1>
                {HOME.hero.headline.line1}
                <br />
                {HOME.hero.headline.line2Start}
                <span className="ampersand it">
                  {HOME.hero.headline.line2Mid}
                </span>
                <span className="it">{HOME.hero.headline.line2End}</span>
              </h1>
              <p className="hero-sub">{HOME.hero.sub}</p>
              <div className="hero-cta">
                <Link
                  href={HOME.hero.primaryCta.href}
                  className="btn btn-primary"
                >
                  {HOME.hero.primaryCta.label} <ArrowIcon />
                </Link>
                <Link
                  href={HOME.hero.secondaryCta.href}
                  className="btn btn-outline"
                >
                  {HOME.hero.secondaryCta.label} <ArrowIcon />
                </Link>
              </div>
              <div className="hero-meta">
                {HOME.hero.meta.map((m) => (
                  <div key={m.k} className="item">
                    <span className="k">{m.k}</span>
                    <span className="v">{m.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <Image
                src={HOME.hero.image}
                alt="Refined wood interior"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="badge">
                <span className="yr">{HOME.hero.badge.value}</span>
                <span className="lbl">{HOME.hero.badge.label}</span>
              </div>
              <div className="frame-tag">
                <span className="l">{HOME.hero.featuredTag.label}</span>
                <span className="v">{HOME.hero.featuredTag.value}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="ticker">
        <div className="ticker-track">
          {tickerRow}
          {tickerRow}
        </div>
      </div>

      {/* Stats */}
      <section className="section pad-sm">
        <div className="container">
          <div className="stat-band">
            {HOME.stats.map((s) => (
              <div key={s.l} className="stat">
                <span className="v">
                  {s.v}
                  {"plus" in s && s.plus ? <span className="plus">+</span> : null}
                </span>
                <span className="l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={HOME.categoriesSection.eyebrow}
            headlineStart={HOME.categoriesSection.headlineStart}
            headlineItalic={HOME.categoriesSection.headlineItalic}
            lead={HOME.categoriesSection.lead}
          />
          <div className="cat-grid">
            {CATEGORIES.map((c) => (
              <Link key={c.num} href="/products" className="cat">
                <div className="cat-icon">
                  <CategoryIcon name={c.iconKey} />
                </div>
                <div>
                  <div className="num">{c.num} / 06</div>
                </div>
                <div className="name">
                  {c.name}
                  {c.italic && (
                    <>
                      {" "}
                      <span className="it">{c.italic}</span>
                    </>
                  )}
                </div>
                <div className="desc">{c.desc}</div>
                <div className="cat-arrow">
                  <ArrowURIcon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="section alt">
        <div className="container">
          <div className="heritage">
            <div className="heritage-img">
              <Image
                src={HOME.heritage.image}
                alt="Heritage workshop"
                width={900}
                height={1080}
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <span className="eyebrow">
                <span className="dot" />
                {HOME.heritage.eyebrow}
              </span>
              <h2 className="display heritage-display">
                {HOME.heritage.headlineLine1}
                <br />
                <span className="red-it">
                  {HOME.heritage.headlineLine2Italic}
                </span>
              </h2>
              <p className="heritage-quote">{HOME.heritage.quote}</p>
              <p className="heritage-attr">{HOME.heritage.attribution}</p>
              <div className="heritage-cta">
                <Link
                  href={HOME.heritage.ctaPrimary.href}
                  className="btn btn-outline"
                >
                  {HOME.heritage.ctaPrimary.label} <ArrowIcon />
                </Link>
                <Link
                  href={HOME.heritage.ctaSecondary.href}
                  className="btn btn-ghost"
                >
                  {HOME.heritage.ctaSecondary.label} <ArrowURIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand partners */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={HOME.brandsSection.eyebrow}
            headlineStart={HOME.brandsSection.headlineStart}
            headlineItalic={HOME.brandsSection.headlineItalic}
            headlineEnd={HOME.brandsSection.headlineEnd}
            lead={HOME.brandsSection.lead}
          />
          <BrandStrip />
        </div>
      </section>

      {/* Featured projects */}
      <section className="section alt">
        <div className="container">
          <SectionHead
            eyebrow={HOME.projectsSection.eyebrow}
            headlineStart={HOME.projectsSection.headlineStart}
            headlineItalic={HOME.projectsSection.headlineItalic}
            lead={HOME.projectsSection.lead}
          />
          <div className="project-grid">
            {HOME.projectsSection.items.map((p, i) => (
              <div
                key={i}
                className={`project ${"featured" in p && p.featured ? "p1" : ""}`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="p-meta">
                  <div>
                    <div className="c">{p.meta}</div>
                    <div className="t">{p.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="see-all-row">
            <Link
              href={HOME.projectsSection.seeAll.href}
              className="btn btn-ghost"
            >
              {HOME.projectsSection.seeAll.label} <ArrowURIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Awards preview */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={HOME.awardsSection.eyebrow}
            headlineStart={HOME.awardsSection.headlineStart}
            headlineItalic={HOME.awardsSection.headlineItalic}
            lead={HOME.awardsSection.lead}
          />
          <div className="awards-grid">
            {HOME.awardsSection.items.map((a, i) => (
              <div key={i} className="award">
                <div className="a-emblem">
                  <TrophyIcon />
                </div>
                <div className="a-issuer">{a.issuer}</div>
                <div className="a-title">
                  {a.titleStart}
                  <span className="it">{a.titleItalic}</span>
                  {a.titleEnd}
                </div>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
