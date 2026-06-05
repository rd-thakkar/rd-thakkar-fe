"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HOME } from "@/constants/home";

type Slide = { src: string; alt: string };

interface HeroCarouselProps {
  slides?: Slide[];
  intervalMs?: number;
}

export function HeroCarousel({
  slides = HOME.hero.carouselImages as unknown as Slide[],
  intervalMs = 4500,
}: HeroCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [slides.length, intervalMs]);

  return (
    <>
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`carousel-slide ${i === active ? "carousel-slide--active" : ""}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 980px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </>
  );
}
