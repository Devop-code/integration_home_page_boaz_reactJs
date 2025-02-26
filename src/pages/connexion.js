import React from 'react'
import MainBox from '../components/mainBoxHeaderTop'
import Footer from '../components/Footer'
import Form from '../components/Form'
const Connexion = () => {
  return (
    <div>
      <Form/>
      
      <div className="page-wrapper">
        <div className=''></div>
        <section className="contact-details">
          <div className="container ">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="sec-title">
                  <span className="sub-title">Se connecter</span>
                  <h2>Veuillez remplir les informations ci-dessous</h2>
                </div>
                {/* Formulaire de connexion */}
                <form
                  id="signup_form"
                  name="signup_form"
                  className=""
                  action="includes/signup.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          name="email"
                          className="form-control"
                          type="email"
                          placeholder="Adresse e-mail"
                          required
                        /><br/>
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          name="password"
                          className="form-control"
                          type="password"
                          placeholder="Mot de passe"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="remember"
                          className="form-check-input"
                          type="checkbox"
                          placeholder="Se souvenir de moi"
                        />
                        <label className="form-check-label" for="remember">
                          Se souvenir de moi
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <a href="/inscription" className='theme-btn btn-style-one'>Créer un compte</a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <button type="submit" className="theme-btn btn-style-one bg-theme-color5">
                          Se connecter
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Connexion