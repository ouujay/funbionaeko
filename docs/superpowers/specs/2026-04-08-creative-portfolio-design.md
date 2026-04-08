# Creative Portfolio Page — Design Spec
**Date:** 2026-04-08
**Project:** funbionaeko portfolio (existing React/CRA site)
**Scope:** Add a `/creative` page + navbar link to the existing portfolio

---

## Goal
Extend the existing tech portfolio with a second "side" focused on Funbi's video editing and content creation work. The creative page lives at `/creative` and is accessible via a new navbar link.

---

## Design

### Theme
- Dark cinematic: black/near-black background (`#0a0a0a`), white text
- Accent color: warm amber (`#f59e0b`) — contrasts with the teal (`#14b8a6`) used on the tech side
- The creative page root element does **not** use the `.page-content` class (which has a hardcoded white background in `app.css`). Instead, `.creative-page` is the outermost div, avoiding the white background inheritance.
- The existing `NavBar` component (white background, dark text) renders above the dark hero — this is acceptable and consistent with how other pages work

### Navbar Change
- Add **"Creative"** as a sixth link in `navBar.jsx`, pointing to `/creative`
- The `NavBar` active prop value for this page is `"creative"`
- The existing nav pill container at desktop width (`380px`) will be widened to `440px` to accommodate the extra item without reducing font size further
- On mobile (`max-width: 600px`) the nav already wraps — no additional change needed

### Page Sections

#### 1. Hero
- Full-width dark section with `.creative-page` wrapper
- Large heading: "Funbi Onaeko"
- Subtitle: "Vlogger · Video Editor · Content Creator"
- TikTok and YouTube icon buttons (FontAwesome brand icons) linking out to `@uniordering` (TikTok) and `@funbionaeko` (YouTube)

#### 2. Work / Videos
- Two tabs: **TikTok** | **YouTube** (tab state managed with React `useState`)
- **YouTube embeds:** `<iframe src="https://www.youtube.com/embed/{id}" />` — no external script needed
- **TikTok embeds:** TikTok's blockquote oEmbed approach requires injecting `https://www.tiktok.com/embed.js` via `react-helmet` `<script>` tag inside the component. This is a third-party script (not an npm package) and is acceptable within the "no new npm dependencies" constraint.
- Grid layout: 2 cols desktop, 1 col mobile
- Videos stored in `src/data/user.js` under `creative.videos`

#### 3. Editing Services
- Section heading: "Video Editing Services"
- Brief description of services offered
- "Get in Touch" CTA button links to the existing `/contact` page (not a duplicate contact section)

#### 4. SEO
- Add a `creative` entry to `src/data/seo.js`:
  ```js
  {
    page: "creative",
    description: "Funbi Onaeko — Vlogger, Video Editor & Content Creator. Watch my work and hire me for video editing.",
    keywords: ["video editing", "vlogger", "content creator", "TikTok", "YouTube", "Funbi Onaeko"]
  }
  ```

---

## Data Shape (`user.js` addition)

```js
creative: {
  tiktok: "https://www.tiktok.com/@uniordering",
  youtube: "https://www.youtube.com/@funbionaeko",
  services: [
    // Each service is a flat string — rendered as a simple bullet list
    "Vlog editing",
    "Short-form content (TikTok, Reels)",
    "YouTube video editing",
    "Colour grading & transitions",
  ],
  videos: {
    tiktok: [
      // TikTok oEmbed blockquote needs full video URL + video ID
      // { id: "7123456789", url: "https://www.tiktok.com/@uniordering/video/7123456789", title: "Video title" }
    ],
    youtube: [
      // YouTube iframe needs video ID only
      // { id: "dQw4w9WgXcQ", title: "Video title" }
    ],
  },
},
```

> Note: Video arrays start empty. Funbi adds video IDs/URLs manually to `user.js` as they want to feature them.

---

## File Structure

```
src/
  pages/
    creative.jsx                        ← new page, NavBar active="creative"
    styles/
      creative.css                      ← dark theme wrapper + page layout
  components/
    creative/
      creativeHero.jsx
      videoGrid.jsx
      editingServices.jsx
      styles/
        creativeHero.css
        videoGrid.css
        editingServices.css
  data/
    user.js                             ← add creative key
    seo.js                              ← add creative entry
```

---

## Routing
Add `/creative` route to `src/App.js` alongside existing routes.

---

## Constraints
- No new npm dependencies
- TikTok embed.js loaded via react-helmet (existing dependency)
- Contact via existing `/contact` page — no duplicate contact form
- Must work with existing CRA build

---

## Out of Scope
- Pricing page
- Client login / dashboard
- Blog/articles for creative content
- Inline contact form (use existing /contact)
