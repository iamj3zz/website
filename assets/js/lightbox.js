// Lightbox functionality for image-grid and hero-image modules
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  let currentImages = [];
  let currentIndex = 0;
  let isSingleImage = false;

  // Find all lightbox-enabled images
  const gridImages = document.querySelectorAll('.grid-image[data-lightbox="true"]');
  const heroImages = document.querySelectorAll('.hero-image[data-lightbox="true"]');

  // Add click event to grid images (navigable gallery)
  // Listen on the parent .grid-item so the transparent ::after overlay forwards clicks
  gridImages.forEach((img, index) => {
    const container = img.closest('.grid-item') || img;
    container.addEventListener('click', function(e) {
      // Don't open lightbox when clicking download links or other interactive elements
      if (e.target.closest('a')) return;
      openLightbox(img, index, false);
    });
  });

  // Prevent lightbox from opening when clicking download/interactive links
  const downloadLinks = document.querySelectorAll('.gallery-download-link');
  downloadLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }, true); // Use capture phase to intercept before bubbling
  });

  // Add click event to hero images (single image, no navigation)
  // Listen on the parent .split-hero-image so the transparent ::after overlay forwards clicks
  heroImages.forEach((img) => {
    const container = img.closest('.split-hero-image') || img;
    container.addEventListener('click', function() {
      openLightbox(img, 0, true);
    });
  });

  function openLightbox(img, index, single) {
    isSingleImage = single;

    if (single) {
      currentImages = [img];
      currentIndex = 0;
    } else {
      // Get all images in the same grid
      const grid = img.closest('.image-grid');
      currentImages = Array.from(grid.querySelectorAll('.grid-image[data-lightbox="true"]'));
      currentIndex = currentImages.indexOf(img);
    }

    showImage(currentIndex);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  function showImage(index) {
    if (index < 0 || index >= currentImages.length) return;

    currentIndex = index;
    lightboxImg.src = currentImages[index].src;
    lightboxImg.alt = currentImages[index].alt;

    // Update caption (XSS-safe using textContent)
    const caption = currentImages[index].getAttribute('data-caption') || '';

    // Clear previous caption content
    lightboxCaption.innerHTML = '';

    if (caption && caption.trim() !== '') {
      const captionText = document.createElement('p');
      captionText.className = 'caption-text';
      captionText.textContent = caption;
      lightboxCaption.appendChild(captionText);
    }

    // Show counter only for multi-image galleries
    if (!isSingleImage) {
      const counter = `Image ${index + 1} of ${currentImages.length}`;
      const captionCounter = document.createElement('p');
      captionCounter.className = 'caption-counter';
      captionCounter.textContent = counter;
      lightboxCaption.appendChild(captionCounter);
    }

    // Show/hide nav buttons
    if (isSingleImage) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = '';
      nextBtn.style.display = '';
      prevBtn.disabled = (index === 0);
      nextBtn.disabled = (index === currentImages.length - 1);
    }
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    currentImages = [];
    currentIndex = 0;
    isSingleImage = false;
  }

  // Prevent right-click save on lightbox image
  lightboxImg.addEventListener('contextmenu', function(e) { e.preventDefault(); });

  // Close button
  closeBtn.addEventListener('click', closeLightbox);

  // Click outside image to close
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Navigation buttons
  prevBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentIndex > 0) {
      showImage(currentIndex - 1);
    }
  });

  nextBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentIndex < currentImages.length - 1) {
      showImage(currentIndex + 1);
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;

    switch(e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        if (!isSingleImage && currentIndex > 0) {
          showImage(currentIndex - 1);
        }
        break;
      case 'ArrowRight':
        if (!isSingleImage && currentIndex < currentImages.length - 1) {
          showImage(currentIndex + 1);
        }
        break;
    }
  });
  });
})();
