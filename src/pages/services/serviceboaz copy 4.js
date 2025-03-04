import React, { useState } from 'react';
  const ServiceDetailPage = ({ service }) => {
    const [activeTab, setActiveTab] = useState('description');
    const [activeFaqItem, setActiveFaqItem] = useState(null);
  
    // Couleurs de la charte graphique basées sur le logo
    const colors = {
      primary: '#0e3550', // Bleu marine
      accent: '#ffa500', // Orange
      light: '#ffffff',
      gray: '#f5f5f5',
      darkGray: '#666666',
      border: '#e0e0e0'
    };
  
    // Valeurs par défaut si les props ne sont pas fournies
    const {
      title = "Titre du service",
      shortDescription = "Description courte du service",
      fullDescription = "",
      process = [],
      advantages = [],
      documents = [],
      pricing = { amount: "", details: [] },
      testimonials = [],
      faq = [],
      contact = { email: "contact@boaz-study.com", phone: "+XX XXX XXX XXX" },
      cta = { text: "Souscrire maintenant", url: "#" }
    } = service;
  
    // Gestion du changement d'onglet
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    // Gestion des FAQ (accordéon)
    const toggleFaqItem = (index) => {
      setActiveFaqItem(activeFaqItem === index ? null : index);
    };
  
    return (
      <div className="container py-5">
        {/* En-tête de la page */}
        <div className="mb-5 text-center">
          <h1 className="display-4 mb-3" style={{ color: colors.primary }}>{title}</h1>
          <p className="lead" style={{ color: colors.darkGray }}>{shortDescription}</p>
        </div>
  
        {/* Appel à l'action principal */}
        <div className="mb-5 text-center">
          <a
            href={cta.url}
            className="btn btn-lg btn-primary"
            style={{ 
              backgroundColor: colors.accent,
              borderColor: colors.accent
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e69500'} // Hover effect
            onMouseOut={(e) => e.target.style.backgroundColor = colors.accent}
          >
            {cta.text}
          </a>
        </div>
  
        {/* Navigation par onglets */}
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
                className={`nav-link ${activeTab === 'pricing' ? 'active' : ''}`}
                style={{ color: activeTab === 'pricing' ? colors.primary : colors.darkGray }}
                onClick={() => handleTabChange('pricing')}
              >
                Tarifs
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
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'testimonials' ? 'active' : ''}`}
                style={{ color: activeTab === 'testimonials' ? colors.primary : colors.darkGray }}
                onClick={() => handleTabChange('testimonials')}
              >
                Témoignages
              </button>
            </li>
          </ul>
        </div>
  
        {/* Contenu principal - varie selon l'onglet actif */}
        <div className="mb-5">
          {/* Description */}
          {activeTab === 'description' && (
            <div>
              <div className="mb-4">
                <p className="lead">{fullDescription}</p>
                
                {advantages.length > 0 && (
                  <div className="mt-4">
                    <h2 className="h4 mb-3" style={{ color: colors.primary }}>Les avantages</h2>
                    <div className="row">
                      {advantages.map((advantage, index) => (
                        <div key={index} className="col-md-6 mb-3">
                          <div className="d-flex align-items-start p-3 bg-light rounded">
                            <div className="mr-3 p-2 rounded-circle" style={{ backgroundColor: colors.accent,marginRight:"10px",width:"10%", height:"10%"}}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="h5" style={{ color: colors.primary }}>{advantage.title}</h3>
                              <p>{advantage.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
  
              {documents.length > 0 && (
                <div className="mt-4">
                  <h2 className="h4 mb-3" style={{ color: colors.primary }}>Documents requis</h2>
                  <ul className="list-unstyled">
                    {documents.map((document, index) => (
                      <li key={index} className="mb-2">{document}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-muted">Les documents doivent être au format PDF ou en image (JPG/PNG) d'une résolution suffisante.</p>
                </div>
              )}
            </div>
          )}
  
          {/* Processus */}
          {activeTab === 'process' && (
            <div>
              <h2 className="h4 mb-4" style={{ color: colors.primary }}>Notre processus</h2>
              <div className="timeline">
                {process.map((step, index) => (
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
  
          {/* Tarifs */}
          {activeTab === 'pricing' && (
            <div>
              <h2 className="h4 mb-4" style={{ color: colors.primary }}>Tarifs et conditions</h2>
              <div className="p-4 bg-light rounded mb-4">
                <div className="mb-3">
                  <h3 className="h5" style={{ color: colors.primary }}>Tarif</h3>
                  <p className="display-4" style={{ color: colors.accent }}>{pricing.amount}</p>
                </div>
  
                {pricing.details.length > 0 && (
                  <div>
                    <h4 className="h6 mb-2">Ce qui est inclus :</h4>
                    <ul className="list-unstyled">
                      {pricing.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
  
              <div className="text-center mt-4">
                <a
                  href={cta.url}
                  className="btn btn-lg btn-primary"
                  style={{ 
                    backgroundColor: colors.accent,
                    borderColor: colors.accent
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#e69500'} // Hover effect
                  onMouseOut={(e) => e.target.style.backgroundColor = colors.accent}
                >
                  {cta.text}
                </a>
              </div>
            </div>
          )}
  
          {/* FAQ */}
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
  
          {/* Témoignages */}
          {activeTab === 'testimonials' && (
            <div>
              <h2 className="h4 mb-4" style={{ color: colors.primary }}>Ce que disent nos clients</h2>
              <div className="row">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="card p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="rounded-circle d-flex align-items-center justify-content-center mr-3" style={{ backgroundColor: colors.accent, width: '50px', height: '50px' }}>
                          <span className="text-white font-weight-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h5 className="mb-0" style={{ color: colors.primary }}>{testimonial.name}</h5>
                          <p className="mb-0 text-muted">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="font-italic">"{testimonial.content}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
  
        {/* Contact et CTA final */}
        <div className="bg-light p-4 rounded">
          <div className="text-center mb-4">
            <h2 className="h4 mb-2" style={{ color: colors.primary }}>Besoin d'aide ou d'informations supplémentaires ?</h2>
            <p>Notre équipe est disponible pour vous accompagner dans votre démarche.</p>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
            <a href={`mailto:${contact.email}`} className="d-flex align-items-center p-3 rounded transition-colors duration-200 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" style={{ color: colors.primary }} viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="d-flex align-items-center p-3 rounded transition-colors duration-200 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" style={{ color: colors.primary }} viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{contact.phone}</span>
            </a>
          </div>
          <div className="text-center mt-4">
            <a
              href={cta.url}
              className="btn btn-lg btn-primary"
              style={{ 
                backgroundColor: colors.accent,
                borderColor: colors.accent
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e69500'} // Hover effect
              onMouseOut={(e) => e.target.style.backgroundColor = colors.accent}
            >
              {cta.text}
            </a>
          </div>
        </div>
      </div>
    );
  };

// Exemple d'utilisation avec des données complètes pour l'AVI
const AviServicePage = () => {
  const aviService = {
    title: "Attestation de Virement Irrévocable (AVI)",
    shortDescription: "Obtenez en 24h votre Attestation de Virement Irrévocable (AVI), document indispensable pour prouver votre capacité financière lors d'un séjour d'études ou de longue durée.",
    fullDescription: "L'Attestation de Virement Irrévocable (AVI) est un document officiel attestant de votre capacité financière pour un séjour d'études ou toute autre démarche nécessitant la preuve de ressources. Exigée par de nombreuses ambassades et universités, l'AVI permet de justifier que vous disposez des fonds nécessaires pour couvrir vos dépenses. Avec Boaz-Study, vous bénéficiez d'un traitement rapide et entièrement en ligne, pour obtenir ce document en seulement 24 heures après validation de votre paiement.",
    advantages: [
      {
        title: "Délai ultra-rapide",
        description: "Votre AVI est délivrée en 24h après validation de votre paiement."
      },
      {
        title: "100% en ligne",
        description: "Procédure entièrement dématérialisée, vous permettant d'éviter les déplacements et les démarches administratives fastidieuses."
      },
      {
        title: "Accompagnement expert",
        description: "Une équipe experte vérifie minutieusement votre dossier et les pièces justificatives."
      },
      {
        title: "Document officiel reconnu",
        description: "Notre document est conforme aux exigences administratives en vigueur dans la majorité des pays."
      }
    ],
    process: [
      {
        title: "Remplir le formulaire",
        description: "Indiquez vos informations personnelles (nom, prénom, email, téléphone) ainsi que le montant à justifier et la durée de votre séjour."
      },
      {
        title: "Génération de la pro-forma et paiement",
        description: "Une pro-forma vous est automatiquement envoyée par email. Vous effectuez ensuite le paiement par dépôt bancaire ou virement."
      },
      {
        title: "Validation et traitement",
        description: "Dès réception et vérification de votre preuve de paiement, notre équipe valide votre dossier et génère l'AVI."
      },
      {
        title: "Réception du document",
        description: "L'AVI vous est envoyée par email et est disponible dans votre espace client pour téléchargement à tout moment."
      }
    ],
    documents: [
      "Une copie de votre passeport (face et verso)",
      "Une preuve d'admission ou d'inscription dans l'établissement concerné",
      "Un justificatif de domicile récent (moins de 3 mois)"
    ],
    pricing: {
      amount: "235 000 FCFA",
      details: [
        "Traitement en 24h après réception du paiement validé",
        "Format numérique téléchargeable",
        "Assistance par email et téléphone",
        "350 000 FCFA si seulement 60% du paiement a été versé"
      ]
    },
    testimonials: [
      {
        name: "Lucas",
        role: "Étudiant en Master",
        content: "Grâce à Boaz-Study, j'ai obtenu mon AVI en un temps record. J'ai pu finaliser ma demande de visa sans aucun stress !"
      },
      {
        name: "Sara",
        role: "Future étudiante en Licence",
        content: "Le processus était simple et le suivi très réactif. Je recommande vivement ce service."
      }
    ],
    faq: [
      {
        question: "Que faire si mon paiement est refusé ?",
        answer: "Vous recevrez une notification et des instructions pour effectuer une nouvelle tentative ou contacter notre support."
      },
      {
        question: "L'AVI est-elle reconnue par toutes les ambassades ?",
        answer: "Notre document est conforme aux exigences administratives en vigueur dans la majorité des pays. Pour certains cas particuliers, nous vous conseillons de vérifier avec votre ambassade."
      },
      {
        question: "Peut-on modifier le montant après avoir demandé l'AVI ?",
        answer: "Une fois la demande soumise, le montant ne peut être modifié. En cas d'erreur, contactez rapidement notre support pour trouver une solution."
      }
    ],
    contact: {
      email: "contact@boaz-study.com",
      phone: "+123 456 789"
    },
    cta: {
      text: "Obtenir mon AVI dès maintenant",
      url: "#demander-avi"
    }
  };

  return <ServiceDetailPage service={aviService} />;
};

export default AviServicePage;