import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[color:var(--primary)]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Book a free trial class
          </h2>
          <p className="mt-3 text-[color:var(--muted-foreground)]">
            Tell us what you’re interested in and we’ll reach out with the next
            available times.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8">
            <p className="text-xl font-black">Contact info</p>
            <div className="mt-6 grid gap-4">
              {[
                {
                  icon: MapPin,
                  title: 'Location',
                  body: (
                    <>
                      123 Martial Arts Way
                      <br />
                      Your City, State 12345
                    </>
                  ),
                },
                { icon: Phone, title: 'Phone', body: '(555) 123‑4567' },
                { icon: Mail, title: 'Email', body: 'info@elitetkd.com' },
                {
                  icon: Clock,
                  title: 'Hours',
                  body: (
                    <>
                      Mon–Fri: 4:00 PM – 9:00 PM
                      <br />
                      Sat: 10:00 AM – 2:00 PM
                      <br />
                      Sun: Closed
                    </>
                  ),
                },
              ].map((row) => (
                <div key={row.title} className="flex gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary)]/15">
                    <row.icon className="text-[color:var(--primary)]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-black">{row.title}</p>
                    <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                      {row.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8">
            <p className="text-xl font-black">Request a free trial</p>
            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" placeholder="John" />
                <Field label="Last name" placeholder="Doe" />
              </div>
              <Field label="Email" placeholder="john@example.com" type="email" />
              <Field label="Phone" placeholder="(555) 123‑4567" type="tel" />

              <div className="grid gap-2">
                <label className="text-sm font-semibold">Interested program</label>
                <select className="h-11 w-full rounded-2xl border border-[color:var(--border)] bg-white/5 px-4 text-sm text-[color:var(--foreground)] outline-none focus:ring-2 focus:ring-[color:var(--ring)]">
                  <option>Kids Program (Ages 5–12)</option>
                  <option>Teen Program (Ages 13–17)</option>
                  <option>Adult Program (Ages 18+)</option>
                  <option>Competition Team</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-[color:var(--primary)] px-6 text-sm font-semibold text-[color:var(--primary-foreground)] hover:opacity-90"
              >
                Request free trial
              </button>

              <p className="text-xs text-[color:var(--muted-foreground)]">
                This form is UI-only for now. We can wire it to email/Forms/API
                next.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, placeholder, type = 'text' }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-[color:var(--border)] bg-white/5 px-4 text-sm text-[color:var(--foreground)] outline-none placeholder:text-[color:var(--muted-foreground)] focus:ring-2 focus:ring-[color:var(--ring)]"
      />
    </div>
  )
}

