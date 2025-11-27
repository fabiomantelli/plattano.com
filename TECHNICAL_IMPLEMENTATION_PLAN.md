# 🛠️ Plano de Implementação Técnica
## Plattano Redesign - Novembro 2025

---

## 📋 Stack Tecnológico

### Core
- **Framework**: Next.js 16 (App Router)
- **React**: 19+
- **TypeScript**: 5+
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

### Infraestrutura
- **Hosting**: Vercel (recomendado) ou AWS Amplify
- **Database**: Vercel Postgres (para leads fallback)
- **CRM**: HubSpot API
- **Analytics**: Google Analytics 4 + Microsoft Clarity
- **Email**: SendGrid ou AWS SES

---

## 📁 Estrutura de Pastas

```
plattano.com/
├── app/
│   ├── (marketing)/              # Route group para site público
│   │   ├── layout.tsx            # Layout com Nav + Footer
│   │   ├── page.tsx              # Home page
│   │   ├── solutions/
│   │   │   ├── data-protection/
│   │   │   │   └── page.tsx
│   │   │   ├── cybersecurity/
│   │   │   │   └── page.tsx
│   │   │   └── storage/
│   │   │       └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── privacy/
│   │       └── page.tsx
│   │
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts          # POST /api/contact
│   │   └── newsletter/
│   │       └── route.ts          # POST /api/newsletter
│   │
│   ├── components/
│   │   ├── ui/                   # Componentes base (shadcn-style)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── ...
│   │   ├── layout/               # Componentes de layout
│   │   │   ├── navigation.tsx
│   │   │   ├── footer.tsx
│   │   │   └── mobile-nav.tsx
│   │   ├── sections/             # Seções reutilizáveis
│   │   │   ├── hero.tsx
│   │   │   ├── solution-card.tsx
│   │   │   ├── testimonial.tsx
│   │   │   ├── stats.tsx
│   │   │   ├── faq.tsx
│   │   │   └── cta-section.tsx
│   │   └── forms/                # Formulários
│   │       ├── contact-form.tsx
│   │       └── newsletter-form.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts              # Utilitários gerais
│   │   ├── api/
│   │   │   ├── hubspot.ts        # Cliente HubSpot
│   │   │   └── sendgrid.ts       # Cliente SendGrid
│   │   ├── validations/
│   │   │   └── schemas.ts        # Schemas Zod
│   │   └── constants/
│   │       ├── solutions.ts      # Dados de soluções
│   │       ├── partners.ts       # Dados de parceiros
│   │       └── navigation.ts     # Config de navegação
│   │
│   ├── types/
│   │   └── index.ts              # TypeScript types
│   │
│   ├── styles/
│   │   └── globals.css           # Estilos globais
│   │
│   ├── layout.tsx                # Root layout
│   └── not-found.tsx             # 404 page
│
├── public/
│   ├── images/
│   │   ├── logos/                # Logos de parceiros
│   │   ├── solutions/            # Imagens de soluções
│   │   └── team/                 # Fotos do time
│   └── fonts/                    # Fontes customizadas
│
├── .env.local                    # Variáveis de ambiente
├── next.config.js                # Config Next.js
├── tailwind.config.ts            # Config Tailwind
├── tsconfig.json                 # Config TypeScript
└── package.json
```

---

## 🎨 Design System

### Tailwind Config

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80c0ff',
          300: '#4da6ff',
          400: '#1a8cff',
          500: '#0066cc',  // Main primary
          600: '#0052a3',
          700: '#003d7a',
          800: '#002952',
          900: '#001429',
        },
        secondary: {
          50: '#e6f9f0',
          100: '#b3efd4',
          200: '#80e5b8',
          300: '#4ddb9c',
          400: '#1ad180',
          500: '#00c853',  // Main secondary
          600: '#00a043',
          700: '#007832',
          800: '#005022',
          900: '#002811',
        },
        accent: {
          50: '#fff3e6',
          100: '#ffddb3',
          200: '#ffc780',
          300: '#ffb14d',
          400: '#ff9b1a',
          500: '#ff6b00',  // Main accent
          600: '#cc5600',
          700: '#994000',
          800: '#662b00',
          900: '#331500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 🧩 Componentes Base

### Button Component

```typescript
// app/components/ui/button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500':
              variant === 'primary',
            'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500':
              variant === 'secondary',
            'border-2 border-primary-500 text-primary-500 hover:bg-primary-50':
              variant === 'outline',
            'text-gray-700 hover:bg-gray-100': variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
```

---

### Card Component

```typescript
// app/components/ui/card.tsx
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-gray-200 bg-white p-6 shadow-sm',
          hover && 'transition-all hover:shadow-lg hover:border-primary-200',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card }
```

---

## 📄 Páginas Principais

### Home Page Structure

```typescript
// app/(marketing)/page.tsx
import { HeroSection } from '@/components/sections/hero'
import { SolutionsSection } from '@/components/sections/solutions'
import { PartnersSection } from '@/components/sections/partners'
import { StatsSection } from '@/components/sections/stats'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <PartnersSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
```

---

### Data Protection Page Structure

```typescript
// app/(marketing)/solutions/data-protection/page.tsx
import { HeroSection } from './sections/hero'
import { OverviewSection } from './sections/overview'
import { VeeamSolutionsSection } from './sections/veeam-solutions'
import { ManagedServicesSection } from './sections/managed-services'
import { WhyPlattanoSection } from './sections/why-plattano'
import { CaseStudiesSection } from './sections/case-studies'
import { FAQSection } from './sections/faq'
import { CTASection } from '@/components/sections/cta-section'

export const metadata = {
  title: 'Data Protection com Veeam | Plattano',
  description: 'Backup, recuperação e proteção contra ransomware...',
}

export default function DataProtectionPage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <VeeamSolutionsSection />
      <ManagedServicesSection />
      <WhyPlattanoSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
```

---

## 🔌 API Routes

### Contact Form API

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendToHubSpot } from '@/lib/api/hubspot'
import { sendNotificationEmail } from '@/lib/api/sendgrid'
import { saveToFallbackDB } from '@/lib/db'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'Nome da empresa muito curto'),
  interest: z.enum([
    'data-protection',
    'cybersecurity',
    'storage',
    'managed-services',
    'other',
  ]),
  message: z.string().max(500).optional(),
})

export async function POST(request: NextRequest) {
  try {
    // Parse and validate body
    const body = await request.json()
    const data = contactSchema.parse(body)

    // Get metadata
    const metadata = {
      pageUrl: request.headers.get('referer') || '',
      userAgent: request.headers.get('user-agent') || '',
      timestamp: new Date().toISOString(),
    }

    // Try to send to HubSpot
    try {
      await sendToHubSpot({ ...data, ...metadata })
    } catch (hubspotError) {
      // If HubSpot fails, save to fallback DB
      console.error('HubSpot error:', hubspotError)
      await saveToFallbackDB({ ...data, ...metadata })
    }

    // Send notification email to sales team
    await sendNotificationEmail(data)

    // Track in analytics
    // ... analytics code

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao enviar mensagem' },
      { status: 500 }
    )
  }
}
```

---

## 🔐 Environment Variables

```bash
# .env.local

# HubSpot
HUBSPOT_API_KEY=your_hubspot_api_key
HUBSPOT_PORTAL_ID=your_portal_id

# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@plattano.com
SENDGRID_TO_EMAIL=sales@plattano.com

# Database (Vercel Postgres)
POSTGRES_URL=your_postgres_url
POSTGRES_PRISMA_URL=your_prisma_url
POSTGRES_URL_NON_POOLING=your_non_pooling_url

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=your_clarity_id

# Site
NEXT_PUBLIC_SITE_URL=https://plattano.com
```

---

## 📊 Analytics Setup

### Google Analytics 4

```typescript
// app/lib/analytics/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Track pageview
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track event
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track form submission
export const trackFormSubmit = (formName: string, interest: string) => {
  event({
    action: 'form_submit',
    category: 'lead_generation',
    label: `${formName}_${interest}`,
  })
}
```

---

## 🚀 Performance Optimizations

### Next.js Config

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Compiler (Next.js 16)
  experimental: {
    reactCompiler: true,
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['plattano.com'],
  },

  // Compression
  compress: true,

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Redirects from old URLs
  async redirects() {
    return [
      // Data Protection redirects
      {
        source: '/products/data-protection/:path*',
        destination: '/solutions/data-protection',
        permanent: true,
      },
      // Cybersecurity redirects
      {
        source: '/products/cybersecurity/:path*',
        destination: '/solutions/cybersecurity',
        permanent: true,
      },
      // Storage redirects
      {
        source: '/products/storage/:path*',
        destination: '/solutions/storage',
        permanent: true,
      },
      // About redirects
      {
        source: '/the-plattano',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/partnership',
        destination: '/about',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

---

## 📱 Responsive Design

### Breakpoints

```typescript
// Tailwind breakpoints
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large
```

### Mobile-First Approach

```tsx
// Example: Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>

// Example: Responsive text
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
  Headline
</h1>

// Example: Hide/show on mobile
<div className="hidden md:block">
  {/* Desktop only */}
</div>

<div className="block md:hidden">
  {/* Mobile only */}
</div>
```

---

## 🧪 Testing Strategy

### Unit Tests (Vitest)

```typescript
// app/components/ui/__tests__/button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '../button'

describe('Button', () => {
  it('renders with primary variant', () => {
    render(<Button variant="primary">Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    screen.getByText('Click me').click()
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
```

### E2E Tests (Playwright)

```typescript
// tests/e2e/contact-form.spec.ts
import { test, expect } from '@playwright/test'

test('submit contact form successfully', async ({ page }) => {
  await page.goto('/contact')

  await page.fill('[name="name"]', 'John Doe')
  await page.fill('[name="email"]', 'john@example.com')
  await page.fill('[name="company"]', 'Acme Corp')
  await page.selectOption('[name="interest"]', 'data-protection')

  await page.click('button[type="submit"]')

  await expect(page.locator('.success-message')).toBeVisible()
})
```

---

## 📦 Deployment

### Vercel (Recomendado)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables no Vercel

```bash
# Via CLI
vercel env add HUBSPOT_API_KEY production
vercel env add SENDGRID_API_KEY production
# ... etc

# Ou via dashboard: vercel.com/[project]/settings/environment-variables
```

---

## 📈 Monitoring

### Error Tracking (Sentry)

```typescript
// app/lib/sentry.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
})
```

### Performance Monitoring

```typescript
// app/lib/monitoring.ts
export const reportWebVitals = (metric: any) => {
  // Send to analytics
  if (metric.label === 'web-vital') {
    gtag.event({
      action: metric.name,
      category: 'Web Vitals',
      label: metric.id,
      value: Math.round(metric.value),
    })
  }
}
```

---

## 🔄 Migration Plan

### Phase 1: Setup (Week 1)
- [ ] Create new branch
- [ ] Setup Next.js 16 project
- [ ] Install dependencies
- [ ] Configure Tailwind CSS 4
- [ ] Setup environment variables

### Phase 2: Components (Week 2)
- [ ] Build design system components
- [ ] Create layout components (Nav, Footer)
- [ ] Build reusable sections
- [ ] Setup forms with validation

### Phase 3: Pages (Week 3-4)
- [ ] Home page
- [ ] Data Protection page
- [ ] Cybersecurity page
- [ ] Storage page
- [ ] About page
- [ ] Contact page
- [ ] Privacy page

### Phase 4: Integration (Week 5)
- [ ] HubSpot API integration
- [ ] Email notifications
- [ ] Analytics setup
- [ ] Fallback database

### Phase 5: Testing (Week 6)
- [ ] Unit tests
- [ ] E2E tests
- [ ] Performance testing
- [ ] Cross-browser testing
- [ ] Mobile testing

### Phase 6: Launch (Week 7)
- [ ] Setup redirects (301)
- [ ] Deploy to production
- [ ] Monitor errors
- [ ] Track analytics
- [ ] Gather feedback

---

## ✅ Launch Checklist

### Pre-Launch
- [ ] All pages responsive (mobile/tablet/desktop)
- [ ] Forms working and validated
- [ ] HubSpot integration tested
- [ ] Email notifications working
- [ ] Analytics tracking verified
- [ ] SEO meta tags complete
- [ ] Images optimized (WebP/AVIF)
- [ ] Performance: LCP < 2.5s
- [ ] Accessibility: WCAG AA compliant
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)

### Launch Day
- [ ] Deploy to production
- [ ] Verify all redirects working
- [ ] Test contact form in production
- [ ] Monitor error logs
- [ ] Check analytics tracking
- [ ] Verify email notifications

### Post-Launch (Week 1)
- [ ] Monitor Core Web Vitals
- [ ] Track conversion rates
- [ ] Gather user feedback
- [ ] Fix any bugs
- [ ] Optimize based on data

---

*Plano técnico por Sparktopus Web Design Agency*
*Novembro 2025*
