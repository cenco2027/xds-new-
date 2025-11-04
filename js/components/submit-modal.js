/**
 * Submit Modal Component
 * Handles modal display and close functionality
 */

(function() {
  'use strict';

  // Get DOM elements
  let modalOverlay, modalContainer, closeButton, modalSubmitButton;

  // Check if should show modal (tablet and mobile only, not desktop >= 1728px)
  function shouldShowModal() {
    const width = window.innerWidth;
    // Desktop端 (>= 1728px) 不显示弹窗
    return width < 1728;
  }

  // Show modal
  function showModal() {
    if (!shouldShowModal()) {
      return;
    }
    
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Focus management for accessibility
      if (closeButton) {
        setTimeout(() => {
          closeButton.focus();
        }, 100);
      }
    }
  }

  // Hide modal
  function hideModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Initialize modal when DOM is ready
  function initSubmitModal() {
    // Get DOM elements
    modalOverlay = document.getElementById('submit-modal-overlay');
    modalContainer = document.getElementById('submit-modal-container');
    closeButton = document.getElementById('submit-modal-close');
    modalSubmitButton = document.getElementById('modal-submit-button');
    
    if (!modalOverlay) {
      console.warn('Submit modal overlay not found');
      return;
    }

    // Close button event
    if (closeButton) {
      closeButton.addEventListener('click', hideModal);
    }

    // Close on overlay click (but not on modal content)
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        hideModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        hideModal();
      }
    });

    // Modal submit button (if needed for form resubmission)
    if (modalSubmitButton) {
      modalSubmitButton.addEventListener('click', function() {
        // This could trigger another form submission or just close the modal
        // For now, just close the modal
        hideModal();
      });
    }

    // Expose showModal function globally so contact-form.js can call it
    window.showSubmitModal = showModal;
    window.hideSubmitModal = hideModal;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSubmitModal);
  } else {
    initSubmitModal();
  }

})();



