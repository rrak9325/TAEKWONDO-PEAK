import { ArrowRight, CheckCircle2 } from 'lucide-react'

const bullets = [
  'Kids • Teens • Adults',
  'Confidence & discipline',
  'Fitness & self‑defense',
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 sm:pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[min(52rem,92vw)] -translate-x-1/2 rounded-full bg-[color:var(--primary)]/15 blur-3xl sm:h-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-[color:var(--muted-foreground)] uppercase">
              Traditional martial arts • modern coaching
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Master the art of{' '}
              <span className="text-[color:var(--primary)]">Taekwondo</span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-[color:var(--muted-foreground)] sm:text-lg">
              Build discipline, confidence, and strength through authentic
              training. Friendly atmosphere, structured progress, and goals you
              can feel.
            </p>

            <div className="mt-6 grid gap-2">
              {bullets.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 text-sm text-[color:var(--foreground)]/90"
                >
                  <CheckCircle2 size={18} className="text-[color:var(--primary)]" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] hover:opacity-90 sm:w-auto"
              >
                Start with a free class
                <ArrowRight size={18} />
              </a>
              <a
                href="#programs"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-[color:var(--border)] px-6 py-3 text-sm font-semibold hover:bg-white/5 sm:w-auto"
              >
                View programs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-2xl shadow-black/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[color:var(--muted-foreground)]">
                    Belt Journey
                  </p>
                  <p className="mt-1 text-2xl font-black">Your next level</p>
                </div>
                <span className="rounded-full bg-[color:var(--primary)]/15 px-3 py-1 text-xs font-semibold text-[color:var(--primary)]">
                  New students welcome
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  { label: 'Warm‑up & mobility', value: 25 },
                  { label: 'Technique', value: 60 },
                  { label: 'Sparring', value: 45 },
                  { label: 'Forms', value: 40 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between text-xs text-[color:var(--muted-foreground)]">
                      <span>{row.label}</span>
                      <span>{row.value}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/5">
                      <div
                        className="h-2 rounded-full bg-[color:var(--primary)]"
                        style={{ width: `${row.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-3xl bg-[color:var(--primary)]/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

