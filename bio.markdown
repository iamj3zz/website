---
layout: portfolio
title: Bio
permalink: /bio/
bio_image: /assets/img/bio-photo.jpg
links:
  - title: CV
    url: /assets/cv.pdf
  - title: Press Kit
    url: /assets/press-kit.pdf
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
      <p>J3ZZ is an electronic music artist and audiovisual performer based in [City]. Their work explores the intersection of experimental sound design, live coding, and generative visuals, creating immersive performances that challenge conventional boundaries between music and digital art.</p>
      <p>With a background in both computer science and music composition, J3ZZ has developed a unique approach to live electronic music, incorporating real-time algorithmic processes and modular synthesis into performances that are both technically sophisticated and emotionally resonant.</p>
      <p>Their work has been featured at prestigious festivals and venues across Europe, North America, and Asia, including performances at Sonar Festival, MUTEK, and Atonal Berlin.</p>
    </div>
    <div class="bio-image">
      <img src="{{ page.bio_image }}" alt="{{ site.title }}">
    </div>
  </div>

  <!-- Categorized Lists Section -->
  <div class="bio-lists">

    <div class="bio-category">
      <h2>Live Performances</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2025</span> Winter Solstice Celebration, The Factory Amsterdam</div>
        <div class="bio-item"><span class="bio-year">2025</span>  Autumn Showcase, Electric Dreams London</div>
        <div class="bio-item"><span class="bio-year">2025</span>  Summer Night at Rooftop Sessions, NYC</div>
        <div class="bio-item"><span class="bio-year">2024</span>  Neon Nights Tokyo, Contact Tokyo</div>
        <div class="bio-item"><span class="bio-year">2024</span>  Atonal Festival, Kraftwerk Berlin</div>
        <div class="bio-item"><span class="bio-year">2024</span>  MUTEK Montreal, Place des Arts</div>
        <div class="bio-item"><span class="bio-year">2024</span>  Sonar Festival, Fira de Barcelona</div>
        <div class="bio-item"><span class="bio-year">2023</span>  MIRA Festival, Barcelona</div>
        <div class="bio-item"><span class="bio-year">2023</span>  Unsound Festival, ICE Krakow</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Installations - Exhibitions</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2024</span>  "Resonant Structures", Ars Electronica, Linz</div>
        <div class="bio-item"><span class="bio-year">2023</span>  "Digital Morphologies", ZKM Center for Art and Media, Karlsruhe</div>
        <div class="bio-item"><span class="bio-year">2023</span>  "Algorithmic Dreams", V2_ Lab for the Unstable Media, Rotterdam</div>
        <div class="bio-item"><span class="bio-year">2022</span>  "Sound Topologies", IRCAM Centre Pompidou, Paris</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Releases</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2024</span>  "Fragments", EP, Editions Mego</div>
        <div class="bio-item"><span class="bio-year">2023</span>  "Nocturnes", Album, Planet Mu Records</div>
        <div class="bio-item"><span class="bio-year">2022</span>  "Synthesis", EP, PAN</div>
        <div class="bio-item"><span class="bio-year">2021</span>  "Patterns", Album, Warp Records</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Teaching - Consulting</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2024</span>  Guest Lecturer, Berklee College of Music, Electronic Production and Design</div>
        <div class="bio-item"><span class="bio-year">2023</span>  Creative Coding Consultant, IRCAM Paris</div>
        <div class="bio-item"><span class="bio-year">2022</span>  Workshop Leader, Ableton Loop Conference, Berlin</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Workshops</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2024</span>  "Live Coding with Max/MSP", NODE Forum, Frankfurt</div>
        <div class="bio-item"><span class="bio-year">2024</span>  "Modular Synthesis and Generative Music", Sonar+D, Barcelona</div>
        <div class="bio-item"><span class="bio-year">2023</span>  "Audiovisual Performance Techniques", MUTEK Montreal</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Lectures</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2024</span>  "AI in Creative Sound Design", Transmediale, Berlin</div>
        <div class="bio-item"><span class="bio-year">2023</span>  "The Future of Live Electronic Music", Red Bull Music Academy, Tokyo</div>
        <div class="bio-item"><span class="bio-year">2023</span>  "Generative Systems in Performance", CTM Festival, Berlin</div>
      </div>
    </div>

    <div class="bio-category">
      <h2>Books & DVD</h2>
      <div class="bio-items">
        <div class="bio-item"><span class="bio-year">2023</span>  Contributing author, "The Cambridge Companion to Electronic Music"</div>
        <div class="bio-item"><span class="bio-year">2022</span>  "Live Coding Essentials" (Video Tutorial Series), published by Kadenze</div>
      </div>
    </div>

  </div>

</section>
