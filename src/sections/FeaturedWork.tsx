import { SectionHeading } from '@/components/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export function FeaturedWork() {
  return (
    <section id="work" className="relative overflow-hidden bg-surface py-16 md:py-28">
      {/* Ambient Background Glow (Matches the rest of the site) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container-ww relative z-10">
        <SectionHeading
          eyebrow="Featured Work"
          heading="Systems we've built."
          subheading="Practical technology designed around real business workflows."
        />

        {/* Changed gap-6 to gap-5 on mobile for tighter cards, and reduced top margin */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
