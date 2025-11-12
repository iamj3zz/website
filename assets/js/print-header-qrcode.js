// Generate QR code at top-left with URL for print
document.addEventListener('DOMContentLoaded', function() {
  // Get current page URL
  var currentUrl = window.location.href;

  // Try to find the best location for QR code
  var targetElement = null;

  // Check for section-level containers first
  if (document.querySelector('#works')) {
    targetElement = document.querySelector('#works');
  } else if (document.querySelector('.events-section')) {
    targetElement = document.querySelector('.events-section');
  } else if (document.querySelector('.bio-section')) {
    targetElement = document.querySelector('.bio-section');
  } else if (document.querySelector('.work-detail')) {
    targetElement = document.querySelector('.work-detail');
  } else if (document.querySelector('.contact-section')) {
    targetElement = document.querySelector('.contact-section');
  }

  if (!targetElement) return;

  // Create QR code container
  var qrContainer = document.createElement('div');
  qrContainer.className = 'page-title-qr-code';
  qrContainer.id = 'page-title-qr-code';

  // Create QR image wrapper
  var qrImageWrapper = document.createElement('div');
  qrImageWrapper.className = 'qr-image';
  qrContainer.appendChild(qrImageWrapper);

  // Create URL text element
  var urlText = document.createElement('div');
  urlText.className = 'qr-url';
  urlText.textContent = currentUrl;
  qrContainer.appendChild(urlText);

  // Insert at the beginning of the section
  targetElement.insertBefore(qrContainer, targetElement.firstChild);

  // Generate QR code in the image wrapper
  new QRCode(qrImageWrapper, {
    text: currentUrl,
    width: 70,
    height: 70,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M
  });
});
