// navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Header from './Header';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobile(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={handleLinkClick} className="logo">
        DressCode
      </Link>
      <div className={`nav-links ${isMobile ? 'active' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/" onClick={handleLinkClick}><Header /></Link>
        {/* Uncomment these as needed */}
        {/* <Link to="/Men" onClick={handleLinkClick}>Men</Link>
        <Link to="/Women" onClick={handleLinkClick}>Women</Link>
        <Link to="/Experience">Experience</Link> */}
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
      </div>
    </nav>
  );
};

export default Navbar;