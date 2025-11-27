# 🚀 Primeira Etapa - Automação Plattano US

## 📋 Visão Geral
**Objetivo**: Implementar automações críticas no site Next.js 15 (plattano.com) para captura e nurturing de leads automatizado.

**Timeline**: 2-3 semanas  
**ROI Esperado**: 300-500% em geração de leads qualificados  
**Investimento**: $200-500/mês em ferramentas

---

## 🎯 **ETAPA 1: CRM + Lead Capture Integration**

### **A. Setup HubSpot CRM (Gratuito para começar)**

#### **1.1 Configuração Inicial**
- [ ] Criar conta HubSpot gratuita
- [ ] Configurar pipeline personalizado:
  - **Stage 1**: New Lead
  - **Stage 2**: Qualified Lead  
  - **Stage 3**: Demo Scheduled
  - **Stage 4**: Proposal Sent
  - **Stage 5**: Negotiation
  - **Stage 6**: Closed Won/Lost

#### **1.2 Custom Properties**
```javascript
// Propriedades customizadas para leads
const customProperties = {
  product_interest: ['Veeam', 'ExaGrid', 'Wasabi', 'SentinelOne', 'Rainforest'],
  company_size: ['1-50', '51-200', '201-1000', '1000+'],
  industry: ['Healthcare', 'Financial', 'Manufacturing', 'Professional Services'],
  budget_range: ['<$50K', '$50K-$200K', '$200K-$500K', '$500K+'],
  timeline: ['Immediate', '1-3 months', '3-6 months', '6+ months']
}
```

#### **1.3 Lead Scoring Setup**
```javascript
// Sistema de pontuação automática
const leadScoring = {
  demographics: {
    title_cto_cio: 20,
    title_it_manager: 15,
    title_security_manager: 15,
    company_size_1000plus: 25,
    company_size_200_1000: 20,
    industry_healthcare: 15,
    industry_financial: 15
  },
  behavior: {
    demo_request: 50,
    pricing_page_visit: 30,
    case_study_download: 25,
    webinar_attendance: 20,
    email_open: 5,
    email_click: 10
  }
}
```

---

## 🔧 **ETAPA 2: Componentes Next.js 15**

### **2.1 Lead Capture Form Component**

```typescript
// components/LeadCaptureForm.tsx
'use client'

import { useState } from 'react'
import { submitToHubSpot } from '@/lib/hubspot'

interface LeadFormData {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  productInterest: string
  companySize: string
  message?: string
}

export default function LeadCaptureForm({ product }: { product?: string }) {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    productInterest: product || '',
    companySize: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await submitToHubSpot(formData)
      setSubmitted(true)
      // Trigger automation sequence
      await triggerEmailSequence(formData.productInterest)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800">Thank you!</h3>
        <p className="text-green-600">We'll contact you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name *"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          required
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Last Name *"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          required
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <input
        type="email"
        placeholder="Business Email *"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      
      <input
        type="text"
        placeholder="Company Name *"
        value={formData.company}
        onChange={(e) => setFormData({...formData, company: e.target.value})}
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      
      <select
        value={formData.productInterest}
        onChange={(e) => setFormData({...formData, productInterest: e.target.value})}
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Product Interest *</option>
        <option value="veeam">Veeam Backup & Recovery</option>
        <option value="exagrid">ExaGrid Backup Storage</option>
        <option value="wasabi">Wasabi Cloud Storage</option>
        <option value="sentinelone">SentinelOne Cybersecurity</option>
        <option value="rainforest">Rainforest.tech Security</option>
        <option value="multiple">Multiple Products</option>
      </select>
      
      <select
        value={formData.companySize}
        onChange={(e) => setFormData({...formData, companySize: e.target.value})}
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Company Size *</option>
        <option value="1-50">1-50 employees</option>
        <option value="51-200">51-200 employees</option>
        <option value="201-1000">201-1000 employees</option>
        <option value="1000+">1000+ employees</option>
      </select>
      
      <textarea
        placeholder="Tell us about your current challenges..."
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        rows={3}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
      </button>
    </form>
  )
}
```

### **2.2 HubSpot Integration**

```typescript
// lib/hubspot.ts
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID

export async function submitToHubSpot(formData: any) {
  const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/form-id`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: [
        { name: 'firstname', value: formData.firstName },
        { name: 'lastname', value: formData.lastName },
        { name: 'email', value: formData.email },
        { name: 'company', value: formData.company },
        { name: 'phone', value: formData.phone },
        { name: 'product_interest', value: formData.productInterest },
        { name: 'company_size', value: formData.companySize },
        { name: 'message', value: formData.message }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    })
  })
  
  if (!response.ok) {
    throw new Error('Failed to submit to HubSpot')
  }
  
  return response.json()
}

export async function triggerEmailSequence(productInterest: string) {
  // Trigger specific email sequence based on product interest
  const sequences = {
    'veeam': 'veeam-nurture-sequence',
    'exagrid': 'exagrid-nurture-sequence',
    'wasabi': 'wasabi-nurture-sequence',
    'sentinelone': 'sentinelone-nurture-sequence',
    'rainforest': 'rainforest-nurture-sequence'
  }
  
  // Implementation depends on your email automation tool
}
```

### **2.3 Smart Pop-up Component**

```typescript
// components/SmartPopup.tsx
'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import LeadCaptureForm from './LeadCaptureForm'

export default function SmartPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShown && !localStorage.getItem('popup-shown')) {
        setIsVisible(true)
        setHasShown(true)
        localStorage.setItem('popup-shown', 'true')
      }
    }, 30000) // Show after 30 seconds

    return () => clearTimeout(timer)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">
          🚀 Ready to Modernize Your IT Infrastructure?
        </h2>
        
        <p className="text-gray-600 mb-6">
          Get a free consultation and discover how our solutions can save you 40% on IT costs.
        </p>
        
        <LeadCaptureForm />
      </div>
    </div>
  )
}
```

---

## 📊 **ETAPA 3: Analytics & Tracking**

### **3.1 Google Analytics 4 Setup**

```typescript
// lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Track form submissions
export const trackFormSubmission = (productInterest: string) => {
  event({
    action: 'form_submit',
    category: 'lead_generation',
    label: productInterest
  })
}

// Track demo requests
export const trackDemoRequest = (product: string) => {
  event({
    action: 'demo_request',
    category: 'conversion',
    label: product,
    value: 1
  })
}
```

### **3.2 Conversion Tracking**

```typescript
// components/ConversionTracking.tsx
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { pageview } from '@/lib/analytics'

export default function ConversionTracking() {
  const pathname = usePathname()

  useEffect(() => {
    pageview(pathname)
  }, [pathname])

  return null
}
```

---

## 🎯 **ETAPA 4: Email Automation Sequences**

### **4.1 Welcome Series (5 emails)**

```markdown
**Email 1 - Immediate (Welcome)**
Subject: Welcome to Plattano - Your IT Transformation Starts Here

**Email 2 - Day 2 (Education)**
Subject: The #1 Mistake Companies Make with Backup Solutions

**Email 3 - Day 5 (Case Study)**
Subject: How [Similar Company] Saved $200K with Our Solutions

**Email 4 - Day 8 (Social Proof)**
Subject: Join 500+ Companies Already Using Our Solutions

**Email 5 - Day 12 (CTA)**
Subject: Ready for Your Free IT Assessment?
```

### **4.2 Product-Specific Sequences**

```javascript
// Email sequences by product interest
const emailSequences = {
  veeam: [
    'Veeam Best Practices Guide',
    'Ransomware Protection Checklist',
    'ROI Calculator: Veeam vs Competitors',
    'Schedule Your Veeam Demo'
  ],
  wasabi: [
    'Cloud Storage Cost Comparison',
    'Migration Guide: AWS to Wasabi',
    'Case Study: 70% Storage Cost Reduction',
    'Free Wasabi Trial Setup'
  ],
  sentinelone: [
    'Endpoint Security Assessment',
    'AI vs Traditional Antivirus',
    'Compliance Made Simple Guide',
    'SentinelOne Demo Request'
  ]
}
```

---

## 📈 **ETAPA 5: KPIs e Métricas**

### **5.1 Métricas de Conversão**
- **Website Traffic**: 2,000+ visitantes únicos/mês
- **Lead Conversion Rate**: 3-5% (60-100 leads/mês)
- **Form Completion Rate**: 15-25%
- **Email Open Rate**: 25-35%
- **Email Click Rate**: 5-10%
- **Demo Booking Rate**: 10-15% dos leads

### **5.2 Dashboard de Acompanhamento**
```javascript
// Métricas para acompanhar diariamente
const dailyMetrics = {
  newLeads: 0,
  demoRequests: 0,
  emailOpens: 0,
  websiteVisitors: 0,
  formCompletions: 0
}
```

---

## 🛠 **IMPLEMENTAÇÃO - Checklist**

### **Semana 1: Setup Básico**
- [ ] Configurar HubSpot CRM
- [ ] Criar propriedades customizadas
- [ ] Implementar lead capture forms
- [ ] Configurar Google Analytics

### **Semana 2: Automações**
- [ ] Setup email sequences
- [ ] Implementar pop-ups inteligentes
- [ ] Configurar lead scoring
- [ ] Testes A/B dos formulários

### **Semana 3: Otimização**
- [ ] Análise de métricas iniciais
- [ ] Ajustes baseados em dados
- [ ] Implementar chatbot básico
- [ ] Setup de relatórios automáticos

---

## 💰 **Investimento Mensal**

| Ferramenta | Custo | Funcionalidade |
|------------|-------|----------------|
| HubSpot Starter | $50/mês | CRM + Email automation |
| Google Workspace | $12/mês | Email profissional |
| Analytics Tools | $0-50/mês | Tracking e insights |
| **Total** | **$62-112/mês** | **ROI: 300-500%** |

---

## 🎯 **Próximos Passos**

1. **Hoje**: Setup HubSpot account
2. **Esta semana**: Implementar formulários no site
3. **Próxima semana**: Configurar automações de email
4. **Mês que vem**: Análise e otimização

**Resultado esperado**: 60-100 leads qualificados/mês em 30 dias! 🚀

---

*Documento criado em: Janeiro 2024*  
*Versão: 1.0*  
*Próxima atualização: Após implementação*