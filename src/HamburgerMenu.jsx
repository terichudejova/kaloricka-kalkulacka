import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./HamburgerMenu.css"

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
      setIsOpen(false);
    }

    useEffect(() => {
      const handleClickOutside = (event) => {
          if (navRef.current && !navRef.current.contains(event.target)) {
              setIsOpen(false);
          }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    return (
      <div className="hamburger-menu">
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav ref={navRef} className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <a href="#firstSection" onClick={handleCloseMenu}>Jak to funguje?</a>
          <a href="#secondSection" onClick={handleCloseMenu}>Spočítat kalorie</a>
          <a href="#thirdSection" onClick={handleCloseMenu}>Chci vědět více</a>
        </nav>
      </div>
    );
  }