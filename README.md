# RSL/A Website (rsla.io)

Marketing & AI automation agency website. Rebrand of RSL Media Hub.

## Tech Stack

- **Next.js 16** (App Router) with Turbopack
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **Sanity CMS** for blog content
- **Framer Motion** for animations
- **Vercel** for deployment

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── work/              # 11 case study pages
│   ├── blog/              # Blog (Sanity-powered)
│   ├── about/             # About page
│   ├── privacy-policy/    # Privacy policy
│   ├── terms/             # Terms of service
│   └── insider/           # Newsletter insider page
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation (Home/Work/Blog)
│   ├── Footer.tsx         # Footer with newsletter signup
│   ├── CaseStudyLayout.tsx # Case study template
│   ├── FadeIn.tsx         # Animation wrapper
│   └── FadeInStagger.tsx  # Staggered animations
└── sanity/
    └── lib/
        ├── client.ts      # Sanity client config
        └── image.ts       # Image URL builder
```

## Sanity CMS

Blog content is managed via Sanity CMS.

- **Project ID:** `36wenybq`
- **Dataset:** `production`
- **API Version:** `2024-01-01`

## Deployment

Auto-deploys to Vercel on push to `main` branch.

## Logo Builder

Interactive canvas-based tool for generating RSL/A logo assets with real-time preview and high-resolution export.

**Access:** [http://localhost:3000/logo-builder.html](http://localhost:3000/logo-builder.html)

### Logo Components

| Component | Description |
|-----------|-------------|
| **Logomark** | Blue square (#0070f3) with white parallelogram slash |
| **Wordmark** | "RSL" + blue parallelogram slash + "A" |
| **Full Lockup** | Logomark + Wordmark combined |

### Export Options

- **Formats:** PNG (up to 60x scale), SVG
- **Variants:** Full Lockup, Logomark only, Wordmark only
- **Options:** Transparent or solid background

### Brand Specifications

| Element | Value |
|---------|-------|
| Primary Color | `#0070f3` (Electric Blue) |
| Text Color | `#ffffff` (White) |
| Background | `#0a0a0a` (Black) |
| Font | Satoshi 900 |
| Tracking | -0.04em |

### Default Logo Settings

```javascript
{
    iconSize: 50,
    iconSlashWidth: 10,
    iconSlashSkew: -20,
    gap: 15,
    tracking: -0.04,
    slashAGap: -4,
    textSlashWidth: 10,
    textSlashSkew: -20,
    textSlashHeight: 75,
    fontSize: 50
}
```

## Documentation

See [CLAUDE.md](../CLAUDE.md) for detailed project documentation including:
- Design decisions
- Build issue fixes
- Progress log
- Integration details
- Logo builder technical implementation
