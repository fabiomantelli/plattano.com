# Plattano Website

Modern, redesigned website for Plattano - Enterprise IT Solutions provider in Florida.

## 🚀 Overview

This is the official Plattano website, built with Next.js 15, React 19, and Tailwind CSS 4. The site showcases our enterprise IT solutions including data protection, cybersecurity, and storage solutions.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Fully optimized for mobile, tablet, and desktop
- **Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Comprehensive metadata and structured data
- **Accessible**: WCAG compliant components
- **Type Safe**: Full TypeScript implementation

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Type Safety**: TypeScript

## 📁 Project Structure

```
app/
├── about/              # About page
├── contact/            # Contact page with form
├── privacy/            # Privacy policy
├── solutions/          # Solution pages
│   ├── data-protection/
│   ├── cybersecurity/
│   └── storage/
├── components/         # Reusable components
│   ├── forms/         # Form components
│   ├── layout/        # Layout components (Header, Footer, Navigation)
│   ├── sections/      # Page sections (Hero, Solutions, etc.)
│   └── ui/            # UI primitives (Button, Card, etc.)
├── lib/               # Utilities and constants
│   ├── constants/     # Site constants and data
│   ├── validations/   # Form validation schemas
│   └── utils.ts       # Utility functions
└── types/             # TypeScript type definitions
```

## 🎨 Key Pages

- **Home** (`/`): Hero, solutions overview, partners, testimonials, CTA
- **About** (`/about`): Company information, values, timeline, certifications
- **Solutions**:
  - Data Protection (`/solutions/data-protection`): Veeam solutions
  - Cybersecurity (`/solutions/cybersecurity`): SentinelOne & Rainforest
  - Storage (`/solutions/storage`): ExaGrid & Plattano Hot
- **Contact** (`/contact`): Contact form with validation
- **Privacy** (`/privacy`): Privacy policy

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## 🧪 Development

### Environment Variables

Create a `.env.local` file:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Code Quality

```bash
# Run linter
npm run lint

# Run type check
npx tsc --noEmit
```

## 📦 Key Dependencies

- `next`: ^15.4.6
- `react`: ^19.0.0
- `tailwindcss`: ^4.1.4
- `framer-motion`: ^12.9.2
- `lucide-react`: ^0.503.0
- `react-hook-form`: ^7.66.1
- `zod`: ^4.1.13
- `@radix-ui/react-slot`: Latest

## 🎯 Design Principles

1. **Simplicity**: Clean, focused design without clutter
2. **Performance**: Fast loading times and smooth interactions
3. **Accessibility**: WCAG compliant components
4. **Mobile-First**: Responsive design that works on all devices
5. **SEO**: Optimized for search engines

## 📝 Content Strategy

The site follows a clear content hierarchy:
- **7 main pages** (reduced from 50+)
- **Clear value propositions** on every page
- **Strong CTAs** throughout the site
- **Trust indicators** (certifications, partners, testimonials)

## 🔧 Customization

### Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --primary-500: #2563eb;
  --primary-600: #1d4ed8;
  /* ... */
}
```

### Content

Update constants in `app/lib/constants/` to modify:
- Navigation links
- Solution details
- Partner information
- Testimonials
- Company information

## 📄 License

© 2025 Plattano. All rights reserved.

## 🤝 Support

For questions or support, contact: plattano@plattano.com
