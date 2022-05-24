import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Services from "./Components/Services/Services"
import Contact from './Components/Contact/Contact'
import ScrollToTop from "./Components/ScrollToTop"
function App() {
  return ( 
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App;