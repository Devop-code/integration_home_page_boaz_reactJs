// filepath: /c:/Users/HP/integration_home_page_boaz_reactJs/src/pages/services/servicefinance.js
import React, { useState } from 'react';
import ServiceDetailData from '../../data/ServicefinanceData';
import Footer from '../../components/Footer';
import MainBox from '../../components/mainBoxHeaderTop';
import MobileMenu from '../../components/MobileMenu';

const ServiceFinance = () => {
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

  const service = ServiceDetailData.serviceFinance;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleFaqItem = (index) => {
    setActiveFaqItem(activeFaqItem === index ? null : index);
  };

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
        <h1 className="display-4 mb-3" style={{ color: colors.primary }}>{service.title}</h1>
        <p className="lead" style={{ color: colors.darkGray }}>{service.shortDescription}</p>
      </div>

      <div className="mb-5 text-center">
        {service.cta.map((action, index) => (
          <a
            key={index}
            href={action.link}
            className="btn btn-lg btn-primary mx-2"
            style={{ backgroundColor: colors.accent, borderColor: colors.accent }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e69500'}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.accent}
          >
            {action.label}
          </a>
        ))}
      </div>

      <div className="mb-4 border-bottom" style={{ borderColor: colors.border }}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'description' ? 'active' : ''}`} onClick={() => handleTabChange('description')}>Description</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'process' ? 'active' : ''}`} onClick={() => handleTabChange('process')}>Processus</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'types' ? 'active' : ''}`} onClick={() => handleTabChange('types')}>Types de Financement</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'simulations' ? 'active' : ''}`} onClick={() => handleTabChange('simulations')}>Simulations</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'frais' ? 'active' : ''}`} onClick={() => handleTabChange('frais')}>Frais et Conditions</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'faq' ? 'active' : ''}`} onClick={() => handleTabChange('faq')}>FAQ</button>
          </li>
        </ul>
      </div>

      <div className="mb-5">
        {activeTab === 'description' && (
          <div>
            <div className="mb-4">
              <p className="lead">{service.description}</p>
              {service.benefits.length > 0 && (
                <div className="mt-4">
                  <h2 className="h4 mb-3" style={{ color: colors.primary }}>Les avantages</h2>
                  <ul className="list-unstyled">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="mb-2">{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Notre processus</h2>
            <ol>
              {service.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {activeTab === 'types' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Types de Financement</h2>
            <ul>
              {service.typesDeFinancement.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'simulations' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Simulations</h2>
            <p>{service.simulations}</p>
          </div>
        )}

        {activeTab === 'frais' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Frais et Conditions</h2>
            <ul>
              {service.fraisEtConditions.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'faq' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Questions fréquentes</h2>
            <div className="accordion" id="faqAccordion">
              {service.faq.map((item, index) => (
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

      <div className="bg-light p-4 rounded">
        <div className="text-center mb-4">
          <h2 className="h4 mb-2" style={{ color: colors.primary }}>Besoin d'aide ou d'informations supplémentaires ?</h2>
          <p>Notre équipe est disponible pour vous accompagner dans votre démarche.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ServiceFinance;