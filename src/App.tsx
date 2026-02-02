import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Differentials from './components/Differentials'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Differentials />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
