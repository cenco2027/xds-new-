/**
 * Product Filter Component JavaScript
 * Handles filter tab interactions and product card filtering
 */

(function() {
  'use strict';

  // Initialize filter functionality
  function initProductFilter() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    // Get filter from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get('filter') || 'road';
    
    // Set initial active filter
    setActiveFilter(initialFilter);
    
    // Add click event listeners to filter tabs
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        setActiveFilter(filter);
        filterProducts(filter);
        updateURL(filter);
      });
    });
    
    // Wait for products to load, then filter
    function applyInitialFilter() {
      const productCards = document.querySelectorAll('.product-card-link');
      if (productCards.length > 0) {
        filterProducts(initialFilter);
      } else {
        // If products not loaded yet, wait a bit
        setTimeout(applyInitialFilter, 100);
      }
    }
    
    // Listen for products loaded event
    window.addEventListener('productsLoaded', function(event) {
      const filter = event.detail ? event.detail.filter : initialFilter;
      filterProducts(filter);
    });
    
    // Try to apply filter immediately
    applyInitialFilter();
  }
  
  /**
   * Set active filter tab
   * @param {string} filter - Filter category (road, e-bike, gravel)
   */
  function setActiveFilter(filter) {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
      const tabFilter = tab.getAttribute('data-filter');
      if (tabFilter === filter) {
        tab.classList.add('active');
        tab.setAttribute('aria-pressed', 'true');
      } else {
        tab.classList.remove('active');
        tab.setAttribute('aria-pressed', 'false');
      }
    });
  }
  
  /**
   * Filter products based on category
   * @param {string} filter - Filter category (road, e-bike, gravel)
   */
  function filterProducts(filter) {
    const productCards = document.querySelectorAll('.product-card-link');
    const container = document.querySelector('.product-cards-container');
    
    if (!productCards.length) {
      console.warn('No product cards found for filtering');
      return;
    }
    
    console.log(`Filtering ${productCards.length} cards with filter: ${filter}`);
    
    let visibleCount = 0;
    
    productCards.forEach((cardLink, index) => {
      const card = cardLink.querySelector('.product-card');
      const cardCategory = card ? card.getAttribute('data-category') : cardLink.getAttribute('data-category');
      const shouldShow = filter === 'all' || cardCategory === filter;
      
      console.log(`Card ${index + 1}: category=${cardCategory}, shouldShow=${shouldShow}`);
      
      // Add fade-out animation for hiding
      if (!shouldShow && !cardLink.classList.contains('hidden')) {
        cardLink.classList.add('fade-out');
        
        setTimeout(() => {
          cardLink.classList.add('hidden');
          cardLink.classList.remove('fade-out');
          cardLink.style.display = 'none';
          cardLink.style.opacity = '0';
          cardLink.style.pointerEvents = 'none';
        }, 200);
      }
      // Show and fade-in for visible cards
      else if (shouldShow && cardLink.classList.contains('hidden')) {
        cardLink.style.display = '';
        cardLink.style.pointerEvents = 'auto';
        cardLink.style.cursor = 'pointer';
        cardLink.classList.remove('hidden');
        // Delay fade-in for staggered effect
        setTimeout(() => {
          cardLink.classList.remove('fade-out');
          cardLink.style.opacity = '0';
          cardLink.style.transform = 'translateY(20px)';
          
          requestAnimationFrame(() => {
            cardLink.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            cardLink.style.opacity = '1';
            cardLink.style.transform = 'translateY(0)';
          });
        }, index * 50);
        
        visibleCount++;
      }
      // Keep visible cards visible (initial load case)
      else if (shouldShow) {
        cardLink.classList.remove('hidden', 'fade-out');
        cardLink.style.display = '';
        cardLink.style.opacity = '1';
        cardLink.style.transform = 'translateY(0)';
        cardLink.style.pointerEvents = 'auto';
        cardLink.style.cursor = 'pointer';
        visibleCount++;
      }
    });
    
    console.log(`Filter applied: ${visibleCount} cards visible`);
    
    // Show/hide "no products" message
    const noProductsMessage = container ? container.querySelector('.no-products-message') : null;
    
    if (visibleCount === 0) {
      // Create or show "no products" message
      if (!noProductsMessage && container) {
        const message = document.createElement('div');
        message.className = 'no-products-message';
        message.innerHTML = `
          <p class="no-products-text">No products found in this category.</p>
          <p class="no-products-hint">Try selecting a different filter or check back later.</p>
        `;
        container.appendChild(message);
      } else if (noProductsMessage) {
        noProductsMessage.style.display = 'block';
      }
      console.warn('No cards visible after filtering');
    } else {
      // Hide "no products" message if it exists
      if (noProductsMessage) {
        noProductsMessage.style.display = 'none';
      }
    }
  }
  
  /**
   * Update URL with filter parameter
   * @param {string} filter - Filter category
   */
  function updateURL(filter) {
    const url = new URL(window.location);
    if (filter === 'all') {
      url.searchParams.delete('filter');
    } else {
      url.searchParams.set('filter', filter);
    }
    window.history.pushState({ filter: filter }, '', url);
  }
  
  // Handle browser back/forward buttons
  window.addEventListener('popstate', function(event) {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter') || 'road';
    setActiveFilter(filter);
    filterProducts(filter);
  });
  
  // Export filterProducts for use by product-cards.js
  window.filterProducts = filterProducts;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductFilter);
  } else {
    initProductFilter();
  }
})();

