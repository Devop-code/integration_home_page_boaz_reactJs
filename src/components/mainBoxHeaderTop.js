import React, { useState } from 'react';
import $ from 'jquery';

const MainBox = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("menuOpen state:", menuOpen);

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
                  <a href="mailto:info@boaz-study.com">info@boaz-study.com</a>
                </li>
                <li>
                  <i className="fa fa-map-marker" />
                  Douala, Bonapriso, 389 Rue Toyota
                </li>
                <li>
                  <i className="fa fa-clock" /> lundi - vendredi: 9.00 a 18.00
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
                <li><a href="#">Aide</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Contacter</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Header Lower */}
        <div className="header-lower">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo" style={{ background: 'white' }}>
                <a href="/">
                  <img src={`${process.env.PUBLIC_URL}/logo refais.png`} alt="" title="" />
                </a>
              </div>
            </div>

            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation">
                  <li><a href="/">Acceuil</a></li>
                  <li><a href="/about">A propos</a></li>
                  <li><a href="/service">Service</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/connexion">Connexion</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="/inscription">Inscription</a></li>
                  
                </ul>
              </nav>

              <div className="outer-box">
                <a href="tel:+92(8800)9806" className="info-btn">
                  <img src="images/icons/icon-phone.png" alt="" className="icon" />
                  <small>Call Anytime</small>
                  <strong>+ 92 ( 8800 ) 86300</strong>
                </a>

                <a href="page-contact.html" className="theme-btn btn-style-one">
                  <span className="btn-title">Nous Consultater</span>
                </a>

                {/* Mobile Nav toggler */}
                <div className="mobile-nav-toggler" onClick={() => setMenuOpen(true)}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
  <div className={`menu-backdrop ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)} />
  <nav className="menu-box">
    <div className="upper-box">
      <div className="nav-logo">
        <a href="index.html">
          <img src={`${process.env.PUBLIC_URL}/logo refais.png`} alt="" title="" />
        </a>
      </div>
      <div className="close-btn" onClick={() => setMenuOpen(false)}>
        <i className="icon fa fa-times" />
      </div>
    </div>

    <ul className="navigation clearfix">
      <li><a href="/">Accueil</a></li>
      <li><a href="/about">À propos</a></li>
      <li><a href="/service">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
            <ul className="contact-list-one">
              <li>
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Appeler</span>
                  <a href="tel:+92880098670">+92 (8800) - 98670</a>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Envoyer Email</span>
                  <a href="mailto:help@company.com">help@company.com</a>
                </div>
              </li>
            </ul>

            <ul className="social-links">
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-pinterest" /></a></li>
              <li><a href="#"><i className="fab fa-instagram" /></a></li>
            </ul>
          </nav>
        </div>

        {/* Sticky Header */}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <a href="index.html" title="">
                  <img src="images/logo-3.png" alt="" title="" />
                </a>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix"></ul>
                  </div>
                </nav>
                <div className="mobile-nav-toggler" onClick={() => setMenuOpen(true)}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <style>{`
  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100%;
    background: white;
    transition: right 0.3s ease-in-out;
    z-index: 1000;
    overflow-y: auto;
  }

  .mobile-menu.open {
    right: 0 !important;
  }

  .menu-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 999;
  }

  .menu-backdrop.show {
    display: block !important;
  }
`}</style>

    </>
  );
};

export default MainBox;
