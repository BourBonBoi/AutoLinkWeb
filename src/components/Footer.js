import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">AutoLink</h3>
          <p className="footer-text">
            Лучшие автомобильные решения для вас
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Навигация</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Главная</Link></li>
            <li><Link to="/about" className="footer-link">О нас</Link></li>
            <li><Link to="/contacts" className="footer-link">Контакты</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Контакты</h4>
          <p className="footer-text">info@autolink.com</p>
          <p className="footer-text">+7 (123) 456-78-90</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AutoLink. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;