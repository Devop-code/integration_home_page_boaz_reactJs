import React from 'react'
import MainBox from './mainBoxHeaderTop'
import NavOuter from './navOuter'

const Form = () => {
  return (
    <>
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
    
    </>
  )
}

export default Form