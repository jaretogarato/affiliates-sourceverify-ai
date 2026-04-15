import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System — SourceVerify Affiliate Portal",
};

const colors = [
  {
    label: "Primary (Cyan)",
    value: "#0a9db4",
    css: "--sv-cyan",
    tw: "sv-cyan",
  },
  {
    label: "Primary Hover",
    value: "#0889a0",
    css: "--sv-cyan-hover",
    tw: "sv-cyan-hover",
  },
  {
    label: "Accent (Coral)",
    value: "#f25d5d",
    css: "--sv-coral",
    tw: "sv-coral",
  },
  {
    label: "Accent Hover",
    value: "#e04d4d",
    css: "--sv-coral-hover",
    tw: "sv-coral-hover",
  },
];

const backgrounds = [
  {
    label: "Background",
    value: "#ffffff",
    css: "--sv-bg",
    tw: "sv-bg",
  },
  {
    label: "Background Alt (Slate 50)",
    value: "#f8fafc",
    css: "--sv-bg-alt",
    tw: "sv-bg-alt",
  },
  {
    label: "Background Tertiary (Slate 100)",
    value: "#f1f5f9",
    css: "--sv-bg-tertiary",
    tw: "sv-bg-tertiary",
  },
];

const textColors = [
  {
    label: "Heading (Slate 900)",
    value: "#0f172a",
    css: "--sv-text-heading",
    tw: "sv-heading",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    label: "Body (Slate 600)",
    value: "#475569",
    css: "--sv-text-body",
    tw: "sv-body",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    label: "Muted (Slate 400)",
    value: "#94a3b8",
    css: "--sv-text-muted",
    tw: "sv-muted",
    sample: "The quick brown fox jumps over the lazy dog",
  },
];

function ColorSwatch({
  label,
  value,
  css,
  tw,
}: {
  label: string;
  value: string;
  css: string;
  tw: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-24 w-full rounded-2xl border border-black/5 shadow-sm"
        style={{ backgroundColor: value }}
      />
      <div>
        <p className="font-sans text-sm font-semibold text-sv-heading">
          {label}
        </p>
        <p className="font-mono text-xs text-sv-muted">{value}</p>
        <p className="font-mono text-xs text-sv-muted">
          var({css})
        </p>
        <p className="font-mono text-xs text-sv-muted">tw: {tw}</p>
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 font-sans">
      {/* Page title */}
      <div className="mb-16">
        <h1 className="font-serif text-4xl font-bold text-sv-heading">
          Design System
        </h1>
        <p className="mt-3 text-lg text-sv-body">
          SourceVerify Affiliate Portal — visual reference for colors,
          typography, components, and spacing.
        </p>
      </div>

      {/* ─── COLORS ─── */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-bold text-sv-heading mb-1">
          Colors
        </h2>
        <p className="text-sv-body mb-8">Brand and UI palette.</p>

        <h3 className="text-sm font-semibold uppercase tracking-wider text-sv-muted mb-4">
          Brand Colors
        </h3>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 mb-10">
          {colors.map((c) => (
            <ColorSwatch key={c.css} {...c} />
          ))}
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-wider text-sv-muted mb-4">
          Backgrounds
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-10">
          {backgrounds.map((c) => (
            <ColorSwatch key={c.css} {...c} />
          ))}
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-wider text-sv-muted mb-4">
          Text Colors
        </h3>
        <div className="space-y-4">
          {textColors.map((c) => (
            <div key={c.css} className="flex items-center gap-6">
              <div
                className="h-10 w-10 shrink-0 rounded-full border border-black/5"
                style={{ backgroundColor: c.value }}
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold" style={{ color: c.value }}>
                  {c.sample}
                </p>
                <p className="font-mono text-xs text-sv-muted">
                  {c.label} · {c.value} · var({c.css})
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TYPOGRAPHY ─── */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-bold text-sv-heading mb-1">
          Typography
        </h2>
        <p className="text-sv-body mb-8">
          Literata (serif) for headings, Outfit (sans-serif) for body and UI.
        </p>

        <div className="space-y-10">
          {/* Heading font */}
          <div className="rounded-2xl border border-black/5 bg-sv-bg-alt p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-sv-muted mb-6">
              Literata — Headings
            </p>
            <div className="space-y-4">
              <p className="font-serif text-5xl font-bold text-sv-heading">
                Heading 1 — 48px
              </p>
              <p className="font-serif text-4xl font-bold text-sv-heading">
                Heading 2 — 36px
              </p>
              <p className="font-serif text-3xl font-bold text-sv-heading">
                Heading 3 — 30px
              </p>
              <p className="font-serif text-2xl font-semibold text-sv-heading">
                Heading 4 — 24px
              </p>
              <p className="font-serif text-xl font-semibold text-sv-heading">
                Heading 5 — 20px
              </p>
              <p className="font-serif text-lg font-semibold text-sv-heading">
                Heading 6 — 18px
              </p>
            </div>
          </div>

          {/* Body font */}
          <div className="rounded-2xl border border-black/5 bg-sv-bg-alt p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-sv-muted mb-6">
              Outfit — Body & UI
            </p>
            <div className="space-y-4">
              <p className="font-sans text-lg text-sv-body">
                Body Large (18px) — SourceVerify is an AI-powered citation
                verification platform trusted by researchers worldwide.
              </p>
              <p className="font-sans text-base text-sv-body">
                Body Default (16px) — Every verification comes with a
                transparent record of what was checked and what was found.
              </p>
              <p className="font-sans text-sm text-sv-body">
                Body Small (14px) — Payouts are processed monthly, net-30 after
                the end of each month.
              </p>
              <p className="font-sans text-xs text-sv-muted">
                Caption (12px) — © 2026 SourceVerify. All rights reserved.
              </p>
            </div>
          </div>

          {/* Font weights */}
          <div className="rounded-2xl border border-black/5 bg-sv-bg-alt p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-sv-muted mb-6">
              Font Weights
            </p>
            <div className="space-y-3 text-lg text-sv-heading">
              <p className="font-sans font-light">Light (300)</p>
              <p className="font-sans font-normal">Regular (400)</p>
              <p className="font-sans font-medium">Medium (500)</p>
              <p className="font-sans font-semibold">Semibold (600)</p>
              <p className="font-sans font-bold">Bold (700)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUTTONS ─── */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-bold text-sv-heading mb-1">
          Buttons
        </h2>
        <p className="text-sv-body mb-8">
          Primary (cyan), accent (coral), and outline variants. All use
          rounded-xl.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <button className="rounded-xl bg-sv-cyan px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-sv-cyan-hover">
            Primary CTA
          </button>
          <button className="rounded-xl bg-sv-coral px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-sv-coral-hover">
            Accent CTA
          </button>
          <button className="rounded-xl border-2 border-sv-cyan px-6 py-3 text-sm font-semibold text-sv-cyan transition-colors duration-300 hover:bg-sv-cyan hover:text-white">
            Outline Primary
          </button>
          <button className="rounded-xl border-2 border-sv-coral px-6 py-3 text-sm font-semibold text-sv-coral transition-colors duration-300 hover:bg-sv-coral hover:text-white">
            Outline Accent
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <button className="rounded-xl bg-sv-cyan px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-sv-cyan-hover">
            Become an Affiliate →
          </button>
          <button className="rounded-xl bg-sv-bg-tertiary px-6 py-3 text-sm font-semibold text-sv-heading transition-colors duration-300 hover:bg-sv-bg-alt">
            Secondary
          </button>
        </div>

        <p className="text-xs text-sv-muted">
          Transitions: 300ms ease-out · Hover: subtle lift or color shift
        </p>
      </section>

      {/* ─── CARDS ─── */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-bold text-sv-heading mb-1">
          Cards
        </h2>
        <p className="text-sv-body mb-8">
          Content cards use rounded-2xl with subtle borders and shadows.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              icon: "🔗",
              title: "Sign up & get your link",
              desc: "Register for free through our affiliate portal.",
            },
            {
              icon: "📢",
              title: "Share with your audience",
              desc: "Recommend SourceVerify to your readers and followers.",
            },
            {
              icon: "💰",
              title: "Earn 25% recurring",
              desc: "Earn 25% of every subscription, every month, for 24 months.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sv-bg-alt text-2xl">
                {card.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-sv-heading mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-sv-body">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BADGES ─── */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-bold text-sv-heading mb-1">
          Badges
        </h2>
        <p className="text-sv-body mb-8">Rounded-full, small text, inline.</p>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-sv-cyan/10 px-4 py-1.5 text-xs font-semibold text-sv-cyan">
            25% Recurring
          </span>
          <span className="rounded-full bg-sv-coral/10 px-4 py-1.5 text-xs font-semibold text-sv-coral">
            98% Accuracy
          </span>
          <span className="rounded-full bg-sv-bg-tertiary px-4 py-1.5 text-xs font-semibold text-sv-heading">
            24 Months
          </span>
          <span className="rounded-full border border-sv-cyan px-4 py-1.5 text-xs font-semibold text-sv-cyan">
            90-Day Cookie
          </span>
          <span className="rounded-full border border-sv-coral px-4 py-1.5 text-xs font-semibold text-sv-coral">
            $30 Min Payout
          </span>
        </div>
      </section>

      {/* ─── SPACING & RADII ─── */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-bold text-sv-heading mb-1">
          Spacing & Radii
        </h2>
        <p className="text-sv-body mb-8">
          Visual reference for border radii used in the design system.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-3 h-20 w-40 rounded-xl border-2 border-dashed border-sv-cyan bg-sv-cyan/5" />
            <p className="text-sm font-semibold text-sv-heading">rounded-xl</p>
            <p className="text-xs text-sv-muted">Buttons</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 h-20 w-40 rounded-2xl border-2 border-dashed border-sv-cyan bg-sv-cyan/5" />
            <p className="text-sm font-semibold text-sv-heading">
              rounded-2xl
            </p>
            <p className="text-xs text-sv-muted">Cards</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 h-20 w-20 rounded-full border-2 border-dashed border-sv-cyan bg-sv-cyan/5" />
            <p className="text-sm font-semibold text-sv-heading">
              rounded-full
            </p>
            <p className="text-xs text-sv-muted">Badges, icons</p>
          </div>
        </div>
      </section>

      {/* ─── LOGO WORDMARK ─── */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-bold text-sv-heading mb-1">
          Logo Wordmark
        </h2>
        <p className="text-sv-body mb-8">
          &quot;Source&quot; in coral, &quot;Verify&quot; in cyan.
        </p>

        <div className="flex flex-wrap items-center gap-10">
          <div className="rounded-2xl bg-white p-8 border border-black/5">
            <span className="text-4xl font-bold tracking-tight">
              <span className="text-sv-coral">Source</span>
              <span className="text-sv-cyan">Verify</span>
            </span>
          </div>
          <div className="rounded-2xl bg-sv-heading p-8">
            <span className="text-4xl font-bold tracking-tight">
              <span className="text-sv-coral">Source</span>
              <span className="text-sv-cyan">Verify</span>
            </span>
          </div>
          <div className="rounded-2xl bg-sv-bg-alt p-8 border border-black/5">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-sv-coral">Source</span>
              <span className="text-sv-cyan">Verify</span>
            </span>
          </div>
        </div>
      </section>

      {/* ─── SAMPLE SECTION LAYOUT ─── */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-bold text-sv-heading mb-1">
          Section Layout Preview
        </h2>
        <p className="text-sv-body mb-8">
          How alternating section backgrounds work together.
        </p>

        <div className="overflow-hidden rounded-2xl border border-black/5">
          <div className="bg-sv-bg px-8 py-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-sv-muted mb-2">
              White Background
            </p>
            <p className="font-serif text-2xl font-bold text-sv-heading">
              Hero / Primary Sections
            </p>
            <p className="mt-2 text-sv-body">bg-sv-bg · #ffffff</p>
          </div>
          <div className="bg-sv-bg-alt px-8 py-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-sv-muted mb-2">
              Slate 50 Background
            </p>
            <p className="font-serif text-2xl font-bold text-sv-heading">
              Alternating Sections
            </p>
            <p className="mt-2 text-sv-body">bg-sv-bg-alt · #f8fafc</p>
          </div>
          <div className="bg-sv-bg-tertiary px-8 py-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-sv-muted mb-2">
              Slate 100 Background
            </p>
            <p className="font-serif text-2xl font-bold text-sv-heading">
              Cards / Calculator
            </p>
            <p className="mt-2 text-sv-body">bg-sv-bg-tertiary · #f1f5f9</p>
          </div>
        </div>
      </section>

      {/* ─── ANIMATION REFERENCE ─── */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl font-bold text-sv-heading mb-1">
          Animation Guidelines
        </h2>
        <p className="text-sv-body mb-8">
          Timing and easing reference (animations will be implemented with
          framer-motion).
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-sv-bg-alt p-6">
            <h3 className="font-sans text-sm font-semibold text-sv-heading mb-3">
              Hover Lift
            </h3>
            <p className="text-sm text-sv-body mb-3">
              Cards and buttons lift slightly on hover.
            </p>
            <p className="font-mono text-xs text-sv-muted">
              duration: 300ms · ease-out · translateY(-2px)
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-sv-bg-alt p-6">
            <h3 className="font-sans text-sm font-semibold text-sv-heading mb-3">
              Scroll Reveal
            </h3>
            <p className="text-sm text-sv-body mb-3">
              Sections fade up as they enter the viewport.
            </p>
            <p className="font-mono text-xs text-sv-muted">
              duration: 400ms · ease-out · translateY(20px) → 0
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-sv-bg-alt p-6">
            <h3 className="font-sans text-sm font-semibold text-sv-heading mb-3">
              Number Counter
            </h3>
            <p className="text-sm text-sv-body mb-3">
              Calculator outputs animate between values.
            </p>
            <p className="font-mono text-xs text-sv-muted">
              duration: 300ms · spring · framer-motion animate
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-sv-bg-alt p-6">
            <h3 className="font-sans text-sm font-semibold text-sv-heading mb-3">
              Accordion Expand
            </h3>
            <p className="text-sm text-sv-body mb-3">
              FAQ items expand/collapse smoothly.
            </p>
            <p className="font-mono text-xs text-sv-muted">
              duration: 300ms · ease-out · height auto
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
