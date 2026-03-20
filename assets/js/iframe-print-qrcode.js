(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    var placeholders = document.querySelectorAll('.iframe-qr-placeholder');
    placeholders.forEach(function(el) {
      var url = el.getAttribute('data-url');
      if (!url) return;
      new QRCode(el, {
        text: url,
        width: 80,
        height: 80,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
    });
  });
})();
