import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/constants/site";
import { NAV, FOOTER_CATEGORIES } from "@/constants/nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <Logo size={56} />
            <div className="name">{SITE.name}</div>
            <p>{SITE.description}</p>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.id}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Categories</h4>
            <ul>
              {FOOTER_CATEGORIES.map((c) => (
                <li key={c.label}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Visit Us</h4>
            <ul>
              <li className="address">
                {SITE.address.line1}, {SITE.address.line2}, {SITE.address.line3}
              </li>
              <li>
                <a href={SITE.contact.primaryPhoneHref}>
                  {SITE.contact.primaryPhone} · {SITE.contact.primaryLabel}
                </a>
              </li>
              <li>
                <a href={SITE.contact.devangPhoneHref}>
                  {SITE.contact.devangPhone} · {SITE.contact.devangLabel}
                </a>
              </li>
              <li>
                <a href={SITE.contact.emailHref}>{SITE.contact.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="f-bottom">
          <span>
            © {SITE.establishedYear} – {SITE.currentYear} {SITE.name}. All
            rights reserved.
          </span>
          <span>{SITE.partnersFooter}</span>
        </div>
      </div>
    </footer>
  );
}
