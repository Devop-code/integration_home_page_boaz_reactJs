import React, { useState } from 'react';
import Footer from '../../components/Footer';
import MainBox from '../../components/mainBoxHeaderTop';
import MobileMenu from '../../components/MobileMenu';

const ServiceAidelog = ({ service }) => {
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
    title = "Aide à la recherche d’un logement adapté à votre profil",
    shortDescription = "Trouvez rapidement le logement idéal, adapté à votre budget et à vos critères, grâce à l’accompagnement complet de Boaz-Study.",
    fullDescription = "",
    process = [],
    advantages = [],
    pricing = { amount: "", details: [] },
    testimonials = [],
    faq = [],
    contact = { email: "contact@boaz-study.com", phone: "+XX XXX XXX XXX" },
    cta = { text: "Démarrer ma recherche de logement", url: "#demander-logement" }
  } = service;

  const handleTabChange = (tab) => setActiveTab(tab);

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
                    src="/logo refais.png"
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
            href={cta.url}
            className="btn btn-lg btn-primary"
            style={{ backgroundColor: colors.accent, borderColor: colors.accent }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e69500'}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.accent}
          >
            {cta.text}
          </a>
        </div>

        <ul className="nav nav-tabs border-bottom mb-4">
          {['description', 'process', 'pricing', 'testimonials'].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                style={{ color: activeTab === tab ? colors.primary : colors.darkGray }}
                onClick={() => handleTabChange(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="mb-5">
          {activeTab === 'description' && (
            <div>
              <p className="lead">{fullDescription}</p>
              {advantages.length > 0 && (
                <div className="mt-4">
                  <h2 className="h4 mb-3" style={{ color: colors.primary }}>Les avantages</h2>
                  <ul className="list-unstyled">
                    {advantages.map((adv, index) => (
                      <li key={index}><strong>{adv.title}:</strong> {adv.description}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="h4 mb-4" style={{ color: colors.primary }}>Notre processus</h2>
              <ol>
                {process.map((step, index) => (
                  <li key={index}><strong>{step.title}:</strong> {step.description}</li>
                ))}
              </ol>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div>
              <h2 className="h4 mb-4" style={{ color: colors.primary }}>Tarifs et conditions</h2>
              <p className="display-4" style={{ color: colors.accent }}>{pricing.amount}</p>
              <ul>
                {pricing.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div>
              <h2 className="h4 mb-4" style={{ color: colors.primary }}>Témoignages</h2>
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="blockquote">
                  <p>"{testimonial.content}"</p>
                  <footer className="blockquote-footer">{testimonial.name}</footer>
                </blockquote>
              ))}
            </div>
          )}
        </div>

        <div className="bg-light p-4 rounded">
          <div className="text-center mb-4">
            <h2 className="h4" style={{ color: colors.primary }}>Besoin d'aide ?</h2>
            <p>Notre équipe est disponible pour vous accompagner.</p>
          </div>
          <div className="text-center">
            <a href={`mailto:${contact.email}`} className="btn btn-outline-primary m-2">Email: {contact.email}</a>
            <a href={`tel:${contact.phone}`} className="btn btn-outline-primary m-2">Téléphone: {contact.phone}</a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const ServiceLog = () => {
  const logementAccompagnement = {
    title: "Aide à la recherche d’un logement adapté à votre profil",
    shortDescription: "Trouvez rapidement le logement idéal, adapté à votre budget et à vos critères, grâce à l’accompagnement complet de Boaz-Study.",
    fullDescription: "La recherche d’un logement à l’étranger peut s’avérer complexe et stressante. Boaz-Study vous propose un accompagnement personnalisé pour dénicher un logement adapté à votre budget et à vos critères de confort, principalement pour les étudiants et jeunes professionnels.",
    advantages: [
      { title: "Soutien complet", description: "De la prospection jusqu'à la finalisation du contrat." },
      { title: "Évitez les pièges", description: "Évitez les pièges et les mauvaises surprises." },
      { title: "Gagnez un temps précieux", description: "Grâce à un accompagnement expert." },
      { title: "Large gamme de logements", description: "Accès à une large gamme de logements adaptés à vos besoins." }
    ],
    process: [
      { title: "Remplir le questionnaire", description: "Remplissez un questionnaire personnalisé détaillant votre budget et vos critères." },
      { title: "Sélection d’offres", description: "Notre algorithme et notre équipe sélectionnent plusieurs offres correspondant à votre profil." },
      { title: "Validation et contractualisation", description: "Choisissez l’offre qui vous convient et bénéficiez d’un accompagnement pour la négociation et la signature du contrat." },
      { title: "Suivi jusqu’à l’installation", description: "Profitez d'un suivi jusqu’à votre installation, incluant la gestion de la caution et l'état des lieux." }
    ],
    pricing: {
      amount: "350 000 FCFA",
      details: [
        "Service d’aide à la recherche d’un logement à partir de 350 000 FCFA, avec différents packs disponibles."
      ]
    },
    testimonials: [
      { name: "Amina", content: "J’ai trouvé mon studio en seulement 2 semaines grâce à Boaz-Study." },
      { name: "Thomas", content: "Le suivi personnalisé m’a permis de m’installer sans stress dans ma nouvelle ville." }
    ],
    cta: { text: "Démarrer ma recherche de logement", url: "#demander-logement" }
  }
  
  return <ServiceAidelog service={logementAccompagnement} />;
};

export default ServiceLog;