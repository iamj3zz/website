// Generate QR codes for bio gallery images (print only)
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.grid-item img.grid-image');

    if (!galleryImages.length) return;

    galleryImages.forEach(function(img) {
      const gridItem = img.closest('.grid-item');
      if (!gridItem) return;

      const qrContainer = gridItem.querySelector('.gallery-image-qr');
      if (!qrContainer) return;

      try {
        new QRCode(qrContainer, {
          text: img.src,
          width: 80,
          height: 80,
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
