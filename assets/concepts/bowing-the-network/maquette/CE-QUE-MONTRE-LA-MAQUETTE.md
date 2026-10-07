# Bowing the Network — Maquette : ce qu'elle montre, ce qui reste à montrer

**Maquette en ligne :** [index.html](index.html) · **Version :** octobre 2026

La maquette a été réalisée avant le dépôt, **sans aucun capteur** : un
navigateur, le micro de l'ordinateur et un casque. Elle ne montre **pas**
le travail sur l'archet ; elle montre la logique de mémoire que la
résidence doit relier au geste.

## Ce qu'elle montre (à partir du son seul)

1. **La logique du palimpseste** : chaque phrase jouée est détectée, enregistrée, déposée dans l'espace, s'estompe, puis se réveille transformée (ralentie, renversée, plus aiguë).
2. **Un espace écrit par le jeu, sans déplacement** : la position d'une trace vient uniquement de la manière de jouer — hauteur → gauche/droite, brillance → avant/arrière, dynamique → distance.
3. **La « proximité de jeu »** : une trace se réveille quand on rejoue un geste musical semblable — pas seulement quand on s'en approche.
4. **La spatialisation au casque** (rendu binaural).
5. **Le curseur entre jeu et position du corps**, simulé : la souris remplace le corps ; le point d'écoute la suit, et une trace se réveille quand on y revient.
6. **Le rôle de chaque mesure** : dans le panneau « Données captées », chaque mesure du son peut être activée ou désactivée.

## Ce qui reste à montrer — l'objet de la résidence

| À démontrer | Avec quoi |
|---|---|
| Le geste de l'archet (position du talon à la pointe, vitesse, sens, appui) comme source de position et de ressemblance | Module d'archet Puara (ESP32 + centrale inertielle) — **première expérience pour moi, avec l'accompagnement de la SAT** |
| La corde jouée et le point de contact, mesurés directement (et non déduits du son) | Nœud Puara sur la volute (angle archet/violon), analyse audio |
| Une ressemblance fondée sur le geste et le son ensemble | Descripteurs puara-gestures + audio, dans ossia score |
| La position réelle du corps : petite zone, puis grande surface | Caméras Orbbec Femto Mega et LiDAR, calibrés avec Carto ; LivePose |
| La diffusion sur de vrais haut-parleurs | Studio de son (cube de 97 haut-parleurs), Audiodice |
| L'image des traces et la couche enfouie | ossia score (visuels temps réel), projection |
| Le confort de jeu avec capteurs, la latence et la fiabilité en conditions réelles | Tests en studio |

**En une phrase :** la maquette montre que l'idée de mémoire spatiale
fonctionne avec le son seul ; la résidence doit montrer ce que le geste de
l'archet y ajoute, avec les outils et les équipes de la SAT.
