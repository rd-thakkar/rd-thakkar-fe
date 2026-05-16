"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ArrowIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icon";
import { NAV } from "@/constants/nav";
import { SITE } from "@/constants/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Logo size={44} />
          <div className="brand-text">
            <span className="name">{SITE.name}</span>
            <span className="since">
              Established · {SITE.establishedYear} · {SITE.city}
            </span>
          </div>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map((n) => (
            <Link
              key={n.id}
              href={n.href}
              className={`nav-link ${isActive(n.href) ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <a href={SITE.contact.primaryPhoneHref} className="phone-pill">
            <PhoneIcon /> {SITE.contact.primaryPhone}
          </a>
          <Link href="/contact" className="btn btn-primary">
            Get a Quote <ArrowIcon />
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
