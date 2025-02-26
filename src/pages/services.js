import Footer from '../components/Footer';
import React from 'react'
import MainBox from "../components/mainBoxHeaderTop";
const Services = () => {
  return (
    <>
  <div className="page-wrapper">
    {/* Preloader */}
    <div className="preloader" />
    {/* Main Header*/}
    <header className="main-header header-style-one">
      {/* Header Top */}
      <MainBox/>
      {/* End Header Lower */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" title="" />
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
                <img src="images/logo-3.png" alt="" title="" />
              </a>
            </div>
            {/*Right Col*/}
            <div className="nav-outer">
              {/* Main Menu */}
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    {/*Keep This Empty / Menu will come through Javascript*/}
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
      style={{ backgroundImage: "url(images/background/page-title.jpg)" }}
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
          {/* Service Block */}
          <div className="service-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="page-service-details.html">
                    <img src="images/resource/service-1.jpg" alt="" />
                  </a>
                </figure>
                <i className="icon fa fa-graduation-cap" />
                <h6 className="title">Student Visa</h6>
              </div>
              <div className="content-box">
                <h6 className="title">
                  <a href="page-service-details.html">Student Visa</a>
                </h6>
                <div className="text">
                  We have to a tendency to believe the idea that smart looking
                  of any website.
                </div>
                <a href="page-service-details.html" className="read-more">
                  More <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* Service Block */}
          <div className="service-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="page-service-details.html">
                    <img src="images/resource/service-2.jpg" alt="" />
                  </a>
                </figure>
                <i className="icon fa fa-briefcase" />
                <h6 className="title">Business Visa</h6>
              </div>
              <div className="content-box">
                <h6 className="title">
                  <a href="page-service-details.html">Business Visa</a>
                </h6>
                <div className="text">
                  We have to a tendency to believe the idea that smart looking
                  of any website.
                </div>
                <a href="page-service-details.html" className="read-more">
                  More <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* Service Block */}
          <div className="service-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="page-service-details.html">
                    <img src="images/resource/service-3.jpg" alt="" />
                  </a>
                </figure>
                <i className="icon fa fa-family" />
                <h6 className="title">Family Visa</h6>
              </div>
              <div className="content-box">
                <h6 className="title">
                  <a href="page-service-details.html">Family Visa</a>
                </h6>
                <div className="text">
                  We have to a tendency to believe the idea that smart looking
                  of any website.
                </div>
                <a href="page-service-details.html" className="read-more">
                  More <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* Service Block */}
          <div className="service-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="page-service-details.html">
                    <img src="images/resource/service-4.jpg" alt="" />
                  </a>
                </figure>
                <i className="icon fa fa-camera" />
                <h6 className="title">Tourist Visa</h6>
              </div>
              <div className="content-box">
                <h6 className="title">
                  <a href="page-service-details.html">Tourist Visa</a>
                </h6>
                <div className="text">
                  We have to a tendency to believe the idea that smart looking
                  of any website.
                </div>
                <a href="page-service-details.html" className="read-more">
                  More <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* Service Block */}
          <div className="service-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="page-service-details.html">
                    <img src="images/resource/service-5.jpg" alt="" />
                  </a>
                </figure>
                <i className="icon fa fa-home" />
                <h6 className="title">Residence Visa</h6>
              </div>
              <div className="content-box">
                <h6 className="title">
                  <a href="page-service-details.html">Residence Visa</a>
                </h6>
                <div className="text">
                  We have to a tendency to believe the idea that smart looking
                  of any website.
                </div>
                <a href="page-service-details.html" className="read-more">
                  More <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* Service Block */}
          <div className="service-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="page-service-details.html">
                    <img src="images/resource/service-2.jpg" alt="" />
                  </a>
                </figure>
                <i className="icon fa fa-briefcase" />
                <h6 className="title">Business Visa</h6>
              </div>
              <div className="content-box">
                <h6 className="title">
                  <a href="page-service-details.html">Business Visa</a>
                </h6>
                <div className="text">
                  We have to a tendency to believe the idea that smart looking
                  of any website.
                </div>
                <a href="page-service-details.html" className="read-more">
                  More <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section*/}
    {/* Main Footer */}

    {/*End Main Footer */}
  <Footer/>
  </div>
  {/* End Page Wrapper */}
  {/* Scroll To Top */}
  <div className="scroll-to-top scroll-to-target" data-target="html">
     <a href='#'><span className="fa fa-angle-up" /></a>
  </div>
</>

  )
}

export default Services