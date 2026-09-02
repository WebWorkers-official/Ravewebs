export interface PricingPlan {
  id: string
  name: string
  setup: string
  monthly: string
  includes: string[]
  note?: string
}

// Source of truth: official RaveWebs pricing sheet.
export const pricingPlans: PricingPlan[] = [
  {
    id: 'lead-management',
    name: 'AI Automation — Lead Management System',
    setup: '$799',
    monthly: '$49–$99',
    includes: [
      'Lead Capture & Management',
      'Automated Follow-ups (Email/SMS)',
      'CRM Integration',
      'Dashboard & Analytics',
      'Workflow Automation',
    ],
    note: 'Monthly maintenance keeps the system updated, secure, and running 24/7 with support.',
  },
  {
    id: 'ai-calling-agent',
    name: 'AI Calling Agent',
    setup: '$499',
    monthly: '$49–$79',
    includes: [
      'AI Voice Setup',
      'Call Handling & Routing',
      'Appointment Booking',
      'Call Logs & Transcripts',
      'CRM Integration',
    ],
    note: 'Usage/API charges are billed separately based on call volume.',
  },
  {
    id: 'ai-whatsapp-agent',
    name: 'AI WhatsApp Agent',
    setup: '$499',
    monthly: '$39–$79',
    includes: [
      'AI Chatbot Setup',
      'Automated Replies',
      'Lead Qualification',
      'CRM Integration',
      '24/7 Engagement',
    ],
    note: 'WhatsApp Business API charges are billed separately by Meta.',
  },
  {
    id: 'website-development',
    name: 'Website Development',
    setup: '$500+',
    monthly: '$29–$49',
    includes: [
      'Custom Website Design',
      'Responsive Mobile + Desktop',
      'Basic SEO Setup',
      'Contact/Lead Forms',
      'Speed & Security Setup',
    ],
    note: 'Setup price is based on project scope. Maintenance includes hosting, updates, security monitoring and basic support.',
  },
  {
    id: 'ai-ad-ugc',
    name: 'AI Ad & UGC Ad Creation',
    setup: '$449',
    monthly: '$449',
    includes: [
      '10 Premium UGC/AI Videos per month',
      'Script + Visuals + Editing',
      'Hook-focused & Engaging',
      'For Ads, Reels, TikTok, Shorts',
    ],
    note: 'Minimum 2-month commitment. Pay for the month and receive 10 videos; the next month is optional.',
  },
]
