import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">AutoLink</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Главная</Link>
        <Link to="/updates">Обновления</Link>
        <Link to="/allPosts">Новости</Link>
        <Link to="/about">О нас</Link>
      </nav>
    </header>
  );
}