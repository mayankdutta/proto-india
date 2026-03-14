# ProtoFab India — Protolabs Clone for India

A React-based clone of [protolabs.com/en-gb](https://www.protolabs.com/en-gb/) localized for India.

## Tech Stack

| Tool             | Why                                                        |
| ---------------- | ---------------------------------------------------------- |
| Vite             | Fastest bundler — instant HMR, zero config                 |
| React 19         | UI library, no framework overhead                          |
| React Router v7  | Client-side routing                                        |
| Tailwind CSS v3  | Utility-first CSS — zero CSS file sprawl                   |
| Lucide React     | Tree-shakeable icons                                       |

## Quick Start

```bash
cd protolabs-india
npm install
npm run dev
# → http://localhost:5173
```

## Project Structure

```
src/
├── components/
│   ├── home/           # Homepage sections (Hero, Services, etc.)
│   ├── layout/         # Navbar, Footer, AnnouncementBar
│   └── ui/             # Reusable primitives (Button, SectionHeading)
├── data/
│   └── siteData.js     # ALL site content — single source of truth
├── hooks/
│   └── useInView.js    # Intersection Observer for scroll animations
├── pages/
│   ├── HomePage.jsx    # Composes all homepage sections
│   └── PlaceholderPage.jsx  # Catch-all for unbuilt routes
├── App.jsx             # Router + layout shell
├── main.jsx            # Entry point
└── index.css           # Tailwind directives + custom styles
```

## Architecture Decisions

- **Data-driven**: All content in `src/data/siteData.js` — change text without touching components.
- **Component composition**: Each section is its own file — easy to review and modify.
- **Scroll animations**: `useInView` hook uses IntersectionObserver for viewport-triggered CSS animations.
- **Placeholder routing**: Every link works — unbuilt pages show "Under Construction" with breadcrumb.

## Build for Production

```bash
npm run build
npm run preview
```
