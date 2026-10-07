# Bowing the Network — Implantation des capteurs

**Jérôme Li-Thiao-Té (J3ZZ)** · octobre 2026
Positions **indicatives**, établies d'après les dimensions publiées des
espaces de la SAT ; à ajuster avec l'équipe sur place.

**Figures :**
- `02a_plan-2D_espace-de-prototypage` — plan de la salle principale (jeu en déplacement) ; extensions en clair
- `02b_vue-3D_espace-de-prototypage` — la même salle en 3D, hauteurs réelles
- `02c_plan-2D_studio-interactif` — petite zone, projection au sol et aux murs
- `02d_plan-2D_studio-de-son` — échelle immobile, cube de 97 haut-parleurs
- `02e_violon-archet_capteurs` — capteurs portés par le violon, l'archet et le violoniste

**Convention :** origine au centre de la salle ; x vers la droite, y vers
le fond (l'avant, côté public, est en y négatif) ; z = hauteur ; en mètres.

---

## 1. Principe : une configuration minimale, des extensions optionnelles

Pour rester faisable en deux mois, le dispositif repose sur une
**configuration minimale** qui suffit à la question de recherche ; tout le
reste est une **extension**, ajoutée seulement si le temps et le matériel
disponible le permettent (dessinée en clair sur les figures).

| | Configuration minimale | Extensions (optionnelles) |
|---|---|---|
| Déplacements dans la salle | **1 LiDAR Slamtec S2E**, de côté | — |
| Gestes fins (bras de l'archet, posture, archet par rapport au violon) | — | **Option 1 :** Femto Mega **de côté**, à ≈ 1,5 m, côté archet |
| Vérification de la position, orientation du corps, distinction avec le public | — | **Option 2 :** Femto Mega **au-dessus** du centre, à ≈ 3 m |
| Geste | **1 nœud Puara sur l'archet** | nœud Puara sur la volute (corde jouée) |
| Son | **DPA 4099 + piézo Fishman + AKG C411** | — |
| Liaison des micros | **Sans fil, 3 canaux idéalement (DPA, Fishman, C411), à explorer** (latence, fiabilité) ; câble long en secours | — |
| Image | — | vidéoprojecteur, ou projection intégrée du Studio interactif |
| Ordinateurs | **1 ordinateur** | 2ᵉ ordinateur pour l'image |
| Diffusion | **Haut-parleurs de la SAT** | Audiodice |

**Pas de triangulation :** il n'y a qu'un interprète, sur une seule
surface, sans autre personne pour le masquer ; un LiDAR à 360° en bord de
salle suffit à suivre ses déplacements. Les caméras ne servent pas à
trianguler la même mesure : **chacune a un rôle distinct**. La caméra de
côté lit les gestes fins à courte distance (≈ 0,5 à 4 m, ce qui crée une
« zone des gestes fins » près d'elle) ; la caméra au-dessus, que rien ne
peut masquer, **vérifie la position** donnée par le LiDAR, donne
l'orientation du corps et distingue l'interprète du public lors du partage
final. Les deux Femto Mega émettant en infrarouge, elles seront
synchronisées (câble de synchronisation Orbbec) pour éviter les
interférences — à vérifier sur place.

**Matériel :** sur place, l'équipement de la SAT est utilisé en priorité ;
mon propre matériel (LiDAR, caméras de profondeur, micros, ESP32) sert hors
de la SAT, entre les périodes sur place, et reste une option sur place.

## 2. Ce que chaque capteur apporte, et pourquoi ce placement

| Capteur | Ce qu'il voit | Placement |
|---|---|---|
| **LiDAR Slamtec S2E** (360°, portée 30 m, 10 balayages/s) | La position au sol de l'interprète dans toute la salle | À **0,35 m du sol**, en bord de salle : le plan de balayage coupe les jambes, sous le violon et l'archet |
| **Nœud Puara archet** (ESP32 + centrale inertielle) | Vitesse, sens, inclinaison, changements d'archet | Dans ou contre la hausse : rien ne peut le masquer |
| **DPA 4099, piézo Fishman, AKG C411** | Le son et ses particularités (hauteur, attaques, timbre, modes de jeu) | Sur le violon : le DPA en col de cygne vise l'ouïe côté grave (son naturel) ; le piézo et le micro de contact captent la vibration de l'instrument, presque pas les haut-parleurs |
| *Option 1 :* Femto Mega de côté | Gestes fins : bras de l'archet, posture, archet par rapport au violon | À ≈ 1,5 m de haut, côté archet, à 1,5-3 m de la zone de jeu |
| *Option 2 :* Femto Mega au-dessus | Position (vérification), orientation du corps, silhouette | Suspendue au-dessus du centre, à ≈ 3 m, objectif grand angle vers le sol |

## 3. Espace de prototypage — jeu en déplacement dans toute la salle (figures 02a, 02b)
Salle ≈ 6,3 × 6,3 m, hauteur ≈ 3,1 m.

| Élément | Statut | Position (x ; y) | Hauteur | Rôle |
|---|---|---|---|---|
| L1 — LiDAR S2E | **minimal** | −3,0 ; 0 (mur gauche) | 0,35 m | position au sol |
| C1 — Femto Mega de côté | option 1 | 3,0 ; −0,8 (mur droit) | 1,5 m, sur pied | gestes fins dans la zone voisine |
| C2 — Femto Mega au-dessus | option 2 | 0 ; 0 (centre) | ≈ 3 m, suspendue (point d'accroche à demander : pas de grille dans cet espace) | vérification de la position, orientation, public |
| HP 1-8 | **minimal** (SAT) | couronne, rayon ≈ 2,85 m | ≈ 1,6 m | spatialisation des traces (SpatGRIS) |
| P1 — vidéoprojecteur | extension | 0 ; 3,05 (fond) | 2,9 m | image des traces au sol |
| Régie | **minimal** | −1,2 ; −2,85 | — | 1 ordinateur, routeur Wi-Fi, récepteur sans fil |

Zones : grande surface ≈ 5 × 5 m ; petite zone ≈ 3 × 3 m. Public (partage final) à l'avant.

## 4. Studio interactif et Studio de son (figures 02c, 02d)
- **Studio interactif** (≈ 4,9 × 6,9 m) : petite zone ; **1 LiDAR** (minimal) ; Femto Mega de côté (option 1) ; Femto Mega au-dessus, **facile à suspendre à la grille** (option 2) ; projection intégrée du studio sur trois murs et le sol (sans matériel ajouté).
- **Studio de son** (≈ 5,75 × 6 m, 97 haut-parleurs en cube) : échelle immobile ; **archet + son suffisent**, aucun capteur de position ; Femto Mega de côté en option pour les gestes fins.

## 5. Capteurs portés (figure 02e)

| # | Capteur | Emplacement | Fixation | Données |
|---|---|---|---|---|
| ① | Nœud Puara — archet (ESP32 + centrale inertielle 9 axes + batterie) | Dans ou contre la hausse (talon) ; variante : bracelet ou gant | Amovible, quelques grammes | Vitesse, sens, inclinaison, changements d'archet |
| ② | *Extension :* nœud Puara — volute | Sur la volute | Amovible | Orientation du violon ; angle archet/violon → corde jouée |
| ③ | Piézo Fishman | Dans la fente du chevalet | Installé dans le chevalet | Signal d'analyse principal : hauteur, attaques |
| ④ | AKG C411 (micro de contact) | Sur la table, près du chevalet | Pâte amovible | Résonance de la caisse : modes de jeu (col legno, frappes, sul ponticello) |
| ⑤ | DPA 4099 (micro aérien à col de cygne) | Pincé sur le côté du violon (éclisse, côté grave), capsule au-dessus de l'ouïe côté grave (gauche du violoniste) | Pince + col de cygne | Son naturel diffusé, matière enregistrée des traces |
| ⑥ | Liaison sans fil, **3 canaux idéalement** — **à explorer** | Ceinture | — | Les trois micros vers la régie pour jouer en marchant (à défaut, 2 canaux : DPA + Fishman) ; latence et fiabilité étudiées pendant la résidence ; câble long en secours |

## 6. Calibration et réseau
- **Calibration :** avec le LiDAR seul, il suffit de repérer sa position dans la salle ; avec les caméras, les trois capteurs sont placés dans un repère commun (3-4 repères au sol lus par chacun, ou Carto).
- **Réseau :** nœud Puara en Wi-Fi 2,4 GHz sur un routeur isolé ; LiDAR S2E en Ethernet (UDP) ; ordinateur en filaire ; messages OSC.

## 7. À valider sur place
- Hauteur du plan LiDAR (jambes à 0,35 m, ou buste) selon la qualité du suivi.
- Confort de jeu avec les nœuds Puara (poids, équilibre de l'archet).
- Latence et fiabilité de la liaison sans fil (objet d'exploration).
- Si le public entre dans l'espace (partage final) : le LiDAR verra plusieurs personnes ; la caméra au-dessus (option 2) permet de distinguer l'interprète.
- Point d'accroche à ≈ 3 m dans l'Espace de prototypage (pas de grille) ; interférences infrarouges entre les deux Femto Mega.
