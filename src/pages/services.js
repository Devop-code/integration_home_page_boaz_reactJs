// filepath: /c:/Users/HP/integration_home_page_boaz_reactJs/src/pages/services.js
import React from "react";
import Footer from "../components/Footer";
import MainBox from "../components/mainBoxHeaderTop";
import servicesData from "../data/servicesData";
import NavOuter from "../components/navOuter";

const Services = () => {
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
                {/*Keep This Empty / Menu will come through Javascript*/}
              </ul>
              <ul className="contact-list-one">
                <li>
                  {/* Contact Info Box */}
                  <div className="contact-info-box">
                    <i className="icon lnr-icon-phone-handset" />
                    <span className="title">Call Now</span>
                    <a href="tel:+92880098670">
                      (+237) 656 186 936 / (+237) 676 726 905
                    </a>
                  </div>
                </li>
                <li>
                  {/* Contact Info Box */}
                  <div className="contact-info-box">
                    <span className="icon lnr-icon-envelope1" />
                    <span className="title">Send Email</span>
                    <a href="mailto:help@company.com">info@boaz-study.com</a>
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
                <NavOuter/>
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
            backgroundImage: `url(${process.env.PUBLIC_URL}/site_kit/images/background/page-title.jpg)`,
          }}
        >
          <div className="auto-container">
            <div className="title-outer">
              <h1 className="title">Visa Grid</h1>
              <ul className="page-breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </section>
        {/* end main-content */}
        {/* Services Section */}
        <section className="">
          <div className="container pb-90">
            <div className="row">
              {servicesData.map((service) => (
                <div className="service-block col-lg-4 col-md-6 col-sm-12" key={service.id}>
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <a href={service.readMoreLink}>
                          <img src={service.image} alt={`${service.title} icon`} width={"6720px"} height={"4480px"}/>
                        </a>
                      </figure>
                      <i className={`icon ${service.icon}`} />
                      <h6 className="title">{service.title}</h6>
                    </div>
                    <div className="content-box">
                      <h6 className="title">
                        <a href={service.readMoreLink}>{service.title}</a>
                      </h6>
                      <div className="text">{service.description}</div>
                      <a href={service.readMoreLink} className="read-more">
                        More <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End Services Section*/}
        {/* Main Footer */}
        <Footer />
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

export default Services;