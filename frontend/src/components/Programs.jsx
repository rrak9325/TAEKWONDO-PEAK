import { Flame, Shield, Trophy, Users } from 'lucide-react'

const programs = [
  {
    icon: Users,
    title: 'Kids Program',
    age: 'Ages 5–12',
    description:
      'Fun, structured classes that build focus, coordination, and confidence.',
  },
  {
    icon: Flame,
    title: 'Teen Program',
    age: 'Ages 13–17',
    description:
      'Athletic training with forms, sparring, and self‑defense tailored for teens.',
  },
  {
    icon: Trophy,
    title: 'Adult Program',
    age: 'Ages 18+',
    description:
      'Get fit, learn practical self‑defense, and progress at your pace—no experience needed.',
  },
  {
    icon: Shield,
    title: 'Competition Team',
    age: 'By invitation',
    description:
      'High-performance coaching for tournaments: sparring tactics, conditioning, mindset.',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[color:var(--primary)]">
            Programs
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Training for every age
          </h2>
          <p className="mt-3 text-[color:var(--muted-foreground)]">
            Beginner-friendly fundamentals, real progression, and a supportive
            community.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 sm:p-6 hover:border-[color:var(--primary)]/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary)]/15 group-hover:bg-[color:var(--primary)]/20">
                  <p.icon className="text-[color:var(--primary)]" size={20} />
                </div>
                <span className="rounded-full border border-[color:var(--border)] bg-white/5 px-3 py-1 text-xs font-semibold text-[color:var(--muted-foreground)]">
                  {p.age}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-black">{p.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

