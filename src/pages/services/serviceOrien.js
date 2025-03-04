import React, { useState } from 'react';
import serviceOrienData from '../../data/serviceOrienData';
import MainBox from "../../components/mainBoxHeaderTop";
import MobileMenu from '../../components/MobileMenu';
import Footer from '../../components/Footer';
const ServiceOrien = () => {
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

  const {
    title,
    shortDescription,
    description,
    benefits,
    steps,
    etudeDeProfil,
    exemplesReussis,
    partenariats,
    faq,
    cta
  } = serviceOrienData;

  const handleTabChange = (tab) => setActiveTab(tab);
  const toggleFaqItem = (index) => setActiveFaqItem(activeFaqItem === index ? null : index);

  return (
    
    <div className='page-wrapper'>
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
      <div className="container py-5">
      <div className="mb-5 text-center">
        <h1 className="display-4 mb-3" style={{ color: colors.primary }}>{title}</h1>
        <p className="lead" style={{ color: colors.darkGray }}>{shortDescription}</p>
      </div>

      <div className="mb-5 text-center">
        <a
          href={cta.link}
          className="btn btn-lg btn-primary"
          style={{ backgroundColor: colors.accent, borderColor: colors.accent }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e69500'}
          onMouseOut={(e) => e.target.style.backgroundColor = colors.accent}
        >
          {cta.label}
        </a>
      </div>

      <div className="mb-4 border-bottom" style={{ borderColor: colors.border }}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
              style={{ color: activeTab === 'description' ? colors.primary : colors.darkGray }}
              onClick={() => handleTabChange('description')}
            >
              Description
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'process' ? 'active' : ''}`}
              style={{ color: activeTab === 'process' ? colors.primary : colors.darkGray }}
              onClick={() => handleTabChange('process')}
            >
              Processus
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'etude' ? 'active' : ''}`}
              style={{ color: activeTab === 'etude' ? colors.primary : colors.darkGray }}
              onClick={() => handleTabChange('etude')}
            >
              Étude de Profil
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'partenariats' ? 'active' : ''}`}
              style={{ color: activeTab === 'partenariats' ? colors.primary : colors.darkGray }}
              onClick={() => handleTabChange('partenariats')}
            >
              Partenariats
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'exemples' ? 'active' : ''}`}
              style={{ color: activeTab === 'exemples' ? colors.primary : colors.darkGray }}
              onClick={() => handleTabChange('exemples')}
            >
              Exemples réussis
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'faq' ? 'active' : ''}`}
              style={{ color: activeTab === 'faq' ? colors.primary : colors.darkGray }}
              onClick={() => handleTabChange('faq')}
            >
              FAQ
            </button>
          </li>
        </ul>
      </div>

      <div className="mb-5">
        {activeTab === 'description' && (
          <div>
            <div className="mb-4">
              <p className="lead">{description}</p>
              {benefits.length > 0 && (
                <div className="mt-4">
                  <h2 className="h4 mb-3" style={{ color: colors.primary }}>Les avantages</h2>
                  <div className="row">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="d-flex align-items-start p-3 bg-light rounded">
                          <div className="mr-3 p-2 rounded-circle" style={{ backgroundColor: colors.accent, marginRight: "10px", width: "10%", height: "10%" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="h5" style={{ color: colors.primary }}>{benefit}</h3>
                            <p>{benefit}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Notre processus</h2>
            <div className="timeline">
              {steps.map((step, index) => (
                <div key={index} className="timeline-item mb-4">
                  <div className="timeline-icon" style={{ backgroundColor: colors.accent }}>
                    {index + 1}
                  </div>
                  <div className="timeline-content">
                    <h3 className="h5" style={{ color: colors.primary }}>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'etude' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Étude de Profil</h2>
            <p>{etudeDeProfil.description}</p>
            <h3 className="h5" style={{ color: colors.primary }}>Tarifs</h3>
            <p>{etudeDeProfil.pricing.engagement}</p>
            <p>{etudeDeProfil.pricing.sansEngagement}</p>
          </div>
        )}

        {activeTab === 'partenariats' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Partenariats</h2>
            <p>{partenariats}</p>
          </div>
        )}

        {activeTab === 'exemples' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Exemples réussis</h2>
            <p>{exemplesReussis}</p>
          </div>
        )}

        {activeTab === 'faq' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Questions fréquentes</h2>
            <div className="accordion" id="faqAccordion">
              {faq.map((item, index) => (
                <div key={index} className="card">
                  <div className="card-header" id={`heading${index}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target={`#collapse${index}`}
                        aria-expanded={activeFaqItem === index}
                        aria-controls={`collapse${index}`}
                        onClick={() => toggleFaqItem(index)}
                      >
                        {item.question}
                      </button>
                    </h5>
                  </div>

                  <div
                    id={`collapse${index}`}
                    className={`collapse ${activeFaqItem === index ? 'show' : ''}`}
                    aria-labelledby={`heading${index}`}
                    data-parent="#faqAccordion"
                  >
                    <div className="card-body">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-light p-4 rounded text-center mt-5">
        <h2 className="h4" style={{ color: colors.primary }}>Besoin d'aide ou d'informations supplémentaires ?</h2>
        <p>Notre équipe est disponible pour vous accompagner.</p>
        <a
          href={cta.link}
          className="btn btn-lg btn-primary text-start"
          style={{ backgroundColor: colors.accent, borderColor: colors.accent, color: colors.light }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e69500'}
          onMouseOut={(e) => e.target.style.backgroundColor = colors.accent}
        >
          {cta.label}
        </a>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ServiceOrien;