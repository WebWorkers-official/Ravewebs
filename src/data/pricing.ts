
export interface PricingPlan {
  id: string
  name: string
  setup: string
  monthly: string
  includes: string[]
  note?: string
}

// RaveWebs AI Lead Management System — US Pricing

export const pricingPlans: PricingPlan[] = [
  {
    id: 'lead-management-starter',
    name: 'Starter',
    setup: '$499',
    monthly: '$99',
    includes: [
      'Centralized Lead Dashboard',
      'AI Lead Scoring & Qualification',
      'Hot / Warm / Cold Prioritization',
      'Basic Sales Pipeline',
      'Up to 500 leads / month',
    ],
    note: 'For small businesses looking to organize and manage incoming leads.',
  },
  {
    id: 'lead-management-growth',
    name: 'Growth',
    setup: '$999',
    monthly: '$199',
    includes: [
      'Everything in Starter',
      'AI-Personalized Lead Responses',
      'Automated Follow-Up Management',
      'Lead Source Tracking',
      'Up to 2,000 leads / month',
    ],
    note: 'For growing businesses looking to improve lead conversion.',
  },
  {
    id: 'lead-management-scale',
    name: 'Scale',
    setup: '$1,999',
    monthly: '$399',
    includes: [
      'Everything in Growth',
      'Sales Pipeline & Revenue Insights',
      'Advanced Reporting & Analytics',
      'Up to 2 Custom Integrations',
      'Up to 10,000 leads / month',
    ],
    note: 'For established teams managing high volumes of leads.',
  },
  {
    id: 'lead-management-enterprise',
    name: 'Enterprise',
    setup: 'Custom',
    monthly: 'Custom',
    includes: [
      'Everything in Scale',
      'Custom Integrations & Data Migration',
      'Advanced Security & Access Controls',
      'Dedicated Onboarding & Support',
      'Custom Workflows & Lead Capacity',
    ],
    note: 'For large organizations requiring tailored solutions.',
  },
]
