/**
 * Product Cards Component JavaScript
 * Handles dynamic product card generation from JSON data
 */

(function() {
  'use strict';

  // Product data - Embedded to avoid CORS issues with file:// protocol
  // Based on Figma designs:
  // - E-Bike filter: AD9, RT9 (2 cards)
  // - Road filter: AD9, RT9, RS9, RS7, RS5 (5 cards)
  // - Gravel filter: AD9 (1 card)
  const productsData = [
    // E-Bike category products
    {
      "id": "ad9",
      "title": "AD9",
      "category": "e-bike",
      "description": "The AD9 is our most aerodynamic bike, sharing the same frame as the Astana Pro Team. Wind tunnel tested, it rivals top aero bikes on the market. Perfect for flat sprints and racing, with striking Astana team paintwork.",
      "images": {
        "desktop": "assets/images/products/product-ad9-desktop-4b2870.png",
        "tablet": "assets/images/products/product-ad9-tablet-4b2870.png",
        "mobile": "assets/images/products/product-mobile-4b2870.png"
      }
    },
    {
      "id": "rt9",
      "title": "RT9",
      "category": "e-bike",
      "description": "The RT9 is built for climbing, with an ultra-light 540g carbon frame. Its stiffness and responsiveness ensure every pedal stroke counts. A pure choice for competitive climbers.",
      "images": {
        "desktop": "assets/images/products/product-rt9-desktop-2a42f3.png",
        "tablet": "assets/images/products/product-rt9-tablet-40fec9.png",
        "mobile": "assets/images/products/product-mobile-4b2870.png"
      }
    },
    // Road category products
    {
      "id": "ad9-road",
      "title": "AD9",
      "category": "road",
      "description": "The AD9 is our most aerodynamic bike, sharing the same frame as the Astana Pro Team. Wind tunnel tested, it rivals top aero bikes on the market. Perfect for flat sprints and racing, with striking Astana team paintwork.",
      "images": {
        "desktop": "assets/images/products/product-ad9-desktop-4b2870.png",
        "tablet": "assets/images/products/product-ad9-tablet-4b2870.png",
        "mobile": "assets/images/products/product-mobile-4b2870.png"
      }
    },
    {
      "id": "rt9-road-1",
      "title": "RT9",
      "category": "road",
      "description": "The RT9 is built for climbing, with an ultra-light 540g carbon frame. Its stiffness and responsiveness ensure every pedal stroke counts. A pure choice for competitive climbers.",
      "images": {
        "desktop": "assets/images/products/product-rt9-desktop-2a42f3.png",
        "tablet": "assets/images/products/product-rt9-tablet-40fec9.png",
        "mobile": "assets/images/products/product-mobile-4b2870.png"
      }
    },
    {
      "id": "rt9-road-2",
      "title": "RT9",
      "category": "road",
      "description": "The RT9 is built for climbing, with an ultra-light 540g carbon frame. Its stiffness and responsiveness ensure every pedal stroke counts. A pure choice for competitive climbers.",
      "images": {
        "desktop": "assets/images/products/product-rt9-desktop-2a42f3.png",
        "tablet": "assets/images/products/product-rt9-tablet-40fec9.png",
        "mobile": "assets/images/products/product-mobile-4b2870.png"
      }
    },
    {
      "id": "rs9-road-1",
      "title": "RS9",
      "category": "road",
      "description": "The RS9 is the flagship of the endurance line, delivering all-round performance and exceptional comfort for long-distance rides. Premium frames and components make it the choice for serious endurance cyclists.",
      "images": {
        "desktop": "assets/images/products/product-rs9-desktop-447b73.png",
        "tablet": "assets/images/products/product-rs9-tablet-365bfa.png",
        "mobile": "assets/images/products/product-mobile-4b2870.png"
      }
    },
    {
      "id": "rs9-road-2",
      "title": "RS9",
      "category": "road",
      "description": "The RS9 is the flagship of the endurance line, delivering all-round performance and exceptional comfort for long-distance rides. Premium frames and components make it the choice for serious endurance cyclists.",
      "images": {
        "desktop": "assets/images/products/product-rs9-desktop-447b73.png",
        "tablet": "assets/images/products/product-rs9-tablet-365bfa.png",
        "mobile": "assets/images/products/product-mobile-4b2870.png"
      }
    },
    {
      "id": "rs7-road",
      "title": "RS7",
      "category": "road",
      "description": "The RS7 delivers the smooth efficiency of a carbon endurance frame paired with Shimano 105 precision. Light, responsive, and confidence-inspiring it's designed for riders who chase performance but value every dollar spent. A true blend of racing spirit and everyday practically.",
      "images": {
        "desktop": "assets/images/products/product-rs7-tablet-56d3fd.png",
        "tablet": "assets/images/products/product-rs7-tablet-56d3fd.png",
        "mobile": "assets/images/products/product-mobile-4b2870.png"
      }
    },
    {
      "id": "rs5-road",
      "title": "RS5",
      "category": "road",
      "description": "The RS5 proves that performance doesn't need to come with a premium price tag. Built on an alloy endurance frame, it balances comfort and stability for daily commutes and weekend adventures. A smart choice for riders who want pro-level reliability without overspending-- ride farther, ride smarter.",
      "images": {
        "desktop": "assets/images/products/product-rs5-tablet-56d3fd.png",
        "tablet": "assets/images/products/product-rs5-tablet-56d3fd.png",
        "mobile": "assets/images/products/product-mobile-4b2870.png"
      }
    },
    // Gravel category products
    {
      "id": "ad9-gravel",
      "title": "AD9",
      "category": "gravel",
      "description": "The AD9 is our most aerodynamic bike, sharing the same frame as the Astana Pro Team. Wind tunnel tested, it rivals top aero bikes on the market. Perfect for flat sprints and racing, with striking Astana team paintwork.",
      "images": {
        "desktop": "assets/images/products/product-ad9-desktop-4b2870.png",
        "tablet": "assets/images/products/product-ad9-tablet-4b2870.png",
        "mobile": "assets/images/products/product-mobile-4b2870.png"
      }
    }
  ];

  /**
   * Load products data (now returns embedded data directly)
   * Changed to synchronous to avoid CORS issues with file:// protocol
   */
  function loadProductsData() {
    return productsData;
  }

  /**
   * Create product card HTML
   * @param {Object} product - Product data object
   * @returns {string} HTML string for product card
   */
  function createProductCardHTML(product) {
    // Create link for product detail page
    const productUrl = `product-detail.html?id=${product.id}`;
    
    return `
      <a href="${productUrl}" class="product-card-link" data-category="${product.category}" data-product-id="${product.id}">
        <div class="product-card" data-category="${product.category}" data-product-id="${product.id}">
          <div class="card-content">
            <div class="card-text">
              <h2 class="card-title">${product.title}</h2>
              <p class="card-description">${product.description}</p>
            </div>
            <div class="card-image-wrapper">
              <img src="${product.images.desktop}" alt="${product.title} Bicycle" class="card-image card-image-desktop">
              <img src="${product.images.tablet}" alt="${product.title} Bicycle" class="card-image card-image-tablet">
              <img src="${product.images.mobile}" alt="${product.title} Bicycle" class="card-image card-image-mobile">
            </div>
          </div>
        </div>
      </a>
    `;
  }

  /**
   * Render all product cards
   * @param {Array} products - Array of product objects
   */
  function renderProductCards(products) {
    const container = document.querySelector('.product-cards-container');
    
    if (!container) {
      console.error('Product cards container not found');
      return;
    }

    if (!products || products.length === 0) {
      console.warn('No products to render');
      return;
    }

    // Clear existing content
    container.innerHTML = '';

    // Create and append product cards
    products.forEach(product => {
      const cardHTML = createProductCardHTML(product);
      container.insertAdjacentHTML('beforeend', cardHTML);
    });

    console.log(`Rendered ${products.length} product cards`);

    // Ensure cards are visible initially, then apply filter
    const cards = container.querySelectorAll('.product-card-link');
    cards.forEach(cardLink => {
      // Remove any hidden classes initially
      cardLink.classList.remove('hidden', 'fade-out');
      cardLink.style.display = '';
      cardLink.style.opacity = '1';
      cardLink.style.transform = 'translateY(0)';
      cardLink.style.pointerEvents = 'auto';
      cardLink.style.cursor = 'pointer';
      
      // Ensure link is clickable
      cardLink.addEventListener('click', function(e) {
        console.log('Card link clicked:', this.href);
        // Allow default navigation behavior
      });
    });

    // Trigger filter on load after cards are rendered
    setTimeout(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const filter = urlParams.get('filter') || 'road';
      
      console.log(`Applying filter: ${filter}`);
      
      // Trigger custom event for filter component
      const filterEvent = new CustomEvent('productsLoaded', { 
        detail: { filter: filter } 
      });
      window.dispatchEvent(filterEvent);
      
      // Also trigger filter directly if function is available
      if (typeof window.filterProducts === 'function') {
        setTimeout(() => {
          window.filterProducts(filter);
        }, 100);
      }
    }, 300);
  }

  /**
   * Initialize product cards
   */
  function initProductCards() {
    console.log('Initializing product cards...');
    const products = loadProductsData();
    
    if (!products || products.length === 0) {
      console.warn('No products data loaded');
      return;
    }

    console.log(`Loaded ${products.length} products`);
    renderProductCards(products);
  }

  // Initialize when DOM is ready
  function startInit() {
    try {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProductCards);
      } else {
        initProductCards();
      }
    } catch (error) {
      console.error('Error initializing product cards:', error);
    }
  }
  
  startInit();

  // Export for use by other scripts
  window.productsData = productsData;
  window.renderProductCards = renderProductCards;
  window.loadProductsData = loadProductsData;

})();

