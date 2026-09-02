export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'What type of businesses do you work with?',
    answer: 'Small and mid-sized businesses that rely on leads, customer conversations, or repetitive operational work — service businesses, agencies, retailers, and growing consumer brands.',
  },
  {
    question: 'Can you build custom AI systems?',
    answer: 'Yes. We design AI systems around a specific workflow — lead qualification, support, or calling — rather than dropping in a generic chatbot.',
  },
  {
    question: 'Can you integrate AI with our existing CRM?',
    answer: "Yes. We connect new automation to the tools you already use, or build a CRM layer if you don't have one that fits your workflow.",
  },
  {
    question: 'Can you build a website from scratch?',
    answer: 'Yes. Websites are designed and built end-to-end — architecture, copy direction, design and development.',
  },
  {
    question: 'Can you automate our existing workflow?',
    answer: 'In most cases, yes. We start by mapping the current workflow, then identify where automation removes manual effort without breaking what already works.',
  },
  {
    question: 'Can you work with international clients?',
    answer: 'Yes. We work remotely with clients across time zones and coordinate over call, email and messaging platforms.',
  },
  {
    question: 'How does the process start?',
    answer: 'With a call. We discuss your business, current workflow and goals, then follow up with a scoped plan before any build work begins.',
  },
]
