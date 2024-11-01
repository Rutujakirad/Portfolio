// Header.js
import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Headerr.css';

function Header() {
  return (
    <header className="header glass-effect">
      <h1 className="header-title">Rutuja Kirad</h1>
      <nav className="nav-links">
        <Link to="home" smooth={true} duration={500} spy={true} activeClass="active">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} spy={true} activeClass="active">
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} spy={true} activeClass="active">
          Projects
        </Link>
        <Link to="experience" smooth={true} duration={500} spy={true} activeClass="active">
          Experience
        </Link>
        <Link to="skills" smooth={true} duration={500} spy={true} activeClass="active">
          Skills
        </Link>
        <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
