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
        <div class="bio-item"><span class="bio-year">2013–2017</span> Buddha Bar Budapest — Resident live musician (violinist), Budapest, Hungary</div>
        <div class="bio-item"><span class="bio-year">2011–2020</span> J3ZZ — Pluridisciplinary performances (musician, composer)</div>
        <div class="bio-item"><span class="bio-year">2011–2020</span> Hybris — Pluridisciplinary performances (musician, composer)</div>
        <div class="bio-item"><span class="bio-year">2010–2011</span> Morzsa Records — Live performer</div>
        <div class="bio-item"><span class="bio-year">2009–2020</span> Willany Léo — Improvisation musician, Budapest, Hungary</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Dance &amp; Theatre</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2019</span> SUPREMA — Tímea Sebestyén — MU Theatre, Budapest, Hungary (composer, performer) (May 3)</div>
        <div class="bio-item"><span class="bio-year">2019</span> Mellettük — Grecsó Krisztián &amp; Grecsó Zoltán (performer)</div>
        <div class="bio-item"><span class="bio-year">2019</span> ART-RAVALÓ — Szubjektív Értékek Alapítvány — social art project (musician, coach)</div>
        <div class="bio-item"><span class="bio-year">2016</span> Home Base — Noémi Kulcsár — Budapest, Hungary (composer, sound designer)</div>
        <div class="bio-item"><span class="bio-year">2014</span> What happens when you touch it — EnKnapGroup — Ljubljana, Slovenia (composer, performer)</div>
        <div class="bio-item"><span class="bio-year">2012–2013</span> Talking heArts — ROOTS &amp; ROUTES — European tour (composer, coach)</div>
        <div class="bio-item"><span class="bio-year">2011</span> Touch me not — Zoltán Grecsó — Budapest, Hungary / Zagreb, Croatia (composer)</div>
        <div class="bio-item"><span class="bio-year">2011</span> Eutropia — ROOTS &amp; ROUTES — 9-country European tour (violinist, composer, coach)</div>
        <div class="bio-item"><span class="bio-year">2011</span> Summer Suite (performer)</div>
        <div class="bio-item"><span class="bio-year">2010</span> Reality in Disguise — ROOTS &amp; ROUTES — Heek, Germany (musician)</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Film &amp; Audiovisual</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2020</span> Medicontur educational film (composer, producer, sound designer)</div>
        <div class="bio-item"><span class="bio-year">2020</span> Highlights of Hungary (composer, producer, sound designer)</div>
        <div class="bio-item"><span class="bio-year">2019–2020</span> Uncensored — Caviar &amp; Bull (composer, sound designer)</div>
        <div class="bio-item"><span class="bio-year">2019</span> Abbott "Harmony" &amp; "a Fragile Life" — Business Influencer Campaign (performer)</div>
        <div class="bio-item"><span class="bio-year">2017</span> Petra — Dr. Philip Lewis, feature film (composer)</div>
        <div class="bio-item"><span class="bio-year">2017</span> Grantræet — Amalie Halsey, short film (composer)</div>
        <div class="bio-item"><span class="bio-year">2017</span> Building up Creativity — Judit Pétervári, dance short (composer)</div>
        <div class="bio-item"><span class="bio-year">2016</span> Home Base 01 / 02 / 03 trailers — Noémi Kulcsár (composer)</div>
        <div class="bio-item"><span class="bio-year">2016</span> Flying Istanbul trailer — Olga Pavlenko (sound designer)</div>
        <div class="bio-item"><span class="bio-year">2014</span> Travel Buddy — Declan Hannigan, short film (composer, producer)</div>
        <div class="bio-item"><span class="bio-year">2014</span> What happens when you touch it trailer — EnKnapGroup (composer)</div>
        <div class="bio-item"><span class="bio-year">2013–2020</span> Flying Istanbul — Olga Pavlenko, animation short (composer, sound designer)</div>
        <div class="bio-item"><span class="bio-year">2013</span> Children tell Istanbul — Olga Pavlenko, documentary (composer)</div>
        <div class="bio-item"><span class="bio-year">2013</span> 1000 and 1 Realities — Olga Pavlenko, jingle (sound designer)</div>
        <div class="bio-item"><span class="bio-year">2012</span> Best Friend's Wife's Lover — Declan Hannigan, short film (composer)</div>
        <div class="bio-item"><span class="bio-year">2012</span> Far Point — Lorenzo Ciacciavicca, short film (composer)</div>
        <div class="bio-item"><span class="bio-year">2012</span> To be told — Lorenzo Ciacciavicca, documentary (composer)</div>
        <div class="bio-item"><span class="bio-year">2011</span> Urban Media Festival — opening and closing trailers (composer, producer)</div>
        <div class="bio-item"><span class="bio-year">2011</span> Ouverture — Lorenzo Ciacciavicca, short film (composer, performer)</div>
        <div class="bio-item"><span class="bio-year">2011</span> Fission — Ana Maria Staicu &amp; Paris Tume, dance video (composer, producer)</div>
        <div class="bio-item"><span class="bio-year">2010</span> Ricordi di cosa profuma la terra — Olga Pavlenko, animation short (composer, performer)</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Releases</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2021</span> Ex Nihilo 3 — single</div>
        <div class="bio-item"><span class="bio-year">2021</span> Ex Nihilo 2 — single</div>
        <div class="bio-item"><span class="bio-year">2021</span> Ex Nihilo 1 — single</div>
        <div class="bio-item"><span class="bio-year">2020</span> Stereo Woods — single</div>
        <div class="bio-item"><span class="bio-year">2020</span> A Drop in the Ocean — album</div>
        <div class="bio-item"><span class="bio-year">2019</span> SUPREMA (Original Soundtrack) — album</div>
        <div class="bio-item"><span class="bio-year">2017</span> Rainy Day — Indigo Theory — single (violin)</div>
        <div class="bio-item"><span class="bio-year">2016</span> All the Promises — Michael Kentish — album (violin)</div>
        <div class="bio-item"><span class="bio-year">2015</span> New Beginnings — Michael Kentish — album (violin)</div>
        <div class="bio-item"><span class="bio-year">2015</span> So Proud of You — Jordi Abel — single (violin)</div>
        <div class="bio-item"><span class="bio-year">2014</span> Promised myself (Acoustic) — MC KiKo — single (violin)</div>
        <div class="bio-item"><span class="bio-year">2011</span> Polish Graffiti — Morzsa Records — album (violin)</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Collaborations</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2012–2013</span> Azalai — Itinerant cultural laboratory; violinist and core ensemble member — with Aly Keita (Mali), Kandia Kora (Guinea), Moh! Kouyaté (Guinea), Minyeshu (Ethiopia), Hilaire Penda (Cameroon), Dimitri Grechi Espinoza (Italy), Ebou Gaye Mada (Gambia), Istvan Cik (Serbia), Károly Féher (Hungary)</div>
        <div class="bio-item"><span class="bio-year">2010–2012</span> Iparkutya — Balkan free jazz ensemble — violinist</div>
        <div class="bio-item"><span class="bio-year">2009–2020</span> Willany Léo — Improvisative Dance Theatre (dir. Zoltán Grecsó) — improvisation musician</div>
        <div class="bio-item"><span class="bio-year">2008+</span> Tartit, Tadalat — Tuareg/Tamachek music — collaborative musician</div>
        <div class="bio-item"><span class="bio-year">2008+</span> Samba Touré — Songhai blues (Mali) — collaborative musician</div>
        <div class="bio-item"><span class="bio-year">2008–2010</span> The Last Drops — electronic musician</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Residencies</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2025</span> Citta Della Pieve, Italy</div>
        <div class="bio-item"><span class="bio-year">2023</span> Kerveguen, Saint-Pierre, Réunion</div>
        <div class="bio-item"><span class="bio-year">2023</span> Cité des arts, Saint-Denis, Réunion</div>                      
        <div class="bio-item"><span class="bio-year">2018</span> Music Maker #2 — Château Éphémère, Carrières-sous-Poissy, France</div>
        <div class="bio-item"><span class="bio-year">2014</span> Park in Progress — Nicosia, Cyprus</div>
        <div class="bio-item"><span class="bio-year">2012</span> Talking heArts — Barcelona, Budapest, Bucharest, Florence</div>
        <div class="bio-item"><span class="bio-year">2012</span> To be told — Florence, Italy</div>
        <div class="bio-item"><span class="bio-year">2011</span> Eutropia — Cologne, Germany / Florence, Italy</div>
        <div class="bio-item"><span class="bio-year">2010</span> Reality in Disguise — Heek, Germany</div>
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
        <div class="bio-item"><span class="bio-year">2010</span> Peer Coaching Certificate — jfc Medienzentrum, Cologne, Germany — ROOTS &amp; ROUTES international programme (Aug)</div>
        <div class="bio-item"><span class="bio-year">2000–2006</span> Engineering Degree (Information Systems &amp; Software Engineering) — EPITA, Le Kremlin-Bicêtre, France</div>
        <div class="bio-item"><span class="bio-year">1994–1999</span> Diploma with honors (violin) — Conservatoire National de Région de La Réunion (music theory &amp; violin)</div>
        <div class="bio-item"><span class="bio-year">1996</span> Summer academy — Académie Nationale d'été "Musique au Grand Jardin", Joinville-en-Champagne, France</div>
        <div class="bio-item"><span class="bio-year">1985–1994</span> École municipale de musique, de danse et d'art dramatique, Saint-Denis, La Réunion</div>
      </div>
    </div>

  </div>

</section>
