export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  status: 'case-study' | 'coming-soon'
}

export const projects: Project[] = [
  {
    id: 'lead-command-center',
    name: 'AI Lead Command Center',
    description: 'An AI-powered lead management and qualification system designed to centralize incoming leads, automate qualification, prioritize opportunities and streamline follow-up.',
    tags: ['AI Lead Qualification', 'CRM', 'Automation', 'Follow-up', 'Analytics'],
    status: 'case-study',
  },
  {
    id: 'calling-automation',
    name: 'AI Calling Automation',
    description: 'Automated AI voice workflows designed to handle repetitive calls, qualification and follow-ups at scale.',
    tags: ['Voice AI', 'Qualification', 'Scheduling', 'Call Routing'],
    status: 'coming-soon',
  },
  {
    id: 'whatsapp-agent',
    name: 'AI WhatsApp Agent',
    description: 'Conversational AI systems for customer support, lead qualification, FAQs and business workflows through WhatsApp.',
    tags: ['Conversational AI', 'Support', 'Lead Qualification'],
    status: 'coming-soon',
  },
]
