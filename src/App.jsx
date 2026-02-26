import {BrowserRouter, Routes, Route} from "react-router-dom"


import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import WebDesign from "./components/WebDesing.jsx"


function Home() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-design" element={<WebDesign />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App