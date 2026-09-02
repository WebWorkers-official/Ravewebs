const stages = [
  { label: 'Build', detail: 'A website and digital presence that actually represents the business.' },
  { label: 'Automate', detail: 'AI agents and workflows that handle the repetitive, time-consuming work.' },
  { label: 'Grow', detail: 'Systems that keep working after launch — capturing and converting leads.' },
]

export function TrustStrip() {
  return (
    <section id="intro" className="border-y border-line py-12 md:py-14">
      <div className="container-ww">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {stages.map((stage) => (
            <div key={stage.label} className="flex flex-col gap-1.5">
              <p className="font-display text-lg font-bold text-primary">{stage.label}</p>
              <p className="text-sm leading-relaxed text-secondary">{stage.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
