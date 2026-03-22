# Portfolio – CLAUDE.md

## Project Overview
Personal portfolio site built with **React** (Create React App / reactfolio template).

## Stack
- React 18, React Router v6, styled-components
- FontAwesome icons, typewriter-effect, react-helmet, react-ga4

## Running Locally
```bash
npm start   # starts on http://localhost:3000
npm run build
```

## Project Structure
- `src/data/user.js` — main content config: name, bio, socials, etc.
- `src/data/articles.js` — blog/article content
- `src/pages/` — top-level route pages (homepage, about, projects, articles, contact, 404)
- `src/components/` — reusable UI components grouped by page
- `src/data/seo.js` — SEO/meta tag config
- `src/data/tracking.js` — GA4 analytics config

## Editing Content
Most content changes go in `src/data/user.js`. Projects, articles, and personal info all live there or in the adjacent data files.

## Git
- Remote: `origin` → `https://github.com/ouujay/funbionaeko`
- Main branch: `main`
- Always pull with: `git pull origin main`
