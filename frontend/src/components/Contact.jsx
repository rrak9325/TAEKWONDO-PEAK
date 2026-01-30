import { useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: 'Kids Program (Ages 5–12)',
  })

  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setStatus('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)
    setStatus('Opening WhatsApp…')

    const message = encodeURIComponent(
      `New Free Trial Request 🥋\n\n` +
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Program: ${formData.program}`
    )

    const yourNumber = '919081139325'
    const whatsappUrl = `https://wa.me/${yourNumber}?text=${message}`

    // Open WhatsApp normally (browser-safe)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setTimeout(() => {
      setStatus('Request ready! We’ll contact you shortly.')
      setIsSubmitting(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: 'Kids Program (Ages 5–12)',
      })
    }, 600)
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-[color:var(--background)] text-[color:var(--foreground)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[color:var(--primary)]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Book a free trial class
          </h2>
          <p className="mt-3 text-[color:var(--muted-foreground)]">
            Tell us what you’re interested in and we’ll reach out with next available times.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Info */}
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8">
            <p className="text-xl font-black">Contact info</p>

            <div className="mt-6 grid gap-6">
              {[
                {
                  icon: MapPin,
                  title: 'Location',
                  body: '123 Martial Arts Way\nYour City, State',
                },
                { icon: Phone, title: 'Phone', body: '+91 90811 39325' },
                { icon: Mail, title: 'Email', body: 'info@elitetkd.com' },
                {
                  icon: Clock,
                  title: 'Hours',
                  body: 'Mon–Fri: 4:00 PM – 9:00 PM\nSat: 10:00 AM – 2:00 PM\nSun: Closed',
                },
              ].map((row) => (
                <div key={row.title} className="flex gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary)]/15">
                    <row.icon size={20} className="text-[color:var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-black">{row.title}</p>
                    <p className="mt-1 text-sm text-[color:var(--muted-foreground)] whitespace-pre-line">
                      {row.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8">
            <p className="text-xl font-black">Request a free trial</p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {['firstName', 'lastName'].map((field, i) => (
                  <div key={field} className="grid gap-2">
                    <label className="text-sm font-semibold">
                      {i === 0 ? 'First name' : 'Last name'}
                    </label>
                    <input
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="h-12 rounded-2xl border border-[color:var(--border)] bg-transparent px-4 text-sm outline-none focus:border-[color:var(--primary)]"
                      required
                    />
                  </div>
                ))}
              </div>

              {['email', 'phone'].map((field) => (
                <div key={field} className="grid gap-2">
                  <label className="text-sm font-semibold">
                    {field === 'email' ? 'Email' : 'Phone'}
                  </label>
                  <input
                    name={field}
                    type={field === 'email' ? 'email' : 'tel'}
                    value={formData[field]}
                    onChange={handleChange}
                    className="h-12 rounded-2xl border border-[color:var(--border)] bg-transparent px-4 text-sm outline-none focus:border-[color:var(--primary)]"
                    required
                  />
                </div>
              ))}

              <div className="grid gap-2">
                <label className="text-sm font-semibold">Interested program</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="h-12 rounded-2xl border border-[color:var(--border)] bg-transparent px-4 text-sm outline-none focus:border-[color:var(--primary)]"
                >
                  <option>Kids Program (Ages 5–12)</option>
                  <option>Teen Program (Ages 13–17)</option>
                  <option>Adult Program (Ages 18+)</option>
                  <option>Competition Team</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 h-12 rounded-2xl bg-[color:var(--primary)] text-[color:var(--primary-foreground)] font-semibold hover:opacity-90 disabled:opacity-60"
              >
                {isSubmitting ? 'Opening WhatsApp…' : 'Request free trial'}
              </button>

              {status && (
                <p className="text-sm text-center text-[color:var(--muted-foreground)]">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
