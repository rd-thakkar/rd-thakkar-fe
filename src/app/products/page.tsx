"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowURIcon } from "@/components/ui/Icon";
import { CTABand } from "@/components/layout/CTABand";
import { PageHead } from "@/components/sections/PageHead";
import { SectionHead } from "@/components/sections/SectionHead";
import { BrandStrip } from "@/components/sections/BrandStrip";
import {
  PRODUCTS,
  PRODUCTS_PAGE,
  PRODUCT_FILTERS,
  type ProductCategory,
} from "@/constants/products";

type Filter = "All" | ProductCategory;

export default function ProductsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered =
    filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter);

  return (
    <div className="page-enter">
      <PageHead
        crumb={PRODUCTS_PAGE.head.crumb}
        headline={{
          part1: PRODUCTS_PAGE.head.headline.part1,
          italic: PRODUCTS_PAGE.head.headline.italic,
        }}
        lead={PRODUCTS_PAGE.head.lead}
      />

      <section className="section alt">
        <div className="container">
          <SectionHead
            eyebrow={PRODUCTS_PAGE.brandStripSection.eyebrow}
            headlineStart={PRODUCTS_PAGE.brandStripSection.headlineStart}
            headlineItalic={PRODUCTS_PAGE.brandStripSection.headlineItalic}
            lead={PRODUCTS_PAGE.brandStripSection.lead}
          />
          <BrandStrip />
        </div>
      </section>

      <section className="section pad-sm">
        <div className="container">
          <div className="filter-bar">
            {PRODUCT_FILTERS.map((c) => (
              <button
                key={c}
                className={`chip ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
            <span className="showing-meta">
              Showing {filtered.length} of {PRODUCTS.length}
            </span>
          </div>

          <div className="product-grid">
            {filtered.map((p, i) => (
              <div key={i} className="product">
                <div className="product-img">
                  <Image
                    src={p.image}
                    alt={`${p.name} ${p.italic}`}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="pbadge">{p.cat}</div>
                </div>
                <div className="product-body">
                  <div className="cat-tag">{p.brand}</div>
                  <div className="pname">
                    {p.name} <span className="it">{p.italic}</span>
                  </div>
                  <p className="pdesc">{p.desc}</p>
                  <div className="pfoot">
                    <span className="brand-by">Authorised dealer</span>
                    <Link href="/contact" className="pcta">
                      Enquire <ArrowURIcon size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
