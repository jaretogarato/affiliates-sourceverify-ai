import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System (Impeccable) — SourceVerify Affiliate Portal",
};

const FONT_PRIMARY = '"The Future", system-ui, Arial, sans-serif';
const FONT_MONO = '"PP Neue Montreal Mono", "Space Mono", Georgia, monospace';

/* ── Shared style helpers ── */

function monoLabel(
  size: number = 11,
  weight: number = 500,
  spacing: string = "0.055px"
) {
  return {
    fontFamily: FONT_MONO,
    fontSize: `${size}px`,
    fontWeight: weight,
    letterSpacing: spacing,
    textTransform: "uppercase" as const,
  };
}

/** Spec description line — same as monoLabel but WITHOUT uppercase (fix: all-caps-body) */
function monoSpec(
  size: number = 10,
  weight: number = 400,
  spacing: string = "0.05px"
) {
  return {
    fontFamily: FONT_MONO,
    fontSize: `${size}px`,
    fontWeight: weight,
    letterSpacing: spacing,
  };
}

function sectionNumber(n: string) {
  return (
    <span style={{ ...monoLabel(11), color: "#01012066" }}>{n} /&nbsp;</span>
  );
}

/* ── Page ── */

export default function DesignSystemImpeccablePage() {
  return (
    <div style={{ fontFamily: FONT_PRIMARY, background: "#ffffff" }}>
      {/* ━━━ STICKY NAV ━━━ */}
      <nav
        className="sticky top-0 z-50 flex items-center gap-6 px-6 py-3"
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "-0.16px",
          }}
        >
          <span style={{ color: "#f25d5d" }}>Source</span>
          <span style={{ color: "#010120" }}>Verify</span>
        </span>
        <div className="flex gap-4 ml-auto">
          {[
            "Colors",
            "Typography",
            "Buttons",
            "Cards",
            "Spacing",
            "Elevation",
          ].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "normal",
                color: "#01012066",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="https://sourceverify.tolt.com/login"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: FONT_PRIMARY,
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "-0.14px",
            backgroundColor: "#010120",
            color: "#ffffff",
            borderRadius: "4px",
            padding: "6px 16px",
            textDecoration: "none",
          }}
        >
          Get Started
        </a>
      </nav>

      {/* ━━━ HERO ━━━ */}
      <header
        className="flex flex-col items-center justify-center text-center"
        style={{
          padding: "120px 24px 80px",
          background:
            "linear-gradient(180deg, #f25d5d0c 0%, #bdbbff18 40%, #ffffff 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-1.92px",
            color: "#010120", /* fix: pure-black-white — was #000000 */
          }}
        >
          Design System{" "}
          <br />
          <span style={{ color: "#01012066" }}>Inspired by Together AI</span>
        </h1>
        <p
          className="mt-4"
          style={{
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: 1.50, /* fix: tight-leading — was 1.30 */
            letterSpacing: "-0.18px",
            color: "#01012066",
            maxWidth: "65ch", /* fix: line-length */
          }}
        >
          Auto-generated design token catalog from DESIGN.md — adapted for
          SourceVerify with Brand Coral replacing Brand Magenta.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="#colors"
            style={{
              fontFamily: FONT_PRIMARY,
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "-0.16px",
              backgroundColor: "#010120",
              color: "#ffffff",
              borderRadius: "4px",
              padding: "10px 24px",
              textDecoration: "none",
            }}
          >
            Explore Tokens
          </a>
          <a
            href="/design-system-old"
            style={{
              fontFamily: FONT_PRIMARY,
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "-0.16px",
              backgroundColor: "transparent",
              color: "#010120", /* fix: pure-black-white — was #000000 */
              borderRadius: "4px",
              padding: "10px 24px",
              border: "1px solid rgba(0,0,0,0.08)",
              textDecoration: "none",
            }}
          >
            View Old System
          </a>
        </div>
      </header>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          margin: "0 24px",
        }}
      />

      {/* ━━━ 01 / COLOR PALETTE ━━━ */}
      <section
        id="colors"
        className="mx-auto max-w-[1200px]"
        style={{ padding: "80px 24px" }}
      >
        <p style={{ ...monoLabel(), color: "#01012066", marginBottom: "8px" }}>
          {sectionNumber("01")}Color Palette
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "#010120",
            marginBottom: "48px",
          }}
        >
          Color Palette & Roles
        </h2>

        {/* Primary Brand */}
        <h3
          style={{
            ...monoLabel(11),
            color: "#01012066",
            marginBottom: "16px",
          }}
        >
          Primary Brand
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
          {[
            {
              label: "Brand Coral",
              hex: "#f25d5d",
              desc: "Gradient illustrations only, never UI chrome",
            },
            {
              label: "Brand Orange",
              hex: "#fc4c02",
              desc: "Gradient endpoints, warm accent moments",
            },
            {
              label: "Dark Blue",
              hex: "#010120",
              desc: "Dark surface, research sections, footer",
            },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div style={{ height: "80px", backgroundColor: c.hex }} />
              <div style={{ padding: "16px" }}>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    letterSpacing: "-0.16px",
                    color: "#010120",
                  }}
                >
                  {c.label}
                </p>
                <p style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066" }}>
                  {c.hex}
                </p>
                <p
                  className="mt-1"
                  style={{ fontSize: "14px", color: "#01012066" }}
                >
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary & Accent */}
        <h3
          style={{
            ...monoLabel(11),
            color: "#01012066",
            marginBottom: "16px",
          }}
        >
          Secondary & Accent
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-12">
          {[
            {
              label: "Soft Lavender",
              hex: "#bdbbff",
              desc: "Subtle accents, secondary indicators, highlights",
            },
            {
              label: "Black 40",
              hex: "#00000066",
              desc: "De-emphasized overlays, secondary text",
            },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div style={{ height: "64px", backgroundColor: c.hex }} />
              <div style={{ padding: "16px" }}>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    letterSpacing: "-0.16px",
                  }}
                >
                  {c.label}
                </p>
                <p style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066" }}>
                  {c.hex}
                </p>
                <p
                  className="mt-1"
                  style={{ fontSize: "14px", color: "#01012066" }}
                >
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Surface & Background */}
        <h3
          style={{
            ...monoLabel(11),
            color: "#01012066",
            marginBottom: "16px",
          }}
        >
          Surface & Background
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {[
            {
              label: "Pure White",
              hex: "#ffffff",
              desc: "Primary light-section page background",
            },
            {
              label: "Dark Blue",
              hex: "#010120",
              desc: "Research, footer, technical sections",
            },
            {
              label: "Glass Light",
              hex: "rgba(255,255,255,0.12)",
              desc: "Frosted glass button backgrounds on dark",
              bgParent: "#010120",
            },
            {
              label: "Glass Dark",
              hex: "rgba(0,0,0,0.08)",
              desc: "Subtle tinted surfaces on light sections",
            },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "64px",
                  backgroundColor:
                    "bgParent" in c ? (c as { bgParent: string }).bgParent : c.hex,
                  position: "relative",
                }}
              >
                {"bgParent" in c && (
                  <div
                    style={{
                      position: "absolute",
                      inset: "8px",
                      backgroundColor: c.hex,
                      borderRadius: "4px",
                    }}
                  />
                )}
              </div>
              <div style={{ padding: "16px" }}>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    letterSpacing: "-0.16px",
                  }}
                >
                  {c.label}
                </p>
                <p style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066" }}>
                  {c.hex}
                </p>
                <p
                  className="mt-1"
                  style={{ fontSize: "14px", color: "#01012066" }}
                >
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Neutrals & Text */}
        <h3
          style={{
            ...monoLabel(11),
            color: "#01012066",
            marginBottom: "16px",
          }}
        >
          Neutrals & Text
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {[
            {
              label: "Pure Black",
              hex: "#000000",
              desc: "Primary text on light surfaces",
            },
            {
              label: "Pure White",
              hex: "#ffffff",
              desc: "Primary text on dark surfaces",
            },
            {
              label: "Black 8%",
              hex: "rgba(0,0,0,0.08)",
              desc: "Borders on light surfaces",
            },
            {
              label: "White 12%",
              hex: "rgba(255,255,255,0.12)",
              desc: "Borders on dark surfaces",
              bgParent: "#010120",
            },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "48px",
                  backgroundColor:
                    "bgParent" in c ? (c as { bgParent: string }).bgParent : c.hex,
                  position: "relative",
                }}
              >
                {"bgParent" in c && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderBottom: `2px solid ${c.hex}`,
                    }}
                  />
                )}
              </div>
              <div style={{ padding: "12px 16px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "-0.14px",
                  }}
                >
                  {c.label}
                </p>
                <p style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066" }}>
                  {c.hex}
                </p>
                <p
                  className="mt-1"
                  style={{ fontSize: "13px", color: "#01012066" }}
                >
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient System */}
        <h3
          style={{
            ...monoLabel(11),
            color: "#01012066",
            marginBottom: "16px",
          }}
        >
          Gradient System
        </h3>
        <div
          style={{
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "120px",
              background:
                "linear-gradient(135deg, #f25d5d44 0%, #bdbbff55 50%, #a5d8ff44 100%)",
            }}
          />
          <div style={{ padding: "16px" }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "-0.16px",
              }}
            >
              Pastel Cloud Gradient
            </p>
            <p style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066" }}>
              CORAL → LAVENDER → BLUE
            </p>
            <p
              className="mt-1"
              style={{ fontSize: "14px", color: "#01012066" }}
            >
              Hero illustrations, decorative backgrounds, abstract forms
            </p>
          </div>
        </div>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          margin: "0 24px",
        }}
      />

      {/* ━━━ 02 / TYPOGRAPHY ━━━ */}
      <section
        id="typography"
        className="mx-auto max-w-[1200px]"
        style={{ padding: "80px 24px" }}
      >
        <p style={{ ...monoLabel(), color: "#01012066", marginBottom: "8px" }}>
          {sectionNumber("02")}Typography Scale
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "#010120",
            marginBottom: "48px",
          }}
        >
          Typography Rules
        </h2>

        {/* Primary font samples */}
        <div className="space-y-8 mb-12">
          {[
            {
              role: "Display / Hero",
              specs: '64px / 500 / 1.10 / -1.92px',
              size: "64px",
              weight: 500,
              lineHeight: "1.10",
              ls: "-1.92px",
              text: "Display Hero",
            },
            {
              role: "Section Heading",
              specs: '40px / 500 / 1.20 / -0.8px',
              size: "40px",
              weight: 500,
              lineHeight: "1.20",
              ls: "-0.8px",
              text: "Section Heading",
            },
            {
              role: "Sub-heading",
              specs: '28px / 500 / 1.15 / -0.42px',
              size: "28px",
              weight: 500,
              lineHeight: "1.15",
              ls: "-0.42px",
              text: "Sub-heading",
            },
            {
              role: "Feature Title",
              specs: '22px / 500 / 1.15 / -0.22px',
              size: "22px",
              weight: 500,
              lineHeight: "1.15",
              ls: "-0.22px",
              text: "Feature Title",
            },
          ].map((t) => (
            <div
              key={t.role}
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: FONT_PRIMARY,
                  fontSize: t.size,
                  fontWeight: t.weight,
                  lineHeight: t.lineHeight,
                  letterSpacing: t.ls,
                  color: "#010120",
                  marginBottom: "8px",
                }}
              >
                {t.text}
              </p>
              {/* fix: all-caps-body — use monoSpec (no uppercase) for long spec lines */}
              <p style={{ ...monoSpec(), color: "#01012066" }}>
                {t.role} -- {t.specs} -- &quot;The Future&quot; (system-ui)
              </p>
            </div>
          ))}

          {/* Body samples - text is the sample content itself */}
          {[
            {
              role: "Body Large",
              specs: '18px / 400 / 1.50 / -0.18px',
              size: "18px",
              weight: 400,
              lineHeight: "1.50", /* fix: tight-leading — was 1.30 */
              ls: "-0.18px",
              text: "Body large text for descriptions and section introductions. The Future provides geometric modernist aesthetic for all UI copy.",
            },
            {
              role: "Body / Button",
              specs: '16px / 400 / 1.50 / -0.16px',
              size: "16px",
              weight: 400,
              lineHeight: "1.50", /* fix: tight-leading — was 1.30 */
              ls: "-0.16px",
              text: "Standard body text for paragraphs, navigation links, and button labels. Tight line-height creates dense, information-rich layouts.",
            },
            {
              role: "Caption",
              specs: '14px / 400 / 1.40 / normal',
              size: "14px",
              weight: 400,
              lineHeight: "1.40",
              ls: "normal",
              text: "Caption and metadata text for descriptions",
            },
          ].map((t) => (
            <div
              key={t.role}
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: FONT_PRIMARY,
                  fontSize: t.size,
                  fontWeight: t.weight,
                  lineHeight: t.lineHeight,
                  letterSpacing: t.ls,
                  color: "#010120",
                  marginBottom: "8px",
                  maxWidth: "65ch", /* fix: line-length */
                }}
              >
                {t.text}
              </p>
              {/* fix: all-caps-body — use monoSpec (no uppercase) for long spec lines */}
              <p style={{ ...monoSpec(), color: "#01012066" }}>
                {t.role} -- {t.specs} -- &quot;The Future&quot; (system-ui)
              </p>
            </div>
          ))}
        </div>

        {/* Mono samples */}
        <div className="space-y-8">
          {[
            {
              role: "Mono Label",
              specs: '16px / 500 / 1.00 / 0.08px / uppercase',
              size: "16px",
              weight: 500,
              ls: "0.08px",
              text: "MONO SECTION LABEL",
            },
            {
              role: "Mono Small",
              specs: '11px / 500 / 1.40 / 0.055px / uppercase',
              size: "11px",
              weight: 500,
              ls: "0.055px",
              text: "MONO SMALL UPPERCASE TAG",
            },
            {
              role: "Mono Micro",
              specs: '10px / 400 / 1.40 / 0.05px / uppercase',
              size: "10px",
              weight: 400,
              ls: "0.05px",
              text: "MONO MICRO LABEL",
            },
          ].map((t) => (
            <div
              key={t.role}
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: t.size,
                  fontWeight: t.weight,
                  letterSpacing: t.ls,
                  textTransform: "uppercase",
                  color: "#010120",
                  marginBottom: "8px",
                }}
              >
                {t.text}
              </p>
              {/* fix: all-caps-body — use monoSpec (no uppercase) for long spec lines */}
              <p style={{ ...monoSpec(), color: "#01012066" }}>
                {t.role} -- {t.specs} -- &quot;PP Neue Montreal Mono&quot;
                (Space Mono)
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          margin: "0 24px",
        }}
      />

      {/* ━━━ 03 / BUTTONS ━━━ */}
      <section
        id="buttons"
        className="mx-auto max-w-[1200px]"
        style={{ padding: "80px 24px" }}
      >
        <p style={{ ...monoLabel(), color: "#01012066", marginBottom: "8px" }}>
          {sectionNumber("03")}Button Variants
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "#010120",
            marginBottom: "48px",
          }}
        >
          Buttons
        </h2>

        <div className="flex flex-wrap items-center gap-4 mb-10">
          {/* Dark Solid CTA */}
          <div className="text-center">
            <button
              style={{
                fontFamily: FONT_PRIMARY,
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "-0.16px",
                backgroundColor: "#010120",
                color: "#ffffff",
                borderRadius: "4px",
                padding: "10px 24px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>
            <p
              className="mt-2"
              style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066" }}
            >
              DARK SOLID CTA
            </p>
          </div>

          {/* Outlined Light */}
          <div className="text-center">
            <button
              style={{
                fontFamily: FONT_PRIMARY,
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "-0.16px",
                backgroundColor: "transparent",
                color: "#010120",
                borderRadius: "4px",
                padding: "10px 24px",
                border: "1px solid rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}
            >
              View Docs
            </button>
            <p
              className="mt-2"
              style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066" }}
            >
              OUTLINED LIGHT
            </p>
          </div>

          {/* Glass on Dark */}
          <div
            className="text-center"
            style={{
              backgroundColor: "#010120",
              borderRadius: "8px",
              padding: "16px 20px",
            }}
          >
            <button
              style={{
                fontFamily: FONT_PRIMARY,
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "-0.16px",
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "#ffffff",
                borderRadius: "4px",
                padding: "10px 24px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Explore
            </button>
            <p
              className="mt-2"
              style={{
                ...monoLabel(10, 400, "0.05px"),
                color: "rgba(255,255,255,0.5)",
              }}
            >
              GLASS ON DARK
            </p>
          </div>

          {/* Badge / Tag */}
          <div className="text-center">
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "0.08px",
                textTransform: "uppercase",
                backgroundColor: "rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "4px",
                padding: "2px 8px",
                color: "#010120",
              }}
            >
              INFERENCE
            </span>
            <p
              className="mt-2"
              style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066" }}
            >
              BADGE / TAG
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <h3
          style={{
            ...monoLabel(11),
            color: "#01012066",
            marginBottom: "16px",
          }}
        >
          Stats Bar
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { stat: "2x", desc: "Faster inference speed" },
            { stat: "60%", desc: "Cost reduction" },
            { stat: "90%", desc: "GPU utilization" },
          ].map((s) => (
            <div
              key={s.stat}
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                padding: "32px 24px",
                /* fix: dark-glow — removed boxShadow */
              }}
            >
              <p
                style={{
                  fontFamily: FONT_PRIMARY,
                  fontSize: "64px",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-1.92px",
                  color: "#010120",
                }}
              >
                {s.stat}
              </p>
              <p
                className="mt-2"
                style={{
                  fontFamily: FONT_PRIMARY,
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#01012066",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          margin: "0 24px",
        }}
      />

      {/* ━━━ 04 / CARDS ━━━ */}
      <section
        id="cards"
        className="mx-auto max-w-[1200px]"
        style={{ padding: "80px 24px" }}
      >
        <p style={{ ...monoLabel(), color: "#01012066", marginBottom: "8px" }}>
          {sectionNumber("04")}Card Examples
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "#010120",
            marginBottom: "48px",
          }}
        >
          Cards & Containers
        </h2>

        {/* Light cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-10">
          {/* Contained */}
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <p style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066", marginBottom: "12px" }}>
              CONTAINED
            </p>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 500,
                letterSpacing: "-0.22px",
                color: "#010120",
                marginBottom: "8px",
              }}
            >
              Standard Card
            </h3>
            <p style={{ fontSize: "14px", color: "#01012066", lineHeight: 1.4, maxWidth: "65ch" /* fix: line-length */ }}>
              Content card with 1px solid rgba(0,0,0,0.08) border and 8px
              radius. The default container for features and content sections on
              light surfaces.
            </p>
          </div>

          {/* Elevated */}
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "8px",
              padding: "24px",
              boxShadow: "rgba(1, 1, 32, 0.1) 0px 4px 10px",
            }}
          >
            <p style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066", marginBottom: "12px" }}>
              ELEVATED
            </p>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 500,
                letterSpacing: "-0.22px",
                color: "#010120",
                marginBottom: "8px",
              }}
            >
              Shadow Card
            </h3>
            <p style={{ fontSize: "14px", color: "#01012066", lineHeight: 1.4, maxWidth: "65ch" /* fix: line-length */ }}>
              Elevated card with dark-blue-tinted shadow (rgba(1,1,32,0.1) 0px
              4px 10px). Used for feature cards and hover states. Subtle
              blue-ish cast.
            </p>
          </div>

          {/* Accent */}
          <div
            style={{
              border: "1px solid #bdbbff",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <p style={{ ...monoLabel(10, 400, "0.05px"), color: "#7c79c9" /* fix: low-contrast — was #bdbbff */, marginBottom: "12px" }}>
              ACCENT
            </p>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 500,
                letterSpacing: "-0.22px",
                color: "#010120",
                marginBottom: "8px",
              }}
            >
              Lavender Accent
            </h3>
            <p style={{ fontSize: "14px", color: "#01012066", lineHeight: 1.4, maxWidth: "65ch" /* fix: line-length */ }}>
              Card with soft lavender border accent. Used for highlighted or
              selected content where a gentle visual distinction is needed.
            </p>
          </div>
        </div>

        {/* Dark zone cards */}
        <p
          style={{
            ...monoLabel(11),
            color: "#01012066",
            marginBottom: "16px",
          }}
        >
          Dark Zone Cards
        </p>
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          style={{
            backgroundColor: "#010120",
            borderRadius: "8px",
            padding: "24px",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <p
              style={{
                ...monoLabel(10, 400, "0.05px"),
                color: "rgba(255,255,255,0.5)",
                marginBottom: "12px",
              }}
            >
              RESEARCH
            </p>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 500,
                letterSpacing: "-0.22px",
                color: "#ffffff",
                marginBottom: "8px",
              }}
            >
              Research Paper
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.4,
                maxWidth: "65ch", /* fix: line-length */
              }}
            >
              Card on Dark Blue (#010120) surface with rgba(255,255,255,0.12)
              border. Used in research and technical content sections.
            </p>
          </div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <p
              style={{
                ...monoLabel(10, 400, "0.05px"),
                color: "rgba(255,255,255,0.5)",
                marginBottom: "12px",
              }}
            >
              TECHNICAL
            </p>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 500,
                letterSpacing: "-0.22px",
                color: "#ffffff",
                marginBottom: "8px",
              }}
            >
              Technical Content
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.4,
                maxWidth: "65ch", /* fix: line-length */
              }}
            >
              The dark zone creates a distinct academic atmosphere, separating
              research messaging from the bright business sections.
            </p>
          </div>
        </div>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          margin: "0 24px",
        }}
      />

      {/* ━━━ 05 / SPACING ━━━ */}
      <section
        id="spacing"
        className="mx-auto max-w-[1200px]"
        style={{ padding: "80px 24px" }}
      >
        <p style={{ ...monoLabel(), color: "#01012066", marginBottom: "8px" }}>
          {sectionNumber("05")}Spacing Scale
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "#010120",
            marginBottom: "8px",
          }}
        >
          Spacing System
        </h2>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 400,
            letterSpacing: "-0.16px",
            color: "#01012066",
            marginBottom: "48px",
          }}
        >
          Base unit: 8px. Scale: 1px to 120px.
        </p>

        <div className="flex flex-wrap items-end gap-4">
          {[1, 2, 4, 8, 12, 16, 20, 24, 32, 44, 48].map((px) => (
            <div
              key={px}
              className="flex flex-col items-center gap-2"
              style={{ minWidth: "40px" }}
            >
              <div
                style={{
                  width: "40px",
                  height: `${Math.max(px, 4)}px`,
                  backgroundColor: "#bdbbff",
                  borderRadius: "2px",
                }}
              />
              <p
                style={{
                  ...monoLabel(10, 400, "0.05px"),
                  color: "#01012066",
                }}
              >
                {px}px
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          margin: "0 24px",
        }}
      />

      {/* ━━━ 06 / BORDER RADIUS ━━━ */}
      <section
        className="mx-auto max-w-[1200px]"
        style={{ padding: "80px 24px" }}
      >
        <p style={{ ...monoLabel(), color: "#01012066", marginBottom: "8px" }}>
          {sectionNumber("06")}Border Radius Scale
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "#010120",
            marginBottom: "8px",
          }}
        >
          Border Radius
        </h2>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 400,
            letterSpacing: "-0.16px",
            color: "#01012066",
            marginBottom: "48px",
          }}
        >
          Deliberately restrained: only 4px and 8px. No pills, no generous
          rounding.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="text-center">
            <div
              className="mx-auto mb-4"
              style={{
                width: "200px",
                height: "80px",
                borderRadius: "4px",
                border: "2px dashed #bdbbff",
                backgroundColor: "#bdbbff15",
              }}
            />
            <p
              style={{
                fontSize: "22px",
                fontWeight: 500,
                letterSpacing: "-0.22px",
                color: "#010120",
              }}
            >
              4px
            </p>
            <p style={{ fontSize: "14px", color: "#01012066" }}>
              Buttons, badges, tags
            </p>
          </div>
          <div className="text-center">
            <div
              className="mx-auto mb-4"
              style={{
                width: "200px",
                height: "80px",
                borderRadius: "8px",
                border: "2px dashed #bdbbff",
                backgroundColor: "#bdbbff15",
              }}
            />
            <p
              style={{
                fontSize: "22px",
                fontWeight: 500,
                letterSpacing: "-0.22px",
                color: "#010120",
              }}
            >
              8px
            </p>
            <p style={{ fontSize: "14px", color: "#01012066" }}>
              Cards, containers
            </p>
          </div>
        </div>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          margin: "0 24px",
        }}
      />

      {/* ━━━ 07 / ELEVATION ━━━ */}
      <section
        id="elevation"
        className="mx-auto max-w-[1200px]"
        style={{ padding: "80px 24px 120px" }}
      >
        <p style={{ ...monoLabel(), color: "#01012066", marginBottom: "8px" }}>
          {sectionNumber("07")}Elevation & Depth
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "#010120",
            marginBottom: "48px",
          }}
        >
          Depth & Elevation
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Level 0 - Flat */}
          <div>
            <div
              className="flex items-center justify-center"
              style={{
                height: "120px",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
              }}
            >
              <p style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066" }}>
                LEVEL 0
              </p>
            </div>
            <div className="mt-3">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "-0.16px",
                }}
              >
                Flat
              </p>
              <p style={{ fontSize: "13px", color: "#01012066" }}>
                No shadow, no border. Page background and text blocks.
              </p>
            </div>
          </div>

          {/* Level 1 - Contained */}
          <div>
            <div
              className="flex items-center justify-center"
              style={{
                height: "120px",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <p style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066" }}>
                LEVEL 1
              </p>
            </div>
            <div className="mt-3">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "-0.16px",
                }}
              >
                Contained
              </p>
              <p style={{ fontSize: "13px", color: "#01012066" }}>
                1px solid rgba(0,0,0,0.08) on light or rgba(255,255,255,0.12)
                on dark. Cards, badges, containers.
              </p>
            </div>
          </div>

          {/* Level 2 - Elevated */}
          <div>
            <div
              className="flex items-center justify-center"
              style={{
                height: "120px",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "rgba(1, 1, 32, 0.1) 0px 4px 10px",
              }}
            >
              <p style={{ ...monoLabel(10, 400, "0.05px"), color: "#01012066" }}>
                LEVEL 2
              </p>
            </div>
            <div className="mt-3">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "-0.16px",
                }}
              >
                Elevated
              </p>
              <p style={{ fontSize: "13px", color: "#01012066" }}>
                Dark-blue-tinted shadow: rgba(1,1,32,0.1) 0px 4px 10px.
                Feature cards and hover states.
              </p>
            </div>
          </div>

          {/* Level 3 - Dark Zone */}
          <div>
            <div
              className="flex items-center justify-center"
              style={{
                height: "120px",
                borderRadius: "8px",
                backgroundColor: "#010120",
              }}
            >
              <p
                style={{
                  ...monoLabel(10, 400, "0.05px"),
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                LEVEL 3
              </p>
            </div>
            <div className="mt-3">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "-0.16px",
                }}
              >
                Dark Zone
              </p>
              <p style={{ fontSize: "13px", color: "#01012066" }}>
                Dark Blue (#010120) full-width background. Research, footer,
                technical sections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
