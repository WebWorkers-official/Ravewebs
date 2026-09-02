import { useEffect, useRef, useState } from 'react'

/**
 * Tracks how far a section has scrolled through the viewport, as a 0–1
 * value: 0 when the section's top just enters the bottom of the screen,
 * 1 when its bottom leaves the top. Used to drive the scroll-linked
 * network visual without pulling in a dedicated scroll library.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    function update() {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const total = rect.height + vh
      const covered = vh - rect.top
      const p = Math.min(1, Math.max(0, covered / total))
      setProgress(p)
    }

    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return { ref, progress }
}
