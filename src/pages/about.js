import React from 'react'
import MainBox from "../components/mainBoxHeaderTop";
import Footer from '../components/Footer';
const About = () => {
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
                <img src={`${process.env.PUBLIC_URL}/BOAZ  B-05.png`} alt="" title="" />
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
                <img src={`${process.env.PUBLIC_URL}/boaz studies sans back.png`} alt="" title="" />
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
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/site_kit/images/background/page-title.jpg)` }}
    >
      <div className="auto-container">
        <div className="title-outer">
          <h1 className="title">About Us</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>About</li>
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
                <span className="sub-title">about the company</span>
                <h2>
                  Providing the best immigration{" "}
                  <span className="color3">services</span>
                </h2>
                <h4>Canada based immigration consultant agency.</h4>
                <div className="text">
                  Web designing in a powerful way of just not an only
                  professions, however, in a passion for our Company. We have to
                  a tendency to believe the idea that smart looking of any
                  website is the first impression on visitors.
                </div>
              </div>
              <div className="row">
                <div className="about-block col-lg-6 col-md-6">
                  <div className="inner">
                    <i className="icon flaticon-passport-16" />
                    <h6 className="title">
                      Best Immigration
                      <br /> Services
                    </h6>
                  </div>
                </div>
                <div className="text-block col-lg-6 col-md-6">
                  <div className="inner">
                    <div className="text">
                      We have to a tendency to believe the idea that smart
                      looking.
                    </div>
                  </div>
                </div>
              </div>
              <div className="btm-box">
                <a href="page-about.html" className="theme-btn btn-style-one">
                  <span className="btn-title">Discover More</span>
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
                      <img src={`${process.env.PUBLIC_URL}/images/icons/map.png`} alt="" />
                    </figure>
                    <figure className="image-1 overlay-anim wow fadeInUp">
                      <img src={`${process.env.PUBLIC_URL}/site_kit/images/resource/about-1.jpg`} alt="" />
                    </figure>
                    <figure className="image-2 overlay-anim wow fadeInRight">
                      <img src={`${process.env.PUBLIC_URL}/site_kit/images/resource/about-2.jpg`}alt="" />
                    </figure>
                  </div>
                </div>
                <div className="column col-lg-6 col-md-6">
                  <div className="image-box">
                    <figure className="image-3 overlay-anim wow fadeInLeft">
                      <img src={`${process.env.PUBLIC_URL}/site_kit/images/resource/about-3.jpg`} alt="" />
                    </figure>
                    <div className="experience bounce-y">
                      <div className="inner">
                        <i className="icon flaticon-loyalty" />
                        <div className="text">
                          <strong>3800</strong> Satisfied Clients
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
    {/*Emd About Section */}
    {/* Why Choose US */}
    <section className="why-choose-us pt-0">
      <div className="bg bg-pattern-1" />
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">countries you can visit</span>
          <h2>
            Few reasons to choose <br />
            our visa <span className="color3">company</span>
          </h2>
        </div>
        <div className="row">
          {/* Features Block */}
          <div className="feature-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <i className="icon flaticon-interview" />
              <span className="cat">The eget mattis</span>
              <h6 className="title">
                <a href="page-about.html">Direct Interviews</a>
              </h6>
            </div>
          </div>
          {/* Features Block */}
          <div
            className="feature-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="inner-box">
              <div className="content">
                <i className="icon flaticon-low-cost" />
                <span className="cat">The eget mattis</span>
                <h6 className="title">
                  <a href="page-about.html">Cost Effective</a>
                </h6>
              </div>
            </div>
          </div>
          {/* Features Block */}
          <div
            className="feature-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="inner-box">
              <div className="content">
                <i className="icon flaticon-loyalty" />
                <span className="cat">The eget mattis</span>
                <h6 className="title">
                  <a href="page-about.html">Trusted Customers</a>
                </h6>
              </div>
            </div>
          </div>
          {/* Features Block */}
          <div
            className="feature-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="900ms"
          >
            <div className="inner-box">
              <div className="content">
                <i className="icon flaticon-online-support" />
                <span className="cat">The eget mattis</span>
                <h6 className="title">
                  <a href="page-about.html">Support Team</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-text">
          Top rated by customers &amp; immigration firms with 100% success rate.{" "}
          <a href="page-service.html" className="theme-btn btn-style-two">
            Discover More
          </a>
        </div>
      </div>
    </section>
    {/*Emd Why Choose US */}
    {/* Training Section */}
    <section className="training-section">
      <div className="bg bg-pattern-2" />
      <div
        className="bg bg-image"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/site_kit/images/resource/image-1.jpg)` }}
      />
      <div className="auto-container">
        <div className="sec-title">
          <span className="sub-title">Training &amp; Certification</span>
          <h2>
            Get the Immigration <br /> Trainings you{" "}
            <span className="color3">Deserve</span>
          </h2>
          <a href="#" className="theme-btn btn-style-two">
            Discover More
          </a>
        </div>
        <div className="carousel-outer">
          <div className="training-carousel owl-carousel owl-theme">
            {/* Training Block */}
            <div className="training-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src={`${process.env.PUBLIC_URL}/site_kit/images/resource/training-1.jpg`} alt="" />
                  </figure>
                  <div className="overlay">
                    <a href="" className="read-more">
                      <i className="fa fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
                <div className="lower-content">
                  <a href="page-course-details.html" className="read-more">
                    <i className="fa fa-long-arrow-alt-right" />
                  </a>
                  <h5 className="title">
                    <a href="page-course-details.html">Citizenship Test</a>
                  </h5>
                  <div className="text">
                    There are many variations of passages of available, but the
                    majority have suffered freedom alteration.
                  </div>
                </div>
              </div>
            </div>
            {/* Training Block */}
            <div className="training-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src= {`${process.env.PUBLIC_URL}/site_kit/images/resource/training-2.jpg`} alt="" />
                  </figure>
                  <div className="overlay">
                    <a href="page-course-details.html" className="read-more">
                      <i className="fa fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
                <div className="lower-content">
                  <a href="page-course-details.html" className="read-more">
                    <i className="fa fa-long-arrow-alt-right" />
                  </a>
                  <h5 className="title">
                    <a href="page-course-details.html">Take IELTS</a>
                  </h5>
                  <div className="text">
                    There are many variations of passages of available, but the
                    majority have suffered freedom alteration.
                  </div>
                </div>
              </div>
            </div>
            {/* Training Block */}
            <div className="training-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src={`${process.env.PUBLIC_URL}/site_kit/images/resource/training-3.jpg `} alt="" />
                  </figure>
                  <div className="overlay">
                    <a href="page-course-details.html" className="read-more">
                      <i className="fa fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
                <div className="lower-content">
                  <a href="page-course-details.html" className="read-more">
                    <i className="fa fa-long-arrow-alt-right" />
                  </a>
                  <h5 className="title">
                    <a href="page-course-details.html">PTE Coaching</a>
                  </h5>
                  <div className="text">
                    There are many variations of passages of available, but the
                    majority have suffered freedom alteration.
                  </div>
                </div>
              </div>
            </div>
            {/* Training Block */}
            <div className="training-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src={`${process.env.PUBLIC_URL}/site_kit/images/resource/training-1.jpg`} alt="" />
                  </figure>
                  <div className="overlay">
                    <a href="page-course-details.html" className="read-more">
                      <i className="fa fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
                <div className="lower-content">
                  <a href="page-course-details.html" className="read-more">
                    <i className="fa fa-long-arrow-alt-right" />
                  </a>
                  <h5 className="title">
                    <a href="page-course-details.html">Citizenship Test</a>
                  </h5>
                  <div className="text">
                    There are many variations of passages of available, but the
                    majority have suffered freedom alteration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Training Section */}
    {/* Services Section */}
    <section className="services-section">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-title">
              <span className="sub-title">What do we offer</span>
              <h2>
                Outstanding immigration visa{" "}
                <span className="color3">services.</span>
              </h2>
              <div className="text">
                Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem is simply free text quis bibendum.
              </div>
            </div>
          </div>
          {/* Service Block */}
          <div className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="page-service-details.html">
                    <img src={`${process.env.PUBLIC_URL}/site_kit/images/resource/service-1.jpg`} alt="" />
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
          <div
            className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="page-service-details.html">
                    <img src={`${process.env.PUBLIC_URL}/site_kit/images/resource/service-2.jpg`} alt="" />
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
          <div className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="page-service-details.html">
                    <img src={`${process.env.PUBLIC_URL}/site_kit/images/resource/service-3.jpg`} alt="" />
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
          <div
            className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="page-service-details.html">
                    <img src={`${process.env.PUBLIC_URL}/site_kit/images/resource/service-4.jpg `} alt="" />
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
          <div
            className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="page-service-details.html">
                    <img src={`${process.env.PUBLIC_URL}/site_kit/images/resource/service-5.jpg `} alt="" />
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
          {/* CTA Block */}
          <div
            className="cta-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="inner-box">
              <h4 className="title">
                <a href="page-service.html">Get visa with 100% success rate</a>
              </h4>
              <a
                href="page-service.html"
                className="theme-btn btn-style-three small"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section*/}
    {/* Main Footer */}
      <Footer/>
    {/*End Main Footer */}
  </div>
  {/* End Page Wrapper */}
  {/* Scroll To Top */}
  <div className="scroll-to-top scroll-to-target" data-target="html">
  <a href='#'><span className="fa fa-angle-up" /></a>
  </div>
</>

  )
}

export default About