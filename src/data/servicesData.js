// filepath: /c:/Users/HP/integration_home_page_boaz_reactJs/src/data/servicesData.js
const servicesData = [
  {
    id: 1,
    title: "Attestation Virement irrevocable",
    icon: "fa-regular fa-file-certificate",
    image: `${process.env.PUBLIC_URL}/site_kit/images/services/avi.jpg`,
    description: "Obtenez en 24h votre Attestation de Virement Irrévocable (AVI), document indispensable pour prouver votre capacité financière lors d’un séjour d’études ou de longue durée. .",
    readMoreLink: "/services/avi"
  },
  {
    id: 2,
    title: "logement",
    icon: "fa-regular fa-house",
    image: `${process.env.PUBLIC_URL}/site_kit/images/services/logement.jpg`,
    description: "Trouvez rapidement le logement idéal, adapté à votre budget et à vos critères, grâce à l’accompagnement complet de Boaz-Study, de la recherche à l’installation. ",
    readMoreLink: "/services/aide-logement"
  },
  {
    id: 3,
    title: "service paiement",
    icon: "fa-regular fa-credit-card",
    image: `${process.env.PUBLIC_URL}/site_kit/images/services/aide-finance-france.jpg`,
    description: "Réalisez vos paiements en France (frais de scolarité, loyers, etc.) de manière simple et sécurisée, sans avoir à multiplier les intermédiaires. .",
    readMoreLink: "/services/financement-france"
  },
  {
    id: 4,
    title: "demarche administrative",
    icon: "fas fa-file-alt",
    image: `${process.env.PUBLIC_URL}/site_kit/images/services/demarche.png`,   
    description: "Ne perdez plus de temps dans la paperasse ! Boaz-Study vous accompagne pour vos inscriptions, demandes de visa, ",
    readMoreLink: "/services/aide-administrative"
  },
  {
    id: 5,
    title: "orientation",
    icon: "fas fa-compass",
    image: `${process.env.PUBLIC_URL}/site_kit/images/services/aide.jpg`,
    description: "Bénéficiez d’un accompagnement personnalisé pour construire votre projet d’études, de l’analyse de votre profil à l’intégration,",
    readMoreLink: "/services/orientation"
  },
  {
    id: 6,
    title: "financement",
    icon: "fa-regular fa-sack-dollar",
    image: `${process.env.PUBLIC_URL}/site_kit/images/services/finance.jpg`,
    description: "Accédez à des solutions de financement adaptées à vos études ou à votre projet : facilités de paiement, bourses, prêts étudiants…",
    readMoreLink: "/services/financement"
  },
  {
    id:7,
    title:"Prise en charge complet",
    icon:"fa-regular fa-sack-dollar",
    image: `${process.env.PUBLIC_URL}/site_kit/images/services/service.png`,
    description:'Profitez d’un accompagnement global et clé en main, couvrant toutes vos démarches avant et après votre départ, avec suivi visa inclus, pour un parcours sans encombre',
    readMoreLink:'/services/complet'
  },
  {
    id:8,
    title:"Assistance Admission Écoles",
    icon:"fa-regular fa-sack-dollar",
    image: `${process.env.PUBLIC_URL}/site_kit/images/services/ecole.png`,
    description:'Optimisez vos chances d’admission grâce à notre accompagnement expert pour constituer un dossier d’admission complet et conforme aux exigences des établissements.',
    readMoreLink:'/services/ecole',
  },
  {
    id:8,
    title:" Assurance Voyage ",
    icon:"fa-regular fa-sack-dollar",
    image: `${process.env.PUBLIC_URL}/site_kit/images/services/assurance1.png`,
    description:'Voyagez en toute sérénité grâce à notre assurance voyage, qui vous offre une     protection complète contre les annulations et tous les imprévus pendant votre séjour à l’étranger. ',
    readMoreLink:'/services/assurance',
  }
];

export default servicesData;