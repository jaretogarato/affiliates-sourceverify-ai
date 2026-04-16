"use client";

import { useState, useRef } from "react";

interface CopyBlockProps {
  label: string;
  children: React.ReactNode;
}

export default function CopyBlock({ label, children }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    if (!contentRef.current) return;
    const text = contentRef.current.textContent ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: 11,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.055px",
          color: "var(--sv-text-muted-dark)",
          marginBottom: 8,
        }}
      >
        {label}
      </div>

      <div style={{ position: "relative" }}>
        <div
          ref={contentRef}
          style={{
            border: "1px solid var(--sv-border-dark)",
            borderRadius: "var(--sv-radius-md, 8px)",
            padding: 20,
            fontSize: 14,
            lineHeight: 1.5,
            color: "var(--sv-text-muted-dark)",
            whiteSpace: "pre-wrap",
          }}
        >
          {children}
        </div>

        <button
          onClick={handleCopy}
          aria-label={`Copy ${label} to clipboard`}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.05px",
            backgroundColor: "var(--sv-glass-light)",
            border: "1px solid var(--sv-border-dark)",
            borderRadius: 4,
            padding: "4px 10px",
            cursor: "pointer",
            color: "var(--sv-text-muted-dark)",
          }}
        >
          {copied ? "COPIED" : "COPY"}
        </button>
      </div>
    </div>
  );
}
