"use client";

import Image from "next/image";
import { useState } from "react";
import { CTABand } from "@/components/layout/CTABand";
import { PageHead } from "@/components/sections/PageHead";
import {
  GALLERY,
  GALLERY_FILTERS,
  GALLERY_PAGE,
  type GalleryCategory,
} from "@/constants/gallery";

type Filter = "All" | GalleryCategory;

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const items =
    filter === "All" ? GALLERY : GALLERY.filter((g) => g.cat === filter);

  return (
    <div className="page-enter">
      <PageHead
        crumb={GALLERY_PAGE.head.crumb}
        headline={{
          part1: GALLERY_PAGE.head.headline.part1,
          italic: GALLERY_PAGE.head.headline.italic,
        }}
        lead={GALLERY_PAGE.head.lead}
      />

      <section className="section pad-sm">
        <div className="container">
          <div className="filter-bar">
            {GALLERY_FILTERS.map((c) => (
              <button
                key={c}
                className={`chip ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {items.map((g, i) => (
              <div
                key={i}
                className="g"
                style={{
                  gridColumn: `span ${g.colSpan}`,
                  gridRow: `span ${g.rowSpan}`,
                }}
              >
                <Image
                  src={g.src}
                  alt={g.label}
                  fill
                  sizes="(max-width: 800px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="glabel">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
