import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
  };

  window.addEventListener("resize", showButton);

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
              Bio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bio" className="nav-links" onClick={closeMobileMenu}>
              Recursos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recursos" className="nav-links" onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-links" onClick={closeMobileMenu}>
              Contacto
            </Link>
          </li>
        </ul>
        {/* remove buttonStyle="btn--outline" to get rid of the outine */}
        {button && <Button buttonStyle="btn--outline">Accesso Alumnos</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar
