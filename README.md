# Viznous IT Technologies — Premium Website v2.0

## Project Structure

```
viznous-premium/
├── frontend/               # React SPA (Vite)
│   ├── src/
│   │   ├── App.jsx         # App shell: routing, dark mode, scroll effects
│   │   ├── main.jsx        # React entry point
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Hero, Services, Stats, Why Us, Testimonials, CTA
│   │   │   ├── About.jsx       # Company overview, Mission/Vision, Timeline, Team
│   │   │   ├── Services.jsx    # All 9 services + delivery process
│   │   │   ├── Technologies.jsx # Tabbed tech showcase with proficiency bars
│   │   │   ├── Portfolio.jsx   # Filterable project case studies
│   │   │   ├── Careers.jsx     # Job listings + application form
│   │   │   ├── Contact.jsx     # Contact info, form, Google Maps
│   │   │   └── Admin.jsx       # Secure admin dashboard (FastAPI-connected)
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx  # Sticky navbar, dark mode, mobile menu
│   │   │   │   └── Footer.jsx  # 4-column footer, newsletter, socials
│   │   │   ├── ui/
│   │   │   │   ├── index.jsx   # Section, Stars, CheckItem, Counter, useReveal
│   │   │   │   └── ContactForm.jsx  # Reusable contact/apply form
│   │   │   └── Logo.jsx        # Brand logo component
│   │   ├── data/
│   │   │   └── siteData.js     # All content: company, services, tech, projects...
│   │   └── styles/
│   │       └── main.css        # Complete design system (2000+ lines)
│   ├── public/assets/          # Logo image
│   ├── index.html              # SEO-optimized HTML shell
│   ├── package.json
│   └── vite.config.js          # Code splitting, build optimization
│
├── backend/                # FastAPI backend (UNCHANGED)
└── database/               # SQL schema/seed (UNCHANGED)
```

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev        # http://127.0.0.1:5173
npm run build      # Production build → dist/
```

### Backend (unchanged)
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Design System

### Typography
- **Display**: Syne (headings, brand, stats) — bold, geometric
- **Body**: DM Sans (paragraphs, UI text) — clean, modern

### Color Palette
| Token | Light | Dark |
|-------|-------|------|
| `--primary` | #0057d9 | #4da6ff |
| `--accent` | #00d4ff | #00d4ff |
| `--bg` | #ffffff | #060e1f |
| `--text` | #0a1628 | #f0f6ff |

### Key Features
- **Dark / Light mode** — system toggle, persists via state
- **Animated hero** — floating orbs, grid drift, badge pulsing
- **Scroll reveal** — IntersectionObserver-based stagger animations
- **Animated counters** — eased counting on viewport entry
- **Filterable portfolio** — category filter bar
- **Tabbed technologies** — per-group with proficiency bars
- **Glassmorphism cards** — backdrop-filter throughout
- **WhatsApp FAB** — floating action button
- **Back-to-top** — appears after 400px scroll
- **Google Maps embed** — real address iframe
- **Newsletter form** — footer subscription
- **Full SEO** — meta tags, OG, Twitter Card, JSON-LD structured data
- **Code splitting** — vendor/icons/app chunks via Vite
- **Mobile-first responsive** — tested at 320px, 768px, 1280px+

## Environment Variables

Create `frontend/.env`:
```
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

## Backend API (Unchanged)
All original FastAPI routes, database connections, auth, and models are preserved intact.
