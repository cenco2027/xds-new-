/**
 * Contact Form Component
 * Handles form validation, submission, and modal triggering
 */

(function() {
  'use strict';

  // Get DOM elements
  let contactForm, emailInput, submitBtn, errorMessage;

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate email format
  function validateEmail(email) {
    return emailRegex.test(email);
  }

  // Show error message
  function showError(message) {
    if (errorMessage) {
      errorMessage.textContent = message;
      errorMessage.classList.add('show');
    }
    if (emailInput) {
      emailInput.setAttribute('aria-invalid', 'true');
    }
  }

  // Hide error message
  function hideError() {
    if (errorMessage) {
      errorMessage.textContent = '';
      errorMessage.classList.remove('show');
    }
    if (emailInput) {
      emailInput.removeAttribute('aria-invalid');
    }
  }

  // Real-time validation
  function validateInput() {
    if (!emailInput) return false;
    
    const email = emailInput.value.trim();
    
    if (email === '') {
      hideError();
      return false;
    }
    
    if (!validateEmail(email)) {
      showError('Please enter a valid email address');
      return false;
    }
    
    hideError();
    return true;
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    
    if (!emailInput) return;
    
    const email = emailInput.value.trim();
    
    // Validate email
    if (!email) {
      showError('Please enter your email address');
      emailInput.focus();
      return;
    }
    
    if (!validateEmail(email)) {
      showError('Please enter a valid email address');
      emailInput.focus();
      return;
    }
    
    // Hide any previous errors
    hideError();
    
    // Disable submit button
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
    }
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      // Reset form
      if (contactForm) {
        contactForm.reset();
      }
      if (submitBtn) {
        submitBtn.disabled = false;
      }
      
      // Trigger modal only for tablet and mobile, not desktop (>= 1728px)
      const isDesktop = window.innerWidth >= 1728;
      if (!isDesktop) {
        // Check if modal exists and trigger it
        if (window.showSubmitModal) {
          window.showSubmitModal();
        }
      }
      
      // Reset button text
      if (submitBtn) {
        const submitText = submitBtn.querySelector('.email-submit-text');
        if (submitText) {
          submitText.textContent = 'Submit';
        }
      }
    }, 500);
  }

  // Initialize contact form when DOM is ready
  function initContactForm() {
    // Get DOM elements
    contactForm = document.getElementById('contact-email-form');
    emailInput = document.getElementById('email-input');
    submitBtn = document.getElementById('email-submit-btn');
    errorMessage = document.getElementById('email-form-error');
    
    if (!contactForm) {
      console.warn('Contact form not found');
      return;
    }
    
    if (!emailInput) {
      console.warn('Email input not found');
      return;
    }

    // Event listeners
    // Real-time validation on input
    emailInput.addEventListener('input', validateInput);
    
    // Validate on blur
    emailInput.addEventListener('blur', function() {
      if (emailInput.value.trim()) {
        validateInput();
      } else {
        hideError();
      }
    });

    // Handle form submission
    contactForm.addEventListener('submit', handleSubmit);

    // Prevent form submission with Enter key if there's an error
    emailInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !validateInput()) {
        e.preventDefault();
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }

})();

