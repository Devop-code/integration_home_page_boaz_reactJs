import React from "react";

import "./PricingSection.css"; // Import CSS for hover effects
const PricingSection = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  
  <link
    href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css"
  />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="assets/css/pricing-plan.css" />
  <main style={{width:'100%'}}>
    <div className="container "style={{marginTop: '0px',width: '100%'}}>
      <h5 className="text-center pricing-table-subtitle">NOS PRIX</h5>
      <h1 className="text-center pricing-table-title">Boaz-Study</h1>
      <div className="row d-flex flex">
        <div className="col-md-3"style={{borderRadius: '10px'}}>
          <div className="card pricing-card pricing-plan-basic border-0 "style={{width: '17rem'}}>
            <div className="card-body">
              <i className="mdi mdi-file-document-box-check-outline pricing-plan-icon" style={{color:'#fa8714'}}/>
              <p className="pricing-plan-title">AVI</p>
              <h3 className="pricing-plan-cost" style={{fontSize:"20px"}}>4,840,000 FCFA</h3>
              <ul className="pricing-plan-features">
                <li>Délivré en 24 H</li>
                <li>615€ * 12</li>
                <li>+ 2.5% frais de transfert (CMR - FRANCE)</li>
                <li>0€ virement en France</li>
              </ul>
              <a href="http://www.boaz-study.com/register" className="btn pricing-plan-purchase-btn rounded-pill" style={{backgroundColor: '#015cb5'}}>
                Acheter
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3"style={{borderRadius: '10px',}}>
          <div className="card pricing-card pricing-card-highlighted  pricing-plan-pro border-0" style={{width: '17rem',marginRight: '0px',marginLeft: '0px'}}> 
            <div className="card-body">
              <i className="mdi mdi-cash-multiple pricing-plan-icon" style={{color:'#015cb5'}}/>
              <p className="pricing-plan-title">Frais AVI</p>
              <h3 className="pricing-plan-cost "style={{fontSize:"20px"}}>230,000 - 350,000 FCFA</h3>
              <ul className="pricing-plan-features">
                <li>230,000 FCFA (Classic)</li>
                <li>350,000 FCFA (financement via banque)</li>
              </ul>
              <a href="http://www.boaz-study.com/register" className="btn pricing-plan-purchase-btn rounded-pill" style={{backgroundColor: '#fa8714'}}>
                Acheter
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3"style={{borderRadius: '10px',}}>
          <div className="card pricing-card pricing-plan-enterprise border-0 "style={{width: '17rem'}} >
            <div className="card-body">
              <i className="mdi mdi-home-city-outline pricing-plan-icon" style={{color:'#fa8714'}}/>
              <p className="pricing-plan-title">Attestation de Logement</p>
              <h3 className="pricing-plan-cost" style={{fontSize:"20px"}}>100,000 FCFA</h3>
              <ul className="pricing-plan-features">
                <li>Garantie de logement avant votre arrivée</li>
              </ul>
              <a href="http://www.boaz-study.com/register" className="btn pricing-plan-purchase-btn rounded-pill" style={{backgroundColor: '#015cb5'}}>
               Acheter
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3"style={{borderRadius: '10px'}} >
          <div className="card pricing-card pricing-plan-basic border-0" style={{width: '17rem'}}>
            <div className="card-body">
              <i className="mdi mdi-airplane pricing-plan-icon" style={{color:'#015cb5'}}/>
              <p className="pricing-plan-title">Assurance Voyage</p>
              <h3 className="pricing-plan-cost"style={{fontSize:"20px"}}>50,000 FCFA</h3>
              <ul className="pricing-plan-features">
                <li>ACS ASSURANCE</li>
              </ul>
              <a href="http://www.boaz-study.com/register" className="btn pricing-plan-purchase-btn rounded-pill"style={{backgroundColor: '#fa8714'}}>
                Acheter
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </main>


</>

  );
};

export default PricingSection;
