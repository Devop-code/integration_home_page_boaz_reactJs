import React from 'react'

const MainBox = () => {
  return (
    <>
              <div className="header-top">
            <div className="inner-container">
              <div className="top-left">
                {/* Info List */}
                <ul className="list-style-one">
                  <li>
                    <i className="fa fa-envelope" />{" "}
                    <a href="mailto:needhelp@company.com">
                    info@boaz-study.com
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker" />Douala, Bonapriso, 389 Rue Toyota
                  </li>
                  <li>
                    <i className="fa fa-clock" />(+237) 656 186 936 / (+237) 676 726 905
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
                  <img
                    src={`${process.env.PUBLIC_URL}/boaz studies sans back.png`}
                    alt=""
                    title=""
                      />
                  </a>
                </div>
              </div>
              {/*Nav Box*/}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <ul className="navigation">
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
                </nav>
                {/* Main Menu End*/}
                <div className="outer-box">
                  <a href="tel:+92(8800)9806" className="info-btn">
                    <img
                      src={`${process.env.PUBLIC_URL}/site_kit/images/icons/icon-phone.png"`}
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
                  <a
                    href="page-contact.html"
                    className="theme-btn btn-style-one"
                  >
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
    </>
  )
}

export default MainBox