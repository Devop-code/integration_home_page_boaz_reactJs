import React from "react";
import MainBox from "../components/mainBoxHeaderTop";
import Footer from "../components/Footer";
import NavOuter from "../components/navOuter";
const About = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
        <div className="preloader" />
        {/* Main Header*/}
        <header className="main-header header-style-one">
          {/* Header Top */}
          <MainBox />
          {/* End Header Lower */}
          {/* Mobile Menu  */}
          <div className="mobile-menu">
            <div className="menu-backdrop" />
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
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
                <div className="close-btn">
                  <i className="icon fa fa-times" />
                </div>
              </div>
              <ul className="navigation clearfix">
                <li>
                  <a href="/"> Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/connexion"> Connexion</a>
                </li>
                <li>
                  <a href="/inscription">Inscription</a>
                </li>
              </ul>
              <ul className="contact-list-one">
                <li>
                  {/* Contact Info Box */}
                  <div className="contact-info-box">
                    <i className="icon lnr-icon-phone-handset" />
                    <span className="title">Call Now</span>
                    <a href="tel:+92880098670">+92 (8800) - 98670</a>
                  </div>
                </li>
                <li>
                  {/* Contact Info Box */}
                  <div className="contact-info-box">
                    <span className="icon lnr-icon-envelope1" />
                    <span className="title">Send Email</span>
                    <a href="mailto:help@company.com">help@company.com</a>
                  </div>
                </li>
                <li>
                  {/* Contact Info Box */}
                  <div className="contact-info-box">
                    <span className="icon lnr-icon-clock" />
                    <span className="title">Send Email</span>
                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                  </div>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* End Mobile Menu */}
          {/* Header Search */}

          {/* End Header Search */}
          {/* Sticky Header  */}
          <div className="sticky-header">
            <div className="auto-container">
              <div className="inner-container">
                {/*Logo*/}
                <div className="logo">
                  <a href="index.html" title="">
                    <img
                      src={`${process.env.PUBLIC_URL}/logo refais.png`}
                      alt=""
                      title=""
                    />
                  </a>
                </div>
                {/*Right Col*/}
                <NavOuter />
              </div>
            </div>
          </div>
          {/* End Sticky Menu */}
        </header>
        {/*End Main Header */}
        {/* Start main-content */}
        <section
          className="page-title"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/site_kit/images/background/about-2.jpg)`,
          }}
        >
          <div className="auto-container">
            <div className="title-outer">
              <h1 className="title">A propos de Nous</h1>
              <ul className="page-breadcrumb">
                <li>
                  <a href="/">Accueil</a>
                </li>

                <li>
                  <a href="/about">A propos</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* end main-content */}
        {/* About Section */}
        <section className="about-section">
          <div className="auto-container">
            <div className="row">
              <div
                className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight"
                data-wow-delay="600ms"
              >
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">
                      À propos de l'étude chez Boaz-study
                    </span>
                    <h2>
                      Offrant les meilleurs services{" "}
                      <span className="color3">D'etude en france</span>
                    </h2>
                    <h4>
                      BOAZ-STUDY est une société française spécialisée dans
                      l’accompagnement des étudiants en mobilité
                      internationale..
                    </h4>
                    <div className="text">
                      Elle accompagne les étudiants dans la réussite totale de
                      leurs projets d’études supérieures en leur proposant des
                      services d’accompagnement pour une meilleure orientation
                      dans les universités françaises, logement étudiant,
                      caution bancaire, achat de billet d’avion au prix le plus
                      abordable.
                    </div>
                  </div>
                  <div className="row">
                    <div className="about-block col-lg-6 col-md-6">
                      <div className="inner">
                        <i className="icon flaticon-passport-16" />
                        <h6 className="title">
                          meilleurs service
                          <br /> d'etude
                          <br /> en France
                        </h6>
                      </div>
                    </div>
                    <div className="text-block col-lg-6 col-md-6">
                      <div className="inner">
                        <div className="text">
                          Venez découvrir nos services et nos offres pour une
                          mobilité internationale réussie.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btm-box">
                    <a
                      href="http://www.boaz-study.com/register"
                      className="theme-btn btn-style-one"
                    >
                      <span className="btn-title">Prendre rendez vous</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="row">
                    <div className="column col-lg-6 col-md-6">
                      <div className="image-box">
                        <figure className="map">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/icons/map.png`}
                            alt=""
                          />
                        </figure>
                        <figure className="image-1 overlay-anim wow fadeInUp">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/about/about-1.jpg`}
                            alt=""
                          />
                        </figure>
                        <figure className="image-2 overlay-anim wow fadeInRight">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/about/about-2.jpg`}
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="column col-lg-6 col-md-6">
                      <div className="image-box">
                        <figure className="image-3 overlay-anim wow fadeInLeft">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/about/people-office-work-day.jpg`}
                            alt=""
                          />
                        </figure>
                        <div className="experience bounce-y">
                          <div className="inner">
                            <i className="icon flaticon-loyalty" />
                            <div className="text">
                              <strong>3800</strong> clients satisfaits
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <div className="outer-box">
            <div className="bg bg-pattern-6" />
            <div className="auto-container">
              <div className="row">
                {/* Title Column */}
                <div className="title-column col-lg-7 col-md-12 wow fadeInLRight">
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">Nous contacter</span>
                      <h2>
                        Prenez un <span className="color3">Rendez-vous</span>
                      </h2>
                      <div className="text">
                        Vous avez des Questions sur comments etudier en
                        France ? Contactez nous pour plus d'information
                      </div>
                    </div>
                    <ul className="list-style-two" style={{marginRight:'3rem'}}>
                      <li>
                        <i className="fa fa-check-circle" />
                        Vous souhaitez savoir si vous ete admissible a pouvoir
                        etudier en France ?
                      </li>
                      <li>
                        <i className="fa fa-check-circle" />
                        vous avez des Questions sur le processus de voyage,et
                        les delais de traitement ?
                      </li>
                      <li>
                        <i className="fa fa-check-circle" />
                        Vous chercher a Obtenir des conseils sur la maniere de
                        preparer votre demande ?
                      </li>
                    </ul>
                    <div className="ceo-info" style={{marginLeft:'5rem',marginTop:'10px'}}>
                      <figure className="thumb"style={{marginLeft:'4rem'}}>
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/pnk.png`}
                          alt=""
                        />
                      </figure >
                      <h6 className="name" style={{fontSize:'15px'}}>Pamela Nadette KOOH BISSECK</h6>
                      <div className="designation">Country Manager Cameroun</div>
                    </div>
                  </div>
                </div>
                {/* Form Column */}
                <div className="form-column col-lg-5 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="form-outer">
                      {/* Contact Form */}
                      <div className="contact-form wow fadeInLeft">
                        {/*Contact Form*/}
                        <form method="post" action="get" id="contact-form">
                          <div className="form-group">
                            <input
                              type="text"
                              name="full_name"
                              placeholder="votre nom"
                              required=""
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="Email"
                              placeholder="Addresse Email"
                              required=""
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              name="message"
                              placeholder="ecrire un Message"
                              required=""
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group">
                            <button
                              className="theme-btn btn-style-three"
                              type="submit"
                              name="submit-form"
                            >
                              <span className="btn-title">envoyer un Message</span>
                            </button>
                          </div>
                        </form>
                      </div>
                      {/*End Contact Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section  
  style={{
    width: '90%', /* Réduit légèrement la largeur pour mieux centrer */
    margin: 'auto', /* Centre horizontalement */
    marginBottom: '5rem',
    height: '500px', /* Ajoute une hauteur fixe */
    display: 'flex', /* Active le centrage */
    justifyContent: 'center', /* Centre horizontalement */
    alignItems: 'center' /* Centre verticalement */
  }}
>
  <iframe
    className="map"
    width="100%"
    height="100%"
    style={{
      border: "0",
      borderRadius: "10px" /* Optionnel : arrondir les bords pour un meilleur rendu */
    }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://maps.google.com/maps?q=4%20Pl.%20de%20la%20Défense,%2094974%20Paris,%20France&hl=fr&z=15&ie=UTF8&iwloc=&output=embed"
  ></iframe>
</section>

        {/*Emd About Section */}
        {/* Why Choose US */}

        {/* End Services Section*/}
        {/* Main Footer */}
        <Footer />
        {/*End Main Footer */}
      </div>
      {/* End Page Wrapper */}

      {/* Scroll To Top */}
      <div className="scroll-to-top scroll-to-target" data-target="html">
        <a href="#">
          <span className="fa fa-angle-up" />
        </a>
      </div>
    </>
  );
};

export default About;
