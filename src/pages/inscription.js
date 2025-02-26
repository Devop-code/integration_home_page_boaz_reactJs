import React from 'react'
import MainBox from '../components/mainBoxHeaderTop'
import Footer from '../components/Footer'
import Form from '../components/Form'


const Inscription = () => {
  return (
   <>
       <div className="page-wrapper">
        <div className=''></div>
        <Form/>
         <section className="contact-details">
          <div className="container ">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="sec-title">
                  <span className="sub-title">Créer un compte</span>
                  <h2>Veuillez remplir les informations ci-dessous</h2>
                </div>
                {/* Formulaire de création de compte */}
                <form
                  id="signup_form"
                  name="signup_form"
                  className=""
                  action="includes/signup.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="last_name"
                          className="form-control"
                          type="text"
                          placeholder="Nom de l'étudiant"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="first_name"
                          className="form-control"
                          type="text"
                          placeholder="Prénom de l'étudiant"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="birth_date"
                          className="form-control"
                          type="date"
                          placeholder="Date de naissance"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="phone_number"
                          className="form-control"
                          type="text"
                          placeholder="Numéro de téléphone Exple: +237695343284"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <select name="country" className="form-control" required>
                      <option value="">Sélectionnez votre pays</option>
                      <option value="cameroun">Cameroun</option>
                      <option value="senegal">Sénégal</option>
                      <option value="gabon">Gabon</option>
                      <option value="brasil">Brésil</option>
                      <option value="congo">Congo</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <select name="gender" className="form-control" required>
                      <option value="">Sélectionnez votre civilité</option>
                      <option value="mlle">Mlle</option>
                      <option value="mr">Mr</option>
                      <option value="mme">Mme</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <input
                      name="email"
                      className="form-control required email"
                      type="email"
                      placeholder="Adresse email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="password"
                      className="form-control required"
                      type="password"
                      placeholder="Mot de passe"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="confirm_password"
                      className="form-control required"
                      type="password"
                      placeholder="Retaper votre mot de passe"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="form_botcheck"
                      className="form-control"
                      type="hidden"
                      defaultValue=""
                    />
                    <button
                      type="submit"
                      className="theme-btn btn-style-one"
                      data-loading-text="Please wait..."
                    >
                      <span className="btn-title">Créer un compte</span>
                    </button>
                    <button
                      type="reset"
                      className="theme-btn btn-style-one bg-theme-color5"
                    >
                      <span className="btn-title">Réinitialiser</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
        </div>
   </>
  )
}

export default Inscription