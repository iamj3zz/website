// Generate QR codes for printable gallery page
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Only generate QR codes on gallery page
    if (!document.querySelector('.gallery-list-print')) {
      return;
    }

    // Find all artwork rows with QR code containers
    const artworkRows = document.querySelectorAll('.gallery-list-row[data-artwork-url]');

    artworkRows.forEach(function(row) {
      const artworkUrl = row.getAttribute('data-artwork-url');
      const qrContainer = row.querySelector('.gallery-qr-code');

      if (artworkUrl && qrContainer) {
        // Generate QR code
        new QRCode(qrContainer, {
          text: artworkUrl,
          width: 80,
          height: 80,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.M
        });
      }
    });
  });
})();
