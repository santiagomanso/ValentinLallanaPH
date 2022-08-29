import Navbar from './components/Navbar/Navbar'
import Floating from './components/Navbar/Floating'
import Intro from './components/Intro/Intro'
import Services from './components/Services/Services'
import './App.css'
import Experience from './components/Experience/Experience'
import Works from './components/Works/Works'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useContext } from 'react'
import { themeContext } from './Context'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      className='App'
      style={{
        background: darkMode
          ? 'linear-gradient(315deg, rgba(23,24,29,1) 0%, rgba(84,90,107,1) 24%, rgba(85,73,61,1) 72%, rgba(23,24,29,1) 91%)'
          : '',
        color: darkMode ? 'white' : '',
      }}
    >
      <Navbar />
      <Floating />
      <Intro />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
