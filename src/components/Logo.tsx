interface LogoProps {
  className?: string
}

/**
 * RaveWebs wordmark, built from the node/network motif used across the
 * site's technology visuals.
 */
export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-primary ${className}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="0" y="6" width="8" height="8" rx="2" fill="var(--color-accent)" />
        <rect x="10" y="0" width="8" height="8" rx="2" fill="var(--color-accent-bright)" opacity="0.6" />
        <rect x="10" y="12" width="8" height="8" rx="2" fill="currentColor" />
      </svg>
      <span className="font-display font-bold text-lg tracking-tight">RaveWebs</span>
    </span>
  )
}
