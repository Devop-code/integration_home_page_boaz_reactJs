const services = {
    avi: {
      title: "Attestation de Virement Irrévocable (AVI)",
      shortDescription: "Obtenez en 24h votre Attestation de Virement Irrévocable (AVI), document indispensable pour prouver votre capacité financière lors d'un séjour d'études ou de longue durée.",
      description: "L'Attestation de Virement Irrévocable (AVI) est un document officiel attestant de votre capacité financière pour un séjour d'études ou toute autre démarche nécessitant la preuve de ressources. Exigée par de nombreuses ambassades et universités, l'AVI permet de justifier que vous disposez des fonds nécessaires pour couvrir vos dépenses. Avec Boaz-Study, vous bénéficiez d'un traitement rapide et entièrement en ligne, pour obtenir ce document en seulement 24 heures après validation de votre paiement.",
      benefits: [
        "Délai ultra-rapide : Votre AVI est délivrée en 24h après validation de votre paiement.",
        "100% en ligne : Procédure entièrement dématérialisée, vous permettant d'éviter les déplacements et les démarches administratives fastidieuses.",
        "Accompagnement expert : Une équipe experte vérifie minutieusement votre dossier et les pièces justificatives.",
        "Document officiel reconnu : Notre document est conforme aux exigences administratives en vigueur dans la majorité des pays."
      ],
      steps: [
        "Remplir le formulaire : Indiquez vos informations personnelles (nom, prénom, email, téléphone) ainsi que le montant à justifier et la durée de votre séjour.",
        "Génération de la pro-forma et paiement : Une pro-forma vous est automatiquement envoyée par email. Vous effectuez ensuite le paiement par dépôt bancaire ou virement.",
        "Validation et traitement : Dès réception et vérification de votre preuve de paiement, notre équipe valide votre dossier et génère l'AVI.",
        "Réception du document : L'AVI vous est envoyée par email et est disponible dans votre espace client pour téléchargement à tout moment."
      ],
      documents: [
        "Une copie de votre passeport (face et verso)",
        "Une preuve d'admission ou d'inscription dans l'établissement concerné",
        "Un justificatif de domicile récent (moins de 3 mois)"
      ],
      pricing: "235 000 FCFA - Traitement en 24h après réception du paiement validé. 350 000 FCFA si seulement 60% du paiement a été versé.",
      testimonials: [
        { author: "Lucas", message: "Grâce à Boaz-Study, j'ai obtenu mon AVI en un temps record. J'ai pu finaliser ma demande de visa sans aucun stress !" },
        { author: "Sara", message: "Le processus était simple et le suivi très réactif. Je recommande vivement ce service." }
      ],
      faq: [
        { question: "Que faire si mon paiement est refusé ?", answer: "Vous recevrez une notification et des instructions pour effectuer une nouvelle tentative ou contacter notre support." },
        { question: "L'AVI est-elle reconnue par toutes les ambassades ?", answer: "Notre document est conforme aux exigences administratives en vigueur dans la majorité des pays. Pour certains cas particuliers, nous vous conseillons de vérifier avec votre ambassade." },
        { question: "Peut-on modifier le montant après avoir demandé l'AVI ?", answer: "Une fois la demande soumise, le montant ne peut être modifié. En cas d'erreur, contactez rapidement notre support pour trouver une solution." }
      ],
      cta: { label: "Obtenir mon AVI dès maintenant", link: "#demander-avi" }
    },
     paiement_France : {
      title: "Service de paiement en France",
      shortDescription: "Réalisez vos paiements en France (frais de scolarité, loyers, etc.) de manière simple et sécurisée, sans avoir à multiplier les intermédiaires.",
      description: "Que vous ayez à régler des frais de scolarité, un loyer, ou tout autre paiement lié à vos démarches en France, notre service vous permet de transférer des fonds en toute sécurité et sans intermédiaires complexes. Boaz-Study s’occupe de l’intégralité du processus, afin de vous offrir une expérience fluide et transparente.",
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
        { author: "Julien", message: "J’ai pu régler mes frais de scolarité sans aucune difficulté grâce à ce service. Le suivi était clair et je suis resté informé à chaque étape." },
        { author: "Marie", message: "La transparence sur les frais et le taux de change m’a permis d’économiser sur mes transactions. Un service vraiment efficace !" }
      ],
      cta: { label: "Effectuer un paiement maintenant", link: "#paiement-france" }
    },
    logementAccompagnement: {
        title: "Aide à la recherche d’un logement adapté à votre profil",
        shortDescription: "Trouvez rapidement le logement idéal, adapté à votre budget et à vos critères, grâce à l’accompagnement complet de Boaz-Study.",
        description: "La recherche d’un logement à l’étranger peut s’avérer complexe et stressante. Boaz-Study vous propose un accompagnement personnalisé pour dénicher un logement adapté à votre budget et à vos critères de confort, principalement pour les étudiants et jeunes professionnels.",
        benefits: [
            "Soutien complet, de la prospection jusqu'à la finalisation du contrat.",
            "Évitez les pièges et les mauvaises surprises.",
            "Gagnez un temps précieux grâce à un accompagnement expert.",
            "Accès à une large gamme de logements adaptés à vos besoins."
        ],
        steps: [
            "Remplissez un questionnaire personnalisé détaillant votre budget et vos critères.",
            "Notre algorithme et notre équipe sélectionnent plusieurs offres correspondant à votre profil.",
            "Choisissez l’offre qui vous convient et bénéficiez d’un accompagnement pour la négociation et la signature du contrat.",
            "Profitez d'un suivi jusqu’à votre installation, incluant la gestion de la caution et l'état des lieux."
        ],
        pricing: "Service d’aide à la recherche d’un logement à partir de 350 000 FCFA, avec différents packs disponibles.",
        testimonials: [
            { author: "Amina", message: "J’ai trouvé mon studio en seulement 2 semaines grâce à Boaz-Study." },
            { author: "Thomas", message: "Le suivi personnalisé m’a permis de m’installer sans stress dans ma nouvelle ville." }
        ],
        cta: { label: "Démarrer ma recherche de logement", link: "#demander-logement" }
    },
    aideDossierAdministratif : {
        title: "Aide aux démarches administratives / Suivi personnalisé",
        shortDescription: "Ne perdez plus de temps dans la paperasse ! Boaz-Study vous accompagne pour vos inscriptions, demandes de visa, formalités bancaires et toutes vos démarches essentielles.",
        description: "Les démarches administratives pour partir étudier ou s’installer à l’étranger peuvent être longues et complexes. Boaz-Study vous offre une solution globale pour gérer votre dossier : de la demande de visa à l’inscription universitaire, en passant par l’ouverture de compte bancaire.",
        benefits: [
            "Évitez les retards et les erreurs qui pourraient compromettre votre projet.",
            "Un accompagnement professionnel pour sécuriser votre dossier.",
            "Vérification des documents requis pour chaque étape.",
            "Suivi personnalisé et assistance à chaque phase de votre démarche."
        ],
        steps: [
            "Étape 1 : Audit de votre dossier - Analysez ensemble votre situation et vos besoins spécifiques.",
            "Étape 2 : Calendrier personnalisé - Établissez un calendrier d’actions avec des relances automatiques.",
            "Étape 3 : Suivi par un référent dédié - Un conseiller vous guide pas à pas et reste disponible pour toute question.",
            "Étape 4 : Validation finale - Archivage de votre dossier et transmission d’une attestation de complétion."
        ],
        démarchesCouvertes: [
            "Demande de visa étudiant avec vérification des documents requis.",
            "Inscription dans une université (ou école) et constitution du dossier d’admission.",
            "Ouverture d’un compte bancaire et obtention d’une assurance santé.",
            "Assistance pour la traduction et la légalisation des documents, si nécessaire."
        ],
        outilsSuivi: "Notre plateforme en ligne permet de visualiser en temps réel l’avancement de chaque étape et de recevoir des notifications par email et SMS.",
        résultatsAttendus: "Augmentez vos chances d’obtenir votre visa et d’être admis dans votre établissement dans les délais impartis, avec un taux de réussite supérieur à 95 % pour les dossiers traités.",
        faq: [
            { question: "Quel est le délai moyen pour finaliser un dossier ?", answer: "Généralement, entre 3 et 6 semaines, en fonction des délais administratifs des institutions." },
            { question: "Que se passe-t-il si mon dossier est refusé ?", answer: "Nous analysons les motifs du refus et vous proposons des solutions pour constituer un nouveau dossier." }
        ],
        cta: { label: "Démarrer mon accompagnement administratif", link: "#demander-accompagnement" }
    },
    orientationAccompagnement : {
        title: "Orientation et Accompagnement (incluant l’Étude de Profil)",
        shortDescription: "Bénéficiez d’un accompagnement personnalisé pour construire votre projet d’études, de l’analyse de votre profil à l’intégration.",
        description: "Choisir la bonne filière et le bon établissement est crucial pour la réussite de votre projet professionnel. Notre service d’orientation et d’accompagnement, incluant une étude de profil réalisée en 72h, vous offre un suivi sur mesure.",
        benefits: [
            "Diagnostic personnalisé de votre profil en 72h.",
            "Sélection d’écoles et de formations adaptées à vos compétences.",
            "Assistance à la constitution de votre dossier d’inscription.",
            "Suivi post-admission pour faciliter votre intégration."
        ],
        steps: [
            "Étape 1 : Entretien initial - Bilan de compétences et définition de vos objectifs professionnels.",
            "Étape 2 : Présentation des options - Sélection d’écoles et de formations partenaires.",
            "Étape 3 : Assistance à la constitution du dossier - Préparation de votre dossier d’inscription et préparation aux entretiens.",
            "Étape 4 : Suivi post-admission - Accompagnement pour votre installation et intégration."
        ],
        etudeDeProfil: {
            description: "Réalisée en 72h maximum, cette étude vous permet de bénéficier d’un diagnostic personnalisé de votre profil.",
            pricing: {
                engagement: "35 000 FCFA avec engagement.",
                sansEngagement: "50 000 FCFA sans engagement."
            }
        },
        exemplesReussis: "Découvrez comment Jean a intégré une école de commerce de renom et poursuit aujourd’hui un Master en Management international. Des témoignages détaillés sont disponibles sur notre blog.",
        partenariats: "Nous collaborons avec plus de 50 établissements reconnus dans le monde entier, vous offrant accès à des guides, des webinars et des articles spécialisés.",
        faq: [
            { question: "Combien de temps dure l’accompagnement ?", answer: "Notre accompagnement s’étale généralement de 2 à 6 mois, selon vos besoins." },
            { question: "Quels sont les critères pour être admis dans une école partenaire ?", answer: "Chaque établissement a ses propres critères, que nous vous détaillons lors de notre entretien personnalisé." }
        ],
        cta: { label: "Discuter avec un conseiller d’orientation", link: "#demander-orientation" }
    },
    financement : {
        title: "Financement",
        shortDescription: "Accédez à des solutions de financement adaptées à vos études ou à votre projet : facilités de paiement, bourses, prêts étudiants…",
        description: "Le financement de vos études ou de votre projet d’expatriation peut représenter un défi de taille. Boaz-Study vous propose un service complet pour identifier, simuler et obtenir le financement le plus adapté.",
        benefits: [
            "Prêts étudiants à taux préférentiels en partenariat avec des banques.",
            "Orientation vers des bourses et subventions d'organismes publics et privés.",
            "Utilisation de Boaz-Wallet pour gérer votre budget avec des paiements échelonnés."
        ],
        steps: [
            "Étape 1 : Évaluation de vos besoins - Remplissez un formulaire détaillé sur le montant requis et vos garanties.",
            "Étape 2 : Identification des solutions - Analyse de votre dossier pour proposer plusieurs options de financement.",
            "Étape 3 : Constitution du dossier - Aide à rassembler les pièces justificatives et monter votre dossier.",
            "Étape 4 : Suivi et validation - Suivez l’évolution de votre dossier via notre espace client."
        ],
        typesDeFinancement: [
            "Prêts étudiants avec des taux préférentiels.",
            "Bourses et subventions des organismes publics et privés.",
            "Financement interne via Boaz-Wallet."
        ],
        simulations: "Utilisez notre simulateur en ligne pour estimer vos mensualités en fonction du montant et de la durée du prêt. Des témoignages d’étudiants ayant obtenu leur financement sont également disponibles.",
        fraisEtConditions: [
            "Frais de dossier éventuels entre 30 000 et 50 000 FCFA.",
            "Modalités de remboursement (taux fixe ou variable, options de différé).",
            "Notre offre débute à 1 500 000 FCFA (environ 615€) pour un financement type."
        ],
        faq: [
            { question: "Peut-on obtenir un prêt si l’on est étranger ?", answer: "Oui, sous certaines conditions, notamment en présentant un garant ou des revenus réguliers." },
            { question: "Les taux d’intérêt sont-ils fixes ou variables ?", answer: "Cela dépend des offres des banques partenaires, que nous vous détaillons lors de l’entretien." }
        ],
        cta: [
            { label: "Faire une simulation de financement", link: "#simulation-financement" },
            { label: "Prendre rendez-vous avec un conseiller financier", link: "#rendez-vous-financier" }
        ]
    }
  };
  