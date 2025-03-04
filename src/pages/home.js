import servicesData from "../data/servicesData";
import { useTranslation } from "react-i18next";
import React from "react";
import MainBox from "../components/mainBoxHeaderTop";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
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
          <MobileMenu />
          {/* End Mobile Menu */}
          {/* Header Search */}

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
                <div className="nav-outer">
                  {/* Main Menu */}
                  <nav className="main-menu">
                    <div className="navbar-collapse show collapse clearfix">
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
                          <a href="/blog">Blog</a>
                        </li>
                        <li>
                          <a href="/connexion"> Connexion</a>
                        </li>
                        <li>
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
                    src={`${process.env.PUBLIC_URL}/site_kit/images/main-slider/1.jpg`}
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
                    <h3 className="fs-1 font-size-30 text-white responsive-text font-weight  fw-bolder mb-3" >
                      Boaz-Study , <small className="text-white"> Votre Partenaire pour une mobilité
                      internationale réussie</small>
                      <br />
                      </h3>
                      <p className="letter-space-3 fs-1 md-0 text-white responsive-text fw-normal text-md-center text-left font-size-15">
                        Découvrez nos services complets pour faciliter votre
                        installation et vos études en France.
                        Confiez-nous votre projet dès aujourd'hui
                      </p>
                      <div className="btn-box fs-3 responsive-text text-light">
                        <a href="/about" className="theme-btn btn-style-one ">
                          <span className="btn-title letter-space-4 text-light">
                            Voir nos services
                          </span>
                        </a>
                        <a href="/contact" className="theme-btn btn-style-two bg-transparent border border-light text-white">
                          <span className="btn-title letter-space-4">
                            Contacter Nous
                          </span>
                        </a>
                      </div>
                  
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
                  ></div>
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
                  ></div>
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
                    <span className="sub-title">
                      À propos de l'étude chez Boaz-study
                    </span>
                    <h2>
                      Offrant les meilleurs services{" "}
                      <span className="color3">D'etude en france</span>
                    </h2>
                    <h4>Agence de conseil en voyage base au cameroun.</h4>
                    <div className="text">
                      L'accompagnement des étudiants est bien plus qu'un simple
                      service, c'est une véritable passion pour notre
                      entreprise. Nous croyons fermement que guider les
                      étudiants avec professionnalisme et expertise est la clé
                      de leur réussite en France.
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
        {/*Emd About Section */}
        {/* Why Choose US */}
        <>
          <section className="why-choose-us-two">
            <div
              className="bg bg-image"
              style={{ backgroundImage: "url(./images/background/3.jpg)" }}
            />
            <div className="bg bg-pattern-5" />
            <div className="auto-container">
              <div className="row g-0">
                {/* Colonne du titre */}
                <div className="title-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                  <div className="inner-column wow fadeInLeft">
                    <div className="sec-title light">
                      <h2>
                        Pourquoi <br />
                        choisir notre expertise pour vos études en France ?
                      </h2>
                    </div>
                   
                  </div>
                </div>
                {/* Colonne du contenu */}
                <div className="content-column col-xl-8 col-lg-12 col-ms-12 col-sm-12">
                  <div className="row g-0">
                    {/* Bloc Caractéristique */}
                    <div className="feature-block-three col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                      <div className="inner-box">
                        <i className="icon flaticon-interview" />
                        <i className="bg-icon flaticon-interview" />
                        <h6 className="title">
                          <a href="page-about.html">
                            Accompagnement personnalisé
                          </a>
                        </h6>
                        <div className="text">
                          Nous vous guidons à chaque étape, de la candidature à
                          l'inscription dans une université en France.
                        </div>
                      </div>
                    </div>
                    {/* Bloc Caractéristique */}
                    <div
                      className="feature-block-three col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                      data-wow-delay="300ms"
                    >
                      <div className="inner-box">
                        <i className="icon flaticon-low-cost" />
                        <i className="bg-icon flaticon-low-cost" />
                        <h6 className="title">
                          <a href="page-about.html">Solutions abordables</a>
                        </h6>
                        <div className="text">
                          Nos services sont conçus pour être accessibles à tous,
                          avec des solutions adaptées à votre budget.
                        </div>
                      </div>
                    </div>
                    {/* Bloc Caractéristique */}
                    <div className="feature-block-three col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                      <div className="inner-box">
                        <i className="icon flaticon-loyalty" />
                        <i className="bg-icon flaticon-loyalty" />
                        <h6 className="title">
                          <a href="page-about.html">Satisfaction garantie</a>
                        </h6>
                        <div className="text">
                          Des centaines d'étudiants nous ont déjà fait confiance
                          pour réussir leur projet d'études en France.
                        </div>
                      </div>
                    </div>
                    {/* Bloc Caractéristique */}
                    <div
                      className="feature-block-three col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                      data-wow-delay="300ms"
                    >
                      <div className="inner-box">
                        <i className="icon flaticon-online-support" />
                        <i className="bg-icon flaticon-online-support" />
                        <h6 className="title">
                          <a href="page-about.html">Assistance 24/7</a>
                        </h6>
                        <div className="text">
                          Nous restons disponibles à tout moment pour répondre à
                          vos questions et vous accompagner efficacement.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Fin Pourquoi Nous Choisir */}
        </>

        {/*Emd Why Choose US */}
        {/* Training Section */}

        {/* End Training Section */}
        {/* Services Section */}
        <section className="services-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="sec-title">
                  <span className="sub-title">Ce que nous offrons</span>
                  <h2>
                    Des prix exceptionnels pour les services de qualité{" "}
                    <span className="color3">!</span>
                  </h2>
                  <div className="text">
                    Obtenez les meilleurs services et tarifs de notre part pour
                    réaliser votre rêve
                  </div>
                </div>
              </div>

              {/* Service Block */}
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <a href={service.readMoreLink}>
                          <img src={service.image} alt={service.title} />
                        </a>
                      </figure>
                      <i className={`icon ${service.icon}`} />
                      <h6 className="title">{service.title}</h6>
                    </div>
                    <div className="content-box">
                      <h6 className="title">
                        <a href={service.readMoreLink}></a>
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
                      <img
                        src={`${process.env.PUBLIC_URL}/site_kit/images/resource/flag-1.png`}
                        alt=""
                      />
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
                      <img
                        src={`${process.env.PUBLIC_URL}/site_kit/images/resource/flag-2.png`}
                        alt=""
                      />
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
                      <img
                        src={`${process.env.PUBLIC_URL}/site_kit/images/resource/flag-3.png`}
                        alt=""
                      />
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
                      <img
                        src={`${process.env.PUBLIC_URL}/site_kit/images/resource/flag-4.png`}
                        alt=""
                      />
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
                      <img
                        src={`${process.env.PUBLIC_URL}/site_kit/images/resource/flag-5.png`}
                        alt=""
                      />
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
                      <img
                        src={`${process.env.PUBLIC_URL}/site_kit/images/resource/flag-6.png`}
                        alt=""
                      />
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
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/resource/client.png`}
                      alt=""
                    />
                  </a>{" "}
                </li>
                <li className="slide-item">
                  {" "}
                  <a href="#">
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/resource/client.png`}
                      alt=""
                    />
                  </a>{" "}
                </li>
                <li className="slide-item">
                  {" "}
                  <a href="#">
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/resource/client.png`}
                      alt=""
                    />
                  </a>{" "}
                </li>
                <li className="slide-item">
                  {" "}
                  <a href="#">
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/resource/client.png`}
                      alt=""
                    />
                  </a>{" "}
                </li>
                <li className="slide-item">
                  {" "}
                  <a href="#">
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/resource/client.png`}
                      alt=""
                    />
                  </a>{" "}
                </li>
                <li className="slide-item">
                  {" "}
                  <a href="#">
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/resource/client.png`}
                      alt=""
                    />
                  </a>{" "}
                </li>
                <li className="slide-item">
                  {" "}
                  <a href="#">
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/resource/client.png`}
                      alt=""
                    />
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
                    href={`${process.env.PUBLIC_URL}/site_kit/images/resource/gallery-1.jpg`}
                    className="lightbox-image"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/resource/gallery-1.jpg`}
                      alt=""
                    />
                  </a>{" "}
                </li>
                <li className="gallery-item">
                  {" "}
                  <a
                    href={`${process.env.PUBLIC_URL}/site_kit/images/resource/gallery-2.jpg`}
                    className="lightbox-image"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/resource/gallery-2.jpg`}
                      alt=""
                    />
                  </a>
                </li>
                <li className="gallery-item">
                  {" "}
                  <a
                    href={`${process.env.PUBLIC_URL}/site_kit/images/resource/gallery-3.jpg`}
                    className="lightbox-image"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/resource/gallery-3.jpg`}
                      alt=""
                    />
                  </a>{" "}
                </li>
                <li className="gallery-item">
                  {" "}
                  <a
                    href={`${process.env.PUBLIC_URL}/site_kit/images/resource/gallery-4.jpg`}
                    className="lightbox-image"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/resource/gallery-4.jpg`}
                      alt=""
                    />
                  </a>
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
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/background/1.jpg`,
            }}
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
                        simply free text used by copy typing refreshing. Neque
                        porro est qui dolorem ipsum quia.
                      </div>
                    </div>
                    <div className="info-box">
                      <figure className="thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/resource/testi-thumb-1.jpg`}
                          alt=""
                        />
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
                        simply free text used by copy typing refreshing. Neque
                        porro est qui dolorem ipsum quia.
                      </div>
                    </div>
                    <div className="info-box">
                      <figure className="thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/resource/testi-thumb-2.jpg`}
                          alt=""
                        />
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
                        simply free text used by copy typing refreshing. Neque
                        porro est qui dolorem ipsum quia.
                      </div>
                    </div>
                    <div className="info-box">
                      <figure className="thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/resource/testi-thumb-3.jpg`}
                          alt=""
                        />
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
                        simply free text used by copy typing refreshing. Neque
                        porro est qui dolorem ipsum quia.
                      </div>
                    </div>
                    <div className="info-box">
                      <figure className="thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/resource/testi-thumb-1.jpg`}
                          alt=""
                        />
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
                        simply free text used by copy typing refreshing. Neque
                        porro est qui dolorem ipsum quia.
                      </div>
                    </div>
                    <div className="info-box">
                      <figure className="thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/resource/testi-thumb-2.jpg`}
                          alt=""
                        />
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
                        simply free text used by copy typing refreshing. Neque
                        porro est qui dolorem ipsum quia.
                      </div>
                    </div>
                    <div className="info-box">
                      <figure className="thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/resource/testi-thumb-3.jpg`}
                          alt=""
                        />
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
                        simply free text used by copy typing refreshing. Neque
                        porro est qui dolorem ipsum quia.
                      </div>
                    </div>
                    <div className="info-box">
                      <figure className="thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/resource/testi-thumb-1.jpg`}
                          alt=""
                        />
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
                        simply free text used by copy typing refreshing. Neque
                        porro est qui dolorem ipsum quia.
                      </div>
                    </div>
                    <div className="info-box">
                      <figure className="thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/resource/testi-thumb-2.jpg`}
                          alt=""
                        />
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
                        simply free text used by copy typing refreshing. Neque
                        porro est qui dolorem ipsum quia.
                      </div>
                    </div>
                    <div className="info-box">
                      <figure className="thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/resource/testi-thumb-3.jpg`}
                          alt=""
                        />
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
                        Vous avez des Questions sur comments etudier en
                        France??? Contactez nous pour plus d'information
                      </div>
                    </div>
                    <ul className="list-style-two">
                      <li>
                        <i className="fa fa-check-circle" />
                        Vous souhaitez savoir si vous ete admissible a pouvoir
                        etudier en France ??
                      </li>
                      <li>
                        <i className="fa fa-check-circle" />
                        vous avez des Questions sur le processus de voyage,et
                        les delais de traitement???
                      </li>
                      <li>
                        <i className="fa fa-check-circle" />
                        Vous chercher a Obtenir des conseils sur la maniere de
                        preparer votre demande??
                      </li>
                    </ul>
                    <div className="ceo-info">
                      <figure className="thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/resource/ceo-thumb.jpg`}
                          alt=""
                        />
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
              <span className="sub-title">Notre &amp; Blog</span>
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
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/blog-1.jpg`}
                          alt=""
                        />
                      </a>
                    </figure>
                    <span className="date">
                      12 <span className="month">April</span>
                    </span>
                  </div>
                  <div className="lower-content">
                    <ul className="post-info">
                      <li>
                        <i className="fa fa-user-circle" />
                        Admin
                      </li>
                      <li>
                        <i className="fa fa-comments" /> 3 Comments
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="news-details.html">
                        Comment réussir votre entretien Campus France ?
                      </a>
                    </h4>
                    <div className="text">
                      Vous envisagez poursuivre vos études en France et vous
                      avez besoin d’un visa. Pour cela, vous devrez passer un
                      entretien avec Campus France, un organisme qui s’occupe de
                      la promotion de l’enseignement supérieur en France.
                      L’entretien est une étape importante pour...
                    </div>
                  </div>
                </div>
              </div>
              {/* News Block */}
              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="news-details.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/boaz-2.jpg`}
                          alt=""
                        />
                      </a>
                    </figure>
                    <span className="date">
                      18 <span className="month">January</span>
                    </span>
                  </div>
                  <div className="lower-content">
                    <ul className="post-info">
                      <li>
                        <i className="fa fa-user-circle" />
                        Admin
                      </li>
                      <li>
                        <i className="fa fa-comments" /> 5 Comments
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="news-details.html">
                        Lettre de motivation : comment s’y prendre ??
                      </a>
                    </h4>
                    <div className="text">
                      La lettre de motivation également appelée lettre de
                      candidature ou lettre d’accompagnement, est un document
                      d’une page maximum qui met en avant les compétences et les
                      qualités du candidat nécessaires à la réussite de son
                      projet professionnel. Elle a pour but de donner...
                    </div>
                  </div>
                </div>
              </div>

              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="news-details.html">
                        <img
                          src={`${process.env.PUBLIC_URL}/site_kit/images/boaz-3.png`}
                          alt=""
                        />
                      </a>
                    </figure>
                    <span className="date">
                      10 <span className="month">January</span>
                    </span>
                  </div>
                  <div className="lower-content">
                    <ul className="post-info">
                      <li>
                        <i className="fa fa-user-circle" />
                        Admin
                      </li>
                      <li>
                        <i className="fa fa-comments" /> 4 Comments
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="news-details.html">
                        Comment rédiger son projet professionnel ?
                      </a>
                    </h4>
                    <div className="text">
                      Le projet professionnel consiste à réfléchir au métier ou
                      au domaine dans lequel on souhaiterait travailler. Un
                      projet d’étude est le parcours académique que vous décidez
                      d’embrasser dans l’optique de la réussite de votre projet
                      professionnel. Ce dernier est donc le...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End News Section */}
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

export default Home;
