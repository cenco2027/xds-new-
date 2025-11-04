/**
 * Contact Page Form Component
 * Handles form validation, submission, and error handling for the contact page
 */

(function() {
  'use strict';

  // Get DOM elements
  let contactForm, firstNameInput, lastNameInput, emailInput, reasonSelect, countrySelect;
  let submitBtn, errorMessage;

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Initialize form
  function initContactForm() {
    contactForm = document.getElementById('contact-page-form');
    if (!contactForm) return;

    firstNameInput = document.getElementById('firstName');
    lastNameInput = document.getElementById('lastName');
    emailInput = document.getElementById('email');
    reasonSelect = document.getElementById('reason');
    countrySelect = document.getElementById('country');
    submitBtn = document.getElementById('contact-submit-btn');
    errorMessage = document.getElementById('contact-form-error');

    // Add event listeners
    if (contactForm) {
      contactForm.addEventListener('submit', handleSubmit);
    }

    // Real-time validation
    if (firstNameInput) {
      firstNameInput.addEventListener('blur', validateFirstName);
      firstNameInput.addEventListener('input', clearFieldError);
    }

    if (lastNameInput) {
      lastNameInput.addEventListener('blur', validateLastName);
      lastNameInput.addEventListener('input', clearFieldError);
    }

    if (emailInput) {
      emailInput.addEventListener('blur', validateEmail);
      emailInput.addEventListener('input', clearFieldError);
    }
  }

  // Validate first name
  function validateFirstName() {
    const value = firstNameInput.value.trim();
    if (value === '') {
      showFieldError(firstNameInput, 'First name is required');
      return false;
    }
    clearFieldError(firstNameInput);
    return true;
  }

  // Validate last name
  function validateLastName() {
    const value = lastNameInput.value.trim();
    if (value === '') {
      showFieldError(lastNameInput, 'Last name is required');
      return false;
    }
    clearFieldError(lastNameInput);
    return true;
  }

  // Validate email
  function validateEmail() {
    const value = emailInput.value.trim();
    if (value === '') {
      showFieldError(emailInput, 'Email is required');
      return false;
    }
    if (!emailRegex.test(value)) {
      showFieldError(emailInput, 'Please enter a valid email address');
      return false;
    }
    clearFieldError(emailInput);
    return true;
  }

  // Show field error
  function showFieldError(field, message) {
    if (!field) return;
    
    field.setAttribute('aria-invalid', 'true');
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }

    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    field.parentElement.appendChild(errorDiv);

    // Show main error message
    if (errorMessage) {
      errorMessage.textContent = message;
      errorMessage.classList.add('active');
    }
  }

  // Clear field error
  function clearFieldError(event) {
    const field = event ? event.target : this;
    if (!field) return;

    field.removeAttribute('aria-invalid');
    field.classList.remove('error');

    const errorDiv = field.parentElement.querySelector('.field-error');
    if (errorDiv) {
      errorDiv.remove();
    }

    // Clear main error message if all fields are valid
    if (errorMessage && !document.querySelector('.form-field .error')) {
      errorMessage.textContent = '';
      errorMessage.classList.remove('active');
    }
  }

  // Validate entire form
  function validateForm() {
    let isValid = true;

    if (!validateFirstName()) isValid = false;
    if (!validateLastName()) isValid = false;
    if (!validateEmail()) isValid = false;

    return isValid;
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
      // Focus on first invalid field
      const firstError = document.querySelector('.form-field .error');
      if (firstError) {
        firstError.focus();
      }
      return;
    }

    // Disable submit button
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
    }

    // Get form data
    const formData = {
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim(),
      email: emailInput.value.trim(),
      reason: reasonSelect.value,
      country: countrySelect.value
    };

    // Here you would typically send data to a server
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      // Show success modal using the global function from submit-modal.js
      if (window.showSubmitModal) {
        window.showSubmitModal();
      } else {
        // Fallback: directly manipulate modal if function not available
        const submitModalOverlay = document.getElementById('submit-modal-overlay');
        if (submitModalOverlay) {
          submitModalOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      }

      // Reset form
      contactForm.reset();

      // Re-enable submit button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span class="submit-button-text">Submit</span><svg class="submit-button-icon" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.91 0L23 7L15.91 14M0 7H23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      }

      // Log form data (in production, send to server)
      console.log('Form submitted:', formData);
    }, 1000);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }

  // Re-initialize if form is loaded dynamically
  const observer = new MutationObserver(function(mutations) {
    if (document.getElementById('contact-page-form') && !contactForm) {
      initContactForm();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();

