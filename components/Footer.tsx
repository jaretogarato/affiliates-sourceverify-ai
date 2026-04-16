import Link from "next/link";

const CONTACT_EMAIL = "team@sourceverify.ai";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--sv-dark-blue)",
        borderTop: "1px solid var(--sv-border-dark)",
        padding: "48px 24px",
      }}
    >
      <div
        className="mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between"
        style={{ maxWidth: "1200px" }}
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
          <span style={{ color: "#ffffff" }}>Verify</span>
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Main Site", href: "https://sourceverify.ai" },
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
            {
              label: CONTACT_EMAIL,
              href: `mailto:${CONTACT_EMAIL}`,
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="sv-link-hover-dark"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.055px",
                textTransform: "uppercase",
                color: "var(--sv-text-muted-dark)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            fontWeight: 400,
            letterSpacing: "0.05px",
            textTransform: "uppercase",
            color: "var(--sv-text-muted-dark)",
          }}
        >
          © {new Date().getFullYear()} SourceVerify
        </p>
      </div>
    </footer>
  );
}
