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
- Dark cinematic: black/near-black background, white text
- Accent color: warm amber (`#f59e0b`) — contrasts with the teal (`#14b8a6`) used on the tech side
- Matches a vlog/creator aesthetic

### Navbar Change
Add **"Creative"** link to the existing `navBar` component, pointing to `/creative`. Follows the same active-state pattern as existing nav links.

### Page Sections

#### 1. Hero
- Full-width dark section
- Large heading: "Funbi Onaeko"
- Subtitle: "Vlogger · Video Editor · Content Creator"
- TikTok and YouTube icon buttons linking to `@uniordering` (TikTok) and `@funbionaeko` (YouTube)

#### 2. Work / Videos
- Two tabs or two columns: **TikTok** | **YouTube**
- Embedded TikTok videos via TikTok oEmbed `<blockquote>` embeds
- Embedded YouTube videos via `<iframe>` embeds
- Videos to be stored as data in `src/data/user.js` under a `creative` key (title + embed URL/ID)
- Grid layout, responsive (2 cols desktop, 1 col mobile)

#### 3. Editing Services
- Section heading: "Video Editing Services"
- Short description of what Funbi offers (vlog edits, short-form content, TikTok/Reels editing)
- Simple CTA button: "Get in Touch" → scrolls to contact or mailto link

#### 4. Contact / Hire Me
- Simple section with email link (`oluwafunbi.onaeko@gmail.com`)
- Optional short form (name, message) — keep it simple, mailto-based to avoid backend

---

## File Structure

```
src/
  pages/
    creative.jsx          ← new page
    styles/
      creative.css        ← dark theme styles
  components/
    creative/
      heroSection.jsx
      videoGrid.jsx
      services.jsx
      contactSection.jsx
      styles/
        heroSection.css
        videoGrid.css
        services.css
        contactSection.css
  data/
    user.js               ← add `creative` key with videos + services data
```

---

## Data Shape (user.js addition)

```js
creative: {
  tiktok: "https://www.tiktok.com/@uniordering",
  youtube: "https://www.youtube.com/@funbionaeko",
  videos: {
    tiktok: [
      { id: "VIDEO_ID", title: "Video title" },
    ],
    youtube: [
      { id: "VIDEO_ID", title: "Video title" },
    ],
  },
  services: [
    "Vlog editing",
    "Short-form content (TikTok, Reels)",
    "YouTube video editing",
    "Colour grading & transitions",
  ],
}
```

---

## Routing
Add `/creative` route to `src/App.js` alongside existing routes.

---

## Constraints
- No new dependencies — use existing styled-components / CSS approach
- No backend — contact via mailto
- Must work with existing CRA build

---

## Out of Scope
- Pricing page
- Client login / dashboard
- Blog/articles for creative content
