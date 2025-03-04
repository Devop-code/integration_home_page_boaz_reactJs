// filepath: /c:/Users/HP/integration_home_page_boaz_reactJs/src/pages/services/servicefinfran.js
import React, { useState } from 'react';
import ServiceDetailData from '../../data/Servicefinfrancedata';
import Footer from '../../components/Footer';
import MainBox from '../../components/mainBoxHeaderTop';
import MobileMenu from '../../components/MobileMenu';
const ServiceFinFrance = () => {
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

  const service = ServiceDetailData.serviceFinFrance;

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
        <a
          href={service.cta.link}
          className="btn btn-lg btn-primary"
          style={{ backgroundColor: colors.accent, borderColor: colors.accent }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e69500'}
          onMouseOut={(e) => e.target.style.backgroundColor = colors.accent}
        >
          {service.cta.label}
        </a>
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
            <button className={`nav-link ${activeTab === 'pricing' ? 'active' : ''}`} onClick={() => handleTabChange('pricing')}>Tarifs</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'testimonials' ? 'active' : ''}`} onClick={() => handleTabChange('testimonials')}>Témoignages</button>
          </li>
        </ul>
      </div>

      <div className="mb-5">
        {activeTab === 'description' && (
          <div>
            <div className="mb-4">
              <p className="lead">{service.fullDescription}</p>
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

        {activeTab === 'pricing' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Tarifs et conditions</h2>
            <p>{service.pricing}</p>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div>
            <h2 className="h4 mb-4" style={{ color: colors.primary }}>Ce que disent nos clients</h2>
            <div className="row">
              {service.testimonials.map((testimonial, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="card p-4">
                    <p className="font-italic">"{testimonial.message}"</p>
                    <p className="text-right">- {testimonial.author}</p>
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
        <div className="text-center mt-4">
          <a
            href={service.cta.link}
            className="btn btn-lg btn-primary"
            style={{ backgroundColor: colors.accent, borderColor: colors.accent }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e69500'}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.accent}
          >
            {service.cta.label}
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ServiceFinFrance;