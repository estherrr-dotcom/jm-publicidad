import NavBar from '../sections/NavBar'
import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import Capabilities from '../sections/Capabilities'
import Portfolio from '../sections/Portfolio'
import FinalCTA from '../sections/FinalCTA'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="bg-primary-bg min-h-screen">
      <NavBar activeLink="home" />
      <main className="pt-[68px]">
        <Hero />
        <Stats />
        <Capabilities />
        <Portfolio />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
