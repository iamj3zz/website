// Newsletter Form Validation
// Validates all required fields before submission to Mailchimp

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('mc-embedded-subscribe-form');

  if (!form) {
    return; // Exit if form not found on page
  }

  // Validation Functions

  function validateEmail(field) {
    if (!field) return true;

    const value = field.value.trim();
    if (value === '') {
      showError(field, 'Email address is required.');
      return false;
    }

    // Enhanced RFC-compliant email validation
    const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(value)) {
      showError(field, 'Please enter a valid email address (e.g., user@example.com).');
      return false;
    }

    // Check for consecutive dots
    if (value.includes('..')) {
      showError(field, 'Email address cannot contain consecutive dots.');
      return false;
    }

    // Check for double @ symbols
    if ((value.match(/@/g) || []).length !== 1) {
      showError(field, 'Email address must contain exactly one @ symbol.');
      return false;
    }

    // Check for common typos in popular domains
    const commonTypos = {
      'gmail.con': 'gmail.com',
      'gmail.co': 'gmail.com',
      'hotmial.com': 'hotmail.com',
      'hotmial.fr': 'hotmail.fr',
      'yahooo.com': 'yahoo.com',
      'outlok.com': 'outlook.com'
    };

    const domain = value.split('@')[1];
    if (commonTypos[domain]) {
      showError(field, `Did you mean ${value.split('@')[0]}@${commonTypos[domain]}?`);
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

    // Must start with + (international format required)
    if (!value.startsWith('+')) {
      showError(field, 'Phone number must start with + followed by country code (e.g., +33612345678).');
      return false;
    }

    // Remove the + for validation
    const phoneDigits = value.substring(1);

    // Check if all remaining characters are digits
    if (!/^\d+$/.test(phoneDigits)) {
      showError(field, 'Phone number can only contain + and digits (no spaces, dashes, or parentheses).');
      return false;
    }

    // Validate length: country code (1-3 digits) + number (6-12 digits) = 7-15 total
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      showError(field, 'Phone number must be between 7 and 15 digits (e.g., +33612345678).');
      return false;
    }

    // Country code must not start with 0
    if (phoneDigits[0] === '0') {
      showError(field, 'Country code cannot start with 0.');
      return false;
    }

    return true;
  }

  function validateName(field, fieldLabel) {
    if (!field) return true;

    const value = field.value.trim();
    if (value === '') {
      showError(field, `${fieldLabel} is required.`);
      return false;
    }

    // Length validation: 2-50 characters
    if (value.length < 2) {
      showError(field, `${fieldLabel} must be at least 2 characters.`);
      return false;
    }

    if (value.length > 50) {
      showError(field, `${fieldLabel} must be 50 characters or less.`);
      return false;
    }

    // Allow: letters (including international), hyphens, apostrophes, spaces
    const namePattern = /^[a-zA-ZÀ-ÿ\u00C0-\u017F\s'\-]+$/;

    if (!namePattern.test(value)) {
      showError(field, `${fieldLabel} can only contain letters, hyphens, apostrophes, and spaces.`);
      return false;
    }

    // Check for numbers
    if (/\d/.test(value)) {
      showError(field, `${fieldLabel} cannot contain numbers.`);
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
    const eventType = input.type === 'checkbox' ? 'change' : 'input';

    input.addEventListener(eventType, function() {
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
  });

  // Form submission validation
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
    if (!validateName(fnameField, 'First name')) {
      isValid = false;
    }

    // Validate Last Name
    const lnameField = form.querySelector('input[name="LNAME"]');
    if (!validateName(lnameField, 'Last name')) {
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
});
