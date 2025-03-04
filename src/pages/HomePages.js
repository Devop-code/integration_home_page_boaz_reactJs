import React from "react";
// import "./HomePage.css"; // <-- Vous pouvez importer un fichier CSS si besoin

const HomePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Barre supérieure (Top bar) */}
      <div style={styles.topBar}>
        <div style={styles.topBarContent}>
          <span>Douala, Bonapriso, 39B Rue Toyota</span>
          <span>|</span>
          <span>+237 656 656 565</span>
          <span>|</span>
          <span>info@boaz-study.com</span>
        </div>
      </div>

      {/* Header avec logo et navigation */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          {/* Remplacez l'URL par votre logo réel */}
          <img
            src="https://via.placeholder.com/150x50?text=Boaz+Study+Logo"
            alt="Boaz Study Logo"
            style={styles.logo}
          />
        </div>
        <nav style={styles.nav}>
          <a href="#home" style={styles.navLink}>
            Accueil
          </a>
          <a href="#services" style={styles.navLink}>
            Services
          </a>
          <a href="#connexion" style={styles.navLink}>
            Connexion
          </a>
          <a href="#inscription" style={styles.navLink}>
            Inscription
          </a>
          <button style={styles.bookBtn}>Book Consultation</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Boaz-Study : Votre Partenaire pour une mobilité internationale
            </h1>
            <p style={styles.heroSubtitle}>
              Nous accompagnons les étudiants et professionnels dans leurs
              démarches à l’international.
            </p>
            <div style={styles.heroButtons}>
              <button style={styles.primaryBtn}>Explore More</button>
              <button style={styles.secondaryBtn}>Contact Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Providing the best consultancy" */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Providing the Best Consultancy</h2>
          <p style={styles.sectionText}>
            Chez Boaz-Study, nous mettons tout en œuvre pour faciliter votre
            mobilité internationale. Notre équipe de professionnels vous
            accompagne dans chaque étape.
          </p>
          {/* Exemples d'icônes ou de petits visuels pour illustrer */}
          <div style={styles.featuresGrid}>
            <div style={styles.featureItem}>
              <img
                src="https://via.placeholder.com/80"
                alt="icon"
                style={styles.featureIcon}
              />
              <h3>Expertise</h3>
              <p>
                Des conseillers expérimentés pour vous guider dans vos choix.
              </p>
            </div>
            <div style={styles.featureItem}>
              <img
                src="https://via.placeholder.com/80"
                alt="icon"
                style={styles.featureIcon}
              />
              <h3>Fiabilité</h3>
              <p>
                Un accompagnement personnalisé et transparent à chaque étape.
              </p>
            </div>
            <div style={styles.featureItem}>
              <img
                src="https://via.placeholder.com/80"
                alt="icon"
                style={styles.featureIcon}
              />
              <h3>Gain de temps</h3>
              <p>
                Nous simplifions vos démarches administratives pour vous
                concentrer sur l’essentiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Few reasons to choose us" */}
      <section style={{ ...styles.section, backgroundColor: "#f9f9f9" }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Quelques raisons de nous choisir</h2>
          <div style={styles.reasonsGrid}>
            <div style={styles.reasonCard}>
              <h3>Accompagnement complet</h3>
              <p>
                De la préparation des dossiers à l’installation dans le pays
                d’accueil.
              </p>
            </div>
            <div style={styles.reasonCard}>
              <h3>Réseau international</h3>
              <p>
                Des partenaires dans plusieurs pays pour vous offrir le meilleur
                service.
              </p>
            </div>
            <div style={styles.reasonCard}>
              <h3>Formations dédiées</h3>
              <p>
                Des sessions de formation pour maîtriser les aspects
                réglementaires et culturels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Get the immigration training" */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Get the Immigration Training You Deserve</h2>
          <p style={styles.sectionText}>
            Nous proposons des programmes de formation pour vous aider à
            comprendre les exigences légales, les procédures de visa, et bien
            plus encore.
          </p>
          <button style={styles.primaryBtn}>En savoir plus</button>
        </div>
      </section>

      {/* Section "Countries we are supporting" */}
      <section style={{ ...styles.section, backgroundColor: "#f1f1f1" }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Countries We’re Supporting</h2>
          <p style={styles.sectionText}>
            Découvrez les destinations où Boaz-Study peut vous accompagner :
          </p>
          <div style={styles.countriesGrid}>
            <div style={styles.countryItem}>Canada</div>
            <div style={styles.countryItem}>États-Unis</div>
            <div style={styles.countryItem}>France</div>
            <div style={styles.countryItem}>Allemagne</div>
            <div style={styles.countryItem}>Australie</div>
          </div>
        </div>
      </section>

      {/* Section "Testimonials" */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            What They’re Saying About the Consultancy
          </h2>
          <div style={styles.testimonialGrid}>
            <div style={styles.testimonialCard}>
              <p>
                “Grâce à Boaz-Study, j’ai pu obtenir mon visa étudiant sans
                stress et trouver un logement sur place.”
              </p>
              <strong>- Marie D.</strong>
            </div>
            <div style={styles.testimonialCard}>
              <p>
                “Une équipe réactive et compétente qui m’a aidé dans toutes mes
                démarches.”
              </p>
              <strong>- Ahmed K.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Book your consultation" */}
      <section style={{ ...styles.section, backgroundColor: "#f9f9f9" }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Book Your Consultation</h2>
          <p style={styles.sectionText}>
            Prenez rendez-vous avec nos conseillers pour évaluer vos besoins et
            définir la meilleure stratégie pour votre projet.
          </p>
          <button style={styles.primaryBtn}>Prendre rendez-vous</button>
        </div>
      </section>

      {/* Section "Latest news directly from the blog" */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Latest News Directly from the Blog</h2>
          <div style={styles.blogGrid}>
            <div style={styles.blogPost}>
              <img
                src="https://via.placeholder.com/300x200"
                alt="blog post"
                style={{ width: "100%", borderRadius: 4 }}
              />
              <h3>Nouvelle réglementation pour les visas</h3>
              <p>Découvrez les dernières mises à jour pour étudier à l’étranger.</p>
              <a href="#blog1">Lire la suite</a>
            </div>
            <div style={styles.blogPost}>
              <img
                src="https://via.placeholder.com/300x200"
                alt="blog post"
                style={{ width: "100%", borderRadius: 4 }}
              />
              <h3>Top 5 des universités les plus prisées</h3>
              <p>
                Un tour d’horizon des établissements qui attirent le plus
                d’étudiants internationaux.
              </p>
              <a href="#blog2">Lire la suite</a>
            </div>
            <div style={styles.blogPost}>
              <img
                src="https://via.placeholder.com/300x200"
                alt="blog post"
                style={{ width: "100%", borderRadius: 4 }}
              />
              <h3>Conseils pour réussir son intégration</h3>
              <p>
                Les clés pour une adaptation rapide dans un nouveau pays et
                culture.
              </p>
              <a href="#blog3">Lire la suite</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            <div>
              <img
                src="https://via.placeholder.com/150x50?text=Boaz+Study+Logo"
                alt="Boaz Study Logo"
                style={{ marginBottom: 10 }}
              />
              <p>
                Boaz-Study vous accompagne dans toutes vos démarches de mobilité
                internationale.
              </p>
            </div>
            <div>
              <h3>Liens utiles</h3>
              <ul style={styles.footerLinks}>
                <li>
                  <a href="#accueil">Accueil</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Contact</h3>
              <p>Douala, Bonapriso, 39B Rue Toyota</p>
              <p>+237 656 656 565</p>
              <p>info@boaz-study.com</p>
            </div>
          </div>
          <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />
          <p style={{ textAlign: "center", fontSize: 14 }}>
            © {new Date().getFullYear()} Boaz-Study. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Styles en ligne pour simplifier l’exemple
const styles = {
  topBar: {
    backgroundColor: "#eee",
    padding: "8px 0",
    textAlign: "center",
    fontSize: 14,
  },
  topBarContent: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  logoContainer: {
    flex: "0 0 auto",
  },
  logo: {
    height: 50,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  },
  bookBtn: {
    backgroundColor: "#ffcc00",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: 4,
  },
  heroSection: {
    position: "relative",
    minHeight: "60vh",
    backgroundImage:
      "url('https://via.placeholder.com/1600x900?text=Background+Hero')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  heroOverlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroContent: {
    textAlign: "center",
    maxWidth: 800,
    padding: "0 20px",
  },
  heroTitle: {
    fontSize: "2rem",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    marginBottom: 20,
  },
  heroButtons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  primaryBtn: {
    backgroundColor: "#0066cc",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: 4,
    cursor: "pointer",
    fontWeight: "bold",
  },
  secondaryBtn: {
    backgroundColor: "#ffcc00",
    color: "#333",
    border: "none",
    padding: "12px 24px",
    borderRadius: 4,
    cursor: "pointer",
    fontWeight: "bold",
  },
  section: {
    padding: "60px 20px",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionText: {
    maxWidth: 800,
    margin: "0 auto 40px auto",
    textAlign: "center",
    lineHeight: 1.6,
  },
  featuresGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  featureItem: {
    maxWidth: 250,
    textAlign: "center",
  },
  featureIcon: {
    marginBottom: 10,
  },
  reasonsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
    marginTop: 30,
  },
  reasonCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: 4,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    maxWidth: 250,
    textAlign: "center",
  },
  countriesGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: 30,
  },
  countryItem: {
    backgroundColor: "#fff",
    padding: "10px 20px",
    borderRadius: 4,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  testimonialGrid: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 30,
  },
  testimonialCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    maxWidth: 400,
    textAlign: "center",
    fontStyle: "italic",
  },
  blogGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginTop: 30,
  },
  blogPost: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "40px 20px",
    marginTop: 40,
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
  },
  footerLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
};

export default HomePage;
