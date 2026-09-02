import { useEffect, useRef } from 'react'

interface NetworkVisualProps {
  /** 0 = calm / sparse, 1 = fully connected / expanded */
  progress?: number
  className?: string
  density?: number
}

interface Node {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  r: number
}

/**
 * RaveWebs' signature technology visual: a soft field of connected nodes
 * rendered on canvas, with depth faked through size/opacity (z), gentle
 * drift, and a "progress" value (0–1) that controls how many connections
 * light up. Used at large scale in the hero, and at smaller scale to tie
 * the Build → Automate → Grow story together.
 *
 * Deliberately 2D-canvas rather than a 3D engine: it keeps the bundle
 * small, degrades gracefully on low-end devices, and respects
 * prefers-reduced-motion by freezing on a single static frame.
 */
export function NetworkVisual({ progress = 0.5, className = '', density = 1 }: NetworkVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const progressRef = useRef(progress)
  progressRef.current = progress

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSmall = window.innerWidth < 768
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0
    let nodes: Node[] = []
    let raf = 0

    const baseCount = isSmall ? 16 : 30
    const count = Math.round(baseCount * density)

    function resize() {
      if (!canvas) return
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        vx: (Math.random() - 0.5) * (isSmall ? 0.06 : 0.12),
        vy: (Math.random() - 0.5) * (isSmall ? 0.06 : 0.12),
        r: 1.4 + Math.random() * 1.8,
      }))
    }

    const inkRGB = '245,244,239'
    const accentRGB = '74,222,128'

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)
      const p = progressRef.current
      const linkDist = width * (isSmall ? 0.22 : 0.2) * (0.55 + p * 0.7)

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < linkDist) {
            const t = 1 - dist / linkDist
            const isLit = (i + j) % 5 === Math.floor(p * 4)
            ctx.strokeStyle = isLit
              ? `rgba(${accentRGB}, ${(0.28 + t * 0.4).toFixed(3)})`
              : `rgba(${inkRGB}, ${(0.08 + t * 0.14).toFixed(3)})`
            ctx.lineWidth = isLit ? 1.2 : 0.7
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const depth = 0.5 + n.z * 0.5
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * depth, 0, Math.PI * 2)
        ctx.fillStyle = n.z > 0.72 ? `rgba(${accentRGB}, ${(0.65 + p * 0.3).toFixed(3)})` : `rgba(${inkRGB}, ${(0.4 * depth).toFixed(3)})`
        ctx.fill()

        if (!reduceMotion) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }
    }

    function loop() {
      draw()
      if (!reduceMotion) raf = requestAnimationFrame(loop)
    }

    resize()
    draw()
    if (!reduceMotion) raf = requestAnimationFrame(loop)

    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Abstract animation of a connected technology network, representing RaveWebs' build, automate and grow systems"
    />
  )
}
