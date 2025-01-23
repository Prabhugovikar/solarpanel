// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Solar Company. All Rights Reserved.</p>
        <p>
          Designed with ❤️ by Solar Company Team | <a href="/">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
