import { useState, useEffect } from "react";
import MainBox from "../components/mainBoxHeaderTop";
import Footer from "../components/Footer";
import NavOuter from "../components/navOuter";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { parsePhoneNumberFromString } from "libphonenumber-js";
const getFlagUrl = (code) => `https://flagcdn.com/w40/${code.toLowerCase()}.png`;


const Contact = () => {
  const [countries, setCountries] = useState([]); // Liste dynamique des pays
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // 🔹 Récupérer la liste des pays via API
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryData = response.data
          .map((country) => ({
            label: country.name.common,
            value: country.cca2, // Code pays (ex: FR, US)
            code: country.idd.root
              ? country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : "")
              : "",
            flag: getFlagUrl(country.cca2),
          }))
          .filter((c) => c.code !== ""); // Supprime les pays sans code téléphonique

        setCountries(countryData);

        // 🔹 Récupérer l'adresse IP de l'utilisateur pour définir son pays
        axios.get("https://ipapi.co/json/")
          .then((res) => {
            const userCountryCode = res.data.country_code.toUpperCase();
            const detectedCountry = countryData.find((c) => c.value === userCountryCode);
            if (detectedCountry) {
              setSelectedCountry(detectedCountry);
            }
          })
          .catch((error) => console.error("Impossible de récupérer l'IP :", error));
      })
      .catch((error) => console.error("Erreur lors de la récupération des pays :", error));
  }, []);

  // Gérer la sélection du pays
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setPhone(""); // Réinitialiser le numéro
    setError("");
  };

  // Gérer la saisie du numéro de téléphone
  const handlePhoneChange = (value) => {
    if (selectedCountry && value.startsWith(selectedCountry.code)) {
      setError(`Ne pas inclure le code du pays (${selectedCountry.code})`);
    } else {
      setError("");
    }
    setPhone(value);
  };

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
                <NavOuter />
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
            backgroundImage: `url(${process.env.PUBLIC_URL}/site_kit/images/background/about-1.jpg)`,
          }}
        >
          <div className="auto-container">
            <div className="title-outer">
              <h1 className="title" style={{fontSize:'40px'}}>Contactez-nous</h1>
              <ul className="page-breadcrumb">
                <li>
                  <a href="/">Accueil</a>
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
                  <span className="sub-title">Envoyer nous un mail</span>
                  <h2>Laisser un message</h2>
                </div>
                {/* Contact Form */}
                <form id="contact_form" name="contact_form" action="includes/sendmail.php" method="post">
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <input name="form_name" className="form-control" type="text" placeholder="Entrer votre nom" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <input name="form_email" className="form-control required email" type="email" placeholder="Entrer votre email" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <input name="form_subject" className="form-control required" type="text" placeholder="Entrer votre sujet" />
            </div>
          </div>

          {/* Sélection dynamique du pays */}
          <div className="col-sm-6">
            <div className="mb-3">
              {countries.length > 0 ? (
                <Select
                  options={countries}
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  getOptionLabel={(e) => (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={e.flag} alt={e.label} style={{ width: 24, height: 16, marginRight: 10 }} />
                      {e.label} ({e.code})
                    </div>
                  )}
                  placeholder="Chargement du pays..."
                />
              ) : (
                <p>Chargement des pays...</p>
              )}
            </div>
          </div>
        </div>

        {/* Champ téléphone */}
        <div className="row">
          <div className="col-sm-12">
            <div className="mb-3">
              <PhoneInput
                country={selectedCountry ? selectedCountry.value.toLowerCase() : ""}
                value={phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "form_phone",
                  className: "form-control",
                  required: true,
                }}
                enableSearch={true}
                disableDropdown={true}
              />
            </div>
            {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
          </div>
        </div>

        <div className="mb-3">
          <textarea name="form_message" className="form-control required" rows={7} placeholder="Entrer le message" />
        </div>

        <div className="mb-3">
          <button type="submit" className="theme-btn btn-style-one">
            <span className="btn-title">Envoyer le message</span>
          </button>
          <button
            type="reset"
            className="theme-btn btn-style-one bg-theme-color5"
            onClick={() => {
              setPhone("");
              setError("");
            }}
          >
            <span className="btn-title">Effacer</span>
          </button>
        </div>
      </form>
                {/* Contact Form Validation*/}
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="contact-details__right">
                  <div className="sec-title">
                    <span className="sub-title">Besoin d'aide?</span>
                    <h2>Prenez contact avec nous</h2>
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
                        <h6>Pour toute question ?</h6>
                        <a href="tel:656 186 936">(+237) 656 186 936</a>
                        <br />
                        <a href="tel:676 726 905">/ (+237) 676 726 905</a>
                        <br />
                        <a href="tel:651 29 95 03">/ (+33) 651 29 95 03</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="lnr-icon-envelope1" />
                      </div>
                      <div className="text">
                        <h6>Envoyer un mail</h6>
                        <a href="mailto:info@boaz-study.com">info@boaz-study.com</a>
                      </div>
                    </li>
                    <li>
                      <div
                        className="icon"
                        style={{
                          marginRight: "5rem",
                          padding: "0",
                          top: "-10%",
                        }}
                      >
                        <span
                          className="lnr-icon-location"
                          style={{ marginLeft: " 2rem", marginRight: "1rem" }}
                        />
                      </div>
                      <div className="text" style={{ margin: "0" }}>
                        <h6>Visitez a tout moment</h6>
                        <span>Douala, Bonapriso, 389 Rue Toyota</span>
                        <br />
                      </div>
                    </li>
                    <li>
                      <div
                        className="icon"
                        style={{
                          marginRight: "5rem",
                          padding: "0",
                          top: "-10%",
                        }}
                      >
                        <span
                          className="lnr-icon-location"
                          style={{ marginLeft: " 2rem", marginRight: "1rem" }}
                        />
                      </div>
                      <div className="text" style={{ margin: "0" }}>
                        <h6>Visitez a tout moment</h6>
                        <span>
                          Yaoundé, Total Ecole de police, entre l’hôtel
                          Florencia et CCA Bank
                        </span>
                      </div>
                    </li>
                    <li>
                      <div
                        className="icon"
                        style={{
                          marginRight: "5rem",
                          padding: "0",
                          top: "-10%",
                        }}
                      >
                        <span
                          className="lnr-icon-location"
                          style={{ marginLeft: " 2rem", marginRight: "1rem" }}
                        />
                      </div>
                      <div className="text" style={{ margin: "0" }}>
                        <h6>Visitez a tout moment</h6>
                        <span>4 Pl. de la Défense, 94974 Paris, France</span>
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
                src="https://maps.google.com/maps?q=4%20Pl.%20de%20la%20Défense,%2094974%20Paris,%20France&hl=fr&z=15&ie=UTF8&iwloc=&output=embed"
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
