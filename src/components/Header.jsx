import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header support-header">
      <div className="header-top container">
        <NavLink to="/">
          <img
            src="/images/nvidia pulse.png"
            alt="NVIDIA Pulse Logo"
            className="site-logo"
          />
        </NavLink>
        <div className="divider"></div>
        <h1 className="site-title">NVIDIA Pulse</h1>
      </div>
      <div className="nav-container container">
        <button
          className="hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle Navigation"
        >
          <span></span><span></span><span></span>
        </button>
        <nav className="site-nav">
          <ul
            id="navList"
            className={open ? 'nav-list open' : 'nav-list'}
          >
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/developers">Developers</NavLink></li>
            <li><NavLink to="/community">Community</NavLink></li>
            <li><NavLink to="/support">Support</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/ContactForm">Contact Us</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
