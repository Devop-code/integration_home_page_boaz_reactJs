import React from 'react'

const Test = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <title>
    Immigro | Visa &amp; Immigrations Services HTML Template | Home Page 01
  </title>
  {/* Stylesheets */}
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link
    href={`${process.env.PUBLIC_URL}/site_kit/plugins/revolution/css/settings.css`}
    rel="stylesheet"
    type="text/css"
  />
  {/* REVOLUTION SETTINGS STYLES */}
  <link
    href={`${process.env.PUBLIC_URL}/site_kit/plugins/revolution/css/layers.css`}
    rel="stylesheet"
    type="text/css"
  />
  {/* REVOLUTION LAYERS STYLES */}
  <link
    href="plugins/revolution/css/navigation.css"
    rel="stylesheet"
    type="text/css"
  />
  {/* REVOLUTION NAVIGATION STYLES */}
  <link href="css/style.css" rel="stylesheet" />
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
  <link rel="icon" href="images/favicon.png" type="image/x-icon" />
  {/* Responsive */}
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
  {/*[if lt IE 9]><![endif]*/}
  {/*[if lt IE 9]><![endif]*/}
  <div className="page-wrapper">
    {/* Preloader */}
    <div className="preloader" />
    {/* Main Header*/}
    <header className="main-header header-style-one">
      {/* Header Top */}
      <div className="header-top">
        <div className="inner-container">
          <div className="top-left">
            {/* Info List */}
            <ul className="list-style-one">
              <li>
                <i className="fa fa-envelope" />{" "}
                <a href="mailto:needhelp@company.com">needhelp@company.com</a>
              </li>
              <li>
                <i className="fa fa-map-marker" /> 88 Broklyn Golden Street. New
                York
              </li>
              <li>
                <i className="fa fa-clock" /> Mon _ Sat: 9.00 to 18.00
              </li>
            </ul>
          </div>
          <div className="top-right">
            <ul className="social-icon-one">
              <li>
                <a href="#">
                  <span className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-instagram" />
                </a>
              </li>
            </ul>
            <ul className="useful-links">
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Header Top */}
      {/* Header Lower */}
      <div className="header-lower">
        {/* Main box */}
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" title="" />
              </a>
            </div>
          </div>
          {/*Nav Box*/}
          <div className="nav-outer">
            <nav className="nav main-menu">
              <ul className="navigation">
                <li className="current dropdown">
                  <a href="index.html">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">Home page 01</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home page 02</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home page 03</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Dark Styles</a>
                      <ul>
                        <li>
                          <a href="index-1-dark.html">Home Dark 01</a>
                        </li>
                        <li>
                          <a href="index-2-dark.html">Home Dark 02</a>
                        </li>
                        <li>
                          <a href="index-3-dark.html">Home Dark 03</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Boxed Styles</a>
                      <ul>
                        <li>
                          <a href="index-1-boxed.html">Home Boxed 01</a>
                        </li>
                        <li>
                          <a href="index-2-boxed.html">Home Boxed 02</a>
                        </li>
                        <li>
                          <a href="index-3-boxed.html">Home Boxed 03</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Single Styles</a>
                      <ul>
                        <li>
                          <a href="index-1-Single.html">Home Single One</a>
                        </li>
                        <li>
                          <a href="index-2-Single.html">Home Single Two</a>
                        </li>
                        <li>
                          <a href="index-3-Single.html">Home Single Three</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="index-1-rtl.html">Home RTL 01</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Header Styles</a>
                      <ul>
                        <li>
                          <a href="index.html">Header Style 01</a>
                        </li>
                        <li>
                          <a href="index-2.html">Header Style 02</a>
                        </li>
                        <li>
                          <a href="index-3.html">Header Style 03</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Pages</a>
                  <ul>
                    <li>
                      <a href="page-about.html">About</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Country</a>
                      <ul>
                        <li>
                          <a href="page-country.html">Country grid</a>
                        </li>
                        <li>
                          <a href="page-country-details.html">
                            Country Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Team</a>
                      <ul>
                        <li>
                          <a href="page-team.html">Team List</a>
                        </li>
                        <li>
                          <a href="page-team-details.html">Team Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="page-testimonial.html">Testimonial</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Shop</a>
                      <ul>
                        <li>
                          <a href="shop-products.html">Products</a>
                        </li>
                        <li>
                          <a href="shop-products-sidebar.html">
                            Products with Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-details.html">
                            Product Details
                          </a>
                        </li>
                        <li>
                          <a href="shop-cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="shop-checkout.html">Checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="page-FAQ.html">FAQ</a>
                    </li>
                    <li>
                      <a href="page-404.html">Page 404</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Visa</a>
                  <ul>
                    <li>
                      <a href="page-service.html">Visa grid</a>
                    </li>
                    <li>
                      <a href="page-service-details.html">Visa Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Coaching</a>
                  <ul>
                    <li>
                      <a href="page-course.html">Coaching grid</a>
                    </li>
                    <li>
                      <a href="page-course-details.html">Coaching Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">News</a>
                  <ul>
                    <li>
                      <a href="news-grid.html">News Grid</a>
                    </li>
                    <li>
                      <a href="news-details.html">News Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="page-contact.html">Contact</a>
                </li>
              </ul>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box">
              <a href="tel:+92(8800)9806" className="info-btn">
                <img
                  src="images/icons/icon-phone.png"
                  alt=""
                  className="icon"
                />
                <small>Call Anytime</small>
                <strong>+ 92 ( 8800 ) 86300</strong>
              </a>
              <div className="ui-btn-outer">
                <button className="ui-btn ui-btn search-btn">
                  <span className="icon lnr lnr-icon-search" />
                </button>
              </div>
              <a href="page-contact.html" className="theme-btn btn-style-one">
                <span className="btn-title">Book Consultation</span>
              </a>
              {/* Mobile Nav toggler */}
              <div className="mobile-nav-toggler">
                <span className="icon lnr-icon-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
    {/* Main Slider */}
    <section className="main-slider">
      <div
        className="rev_slider_wrapper fullwidthbanner-container"
        id="rev_slider_one_wrapper"
        data-source="gallery"
      >
        <div
          className="rev_slider fullwidthabanner"
          id="rev_slider_one"
          data-version="5.4.1"
        >
          <ul>
            {/* Slide 1 */}
            <li data-index="rs-1" data-transition="zoomout">
              {/* MAIN IMAGE */}
              <img
                src="images/main-slider/1.jpg"
                alt=""
                className="rev-slidebg"
              />
              <div
                className="tp-caption"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[15,15,15,15]"
                data-paddingright="[15,15,15,15]"
                data-paddingtop="[0,0,0,0]"
                data-responsive_offset="on"
                data-type="text"
                data-height="none"
                data-width="['750','750','750','650']"
                data-whitespace="normal"
                data-hoffset="['600','0','0','0']"
                data-voffset="['-70','-70','-70','-90']"
                data-x="['left','left','left','left']"
                data-y="['middle','middle','middle','middle']"
                data-textalign="['top','top','top','top']"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              >
                <h1>
                  Best Visa <span className="color3">&amp;</span> <br />
                  Immigrations <br />
                  Services
                </h1>
              </div>
              <div
                className="tp-caption"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[15,15,15,15]"
                data-paddingright="[0,0,0,0]"
                data-paddingtop="[0,0,0,0]"
                data-responsive_offset="on"
                data-type="text"
                data-height="none"
                data-width="['750','750','750','450']"
                data-whitespace="normal"
                data-hoffset="['600','0','0','0']"
                data-voffset="['90','90','90','60']"
                data-x="['left','left','left','left']"
                data-y="['middle','middle','middle','middle']"
                data-textalign="['top','top','top','top']"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              >
                <div className="text">
                  Get the best solutions for all type of visa &amp; immigrations
                </div>
              </div>
              <div
                className="tp-caption"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[15,15,15,15]"
                data-paddingright="[15,15,15,15]"
                data-paddingtop="[0,0,0,0]"
                data-responsive_offset="on"
                data-type="text"
                data-height="none"
                data-width="['700','750','700','450']"
                data-whitespace="normal"
                data-hoffset="['600','0','0','0']"
                data-voffset="['170','185','190','160']"
                data-x="['left','left','left','left']"
                data-y="['middle','middle','middle','middle']"
                data-textalign="['top','top','top','top']"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              >
                <div className="btn-box">
                  <a href="page-about.html" className="theme-btn btn-style-one">
                    <span className="btn-title">Explore More</span>
                  </a>
                  <a
                    href="page-contact.html"
                    className="theme-btn btn-style-two"
                  >
                    <span className="btn-title">Contact Now</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* End Main Slider*/}
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
                      <img src="images/icons/map.png" alt="" />
                    </figure>
                    <figure className="image-1 overlay-anim wow fadeInUp">
                      <img src="images/resource/about-1.jpg" alt="" />
                    </figure>
                    <figure className="image-2 overlay-anim wow fadeInRight">
                      <img src="images/resource/about-2.jpg" alt="" />
                    </figure>
                  </div>
                </div>
                <div className="column col-lg-6 col-md-6">
                  <div className="image-box">
                    <figure className="image-3 overlay-anim wow fadeInLeft">
                      <img src="images/resource/about-3.jpg" alt="" />
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
        style={{ backgroundImage: "url(./images/resource/image-1.jpg)" }}
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
                    <img src="images/resource/training-1.jpg" alt="" />
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
            {/* Training Block */}
            <div className="training-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src="images/resource/training-2.jpg" alt="" />
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
                    <img src="images/resource/training-3.jpg" alt="" />
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
                    <img src="images/resource/training-1.jpg" alt="" />
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
          <div
            className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="200ms"
          >
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
          <div className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
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
          <div
            className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="200ms"
          >
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
          <div
            className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="400ms"
          >
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
    {/* Countries Section */}
    <section className="countries-section pt-0">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">countries you can visit</span>
          <h2>
            Countries we’re supporting <br />
            for the <span className="color3">immigration</span>
          </h2>
        </div>
        <div className="carousel-outer">
          {/* Countries Carousel */}
          <div className="countries-carousel owl-carousel owl-theme">
            {/* Country Block*/}
            <div className="country-block">
              <div className="inner-box">
                <div className="flag">
                  <img src="images/resource/flag-1.png" alt="" />
                </div>
                <a href="page-country-details.html" className="theme-btn">
                  Australia
                </a>
              </div>
            </div>
            {/* Country Block*/}
            <div className="country-block">
              <div className="inner-box">
                <div className="flag">
                  <img src="images/resource/flag-2.png" alt="" />
                </div>
                <a href="page-country-details.html" className="theme-btn">
                  Germany
                </a>
              </div>
            </div>
            {/* Country Block*/}
            <div className="country-block">
              <div className="inner-box">
                <div className="flag">
                  <img src="images/resource/flag-3.png" alt="" />
                </div>
                <a href="page-country-details.html" className="theme-btn">
                  Brazil
                </a>
              </div>
            </div>
            {/* Country Block*/}
            <div className="country-block">
              <div className="inner-box">
                <div className="flag">
                  <img src="images/resource/flag-4.png" alt="" />
                </div>
                <a href="page-country-details.html" className="theme-btn">
                  Russia
                </a>
              </div>
            </div>
            {/* Country Block*/}
            <div className="country-block">
              <div className="inner-box">
                <div className="flag">
                  <img src="images/resource/flag-5.png" alt="" />
                </div>
                <a href="page-country-details.html" className="theme-btn">
                  England
                </a>
              </div>
            </div>
            {/* Country Block*/}
            <div className="country-block">
              <div className="inner-box">
                <div className="flag">
                  <img src="images/resource/flag-6.png" alt="" />
                </div>
                <a href="page-country-details.html" className="theme-btn">
                  India
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Countries Section Two */}
    {/* Clients Section   */}
    <section className="clients-section">
      <div className="auto-container">
        {/* Sponsors Outer */}
        <div className="sponsors-outer">
          {/*clients carousel*/}
          <ul className="clients-carousel owl-carousel owl-theme">
            <li className="slide-item">
              {" "}
              <a href="#">
                <img src="images/resource/client.png" alt="" />
              </a>{" "}
            </li>
            <li className="slide-item">
              {" "}
              <a href="#">
                <img src="images/resource/client.png" alt="" />
              </a>{" "}
            </li>
            <li className="slide-item">
              {" "}
              <a href="#">
                <img src="images/resource/client.png" alt="" />
              </a>{" "}
            </li>
            <li className="slide-item">
              {" "}
              <a href="#">
                <img src="images/resource/client.png" alt="" />
              </a>{" "}
            </li>
            <li className="slide-item">
              {" "}
              <a href="#">
                <img src="images/resource/client.png" alt="" />
              </a>{" "}
            </li>
            <li className="slide-item">
              {" "}
              <a href="#">
                <img src="images/resource/client.png" alt="" />
              </a>{" "}
            </li>
            <li className="slide-item">
              {" "}
              <a href="#">
                <img src="images/resource/client.png" alt="" />
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/*End Clients Section */}
    {/* Gallery Section */}
    <section className="gallery-section pt-0">
      <div className="large-container">
        <div className="carousel-outer">
          <div className="title-box">
            <div className="inner">
              <span className="sub-title">our testimonials</span>
              <h2 className="title">
                Checkout <br />
                our photo
                <br /> gallery
              </h2>
            </div>
          </div>
          {/*clients carousel*/}
          <ul className="gallery-carousel owl-carousel owl-theme wow fadeInUp">
            <li className="gallery-item">
              {" "}
              <a
                href="images/resource/gallery-1.jpg"
                className="lightbox-image"
              >
                <img src="images/resource/gallery-1.jpg" alt="" />
              </a>{" "}
            </li>
            <li className="gallery-item">
              {" "}
              <a
                href="images/resource/gallery-2.jpg"
                className="lightbox-image"
              >
                <img src="images/resource/gallery-2.jpg" alt="" />
              </a>{" "}
            </li>
            <li className="gallery-item">
              {" "}
              <a
                href="images/resource/gallery-3.jpg"
                className="lightbox-image"
              >
                <img src="images/resource/gallery-3.jpg" alt="" />
              </a>{" "}
            </li>
            <li className="gallery-item">
              {" "}
              <a
                href="images/resource/gallery-4.jpg"
                className="lightbox-image"
              >
                <img src="images/resource/gallery-4.jpg" alt="" />
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/*End Gallery Section */}
    {/* Testimonial Section */}
    <section className="testimonial-section pull-down">
      <div
        className="bg-image"
        style={{ backgroundImage: "url(./images/background/1.jpg)" }}
      />
      <div className="anim-icons">
        <span className="icon icon-wide-map" />
      </div>
      <div className="auto-container">
        <div className="sec-title text-center light">
          <span className="sub-title">our testimonials</span>
          <h2>
            What they’re talking about
            <br />
            the <span className="color3">consultancy</span>
          </h2>
        </div>
        <div className="carousel-outer">
          <div className="testimonial-carousel owl-carousel owl-theme">
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content-box">
                  <span className="icon fa fa-quote-left" />
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="text">
                    I was very impresed by the remons service lorem ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui dolorem ipsum quia.
                  </div>
                </div>
                <div className="info-box">
                  <figure className="thumb">
                    <img src="images/resource/testi-thumb-1.jpg" alt="" />
                  </figure>
                  <h6 className="name">Jessica Brown</h6>
                  <span className="designation">Customer</span>
                </div>
              </div>
            </div>
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content-box">
                  <span className="icon fa fa-quote-left" />
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="text">
                    I was very impresed by the remons service lorem ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui dolorem ipsum quia.
                  </div>
                </div>
                <div className="info-box">
                  <figure className="thumb">
                    <img src="images/resource/testi-thumb-2.jpg" alt="" />
                  </figure>
                  <h6 className="name">Kevin Martin</h6>
                  <span className="designation">Customer</span>
                </div>
              </div>
            </div>
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content-box">
                  <span className="icon fa fa-quote-left" />
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="text">
                    I was very impresed by the remons service lorem ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui dolorem ipsum quia.
                  </div>
                </div>
                <div className="info-box">
                  <figure className="thumb">
                    <img src="images/resource/testi-thumb-3.jpg" alt="" />
                  </figure>
                  <h6 className="name">Sarah Albert</h6>
                  <span className="designation">Customer</span>
                </div>
              </div>
            </div>
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content-box">
                  <span className="icon fa fa-quote-left" />
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="text">
                    I was very impresed by the remons service lorem ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui dolorem ipsum quia.
                  </div>
                </div>
                <div className="info-box">
                  <figure className="thumb">
                    <img src="images/resource/testi-thumb-1.jpg" alt="" />
                  </figure>
                  <h6 className="name">Jessica Brown</h6>
                  <span className="designation">Customer</span>
                </div>
              </div>
            </div>
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content-box">
                  <span className="icon fa fa-quote-left" />
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="text">
                    I was very impresed by the remons service lorem ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui dolorem ipsum quia.
                  </div>
                </div>
                <div className="info-box">
                  <figure className="thumb">
                    <img src="images/resource/testi-thumb-2.jpg" alt="" />
                  </figure>
                  <h6 className="name">Kevin Martin</h6>
                  <span className="designation">Customer</span>
                </div>
              </div>
            </div>
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content-box">
                  <span className="icon fa fa-quote-left" />
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="text">
                    I was very impresed by the remons service lorem ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui dolorem ipsum quia.
                  </div>
                </div>
                <div className="info-box">
                  <figure className="thumb">
                    <img src="images/resource/testi-thumb-3.jpg" alt="" />
                  </figure>
                  <h6 className="name">Sarah Albert</h6>
                  <span className="designation">Customer</span>
                </div>
              </div>
            </div>
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content-box">
                  <span className="icon fa fa-quote-left" />
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="text">
                    I was very impresed by the remons service lorem ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui dolorem ipsum quia.
                  </div>
                </div>
                <div className="info-box">
                  <figure className="thumb">
                    <img src="images/resource/testi-thumb-1.jpg" alt="" />
                  </figure>
                  <h6 className="name">Jessica Brown</h6>
                  <span className="designation">Customer</span>
                </div>
              </div>
            </div>
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content-box">
                  <span className="icon fa fa-quote-left" />
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="text">
                    I was very impresed by the remons service lorem ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui dolorem ipsum quia.
                  </div>
                </div>
                <div className="info-box">
                  <figure className="thumb">
                    <img src="images/resource/testi-thumb-2.jpg" alt="" />
                  </figure>
                  <h6 className="name">Kevin Martin</h6>
                  <span className="designation">Customer</span>
                </div>
              </div>
            </div>
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="content-box">
                  <span className="icon fa fa-quote-left" />
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="text">
                    I was very impresed by the remons service lorem ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui dolorem ipsum quia.
                  </div>
                </div>
                <div className="info-box">
                  <figure className="thumb">
                    <img src="images/resource/testi-thumb-3.jpg" alt="" />
                  </figure>
                  <h6 className="name">Sarah Albert</h6>
                  <span className="designation">Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Testimonial Section */}
    {/* Contact Section */}
    <section className="contact-section">
      <div className="outer-box">
        <div className="bg bg-pattern-6" />
        <div className="auto-container">
          <div className="row">
            {/* Title Column */}
            <div className="title-column col-lg-7 col-md-12 wow fadeInLRight">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">contact with us</span>
                  <h2>
                    Book your <span className="color3">consultation</span>
                  </h2>
                  <div className="text">
                    There cursus massa at urnaaculis estie. Sed aliquamellus
                    vitae ultrs condmentum leo massa mollis.
                  </div>
                </div>
                <ul className="list-style-two">
                  <li>
                    <i className="fa fa-check-circle" /> Making this the first
                    true generator on the Internet
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Lorem Ipsum is not
                    simply random text
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> If you are going to use
                    a passage
                  </li>
                </ul>
                <div className="ceo-info">
                  <figure className="thumb">
                    <img src="images/resource/ceo-thumb.jpg" alt="" />
                  </figure>
                  <h6 className="name">Aleesha Brown</h6>
                  <div className="designation">CEO &amp; CO Founder</div>
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
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="Email"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Write a Message"
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
                          <span className="btn-title">Send a Message</span>
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
    {/* End Contact Section */}
    {/* News Section */}
    <section className="news-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">News &amp; Updates</span>
          <h2>
            Latest news directly <br /> from the{" "}
            <span className="color3">blog</span>
          </h2>
        </div>
        <div className="row">
          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="news-details.html">
                    <img src="images/resource/news-1.jpg" alt="" />
                  </a>
                </figure>
                <span className="date">
                  30 <span className="month">March</span>
                </span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li>
                    <i className="fa fa-user-circle" />
                    Admin
                  </li>
                  <li>
                    <i className="fa fa-comments" /> 2 Comments
                  </li>
                </ul>
                <h4 className="title">
                  <a href="news-details.html">
                    Top 9 most demand jobs in canada
                  </a>
                </h4>
                <div className="text">
                  There are not many of passages of lorem ipsum available
                  alteration in some form.
                </div>
              </div>
            </div>
          </div>
          {/* News Block */}
          <div
            className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="news-details.html">
                    <img src="images/resource/news-2.jpg" alt="" />
                  </a>
                </figure>
                <span className="date">
                  30 <span className="month">March</span>
                </span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li>
                    <i className="fa fa-user-circle" />
                    Admin
                  </li>
                  <li>
                    <i className="fa fa-comments" /> 2 Comments
                  </li>
                </ul>
                <h4 className="title">
                  <a href="news-details.html">
                    Top 9 most demand jobs in canada
                  </a>
                </h4>
                <div className="text">
                  There are not many of passages of lorem ipsum available
                  alteration in some form.
                </div>
              </div>
            </div>
          </div>
          {/* News Block */}
          <div
            className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <a href="news-details.html">
                    <img src="images/resource/news-3.jpg" alt="" />
                  </a>
                </figure>
                <span className="date">
                  30 <span className="month">March</span>
                </span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li>
                    <i className="fa fa-user-circle" />
                    Admin
                  </li>
                  <li>
                    <i className="fa fa-comments" /> 2 Comments
                  </li>
                </ul>
                <h4 className="title">
                  <a href="news-details.html">
                    Top 9 most demand jobs in canada
                  </a>
                </h4>
                <div className="text">
                  There are not many of passages of lorem ipsum available
                  alteration in some form.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End News Section */}
    {/* Main Footer */}
    <footer className="main-footer">
      <div className="bg bg-pattern-7" />
      <div className="auto-container">
        <div className="footer-upper">
          <div className="logo-box">
            <img src="images/logo-2.png" alt="" />
          </div>
          <ul className="contact-info">
            <li>
              <i className="icon fa fa-phone-square" />
              <span className="title">Phone:</span>
              <div className="text">
                <a href="tel:+9288006830">+92 (8800) 6830</a>
              </div>
            </li>
            <li>
              <i className="icon fa fa-envelope" />
              <span className="title">Email:</span>
              <div className="text">
                <a href="mailto:eziaro@company.com">eziaro@company.com</a>
              </div>
            </li>
            <li>
              <i className="icon fa fa-map-marker" />
              <span className="title">Address:</span>
              <div className="text">30 Broklyn Street. USA</div>
            </li>
          </ul>
          <div className="btn-box">
            <a href="page-contact.html" className="theme-btn btn-style-four">
              <span className="btn-title">Book Consultation</span>
            </a>
          </div>
        </div>
      </div>
      {/*Widgets Section*/}
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            {/*Footer Column*/}
            <div className="footer-column col-xl-6 col-lg-8 col-md-12 mb-0">
              <div className="row">
                <div className="footer-widget col-lg-4 col-md-4 col-ms-12">
                  <h6 className="widget-title">Links</h6>
                  <ul className="user-links">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Meet Team</a>
                    </li>
                    <li>
                      <a href="#">News &amp; Media</a>
                    </li>
                    <li>
                      <a href="#">Our Projects</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget col-lg-4 col-md-4 col-ms-12">
                  <h6 className="widget-title">Visa</h6>
                  <ul className="user-links">
                    <li>
                      <a href="#">Student Visa</a>
                    </li>
                    <li>
                      <a href="#">Business Visa</a>
                    </li>
                    <li>
                      <a href="#">Family Visa</a>
                    </li>
                    <li>
                      <a href="#">Travel Visa</a>
                    </li>
                    <li>
                      <a href="#">Work Visa</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget col-lg-4 col-md-4 col-ms-12">
                  <h6 className="widget-title">Services</h6>
                  <ul className="user-links">
                    <li>
                      <a href="#">PR Applicants</a>
                    </li>
                    <li>
                      <a href="#">Visa Consultancy</a>
                    </li>
                    <li>
                      <a href="#">Travel Insurance</a>
                    </li>
                    <li>
                      <a href="#">Work Permits</a>
                    </li>
                    <li>
                      <a href="#">Abrod Study</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Footer Column*/}
            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="footer-widget gallery-widget">
                <h6 className="widget-title">Gallery</h6>
                <div className="widget-content">
                  <div className="outer clearfix">
                    <figure className="image">
                      <a href="#">
                        <img src="images/resource/project-thumb-1.jpg" alt="" />
                      </a>
                    </figure>
                    <figure className="image">
                      <a href="#">
                        <img src="images/resource/project-thumb-2.jpg" alt="" />
                      </a>
                    </figure>
                    <figure className="image">
                      <a href="#">
                        <img src="images/resource/project-thumb-3.jpg" alt="" />
                      </a>
                    </figure>
                    <figure className="image">
                      <a href="#">
                        <img src="images/resource/project-thumb-4.jpg" alt="" />
                      </a>
                    </figure>
                    <figure className="image">
                      <a href="#">
                        <img src="images/resource/project-thumb-5.jpg" alt="" />
                      </a>
                    </figure>
                    <figure className="image">
                      <a href="#">
                        <img src="images/resource/project-thumb-6.jpg" alt="" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            {/*Footer Column*/}
            <div className="footer-column col-xl-3 col-lg-12 col-md-6">
              <div className="footer-widget">
                <h6 className="widget-title">Newsletter</h6>
                <div className="subscribe-form">
                  <div className="text">
                    Signup for our latest news &amp; articles.
                  </div>
                  <form method="post" action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="email"
                        defaultValue=""
                        placeholder="Email Address"
                        required=""
                      />
                      <button type="button" className="theme-btn">
                        <i className="fa fa-paper-plane" />
                      </button>
                    </div>
                  </form>
                </div>
                <ul className="social-icon-two">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Footer Bottom*/}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              © Copyright 2023 by <a href="index.html">Company.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/*End Main Footer */}
  </div>
  {/* End Page Wrapper */}
  {/* Scroll To Top */}
  <div className="scroll-to-top scroll-to-target" data-target="html">
    <span className="fa fa-angle-up" />
  </div>
  {/*Revolution Slider*/}
  {/*Revolution Slider*/}
</>

  )
}

export default Test