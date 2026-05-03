# DESIGN.md

> Single source of truth for this project's visual design.
> Both Stitch and Claude Code read this file. Update here, not in components.

## Project
- **Client:** ARB Tree Services
- **Industry:** Tree Surgery / Local Trades / Dudley, West Midlands
- **Vibe:** Clean, trustworthy, established. Minimal white space. No clutter. A local homeowner should find a phone number within 2 seconds of landing.

## Logo
- **File:** `/public/arb-tree-services-logo.png`
- **Nav height:** 48px max
- **Footer height:** 36px max
- **Clearspace:** 24px minimum around all sides
- **Never:** stretch, recolor, or generate a replacement with AI

## Colors
- **Primary:** #1B4332
- **Primary Hover:** #14532D
- **Accent:** #16A34A
- **Accent Hover:** #15803D
- **Background:** #FFFFFF
- **Surface:** #F7FAF8
- **Surface Alt:** #EEF5F1
- **Text:** #111827
- **Text Muted:** #6B7280
- **Border:** #E5E7EB
- **White:** #FFFFFF
- **Success:** #16A34A
- **Warning:** #F59E0B
- **Error:** #EF4444

## Typography
- **Heading Font:** Outfit (weights: 600, 700, 800)
- **Body Font:** DM Sans (weights: 400, 500)
- **Scale:**
  - H1: 56px / 64px line-height / 800 weight
  - H2: 40px / 48px / 700
  - H3: 28px / 36px / 600
  - Body: 17px / 26px / 400
  - Small: 14px / 20px / 400
- **Phone number in header:** 28px / Outfit / 700 / Primary color
- **Never use:** Inter font

## Spacing
- **Base unit:** 4px
- **Section padding:** 96px (desktop) / 56px (mobile)
- **Container max-width:** 1180px
- **Grid gap:** 24px
- **White space philosophy:** Generous. If it feels empty, it's probably right.

## Breakpoints
- **Mobile:** 0–639px (single column, stacked layout)
- **Tablet:** 640–1023px (2 columns where needed)
- **Desktop:** 1024px+ (full layout)
- **Section padding:** 56px (mobile) / 72px (tablet) / 96px (desktop)
- **H1 size:** 36px (mobile) / 44px (tablet) / 56px (desktop)
- **H2 size:** 28px (mobile) / 34px (tablet) / 40px (desktop)
- **Container padding:** 20px (mobile) / 32px (tablet) / 0 auto (desktop)

## Radius
- **Small:** 8px (buttons, inputs, tags)
- **Medium:** 16px (cards, service boxes)
- **Large:** 24px (gallery images, hero overlay)
- **Full:** 9999px (pill badges)

## Shadows
- **Small:** 0 1px 3px rgba(0,0,0,0.06)
- **Medium:** 0 4px 16px rgba(0,0,0,0.08)
- **Large:** 0 12px 40px rgba(0,0,0,0.10)

## Buttons
- **Primary:** bg #1B4332, white text, 14px 32px padding, radius-small, font Outfit 600
- **Primary Hover:** bg #14532D
- **CTA (high emphasis):** bg #16A34A, white text, 14px 32px padding, radius-small, Outfit 700 — used for "Get a Free Quote"
- **CTA Hover:** bg #15803D
- **Secondary:** border 2px #1B4332, text #1B4332, transparent bg — used for "Call Now"
- **Ghost:** no border, text #1B4332, hover surface bg

## Hero (Above Fold)
- **Image:** `/public/hero.jpg` (the hedge garden photo — Sean's real work)
- **Overlay:** linear-gradient(to right, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.1) 100%)
- **Layout:** Full viewport height. Text left-aligned over dark overlay. Image visible on right.
- **Above fold must contain (in order):**
  1. Nav: Logo left, phone number right (28px Outfit 700), no other nav items on mobile
  2. H1: "Professional Tree Surgeons in Dudley"
  3. Trust line: "★★★★★  4.9 · 100 Google Reviews · 40 Years Experience"
  4. Two buttons: "Get a Free Quote" (CTA green) + "Call Now" (secondary)
  5. Trust badge strip below buttons: NVQ Qualified · Fully Insured · BS 3998 · Free Quotes

## Horizontal Scroll Gallery (Scroll Animation)
- GSAP ScrollTrigger horizontal pinned section
- 6–8 real job photos from Sean
- Photos slide left as user scrolls down
- Each photo: height 500px, width auto, object-fit cover, radius-medium
- Gap between photos: 24px
- Background: Surface (#F7FAF8) — slight contrast from white sections
- Entry animation: slight scale + opacity fade on each photo as it enters view

## Component Library
- **Use:** 21st.dev Magic MCP (search before building any component from scratch)
- **Do NOT mix with:** shadcn or other component libraries

## Components Reference
- Buttons: primary / CTA / secondary / ghost
- Cards: surface bg + radius-medium + shadow-small, padding 24px
- Inputs: border 1px #E5E7EB, radius-small, 14px 18px padding, focus ring #1B4332
- Review cards: white bg, shadow-small, radius-medium, star row + name + quote
- Service cards: white bg, radius-medium, shadow-small, icon (forest green) + title + one-line + arrow

## Accessibility
- **Minimum contrast ratio:** 4.5:1 for body text, 3:1 for large text
- **Touch targets:** minimum 44x44px on mobile
- **Focus states:** visible outline #1B4332 on all interactive elements
- **Phone number:** always a clickable tel: link

## Do / Don't
- DO: White space is the main design element — lean into it
- DO: Phone number visible at all times on desktop (sticky nav)
- DO: Use real photos only — no stock, no placeholders
- DO: Keep copy short — this audience scans, they don't read
- DON'T: Use Inter font
- DON'T: Purple-on-white gradients
- DON'T: Floating social media buttons
- DON'T: More than 5 nav items
- DON'T: Busy headers with multiple rows of information
