// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Vishwa Solar Syatems</div>
      <nav className={`nav ${isMobileMenuOpen ? "nav-mobile" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          About Us
        </Link>
        <Link to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          Services
        </Link>
        <Link to="/gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          Projects
        </Link>
        <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          Contact Us
        </Link>
      </nav>
      <div
        className="menu-icon"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </div>
    </header>
  );
};

export default Header;
