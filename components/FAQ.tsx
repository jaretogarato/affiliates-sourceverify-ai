"use client";

import { useState } from "react";

const FONT_PRIMARY = '"The Future", system-ui, Arial, sans-serif';
const FONT_MONO = '"PP Neue Montreal Mono", "Space Mono", Georgia, monospace';

const faqItems = [
  {
    question: "How do I sign up?",
    answer:
      'Click "Become an Affiliate" to register through our affiliate portal. It\u2019s free and takes under two minutes.',
  },
  {
    question: "How do I get paid?",
    answer:
      "Payouts are handled through Tolt, our affiliate platform. You\u2019ll manage your payment preferences directly in your Tolt dashboard.",
  },
  {
    question: "When do I earn a commission?",
    answer:
      "You earn commission when a referred user starts a paid subscription. One-time token purchases are not eligible \u2014 only recurring subscription plans.",
  },
  {
    question: "How long does the cookie last?",
    answer:
      "90 days. If someone clicks your link and subscribes within 90 days, you get credit \u2014 even if they don\u2019t sign up immediately.",
  },
  {
    question: "What\u2019s the minimum payout?",
    answer:
      "$30. Payouts are processed monthly, net-30 after the end of each month.",
  },
  {
    question: "How long do I earn commissions on a referral?",
    answer:
      "24 months from the referred customer\u2019s first subscription payment. As long as they stay subscribed, you earn.",
  },
  {
    question: "Can I refer myself?",
    answer: "No. Self-referrals are not eligible for commission.",
  },
  {
    question: "Are there restrictions on how I can promote?",
    answer:
      "We ask that you don\u2019t spam, make misleading claims about SourceVerify, or bid on our brand terms (SourceVerify, CitationCop) in paid search ads. Beyond that, promote however fits your audience best.",
  },
  {
    question: "What is SourceVerify?",
    answer:
      "SourceVerify is an AI-powered citation verification platform. It checks whether references in research papers actually exist, repairs errors in metadata, and formats citations \u2014 saving researchers hours of manual work. It has a 98% accuracy rate and is used by researchers, peer reviewers, and publishers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        background: "var(--sv-bg-dark)",
        fontFamily: FONT_PRIMARY,
      }}
    >
      <div
        style={{
          maxWidth: 800,
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
            margin: 0,
            marginBottom: 16,
          }}
        >
          05 / FAQ
        </p>

        {/* Section heading */}
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
            color: "#ffffff",
            margin: 0,
            marginBottom: 48,
          }}
        >
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                style={{
                  borderBottom: "1px solid var(--sv-border-dark)",
                }}
              >
                {/* Question button */}
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "20px 0",
                    fontFamily: FONT_PRIMARY,
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      letterSpacing: "-0.18px",
                      color: "#ffffff",
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: 400,
                      color: "#ffffff",
                      flexShrink: 0,
                      marginLeft: 16,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 300ms ease-out",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 300ms ease-out",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "var(--sv-text-muted-dark)",
                        lineHeight: 1.4,
                        margin: 0,
                        paddingBottom: 20,
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
