// Generate QR codes for bio sub-menu links in print
document.addEventListener('DOMContentLoaded', function() {
  // Only run on bio page
  if (!document.querySelector('.bio-links')) {
    return;
  }

  // Find all bio links
  var bioLinks = document.querySelectorAll('.bio-link');

  bioLinks.forEach(function(link) {
    // Get the full URL (relative or absolute)
    var linkUrl = link.getAttribute('href');

    // Convert relative URLs to absolute
    if (linkUrl && !linkUrl.startsWith('http')) {
      linkUrl = window.location.origin + linkUrl;
    }

    if (!linkUrl) return;

    // Create wrapper to hold link and QR code vertically
    var wrapper = document.createElement('div');
    wrapper.className = 'bio-link-wrapper';

    // Move link into wrapper
    var parent = link.parentNode;
    parent.insertBefore(wrapper, link);
    wrapper.appendChild(link);

    // Create QR code container
    var qrContainer = document.createElement('span');
    qrContainer.className = 'bio-link-qr';

    // Add QR container below the link
    wrapper.appendChild(qrContainer);

    // Generate small QR code
    new QRCode(qrContainer, {
      text: linkUrl,
      width: 40,
      height: 40,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  });
});
