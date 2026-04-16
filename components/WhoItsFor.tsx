const FONT_PRIMARY = '"The Future", system-ui, Arial, sans-serif';
const FONT_MONO = '"PP Neue Montreal Mono", "Space Mono", Georgia, monospace';

const audiences = [
  {
    title: "Academic bloggers & content creators",
    description:
      "You write about research tools, methods, and workflows \u2014 your readers trust your recommendations.",
  },
  {
    title: "Research tool reviewers",
    description:
      "You evaluate and compare tools for researchers \u2014 SourceVerify is one they need to know about.",
  },
  {
    title: "YouTube educators & course creators",
    description:
      "You teach research skills \u2014 show your students how to verify their citations in minutes.",
  },
  {
    title: "Newsletter authors",
    description:
      "You curate the best in research and academia \u2014 add a tool that saves your subscribers hours.",
  },
];

export default function WhoItsFor() {
  return (
    <section
      style={{
        background: "#ffffff",
        borderTop: "1px solid var(--sv-border-light)",
        fontFamily: FONT_PRIMARY,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        {/* Mono label */}
        <p
          style={{
            fontFamily: FONT_MONO,
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.055px",
            textTransform: "uppercase",
            color: "var(--sv-text-muted)",
            marginBottom: 12,
          }}
        >
          04 / WHO IT&apos;S FOR
        </p>

        {/* Section heading */}
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            marginTop: 0,
            marginBottom: 12,
          }}
        >
          Built for Academic Voices
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "-0.18px",
            color: "var(--sv-text-muted)",
            marginTop: 0,
            marginBottom: 48,
          }}
        >
          If your audience cares about research integrity, this program is for
          you.
        </p>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="sv-card-hover"
              style={{
                border: "1px solid var(--sv-border-light)",
                borderRadius: "var(--sv-radius-md, 8px)",
                padding: 24,
              }}
            >
              {/* Title */}
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                  letterSpacing: "-0.22px",
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                {audience.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "var(--sv-text-muted)",
                  lineHeight: 1.3,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
