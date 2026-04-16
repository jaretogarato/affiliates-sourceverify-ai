import CTAButton from "@/components/CTAButton";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center text-center"
      style={{
        background:
          "linear-gradient(180deg, #f25d5d0c 0%, #bdbbff18 40%, #ffffff 100%)",
        padding: "120px 24px 80px",
      }}
    >
      {/* Mono label */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "0.055px",
          color: "var(--sv-text-muted)",
        }}
      >
        AFFILIATE PROGRAM
      </p>

      {/* Headline */}
      <h1
        className="mt-4"
        style={{
          fontSize: "clamp(28px, 5vw, 64px)",
          fontWeight: 500,
          lineHeight: 1.1,
          letterSpacing: "-1.92px",
          color: "var(--sv-text-primary)",
        }}
      >
        Earn by sharing the tool researchers trust
      </h1>

      {/* Subheadline */}
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
        Join the SourceVerify Affiliate Program — earn 25% recurring commission
        for 24 months on every subscription you refer.
      </p>

      {/* CTA */}
      <div className="mt-8">
        <CTAButton variant="dark" label="Become an Affiliate" />
      </div>

      {/* Trust element */}
      <p
        style={{
          fontSize: "14px",
          color: "var(--sv-text-muted)",
          marginTop: "16px",
        }}
      >
        98% verification accuracy · Trusted by researchers, reviewers, and
        publishers worldwide
      </p>
    </section>
  );
}
