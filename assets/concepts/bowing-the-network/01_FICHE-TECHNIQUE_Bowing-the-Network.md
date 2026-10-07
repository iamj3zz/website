# Bowing the Network — Fiche technique

**Projet :** *Bowing the Network* — un palimpseste spatial pour violon augmenté
**Porteur :** Jérôme Li-Thiao-Té (J3ZZ) · contact@j3zz.com · +33 6 98 84 55 71
**Programme :** Résidences de recherche-création en arts technologiques, SAT 2027-2028
**Version :** 7 octobre 2026, établie au mieux des connaissances actuelles ; à valider avec l'équipe de la SAT

---

## 1. Principe du dispositif

Un violoniste improvise en se déplaçant dans la salle. Chaque phrase est captée en direct et déposée là où elle a été jouée : une source sonore localisée (SpatGRIS). Les traces s'estompent lentement et se réveillent, transformées, quand le violoniste y revient ou rejoue un geste ou un son semblable. ossia score gère la mémoire des traces.

La recherche part de l'**immobilité** (seul le jeu place les traces), passe par une **petite zone** de quelques pas et aboutit au **déplacement dans toute la salle**, cœur du projet.

Implantation détaillée, plans 2D et vue 3D : `02_IMPLANTATION-DES-CAPTEURS`.

## 2. Configuration minimale et extensions

Le dispositif repose sur une **configuration minimale** suffisante pour la question de recherche ; le reste est optionnel.

| | Configuration minimale | Extensions (si le temps et le matériel le permettent) |
|---|---|---|
| Déplacements | 1 LiDAR Slamtec S2E, de côté | — |
| Gestes fins | — | Option 1 : Femto Mega de côté (≈ 1,5 m, côté archet) |
| Vérification de la position, orientation, public | — | Option 2 : Femto Mega au-dessus du centre (≈ 3 m) |
| Geste | 1 nœud Puara (ESP32 + centrale inertielle) sur l'archet | Nœud Puara sur la volute (corde jouée) |
| Son | DPA 4099 (col de cygne aérien vers l'ouïe côté grave : son diffusé, matière des traces) + piézo Fishman dans le chevalet (analyse : hauteur, attaques) + AKG C411 de contact près du chevalet (résonance de la caisse, modes de jeu) | — |
| Liaison des micros | Sans fil, **3 canaux idéalement**, **à explorer** (latence, fiabilité) ; câble long en secours | — |
| Image | — | Vidéoprojecteur, ou projection intégrée du Studio interactif |
| Ordinateurs | 1 | 2ᵉ pour l'image |
| Diffusion | Haut-parleurs de la SAT | Audiodice |

**Un seul interprète, une seule surface :** aucun autre corps ne masque le violoniste ; pas de triangulation. Le LiDAR suit les déplacements ; les caméras, en option, ont chacune un rôle distinct (gestes fins de côté, vérification de la position par le dessus).

## 3. Espaces souhaités à la SAT

| Étape | Espace | Pourquoi |
|---|---|---|
| Immobile | **Studio de son** (cube de 97 haut-parleurs) | Le jeu place les traces dans un vrai espace 3D, y compris en hauteur ; archet + son suffisent |
| Petite zone | **Studio interactif** | Projection intégrée au sol et aux murs (extension sans matériel ajouté) |
| Toute la salle | **Espace de prototypage** (≈ 6 × 6 m) | Marcher parmi les traces |

## 4. Espace de jeu

| | Besoin |
|---|---|
| Dimensions | ≈ 6 × 6 m pour le déplacement ; 3 × 3 m pour l'immobile et la petite zone ; hauteur ≥ 3 m souhaitable |
| Sol | Plat, dégagé à 0,35 m du sol autour de la zone (plan de balayage du LiDAR) |
| Lumière | Salle occultable si l'image est utilisée ; éclairage de travail réglable |
| Public (partage final) | Quelques dizaines de personnes en périphérie ; possibilité de traverser l'espace |
| Durée | Phase intensive : 3 semaines à temps plein ; installation laissée en place si possible |

**Accrochages :** aucun pour la configuration minimale (LiDAR sur un petit support à 0,35 m, haut-parleurs sur pieds). Option 2 : un point d'accroche à ≈ 3 m au-dessus du centre (grille du Studio interactif ; à demander pour l'Espace de prototypage).

## 5. Matériel

**Sur place, l'équipement de la SAT est utilisé en priorité.** Mon propre matériel sert hors de la SAT, entre les périodes sur place, et reste une option sur place.

| Matériel | Fourni par | Rôle | Statut |
|---|---|---|---|
| Diffusion multicanal + interface (ou Studio de son) | SAT | Spatialisation des traces | minimal |
| LiDAR | SAT sur place ; Slamtec RPLIDAR S2E personnel hors site | Position au sol | minimal |
| Liaison sans fil pour violon, **3 canaux idéalement** (DPA, Fishman, C411) ; à défaut 2 (DPA + Fishman), le C411 sur câble | SAT si disponible | Jouer en marchant ; objet d'exploration | minimal (câble en secours) |
| Réseau dédié (routeur Wi-Fi 2,4 GHz isolé) | SAT ou personnel | Nœud Puara, LiDAR, ordinateur | minimal |
| Violon (le mien, apporté), DPA 4099, piézo Fishman, AKG C411 | personnel | Son diffusé, analyse, modes de jeu | minimal |
| ESP32 + centrale inertielle + batterie (Puara) | personnel (à acquérir) | Module d'archet | minimal |
| Ordinateur portable + interface audio | personnel | Analyse, mémoire des traces, SpatGRIS | minimal |
| Caméra de profondeur de côté | SAT sur place ; Orbbec Femto Mega personnelle hors site | Gestes fins | option 1 |
| Caméra de profondeur au-dessus + point d'accroche à ≈ 3 m | SAT sur place ; Orbbec Femto Mega personnelle hors site | Vérification de la position | option 2 |
| Vidéoprojecteur | SAT | Image des traces | extension |
| Audiodice | SAT, selon disponibilité | Diffusion 3D mobile | extension |

## 6. Logiciels

- **Suite SAT, outils libres en priorité :** ossia score (mémoire des traces, mapping), Puara (module d'archet), SpatGRIS (spatialisation ; binaural à distance, mode CUBE au Studio de son). En extension : Carto (calibration si plusieurs capteurs), LivePose (squelette).
- **Artiste :** analyse audio (Max ou Pure Data) ; TouchDesigner pour l'image en extension.
- **Protocoles :** OSC sur UDP.

## 7. Synoptique (configuration minimale)

```
Archet ── nœud Puara (ESP32, Wi-Fi, OSC) ──────────────┐
DPA 4099 + Fishman + C411 ── sans fil ── interface ───┼── ordinateur : analyse du son, ossia score (mémoire des traces) ── SpatGRIS ── haut-parleurs
LiDAR S2E (Ethernet, UDP) ─────────────────────────────┘
```

## 8. Autres informations utiles

- **Électricité :** 4 prises autour de l'espace suffisent en configuration minimale.
- **Poids sur l'archet :** le nœud doit rester très léger ; deux placements testés à distance (hausse, ou bracelet/gant).
- **Sécurité :** aucun élément dangereux ; câbles protégés si le câble long remplace le sans-fil.
- **Travail à distance :** l'échelle immobile est développée depuis La Réunion, au casque, avec un seul ordinateur.
- **Calendrier :** un seul séjour au Québec, deux mois sur place en deux périodes distinctes (voir `04_CALENDRIER-disponibilites`).
