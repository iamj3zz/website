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

    <div class="bio-category">
      <h2>Installations &amp; Exhibitions</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2024</span> Vibrotanica (work in progress) — TBD</div>
        <div class="bio-item"><span class="bio-year">2020</span> IRIS (Reflectio) — Csokonai Theatre, Debrecen, Hungary — Lighthouse Art 2020 (Aug 18–22)</div>
        <div class="bio-item"><span class="bio-year">2018</span> Music Maker #2 — Château Éphémère, Carrières-sous-Poissy, France</div>
        <div class="bio-item"><span class="bio-year">2016</span> Unbalanced Forces — Lábor Gallery, Budapest, Hungary (premiere Feb 13, 19:00)</div>
        <div class="bio-item"><span class="bio-year">2014</span> Park in Progress — Municipal Gardens / ARTos Foundation, Nicosia, Cyprus — Pépinières Européennes pour Jeunes Artistes, 11th edition (Sep 29)</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Live Performances &amp; Festivals</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2025</span> Racines &amp; Résonances — Villa de la Région, La Réunion</div>
        <div class="bio-item"><span class="bio-year">2024</span> Racines &amp; Résonances — Institut Français de Budapest, Hungary</div>
        <div class="bio-item"><span class="bio-year">2024</span> Racines &amp; Résonances — Sciences Po Paris, France</div>
        <div class="bio-item"><span class="bio-year">2024</span> Racines &amp; Résonances — Institut Français de Maurice, Mauritius</div>
        <div class="bio-item"><span class="bio-year">2023</span> Racines &amp; Résonances — Nuit des Musiques Expérimentales #5, Lespas, La Réunion (Sep 22)</div>
        <div class="bio-item"><span class="bio-year">2023</span> Racines &amp; Résonances — Brain Bar Festival, Budapest, Hungary</div>
        <div class="bio-item"><span class="bio-year">2023</span> Racines &amp; Résonances — Institut Français de Budapest, Hungary</div>
        <div class="bio-item"><span class="bio-year">2020</span> Racines &amp; Résonances — Széllkapu, Millenáris, Budapest, Hungary (Oct 18)</div>
        <div class="bio-item"><span class="bio-year">2020</span> Racines &amp; Résonances – Under the stars — Lóvasút, Budapest, Hungary (Aug 13)</div>
        <div class="bio-item"><span class="bio-year">2020</span> Racines &amp; Résonances feat. Grecsó Zoltán &amp; Bujdosó Anna — Lóvasút, Budapest, Hungary (Feb 7)</div>
        <div class="bio-item"><span class="bio-year">2020</span> Volt Festival — Sopron, Hungary</div>
        <div class="bio-item"><span class="bio-year">2019</span> Szabi híd — Budapest, Hungary (×2)</div>
        <div class="bio-item"><span class="bio-year">2019</span> Bankito Festival — Hungary</div>
        <div class="bio-item"><span class="bio-year">2019</span> Zengeto Festival — Hungary</div>
        <div class="bio-item"><span class="bio-year">2018</span> Ördögkatlan — Hungary</div>
        <div class="bio-item"><span class="bio-year">2016</span> Sziget — Budapest, Hungary</div>
        <div class="bio-item"><span class="bio-year">2014</span> Sziget — Budapest, Hungary</div>
        <div class="bio-item"><span class="bio-year">2013</span> Wazemmes l'accordéon — Lille, France</div>
        <div class="bio-item"><span class="bio-year">2013</span> Zénith — Lille, France (opening for Salif Keita during Wazemmes l'accordéon)</div>
        <div class="bio-item"><span class="bio-year">2013</span> Festival au Désert — Florence, Italy</div>
        <div class="bio-item"><span class="bio-year">2012</span> Sziget — Budapest, Hungary</div>
        <div class="bio-item"><span class="bio-year">2012</span> Fabbrica Europa — Florence, Italy</div>
        <div class="bio-item"><span class="bio-year">2011</span> Festival au Désert — Florence, Italy</div>
        <div class="bio-item"><span class="bio-year">2011</span> Fabbrica Europa — Florence, Italy</div>
        <div class="bio-item"><span class="bio-year">2011</span> Hanna Hanna — Komárom, Hungary</div>
        <div class="bio-item"><span class="bio-year">2011</span> Sofa — Berlin, Germany</div>
        <div class="bio-item"><span class="bio-year">2013–2017</span> <a href="/works/2013-09-12-sur-le-fil/">Sur le fil — solo violin improvisation show (5 performances: Florence, Budapest, Singapore)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-12-11-ebb-flow-debris/">ebb flow + debris (6 humans) — Monofog + group, Müszi Budapest (violinist)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-10-15-miss-god/">Miss God &amp; J3ZZ — Szimpla Kert, Budapest (violinist)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-04-18-modeo/">Modeo — Trafó ELECTRIFY Vol. 7 &amp; Nagyvásártelep, Budapest (violinist)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-01-01-massolit-series/">Massolit Series — Massolit Books &amp; Café, Budapest — 7-concert improvisation series (violinist, founder)</a></div>
        <div class="bio-item"><span class="bio-year">2013–2017</span> Buddha Bar Budapest — Resident live musician (violinist), Budapest, Hungary</div>
        <div class="bio-item"><span class="bio-year">2011–2020</span> J3ZZ — Pluridisciplinary performances (musician, composer)</div>
        <div class="bio-item"><span class="bio-year">2011–2020</span> Hybris — Pluridisciplinary performances (musician, composer)</div>
        <div class="bio-item"><span class="bio-year">2010–2011</span> Morzsa Records — Live performer</div>
        <div class="bio-item"><span class="bio-year">2012–2013</span> Azalai — Itinerant cultural laboratory; violinist and core ensemble member — with Aly Keita (Mali), Kandia Kora (Guinea), Moh! Kouyaté (Guinea), Minyeshu (Ethiopia), Hilaire Penda (Cameroon), Dimitri Grechi Espinoza (Italy), Ebou Gaye Mada (Gambia), Istvan Cik (Serbia), Károly Féher (Hungary)</div>
        <div class="bio-item"><span class="bio-year">2010–2012</span> Iparkutya — Balkan free jazz ensemble — violinist</div>
        <div class="bio-item"><span class="bio-year">2009–2020</span> Willany Léo — Improvisative Dance Theatre (dir. Zoltán Grecsó) — improvisation musician</div>
        <div class="bio-item"><span class="bio-year">2008+</span> Tartit, Tadalat — Tuareg/Tamachek music — collaborative musician</div>
        <div class="bio-item"><span class="bio-year">2008+</span> Samba Touré — Songhai blues (Mali) — collaborative musician</div>
        <div class="bio-item"><span class="bio-year">2008–2010</span> The Last Drops — electronic musician</div>    
        <div class="bio-item"><span class="bio-year">2011</span> Eutropia — ROOTS &amp; ROUTES — 9-country European tour (violinist, composer, coach)</div>
        <div class="bio-item"><span class="bio-year">2011</span> Summer Suite (performer)</div>
        <div class="bio-item"><span class="bio-year">2009–2011</span> Reality in Disguise — ROOTS &amp; ROUTES Art'n'Go — Remscheid &amp; Heek, Germany; Florence, Italy; Budapest, Hungary (violinist, composer, co-creator)</div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2011-01-01-talking-hearts/">Talking heArts — ROOTS &amp; ROUTES — Florence, Budapest, Bucharest (artistic director, violinist, improvisation coach)</a></div>
        <div class="bio-item"><span class="bio-year">2019</span> Mellettük — Grecsó Krisztián &amp; Grecsó Zoltán (performer)</div>
        <div class="bio-item"><span class="bio-year">2019</span> ART-RAVALÓ — Szubjektív Értékek Alapítvány — social art project (musician, coach)</div>                
      </div>
    </div>

    <div class="bio-category">
      <h2>Dance &amp; Theatre</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2019</span> SUPREMA — Tímea Sebestyén — MU Theatre, Budapest, Hungary (composer, performer) (May 3)</div>
        <div class="bio-item"><span class="bio-year">2016</span> Home Base — Noémi Kulcsár — Budapest, Hungary (composer, sound designer)</div>
        <div class="bio-item"><span class="bio-year">2014</span> What happens when you touch it — EnKnapGroup — Ljubljana, Slovenia (composer, performer)</div>
        <div class="bio-item"><span class="bio-year">2011</span> Touch me not — Zoltán Grecsó — Budapest, Hungary / Zagreb, Croatia (composer)</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Film &amp; Audiovisual</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-01-03-medicontur-educational-film/">Medicontur educational film (composer, producer, sound designer)</a></div>
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-01-01-highlights-of-hungary/">Highlights of Hungary (composer, producer, sound designer)</a></div>
        <div class="bio-item"><span class="bio-year">2019–2020</span> <a href="/works/2018-01-01-uncensored/">Uncensored — Caviar &amp; Bull (composer, sound designer)</a></div>
        <div class="bio-item"><span class="bio-year">2019</span> <a href="/works/2019-01-02-abbott-harmony-fragile-life/">Abbott "Harmony" &amp; "a Fragile Life" — Business Influencer Campaign (performer)</a></div>
        <div class="bio-item"><span class="bio-year">2017</span> <a href="/works/2016-01-01-petra/">Petra — Dr. Philip Lewis, feature film (composer)</a></div>
        <div class="bio-item"><span class="bio-year">2017</span> <a href="/works/2017-01-01-grantraeet/">Grantræet — Amalie Halsey, short film (composer)</a></div>
        <div class="bio-item"><span class="bio-year">2017</span> <a href="/works/2017-01-01-building-up-creativity/">Building up Creativity — Judit Pétervári, dance short (composer)</a></div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2016-01-02-home-base-trailers/">Home Base 01 / 02 / 03 trailers — Noémi Kulcsár (composer)</a></div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2016-01-03-flying-istanbul-trailer/">Flying Istanbul trailer — Olga Pavlenko (sound designer)</a></div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2014-01-01-travel-buddy/">Travel Buddy — Declan Hannigan, short film (composer, producer)</a></div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2014-01-02-what-happens-trailer/">What happens when you touch it trailer — EnKnapGroup (composer)</a></div>
        <div class="bio-item"><span class="bio-year">2013–2020</span> <a href="/works/2013-01-01-flying-istanbul/">Flying Istanbul — Olga Pavlenko, animation short (composer, sound designer)</a></div>
        <div class="bio-item"><span class="bio-year">2013</span> <a href="/works/2013-01-02-children-tell-istanbul/">Children tell Istanbul — Olga Pavlenko, documentary (composer)</a></div>
        <div class="bio-item"><span class="bio-year">2013</span> <a href="/works/2013-01-01-1000-and-1-realities/">1000 and 1 Realities — Olga Pavlenko, jingle (sound designer)</a></div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-best-friends-wifes-lover/">Best Friend's Wife's Lover — Declan Hannigan, short film (composer)</a></div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-far-point/">Far Point — Lorenzo Ciacciavicca, short film (composer)</a></div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-to-be-told/">To be told — Lorenzo Ciacciavicca, documentary (composer, performer, producer, sound designer, sound editor)</a></div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-02-urban-media-festival-trailers/">Urban Media Festival — opening and closing trailers (composer, producer)</a></div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-01-ouverture/">Ouverture — Lorenzo Ciacciavicca, short film (composer, performer)</a></div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-01-fission/">Fission — Ana Maria Staicu &amp; Paris Tume, dance video (composer, producer)</a></div>
        <div class="bio-item"><span class="bio-year">2010</span> <a href="/works/2010-01-01-ricordi-di-cosa-profuma-la-terra/">Ricordi di cosa profuma la terra — Olga Pavlenko, animation short (composer, performer)</a></div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Releases</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2021</span> <a href="/works/2021-01-01-ex-nihilo-3/">Ex Nihilo 3 — single</a></div>
        <div class="bio-item"><span class="bio-year">2021</span> <a href="/works/2021-01-02-ex-nihilo-2/">Ex Nihilo 2 — single</a></div>
        <div class="bio-item"><span class="bio-year">2021</span> <a href="/works/2021-01-03-ex-nihilo-1/">Ex Nihilo 1 — single</a></div>
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-01-01-stereo-woods/">Stereo Woods — single</a></div>
        <div class="bio-item"><span class="bio-year">2020</span> <a href="/works/2020-01-02-a-drop-in-the-ocean/">A Drop in the Ocean — album</a></div>
        <div class="bio-item"><span class="bio-year">2019</span> <a href="/works/2019-01-01-suprema-original-soundtrack/">SUPREMA (Original Soundtrack) — album</a></div>
        <div class="bio-item"><span class="bio-year">2017</span> <a href="/works/2017-01-01-indigo-theory/">Rainy Day — Indigo Theory — single (violin)</a></div>
        <div class="bio-item"><span class="bio-year">2016</span> <a href="/works/2016-01-01-all-the-promises/">All the Promises — Michael Kentish — album (violin)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-09-10-massolit-series-live/">MASSOLIT SERIES (Live) — album (violinist, founder, producer)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-09-12-sur-le-fil-live-at-frau-frisor/">SUR LE FIL (Live at Frau Frisor) — single (violinist, producer)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-09-12-sur-le-fil-live-at-fkse/">SUR LE FIL (Live at FKSE) — single (violinist, producer)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-01-01-new-beginnings/">New Beginnings — Michael Kentish — album (violin)</a></div>
        <div class="bio-item"><span class="bio-year">2015</span> <a href="/works/2015-01-02-so-proud-of-you/">So Proud of You — Jordi Abel — single (violin)</a></div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2014-01-01-promised-myself-acoustic/">Promised myself (Acoustic) — MC KiKo — single (violin)</a></div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-01-polish-graffiti/">Polish Graffiti — Morzsa Records — album (violin)</a></div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Residencies</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2025</span> <a href="/works/2025-01-01-citta-della-pieve-residency/">Citta Della Pieve, Italy</a></div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-01-02-kerveguen-residency/">Kerveguen, Saint-Pierre, Réunion</a></div>
        <div class="bio-item"><span class="bio-year">2023</span> <a href="/works/2023-01-01-cite-des-arts-residency/">Cité des arts, Saint-Denis, Réunion</a></div>
        <div class="bio-item"><span class="bio-year">2018</span> <a href="/works/2018-01-01-music-maker-2/">Music Maker #2 — Château Éphémère, Carrières-sous-Poissy, France</a></div>
        <div class="bio-item"><span class="bio-year">2014</span> <a href="/works/2014-09-29-park-in-progress/">Park in Progress — Nicosia, Cyprus</a></div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2011-01-01-talking-hearts/">Talking heArts — Florence, Budapest, Bucharest (artistic director, violinist)</a></div>
        <div class="bio-item"><span class="bio-year">2012</span> <a href="/works/2012-01-01-to-be-told/">To be told — Grundtvig Workshop, Florence (residency participant + documentary sound)</a></div>
        <div class="bio-item"><span class="bio-year">2011</span> <a href="/works/2011-01-01-eutropia/">Eutropia — Cologne, Germany / Florence, Italy</a></div>
        <div class="bio-item"><span class="bio-year">2009–2011</span> <a href="/works/2010-01-01-reality-in-disguise/">Reality in Disguise — Remscheid Academy &amp; Heek, Germany</a></div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Workshops</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2024</span> Biosonification — Institut Français de Budapest, Hungary</div>
        <div class="bio-item"><span class="bio-year">2020</span> Biosonification — Széllkapu, Millenáris, Budapest, Hungary (Oct 18)</div>
        <div class="bio-item"><span class="bio-year">2023</span> Biosonification — Salon du livre Réyoné, La Réunion</div>
        <div class="bio-item"><span class="bio-year">2023</span> Biosonification — Mizik O Marmay Festival, La Réunion</div>
        <div class="bio-item"><span class="bio-year">2023</span> Biosonification — Rdv aux jardins, La Réunion</div>
        <div class="bio-item"><span class="bio-year">2013–2014</span> Steps Ahead (junior coach professionalization) — Florence, Italy</div>
        <div class="bio-item"><span class="bio-year">2013</span> U-CARE (Urban Culture Against Racism) — Florence, Italy</div>
        <div class="bio-item"><span class="bio-year">2012</span> EUtropia — Lille, France</div>
        <div class="bio-item"><span class="bio-year">2011</span> Follow-Up — Budapest, Hungary / Barcelona, Spain</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Teaching &amp; Coaching</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2013–2015</span> Interdisciplinary improvisation coaching — ROOTS &amp; ROUTES projects across Europe</div>
        <div class="bio-item"><span class="bio-year">2008–2014</span> Improvisation research in theatre — exploring links between movement, musicians, and technicians</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Cultural Management &amp; Governance</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2023–present</span> Board Member — KOLET (www.kolet.re), La Réunion</div>
        <div class="bio-item"><span class="bio-year">2023</span> Deputy General Director, DGA Épanouissement du Citoyen (interim) — Mairie de La Possession, La Réunion — led culture, sports, social services, housing; team of ~170 agents (Jul–Aug)</div>
        <div class="bio-item"><span class="bio-year">2020–2022</span> Director General Delegate — Territo'Arts (SPL), La Réunion — directed Cité des Arts de La Réunion and Centre Culturel Château Morange; budget 4M€; 50 permanent staff; 170 artistic residencies in 2021 (Nov 2020–Apr 2022)</div>
        <div class="bio-item"><span class="bio-year">2013–2015</span> Secretary General — ROOTS &amp; ROUTES International Association, Rotterdam, Netherlands — 12 partner countries; EU funds: Creative, Leonardo, Erasmus+, Youth in Action (Jun 2013–Jun 2015)</div>
        <div class="bio-item"><span class="bio-year">2012–present</span> Active Member — CCC Centro Creazione Cultura, Florence, Italy (www.centrocreazionecultura.eu)</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Education &amp; Certificates</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2024</span> Training — Pratiquer la Transe Cognitive Auto-Induite dans la perspective d'un usage professionnel dans le secteur artistique — TranceLab Training Institute, La Plaine St. Denis, France (Nov 4–5 &amp; 18–19, 26h, Qualiopi)</div>
        <div class="bio-item"><span class="bio-year">2022</span> Certificate — Protocole MBCT Thérapie Cognitive basée sur la Pleine Conscience — MBSR-MBCT Océan Indien, La Réunion (Oct–Dec 2022, Qualiopi)</div>
        <div class="bio-item"><span class="bio-year">2021–2022</span> Certificate — Conception et mise en œuvre de la stratégie dans un contexte de Changement — HEC Paris / Fédération des EPL (Oct 2021–Apr 2022)</div>
        <div class="bio-item"><span class="bio-year">2021</span> Permis d'exploitation (débit de boissons) — SEF Marseille (Sep)</div>
        <div class="bio-item"><span class="bio-year">2021</span> Licence d'entrepreneur de spectacles — PLATESV-R-2021-009234 (Jul)</div>
        <div class="bio-item"><span class="bio-year">2015</span> Certificate — Managing the Arts: Marketing for Cultural Organizations — Leuphana University / Goethe-Institut — 92/100, 5 ECTS (Feb–May)</div>
        <div class="bio-item"><span class="bio-year">2008–2010</span> Peer Coaching Certificate (Aug 2010) — L'Académie Transnationale ROOTS &amp; ROUTES — jfc Medienzentrum, Cologne, Germany — 2-year EU Lifelong Learning Programme (Leonardo da Vinci) for coaches and talents, France, Germany, Hungary, Netherlands, United Kingdom</div>
        <div class="bio-item"><span class="bio-year">2000–2006</span> Engineering Degree (Information Systems &amp; Software Engineering) — EPITA, Le Kremlin-Bicêtre, France</div>
        <div class="bio-item"><span class="bio-year">1994–1999</span> Diploma with honors (violin) — Conservatoire National de Région de La Réunion (music theory &amp; violin)</div>
        <div class="bio-item"><span class="bio-year">1996</span> Summer academy — Académie Nationale d'été "Musique au Grand Jardin", Joinville-en-Champagne, France</div>
        <div class="bio-item"><span class="bio-year">1985–1994</span> École municipale de musique, de danse et d'art dramatique, Saint-Denis, La Réunion</div>
      </div>
    </div>

  </div>

</section>
