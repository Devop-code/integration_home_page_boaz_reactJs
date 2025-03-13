import React, { useState } from "react";
import $ from "jquery";

const MainBox = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("fr"); // État de la langue (français par défaut)

  // Contenu multilingue
  const translations = {
    fr: {
      email: "info@boaz-study.com",
      location: "Douala, Bonapriso, 389 Rue Toyota",
      hours: "lundi - vendredi: 9.00 a 18.00",
      help: "Aide",
      support: "Support",
      contact: "Contacter",
      callAnytime: "Appelez à tout moment",
      consult: "Nous Consulter",
      home: "Accueil",
      about: "À propos",
      services: "Services",
      contactPage: "Contact",
      login: "Connexion",
      blog: "Blog",
      register: "Inscription",
      translate: "🇫🇷 Français",
    },
    en: {
      email: "info@boaz-study.com",
      location: "Douala, Bonapriso, 389 Rue Toyota",
      hours: "Monday - Friday: 9:00 AM to 6:00 PM",
      help: "Help",
      support: "Support",
      contact: "Contact",
      callAnytime: "Call Anytime",
      consult: "Consult Us",
      home: "Home",
      about: "About",
      services: "Services",
      contactPage: "Contact",
      login: "Login",
      blog: "Blog",
      register: "Register",
      translate: "🇬🇧 English",
    },
  };

  return (
    <>
      <header className="main-header header-style-one">
        {/* Header Top */}
        <div className="header-top">
          <div className="inner-container">
            <div className="top-left">
              <ul className="list-style-one">
                <li>
                  <i className="fa fa-envelope" />{" "}
                  <a href="mailto:info@boaz-study.com">
                    {translations[language].email}
                  </a>
                </li>
                <li>
                  <i className="fa fa-map-marker" />
                  {translations[language].location}
                </li>
                <li>
                  <i className="fa fa-clock" /> {translations[language].hours}
                </li>
              </ul>
            </div>
            <div className="top-right">
              <ul className="social-icon-one">
                <li>
                  <a href="https://twitter.com/boazstudy">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/boazstudy">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/boazstudy/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
              <ul className="useful-links">
                <li>
                  <a href="#">{translations[language].help}</a>
                </li>
                <li>
                  <a href="#">{translations[language].support}</a>
                </li>
                <li>
                  <a href="#">{translations[language].contact}</a>
                </li>
              </ul>

              {/* Bouton de traduction */}
            </div>
          </div>
        </div>

        {/* Header Lower */}
        <div className="header-lower">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo" style={{ background: "white" }}>
                <a href="/">
                  <img
                    src={`${process.env.PUBLIC_URL}/logo refais.png`}
                    alt=""
                    title=""
                  />
                </a>
              </div>
            </div>

            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation">
                  <li>
                    <a href="/" className="text-decoration-none">
                      {translations[language].home}
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-decoration-none">
                      {translations[language].about}
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-decoration-none">
                      {translations[language].services}
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-decoration-none">
                      {translations[language].contactPage}
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-decoration-none">
                      {translations[language].blog}
                    </a>
                  </li>
                  <li>
                    <a href="/connexion" className="text-decoration-none">
                      {translations[language].login}
                    </a>
                  </li>
                  
                  <li>
                    <a href="/inscription" className="text-decoration-none">
                      {translations[language].register}
                    </a>
                  </li>
                 
                </ul>
              </nav>

              <div className="outer-box">
                <a href="tel:+92(8800)9806" className="info-btn">
                  <img
                    src="images/icons/icon-phone.png"
                    alt=""
                    className="icon"
                  />
                  <small>{translations[language].callAnytime}</small>
                  <strong>+ 92 ( 8800 ) 86300</strong>
                </a>

                <a href="page-contact.html" className="theme-btn btn-style-one">
                  <span className="btn-title">
                    {translations[language].consult}
                  </span>
                </a>

                {/* Mobile Nav toggler */}
                <div
                  className="mobile-nav-toggler"
                  onClick={() => setMenuOpen(true)}
                >
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
              <img
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                src={`${process.env.PUBLIC_URL}/site_kit/images/resource/angleterre.png`}
                style={{ width: "2%", margin: "0px", cursor: "pointer" }}
                alt="Changer en anglais"
              />
              <img
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                src={`${process.env.PUBLIC_URL}/site_kit/images/resource/rond.png`}
                style={{ width: "2%", cursor: "pointer" }}
                alt="Changer en français"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <div
            className={`menu-backdrop ${menuOpen ? "show" : ""}`}
            onClick={() => setMenuOpen(false)}
          />
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <a href="index.html">
                  <img
                    src={`${process.env.PUBLIC_URL}/logo refais.png`}
                    alt=""
                    title=""
                  />
                </a>
              </div>
              <div className="close-btn" onClick={() => setMenuOpen(false)}>
                <i className="icon fa fa-times" />
              </div>
            </div>

            <ul className="navigation clearfix">
              <li>
                <a href="/">{translations[language].home}</a>
              </li>
              <li>
                <a href="/about">{translations[language].about}</a>
              </li>
              <li>
                <a href="/service">{translations[language].services}</a>
              </li>
              <li>
                <a href="/contact">{translations[language].contactPage}</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainBox;
