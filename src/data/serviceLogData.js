import ServiceDetailPage from "../pages/services/serviceAidelog";
const ServiceDetailData = {
  logementAccompagnement: {
    title: "Aide à la recherche d’un logement adapté à votre profil",
    shortDescription: "Trouvez rapidement le logement idéal, adapté à votre budget et à vos critères, grâce à l’accompagnement complet de Boaz-Study.",
    fullDescription: "La recherche d’un logement à l’étranger peut s’avérer complexe et stressante. Boaz-Study vous propose un accompagnement personnalisé pour dénicher un logement adapté à votre budget et à vos critères de confort, principalement pour les étudiants et jeunes professionnels.",
    advantages: [
      { title: "Soutien complet", description: "De la prospection jusqu'à la finalisation du contrat." },
      { title: "Évitez les pièges", description: "Évitez les pièges et les mauvaises surprises." },
      { title: "Gagnez un temps précieux", description: "Grâce à un accompagnement expert." },
      { title: "Large gamme de logements", description: "Accès à une large gamme de logements adaptés à vos besoins." }
    ],
    process: [
      { title: "Remplir le questionnaire", description: "Remplissez un questionnaire personnalisé détaillant votre budget et vos critères." },
      { title: "Sélection d’offres", description: "Notre algorithme et notre équipe sélectionnent plusieurs offres correspondant à votre profil." },
      { title: "Validation et contractualisation", description: "Choisissez l’offre qui vous convient et bénéficiez d’un accompagnement pour la négociation et la signature du contrat." },
      { title: "Suivi jusqu’à l’installation", description: "Profitez d'un suivi jusqu’à votre installation, incluant la gestion de la caution et l'état des lieux." }
    ],
    pricing: {
      amount: "350 000 FCFA",
      details: [
        "Service d’aide à la recherche d’un logement à partir de 350 000 FCFA, avec différents packs disponibles."
      ]
    },
    testimonials: [
      { name: "Amina", content: "J’ai trouvé mon studio en seulement 2 semaines grâce à Boaz-Study." },
      { name: "Thomas", content: "Le suivi personnalisé m’a permis de m’installer sans stress dans ma nouvelle ville." }
    ],
    cta: { text: "Démarrer ma recherche de logement", url: "#demander-logement" }
  }
  

};

export default ServiceDetailData;