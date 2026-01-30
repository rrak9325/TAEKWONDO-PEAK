import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle' // 👈 ADD THIS
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Programs />
        <About />
        <Schedule />
        <Contact />
      </main>

      <Footer />

      {/* Global floating button */}
      <ThemeToggle /> {/* 👈 MOVE IT HERE */}
    </div>
  )
}
