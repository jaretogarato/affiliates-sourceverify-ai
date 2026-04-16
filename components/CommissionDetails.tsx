const FONT_PRIMARY = '"The Future", system-ui, Arial, sans-serif';
const FONT_MONO = '"PP Neue Montreal Mono", "Space Mono", Georgia, monospace';

const details = [
  {
    title: "25% recurring",
    description: "Commission on all subscription plans",
  },
  {
    title: "24 months",
    description: "Per referred customer",
  },
  {
    title: "90-day cookie",
    description: "Referrals tracked for 3 months after click",
  },
  {
    title: "$30 minimum",
    description: "Low threshold, paid monthly",
  },
  {
    title: "Monthly, net-30",
    description: "Reliable and predictable payouts",
  },
  {
    title: "All plans eligible",
    description: "Starter, Workhorse, Powerhouse, and Team plans",
  },
];

export default function CommissionDetails() {
  return (
    <section
      style={{
        background: "var(--sv-bg-dark)",
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
            color: "var(--sv-text-muted-dark)",
            marginBottom: 12,
          }}
        >
          02 / COMMISSION DETAILS
        </p>

        {/* Section heading */}
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "#ffffff",
            marginTop: 0,
            marginBottom: 48,
          }}
        >
          Your Commission, Detailed
        </h2>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid var(--sv-border-dark)",
                borderRadius: "var(--sv-radius-md, 8px)",
                padding: 24,
              }}
            >
              {/* Title */}
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  letterSpacing: "-0.18px",
                  color: "#ffffff",
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "var(--sv-text-muted-dark)",
                  lineHeight: 1.4,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
