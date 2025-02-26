export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="bg bg-pattern-7" />
        <div className="auto-container">
          <div className="footer-upper">
            <div className="logo-box">
              <img
                src={`${process.env.PUBLIC_URL}/site_kit/images/resource/logo-2.jpg`}
                alt=""
              />
            </div>
            <ul className="contact-info">
              <li>
                <i className="icon fa fa-phone-square" />
                <span className="title">Phone:</span>
                <div className="text">
                  <a href="tel:+9288006830">
                    (+237) 656 186 936 / (+237) 676 726 905
                  </a>
                </div>
              </li>
              <li>
                <i className="icon fa fa-envelope" />
                <span className="title">Email:</span>
                <div className="text">
                  <a href="mailto:eziaro@company.com">info@boaz-study.com</a>
                </div>
              </li>
              <li>
                <i className="icon fa fa-map-marker" />
                <span className="title">Address:</span>
                <div className="text">Douala, Bonapriso, 389 Rue Toyota</div>
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
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/resource/project-thumb-1.jpg`}
                            alt=""
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/resource/project-thumb-2.jpg`}
                            alt=""
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/resource/project-thumb-3.jpg`}
                            alt=""
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/resource/project-thumb-4.jpg`}
                            alt=""
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/resource/project-thumb-5.jpg`}
                            alt=""
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/resource/project-thumb-6.jpg`}
                            alt=""
                          />
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
                © Copyright 2025 by <a href="index.html">Boaz Study.com</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
