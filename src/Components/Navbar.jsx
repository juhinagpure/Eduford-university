import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../App.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/"><img src={Logo} alt="Eduford Logo" /></Link>
      <div className="nav-links" id="navLinks">
        <i className="fa fa-times" onClick={hideMenu}></i>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/course">COURSE</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
      <i className="fa fa-bars" onClick={showMenu}></i>
    </nav>
  );

  function showMenu() {
    document.getElementById('navLinks').style.right = "0";
  }

  function hideMenu() {
    document.getElementById('navLinks').style.right = "-200px";
  }
};

export default Navbar;
