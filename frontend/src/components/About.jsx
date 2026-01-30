import { Award, Calendar, Target, Users } from 'lucide-react'

const stats = [
  { icon: Calendar, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Students Trained' },
  { icon: Award, value: '4th Dan', label: 'Black Belt' },
  { icon: Target, value: '100+', label: 'Tournament Wins' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[color:var(--primary)]">
              About
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Learn from the best
            </h2>
            <p className="mt-4 text-[color:var(--muted-foreground)]">
              We teach Taekwondo the right way: strong fundamentals, safe
              sparring, and measurable progress. Our goal is to help every
              student grow—on the mat and off it.
            </p>
            <p className="mt-3 text-[color:var(--muted-foreground)]">
              Expect a supportive vibe, clear coaching, and training that scales
              to your level.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 text-center"
                >
                  <s.icon
                    className="mx-auto text-[color:var(--primary)]"
                    size={20}
                  />
                  <p className="mt-2 text-xl font-black">{s.value}</p>
                  <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[color:var(--muted-foreground)]">
                    Our values
                  </p>
                  <p className="mt-1 text-2xl font-black">Discipline. Respect. Growth.</p>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-[color:var(--muted-foreground)]">
                  Since 2009
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {[
                  {
                    title: 'Confidence',
                    desc: 'Small wins, consistent coaching, real progress.',
                  },
                  {
                    title: 'Fitness',
                    desc: 'Cardio + strength + mobility, built into class.',
                  },
                  {
                    title: 'Self‑defense',
                    desc: 'Practical movement and awareness, taught safely.',
                  },
                ].map((r) => (
                  <div
                    key={r.title}
                    className="rounded-3xl border border-[color:var(--border)] bg-white/5 p-4"
                  >
                    <p className="font-black">{r.title}</p>
                    <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                      {r.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[color:var(--primary)]/15 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

