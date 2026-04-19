---
layout: portfolio
title: "Bio & CV"
permalink: /fr/bio/
description: "J3ZZ est un artiste et musicien français originaire de La Réunion. Découvrez sa pratique artistique, sa philosophie et son approche créative à travers le prisme des nouveaux médias."
image: /assets/bio/bio-photo.jpg
bio_image: /assets/bio/bio-photo.jpg
lang: fr
lang_alternate: /bio/
page_type: bio
links:
  - title: CV
    url: /assets/bio/cv.pdf
  - title: Press Kit
    url: /assets/bio/press-kit.pdf
  - title: Photos
    url: /bio-gallery/
  - title: IMDb
    url: https://www.imdb.com/name/nm6903099/
---

<section class="bio-section">

  <!-- Links Section -->
  <div class="bio-links">
    {% for link in page.links %}
      <a href="{{ link.url }}" class="bio-link" {% if link.url contains 'http' %}target="_blank" rel="noopener noreferrer"{% endif %}>{{ link.title }}</a>
    {% endfor %}
  </div>

  <!-- Bio Text + Image Section -->
  <div class="bio-intro">
    <div class="bio-text">
      <p>
        J3ZZ est un artiste et musicien français originaire de La Réunion. Formé au violon et façonné par une décennie de scène et de collaborations interculturelles, sa pratique s'est progressivement étendue à la composition pour le cinéma, la scène, et finalement aux installations immersives — des environnements pilotés par des capteurs où le son, la lumière et les systèmes vivants convergent en art des médias temporels.
      </p>
      <p>
        À l'intersection de l'art sonore, de la musique, de la lumière, de la programmation et des sciences, sa pratique se déploie à travers des sorties discographiques, des performances scéniques et des installations spatiales. Un intérêt soutenu pour le microsound et l'enregistrement de terrain ambisonique l'a conduit à intégrer l'à peine audible dans des architectures compositionnelles de plus en plus complexes — le temps comme matière élastique, l'infinitésimal comme sujet.
      </p>
      <p>
        Cette attention méticuleuse à l'imperceptible contraste souvent avec l'usage du violon acoustique, dont il transforme le caractère à travers synthétiseurs, traitements d'effets et capteurs. La tension entre le timbre organique des cordes et la manipulation électronique crée une dynamique entre le naturel et le synthétique.
      </p>
      <p>
        Sa pratique s'étend également au travail avec des organismes vivants pour générer sons et visuels en temps réel, brouillant les frontières entre art, science et monde biologique. Ces systèmes vivants deviennent des collaborateurs actifs dans le processus créatif, introduisant imprévisibilité et évolution organique dans ses performances et installations.
      </p>
      <p>
        Sa pratique technique s'appuie sur un écosystème sur mesure assemblé autour de la spécificité de chaque projet. La capture de signaux bioélectriques, la sonification de données en temps réel, la synthèse modulaire, la spatialisation ambisonique et multicanale, la programmation visuelle générative et l'apprentissage automatique forment le substrat récurrent de son travail. Les environnements logiciels — Max/MSP, Ableton Live, TouchDesigner — ne sont pas utilisés comme des plateformes figées mais comme des laboratoires, continuellement modifiés et enrichis par des dispositifs et interfaces développés sur mesure. Le violon, loin d'être décoratif, reste central : amplifié, traité et augmenté de capteurs, il fonctionne à la fois comme instrument acoustique et contrôleur live. C'est cette intégration du geste et du calcul, du signal biologique et de l'environnement numérique, qui confère à sa pratique sa texture matérielle particulière.
      </p>
      <p>
        Trois projets définissent aujourd'hui le cœur de sa pratique des nouveaux médias. <a href="/works/2019-09-19-live-racines-et-resonances/"><em>Racines &amp; Résonances</em></a> est une performance audiovisuelle live immersive dans laquelle des capteurs bioélectriques capturent les bio-signaux des plantes et les transforment en temps réel en sons, musique et visuels génératifs — un concert qui met en scène le vivant comme instrument et narrateur, joué en Hongrie, à La Réunion, à Maurice et en France depuis 2019. Les <a href="/works/2023-06-04-work-biosonification/"><em>Ateliers de Biosonification</em></a> prolongent cette investigation vers l'éducation participative, invitant des publics variés — des enfants des écoles aux visiteurs de festivals — à écouter les plantes et à composer avec leurs signaux. <em>Vibrotanica</em> est une installation interactive immersive de grande envergure en cours de développement, approfondissant cette même enquête sur la vie bioélectrique des plantes dans un environnement architectural et multisensoriel — une œuvre en quête de partenariats de production et de soutien institutionnel.
      </p>
    </div>
    <div class="bio-image">
      <img src="{{ page.bio_image }}" alt="J3ZZ — artiste sonore et créateur de nouveaux médias">
    </div>
  </div>

  <!-- Categorized Lists Section -->
  <div class="bio-lists">

    <div class="bio-category" id="bio-installations">
      <h2>Installations &amp; Expositions</h2>
      <div class="bio-items">
        <!--<div class="bio-item"><span class="bio-year"><script>document.write(new Date().getFullYear())</script></span> <a href="/works/2026-01-01-inst-vibrotanica/">VIBROTANICA</a> ∙ en cours</div>-->
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-08-18-inst-iris/">IRIS</a> ∙ Csokonai Theatre ∙ Debrecen ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2016-02-13-inst-unbalanced-forces/">UNBALANCED FORCES</a> ∙ Lábor Gallery ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2014-09-29-inst-park-in-progress/">PARK IN PROGRESS</a> ∙ Zone tampon ONU ∙ Nicosie ∙ CY</div>
      </div>
    </div>

    <div class="bio-category" id="bio-composer">
      <h2>Compositeur &amp; Producteur</h2>

      <div class="bio-section-subtitle">Sorties</div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-04-13-rels-stereo-woods/">STEREO WOODS</a></div>
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-05-20-rels-a-drop-in-the-ocean/">A DROP IN THE OCEAN</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-05-10-rels-ex-nihilo/">EX NIHILO</a></div>
      </div>

      <div class="bio-section-subtitle">Théâtre &amp; Danse</div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2019</span> <a href="/works/2019-05-03-perf-suprema/">SUPREMA</a> ∙ Tímea Sebestyén</div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2016-04-14-perf-home-base/">HOME BASE</a> ∙ Kulcsár Noémi</div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2014-02-13-perf-what-happens-when-you-touch-it/">WHAT HAPPENS WHEN YOU TOUCH IT</a> ∙ EnKnapGroup</div>
        <div class="bio-item"><span class="bio-year">2013</span> <a href="/works/2013-04-19-perf-touch-me-not-nebancsvirag/">TOUCH ME NOT</a> ∙ Zoltán Grecsó</div>
      </div>

      <div class="bio-section-subtitle">Films ∙ <a href="https://www.imdb.com/name/nm6903099/" target="_blank" rel="noopener noreferrer">IMDb</a></div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2020</span><a href="/works/2020-08-18-film-valaszuton-crossroads/">CROSSROADS</a> ∙ court métrage ∙ Flora Chilton</div>
        <div class="bio-item"><span class="bio-year">2017</span> <a href="/works/2017-01-01-film-grantraeet/">GRANTRAEET</a> ∙ court métrage ∙ Amalie Halsey</div>
        <div class="bio-item"><span class="bio-year">2017</span> <a href="/works/2017-01-01-film-building-up-creativity/">BUILDING UP CREATIVITY</a> ∙ film de danse ∙ Judit Pétervári</div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2016-01-01-film-petra/">PETRA</a> ∙ long métrage ∙ Philip Lewis</div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2014-01-01-film-travel-buddy/">TRAVEL BUDDY</a> ∙ court métrage ∙ Declan Hannigan</div>
        <div class="bio-item"><span class="bio-year">2013</span> <a href="/works/2013-01-02-film-children-tell-istanbul/">CHILDREN TELL ISTANBUL</a> ∙ documentaire ∙ Olga Pavlenko</div>
        <div class="bio-item"><span class="bio-year">2013</span><a href="/works/2013-01-01-film-1000-and-1-realities/">1000 AND 1 REALITIES</a> ∙ courts métrages animés ∙ Olga Pavlenko</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-film-best-friends-wifes-lover/">BEST FRIEND'S WIFE'S LOVER</a> ∙ court métrage ∙ Declan Hannigan</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-film-to-be-told/">TO BE TOLD</a> ∙ documentaire ∙ Lorenzo Ciacciavicca</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-film-far-point/">FAR POINT</a> ∙ court métrage ∙ Lorenzo Ciacciavicca</div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-01-film-ouverture/">OUVERTURE</a> ∙ court métrage ∙ Lorenzo Ciacciavicca</div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-01-film-fission/">FISSION</a> ∙ film de danse ∙ Ana Maria Staicu &amp; Paris Tume</div>
        <div class="bio-item"><span class="bio-year">2010</span> <a href="/works/2010-01-01-film-ricordi-di-cosa-profuma-la-terra/">RICORDI DI COSA PROFUMA LA TERRA</a> ∙ court métrage animé ∙ Olga Pavlenko</div>
        <div class="bio-item"><span class="bio-year">2010</span> <a href="/works/2010-01-01-film-in-between/">IN BETWEEN</a> ∙ film de danse ∙ Massih Parsaei</div>
      </div>

      <div class="bio-section-subtitle">Entreprise &amp; Éducation</div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2020</span> BASICS OF VISION ∙ Medicontur</div>
      </div>
    </div>

    <div class="bio-category" id="bio-performer">
      <h2>Performances &amp; Collaborations</h2>

      <div class="bio-section-subtitle">Créations personnelles</div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2025</span> <a href="/works/2019-09-19-live-racines-et-resonances/">RACINES &amp; RÉSONANCES</a> ∙ Villa de la Région ∙ Saint-Denis ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2024</span> <a href="/works/2019-09-19-live-racines-et-resonances/">RACINES &amp; RÉSONANCES</a> ∙ Institut français ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2024</span> <a href="/works/2019-09-19-live-racines-et-resonances/">RACINES &amp; RÉSONANCES</a> ∙ Institut français ∙ Rose-Hill ∙ MU</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2019-09-19-live-racines-et-resonances/">RACINES &amp; RÉSONANCES</a> ∙ Léspas culturel Leconte de Lisle ∙ Saint-Paul ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2019-09-19-live-racines-et-resonances/">RACINES &amp; RÉSONANCES</a> ∙ Institut français ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2019-09-19-live-racines-et-resonances/">RACINES &amp; RÉSONANCES</a> ∙ House of Music Hungary ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2019</span> <a href="/works/2019-09-19-live-racines-et-resonances/">RACINES &amp; RÉSONANCES</a> ∙ La Lasagneria ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2019</span> <a href="/works/2019-09-19-live-racines-et-resonances/">RACINES &amp; RÉSONANCES</a> ∙ MFSZ ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-02-28-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-02-28-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-02-28-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-02-28-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-02-28-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-02-28-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-02-28-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-02-28-live-massolit-series/">MASSOLIT SERIES</a> ∙ Lumen Kávézó ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2018</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ Samsara Festival ∙ Siófok ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2018</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ El Asador de Pata Negra ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2017</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ Refuge Bistro ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ Canvas Creative Space ∙ Singapour ∙ SG</div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ Living Gallery ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ FKSE Studio Gallery ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2013</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ Frau Frisor FOSCA ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2011-09-29-live-hybris/">HYBRIS</a> ∙ Brody Studios ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-09-29-live-hybris/">HYBRIS</a> ∙ Treehugger Dan's Bookstore Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-05-05-live-talking-hearts/">TALKING HEARTS</a> ∙ Godot Café-Théâtre ∙ Bucarest ∙ RO</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-05-05-live-talking-hearts/">TALKING HEARTS</a> ∙ Sziget Festival A38 Stage ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-05-05-live-talking-hearts/">TALKING HEARTS</a> ∙ Toldi Klub ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-05-05-live-talking-hearts/">TALKING HEARTS</a> ∙ Le Murate Caffe Letterario ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2013</span> <a href="/works/2011-04-01-live-eutropia/">EUTROPIA</a> ∙ Tivoli ∙ Utrecht ∙ NL</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2011-04-01-live-eutropia/">EUTROPIA</a> ∙ Fabbrica Europa Festival - Stazione Leopolda ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-04-01-live-eutropia/">EUTROPIA</a> ∙ Arkadas Theater ∙ Cologne ∙ DE</div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2010-08-21-live-reality-in-disguise/">REALITY IN DISGUISE</a> ∙ Sziget Festival - A38 Stage ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2010</span> <a href="/works/2010-08-21-live-reality-in-disguise/">REALITY IN DISGUISE</a> ∙ Club Bahnhof Ehrenfeld ∙ Cologne ∙ DE</div>
      </div>

      <div class="bio-section-subtitle">Collaborations</div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2009–<script>document.write(new Date().getFullYear())</script></span><a href="/works/2009-01-01-live-willany-leo/"> WILLANY LEO</a></div>
        <div class="bio-item"><span class="bio-year">2018–2019</span> DJ PANDA ft. J3ZZ</div>
        <div class="bio-item"><span class="bio-year">2013–2017</span><a href="https://www.buddhabar.com/"> BUDDHA BAR</a> ft. J3ZZ (musicien résident)</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-04-18-live-modeo/">MODEO ft. J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2013</span><a href="/works/2013-07-04-live-tadalat/"> TADALAT ft. J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2012–2013</span> <a href="/works/2012-01-01-live-azalai/"> AZALAI</a></div>
        <div class="bio-item"><span class="bio-year">2012</span><a href="/works/2012-08-11-live-samba-toure/"> SAMBA TOURÉ ft. J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-07-09-live-summer-suite/"> SUMMER SUITE ft. J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2010–2012</span> <a href="/works/2011-04-03-live-iparkutya/"> IPARKUTYA</a></div>
        <div class="bio-item"><span class="bio-year">2011</span><a href="/works/2011-07-21-live-koudede-tartit/"> KOUDEDE &amp; TARTIT ft. J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2008–2010</span> <a href="/works/2008-11-27-live-the-last-drops/"> THE LAST DROPS</a></div>
      </div>
    </div>

    <div class="bio-category" id="bio-residencies">
      <h2>Résidences</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2025</span> <a href="/works/2025-01-01-resi-citta-della-pieve-residency/">CITTA DELLA PIEVE</a> ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-01-02-resi-kerveguen-residency/">LE KERVEGUEN</a> ∙ Saint-Pierre ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-01-01-resi-cite-des-arts-residency/">LA CITÉ DES ARTS</a> ∙ Saint-Denis ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-08-23-resi-outbreakers-lab-residency/">OUTBREAKERS' LAB</a> ∙ Zsennye ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2018</span> <a href="/works/2018-01-01-resi-music-maker-2/">CHÂTEAU ÉPHÉMÈRE</a> ∙ Carrières-sous-Poissy ∙ FR</div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2014-09-29-inst-park-in-progress/">PARK IN PROGRESS</a> ∙ Nicosie ∙ CY</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-05-05-live-talking-hearts/">TALKING HEARTS</a> ∙ Barcelone/Florence/Budapest/Bucarest ∙ SP/IT/HU/RO</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-film-to-be-told/">TO BE TOLD</a> ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2011–2013</span> <a href="/works/2011-04-01-live-eutropia/">EUTROPIA ∙ Cologne/Florence/Utrecht</a> ∙ DE/IT/NL</div>
        <div class="bio-item"><span class="bio-year">2009–2011</span> <a href="/works/2010-08-21-live-reality-in-disguise/">REALITY IN DISGUISE</a> ∙ Remscheid/Heek/Cologne/Florence/Budapest ∙ DE/IT/HU</div>
      </div>
    </div>

    <div class="bio-category" id="bio-workshops">
      <h2>Ateliers</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2024</span><a href="/works/2023-06-04-work-biosonification/">BIOSONIFICATION</a> ∙ Institut français, Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-06-04-work-biosonification/">BIOSONIFICATION</a> ∙ Salon du livre Réyoné ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-06-04-work-biosonification/">BIOSONIFICATION</a> ∙ Mizik O Marmay Festival ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-06-04-work-biosonification/">BIOSONIFICATION</a> ∙ Rdv aux jardins ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2023-06-04-work-biosonification/">BIOSONIFICATION</a> ∙ Széllkapu, Millenáris, Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2013–2014</span> <a href="/works/2013-08-01-work-steps-ahead/">STEPS AHEAD</a> ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2013</span> <a href="/works/2013-07-01-work-u-care/">U-CARE</a> ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-09-01-work-eutropia-coaching/">EUTROPIA</a> ∙ Lille ∙ FR</div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-02-01-work-follow-up/">FOLLOW-UP</a> ∙ Budapest / Barcelone ∙ HU/ES</div>
      </div>
    </div>

    <div class="bio-category" id="bio-management">
      <h2>Direction culturelle &amp; Gouvernance</h2>
      <div class="bio-items">
        <div class="bio-item"> <span class="bio-year">2022–<script>document.write(new Date().getFullYear())</script></span> <a target="_blank" href="https://www.prma-reunion.fr/"> PÔLE RÉGIONAL DES MUSIQUES ACTUELLES </a> ∙ Membre actif ∙ La Réunion ∙ RE </div>
        <div class="bio-item"> <span class="bio-year">2012–<script>document.write(new Date().getFullYear())</script></span> <a target="_blank" href="https://www.centrocreazionecultura.eu"> CENTRO CREAZIONE CULTURA </a> ∙ Membre actif ∙ Florence ∙ IT </div>
        <div class="bio-item"> <span class="bio-year">2023–2026</span><a target="_blank" href="https://www.kolet.re">KOLET</a> ∙ Membre du conseil d'administration ∙ La Réunion ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2023</span> <span><a target="_blank" href="https://www.lapossession.re">VILLE DE LA POSSESSION</a> ∙ Directeur général adjoint ∙ Dept. Épanouissement citoyen ∙ Culture &amp; Services locaux, Sports, Centre social, Inclusion, Logement ; équipe de 170+ agents ; sous l'autorité du Maire et des élus (juil.–août) ∙ La Possession ∙ RE</span></div>
        <div class="bio-item"><span class="bio-year">2020–2022</span><span><a target="_blank" href="https://citedesarts.re"> TERRITO'ARTS</a> ∙ Directeur général ∙ RE ∙ Cité des Arts de La Réunion &amp; Centre Culturel Château Morange ; budget 4M€ ; 50+ agents permanents ; 170+ résidences artistiques, 140+ spectacles, 140+ actions de médiation culturelle (2021) ; gestion de crise COVID-19 ; RH, juridique, marchés publics, négociations syndicales ∙ Saint-Denis ∙ RE</span></div>
        <div class="bio-item"><span class="bio-year">2013–2015</span><span><a target="_blank" href="https://www.rootsnroutes.eu/"> ROOTS &amp; ROUTES</a> Secrétaire général ∙ administration et représentation de l'organisation ; coordination du développement de projets internationaux &amp; dossiers de financement ; soutien à 12 pays partenaires ; fonds européens : Creative, Leonardo, Erasmus+, Youth in Action, Lifelong Learning... ∙ Rotterdam ∙ NL</span></div>
      </div>
    </div>

    <div class="bio-category" id="bio-education">
      <h2>Formation &amp; Diplômes</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2026–2028</span> Cycle COP (prévu — jusqu'au diplôme) ∙ <a target="_blank" href="https://conservatoire.regionreunion.com/">CONSERVATOIRE À RAYONNEMENT RÉGIONAL DE LA RÉUNION</a> ∙ Saint-Denis ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2025–2026</span> Cycle SAS ∙ <a target="_blank" href="https://conservatoire.regionreunion.com/">CONSERVATOIRE À RAYONNEMENT RÉGIONAL DE LA RÉUNION</a> ∙ Saint-Denis ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2023–2025</span> Cycle Projet (Informatique Musicale) ∙ <a target="_blank" href="https://conservatoire.regionreunion.com/">CONSERVATOIRE À RAYONNEMENT RÉGIONAL DE LA RÉUNION</a> ∙ Saint-Denis ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2024–2025</span> Formation ∙ TouchDesigner Class ∙ <a target="_blank" href="https://thenodeinstitute.org/">THE NODE INSTITUTE</a> ∙ Berlin ∙ DE</div>
        <div class="bio-item"><span class="bio-year">2024</span><span> Formation ∙ Pratique de la transe cognitive auto-induite dans le cadre professionnel du secteur artistique ∙ <a href="https://trancelabinstitute.com/" target="_blank">TRANCELAB Training Institute</a> ∙ Saint-Denis ∙ FR</span></div>
        <div class="bio-item"><span class="bio-year">2022</span> Formation ∙ Protocole de thérapie cognitive basée sur la pleine conscience ∙ <a href="http://www.pleineconscience.re/" target="_blank">MBSR-MBCT Océan Indien</a> ∙ Saint-Denis ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2021–2022</span> Certificat ∙ Conception et mise en œuvre de stratégies en contexte de conduite du changement ∙ <a href="https://www.hec.edu/en" target="_blank">HEC PARIS</a> ∙ Jouy-en-Josas ∙ FR</div>
        <div class="bio-item"><span class="bio-year">2021</span> Permis d'exploitation (licence III) - 2021-232021-14534 ∙ <a href="https://www.permis-de-exploitation.fr/" target="_blank"> SEF </a> ∙ Marseille ∙ FR</div>
        <div class="bio-item"><span class="bio-year">2021</span> Licence d'entrepreneur de spectacles - PLATESV-R-2021-009234 ∙ Saint-Denis ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2015</span> Certificat ∙ Managing the Arts: Marketing for Cultural Organizations ∙ <a target="_blank" href="https://www.leuphana.de/encultura/university.html">LEUPHANA UNIVERSITY</a> ∙ Lüneburg ∙ DE</div>
        <div class="bio-item"><span class="bio-year">2008–2010</span> Certificat ∙ <a target="_blank" href="https://rootsnroutes.eu/projects-id62"> ROOTS &amp; ROUTES ACADEMY </a> ∙ Cologne ∙ DE</div>
        <div class="bio-item"><span class="bio-year">2000–2006</span> Diplôme d'ingénieur (Systèmes d'information &amp; Génie logiciel) ∙ <a target="_blank" href="https://www.epita.fr/"> EPITA</a> ∙ Le Kremlin-Bicêtre ∙ FR</div>
        <div class="bio-item"><span class="bio-year">1994–1999</span> Diplôme avec mention (violon) ∙ <a target="_blank" href="https://conservatoire.regionreunion.com/"> CONSERVATOIRE DE LA RÉUNION </a> ∙ Saint-Denis ∙ RE</div>
        <div class="bio-item"><span class="bio-year">1996</span> « Musique au Grand Jardin » ∙ Joinville-en-Champagne ∙ FR</div>
        <div class="bio-item"><span class="bio-year">1985–1994</span> ÉCOLE DES ARTS DE SAINT-DENIS ∙ Saint-Denis ∙ RE</div>
      </div>
    </div>

  </div>

</section>
