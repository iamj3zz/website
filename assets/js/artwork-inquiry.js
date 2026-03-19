(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('artwork-inquiry-modal');
    const closeBtn = modal && modal.querySelector('.inquiry-modal-close');
    const overlay = modal && modal.querySelector('.inquiry-modal-overlay');
    const form = document.getElementById('artwork-inquiry-form');
    const triggers = document.querySelectorAll('[data-inquiry-trigger]');

    if (!modal || !triggers.length) return;

    // Store original page-level modal header values
    const modalTitle = document.getElementById('inquiry-modal-title');
    const modalMeta = modal.querySelector('.inquiry-modal-meta');
    const originalTitle = modalTitle ? modalTitle.textContent : '';
    const originalMeta = modalMeta ? modalMeta.textContent : '';

    // Track which trigger opened the modal (for focus restoration)
    let lastTrigger = null;

    function openModal(trigger) {
      lastTrigger = trigger;

      // If trigger has data attributes (grid context), populate modal fields dynamically
      const dataTitle = trigger.dataset.title;
      if (dataTitle) {
        const dataMedium = trigger.dataset.medium || '';
        const dataDimensions = trigger.dataset.dimensions || '';
        const dataYear = trigger.dataset.year || '';
        const dataUrl = trigger.dataset.url || window.location.href;

        if (modalTitle) modalTitle.textContent = dataTitle;
        if (modalMeta) {
          const parts = [dataMedium, dataDimensions, dataYear].filter(Boolean);
          modalMeta.textContent = parts.join(' · ');
        }

        const artworkField = form && form.querySelector('[name="artwork"]');
        if (artworkField) {
          const parts = [dataTitle, dataMedium, dataDimensions, dataYear].filter(Boolean);
          artworkField.value = parts.join(' — ');
        }

        const subjectField = form && form.querySelector('[name="_subject"]');
        if (subjectField) subjectField.value = 'Artwork Inquiry: ' + dataTitle;

        const urlField = document.getElementById('inquiry-artwork-url');
        if (urlField) urlField.value = dataUrl;

        const textarea = document.getElementById('inquiry-message');
        if (textarea) {
          const mediumPart = dataMedium ? ' (' + dataMedium + (dataDimensions ? ', ' + dataDimensions : '') + ')' : '';
          textarea.value = 'Hello,\n\nI am interested in acquiring "' + dataTitle + '"' + mediumPart + '.\n\nCould you please provide me with more information about:\n- The current availability and price\n- Shipping costs to my address (provided above)\n- Packaging and delivery conditions\n- Certificate of authenticity\n\nThank you,';
        }
      } else {
        // Detail page: restore defaults and set URL
        if (modalTitle) modalTitle.textContent = originalTitle;
        if (modalMeta) modalMeta.textContent = originalMeta;
        const urlField = document.getElementById('inquiry-artwork-url');
        if (urlField) urlField.value = window.location.href;
      }

      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      const firstInput = modal.querySelector('input, textarea');
      if (firstInput) firstInput.focus();
    }

    function closeModal() {
      modal.hidden = true;
      document.body.style.overflow = '';

      // Restore modal header to page defaults
      if (modalTitle) modalTitle.textContent = originalTitle;
      if (modalMeta) modalMeta.textContent = originalMeta;

      // Reset form state for next open
      if (form) {
        form.hidden = false;
        form.reset();
        form.querySelectorAll('.form-error').forEach(function (el) { el.remove(); });
        form.querySelectorAll('.form-input-error').forEach(function (el) { el.classList.remove('form-input-error'); });
      }
      const successMsg = document.getElementById('inquiry-success');
      const errorMsg = document.getElementById('inquiry-error');
      if (successMsg) successMsg.hidden = true;
      if (errorMsg) errorMsg.hidden = true;
      const submitBtn = form && form.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Inquiry';
      }
      if (lastTrigger) lastTrigger.focus();
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () { openModal(trigger); });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const firstNameField = form.querySelector('#inquiry-first-name');
        const lastNameField = form.querySelector('#inquiry-last-name');
        const emailField = form.querySelector('#inquiry-email');
        const phoneField = form.querySelector('#inquiry-phone');
        const streetField = form.querySelector('#inquiry-address-street');
        const cityField = form.querySelector('#inquiry-address-city');
        const zipField = form.querySelector('#inquiry-address-zip');
        const countryField = form.querySelector('#inquiry-address-country');
        const newsletterField = form.querySelector('#inquiry-newsletter');
        const messageField = form.querySelector('#inquiry-message');

        const firstName = firstNameField.value.trim();
        const lastName = lastNameField.value.trim();
        const email = emailField.value.trim();
        const phone = phoneField.value.trim();
        const street = streetField.value.trim();
        const city = cityField.value.trim();
        const zip = zipField.value.trim();
        const country = countryField.value.trim();
        const newsletter = newsletterField && newsletterField.checked;
        const message = messageField.value.trim();

        // Clear previous errors
        form.querySelectorAll('.form-error').forEach(function (el) { el.remove(); });
        form.querySelectorAll('.form-input-error').forEach(function (el) { el.classList.remove('form-input-error'); });

        let valid = true;

        function showFieldError(field, msg) {
          field.classList.add('form-input-error');
          const err = document.createElement('span');
          err.className = 'form-error';
          err.textContent = msg;
          field.closest('.form-row').appendChild(err);
          valid = false;
        }

        if (!firstName) showFieldError(firstNameField, 'First name is required.');
        if (!lastName) showFieldError(lastNameField, 'Last name is required.');

        const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
          showFieldError(emailField, 'Your email is required.');
        } else if (!emailPattern.test(email)) {
          showFieldError(emailField, 'Please enter a valid email address.');
        }

        // Phone: international format
        if (!phone) {
          showFieldError(phoneField, 'Your mobile number is required.');
        } else if (!phone.startsWith('+')) {
          showFieldError(phoneField, 'Phone must start with + followed by country code (e.g., +33612345678).');
        } else {
          const digits = phone.substring(1);
          if (!/^\d+$/.test(digits)) {
            showFieldError(phoneField, 'Phone can only contain + and digits.');
          } else if (digits.length < 7 || digits.length > 15) {
            showFieldError(phoneField, 'Phone must be between 7 and 15 digits.');
          } else if (digits[0] === '0') {
            showFieldError(phoneField, 'Country code cannot start with 0.');
          }
        }

        if (!street) showFieldError(streetField, 'Street address is required.');
        if (!city) showFieldError(cityField, 'City is required.');
        if (!zip) showFieldError(zipField, 'Postal code is required.');
        if (!country) showFieldError(countryField, 'Country is required.');

        if (!message) showFieldError(messageField, 'A message is required.');

        if (!valid) {
          const firstError = form.querySelector('.form-error');
          if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }

        const formData = new FormData(form);
        // Add newsletter value explicitly (checkboxes don't submit when unchecked)
        formData.set('newsletter', newsletter ? 'YES — please add to mailing list' : 'No');

        const successMsg = document.getElementById('inquiry-success');
        const errorMsg = document.getElementById('inquiry-error');
        const submitBtn = form.querySelector('[type="submit"]');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';

        fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        })
        .then(function (res) {
          if (res.ok) {
            form.hidden = true;
            if (successMsg) successMsg.hidden = false;
          } else {
            if (errorMsg) errorMsg.hidden = false;
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Inquiry';
          }
        })
        .catch(function () {
          if (errorMsg) errorMsg.hidden = false;
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Inquiry';
        });
      });
    }
  });
})();
