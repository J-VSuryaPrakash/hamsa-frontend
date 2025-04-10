import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-orange-950 w-full">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 relative">
        {/* Logo */}
        <div className="flex items-center z-10 sm:justify-between sm:w-1/4 sm:h-1/4">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-2xl" />
        </div>

        {/* HAMSA - centered across full width */}
        <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-0 sm:flex-grow sm:flex sm:justify-center">
          <h1 className="text-white font-bold text-3xl sm:text-5xl font-serif text-center">
            HAMSA
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex text-white text-lg font-serif gap-8 mr-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>
            About
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>
            Pricing
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>
            Contact Us
          </NavLink>
        </nav>

        {/* Hamburger (Mobile only) */}
        <div className="sm:hidden z-10">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-3 pb-4 text-white text-lg font-serif sm:hidden">
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>
            About
          </NavLink>
          <NavLink to="/pricing" onClick={toggleMenu} className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>
            Pricing
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
