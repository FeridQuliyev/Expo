import { useState, useEffect } from 'react'
import "../Navbar/Navbar.css"
import { NavLink } from 'react-router-dom'
import logo from "../image/expo.webp"
function Navbar() {

  const [show, setShow] = useState(false);
  const [showul, setShowul] = useState(false);

  const ScrollHandler = () => { (window.scrollY > 100) ? setShow(true) : setShow(false) }

  useEffect(() => {
    ScrollHandler()
  }, [])

  window.addEventListener('scroll', ScrollHandler)

  const OpenMenu = (e) => {
    e.target.classList.toggle("active")
    setShowul(!showul)
  }

  return (
    <div className="navbar">
      <nav className={show ? 'active' : null}>
        <div className="logo"><NavLink exact to="/" ><img src={logo} alt="logo" /></NavLink></div>
        <label className="menu-btn">
          <i class="fas fa-bars" onClick={OpenMenu}></i>
        </label>
        <ul className={showul ? "active" : null}>
          <li><NavLink to="/" style={{ "--i": 0 }}>Home</NavLink></li>
          <li><NavLink to="/about" style={{ "--i": 1 }}>About</NavLink></li>
          <li><NavLink to="/services" style={{ "--i": 2 }}>Services</NavLink></li>
          <li><NavLink to="/contact" style={{ "--i": 3 }}>Contact</NavLink></li>
        </ul>
        <div id='but1' className="but"><button>
          <i class="fa-solid fa-phone"></i>
          <a href="tel:++10 (78) 678 595">+10 (78) 678 595</a>
        </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar