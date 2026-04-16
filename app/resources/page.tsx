import type { Metadata } from "next";
import CopyBlock from "@/components/CopyBlock";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Quick start guide, media kit, product demo, copy templates, and brand guidelines for SourceVerify affiliates.",
};

const DEMO_EMBED =
  "https://iframe.mediadelivery.net/embed/600585/c4ab439c-1986-41c0-b7f8-14eebac9eb05";

export default function ResourcesPage() {
  return (
    <>
      {/* ━━━ HERO ━━━ */}
      <header
        className="flex flex-col items-center justify-center text-center"
        style={{
          padding: "100px 24px 60px",
          background:
            "linear-gradient(180deg, #f25d5d0c 0%, #bdbbff18 40%, #ffffff 100%)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.055px",
            textTransform: "uppercase",
            color: "var(--sv-text-muted)",
            marginBottom: "8px",
          }}
        >
          Affiliate Resources
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 64px)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-1.92px",
            color: "var(--sv-text-primary)",
          }}
        >
          Everything You Need
        </h1>
        <p
          className="mt-4"
          style={{
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: 1.3,
            letterSpacing: "-0.18px",
            color: "var(--sv-text-muted)",
            maxWidth: "600px",
          }}
        >
          Copy templates, brand assets, product demos, and talking points —
          ready to use.
        </p>
      </header>

      {/* ━━━ 01 / QUICK START ━━━ */}
      <section
        className="mx-auto"
        style={{
          maxWidth: "1200px",
          padding: "80px 24px",
          borderTop: "1px solid var(--sv-border-light)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.055px",
            textTransform: "uppercase",
            color: "var(--sv-text-muted)",
            marginBottom: "8px",
          }}
        >
          <span style={{ color: "var(--sv-text-muted)" }}>
            01 /&nbsp;
          </span>
          Quick Start
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "var(--sv-text-primary)",
            marginBottom: "48px",
          }}
        >
          Get Started in 3 Minutes
        </h2>

        <ol className="space-y-4" style={{ listStyle: "none", padding: 0 }}>
          {[
            {
              step: "1",
              title: "Log in to your Tolt dashboard",
              desc: "Grab your unique referral link",
            },
            {
              step: "2",
              title: "Download the media kit",
              desc: "Logos, brand colors, and a one-pager you can share",
            },
            {
              step: "3",
              title: "Watch the product demo",
              desc: "Understand what SourceVerify does so you can speak to it authentically",
            },
            {
              step: "4",
              title: "Pick your channel",
              desc: "Choose copy templates below for social, email, or blog",
            },
            {
              step: "5",
              title: "Start sharing",
              desc: "Post your link and start earning",
            },
          ].map((item) => (
            <li
              key={item.step}
              className="flex items-start gap-4"
              style={{
                border: "1px solid var(--sv-border-light)",
                borderRadius: "var(--sv-radius-md)",
                padding: "20px 24px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.05px",
                  textTransform: "uppercase",
                  backgroundColor: "var(--sv-glass-dark)",
                  border: "1px solid var(--sv-border-light)",
                  borderRadius: "var(--sv-radius-sm)",
                  padding: "2px 8px",
                  flexShrink: 0,
                }}
              >
                {item.step}
              </span>
              <div>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    letterSpacing: "-0.16px",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "var(--sv-text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ━━━ 02 / MEDIA KIT ━━━ */}
      <section
        style={{
          backgroundColor: "var(--sv-bg-dark)",
          padding: "80px 24px",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.055px",
              textTransform: "uppercase",
              color: "var(--sv-text-muted-dark)",
              marginBottom: "8px",
            }}
          >
            02 /&nbsp;Media Kit
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Media Kit
          </h2>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: "-0.18px",
              color: "var(--sv-text-muted-dark)",
              marginBottom: "32px",
              maxWidth: "600px",
            }}
          >
            Download our brand assets — everything you need to represent
            SourceVerify accurately.
          </p>

          <div
            style={{
              border: "1px solid var(--sv-border-dark)",
              borderRadius: "var(--sv-radius-md)",
              padding: "24px",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "-0.16px",
                color: "#ffffff",
                marginBottom: "8px",
              }}
            >
              What&apos;s included
            </p>
            <ul
              className="space-y-2 mb-6"
              style={{
                fontSize: "14px",
                color: "var(--sv-text-muted-dark)",
                lineHeight: 1.4,
                listStyle: "none",
                padding: 0,
              }}
            >
              <li>— Logos (horizontal, stacked, symbol-only; light &amp; dark)</li>
              <li>— Brand color reference card</li>
              <li>— Product one-pager</li>
            </ul>
            <a
              href="/media-kit.zip"
              download
              style={{
                display: "inline-block",
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "-0.16px",
                backgroundColor: "var(--sv-glass-light)",
                color: "#ffffff",
                borderRadius: "var(--sv-radius-sm)",
                padding: "10px 24px",
                border: "1px solid var(--sv-border-dark)",
                textDecoration: "none",
              }}
            >
              Download Media Kit (.zip) →
            </a>
          </div>
        </div>
      </section>

      {/* ━━━ 03 / PRODUCT DEMO ━━━ */}
      <section
        className="mx-auto"
        style={{
          maxWidth: "1200px",
          padding: "80px 24px",
          borderTop: "1px solid var(--sv-border-light)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.055px",
            textTransform: "uppercase",
            color: "var(--sv-text-muted)",
            marginBottom: "8px",
          }}
        >
          03 /&nbsp;Product Demo
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "var(--sv-text-primary)",
            marginBottom: "16px",
          }}
        >
          See SourceVerify in Action
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: 1.3,
            letterSpacing: "-0.18px",
            color: "var(--sv-text-muted)",
            marginBottom: "32px",
            maxWidth: "600px",
          }}
        >
          Share this demo with your audience so they can see exactly how
          citation verification works.
        </p>

        {/* Video embed */}
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "var(--sv-radius-md)",
            border: "1px solid var(--sv-border-light)",
            marginBottom: "32px",
          }}
        >
          <iframe
            src={DEMO_EMBED}
            title="SourceVerify Product Demo"
            loading="lazy"
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Talking points */}
        <h3
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.055px",
            textTransform: "uppercase",
            color: "var(--sv-text-muted)",
            marginBottom: "16px",
          }}
        >
          Key Talking Points for This Demo
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            "Paste a bibliography and get verification results in under a minute",
            "SourceVerify checks if each reference actually exists — catching AI hallucinations",
            "Errors are automatically repaired: wrong year, misspelled author, missing DOI",
            "Full audit trail shows exactly what was checked and what was found",
          ].map((point) => (
            <div
              key={point}
              style={{
                border: "1px solid var(--sv-border-light)",
                borderRadius: "var(--sv-radius-md)",
                padding: "16px 20px",
                fontSize: "14px",
                fontWeight: 400,
                color: "var(--sv-text-muted)",
                lineHeight: 1.4,
              }}
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* ━━━ 04 / SUGGESTED COPY ━━━ */}
      <section
        style={{
          backgroundColor: "var(--sv-bg-dark)",
          padding: "80px 24px",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.055px",
              textTransform: "uppercase",
              color: "var(--sv-text-muted-dark)",
              marginBottom: "8px",
            }}
          >
            04 /&nbsp;Suggested Copy
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Ready-to-Use Copy
          </h2>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: "-0.18px",
              color: "var(--sv-text-muted-dark)",
              marginBottom: "48px",
            }}
          >
            Grab these templates and customize them for your audience.
          </p>

          <div className="space-y-8">
            <CopyBlock label="Twitter/X (short)">
              {`I've been using @SourceVerify to check my citations before submission — it catches errors I'd never find manually. 98% accuracy, and it takes minutes instead of hours. Check it out → [your affiliate link]`}
            </CopyBlock>

            <CopyBlock label="Twitter/X (thread opener)">
              {`If you use AI to help with research writing, you need to verify your citations. AI hallucinates references — it's a known problem. I use SourceVerify to catch these before they embarrass me. Here's how it works 🧵 [your affiliate link]`}
            </CopyBlock>

            <CopyBlock label="LinkedIn">
              {`One of the biggest risks of AI-assisted research writing? Fabricated citations. I recently started using SourceVerify to verify every reference before I submit. It checks existence, repairs metadata errors, and formats everything — in minutes. If you care about research integrity (and your reputation), it's worth a look. [your affiliate link]`}
            </CopyBlock>

            <CopyBlock label="Email / Newsletter">
              {`Subject: The tool I use to catch bad citations before they catch me

Hey [name],

Quick recommendation — I've been using SourceVerify to verify citations in my papers. It checks whether each reference actually exists, fixes errors in author names, years, and DOIs, and formats everything to APA/MLA/Chicago.

It's saved me hours of manual checking, and it catches things I'd miss — especially AI-generated references that look right but aren't.

If you write or review research, it's worth trying: [your affiliate link]

(Full disclosure: I'm an affiliate, so I earn a commission if you subscribe. But I genuinely use and recommend it.)`}
            </CopyBlock>
          </div>

          {/* Blog post suggestions */}
          <div className="mt-12">
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.055px",
                textTransform: "uppercase",
                color: "var(--sv-text-muted-dark)",
                marginBottom: "16px",
              }}
            >
              Blog Post Angle Suggestions
            </h3>
            <ul className="space-y-3" style={{ listStyle: "none", padding: 0 }}>
              {[
                "How I verify AI-generated citations before submitting my papers",
                "The hidden risk of using ChatGPT for research: hallucinated references",
                "5 tools every researcher needs in 2026 (include SourceVerify)",
                "I checked my last paper's bibliography with SourceVerify — here's what it found",
              ].map((idea) => (
                <li
                  key={idea}
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    letterSpacing: "-0.16px",
                    color: "var(--sv-text-muted-dark)",
                    paddingLeft: "16px",
                    borderLeft: "2px solid var(--sv-border-dark)",
                  }}
                >
                  {idea}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ━━━ 05 / KEY TALKING POINTS ━━━ */}
      <section
        className="mx-auto"
        style={{
          maxWidth: "1200px",
          padding: "80px 24px",
          borderTop: "1px solid var(--sv-border-light)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.055px",
            textTransform: "uppercase",
            color: "var(--sv-text-muted)",
            marginBottom: "8px",
          }}
        >
          05 /&nbsp;Key Talking Points
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "var(--sv-text-primary)",
            marginBottom: "48px",
          }}
        >
          Why Researchers Love SourceVerify
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "98% accuracy rate",
              desc: "SourceVerify's verification engine correctly identifies whether a reference exists with 98% accuracy.",
            },
            {
              title: "Saves hours per paper",
              desc: "Manually checking a 50-reference bibliography takes a full day. SourceVerify does it in minutes.",
            },
            {
              title: "Catches AI hallucinations",
              desc: "AI language models fabricate citations that look real. SourceVerify catches them before they reach reviewers.",
            },
            {
              title: "Automatic error repair",
              desc: "Wrong year? Misspelled author? Missing DOI? SourceVerify fixes metadata errors automatically.",
            },
            {
              title: "Full audit trail",
              desc: "Every verification comes with a transparent record of what was checked and what was found.",
            },
            {
              title: "Multilingual",
              desc: "Supports verification across common research languages, with UI in English, French, Spanish, and Portuguese.",
            },
            {
              title: "Trusted by professionals",
              desc: "Used by researchers, peer reviewers, publishers, and conference organizers.",
            },
          ].map((point) => (
            <div
              key={point.title}
              style={{
                border: "1px solid var(--sv-border-light)",
                borderRadius: "var(--sv-radius-md)",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  letterSpacing: "-0.18px",
                  marginBottom: "8px",
                }}
              >
                {point.title}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "var(--sv-text-muted)",
                  lineHeight: 1.4,
                }}
              >
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━ 06 / BRAND GUIDELINES ━━━ */}
      <section
        style={{
          backgroundColor: "var(--sv-bg-dark)",
          padding: "80px 24px",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.055px",
              textTransform: "uppercase",
              color: "var(--sv-text-muted-dark)",
              marginBottom: "8px",
            }}
          >
            06 /&nbsp;Brand Guidelines
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Brand Guidelines
          </h2>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: "-0.18px",
              color: "var(--sv-text-muted-dark)",
              marginBottom: "48px",
              maxWidth: "600px",
            }}
          >
            When mentioning SourceVerify, please follow these guidelines to keep
            our brand consistent.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Do */}
            <div
              style={{
                border: "1px solid var(--sv-border-dark)",
                borderRadius: "var(--sv-radius-md)",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.055px",
                  textTransform: "uppercase",
                  color: "var(--sv-lavender)",
                  marginBottom: "16px",
                }}
              >
                Do
              </p>
              <ul
                className="space-y-3"
                style={{
                  listStyle: "none",
                  padding: 0,
                  fontSize: "14px",
                  color: "var(--sv-text-muted-dark)",
                  lineHeight: 1.4,
                }}
              >
                <li>— Use the official logos from the media kit</li>
                <li>
                  — Refer to the product as &quot;SourceVerify&quot; (one word,
                  capital S and V)
                </li>
                <li>
                  — Use terms: verify, reference, source, unverified, needs
                  review
                </li>
                <li>
                  — Accurately describe the product&apos;s capabilities
                </li>
              </ul>
            </div>

            {/* Don't */}
            <div
              style={{
                border: "1px solid var(--sv-border-dark)",
                borderRadius: "var(--sv-radius-md)",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.055px",
                  textTransform: "uppercase",
                  color: "var(--sv-coral)",
                  marginBottom: "16px",
                }}
              >
                Don&apos;t
              </p>
              <ul
                className="space-y-3"
                style={{
                  listStyle: "none",
                  padding: 0,
                  fontSize: "14px",
                  color: "var(--sv-text-muted-dark)",
                  lineHeight: 1.4,
                }}
              >
                <li>— Alter the logo colors, proportions, or layout</li>
                <li>
                  — Use &quot;CitationCop&quot; in promotional materials
                  (it&apos;s an internal codename)
                </li>
                <li>
                  — Use terms: check, citation (when meaning
                  &quot;source&quot;), invalid, wrong, bad, failed
                </li>
                <li>
                  — Make claims about accuracy beyond what we state (98%)
                </li>
                <li>
                  — Imply SourceVerify replaces peer review (it&apos;s a tool
                  that supports it)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section
        style={{
          backgroundColor: "var(--sv-bg-dark)",
          padding: "48px 24px 80px",
          borderTop: "1px solid var(--sv-border-dark)",
        }}
      >
        <div className="mx-auto flex flex-col items-center text-center" style={{ maxWidth: "600px" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-0.42px",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Ready to start sharing?
          </h2>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              letterSpacing: "-0.16px",
              color: "var(--sv-text-muted-dark)",
              marginBottom: "24px",
            }}
          >
            Log in to your Tolt dashboard to grab your referral link and start
            earning today.
          </p>
          <CTAButton label="Go to Dashboard" variant="glass" />
        </div>
      </section>
    </>
  );
}
