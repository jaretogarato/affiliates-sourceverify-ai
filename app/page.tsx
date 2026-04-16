import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CommissionDetails from "@/components/CommissionDetails";
import EarningsCalculator from "@/components/EarningsCalculator";
import WhoItsFor from "@/components/WhoItsFor";
import FAQ from "@/components/FAQ";
import CTAButton from "@/components/CTAButton";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <CommissionDetails />
      <EarningsCalculator />
      <WhoItsFor />
      <FAQ />

      {/* ━━━ CTA Footer Section ━━━ */}
      <section
        style={{
          backgroundColor: "var(--sv-bg-dark)",
          padding: "80px 24px",
        }}
      >
        <div
          className="mx-auto flex flex-col items-center text-center"
          style={{ maxWidth: "800px" }}
        >
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
            06 /&nbsp;Get Started
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
            Ready to start earning?
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
            Join the SourceVerify Affiliate Program today — it&apos;s free, and
            you can start sharing in minutes.
          </p>
          <CTAButton label="Become an Affiliate" variant="glass" />
          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.055px",
              textTransform: "uppercase",
              color: "var(--sv-text-muted-dark)",
            }}
          >
            Questions? Reach us at{" "}
            <a
              href="mailto:team@sourceverify.ai"
              style={{ color: "var(--sv-text-muted-dark)", textDecoration: "underline" }}
            >
              team@sourceverify.ai
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
