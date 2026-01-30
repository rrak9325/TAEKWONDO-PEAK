import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#programs', label: 'Programs' },
  { href: '#about', label: 'About' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'border-b border-[color:var(--border)]',
        'bg-[color:var(--background)]/80 backdrop-blur-md',
        scrolled ? 'shadow-sm shadow-black/20' : '',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-[color:var(--primary)]">
              ELITE
            </span>
            <span className="text-xl font-black tracking-tight">TKD</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-[color:var(--primary)] px-4 py-2 text-sm font-semibold text-[color:var(--primary-foreground)] hover:opacity-90"
            >
              Book a Free Trial
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-[color:var(--border)] p-2 md:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-[color:var(--muted-foreground)] hover:bg-white/5 hover:text-[color:var(--foreground)]"
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 rounded-xl bg-[color:var(--primary)] px-4 py-2 text-center text-sm font-semibold text-[color:var(--primary-foreground)] hover:opacity-90"
                onClick={() => setIsOpen(false)}
              >
                Book a Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

