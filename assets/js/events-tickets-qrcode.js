// Generate QR codes for event ticket links in print
document.addEventListener('DOMContentLoaded', function() {
  // Only run on events page
  if (!document.querySelector('.events-section')) {
    return;
  }

  // Find all ticket QR code placeholders
  var ticketQRs = document.querySelectorAll('.event-ticket-qr');

  ticketQRs.forEach(function(qrContainer) {
    // Get the ticket URL from data attribute
    var ticketUrl = qrContainer.getAttribute('data-ticket-url');

    if (!ticketUrl) return;

    // Generate QR code
    new QRCode(qrContainer, {
      text: ticketUrl,
      width: 35,
      height: 35,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  });
});
