import React, { useState } from 'react';
import ServiceDetailData from '../../data/ServiceadminData';
import Footer from '../../components/Footer';
import MainBox from '../../components/mainBoxHeaderTop';
import MobileMenu from '../../components/MobileMenu';

const ServiceAdmin = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [activeFaqItem, setActiveFaqItem] = useState(null);

  const colors = {
    primary: '#0e3550',
    accent: '#ffa500',
    light: '#ffffff',
    gray: '#f5f5f5',
    darkGray: '#666666',
    border: '#e0e0e0'
  };

  const service = ServiceDetailData.serviceAdmin;

  const handleTabChange = (tab) => setActiveTab(tab);
  const toggleFaqItem = (index) => setActiveFaqItem(activeFaqItem === index ? null : index);

  return (
      <div className='page-wrapper'>
        <div className="preloader" />

        <header className="main-header header-style-one">
          <MainBox />
          <MobileMenu />
          <div className="sticky-header">
            <div className="auto-container">
              <div className="inner-container">
                <div className="logo">
                  <a href="index.html">
                    <img src={`${process.env.PUBLIC_URL}/logo refais.png`} alt="Logo" />
                  </a>
                </div>
                <div className="nav-outer">
                  <nav className="main-menu">
                    <div className="navbar-collapse show collapse clearfix">
                      <ul className="navigation clearfix">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/connexion">Connexion</a></li>
                        <li><a href="/inscription">Inscription</a></li>
                      </ul>
                    </div>
                  </nav>
                  <div className="mobile-nav-toggler">
                    <span className="icon lnr-icon-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container py-5">
          <div className="mb-5 text-center">
            <h1 className="display-4 mb-3" style={{ color: colors.primary }}>{service.title}</h1>
            <p className="lead" style={{ color: colors.darkGray }}>{service.shortDescription}</p>
          </div>

          <div className="mb-5 text-center">
            <a href={service.cta.link} className="btn btn-lg btn-primary"
               style={{ backgroundColor: colors.accent, borderColor: colors.accent }}
               onMouseOver={(e) => e.target.style.backgroundColor = '#e69500'}
               onMouseOut={(e) => e.target.style.backgroundColor = colors.accent}>
              {service.cta.label}
            </a>
          </div>

          <div className="mb-4 border-bottom" style={{ borderColor: colors.border }}>
            <ul className="nav nav-tabs">
              {['description', 'steps', 'démarches', 'outils', 'résultats', 'faq'].map(tab => (
                  <li className="nav-item" key={tab}>
                    <button className={`nav-link ${activeTab === tab ? 'active' : ''}`} onClick={() => handleTabChange(tab)}>
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  </li>
              ))}
            </ul>
          </div>

          <div className="mb-5">
            {activeTab === 'description' && (
                <div>
                  <p className="lead">{service.description}</p>
                  {service.benefits.length > 0 && (
                      <ul className="list-unstyled mt-4">
                        {service.benefits.map((benefit, index) => <li key={index} className="mb-2">{benefit}</li>)}
                      </ul>
                  )}
                </div>
            )}

            {activeTab === 'steps' && (
                <div>
                  <h2 className="h4 mb-4" style={{ color: colors.primary }}>Processus</h2>
                  <ol>
                    {service.steps.map((step, index) => <li key={index}>{step}</li>)}
                  </ol>
                </div>
            )}

            {activeTab === 'démarches' && (
                <div>
                  <h2 className="h4 mb-4" style={{ color: colors.primary }}>Démarches couvertes</h2>
                  <ul>
                    {service.démarchesCouvertes.map((démarche, index) => <li key={index}>{démarche}</li>)}
                  </ul>
                </div>
            )}

            {activeTab === 'outils' && (
                <div>
                  <h2 className="h4 mb-4" style={{ color: colors.primary }}>Outils de suivi</h2>
                  <p>{service.outilsSuivi}</p>
                </div>
            )}

            {activeTab === 'résultats' && (
                <div>
                  <h2 className="h4 mb-4" style={{ color: colors.primary }}>Résultats attendus</h2>
                  <p>{service.résultatsAttendus}</p>
                </div>
            )}

            {activeTab === 'faq' && (
                <div>
                  <h2 className="h4 mb-4" style={{ color: colors.primary }}>Questions fréquentes</h2>
                  <div className="accordion" id="faqAccordion">
                    {service.faq.map((item, index) => (
                        <div key={index} className="card">
                          <div className="card-header">
                            <h5 className="mb-0">
                              <button className="btn btn-link" type="button" onClick={() => toggleFaqItem(index)}>
                                {item.question}
                              </button>
                            </h5>
                          </div>
                          <div id={`collapse${index}`} className={`collapse ${activeFaqItem === index ? 'show' : ''}`}>
                            <div className="card-body">{item.answer}</div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
  );
};

export default ServiceAdmin;
