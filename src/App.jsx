import { useRef } from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import Variants from './components/Variants'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './index.css'

function App() {
  const featuresRef = useRef(null)
  const onExplore = () => {
    const el = document.getElementById('features')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-neutral-950 text-white">
      <Hero onExplore={onExplore} />
      <div className="bg-white text-neutral-900">
        <Problem />
        <Solution />
        <Features />
        <Variants />
        <Reviews />
        <Gallery />
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default App
