export interface PricingPlan {
  id: string
  name: string
  setup: string
  monthly: string
  includes: string[]
  note?: string
}

// Source of truth: official RaveWebs pricing sheet.
// Only the AI Automation — Lead Management System is offered.
export const pricingPlans: PricingPlan[] = [
  {
    id: 'lead-management-starter',
    name: 'Lead Management — Starter',
    setup: '$999',
    monthly: '$99',
    includes: [
      'Centralized Lead Dashboard',
      'AI Lead Scoring & Qualification',
      'Hot / Warm / Cold Prioritization',
      'Up to 500 leads / month',
      'Up to 3 users',
      'Email support',
    ],
    note: 'For solo founders and small teams getting started with lead management.',
  },
  {
    id: 'lead-management-growth',
    name: 'Lead Management — Growth',
    setup: '$2,499',
    monthly: '$249',
    includes: [
      'Everything in Starter',
      'AI-Generated Personalized Responses',
      'Follow-Up Management',
      'Lead Source Tracking',
      'Up to 2,000 leads / month',
      'Up to 10 users',
      'Priority email support',
    ],
    note: 'For growing sales teams with consistent inbound leads.',
  },
  {
    id: 'lead-management-scale',
    name: 'Lead Management — Scale',
    setup: '$4,999',
    monthly: '$499',
    includes: [
      'Everything in Growth',
      'Sales Pipeline & Revenue Insights',
      'Custom Integrations (up to 2)',
      'Advanced Reporting',
      'Up to 10,000 leads / month',
      'Up to 25 users',
      'Priority support',
    ],
    note: 'For established teams managing multiple lead sources.',
  },
  {
    id: 'lead-management-enterprise',
    name: 'Lead Management — Enterprise',
    setup: '$9,999',
    monthly: '$999',
    includes: [
      'Everything in Scale',
      'Custom Integrations & Data Migration',
      'Security, DPA & Access Controls',
      'Dedicated Onboarding & Training',
      'Custom lead volume',
      'Unlimited users',
      'SLA & Premium support',
    ],
    note: 'For large teams with custom workflows and compliance needs.',
  },
]