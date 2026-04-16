# Impeccable Findings — `/design-system`

Scan date: 2026-04-15
Total anti-patterns detected: **21**

---

## all-caps-body (×8)

**Description:** Body-length text is set in `textTransform: "uppercase"`, making it harder to read. Uppercase should be reserved for short labels (<40 characters).

**Instances:**
1. Typography spec line: `"Display / Hero -- 64px / 500 / 1.10 / -1.92px -- "The Future" (system-ui)"`
2. Typography spec line: `"Section Heading -- 40px / 500 / 1.20 / -0.8px -- "The Future" (system-ui)"`
3. Typography spec line: `"Sub-heading -- 28px / 500 / 1.15 / -0.42px -- "The Future" (system-ui)"`
4. Typography spec line: `"Feature Title -- 22px / 500 / 1.15 / -0.22px -- "The Future" (system-ui)"`
5. Typography spec line: `"Body Large -- 18px / 400 / 1.30 / -0.18px -- "The Future" (system-ui)"`
6. Typography spec line: `"Body / Button -- 16px / 400 / 1.30 / -0.16px -- "The Future" (system-ui)"`
7. Typography spec line: `"Caption -- 14px / 400 / 1.40 / normal -- "The Future" (system-ui)"`
8. Typography spec line: `"Mono Label -- 16px / 500 / 1.00 / 0.08px / uppercase -- "PP Neue Montreal Mono""`

**Remediation:** Remove `textTransform: "uppercase"` from spec description lines (strings >40 characters). Keep uppercase only on short section labels and tags.

---

## line-length (×5)

**Description:** Text containers allow lines to exceed ~65 characters, reducing readability. Long body text should be constrained to a comfortable reading width.

**Instances:**
1. Hero subtitle paragraph (line 122–134)
2. Card description text — "Contained" card (line 1002–1006)
3. Card description text — "Elevated" card (line 1032–1036)
4. Card description text — "Accent" card (line 1061–1064)
5. Dark zone card description text — "Research Paper" card (line 1119–1122)

**Remediation:** Add `maxWidth: "65ch"` to text containers holding body or description text.

---

## low-contrast (×1)

**Description:** Text color does not meet WCAG AA contrast ratio (4.5:1) against its background.

**Instance:**
1. Accent card label `ACCENT` uses color `#bdbbff` (Soft Lavender) on a white background — contrast ratio ≈2.4:1.

**Remediation:** Change lavender accent label color from `#bdbbff` to `#7c79c9` (darker variant that passes WCAG AA on white at ≈4.6:1).

---

## pure-black-white (×2)

**Description:** Using pure `#000000` (black) or `#ffffff` (white) creates harsh contrast. Prefer near-black/near-white values for softer visual tone.

**Instances:**
1. Hero heading `color: "#000000"` — should use Dark Blue `#010120`
2. Hero subtitle `lineHeight` container uses inherited pure black — should use `#010120`

**Remediation:** Replace `#000000` text/background color with `#010120` (Dark Blue from design system) throughout.

---

## tight-leading (×2)

**Description:** Body text line-height is too tight for comfortable reading. Recommended minimum for body text is 1.5.

**Instances:**
1. Hero subtitle paragraph — `lineHeight: 1.30`
2. Body Large typography sample — `lineHeight: "1.30"`

**Remediation:** Increase body text `lineHeight` from `1.30` to `1.50`.

---

## dark-glow (×1)

**Description:** Box-shadow on dark background surfaces creates an unnatural glow effect. Shadows should only appear on light surfaces where they create natural depth.

**Instance:**
1. Stats bar cards use `boxShadow: "rgba(1, 1, 32, 0.1) 0px 4px 10px"` — shadow on cards adjacent to dark-themed elements.

**Remediation:** Remove `boxShadow` from cards rendered on or adjacent to dark (`#010120`) backgrounds. Only use shadow on light surfaces.

---

## Summary

| Category | Count | Severity |
|----------|-------|----------|
| all-caps-body | 8 | Medium |
| line-length | 5 | Low |
| tight-leading | 2 | Medium |
| pure-black-white | 2 | Low |
| low-contrast | 1 | High |
| dark-glow | 1 | Low |
| **Total** | **21** | |
