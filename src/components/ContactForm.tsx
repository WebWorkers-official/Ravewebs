import { useState, type FormEvent } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from './Button'
import { config } from '@/lib/config'

interface FormState {
  name: string
  company: string
  email: string
  looking_for: string
  budget: string
  message: string
}

const initialState: FormState = { name: '', company: '', email: '', looking_for: '', budget: '', message: '' }

type Status = 'idle' | 'loading' | 'success' | 'error' | 'not-configured'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!isValidEmail(form.email)) next.email = 'Enter a valid email address.'
    if (!form.looking_for.trim()) next.looking_for = 'Tell us what you want to build.'
    if (!form.message.trim()) next.message = 'A short message helps us prepare.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    if (!config.contactApiUrl) {
      setStatus('not-configured')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(config.contactApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-line-strong bg-surface px-6 py-16 text-center">
        <CheckCircle2 size={28} className="text-accent" />
        <p className="font-display text-lg font-semibold text-primary">Message sent.</p>
        <p className="text-sm text-secondary">We'll get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-line-strong bg-surface p-6 md:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input id="name" type="text" value={form.name} onChange={update('name')} className={inputCls} aria-invalid={!!errors.name} />
        </Field>
        <Field label="Business / Company" htmlFor="company">
          <input id="company" type="text" value={form.company} onChange={update('company')} className={inputCls} />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email}>
          <input id="email" type="email" value={form.email} onChange={update('email')} className={inputCls} aria-invalid={!!errors.email} />
        </Field>
        <Field label="Budget range (optional)" htmlFor="budget">
          <select id="budget" value={form.budget} onChange={update('budget')} className={inputCls}>
            <option value="">Prefer not to say</option>
            <option value="<5k">Under $5,000</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-50k">$15,000 – $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What are you looking to build?" htmlFor="looking_for" error={errors.looking_for}>
          <input id="looking_for" type="text" value={form.looking_for} onChange={update('looking_for')} className={inputCls} aria-invalid={!!errors.looking_for} placeholder="e.g. AI lead qualification for our sales team" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" htmlFor="message" error={errors.message}>
          <textarea id="message" rows={4} value={form.message} onChange={update('message')} className={inputCls} aria-invalid={!!errors.message} />
        </Field>
      </div>

      {status === 'not-configured' && (
        <p className="mt-5 flex items-start gap-2 rounded-lg border border-line px-3 py-2.5 text-xs text-muted">
          <AlertCircle size={14} className="mt-0.5 shrink-0" />
          This form isn't connected to a backend yet. Set <code className="font-mono">VITE_CONTACT_API_URL</code> in
          your environment (Formspree, Resend, Supabase, or a custom API) to receive submissions.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-5 flex items-start gap-2 rounded-lg border border-line px-3 py-2.5 text-xs text-danger">
          <AlertCircle size={14} className="mt-0.5 shrink-0" />
          Something went wrong sending your message. Please try again, or reach out directly.
        </p>
      )}

      <div className="mt-7">
        <Button type="submit" variant="primary" disabled={status === 'loading'} icon={status === 'loading' ? <Loader2 size={15} className="animate-spin" /> : undefined}>
          {status === 'loading' ? 'Sending…' : 'Start a Conversation'}
        </Button>
      </div>
    </form>
  )
}

const inputCls =
  'w-full rounded-lg border border-line-strong bg-app px-3.5 py-2.5 text-sm text-primary outline-none transition-colors placeholder:text-muted focus:border-accent'

function Field({ label, htmlFor, error, children }: { label: string; htmlFor: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-secondary">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-danger">{error}</p>}
    </div>
  )
}
