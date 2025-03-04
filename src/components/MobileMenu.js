import React, { useState } from "react";
import "../styles/mobile.css"
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Bouton burger pour ouvrir le menu */}
      <div className="mobile-nav-toggler" onClick={toggleMenu}>
        <span className="icon lnr-icon-bars" />
      </div>

      {/* Menu mobile */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-backdrop" onClick={toggleMenu} />
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <a href="/">
                <img src={`${process.env.PUBLIC_URL}/logo refais.png`} alt="Logo" />
              </a>
            </div>
            {/* Bouton pour fermer le menu */}
            <div className="close-btn" onClick={toggleMenu}>
              <i className="icon fa fa-times" />
            </div>
          </div>

          {/* Navigation */}
          <ul className="navigation clearfix">
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          {/* Liste de contacts */}
          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset" />
                <span className="title">Call Now</span>
                <a href="tel:+92880098670">+92 (8800) - 98670</a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1" />
                <span className="title">Send Email</span>
                <a href="mailto:info@boaz-study.com">info@boaz-study.com</a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-clock" />
                <span className="title">Opening Hours</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>

          {/* Réseaux sociaux */}
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-twitter" /></a></li>
            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
            <li><a href="#"><i className="fab fa-pinterest" /></a></li>
            <li><a href="#"><i className="fab fa-instagram" /></a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
