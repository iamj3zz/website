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
        J3ZZ is a French artist & musician. He works in the transitional area between sound art, music, light, programming & science. His work unfolds through music releases, live performances & installations, especially. Through a phenomenological approach, his work is based both on experimenting and programming, always guided by concepts of time elasticity and as such located in the time-based media art field.
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
      <p>
        The artist's work is characterized by a deep exploration of the infinitesimal—the extremely small—and the imperceptible—that which is not easily seen or noticed—suggesting a focus on experiences that are often overlooked. By employing scientific techniques, he invites the audience to reconsider how we perceive sound, time, and artistic creation. This intermingling of concepts from art and science creates a rich, multi-layered experience that challenges listeners to engage with the complexities of sound in new and thought-provoking ways.
      </p>
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



====



He performed and exhibited his work in museums, festivals and art galleries world-wide such as MIRA Festival, ELEKTRA, Scopitone, Todays Art, ACT in South Korea, Day for Night, the Museum of Modern Art in Buenos Aires, the David Roberts Art Foundation, FRAC Paca, in particular.

He teaches generative art as guest professor in various art schools. He frequently leads specific workshops about creative strategies & techniques for Art & Design schools or Universities on topics like “noise as an input,” “parasites injections,” or “design your own data-based generative system.” He operates Structure Void, his self-funded studio, through which he teaches and provides workshops about Max related to generative art, data visualization & sonification, and spatialization, especially.

He teaches creative technology & new media art as guest professor in various art schools in Europe & outside.

He founded and leaded the now defunct art label Bordille Records with François Larini, and worked closely with & records for Canadian imprint Yatra Arts and was part of the selected artists for SHAPE Network.

2017, he founds and launches vøid label for editing and publishing his new works.

2020, he launches Structure Void intended to cover all his teaching, consulting and programming activities for companies, artists, institutions and individuals. Especially he teaches and leads an acclaimed course merging art + tech for french artists about Ableton Live and Max creative environments. He’s also the single Ableton & Max Certified Trainer in France.

2021, he starts new art projects and explorations involving sound, visuals & new aesthetics.

His sound work is released and distributed through yatra arts, void label, bordille records, elli records, eter lab.
