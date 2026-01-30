export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-[color:var(--primary)]">
              ELITE
            </span>
            <span className="text-lg font-black">TKD</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-[color:var(--muted-foreground)]">
            {[
              { href: '#home', label: 'Home' },
              { href: '#programs', label: 'Programs' },
              { href: '#about', label: 'About' },
              { href: '#schedule', label: 'Schedule' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </a>
            ))}
          </div>

          <p className="text-sm text-[color:var(--muted-foreground)]">
            {new Date().getFullYear()} Elite Taekwondo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

