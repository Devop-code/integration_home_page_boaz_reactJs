import { useState } from "react";

import Header from "../components/NewsHeader";
import detailsServicesData from "../data/detailServices";
import MainBox from "../components/mainBoxHeaderTop";
import NavOuter from "../components/navOuter";
const serviceImages = [
  `${process.env.PUBLIC_URL}/site_kit/images/services/avi.jpg`,
  `${process.env.PUBLIC_URL}/site_kit/images/services/logement.jpg`,
  `${process.env.PUBLIC_URL}/site_kit/images/services/aide-finance-france.jpg`,
  `${process.env.PUBLIC_URL}/site_kit/images/services/demarche.png`,
  `${process.env.PUBLIC_URL}/site_kit/images/services/aide.jpg`,
  `${process.env.PUBLIC_URL}/site_kit/images/services/finance.jpg`,
  `${process.env.PUBLIC_URL}/site_kit/images/services/service.png`,
  `${process.env.PUBLIC_URL}/site_kit/images/services/ecole.png`,
  `${process.env.PUBLIC_URL}/site_kit/images/services/assurance1.png`
];

export const Blog = () => {
  const [selectedService, setSelectedService] = useState(detailsServicesData[0]);
  const serviceIndex = detailsServicesData.findIndex(service => service.id === selectedService.id);
  return (
         <>
     <div className="page-wrapper">
     <div className="preloader" />
     <header className="main-header header-style-one">
          {/* Header Top */}

          <MainBox />

          {/* End Header Lower */}
          {/* Mobile Menu  */}
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
                  <NavOuter/>
              </div>
            </div>
          </div>
          {/* End Sticky Menu */}
        </header>
        
     <section class="page-title"  style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/site_kit/images/services/avi.jpg)`,
          }}>
		<div class="auto-container">
			<div class="title-outer">
				<h1 class="title">AVI</h1>
				<ul class="page-breadcrumb">
					<li><a href="index.html">Accueil</a></li>
					<li><a href="#">Services</a></li>
					<li>AVI</li>
				</ul>
			</div>
		</div>
	</section>
     <section className="services-details">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="sec-title text-center light">
				<span className="sub-title">Apprenez en plus sur un service</span>
				<h2 className='text-black'>Ce que vous devez savoir sur nos <span className="color3">services.</span></h2>
			</div>
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m">
                  <div className="service-list">
                    <ul>
                      {detailsServicesData.map((service) => (
                        <li key={service.id}>
                          <a
                            href="#"
                            className={selectedService.id === service.id ? "current" : ""}
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedService(service);
                            }}
                          >
                            <i className="fas fa-angle-right" />
                            <span>{service.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Service Details Content */}
          <div className="col-xl-8 col-lg-8">
            <div className="services-details__content">
              <img src={serviceImages[serviceIndex]} alt={selectedService.title} className="img-fluid rounded mb-4 service-image" />
              <h2 className="mt-4 service-title">{selectedService.title}</h2>
              <p className="service-description">{selectedService.details.description}</p>
              
              <div className="content mt-40">
                <h3>Processus</h3>
                <ul>
                  {selectedService.details.steps?.map((step, index) => (
                    <li key={index} className="service-step">
                      <i className="fas fa-check-circle" /> {step}
                    </li>
                  ))}
                </ul>
              </div>
              
              {selectedService.details.requiredDocuments && (
                <div className="content mt-40">
                  <h3>Documents requis</h3>
                  <ul>
                    {selectedService.details.requiredDocuments.map((doc, index) => (
                      <li key={index} className="service-document">
                        <i className="fas fa-file-alt" /> {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {selectedService.details.pricing && (
                <div className="content mt-40">
                  <h3>Tarification</h3>
                  {Array.isArray(selectedService.details.pricing) ? (
                    <ul>
                      {selectedService.details.pricing.map((priceOption, index) => (
                        <li key={index} className="service-price">
                          {priceOption.option} - <strong>{priceOption.price}</strong>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="service-price-text">{selectedService.details.pricing}</p>
                  )}
                </div>
              )}
              
              {selectedService.details.faq && (
                <div className="mt-25">
                  <h3>Foire Aux Questions</h3>
                  <ul className="accordion-box wow fadeInRight">
                    {selectedService.details.faq.map((question, index) => (
                      <li className="accordion block service-faq" key={index}>
                        <div className="acc-btn">
                          {question}
                          <div className="icon fa fa-plus" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {selectedService.details.cta && (
                <div className="mt-40">
                  <a href="#" className="theme-btn btn-style-one d-grid service-cta">
                    <span className="btn-title">{selectedService.details.cta}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
     </div>
    </>
  );

};
