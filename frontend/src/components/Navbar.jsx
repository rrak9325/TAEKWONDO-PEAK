import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

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
  const [dark, setDark] = useState(false)

  // Load theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }, [])

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const root = document.documentElement
    if (root.classList.contains('dark')) {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDark(false)
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDark(true)
    }
  }

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'border-b border-[color:rgb(var(--border))]',
        'bg-[color:rgb(var(--background))]/80 backdrop-blur-md',
        scrolled ? 'shadow-sm shadow-black/20' : '',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-[color:rgb(var(--primary))]">
              ELITE
            </span>
            <span className="text-xl font-black tracking-tight">TKD</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[color:rgb(var(--muted-foreground))] hover:text-[color:rgb(var(--foreground))]"
              >
                {l.label}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-xl border border-[color:rgb(var(--border))] p-2"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="rounded-xl bg-[color:rgb(var(--primary))] px-4 py-2 text-sm font-semibold text-[color:rgb(var(--primary-foreground))]"
            >
              Book a Free Trial
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="rounded-xl border border-[color:rgb(var(--border))] p-2 md:hidden"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-[color:rgb(var(--muted-foreground))]"
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </a>
              ))}

              <button
                onClick={toggleTheme}
                className="mt-2 rounded-xl border border-[color:rgb(var(--border))] px-4 py-2 text-sm"
              >
                {dark ? 'Light Mode' : 'Dark Mode'}
              </button>

              <a
                href="#contact"
                className="rounded-xl bg-[color:rgb(var(--primary))] px-4 py-2 text-center text-sm font-semibold text-[color:rgb(var(--primary-foreground))]"
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
