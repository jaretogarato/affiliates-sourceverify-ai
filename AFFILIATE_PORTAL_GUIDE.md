# SourceVerify Affiliate Portal — Content Guide

> Single source of truth for all content, copy, and design decisions.

---

## 1. Program Details

| Detail | Value |
|--------|-------|
| Commission rate | 25% recurring on all subscription plans |
| Duration | 24 months per referred customer |
| Cookie window | 90 days |
| Minimum payout | $30 |
| Payout schedule | Monthly, net-30 |
| Eligible plans | Starter ($20/mo), Workhorse ($50/mo), Powerhouse ($150/mo) |
| Tolt signup URL | `https://sourceverify.tolt.com/login` |
| Contact email | team@sourceverify.ai |

---

## 2. Design System

> All design decisions are defined in `DESIGN.md` (source of truth) and visually demonstrated at `/design-system`.

### Colors

| Role | Value | Usage |
|------|-------|-------|
| Brand Coral | `#f25d5d` (hover: `#e04d4d`) | Gradient illustrations, highest-signal brand moments — never UI chrome |
| Brand Orange | `#fc4c02` | Gradient endpoints, warm accent moments |
| Dark Blue | `#010120` | Dark surfaces, footer, CTA buttons on light |
| Soft Lavender | `#bdbbff` | Subtle accents, secondary indicators |
| Background (light) | `#ffffff` | Primary page background |
| Background (dark) | `#010120` | Research, footer, technical sections |
| Glass Light | `rgba(255,255,255,0.12)` | Frosted glass on dark surfaces |
| Glass Dark | `rgba(0,0,0,0.08)` | Subtle tinted surfaces on light |
| Text (light) | `#000000` | Primary text on light surfaces |
| Text (dark) | `#ffffff` | Primary text on dark surfaces |
| Text muted (light) | `#00000066` | Secondary text, captions on light |
| Border (light) | `rgba(0,0,0,0.08)` | Borders on light surfaces |
| Border (dark) | `rgba(255,255,255,0.12)` | Borders on dark surfaces |

### Typography

| Role | Font | Fallback |
|------|------|----------|
| Primary (display + body) | Space Grotesk | system-ui, Arial |
| Mono labels | Space Mono | Georgia, monospace |

Both loaded via `next/font/google`. These substitute for "The Future" and "PP Neue Montreal Mono" (proprietary fonts from DESIGN.md).

Key rules from DESIGN.md:
- Negative letter-spacing on all primary font text (-0.16px to -1.92px, scaled by size)
- Mono labels always uppercase with positive letter-spacing
- Weight range: 400 (regular) and 500 (medium) only — no bold
- Tight line-heights (1.10–1.40) throughout

### Radii & Spacing

- Buttons, badges, tags: `4px` (sharp)
- Cards, containers: `8px`
- No pills, no generous rounding
- Base spacing unit: 8px
- Section vertical spacing: 80–120px

### Elevation

| Level | Treatment |
|-------|-----------|
| Flat | No shadow, no border |
| Contained | `1px solid rgba(0,0,0,0.08)` (light) or `rgba(255,255,255,0.12)` (dark) |
| Elevated | `rgba(1,1,32,0.1) 0px 4px 10px` (dark-blue-tinted shadow) |
| Dark Zone | Full `#010120` background |

### Animations

- Subtle hover lifts on cards/buttons
- Scroll-reveal fade-ups on sections
- Calculator number transitions
- 300–400ms ease-out timing

---

## 3. Page 1: Landing Page (`/`)

### Section 1: Hero

- **Headline:** "Earn by sharing the tool researchers trust"
- **Subheadline:** "Join the SourceVerify Affiliate Program — earn 25% recurring commission for 24 months on every subscription you refer."
- **CTA:** "Become an Affiliate →" → `https://sourceverify.tolt.com/login`
- **Trust element:** "98% verification accuracy · Trusted by researchers, reviewers, and publishers worldwide"

### Section 2: How It Works

**Heading:** "How It Works"
**Subheading:** "Three steps to start earning"

| Step | Icon idea | Title | Description |
|------|-----------|-------|-------------|
| 1 | Link/chain | Sign up & get your link | Register for free through our affiliate portal. You'll get a unique referral link and access to marketing resources. |
| 2 | Share/megaphone | Share with your audience | Recommend SourceVerify to your readers, viewers, or followers. Use our ready-made copy, banners, and talking points. |
| 3 | Dollar/recurring | Earn 25% recurring | Every time someone subscribes through your link, you earn 25% of their subscription — every month, for 24 months. |

### Section 3: Commission Details

**Heading:** "Your Commission, Detailed"

| Detail | Value | Icon idea |
|--------|-------|-----------|
| Commission rate | 25% recurring on all subscription plans | Percentage |
| Duration | 24 months per referred customer | Calendar |
| Cookie window | 90 days — referrals tracked for 3 months after click | Cookie/timer |
| Minimum payout | $30 — low threshold, paid monthly | Wallet |
| Payout schedule | Monthly, net-30 — reliable and predictable | Clock |
| Eligible plans | All subscription tiers — Starter, Workhorse, Powerhouse, and Team plans | List |

### Section 4: Earnings Calculator

**Heading:** "See What You Could Earn"
**Subheading:** "Estimate your monthly and long-term earnings based on the plans your referrals choose."

**Inputs:**
- Plan selector (toggle buttons): Starter ($20/mo), Workhorse ($50/mo), Powerhouse ($150/mo)
- Number of referrals (slider or number input): 1–100, default 10

**Outputs:**
- Monthly earnings: `referrals × plan price × 0.25`
- 24-month total: `monthly × 24`

**Example scenarios (displayed below calculator):**

| Scenario | Referrals | Plan | Monthly | 24-Month Total |
|----------|-----------|------|---------|----------------|
| Getting started | 5 | Workhorse ($50) | $62.50 | $1,500 |
| Growing audience | 15 | Workhorse ($50) | $187.50 | $4,500 |
| Power affiliate | 25 | Powerhouse ($150) | $937.50 | $22,500 |

### Section 5: Who It's For

**Heading:** "Built for Academic Voices"
**Subheading:** "If your audience cares about research integrity, this program is for you."

| Audience | Description |
|----------|-------------|
| Academic bloggers & content creators | You write about research tools, methods, and workflows — your readers trust your recommendations. |
| Research tool reviewers | You evaluate and compare tools for researchers — SourceVerify is one they need to know about. |
| YouTube educators & course creators | You teach research skills — show your students how to verify their citations in minutes. |
| Newsletter authors | You curate the best in research and academia — add a tool that saves your subscribers hours. |

### Section 6: FAQ

| Question | Answer |
|----------|--------|
| How do I sign up? | Click "Become an Affiliate" to register through our affiliate portal. It's free and takes under two minutes. |
| How do I get paid? | Payouts are handled through Tolt, our affiliate platform. You'll manage your payment preferences directly in your Tolt dashboard. |
| When do I earn a commission? | You earn commission when a referred user starts a paid subscription. One-time token purchases are not eligible — only recurring subscription plans. |
| How long does the cookie last? | 90 days. If someone clicks your link and subscribes within 90 days, you get credit — even if they don't sign up immediately. |
| What's the minimum payout? | $30. Payouts are processed monthly, net-30 after the end of each month. |
| How long do I earn commissions on a referral? | 24 months from the referred customer's first subscription payment. As long as they stay subscribed, you earn. |
| Can I refer myself? | No. Self-referrals are not eligible for commission. |
| Are there restrictions on how I can promote? | We ask that you don't spam, make misleading claims about SourceVerify, or bid on our brand terms (SourceVerify, CitationCop) in paid search ads. Beyond that, promote however fits your audience best. |
| What is SourceVerify? | SourceVerify is an AI-powered citation verification platform. It checks whether references in research papers actually exist, repairs errors in metadata, and formats citations — saving researchers hours of manual work. It has a 98% accuracy rate and is used by researchers, peer reviewers, and publishers. |

### Section 7: CTA Footer

- **Heading:** "Ready to start earning?"
- **Subheading:** "Join the SourceVerify Affiliate Program today — it's free, and you can start sharing in minutes."
- **CTA:** "Become an Affiliate →"
- **Contact:** "Questions? Reach us at team@sourceverify.ai"

---

## 4. Page 2: Resources (`/resources`)

### Section 1: Quick Start Guide

**Heading:** "Get Started in 3 Minutes"

Checklist:
1. Log in to your Tolt dashboard — grab your unique referral link
2. Download the media kit — logos, brand colors, and a one-pager you can share
3. Watch the product demo — understand what SourceVerify does so you can speak to it authentically
4. Pick your channel — choose copy templates below for social, email, or blog
5. Start sharing — post your link and start earning

### Section 2: Media Kit

- **Heading:** "Media Kit"
- **Description:** "Download our brand assets — everything you need to represent SourceVerify accurately."
- **CTA:** "Download Media Kit (.zip)" → `/media-kit.zip`
- **Contents:** Logos (horizontal, stacked, symbol-only; light & dark), brand color reference card, product one-pager (placeholder PDF)

### Section 3: Product Demo

- **Heading:** "See SourceVerify in Action"
- **Description:** "Share this demo with your audience so they can see exactly how citation verification works."
- **Embed:** `https://iframe.mediadelivery.net/embed/600585/c4ab439c-1986-41c0-b7f8-14eebac9eb05`
- **Talking points:**
  - Paste a bibliography and get verification results in under a minute
  - SourceVerify checks if each reference actually exists — catching AI hallucinations
  - Errors are automatically repaired: wrong year, misspelled author, missing DOI
  - Full audit trail shows exactly what was checked and what was found

### Section 4: Suggested Copy

**Heading:** "Ready-to-Use Copy"
**Description:** "Grab these templates and customize them for your audience."

**Twitter/X (short):**
> I've been using @SourceVerify to check my citations before submission — it catches errors I'd never find manually. 98% accuracy, and it takes minutes instead of hours. Check it out → [your affiliate link]

**Twitter/X (thread opener):**
> If you use AI to help with research writing, you need to verify your citations. AI hallucinates references — it's a known problem. I use SourceVerify to catch these before they embarrass me. Here's how it works 🧵 [your affiliate link]

**LinkedIn:**
> One of the biggest risks of AI-assisted research writing? Fabricated citations. I recently started using SourceVerify to verify every reference before I submit. It checks existence, repairs metadata errors, and formats everything — in minutes. If you care about research integrity (and your reputation), it's worth a look. [your affiliate link]

**Email / Newsletter:**
> Subject: The tool I use to catch bad citations before they catch me
>
> Hey [name],
>
> Quick recommendation — I've been using SourceVerify to verify citations in my papers. It checks whether each reference actually exists, fixes errors in author names, years, and DOIs, and formats everything to APA/MLA/Chicago.
>
> It's saved me hours of manual checking, and it catches things I'd miss — especially AI-generated references that look right but aren't.
>
> If you write or review research, it's worth trying: [your affiliate link]
>
> (Full disclosure: I'm an affiliate, so I earn a commission if you subscribe. But I genuinely use and recommend it.)

**Blog post angle suggestions:**
- "How I verify AI-generated citations before submitting my papers"
- "The hidden risk of using ChatGPT for research: hallucinated references"
- "5 tools every researcher needs in 2026" (include SourceVerify)
- "I checked my last paper's bibliography with SourceVerify — here's what it found"

### Section 5: Key Talking Points

**Heading:** "Why Researchers Love SourceVerify"

| Point | Detail |
|-------|--------|
| 98% accuracy rate | SourceVerify's verification engine correctly identifies whether a reference exists with 98% accuracy. |
| Saves hours per paper | Manually checking a 50-reference bibliography takes a full day. SourceVerify does it in minutes. |
| Catches AI hallucinations | AI language models fabricate citations that look real. SourceVerify catches them before they reach reviewers. |
| Automatic error repair | Wrong year? Misspelled author? Missing DOI? SourceVerify fixes metadata errors automatically. |
| Full audit trail | Every verification comes with a transparent record of what was checked and what was found. |
| Multilingual | Supports verification across common research languages, with UI in English, French, Spanish, and Portuguese. |
| Trusted by professionals | Used by researchers, peer reviewers, publishers, and conference organizers. |

### Section 6: Brand Guidelines Summary

**Heading:** "Brand Guidelines"
**Description:** "When mentioning SourceVerify, please follow these guidelines to keep our brand consistent."

**Do:**
- Use the official logos from the media kit
- Refer to the product as "SourceVerify" (one word, capital S and V)
- Use terms: verify, reference, source, unverified, needs review
- Accurately describe the product's capabilities

**Don't:**
- Alter the logo colors, proportions, or layout
- Use "CitationCop" in promotional materials (it's an internal codename)
- Use terms: check, citation (when meaning "source"), invalid, wrong, bad, failed
- Make claims about accuracy beyond what we state (98%)
- Imply SourceVerify replaces peer review (it's a tool that supports it)

---

## 5. Shared Layout

### Header
- SourceVerify logo wordmark ("Source" in coral, "Verify" in dark blue)
- Nav links: Home, Resources
- CTA button: "Become an Affiliate" → Tolt URL

### Footer
- SourceVerify © 2026
- Links: Main site, Terms (placeholder), Privacy (placeholder), Contact email

---

## 6. Technical Notes

### File Structure
```
app/
├── layout.tsx              # Root layout: fonts, metadata, header/footer
├── page.tsx                # Landing page
├── resources/
│   └── page.tsx            # Resources page
├── globals.css             # Tailwind + design tokens
components/
├── Header.tsx
├── Footer.tsx
├── EarningsCalculator.tsx  # "use client"
├── FAQ.tsx
├── HowItWorks.tsx
├── CommissionDetails.tsx
├── Hero.tsx
├── CTAButton.tsx
public/
├── logos/
├── media-kit.zip
```

### Dependencies to Add
- `framer-motion` — animations and calculator transitions

### Key Implementation Notes
- Earnings Calculator is a client component (`"use client"`)
- FAQ uses accordion pattern (details/summary or framer-motion)
- Mobile-first responsive design
- SEO via Next.js Metadata API
- Tolt integration is simple external links (`<a href="..." target="_blank">`)
- Media kit is a static ZIP in `/public/`
