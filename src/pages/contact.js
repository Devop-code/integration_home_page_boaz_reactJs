import React from "react";
import MainBox from "../components/mainBoxHeaderTop";
import Footer from "../components/Footer";
const Contact = () => {
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
                    <img src={`${process.env.PUBLIC_URL}/logo refais.png`} alt="" title="" />
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
          <div className="search-popup">
            <span className="search-back-drop" />
            <button className="close-search">
              <span className="fa fa-times" />
            </button>
            <div className="search-inner">
              <form method="post" action="index.html">
                <div className="form-group">
                  <input
                    type="search"
                    name="search-field"
                    defaultValue=""
                    placeholder="Search..."
                    required=""
                  />
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* End Header Search */}
          {/* Sticky Header  */}
          <div className="sticky-header">
            <div className="auto-container">
              <div className="inner-container">
                {/*Logo*/}
                <div className="logo">
                  <a href="index.html" title="">
                    <img src={`${process.env.PUBLIC_URL}/logo refais.png`} alt="" title="" />
                  </a>
                </div>
                {/*Right Col*/}
                <div className="nav-outer">
                  {/* Main Menu */}
                  <nav className="main-menu">
                    <div className="navbar-collapse show collapse clearfix">
                      <ul className="navigation clearfix">
                        {/*Keep This Empty / Menu will come through Javascript*/}
                        <li >
                      <a href="/"> Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li >
                      <a href="/contact">Contact</a>
                    </li>
                    <li >
                      <a href="/services">Services</a>
                    </li>
                    <li >
                      <a href="/connexion"> Connexion</a>
                    </li>
                    <li >
                      <a href="/inscription">Inscription</a>
                    </li>
                      </ul>
                    </div>
                  </nav>
                  {/* Main Menu End*/}
                  {/*Mobile Navigation Toggler*/}
                  <div className="mobile-nav-toggler">
                    <span className="icon lnr-icon-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Sticky Menu */}
        </header>
        {/*End Main Header */}
        {/* Start main-content */}
        <section
          className="page-title"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/site_kit/images/background/page-title.jpg)` }}
        >
          <div className="auto-container">
            <div className="title-outer">
              <h1 className="title">Contact Us</h1>
              <ul className="page-breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </section>
        {/* end main-content */}
        {/*Contact Details Start*/}
        <section className="contact-details">
          <div className="container ">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="sec-title">
                  <span className="sub-title">Send us email</span>
                  <h2>Feel free to write</h2>
                </div>
                {/* Contact Form */}
                <form
                  id="contact_form"
                  name="contact_form"
                  className=""
                  action="includes/sendmail.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="form_name"
                          className="form-control"
                          type="text"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="form_email"
                          className="form-control required email"
                          type="email"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="form_subject"
                          className="form-control required"
                          type="text"
                          placeholder="Enter Subject"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="form_phone"
                          className="form-control"
                          type="text"
                          placeholder="Enter Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="form_message"
                      className="form-control required"
                      rows={7}
                      placeholder="Enter Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="form_botcheck"
                      className="form-control"
                      type="hidden"
                      defaultValue=""
                    />
                    <button
                      type="submit"
                      className="theme-btn btn-style-one"
                      data-loading-text="Please wait..."
                    >
                      <span className="btn-title">Send message</span>
                    </button>
                    <button
                      type="reset"
                      className="theme-btn btn-style-one bg-theme-color5"
                    >
                      <span className="btn-title">Reset</span>
                    </button>
                  </div>
                </form>
                {/* Contact Form Validation*/}
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="contact-details__right">
                  <div className="sec-title">
                    <span className="sub-title">Need any help?</span>
                    <h2>Get in touch with us</h2>
                    <div className="text">
                      Vous avez en projet la poursuite de votre cursus
                      académique en France ? Nos équipes au Cameroun, en France
                      et à l’international vous attendent !
                    </div>
                  </div>
                  <ul className="list-unstyled contact-details__info">
                    <li>
                      <div className="icon bg-theme-color2">
                        <span className="lnr-icon-phone-plus" />
                      </div>
                      <div className="text">
                        <h6>Have any question?</h6>
                        <a href="tel:980089850">
                          <span>Free</span>(+237) 656 186 936 / (+237) 676 726 905
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="lnr-icon-envelope1" />
                      </div>
                      <div className="text">
                        <h6>Write email</h6>
                        <a href="mailto:needhelp@company.com">
                        info@boaz-study.com
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="lnr-icon-location" />
                      </div>
                      <div className="text">
                        <h6>Visit anytime</h6>
                        <span>Douala, Bonapriso, 389 Rue Toyota</span><br/>
                        <span>Yaoundé, Total Ecole de police, 
                          entre l’hôtel Florencia et CCA Bank</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Details End*/}
        {/* Divider: Google Map */}
        <section>
          <div className="container-fluid p-0">
            <div className="row">
              {/* Google Map HTML Codes */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843149788316!2d144.9537131159042!3d-37.81714274201087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1583760510840!5m2!1sbn!2sbd"
                data-tm-width="100%"
                height={500}
                frameBorder={0}
                allowFullScreen=""
              />
            </div>
          </div>
        </section>
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

export default Contact;
