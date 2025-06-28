import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// colors used
// e0e1dd
// 778da9
// 415a77
// 1b263b
const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      })()
  }, [])

  return (
    <div>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App