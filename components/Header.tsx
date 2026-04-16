"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TOLT_URL = "https://sourceverify.tolt.com/login";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 flex items-center gap-6 px-6 py-3"
      style={{
        backgroundColor: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--sv-border-light)",
      }}
    >
      {/* Wordmark */}
      <Link
        href="/"
        style={{
          fontSize: "16px",
          fontWeight: 500,
          letterSpacing: "-0.16px",
          textDecoration: "none",
        }}
      >
        <span style={{ color: "var(--sv-coral)" }}>Source</span>
        <span style={{ color: "var(--sv-dark-blue)" }}>Verify</span>
      </Link>

      {/* Nav links */}
      <div className="flex gap-4 ml-auto">
        {[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
        ].map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="sv-link-hover"
            aria-current={pathname === link.href ? "page" : undefined}
            style={{
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "normal",
              color:
                pathname === link.href
                  ? "var(--sv-text-primary)"
                  : "var(--sv-text-muted)",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <a
        href={TOLT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sv-btn-hover"
        style={{
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "-0.14px",
          backgroundColor: "var(--sv-dark-blue)",
          color: "#ffffff",
          borderRadius: "var(--sv-radius-sm)",
          padding: "6px 16px",
          textDecoration: "none",
        }}
      >
        Become an Affiliate
      </a>
    </nav>
  );
}
