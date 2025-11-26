// Generate QR codes for bio gallery images (print only)
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Find all gallery images
    const galleryImages = document.querySelectorAll('.grid-item img.grid-image');

    if (!galleryImages.length) return;

    galleryImages.forEach(function(img) {
      const gridItem = img.closest('.grid-item');
      if (!gridItem) return;

      // Get the full image URL
      const imageUrl = img.src;

      // Create QR code container
      const qrContainer = document.createElement('div');
      qrContainer.className = 'gallery-image-qr';

      // Create caption (use alt text or data-caption)
      const caption = img.getAttribute('data-caption') || img.alt;
      if (caption) {
        const captionEl = document.createElement('div');
        captionEl.className = 'gallery-image-caption';
        captionEl.textContent = caption;
        gridItem.appendChild(captionEl);
      }

      // Add QR code container
      gridItem.appendChild(qrContainer);

      // Create helper text
      const helperText = document.createElement('div');
      helperText.className = 'gallery-qr-helper';
      helperText.textContent = 'Scan to download';
      gridItem.appendChild(helperText);

      // Generate QR code with full image URL
      try {
        new QRCode(qrContainer, {
          text: imageUrl,
          width: 50,
          height: 50,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.M
        });
      } catch (error) {
        console.error('Error generating QR code for gallery image:', error);
      }
    });
  });
})();
