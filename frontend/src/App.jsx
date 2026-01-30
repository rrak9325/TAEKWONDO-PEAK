import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Programs from './components/Programs'
import Schedule from './components/Schedule'

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
    </div>
  )
}