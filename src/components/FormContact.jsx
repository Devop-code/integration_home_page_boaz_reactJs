import { useState } from "react";

const ContactForm = () => {
  // Liste des pays avec leurs codes et drapeaux (exemple limité)
  const countries = [
    { name: "France", code: "+33", flag: "🇫🇷" },
    { name: "Belgique", code: "+32", flag: "🇧🇪" },
    { name: "Suisse", code: "+41", flag: "🇨🇭" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
  ];

  // États du formulaire
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Pays par défaut
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // Gérer la sélection du pays
  const handleCountryChange = (event) => {
    const country = countries.find((c) => c.code === event.target.value);
    setSelectedCountry(country);
    setError(""); // Réinitialiser l'erreur à chaque changement de pays
  };

  // Gérer la saisie du téléphone
  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);

    // Vérifier si le code pays est inclus dans le numéro
    if (value.startsWith(selectedCountry.code)) {
      setError("Ne mettez pas le code du pays dans le champ téléphone !");
    } else {
      setError("");
    }
  };

  return (
    <form
      id="contact_form"
      name="contact_form"
      action="includes/sendmail.php"
      method="post"
    >
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <input
              name="form_name"
              className="form-control"
              type="text"
              placeholder="Entrer votre nom"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <input
              name="form_email"
              className="form-control required email"
              type="email"
              placeholder="Entrer votre email"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <input
              name="form_subject"
              className="form-control required"
              type="text"
              placeholder="Entrer votre sujet"
            />
          </div>
        </div>

        {/* Sélection du pays */}
        <div className="col-sm-6">
          <div className="mb-3">
            <select
              className="form-control"
              value={selectedCountry.code}
              onChange={handleCountryChange}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.name} ({country.code})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Champ téléphone */}
      <div className="row">
        <div className="col-sm-12">
          <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", fontSize: "20px" }}>
              {selectedCountry.flag} {selectedCountry.code}
            </span>
            <input
              name="form_phone"
              className="form-control"
              type="text"
              placeholder="Entrer votre téléphone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        </div>
      </div>

      <div className="mb-3">
        <textarea
          name="form_message"
          className="form-control required"
          rows={7}
          placeholder="Entrer le message"
        />
      </div>

      <div className="mb-3">
        <button
          type="submit"
          className="theme-btn btn-style-one"
        >
          <span className="btn-title">Envoyer le message</span>
        </button>
        <button
          type="reset"
          className="theme-btn btn-style-one bg-theme-color5"
          onClick={() => {
            setPhone("");
            setError("");
          }}
        >
          <span className="btn-title">Effacer</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
