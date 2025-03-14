import { useParams } from "react-router-dom";
import Header from "../components/NewsHeader";
import detailsServicesData from "../data/detailServices";
import MainBox from "../components/mainBoxHeaderTop";
import NavOuter from "../components/navOuter";
import Footer from "../components/Footer";
import ServiceTabs from "../components/ServiceTabs";

const serviceImages = {
  1: `${process.env.PUBLIC_URL}/site_kit/images/services/avi.jpg`,
  2: `${process.env.PUBLIC_URL}/site_kit/images/services/logement.jpg`,
  3: `${process.env.PUBLIC_URL}/site_kit/images/services/aide-finance-france.jpg`,
  4: `${process.env.PUBLIC_URL}/site_kit/images/services/demarche.png`,
  5: `${process.env.PUBLIC_URL}/site_kit/images/services/aide.jpg`,
  6: `${process.env.PUBLIC_URL}/site_kit/images/services/ecole.png`,
  7: `${process.env.PUBLIC_URL}/site_kit/images/services/assurance1.png`,
  8: `${process.env.PUBLIC_URL}/site_kit/images/services/logement_attest.jpg`,
  9: `${process.env.PUBLIC_URL}/site_kit/images/services/service.png`
};

export const ServiceDetails = () => {
  const { id } = useParams();
  const serviceId = parseInt(id);
  const selectedService = detailsServicesData.find(service => service.id === serviceId) || detailsServicesData[0];
  const bannerImage = serviceImages[serviceId] || `${process.env.PUBLIC_URL}/site_kit/images/services/default.jpg`;

  return (
    <>
      <div className="page-wrapper">
        <div className="preloader" />
        <header className="main-header header-style-one">
          <MainBox />
          <div className="sticky-header">
            <div className="auto-container">
              <div className="inner-container">
                <div className="logo">
                  <a href="/">
                    <img src={`${process.env.PUBLIC_URL}/logo refais.png`} alt="Logo" />
                  </a>
                </div>
                <NavOuter />
              </div>
            </div>
          </div>
        </header>
        
        <section className="page-title" style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className="auto-container">
            <div className="title-outer">
              <h1 className="title" style={{fontSize:'34px'}}>{selectedService.title}</h1>
              <ul className="page-breadcrumb">
                <li><a href="/">Accueil</a></li>
                <li><a href="/services">Services</a></li>
                <li>{selectedService.title}</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="services-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="service-sidebar">
                  <div className="sidebar-widget service-sidebar-single">
                    <div className="service-sidebar wow fadeInUp">
                      <div className="service-list">
                        <ul>
                          {detailsServicesData.map((service) => (
                            <li key={service.id}>
                              <a href={`/services/${service.id}`} className={selectedService.id === service.id ? "current" : ""}>
                                <i className="fas fa-angle-right" />
                                <span>{service.title}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget service-sidebar-single mt-5">
                    <a href="http://www.boazstudy.com/register" className="theme-btn btn-style-one d-grid">
                      <span className="btn-title"><i className="fas fa-file-pdf"></i> Télécharger une brochure</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-lg-8">
                <div className="services-details__content">
                  <img src={serviceImages[serviceId]} alt={selectedService.title} className="img-fluid rounded mb-4 service-description-image" />
                  <h2 className="service-title">{selectedService.title}</h2>
                  <a href="http://www.boazstudy.com/register" className="theme-btn btn-style-one">Prendre le service</a>

                  <ServiceTabs selectedService={selectedService} style={{marginTop:'4rem'}}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default ServiceDetails;
