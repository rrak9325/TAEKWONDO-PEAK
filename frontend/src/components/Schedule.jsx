const schedule = [
  {
    day: 'Monday',
    classes: [
      { time: '4:00 PM', name: 'Kids Beginners', duration: '45 min' },
      { time: '5:00 PM', name: 'Kids Advanced', duration: '60 min' },
      { time: '6:30 PM', name: 'Teen / Adult', duration: '90 min' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '5:00 PM', name: 'All Levels', duration: '60 min' },
      { time: '7:00 PM', name: 'Sparring Class', duration: '60 min' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '4:00 PM', name: 'Kids Beginners', duration: '45 min' },
      { time: '5:00 PM', name: 'Kids Advanced', duration: '60 min' },
      { time: '6:30 PM', name: 'Teen / Adult', duration: '90 min' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '5:00 PM', name: 'All Levels', duration: '60 min' },
      { time: '7:00 PM', name: 'Forms & Techniques', duration: '60 min' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '4:30 PM', name: 'Kids All Levels', duration: '60 min' },
      { time: '6:00 PM', name: 'Competition Team', duration: '90 min' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { time: '10:00 AM', name: 'Family Class', duration: '60 min' },
      { time: '11:30 AM', name: 'Black Belt Club', duration: '90 min' },
    ],
  },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[color:var(--primary)]">
            Schedule
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Find your class
          </h2>
          <p className="mt-3 text-[color:var(--muted-foreground)]">
            Morning and evening options throughout the week.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {schedule.map((d) => (
            <div
              key={d.day}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 sm:p-6"
            >
              <p className="text-lg font-black text-[color:var(--primary)]">
                {d.day}
              </p>
              <div className="mt-4 grid gap-3">
                {d.classes.map((c, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-4 rounded-2xl border border-[color:var(--border)] bg-white/5 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold">{c.name}</p>
                      <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
                        {c.duration}
                      </p>
                    </div>
                    <p className="text-sm text-[color:var(--muted-foreground)]">
                      {c.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

