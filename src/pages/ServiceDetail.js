import React from "react";
import servicesData from "../data/servicesData";

const ServicesDetails = ({ serviceId }) => {
  const service = servicesData.find((s) => s.id === serviceId);
  if (!service) return <p>Service non trouvé.</p>;

  return (
    <section className="services-details">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m">
                  <div className="service-list">
                    <ul>
                      {servicesData.map((s) => (
                        <li key={s.id}>
                          <a href={s.readMoreLink} className={s.id === serviceId ? "current" : ""}>
                            <i className="fas fa-angle-right"></i>
                            <span>{s.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="col-xl-8 col-lg-8">
            <div className="services-details__content">
              <img src={service.image} alt={service.title} />
              <h2 className="mt-4">{service.title}</h2>
              <p>{service.description}</p>
              <div className="content mt-40">
                <div className="text">
                  <h3>Détails du Service</h3>
                  <p>
                    Nous vous accompagnons dans toutes les étapes liées à {service.title}, avec un service personnalisé et
                    une assistance complète.
                  </p>
                </div>
                <div className="feature-list">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <div className="single-item">
                        <div className="icon-box">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <h6 className="title">Service personnalisé</h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <div className="single-item">
                        <div className="icon-box">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <h6 className="title">Accompagnement complet</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-25">
                <h3>Questions Fréquentes</h3>
                <ul className="accordion-box wow fadeInRight">
                  <li className="accordion block active-block">
                    <div className="acc-btn active">
                      Comment bénéficier de ce service ?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          Contactez-nous via notre site ou rendez-vous dans l'un de nos bureaux.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetails;
