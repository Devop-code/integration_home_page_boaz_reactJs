import React from "react";
import "./PricingSection.css"; // Import CSS for hover effects

const exchangeRate = 655.48; // Taux de conversion FCFA -> Euro (ajuste si besoin)

const convertToEuro = (fcfa) => (fcfa / exchangeRate).toFixed(2);

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
    <main style={{ width: "100%" }}>
      <div className="container" style={{ marginTop: "0px", width: "100%" }}>
        <h5 className="text-center pricing-table-subtitle">NOS PRIX</h5>
        <h1 className="text-center pricing-table-title">Boaz-Study</h1>
        <div className="row d-flex flex">

          {/* Plan AVI */}
          <div className="col-md-3" style={{ borderRadius: "10px" }}>
            <div className="card pricing-card pricing-plan-basic border-0" style={{ width: "17rem" }}>
              <div className="card-body">
              <i  style={{ color: "#015cb5" }}>
                  <img src={`${process.env.PUBLIC_URL}/site_kit/images/releve-bancaire.png`} style={{width:'25%'}}/>
                </i>
                <p className="pricing-plan-title">AVI</p>
                <h3 className="pricing-plan-cost" style={{ fontSize: "30px" }}>
                  {convertToEuro(4840000)} €</h3>
                  <small className="d-block text-muted">{`(${new Intl.NumberFormat().format(4840000)} FCFA)`}</small>
                <ul className="pricing-plan-features">
                  <li>Délivré en 24 H</li>
                  <li>615€ * 12</li>
                  <li>+ 2.5% frais de transfert (CMR - FRANCE)</li>
                  <li>0€ virement en France</li>
                </ul>
                <a href="http://www.boaz-study.com/register" className="btn pricing-plan-purchase-btn rounded-pill" style={{ backgroundColor: "#015cb5" }}>
                  Acheter
                </a>
              </div>
            </div>
          </div>

          {/* Plan Frais AVI */}
          <div className="col-md-3" style={{ borderRadius: "10px" }}>
            <div className="card pricing-card pricing-card-highlighted pricing-plan-pro border-0" style={{ width: "17rem" }}>
              <div className="card-body">
              <i  style={{ color: "#015cb5" }}>
                  <img src={`${process.env.PUBLIC_URL}/site_kit/images/la-finance.png`} style={{width:'25%'}}/>
                </i>
                <p className="pricing-plan-title">Frais AVI</p>
                <h3 className="pricing-plan-cost" style={{ fontSize: "30px" }}>
                  {convertToEuro(230000)} - {convertToEuro(350000)} € 
                </h3>
                <small className="d-block text-muted">{`(230,000 - 350,000 FCFA)`}</small>
                <ul className="pricing-plan-features">
                  <li>230,000 FCFA (Classic)</li>
                  <li>350,000 FCFA (financement via banque)</li>
                </ul>
                <a href="http://www.boaz-study.com/register" className="btn pricing-plan-purchase-btn rounded-pill" style={{ backgroundColor: "#fa8714" }}>
                  Acheter
                </a>
              </div>
            </div>
          </div>

          {/* Plan Attestation de Logement */}
          <div className="col-md-3" style={{ borderRadius: "10px" }}>
            <div className="card pricing-card pricing-plan-enterprise border-0" style={{ width: "17rem" }}>
              <div className="card-body">
              <i  style={{ color: "#015cb5" }}>
                  <img src={`${process.env.PUBLIC_URL}/site_kit/images/attest-loge.png.jpg`} style={{width:'25%'}}/>
                </i>
                <p className="pricing-plan-title">Attestation de Logement</p>
                <h3 className="pricing-plan-cost" style={{ fontSize: "30px" }}>
                  {convertToEuro(125000)} € </h3>
                <small className="d-block text-muted">{`(125000 FCFA)`}</small>
                <ul className="pricing-plan-features">
                  <li>Garantie de logement avant votre arrivée</li>
                </ul>
                <a href="http://www.boaz-study.com/register" className="btn pricing-plan-purchase-btn rounded-pill" style={{ backgroundColor: "#015cb5" }}>
                  Acheter
                </a>
              </div>
            </div>
          </div>

          {/* Plan Assurance Voyage */}
          <div className="col-md-3" style={{ borderRadius: "10px" }}>
            <div className="card pricing-card pricing-plan-basic border-0" style={{ width: "17rem" }}>
              <div className="card-body">
              <i  style={{ color: "#015cb5" }}>
                  <img src={`${process.env.PUBLIC_URL}/site_kit/images/assurance-voyage .png`} style={{width:'25%'}}/>
                </i>
                <p className="pricing-plan-title">Assurance Voyage</p>
                <h3 className="pricing-plan-cost" style={{ fontSize: "30px" }}>
                  {convertToEuro(50000)} €</h3>
                <small className="d-block text-muted">{`(50,000 FCFA)`}</small>
                <ul className="pricing-plan-features">
                  <li>ACS ASSURANCE</li>
                </ul>
                <a href="http://www.boaz-study.com/register" className="btn pricing-plan-purchase-btn rounded-pill" style={{ backgroundColor: "#fa8714" }}>
                  Acheter
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ borderRadius: "10px" }}>
            <div className="card pricing-card pricing-plan-basic border-0" style={{ width: "17rem" }}>
              <div className="card-body">
              <i  style={{ color: "#015cb5" }}>
                  <img src={`${process.env.PUBLIC_URL}/site_kit/images/education.png`} style={{width:'25%'}}/>
                </i>
                <p className="pricing-plan-title">Assistance Admission Écoles</p>
                <h3 className="pricing-plan-cost" style={{ fontSize: "30px" }}>
                  {convertToEuro(350000)} €</h3>
                <small className="d-block text-muted">{`( 350000 FCFA. )`}</small>
                <ul className="pricing-plan-features">
                  <li> service d’Assistance Admission Écoles</li>
                </ul>
                <a href="http://www.boaz-study.com/register" className="btn pricing-plan-purchase-btn rounded-pill" style={{ backgroundColor: "#015cb5" }}>
                  Acheter
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ borderRadius: "10px" }}>
            <div className="card pricing-card pricing-plan-basic border-0" style={{ width: "17rem" }}>
              <div className="card-body">
              <i  style={{ color: "#015cb5" }}>
                  <img src={`${process.env.PUBLIC_URL}/site_kit/images/aide-sociale.png`} style={{width:'25%'}}/>
                </i>
                <p className="pricing-plan-title">Prise en charge complète</p>
                <h3 className="pricing-plan-cost" style={{ fontSize: "30px" }}>
                  {convertToEuro( 3500000 )} €</h3>
                <small className="d-block text-muted">{`( 3500000  FCFA)`}</small>
                <ul className="pricing-plan-features">
                  <li>Profitez d’un accompagnement global et clé en main</li>
                  <li>Frais de dossier éventuels entre 30000 et 50000 FCFA.</li>
                </ul>
                <a href="http://www.boaz-study.com/register" className="btn pricing-plan-purchase-btn rounded-pill" style={{ backgroundColor: "#fa8714" }}>
                  Acheter
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ borderRadius: "10px" }}>
            <div className="card pricing-card pricing-plan-basic border-0" style={{ width: "17rem" }}>
              <div className="card-body">
                <i  style={{ color: "#015cb5" }}>
                  <img src={`${process.env.PUBLIC_URL}/site_kit/images/pret.png`} style={{width:'25%'}}/>
                </i>

                <p className="pricing-plan-title">Service de financement</p>
                <h3 className="pricing-plan-cost" style={{ fontSize: "30px" }}>
                  {convertToEuro( 1500000 )} €</h3>
                <small className="d-block text-muted">{`(  1500000 FCFA. )`}</small>
                <ul className="pricing-plan-features">
                  <li> Accédez à des solutions de financement adaptées à vos études ou à votre projet</li>
                  
                  
                </ul>
                <a href="http://www.boaz-study.com/register" className="btn pricing-plan-purchase-btn rounded-pill" style={{ backgroundColor: "#015cb5" }}>
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
