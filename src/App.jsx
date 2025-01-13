import { useState } from 'react'
import Navbar from './components/Navbar'
import FeatureCard from './components/FeatureCard'
import { ShopSchool } from './assets/featureImages'
import Footer from './components/Footer'
import Home from './sections/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#E3E6E6]">
        <Navbar />
        <div className="flex-grow">
          <Home />
        </div>
        {/* Footer will stay at the bottom */}
        <Footer />
      </div>
    </>
  )
}

export default App

