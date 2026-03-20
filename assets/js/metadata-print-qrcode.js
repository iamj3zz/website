(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.metadata-qr-placeholder[data-url]').forEach(function (el) {
      var url = el.getAttribute('data-url');
      if (!url) return;
      new QRCode(el, {
        text: url,
        width: 50,
        height: 50,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
    });
  });
}());
