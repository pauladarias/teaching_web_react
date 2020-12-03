import React, {useState} from 'react';
import { Link } from "react-router-dom"


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        {/* add here logo img */}
          BELEN 
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bio" className="nav-links" onClick={closeMobileMenu}>
              Bio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recursos" className="nav-links" onClick={closeMobileMenu}>
              Recursos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-links" onClick={closeMobileMenu}>
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
              Registrate
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
