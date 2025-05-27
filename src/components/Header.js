import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Reset.css';
import '../styles/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>AutoLink</Link>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Главная</Link>
        <Link to="/updates" onClick={closeMenu}>Обновления</Link>
        <Link to="/allPosts" onClick={closeMenu}>Новости</Link>
        <Link to="/about" onClick={closeMenu}>О нас</Link>
      </nav>
    </header>
  );
}
