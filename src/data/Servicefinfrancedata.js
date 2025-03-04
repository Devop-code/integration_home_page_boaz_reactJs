// filepath: /c:/Users/HP/integration_home_page_boaz_reactJs/src/data/ServiceDetailData.js
const ServiceDetailData = {
  serviceFinFrance: {
    title: "Service de paiement en France",
    shortDescription: "Réalisez vos paiements en France (frais de scolarité, loyers, etc.) de manière simple et sécurisée.",
    fullDescription: "Que vous ayez à régler des frais de scolarité, un loyer, ou tout autre paiement lié à vos démarches en France, notre service vous permet de transférer des fonds en toute sécurité.",
    benefits: [
      "Frais réduits et transparents.",
      "Suivi en temps réel des transactions.",
      "Accompagnement personnalisé tout au long de la transaction."
    ],
    steps: [
      "Saisie des informations du bénéficiaire et du montant à payer.",
      "Génération du devis incluant frais éventuels et taux de change.",
      "Paiement sécurisé via dépôt bancaire ou virement.",
      "Exécution et confirmation de la transaction."
    ],
    pricing: "Frais de service fixés à 6% du montant versé, traitement en moins de 24h.",
    testimonials: [
      { author: "Julien", message: "J’ai pu régler mes frais de scolarité sans aucune difficulté grâce à ce service." },
      { author: "Marie", message: "La transparence sur les frais m’a permis d’économiser sur mes transactions." }
    ],
    cta: { label: "Effectuer un paiement maintenant", link: "#paiement-france" }
  }
};

export default ServiceDetailData;