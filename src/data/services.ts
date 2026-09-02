import type { LucideIcon } from 'lucide-react'
import { Inbox, PhoneCall, MessageSquare, LayoutTemplate, Clapperboard } from 'lucide-react'

export interface Service {
  id: string
  title: string
  problem: string
  solution: string
  benefit: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'lead-management',
    title: 'AI Automation — Lead Management System',
    problem: 'Leads come in from five different places and half of them never get a timely reply.',
    solution: 'One system captures every lead, scores it, and follows up automatically over email and SMS.',
    benefit: 'A pipeline your team can see at a glance, with fewer leads slipping through the cracks.',
    icon: Inbox,
  },
  {
    id: 'ai-calling-agent',
    title: 'AI Calling Agent',
    problem: 'Inbound calls go unanswered outside business hours, and outbound follow-ups get deprioritized.',
    solution: 'A voice agent that answers, routes and books appointments, with every call logged and transcribed.',
    benefit: 'Consistent phone coverage without adding headcount.',
    icon: PhoneCall,
  },
  {
    id: 'ai-whatsapp-agent',
    title: 'AI WhatsApp Agent',
    problem: 'Customers expect an instant reply on WhatsApp — most businesses can only offer one during work hours.',
    solution: 'An AI chatbot that answers questions, qualifies leads and hands off to your team when it matters.',
    benefit: '24/7 engagement on the channel your customers already use.',
    icon: MessageSquare,
  },
  {
    id: 'website-development',
    title: 'Website Development',
    problem: 'A dated or slow website undersells a business that is otherwise doing well.',
    solution: 'A custom, responsive website built around speed, clarity and lead capture — with basic SEO in place from day one.',
    benefit: 'A site that looks credible to new customers and is easy to keep updated.',
    icon: LayoutTemplate,
  },
  {
    id: 'ai-ad-ugc',
    title: 'AI Ad & UGC Ad Creation',
    problem: 'Good ad creative is expensive and slow to produce at the volume paid social requires.',
    solution: 'Hook-focused UGC and AI-generated video ads — scripted, shot or generated, and edited for Reels, TikTok and Shorts.',
    benefit: 'A steady stream of fresh creative without a full production team.',
    icon: Clapperboard,
  },
]
