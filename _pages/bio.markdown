---
layout: portfolio
title: Bio
permalink: /bio/
description: "J3ZZ is a French artist working in the transitional area between sound art, music, light, programming and science. Explore his artistic practice, philosophy, and creative approach through a phenomenological lens."
image: /assets/bio/bio-photo.jpg
bio_image: /assets/bio/bio-photo.jpg
links:
  - title: CV
    url: /assets/bio/cv.pdf
  - title: Press Kit
    url: /assets/bio/press-kit.pdf
  - title: Pictures
    url: /bio-gallery/
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
        J3ZZ is a French artist &amp; musician. He works in the transitional area between sound art, music, light, programming &amp; science. His work unfolds through music releases, live performances &amp; installations, especially. Through a phenomenological approach, his work is based both on experimenting and programming, always guided by concepts of time elasticity and as such located in the time-based media art field.
      </p>
      <p>
        His interests in microsound have pushed him to expand his work by opening up new ways of including field recording-based sounds into his practice. Through a positive-nihilist approach to process and structural deconstruction, he explores the infinitesimal and the imperceptible over time, employing various scientific techniques and methods.
      </p>
      <p>
        This meticulous attention to the barely audible often contrasts with his use of the acoustic violin, an instrument whose character he transforms through synthesizers, effects processing, and sensors. The tension between organic string timbre and electronic manipulation creates a dynamic interplay between the natural and the synthetic.
      </p>
      <p>
        His practice also extends to working with living organisms to generate sounds and visuals in real time, further blurring the boundaries between art, science, and the biological world. These living systems become active collaborators in the creative process, introducing elements of unpredictability and organic evolution into his performances and installations.
      </p>
      <p>
        New media serves as a vital medium of expression throughout his work, incorporating video, laser visuals, and other digital technologies into interactive, sensor-driven immersive environments. These spatial sound installations and performances invite audiences to become active participants, their movements and presence shaping the sonic and visual landscapes in real time. The integration of these technologies creates multisensory experiences where light, sound, and space converge into unified, responsive compositions.
      </p>
    </div>
    <div class="bio-image">
      <img src="{{ page.bio_image }}" alt="{{ site.title }}">
    </div>
  </div>

  <!-- Categorized Lists Section -->
  <div class="bio-lists">

    <div class="bio-category" id="bio-installations">
      <h2>Installations &amp; Exhibitions</h2>
      <div class="bio-items">      
        <div class="bio-item"><span class="bio-year"><script>document.write(new Date().getFullYear())</script></span> <a href="/works/2026-01-01-inst-vibrotanica/">VIBROTANICA</a> ∙ work in progress</div>
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-08-18-inst-iris/">IRIS</a> ∙ Csokonai Theatre ∙ Debrecen ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2016-02-13-inst-unbalanced-forces/">UNBALANCED FORCES</a> ∙ Lábor Gallery ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2014-09-29-inst-park-in-progress/">PARK IN PROGRESS</a> ∙ UN buffer zone ∙ Nicosia ∙ CY</div>
      </div>
    </div>

    <div class="bio-category" id="bio-composer">
      <h2>Composer &amp; Producer</h2>

      <div class="bio-section-subtitle">Releases</div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2021</span> <a href="/works/2021-01-01-rels-ex-nihilo/">EX NIHILO</a></div>
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-01-01-rels-stereo-woods/">STEREO WOODS</a></div>
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-01-02-rels-a-drop-in-the-ocean/">A DROP IN THE OCEAN</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-09-10-rels-massolit-series-live/">MASSOLIT SERIES (Live)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-04-11-rels-n7n8-festival-live/">N7N8 FESTIVAL (Live)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-09-12-rels-sur-le-fil-live-at-fkse/">SUR LE FIL (Live at FKSE)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-09-12-rels-sur-le-fil-live-at-frau-frisor/">SUR LE FIL (Live at Frau Frisor)</a></div>
      </div>

      <div class="bio-section-subtitle">Theatre &amp; Dance</div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2019</span> <a href="/works/2019-01-01-perf-suprema/">SUPREMA</a> ∙ Tímea Sebestyén </div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2016-04-14-perf-home-base/">HOME BASE</a> ∙ Kulcsár Noémi </div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2013-01-01-perf-what-happens-when-you-touch-it/">WHAT HAPPENS WHEN YOU TOUCH IT</a> ∙ EnKnapGroup </div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-01-perf-touch-me-not-nebáncsvirág/">TOUCH ME NOT</a> ∙  Zoltán Grecsó </div>
      </div>

      <div class="bio-section-subtitle">Films</div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2019</span><a href="/works/2019-01-01-film-valaszuton-crossroads/">CROSSROADS</a> ∙ fiction short ∙ Flora Chilton </div>
        <div class="bio-item"><span class="bio-year">2017</span> <a href="/works/2017-01-01-film-grantraeet/">GRANTRAEET</a> ∙ fiction short ∙ Amalie Halsey </div>
        <div class="bio-item"><span class="bio-year">2017</span>  <a href="/works/2017-01-01-film-building-up-creativity/">BUILDING UP CREATIVITY</a> ∙ dance film ∙ Judit Pétervári </div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2016-01-01-film-petra/">PETRA</a> ∙ fiction feature ∙ Philip Lewis </div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2014-01-01-film-travel-buddy/">TRAVEL BUDDY</a> ∙ fiction short ∙ Declan Hannigan </div>
        <div class="bio-item"><span class="bio-year">2013</span> <a href="/works/2013-01-02-film-children-tell-istanbul/">CHILDREN TELL ISTANBUL</a> ∙ documentary ∙ Olga Pavlenko </div>
        <div class="bio-item"><span class="bio-year">2013</span><a href="/works/2013-01-01-film-1000-and-1-realities/">1000 AND 1 REALITIES</a> ∙ animated shorts ∙ Olga Pavlenko </div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-film-best-friends-wifes-lover/">BEST FRIEND'S WIFE'S LOVER</a> ∙ fiction short ∙ Declan Hannigan </div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-film-to-be-told/">TO BE TOLD</a> ∙ documentary ∙ Lorenzo Ciacciavicca </div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-film-far-point/">FAR POINT</a> ∙ fiction short ∙ Lorenzo Ciacciavicca </div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-01-film-ouverture/">OUVERTURE</a> ∙ fiction short ∙ Lorenzo Ciacciavicca </div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-01-film-fission/">FISSION</a> ∙ dance film ∙ Ana Maria Staicu &amp; Paris Tume </div>
        <div class="bio-item"><span class="bio-year">2010</span> <a href="/works/2010-01-01-film-ricordi-di-cosa-profuma-la-terra/">RICORDI DI COSA PROFUMA LA TERRA</a> ∙ animated short ∙ Olga Pavlenko </div>
        <div class="bio-item"><span class="bio-year">2010</span> <a href="/works/2010-01-01-film-in-between/">IN BETWEEN</a> ∙ dance film ∙ Massih Parsaei </div>
      </div>

      <div class="bio-section-subtitle">Corporate &amp; Educational</div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-01-01-film-basics-of-vision/">BASICS OF VISION</a> ∙ Medicontur </div>
      </div>
    </div>

    <div class="bio-category" id="bio-performer">
      <h2>Performances &amp; Collaborations</h2>

      <div class="bio-section-subtitle">Own Creations</div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2025</span> <a href="/works/2019-09-01-live-racines-et-resonances/">RACINES &amp; RESONANCES</a> ∙ Villa de la Région ∙ Saint-Denis ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2024</span> <a href="/works/2019-09-01-live-racines-et-resonances/">RACINES &amp; RESONANCES</a> ∙ Institut Français de Hongrie ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2024</span> <a href="/works/2019-09-01-live-racines-et-resonances/">RACINES &amp; RESONANCES</a> ∙ Institut Français de Maurice ∙ Rose-Hill ∙ MU</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2019-09-01-live-racines-et-resonances/">RACINES &amp; RESONANCES</a> ∙ Léspas culturel Leconte de Lisle ∙ Saint-Paul ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2019-09-01-live-racines-et-resonances/">RACINES &amp; RESONANCES</a> ∙ Institut français de Budapest ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2019-09-01-live-racines-et-resonances/">RACINES &amp; RESONANCES</a> ∙ House of Music Hungary ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2019</span> <a href="/works/2019-09-01-live-racines-et-resonances/">RACINES &amp; RESONANCES</a> ∙ La Lasagneria ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2019</span> <a href="/works/2019-09-01-live-racines-et-resonances/">RACINES &amp; RESONANCES</a> ∙ MFSZ ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-04-11-live-n7n8-festival/">N7N8 FESTIVAL</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-01-01-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-01-01-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-01-01-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-01-01-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-01-01-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-01-01-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-01-01-live-massolit-series/">MASSOLIT SERIES</a> ∙ Massolit Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-01-01-live-massolit-series/">MASSOLIT SERIES</a> ∙ Lumen Kávézó ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2018</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ Samsara Festival ∙ Siófok ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2018</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ El Asador de Pata Negra ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2017</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ Refuge Bistro ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ Canvas Creative Space ∙ Singapore ∙ SG</div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ Living Gallery ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ FKSE Studio Gallery ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2013</span> <a href="/works/2013-09-12-live-sur-le-fil/">SUR LE FIL</a> ∙ Frau Frisor FOSCA ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2011-01-01-live-hybris/">HYBRIS</a> ∙ Brody Studios ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-01-live-hybris/">HYBRIS</a> ∙ Treehugger Dan's Bookstore Café ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2011-01-01-live-talking-hearts/">TALKING HEARTS</a> ∙ Godot Café-Théâtre ∙ Bucharest ∙ RO</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2011-01-01-live-talking-hearts/">TALKING HEARTS</a> ∙ Sziget Festival A38 Stage ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2011-01-01-live-talking-hearts/">TALKING HEARTS</a> ∙ Toldi Klub ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2011-01-01-live-talking-hearts/">TALKING HEARTS</a> ∙ Le Murate Caffe Letterario ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2013</span> <a href="/works/2011-01-01-live-eutropia/">EUTROPIA</a> ∙ Tivoli ∙ Utrecht ∙ NL</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2011-01-01-live-eutropia/">EUTROPIA</a> ∙ Fabbrica Europa Festival - Stazione Leopolda ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-01-live-eutropia/">EUTROPIA</a> ∙ Arkadas Theater ∙ Cologne ∙ DE</div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2010-01-01-live-reality-in-disguise/">REALITY IN DISGUISE</a> ∙ Sziget Festival - A38 Stage ∙ Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2010</span> <a href="/works/2010-01-01-live-reality-in-disguise/">REALITY IN DISGUISE</a> ∙ Club Bahnhof Ehrenfeld ∙ Cologne ∙ DE</div>
      </div>

      <div class="bio-section-subtitle">Collaborations</div>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2009–<script>document.write(new Date().getFullYear())</script></span><a href="/works/2009-01-01-live-willany-leo/"> WILLANY LEO</a></div>
        <div class="bio-item"><span class="bio-year">2018–2019</span> <a href="/works/2018-07-05-live-panda/">DJ PANDA ft. J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2018</span> <a href="/works/2018-08-03-live-grecso-j3zz-ordogkatlan/">GRECSÓ ft. J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2013–2017</span><a href="/works/2013-01-01-live-buddha-bar-budapest/"> BUDDHA BAR ft J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-04-18-live-modeo/">MODEO ft. J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2013</span><a href="/works/2015-04-18-live-modeo/"> TADALAT ft. J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2012–2013</span> <a href="/works/2012-01-01-live-azalai/"> AZALAI </a></div>
        <div class="bio-item"><span class="bio-year">2012</span><a href="/works/2015-04-18-live-modeo/"> SAMBA TOURE ft. J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2015-04-18-live-modeo/"> SUMMER SUITE ft. J3ZZ</a></div>
        <div class="bio-item"><span class="bio-year">2010–2012</span> <a href="/works/2011-04-03-live-iparkutya/"> IPARKUTYA </a></div>
        <div class="bio-item"><span class="bio-year">2010</span><a href="/works/2015-04-18-live-modeo/"> KOUDEDE / TARTIT ft. J3ZZ </a></div>
        <div class="bio-item"><span class="bio-year">2008–2010</span> <a href="/works/2008-11-27-live-the-last-drops/"> THE LAST DROPS </a></div>
      </div>
    </div>

    <div class="bio-category" id="bio-residencies">
      <h2>Residencies</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2025</span> <a href="/works/2025-01-01-resi-citta-della-pieve-residency/">CITTA DELLA PIEVE</a> ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-01-02-resi-kerveguen-residency/">LE KERVEGUEN</a> ∙ Saint-Pierre ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-01-01-resi-cite-des-arts-residency/">LA CITE DES ARTS</a> ∙ Saint-Denis ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-08-23-resi-outbreakers-lab-residency/">OUTBREAKERS' LAB</a> ∙ Zsennye ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2018</span> <a href="/works/2018-01-01-resi-music-maker-2/">CHATEAU EPHEMERE </a> ∙ Carrières-sous-Poissy ∙ FR</div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2014-09-29-inst-park-in-progress/">PARK IN PROGRESS</a> ∙ Nicosia ∙ CY</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2011-01-01-live-talking-hearts/">TALKING HEARTS</a> ∙ Barcelona/Florence/ Budapest/Bucharest ∙ SP/IT/HU/RO</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-film-to-be-told/">TO BE TOLD</a> ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2011-2013</span> <a href="/works/2011-01-01-live-eutropia/">EUTROPIA ∙ Cologne/Florence/Utrecht</a> ∙ DE/IT/NL</div>
        <div class="bio-item"><span class="bio-year">2009–2011</span> <a href="/works/2010-01-01-live-reality-in-disguise/">REALITY IN DISGUISE</a> ∙ Remscheid/Heek/Cologne/Florence/Budapest ∙ DE/IT/HU</div>
      </div>
    </div>

    <div class="bio-category" id="bio-workshops">
      <h2>Workshops</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2024</span><a href="/works/2023-06-04-work-biosonification-workshops/">BIOSONOFICATION</a> ∙ Institut Français de Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-06-04-work-biosonification-workshops/">BIOSONOFICATION</a> ∙ Salon du livre Réyoné ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-06-04-work-biosonification-workshops/">BIOSONOFICATION</a> ∙ Mizik O Marmay Festival ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-06-04-work-biosonification-workshops/">BIOSONOFICATION</a> ∙ Rdv aux jardins ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2023-06-04-work-biosonification-workshops/">BIOSONOFICATION</a> ∙ Széllkapu, Millenáris, Budapest ∙ HU</div>
        <div class="bio-item"><span class="bio-year">2013–2014</span> STEPS AHEAD ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2013</span> U-CARE ∙ Florence ∙ IT</div>
        <div class="bio-item"><span class="bio-year">2012</span> EUTROPIA ∙ Lille ∙ FR</div>
        <div class="bio-item"><span class="bio-year">2011</span> FOLLOW-UP ∙ Budapest / Barcelona ∙ HU/ES</div>
      </div>
    </div>

    <div class="bio-category" id="bio-management">
      <h2>Cultural Management &amp; Governance</h2>
      <div class="bio-items">
        <div class="bio-item"> <span class="bio-year">2022–<script>document.write(new Date().getFullYear())</script></span> <a target="_blank" href="https://www.prma-reunion.fr/"> POLE REGIONAL DES MUSIQUES ACTUELLES </a> ∙ Active Member ∙ Reunion island ∙ RE </div>
        <div class="bio-item"> <span class="bio-year">2022–<script>document.write(new Date().getFullYear())</script></span> <a target="_blank" href="https://www.centrocreazionecultura.eu"> CENTRO CREAZIONE CULTURA </a> ∙ Active Member  ∙ Florence ∙ IT </div>
        <div class="bio-item"> <span class="bio-year">2023–2026</span><a target="_blank" href="https://www.kolet.re">KOLET</a> ∙ Board Member ∙ Reunion island ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2023</span> <span><a target="_blank" href="https://www.lapossession.re">LA POSSESSION CITY</a> ∙ Deputy General Director ∙ Citizen Flourishing dept. ∙ led Culture & Local Services, Sports, Social Centre, Inclusion, Housing; team of 170+ agents; reporting to Mayor & elected officials (Jul–Aug) ∙ La Possession ∙ RE</span></div>
        <div class="bio-item"><span class="bio-year">2020–2022</span><span><a target="_blank" href="https://citedesarts.re"> TERRITO'ARTS</a> ∙ General Manager ∙ RE ∙ Cité des Arts de La Réunion & Centre Culturel Château Morange; budget 4M€; 50+ permanent staff; 170+ artistic residencies, 140+ shows, 140+ cultural mediation actions (2021); crisis management COVID-19; HR, legal, public procurement, union negotiations ∙ Saint-Denis ∙ RE</span></div>
        <div class="bio-item"><span class="bio-year">2013–2015</span><span><a target="_blank" href="https://www.rootsnroutes.eu/"> ROOTS &amp; ROUTES</a> Secretary General ∙ administered and represented the organization; coordinated international project development & grant applications; supported 12 partner countries; EU funds: Creative, Leonardo, Erasmus+, Youth in Action, Lifelong Learning... ∙ Rotterdam ∙ NL</span> </div>
      </div>
    </div>

    <div class="bio-category" id="bio-education">
      <h2>Education &amp; Certificates</h2>
      <div class="bio-items">
      
        <div class="bio-item"><span class="bio-year">2024-2025</span> Training ∙ TouchDesigner Class ∙ The Node Institute ∙ Berlin ∙ DE</div>
      
      
      
        <div class="bio-item"><span class="bio-year">2024</span> Training ∙ Pratiquer la Transe Cognitive Auto-Induite dans la perspective d'un usage professionnel dans le secteur artistique ∙ TranceLab Training Institute, La Plaine St. Denis ∙ FR</div>
        <div class="bio-item"><span class="bio-year">2022</span> Certificate ∙ Protocole MBCT Thérapie Cognitive basée sur la Pleine Conscience ∙ MBSR-MBCT Océan Indien ∙ RE</div>
        <div class="bio-item"><span class="bio-year">2021–2022</span> Certificate ∙ Conception et mise en œuvre de la stratégie dans un contexte de Changement ∙ HEC Paris / Fédération des EPL ∙ FR</div>
        <div class="bio-item"><span class="bio-year">2021</span> Permis d'exploitation (débit de boissons) ∙ SEF Marseille ∙ FR</div>
        <div class="bio-item"><span class="bio-year">2021</span> Licence d'entrepreneur de spectacles ∙ PLATESV-R-2021-009234</div>
        <div class="bio-item"><span class="bio-year">2015</span> Certificate ∙ Managing the Arts: Marketing for Cultural Organizations ∙ Leuphana University / Goethe-Institut ∙ 92/100, 5 ECTS (Feb–May)</div>
        <div class="bio-item"><span class="bio-year">2008–2010</span> Peer Coaching Certificate (Aug 2010) ∙ L'Académie Transnationale ROOTS &amp; ROUTES ∙ jfc Medienzentrum, Cologne ∙ DE ∙ 2-year EU Lifelong Learning Programme (Leonardo da Vinci) for coaches and talents, France, Germany, Hungary, Netherlands, United Kingdom</div>
        <div class="bio-item"><span class="bio-year">2000–2006</span> Engineering Degree (Information Systems &amp; Software Engineering) ∙ EPITA, Le Kremlin-Bicêtre ∙ FR</div>
        <div class="bio-item"><span class="bio-year">1994–1999</span> Diploma with honors (violin) ∙ Conservatoire National de Région de La Réunion (music theory &amp; violin)</div>
        <div class="bio-item"><span class="bio-year">1996</span> Summer academy ∙ Académie Nationale d'été "Musique au Grand Jardin", Joinville-en-Champagne ∙ FR</div>
        <div class="bio-item"><span class="bio-year">1985–1994</span> École municipale de musique, de danse et d'art dramatique, Saint-Denis ∙ RE</div>
      </div>
    </div>

  </div>

</section>
