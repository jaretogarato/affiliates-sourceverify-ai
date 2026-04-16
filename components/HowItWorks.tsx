const FONT_PRIMARY = '"The Future", system-ui, Arial, sans-serif';
const FONT_MONO = '"PP Neue Montreal Mono", "Space Mono", Georgia, monospace';

const steps = [
  {
    number: "STEP 01",
    title: "Sign up & get your link",
    description:
      "Register for free through our affiliate portal. You\u2019ll get a unique referral link and access to marketing resources.",
  },
  {
    number: "STEP 02",
    title: "Share with your audience",
    description:
      "Recommend SourceVerify to your readers, viewers, or followers. Use our ready-made copy, banners, and talking points.",
  },
  {
    number: "STEP 03",
    title: "Earn 25% recurring",
    description:
      "Every time someone subscribes through your link, you earn 25% of their subscription \u2014 every month, for 24 months.",
  },
];

export default function HowItWorks() {
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
          01 / HOW IT WORKS
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
          How It Works
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
          Three steps to start earning
        </p>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="sv-card-hover"
              style={{
                border: "1px solid var(--sv-border-light)",
                borderRadius: "var(--sv-radius-md, 8px)",
                padding: 24,
              }}
            >
              {/* Step number badge */}
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: "10px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.05px",
                  background: "var(--sv-glass-dark)",
                  border: "1px solid var(--sv-border-light)",
                  borderRadius: 4,
                  padding: "2px 8px",
                  display: "inline-block",
                  marginBottom: 16,
                }}
              >
                {step.number}
              </span>

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
                {step.title}
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
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
