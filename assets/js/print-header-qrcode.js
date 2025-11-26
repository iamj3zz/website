// Generate QR code in header (left side) with URL for print
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
  // Get current page URL
  const currentUrl = window.location.href;

  // Find the site header
  const header = document.querySelector('.site-header');
  if (!header) return;

  // Create QR code container
  const qrContainer = document.createElement('div');
  qrContainer.className = 'page-title-qr-code';
  qrContainer.id = 'page-title-qr-code';

  // Create QR image wrapper
  const qrImageWrapper = document.createElement('div');
  qrImageWrapper.className = 'qr-image';
  qrContainer.appendChild(qrImageWrapper);

  // Create URL text element
  const urlText = document.createElement('div');
  urlText.className = 'qr-url';
  urlText.textContent = currentUrl;
  qrContainer.appendChild(urlText);

  // Insert at the beginning of the header (left side)
  header.insertBefore(qrContainer, header.firstChild);

  // Generate QR code in the image wrapper
  new QRCode(qrImageWrapper, {
    text: currentUrl,
    width: 50,
    height: 50,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M
  });
  });
})();
