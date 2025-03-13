const detailsServicesData = [
    {
      id: 1,
      title: "Délivrance de l’attestation de virement irrévocable (AVI)",
      shortDescription: "Obtenez en 24h votre Attestation de Virement Irrévocable (AVI), document indispensable pour prouver votre capacité financière lors d’un séjour d’études ou de longue durée.",
      details: {
        description: "L’AVI est un document officiel attestant de votre capacité financière pour un séjour d’études ou toute autre démarche nécessitant la preuve de ressources...",
        steps: [
          "Remplir le formulaire",
          "Génération de la pro-forma et paiement",
          "Validation et traitement",
          "Réception du document"
        ],
        requiredDocuments: [
          "Copie du passeport",
          "Preuve d’admission ou d’inscription",
          "Justificatif de domicile"
        ],
        pricing: [
          { option: "Dossier complet", price: "235000 FCFA" },
          { option: "Paiement partiel (60%)", price: "350000 FCFA" }
        ],
        faq: [
          "Que faire si mon paiement est refusé ?",
          "L’AVI est-elle reconnue par toutes les ambassades ?",
          "Peut-on modifier le montant après avoir demandé l’AVI ?"
        ],
        testimonials: [
          { name: "Lucas", feedback: "J’ai obtenu mon AVI en un temps record." },
          { name: "Sara", feedback: "Le processus était simple et rapide." }
        ],
        cta: "Obtenir mon AVI dès maintenant"
      }
    },
    {
      id: 2,
      title: "Aide à la recherche d’un logement adapté",
      shortDescription: "Trouvez rapidement le logement idéal, adapté à votre budget et à vos critères, grâce à l’accompagnement complet de Boaz-Study, de la recherche à l’installation.",
      details: {
        description: "La recherche d’un logement à l’étranger peut s’avérer complexe...",
        steps: [
          "Remplir un questionnaire personnalisé",
          "Sélection d’offres adaptées",
          "Validation et contractualisation",
          "Suivi jusqu’à l’installation"
        ],
        housingOptions: [
          "Résidences étudiantes",
          "Colocations",
          "Studios ou appartements individuels",
          "Logements chez l’habitant"
        ],
        pricing: "Service à partir de 350000 FCFA",
        testimonials: [
          { name: "Amina", feedback: "J’ai trouvé mon studio en seulement 2 semaines." },
          { name: "Thomas", feedback: "Le suivi personnalisé a été excellent." }
        ],
        cta: "Démarrer ma recherche de logement"
      }
    },
    {
      id: 3,
      title: "Service de paiement en France",
      shortDescription: "Réalisez vos paiements en France (frais de scolarité, loyers, etc.) de manière simple et sécurisée, sans intermédiaires complexes.",
      details: {
        description: "Que vous ayez à régler des frais de scolarité, un loyer, ou tout autre paiement en France...",
        steps: [
          "Saisie des informations",
          "Génération du devis",
          "Paiement sécurisé",
          "Exécution et confirmation"
        ],
        fees: "Frais de 6% du montant versé, traitement en 24h",
        faq: [
          "Quelles devises sont acceptées ?",
          "Peut-on annuler un paiement ?",
          "Que faire en cas d’erreur sur le montant ?"
        ],
        cta: "Effectuer un paiement maintenant"
      }
    },
    {
      id: 4,
      title: "Aide aux démarches administratives / Suivi personnalisé",
      shortDescription: "Ne perdez plus de temps dans la paperasse ! Boaz-Study vous accompagne pour vos inscriptions, demandes de visa, formalités bancaires et toutes vos démarches essentielles.",
      details: {
        description: "Les démarches administratives pour partir étudier ou s’installer à l’étranger peuvent être longues et complexes...",
        steps: [
          "Audit de votre dossier",
          "Calendrier personnalisé",
          "Suivi par un référent dédié",
          "Validation finale"
        ],
        pricing: "Sur devis selon la complexité du dossier",
        faq: [
          "Quel est le délai moyen pour finaliser un dossier ?",
          "Que se passe-t-il si mon dossier est refusé ?"
        ],
        cta: "Démarrer mon accompagnement administratif"
      }
    },
    {
      id: 5,
      title: "Orientation et Accompagnement (incluant l’Étude de Profil)",
      shortDescription: "Bénéficiez d’un accompagnement personnalisé pour construire votre projet d’études et choisir la filière qui vous correspond.",
      details: {
        description: "Choisir la bonne filière et le bon établissement est crucial pour la réussite de votre projet professionnel...",
        steps: [
          "Entretien initial",
          "Présentation des options",
          "Assistance à la constitution du dossier",
          "Suivi post-admission"
        ],
        pricing: [
          { option: "Avec engagement", price: "35000 FCFA" },
          { option: "Sans engagement", price: "50000 FCFA" }
        ],
        cta: "Discuter avec un conseiller d’orientation"
      }
    },
    {
        id: 6,
        title: "Assistance Admission Écoles",
        shortDescription: "Optimisez vos chances d’admission grâce à notre accompagnement expert pour constituer un dossier d’admission complet et conforme aux exigences des établissements.",
        details: {
          description: "Notre service d’Assistance Admission Écoles vous accompagne dans la préparation et la soumission de votre dossier d’inscription...",
          pricing: "350000 FCFA",
          steps: [
            "Analyse de votre dossier et identification des points d’amélioration",
            "Aide à la rédaction de vos lettres de motivation et CV",
            "Vérification de la complétude et mise en forme du dossier"
          ],
          cta: "Optimiser mon dossier d’admission"
        }
      },
      {
        id: 7,
        title: "Assurance Voyage",
        shortDescription: "Voyagez en toute sérénité grâce à notre assurance voyage, qui vous offre une protection complète contre les annulations et tous les imprévus pendant votre séjour à l’étranger.",
        details: {
          description: "Que ce soit pour un séjour d’études, un stage ou un voyage d’affaires, une assurance voyage est indispensable pour couvrir vos frais médicaux et autres imprévus...",
          pricing: "À partir de 55000 FCFA pour 3 mois",
          steps: [
            "Souscription en ligne rapide et simple",
            "Couverture adaptée à vos besoins spécifiques",
            "Assistance 24/7 en cas d’urgence à l’étranger"
          ],
          cta: "Souscrire à mon assurance voyage"
        }
      },
      {
        id: 8,
        title: "Attestation Logement",
        shortDescription: "Renforcez votre dossier de demande de visa avec notre attestation logement officielle, garantissant la fiabilité et la sécurité de votre hébergement.",
        details: {
          description: "L’attestation logement certifie que vous disposez d’un logement sécurisé pendant votre séjour à l’étranger, un élément souvent exigé dans les dossiers de demande de visa...",
          pricing: "125000 FCFA",
          steps: [
            "Remplir le formulaire en précisant l’adresse et la nature du logement",
            "Fournir les justificatifs nécessaires (contrat de location, attestation de propriétaire, etc.)",
            "Recevoir votre attestation sous quelques heures après validation"
          ],
          cta: "Obtenir mon attestation logement"
        }
      },
      {
        id: 9,
        title: "Prise en charge complète",
        shortDescription: "Profitez d’un accompagnement global et clé en main, couvrant toutes vos démarches avant et après votre départ, avec suivi visa inclus.",
        details: {
          description: "Notre offre premium regroupe tous nos services pour un parcours sans encombre.",
          pricing: "3500000 FCFA (incluant le suivi VISA)",
          includedServices: [
            "Aide aux démarches administratives",
            "Assistance admission écoles et orientation",
            "Service de paiement en France et financement",
            "Assurance voyage et attestation logement"
          ],
          cta: "Bénéficier de la prise en charge complète"
        }
      }
    
  ];
  
  export default detailsServicesData;
  