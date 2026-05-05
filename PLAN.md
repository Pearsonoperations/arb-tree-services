# ARB Tree Services — Website Roadmap

## Phase 1 — Content (Do First)

### 1. Hero Video
- Get video from Sean (real job footage, not placeholder)
- Drop it in `/public/` and swap the car placeholder out
- Aim for landscape, 10–30 seconds, no sound needed

### 2. Gallery Photos
- Photograph every job going forward — before and after
- Drop HEICs on the desktop, Claude converts and adds them to the gallery reel
- Target: 30+ photos over the next few months

---

## Phase 2 — Google Business Profile

### 3. Reclaim the GBP
- Go to google.com/business → search the business → "Own this business?"
- Submit ownership request — hijacker has 7 days to respond, usually don't
- If disputed: prove ownership with Companies House reg, utility bills, premises photos
- **Nothing else in Phase 2 can happen until this is done**

### 4. Google Reviews — Live Integration
- Once GBP is back: get the Place ID (30 seconds via Google's Place ID finder)
- Get a Google Places API key (free, 10 mins via Google Cloud Console)
- Hand both to Claude — reviews section gets wired up to live data in ~1 hour
- Shows: reviewer name, photo, star rating, date, review text — all auto-updating
- Note: free API tier returns 5 most recent reviews only

---

## Phase 3 — SEO

### 5. SEO Audit
- Run full audit once Phase 1 and 2 are done
- No point fixing SEO issues on a site with placeholder content

### 6. Areas Pages (12 towns)
One page per town, same design, unique local content:
- Dudley, Wolverhampton, Stourbridge, Halesowen, Kingswinford
- Brierley Hill, Sedgley, Tipton, West Bromwich, Oldbury
- + any others Sean regularly works

Each page: town name, local postcodes, 2–3 sentences of local context
Built from one Next.js template — `/areas/[town]` — generates all pages automatically
**Goal:** appear in organic results below the map pack, where GBP doesn't reach

### 7. Service + Location Pages (Later, If Needed)
- 8 services × 12 towns = 96 pages
- Only worth doing if the town pages prove there's search demand
- Same template approach, two variables instead of one
- Don't rush this — thin content here gets ignored or penalised by Google

---

## Current Status
- Site live on Vercel ✓
- Real gallery photos added ✓
- About section photo updated ✓
- Services section sticky on desktop ✓
- Reviews section built (hardcoded, needs live data) ✓
- GBP: needs reclaiming
- Hero video: needs Sean's footage
- Areas pages: not started
