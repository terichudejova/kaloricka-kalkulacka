import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./HamburgerMenu.css"

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="hamburger-menu">
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <a href="#firstSection">Jak to funguje?</a>
          <a href="#secondSection">Spočítat kalorie</a>
          <a href="#thirdSection">Chci vědět více</a>
          <a href='#footer'>Kontakt</a>
        </nav>
      </div>
    );
  }