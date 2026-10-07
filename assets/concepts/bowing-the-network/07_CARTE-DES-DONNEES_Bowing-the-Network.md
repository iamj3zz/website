# Bowing the Network — Carte des données captées

**Jérôme Li-Thiao-Té (J3ZZ)** · octobre 2026

Ce que le dispositif mesurera pendant le jeu, avec quel capteur, avec quels
outils, à quoi chaque donnée servira dans la recherche, et quand elle sera
préparée. Toutes les données sont traitées **localement**, en temps réel,
et ne concernent que l'interprète (et, lors du partage final, la position
anonyme des personnes qui traversent l'espace).

**État aujourd'hui :** rien de ce dispositif n'est encore construit. La
maquette en ligne simule seulement une partie de l'analyse du son et de la
mémoire des traces, avec le micro de l'ordinateur.

**Préparation :** **Avant** = à distance, avant les périodes sur place ·
**Avant → SAT** = commencé à distance, finalisé avec l'équipe de la SAT ·
**Sur place** = pendant la résidence · *(option)* = extension.

**Usages :** placer (où la trace est déposée) · ressemblance (quand une
trace se réveille) · transformer (comment elle revient) · durée de vie
(comment elle s'efface).

## 1. Le son — piézo Fishman (chevalet), AKG C411 (contact), DPA 4099 (col de cygne)

Outils communs : interface audio 3 entrées ; **Pure Data** (libre) ou Max ; bibliothèque **FluCoMa** (libre) ; envoi des descripteurs en OSC vers ossia score.

| Donnée | Capteur | Outils | Usage | Préparation |
|---|---|---|---|---|
| Début et fin de phrase | Fishman | Suivi de niveau et de silence (`env~` dans Pure Data) | Découper le jeu en traces | Avant |
| Hauteur (note jouée) | Fishman | `sigmund~` (Pure Data) ou `fluid.pitch~` (FluCoMa) | Placer (gauche/droite, immobile) ; ressemblance | Avant |
| Dynamique | Fishman, DPA | `env~` ou `fluid.loudness~` | Placer (distance) ; ressemblance | Avant |
| Brillance | DPA | `fluid.spectralshape~` (centroïde) | Placer (avant/arrière) ; indice du point de contact | Avant |
| Attaques | Fishman | `bonk~` (Pure Data) ou `fluid.onsetslice~` | Articulation (détaché, staccato…) ; réveil | Avant |
| Bruit, souffle | C411 | `fluid.spectralshape~` (platitude) | Col legno, sul ponticello : transformer | Avant |
| Vibrato, stabilité | Fishman | Variation de la hauteur dans le temps | Expressivité ; ressemblance | Avant |
| Mode de jeu (pizzicato, harmoniques, trémolo, doubles cordes…) | Fishman + C411 | Classification **FluCoMa** (`fluid.mlpclassifier~`), entraînée sur mes propres enregistrements | Ressemblance ; règles de transformation | Avant → SAT |
| Son enregistré des traces | DPA | Enregistrement des phrases, lecture spatialisée (ossia score, SpatGRIS) | Matière des traces | Avant |

## 2. L'archet — nœud Puara dans la hausse

Outils : carte **ESP32** + centrale inertielle 9 axes + batterie ; **Puara** (modèles de modules, `puara-gestures`), chaîne Arduino / PlatformIO ; envoi OSC en Wi-Fi vers ossia score. **Première expérience pour moi** : prise en main dès réception du matériel, puis avec l'équipe de la SAT.

| Donnée | Capteur | Outils | Usage | Préparation |
|---|---|---|---|---|
| Vitesse et sens (tiré / poussé) | Gyroscope, accéléromètre | `puara-gestures` | Énergie du dépôt ; réveil | Avant → SAT |
| Inclinaison, roulis | Centrale inertielle | Fusion de capteurs (orientation) | Corde jouée (avec la volute) ; hauteur dans l'espace | Avant → SAT |
| Changements d'archet, secousses | Accéléromètre | `puara-gestures` (secousse, « jab ») | Articulation ; déclencheurs gestuels | Avant → SAT |
| Point d'archet (talon → pointe) | Centrale inertielle + caméra de côté *(option)* | Fusion, à explorer | Placer à l'échelle immobile | Sur place |

## 3. Le violon — nœud Puara sur la volute *(option)*

| Donnée | Capteur | Outils | Usage | Préparation |
|---|---|---|---|---|
| Orientation du violon | ESP32 + centrale inertielle | Puara | Direction du jeu | Sur place |
| Angle archet / violon | Les deux nœuds | Comparaison des orientations | Corde jouée, mesurée directement | Sur place |

## 4. Le corps dans la salle — 1 LiDAR ; en option, Femto Mega de côté et au-dessus

Un seul interprète sur une seule surface : pas de triangulation. LiDAR = déplacements ; caméra de côté = gestes fins ; caméra au-dessus = vérification de la position.

| Donnée | Capteur | Outils | Usage | Préparation |
|---|---|---|---|---|
| Position dans la salle | LiDAR Slamtec S2E (Ethernet) | SDK Slamtec (`rplidar_sdk`, libre) + suivi de la personne (regroupement des points), envoi OSC ; alternatives : composant Slamtec de TouchDesigner, outils LiDAR du ZKM | Placer la trace là où l'on joue ; réveil en y revenant | Avant |
| Vitesse et trajectoire de marche | LiDAR | Calcul à partir des positions (Pure Data ou ossia score) | Durée de vie et transformation des traces | Avant |
| Orientation du corps *(option 2)* | Femto Mega au-dessus | Orbbec SDK (libre) + silhouette vue du dessus (OpenCV) | Orienter le dépôt | Sur place |
| Vérification de la position *(option 2)* | Femto Mega au-dessus | Idem ; repère commun avec le LiDAR (repères au sol ou **Carto**) | Fiabilité ; distinguer l'interprète du public | Sur place |
| Posture, bras de l'archet *(option 1)* | Femto Mega de côté | Orbbec SDK ; squelette avec **LivePose** | Gestes fins ; ressemblance gestuelle | Sur place |

## 5. La mémoire — ossia score et SpatGRIS

| Donnée | Outils | Rôle | Préparation |
|---|---|---|---|
| Traces : position, âge, énergie, nombre de réveils | **ossia score** (processus et scripts) ; SpatGRIS (une source par trace, OSC) | Le palimpseste | Avant → SAT |
| Ressemblance entre le jeu présent et une trace | Comparaison des descripteurs (son, puis geste et corps) ; FluCoMa | « Proximité de jeu » : réveil | Avant (son) → sur place (geste, corps) |
| Curseur corps ↔ jeu | ossia score | Dosage entre la position du corps et le placement par le jeu | Sur place |
| Image au sol | ossia score (visuels temps réel) ; projection du Studio interactif | Rendre les traces visibles | Sur place |

## 6. Questions de recherche portées par ces données

1. **Que devient le jeu d'un violoniste quand l'espace qu'il parcourt se souvient de lui ?** (corps + son + mémoire)
2. **Le jeu seul suffit-il à écrire un espace lisible ?** (son + archet, à l'échelle immobile)
3. **Qu'est-ce qui rend deux gestes ou deux sons « semblables » ?** (tous les descripteurs, combinés)
4. **La marche enrichit-elle le jeu ou le dilue-t-elle ?** (corps + son, en comparant immobile et déplacement)
5. **Comment une trace doit-elle vivre, s'effacer et revenir ?** (mémoire, durée de vie, transformation)
6. **Faut-il voir ses traces pour jouer avec elles ?** L'image au sol suit la même géométrie que le son ; même séquence jouée avec et sans image (Studio interactif).
