# Bowing the Network — le projet en une page

**Jérôme Li-Thiao-Té (J3ZZ)** · violoniste improvisateur, ingénieur · La Réunion · projet porté seul — je mène la recherche sur mon propre violon, que j'apporte.
**Axe :** Interactivité, immersion collective et systèmes distribués

## L'idée
Construire **un nouveau violon augmenté**, mon propre instrument, qui **garde la mémoire de ce qu'il joue**. J'improvise **en me déplaçant dans la salle** : chaque phrase reste là où je l'ai jouée, comme une **trace sonore** qui s'estompe lentement. Quand j'y reviens, ou que je rejoue un geste semblable, elle **se réveille et se transforme**. Les phrases se superposent comme les écritures d'un palimpseste.

## Pourquoi
À terme, ce violon augmenté me servira à **composer des pièces audiovisuelles** ; la résidence en pose les bases, sans obligation de création. L'improvisation ne laisse rien derrière elle. Je veux que l'espace devienne une mémoire que l'on parcourt en jouant — d'abord pour l'interprète, puis pour le public qui traverse les traces.

## Comment
- **Ce sont le corps et le jeu qui écrivent l'espace**, sans manette ni écran.
  - *En se déplaçant (cœur du projet) :* un LiDAR suit les déplacements dans toute la salle (un seul interprète : pas de triangulation) ; la trace naît là où l'on joue.
  - *Le jeu affine le placement :* point d'archet, corde, dynamique ; un curseur dose corps et jeu.
  - *Point de départ, immobile :* seul le jeu place les traces.
- **Configuration minimale :** 1 LiDAR, 1 nœud Puara sur l'archet, 3 micros — DPA 4099 en col de cygne, piézo Fishman dans le chevalet, AKG C411 de contact (liaison sans fil à 3 canaux à explorer, câble en secours), 1 ordinateur, les haut-parleurs de la SAT. **Extensions** si le temps le permet : une caméra de profondeur **de côté** pour les gestes fins, une **au-dessus** pour vérifier la position ; nœud sur la volute ; image.
- **Mémoire et spatialisation :** ossia score gère la population de traces (dépôt, durée de vie, réveil) ; SpatGRIS les place dans l'espace.

## Ce qui existe déjà, ce qui est nouveau
Des travaux pilotent la spatialisation par le geste d'un instrumentiste (IDMIL, McGill, 2007) ou augmentent l'archet (IRCAM, MIT, MetaBow 2025) : ils **déplacent ou transforment le son présent**. Ici, le son joué est **conservé dans l'espace**, **retrouvé en y revenant** ou **réveillé par un geste semblable** (« proximité de jeu »).

## Question centrale
**Que devient le jeu d'un violoniste quand l'espace qu'il parcourt se souvient de lui ?** La marche enrichit-elle le jeu ou le dilue-t-elle ? Faut-il voir ses traces (image au sol, même géométrie que le son) pour jouer avec elles ? Une réponse négative serait aussi un résultat, documenté.

## Déroulé (2 mois sur place, un seul voyage)
| Étape | Où | Priorité |
|---|---|---|
| Préparation et échelle immobile au casque | À distance | — |
| **Exploratoire** (~5 sem., accès intermittent) : point de départ immobile (Studio de son), puis petite zone ; calibration du suivi du corps ; point d'étape avec l'équipe Innovation | SAT | 1 — 2 |
| **Intensive** (3 sem. à temps plein) : **le jeu en déplacement dans toute la salle** (Espace de prototypage) ; sons composés enfouis si le temps le permet | SAT | **cœur** — option |
| Partage final avec atelier ; publication libre | SAT, puis à distance | — |

## Où en est le projet, et ce que je mets en place
- **Déjà réalisé :** une maquette en ligne (navigateur, micro seul ; voir `maquette/`) : dépôt, effacement et réveil des traces par un geste musical semblable. Elle ne montre pas encore le geste de l'archet ni le corps en mouvement.

| Limite actuelle | Ce que je mets en place |
|---|---|
| Projet porté seul | Recherche de partenaires au Québec **avant** la résidence (artiste du mouvement, musicien·nes, réseaux de la SAT) et **pendant** (équipes de la SAT ; avec son aide, IDMIL à McGill, mentionné comme collaboration potentielle avec l'accord de son directeur, le professeur Marcelo M. Wanderley, et GRIS à l'Université de Montréal) ; collaborations rémunérées sur la bourse |
| Jamais programmé de microcontrôleur ESP32 ni de centrale inertielle ; jamais utilisé les outils de la SAT | Auto-formation en amont sur leurs documentations libres, puis apprentissage avec les équipes de la SAT ; repli prévu (capteur au poignet, analyse du son seule) ; le cœur du projet (suivi du corps) repose sur une technique que je pratique déjà |
| Basé loin de Montréal | Deux mois sur place ; séance ouverte à mi-parcours ; atelier final ; au retour, partage des résultats partout où je le peux, à La Réunion et ailleurs (conférences, ateliers, démonstrations) |
| Issue incertaine (la marche peut diluer le jeu ; la « proximité de jeu » peut échouer) | Priorités ordonnées, repli à chaque étape ; tout résultat, y compris négatif, est documenté |
| Pas de parcours universitaire ni de publication de recherche | Le partage est au cœur de la démarche : outils, patchs et méthode documentés et publiés en licence libre, dans l'esprit du logiciel libre ; présentation des résultats lors de rencontres du domaine quand l'occasion se présente |
| Transport, hébergement, vol long-courrier | Aides à la mobilité avec les lettres d'appui de la SAT ; un seul voyage ; matériel existant ; outils libres |

## Ce que le projet rend à la SAT et à la communauté
Un **module violon pour Puara** et une **logique de « traces » pour ossia score**, publiés en licence libre ; une documentation de la chaîne complète (caméras + LiDAR → Carto → ossia score → SpatGRIS) ; une séance ouverte à mi-parcours et un atelier final ; avec l'aide de la SAT, une collaboration potentielle avec l'IDMIL (McGill), avec l'accord de son directeur, co-développeur de Puara et auteur des travaux de 2007 sur la spatialisation par le geste d'un instrumentiste.
