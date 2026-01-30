import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    root.classList.toggle('dark')
    const isDark = root.classList.contains('dark')
    setDark(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        fixed bottom-5 right-5 z-[60]
        h-12 w-12 rounded-full
        flex items-center justify-center
        border border-[color:var(--border)]
        bg-[color:var(--card)]
        shadow-lg
        hover:scale-105 transition
      "
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
