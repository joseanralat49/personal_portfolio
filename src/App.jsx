import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="pt-20 text-white relative bg-tech overflow-hidden">
    <Header/>
    <About/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App