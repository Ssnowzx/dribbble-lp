import Navbar from './components/blocks/Navbar'
import Hero from './components/blocks/Hero'
import LogoCloud from './components/blocks/LogoCloud'
import BentoGrid from './components/blocks/BentoGrid'
import Stats from './components/blocks/Stats'
import DevExperience from './components/blocks/DevExperience'
import Pricing from './components/blocks/Pricing'
import FAQ from './components/blocks/FAQ'
import Footer from './components/blocks/Footer'
import './styles/global.css'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoCloud />
      <Stats />
      <BentoGrid />
      <DevExperience />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App
