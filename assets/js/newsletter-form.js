// Newsletter Form Validation
// Validates all required fields before submission to Mailchimp

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('mc-embedded-subscribe-form');

  if (!form) {
    return; // Exit if form not found on page
  }

  // Add custom validation on form submission
  form.addEventListener('submit', function(event) {
    // Clear any previous error messages
    clearAllErrors();

    let isValid = true;

    // Validate Email
    const emailField = form.querySelector('input[name="EMAIL"]');
    if (!validateEmail(emailField)) {
      isValid = false;
    }

    // Validate Phone
    const phoneField = form.querySelector('input[name="PHONE"]');
    if (!validatePhone(phoneField)) {
      isValid = false;
    }

    // Validate First Name
    const fnameField = form.querySelector('input[name="FNAME"]');
    if (!validateRequired(fnameField, 'First Name')) {
      isValid = false;
    }

    // Validate Last Name
    const lnameField = form.querySelector('input[name="LNAME"]');
    if (!validateRequired(lnameField, 'Last Name')) {
      isValid = false;
    }

    // Validate Country
    const countryField = form.querySelector('input[name="COUNTRY"]');
    if (!validateRequired(countryField, 'Country')) {
      isValid = false;
    }

    // Validate Postal Code
    const postcodeField = form.querySelector('input[name="POSTCODE"]');
    if (!validateRequired(postcodeField, 'Postal Code')) {
      isValid = false;
    }

    // Validate City
    const cityField = form.querySelector('input[name="CITY"]');
    if (!validateRequired(cityField, 'City')) {
      isValid = false;
    }

    // Validate GDPR Consent Checkbox
    const consentField = form.querySelector('input[name="CONSENT"]');
    if (!validateConsent(consentField)) {
      isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
      // Scroll to first error
      const firstError = form.querySelector('.form-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  // Validation Functions

  function validateRequired(field, fieldName) {
    if (!field) return true;

    const value = field.value.trim();
    if (value === '') {
      showError(field, `${fieldName} is required.`);
      return false;
    }
    return true;
  }

  function validateEmail(field) {
    if (!field) return true;

    const value = field.value.trim();
    if (value === '') {
      showError(field, 'Email address is required.');
      return false;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      showError(field, 'Please enter a valid email address.');
      return false;
    }

    return true;
  }

  function validatePhone(field) {
    if (!field) return true;

    const value = field.value.trim();
    if (value === '') {
      showError(field, 'Mobile number is required.');
      return false;
    }

    // International phone format validation: +[country code][number]
    const phonePattern = /^\+[1-9]\d{1,14}$/;
    if (!phonePattern.test(value)) {
      showError(field, 'Please enter phone in international format (e.g., +33612345678).');
      return false;
    }

    return true;
  }

  function validateConsent(field) {
    if (!field) return true;

    if (!field.checked) {
      showError(field, 'You must consent to receive newsletters to subscribe.');
      return false;
    }

    return true;
  }

  // Error Display Functions

  function showError(field, message) {
    const formRow = field.closest('.form-row');
    if (!formRow) return;

    // Add error class to field
    field.classList.add('form-input-error');

    // Create and insert error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;

    // Insert error message after the field or checkbox label
    if (field.type === 'checkbox') {
      const label = formRow.querySelector('.form-checkbox-label');
      if (label) {
        label.after(errorDiv);
      }
    } else {
      const helpText = formRow.querySelector('.form-help-text');
      if (helpText) {
        helpText.after(errorDiv);
      } else {
        field.after(errorDiv);
      }
    }
  }

  function clearAllErrors() {
    // Remove error classes from all fields
    const errorFields = form.querySelectorAll('.form-input-error');
    errorFields.forEach(field => {
      field.classList.remove('form-input-error');
    });

    // Remove all error messages
    const errorMessages = form.querySelectorAll('.form-error');
    errorMessages.forEach(msg => {
      msg.remove();
    });
  }

  // Real-time validation: Clear error when user starts typing/changes field
  const allInputs = form.querySelectorAll('input[required]');
  allInputs.forEach(input => {
    input.addEventListener('input', function() {
      if (this.classList.contains('form-input-error')) {
        this.classList.remove('form-input-error');
        const formRow = this.closest('.form-row');
        if (formRow) {
          const errorMsg = formRow.querySelector('.form-error');
          if (errorMsg) {
            errorMsg.remove();
          }
        }
      }
    });

    // For checkboxes, listen to 'change' event
    if (input.type === 'checkbox') {
      input.addEventListener('change', function() {
        if (this.classList.contains('form-input-error')) {
          this.classList.remove('form-input-error');
          const formRow = this.closest('.form-row');
          if (formRow) {
            const errorMsg = formRow.querySelector('.form-error');
            if (errorMsg) {
              errorMsg.remove();
            }
          }
        }
      });
    }
  });
});
