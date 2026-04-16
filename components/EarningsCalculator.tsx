"use client";

import { useState } from "react";

const FONT_PRIMARY = '"The Future", system-ui, Arial, sans-serif';
const FONT_MONO = '"PP Neue Montreal Mono", "Space Mono", Georgia, monospace';

const plans = [
  { name: "Starter", price: 20 },
  { name: "Workhorse", price: 50 },
  { name: "Powerhouse", price: 150 },
];

const scenarios = [
  {
    title: "Getting started",
    referrals: 5,
    plan: "Workhorse",
    price: 50,
    monthly: "$62.50",
    total: "$1,500",
  },
  {
    title: "Growing audience",
    referrals: 15,
    plan: "Workhorse",
    price: 50,
    monthly: "$187.50",
    total: "$4,500",
  },
  {
    title: "Power affiliate",
    referrals: 25,
    plan: "Powerhouse",
    price: 150,
    monthly: "$937.50",
    total: "$22,500",
  },
];

function formatUSD(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

export default function EarningsCalculator() {
  const [selectedPlan, setSelectedPlan] = useState("Workhorse");
  const [referralCount, setReferralCount] = useState(10);

  const planPrice = plans.find((p) => p.name === selectedPlan)!.price;
  const monthlyEarnings = referralCount * planPrice * 0.25;
  const totalEarnings = monthlyEarnings * 24;

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
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.055px",
            textTransform: "uppercase",
            color: "var(--sv-text-muted)",
            margin: 0,
          }}
        >
          03 / EARNINGS CALCULATOR
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 500,
            letterSpacing: "-0.8px",
            lineHeight: 1.2,
            margin: "16px 0 0",
            color: "var(--sv-text-primary)",
          }}
        >
          See What You Could Earn
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: "-0.18px",
            lineHeight: 1.3,
            color: "var(--sv-text-muted)",
            margin: "12px 0 48px",
          }}
        >
          Estimate your monthly and long-term earnings based on the plans your
          referrals choose.
        </p>

        {/* Plan selector */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {plans.map((plan) => {
            const isActive = selectedPlan === plan.name;
            return (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className="sv-btn-hover"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: FONT_PRIMARY,
                  letterSpacing: "-0.16px",
                  borderRadius: 4,
                  padding: "10px 24px",
                  cursor: "pointer",
                  backgroundColor: isActive
                    ? "var(--sv-dark-blue)"
                    : "transparent",
                  color: isActive ? "#ffffff" : "var(--sv-text-primary)",
                  border: isActive
                    ? "none"
                    : "1px solid var(--sv-border-light)",
                }}
              >
                {plan.name} (${plan.price}/mo)
              </button>
            );
          })}
        </div>

        {/* Referral count */}
        <div style={{ marginTop: 32 }}>
          <label
            htmlFor="referral-count"
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 8,
              fontSize: 14,
              fontWeight: 400,
              color: "var(--sv-text-muted)",
              marginBottom: 8,
            }}
          >
            Number of referrals
            <span
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "var(--sv-text-primary)",
                letterSpacing: "-0.18px",
              }}
            >
              {referralCount}
            </span>
          </label>
          <input
            id="referral-count"
            type="range"
            min={1}
            max={100}
            value={referralCount}
            onChange={(e) => setReferralCount(Number(e.target.value))}
            style={{
              width: "100%",
              accentColor: "var(--sv-dark-blue)",
            }}
          />
        </div>

        {/* Results */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ marginTop: 32, gap: 24 }}
        >
          {/* Monthly Earnings */}
          <div
            style={{
              border: "1px solid var(--sv-border-light)",
              borderRadius: 8,
              padding: "32px 24px",
            }}
          >
            <p
              style={{
                fontFamily: FONT_MONO,
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.05px",
                textTransform: "uppercase",
                color: "var(--sv-text-muted)",
                margin: "0 0 8px",
              }}
            >
              MONTHLY EARNINGS
            </p>
            <p
              style={{
                fontSize: 40,
                fontWeight: 500,
                letterSpacing: "-0.8px",
                lineHeight: 1.2,
                color: "var(--sv-text-primary)",
                margin: 0,
                transition: "color 0.2s ease-out",
              }}
            >
              {formatUSD(monthlyEarnings)}
            </p>
          </div>

          {/* 24-Month Total */}
          <div
            style={{
              border: "1px solid var(--sv-border-light)",
              borderRadius: 8,
              padding: "32px 24px",
            }}
          >
            <p
              style={{
                fontFamily: FONT_MONO,
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.05px",
                textTransform: "uppercase",
                color: "var(--sv-text-muted)",
                margin: "0 0 8px",
              }}
            >
              24-MONTH TOTAL
            </p>
            <p
              style={{
                fontSize: 40,
                fontWeight: 500,
                letterSpacing: "-0.8px",
                lineHeight: 1.2,
                color: "var(--sv-text-primary)",
                margin: 0,
                transition: "color 0.2s ease-out",
              }}
            >
              {formatUSD(totalEarnings)}
            </p>
          </div>
        </div>

        {/* Example Scenarios */}
        <div style={{ marginTop: 48 }}>
          <h3
            style={{
              fontSize: "clamp(18px, 3vw, 22px)",
              fontWeight: 500,
              letterSpacing: "-0.22px",
              lineHeight: 1.15,
              margin: "0 0 16px",
              color: "var(--sv-text-primary)",
            }}
          >
            Example Scenarios
          </h3>

          <div
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ gap: 24 }}
          >
            {scenarios.map((s) => (
              <div
                key={s.title}
                className="sv-card-hover"
                style={{
                  border: "1px solid var(--sv-border-light)",
                  borderRadius: 8,
                  padding: 24,
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    letterSpacing: "-0.16px",
                    margin: "0 0 8px",
                    color: "var(--sv-text-primary)",
                  }}
                >
                  {s.title}
                </p>
                <p
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.055px",
                    textTransform: "uppercase",
                    color: "var(--sv-text-muted)",
                    margin: "0 0 12px",
                  }}
                >
                  {s.referrals} referrals &middot; {s.plan} (${s.price})
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    letterSpacing: "-0.18px",
                    margin: "0 0 4px",
                    color: "var(--sv-text-primary)",
                  }}
                >
                  {s.monthly}/mo
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "var(--sv-text-muted)",
                    margin: 0,
                  }}
                >
                  {s.total} over 24 months
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
