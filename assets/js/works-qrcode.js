// Generate QR codes for printable works page
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
  // Only generate QR codes on works page
  if (!document.querySelector('.works-list-print')) {
    return;
  }

  // Find all work rows with QR code containers
  const workRows = document.querySelectorAll('.works-list-row[data-work-url]');

  workRows.forEach(function(row) {
    const workUrl = row.getAttribute('data-work-url');
    const qrContainer = row.querySelector('.works-qr-code');

    if (workUrl && qrContainer) {
      // Generate QR code
      new QRCode(qrContainer, {
        text: workUrl,
        width: 70,
        height: 70,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
    }
  });
  });
})();
