import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark'

const base = 'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0'

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-ink shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset] hover:brightness-110 hover:shadow-[0_10px_28px_-10px_var(--color-accent)]',
  secondary: 'border border-line-strong bg-transparent text-primary hover:border-accent hover:text-accent',
  ghost: 'bg-transparent text-secondary hover:text-primary',
  onDark: 'bg-accent text-ink hover:brightness-110 hover:shadow-[0_10px_28px_-10px_var(--color-accent)]',
}

interface CommonProps {
  variant?: Variant
  children: ReactNode
  icon?: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

export function Button(props: ButtonProps | LinkProps) {
  const { variant = 'primary', children, icon, className = '', ...rest } = props
  const cls = `${base} ${variants[variant]} ${className}`

  if (props.as === 'a') {
    const { as: _as, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { as?: string }
    return (
      <a className={cls} {...anchorRest}>
        {children}
        {icon}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={cls} {...buttonRest}>
      {children}
      {icon}
    </button>
  )
}
