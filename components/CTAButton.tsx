interface CTAButtonProps {
  label?: string;
  variant?: "dark" | "glass";
}

export default function CTAButton({
  label = "Become an Affiliate",
  variant = "dark",
}: CTAButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: "inline-block",
    fontSize: "16px",
    fontWeight: 500,
    letterSpacing: "-0.16px",
    borderRadius: "var(--sv-radius-sm)",
    padding: "10px 24px",
    textDecoration: "none",
    color: "#ffffff",
  };

  const variantStyles: React.CSSProperties =
    variant === "glass"
      ? {
          background: "var(--sv-glass-light)",
          border: "1px solid var(--sv-border-dark)",
        }
      : {
          background: "var(--sv-dark-blue)",
          border: "none",
        };

  return (
    <a
      href="https://sourceverify.tolt.com/login"
      target="_blank"
      rel="noopener noreferrer"
      className="sv-btn-hover"
      style={{ ...baseStyles, ...variantStyles }}
    >
      {label} →
    </a>
  );
}
