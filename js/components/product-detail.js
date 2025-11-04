/**
 * Product Detail Page JavaScript
 * Handles loading and displaying product details based on URL parameter
 */

(function() {
  'use strict';

  // Get product data from product-cards.js (same data source)
  const productsData = [
    {
      "id": "ad9",
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
      "id": "rt9",
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
      "id": "rs9",
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
      "id": "rs7",
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
      "id": "rs5",
      "title": "RS5",
      "category": "road",
      "description": "The RS5 proves that performance doesn't need to come with a premium price tag. Built on an alloy endurance frame, it balances comfort and stability for daily commutes and weekend adventures. A smart choice for riders who want pro-level reliability without overspending-- ride farther, ride smarter.",
      "images": {
        "desktop": "assets/images/products/product-rs5-tablet-56d3fd.png",
        "tablet": "assets/images/products/product-rs5-tablet-56d3fd.png",
        "mobile": "assets/images/products/product-mobile-4b2870.png"
      }
    }
  ];

  /**
   * Get product ID from URL parameter
   * @returns {string|null} Product ID or null if not found
   */
  function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }

  /**
   * Find product by ID
   * @param {string} productId - Product ID
   * @returns {Object|null} Product object or null if not found
   */
  function findProductById(productId) {
    return productsData.find(product => product.id === productId) || null;
  }

  /**
   * Render product detail page
   * @param {Object} product - Product data object
   */
  function renderProductDetail(product) {
    const container = document.getElementById('product-detail-content');
    
    if (!container) {
      console.error('Product detail container not found');
      return;
    }

    // Update page title
    document.title = `XDS Bicycles - ${product.title}`;

    // Create product detail HTML
    const productHTML = `
      <div class="product-detail-card">
        <div class="product-detail-image-wrapper">
          <img src="${product.images.desktop}" alt="${product.title} Bicycle" class="product-detail-image product-detail-image-desktop">
          <img src="${product.images.tablet}" alt="${product.title} Bicycle" class="product-detail-image product-detail-image-tablet">
          <img src="${product.images.mobile}" alt="${product.title} Bicycle" class="product-detail-image product-detail-image-mobile">
        </div>
        <div class="product-detail-info">
          <h1 class="product-detail-title">${product.title}</h1>
          <p class="product-detail-description">${product.description}</p>
          <div class="product-detail-category">
            <span class="category-label">Category:</span>
            <span class="category-value">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = productHTML;
  }

  /**
   * Show error message
   * @param {string} message - Error message
   */
  function showError(message) {
    const container = document.getElementById('product-detail-content');
    if (container) {
      container.innerHTML = `
        <div class="product-detail-error">
          <h2>Product Not Found</h2>
          <p>${message}</p>
          <a href="bicycles.html" class="product-detail-back-button">Back to Bicycles</a>
        </div>
      `;
    }
  }

  /**
   * Initialize product detail page
   */
  function initProductDetail() {
    console.log('Initializing product detail page...');
    
    const productId = getProductIdFromURL();
    
    if (!productId) {
      showError('No product ID provided in URL.');
      return;
    }

    console.log(`Looking for product with ID: ${productId}`);
    
    const product = findProductById(productId);
    
    if (!product) {
      showError(`Product with ID "${productId}" not found.`);
      return;
    }

    console.log(`Found product: ${product.title}`);
    renderProductDetail(product);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductDetail);
  } else {
    initProductDetail();
  }

})();



