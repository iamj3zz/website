// Generate QR codes for social media links in print version of contact page
document.addEventListener('DOMContentLoaded', function() {
  // Find all social print items
  var socialItems = document.querySelectorAll('.social-print-item');

  if (socialItems.length === 0) return;

  // Generate QR code for each social media link
  socialItems.forEach(function(item) {
    var url = item.getAttribute('data-url');
    var qrContainer = item.querySelector('.social-print-qr');

    if (url && qrContainer) {
      // Generate QR code
      new QRCode(qrContainer, {
        text: url,
        width: 40,
        height: 40,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
    }
  });
});
