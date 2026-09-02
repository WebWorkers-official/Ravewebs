const items = [
  'Lead Capture',
  'AI Voice Agents',
  'WhatsApp Automation',
  'Website Systems',
  'CRM Integration',
  'UGC & AI Ad Creative',
  'Workflow Automation',
  '24/7 Engagement',
]

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 whitespace-nowrap">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-secondary">{item}</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}
