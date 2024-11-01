// components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Rutuja Kirad. All rights reserved.</p>
      <nav>
        <a href="#home">Home</a> | 
        <a href="#about">About</a> | 
        <a href="#projects">Projects</a> | 
        <a href="#experience">Experience</a> | 
        <a href="#skills">Skills</a> | 
        <a href="#contact">Contact</a>
      </nav>
    </footer>
  );
}

export default Footer;
