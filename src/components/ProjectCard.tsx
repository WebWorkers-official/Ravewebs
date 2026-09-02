import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import type { Project } from '@/data/projects'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group flex flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.28)]"
    >
      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[11px] text-muted">0{index + 1}</span>
          <span
            className={
              project.status === 'case-study'
                ? 'rounded-full bg-glow px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent'
                : 'rounded-full border border-line-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted'
            }
          >
            {project.status === 'case-study' ? 'Case Study' : 'Coming Soon'}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-primary">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-secondary">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] text-muted">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {project.status === 'case-study' ? (
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
          className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
        >
          Ask about this <ArrowUpRight size={14} />
        </a>
      ) : (
        <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-muted">
          <Clock size={14} /> In development
        </span>
      )}
    </motion.article>
  )
}
