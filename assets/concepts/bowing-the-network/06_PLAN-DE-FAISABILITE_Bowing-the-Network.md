# Bowing the Network — Faisabilité : risques, replis et priorités

**Jérôme Li-Thiao-Té (J3ZZ)** · octobre 2026

**Principe :** préparer au maximum avant et entre les périodes sur place. Le temps à la SAT est réservé à ce qui exige ses espaces, son matériel et ses équipes ; l'apprentissage des outils libres, le prototypage, la logique des traces et les tests au casque se font en amont, à distance. Le dispositif repose sur une **configuration minimale** (1 LiDAR, 1 nœud Puara sur l'archet, 3 micros, 1 ordinateur, les haut-parleurs de la SAT) ; tout le reste est une extension.

## 1. Brique par brique

| Brique | Préparation | Outils | Risque | Repli |
|---|---|---|---|---|
| Capter le son (diffusion et analyse séparées) | Avant la résidence | DPA 4099, piézo Fishman, AKG C411 ; Pure Data ou Max | Larsen ; analyse polluée par les haut-parleurs | Analyse sur le piézo et le micro de contact, presque insensibles aux haut-parleurs |
| Découper le jeu en phrases | Avant | Analyse audio | Découpage instable | Seuils simples, ou pédale pour marquer les phrases |
| Mémoire des traces (dépôt, durée de vie, réveil) | Avant, puis avec la SAT | ossia score, SpatGRIS | Complexité | Version minimale : dépôt + réveil en y revenant |
| **Jeu en déplacement dans toute la salle (cœur)** | Avant (LiDAR), puis sur place | 1 LiDAR (un seul interprète : pas de triangulation) ; liaison sans fil 3 canaux, à explorer | Latence et fiabilité du sans-fil ; la marche qui dilue le jeu | Câble long ; zone plus petite ; la dilution du jeu est elle-même un résultat documenté |
| Capteur d'archet | Dès réception du matériel, puis **avec l'accompagnement de la SAT** (première expérience ESP32 ; notions d'Arduino) | Puara (ESP32 + centrale inertielle) | Poids, équilibre de l'archet ; courbe d'apprentissage | Capteur au poignet ou dans un gant ; au pire, travail sans capteur d'archet (son + position) |
| « Proximité de jeu » (réveil par un geste ou un son semblable) | Avant (son), puis sur place (geste) | Descripteurs audio et Puara ; classification (ex. FluCoMa) | Gestes trop proches ou trop différents | Réveil en revenant à l'endroit de la trace |
| Spatialisation | Avant (binaural), puis sur place | SpatGRIS | — | — |
| Gestes fins (option 1) | Sur place | Femto Mega de côté ; LivePose | Zone de lecture limitée près de la caméra | Sans caméra : le capteur d'archet porte le geste |
| Vérification de la position (option 2) | Sur place | Femto Mega au-dessus ; point d'accroche | Accroche indisponible | Le LiDAR seul suffit |
| Image au sol | Sur place, Studio interactif | ossia score (visuels temps réel) | Dispersion | Projection simple, ou pas d'image |

## 2. Priorités

Le **jeu en déplacement dans toute la salle** est le cœur ; on y arrive par l'échelle immobile (préparée à distance), puis la petite zone. Si le temps manque : on réduit la zone, puis on renonce d'abord aux extensions (caméras, image, couche enfouie).

## 3. Critères de réussite par étape

- **Fin du travail à distance :** une phrase jouée est déposée, puis réveillée, au casque.
- **Fin de la période sur place 1 :** l'échelle immobile fonctionne dans le Studio de son ; la petite zone est amorcée ; point d'étape avec l'équipe Innovation.
- **Fin de la période sur place 2 :** une séquence jouée part de l'immobilité et parcourt toute la salle, les traces se réveillent quand on y revient ; partage final avec atelier.
- **Après :** module d'archet et logique de traces publiés en licence libre, documentés.

Calendrier : `04_CALENDRIER-disponibilites` · Ce qui est mesuré et avec quels outils : `07_CARTE-DES-DONNEES`.
