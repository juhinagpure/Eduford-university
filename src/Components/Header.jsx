// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';

const Header = () => {
  const showMenu = () => {
    document.getElementById("navLinks").style.right = "0";
  };

  const hideMenu = () => {
    document.getElementById("navLinks").style.right = "-200px";
  };

  return (
    <header className="header">
      <Navbar/>
      <div className="text-box">
        <h1>World's Biggest University</h1>
        <p>Education is essential in today's world. Explore the latest advancements and upcoming languages at our university. Dive into programming and much more.</p>
        <Link to="/contact" className="hero-btn">Visit Us To Know More</Link>
      </div>
    </header>
  );
};

export default Header;
