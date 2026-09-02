import { SectionHeading } from '@/components/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export function FeaturedWork() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-ww">
        <SectionHeading
          eyebrow="Featured Work"
          heading="Systems we've built."
          subheading="Practical technology designed around real business workflows."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
