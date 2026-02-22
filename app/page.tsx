import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Highlights from '@/components/Highlights'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-bg">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Highlights />
        <Contact />
      </main>
    </>
  )
}