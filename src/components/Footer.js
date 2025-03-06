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
                <span className="title">telephone:</span>
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
                  <a href="info@boaz-study.com">info@boaz-study.com</a>
                </div>
              </li>
              <li>
                <i className="icon fa fa-map-marker" />
                <span className="title">Addresses:</span>
                <div className="text">Douala, Bonapriso, 389 Rue Toyota</div>
              </li>
              <li>
                <i className="icon fa fa-map-marker" />
                <span className="title">Address:</span>
                <div className="text">Yaoundé, Total Ecole de police, entre l’hôtel Florencia et CCA Bank</div>
              </li>
            </ul>
            <div className="btn-box">
              <a href="/services" className="theme-btn btn-style-four">
                <span className="btn-title">Nos Services</span>
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
                    <h6 className="widget-title">Liens</h6>
                    <ul className="user-links">
                      <li>
                        <a href="/about">A propos</a>
                      </li>
                      <li>
                        <a href="/services">service</a>
                      </li>
                      <li>
                        <a href="#">Notre Blog</a>
                      </li>
                      <li>
                        <a href="#">Nos prix</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-widget col-lg-4 col-md-4 col-ms-12">
                    <h6 className="widget-title">Services</h6>
                    <ul className="user-links">
                      <li>
                        <a href="#">AVI</a>
                      </li>
                      <li>
                        <a href="#">Recherche de logement</a>
                      </li>
                      <li>
                        <a href="#">Service paiement france</a>
                      </li>
                      <li>
                        <a href="#">Aide demarche administrative</a>
                      </li>
                      <li>
                        <a href="#">orientation et Accompagnement</a>
                      </li>
                      <li>
                        <a href="#">financement</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Footer Column*/}
              <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="footer-widget gallery-widget">
                  <h6 className="widget-title">Galeries</h6>
                  <div className="widget-content">
                    <div className="outer clearfix">
                      <figure className="image">
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/services/finance.jpg`}
                            alt=""
                            style={{height:'78px',width:'77px'}}
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/services/aide.jpg`}
                            alt=""
                            style={{height:'78px',width:'77px'}}
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/services/demarche.png`}
                            alt=""
                            style={{height:'78px',width:'77px'}}
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/services/avi.jpg`}
                            alt=""
                            style={{height:'78px',width:'77px'}}
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/resource/project-thumb-5.jpg`}
                            alt=""
                            style={{height:'78px',width:'77px'}}
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/site_kit/images/services/logement.jpg`}
                            alt=""
                            style={{height:'78px',width:'77px'}}
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
                      S'inscrire pour voir nos service &amp; articles.
                    </div>
                    <form method="post" action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="email"
                          defaultValue=""
                          placeholder=" Addresse email"
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
                      <a href="https://twitter.com/boazstudy">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/boazstudy">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/boazstudy/">
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
