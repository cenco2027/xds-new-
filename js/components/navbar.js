/**
 * Navigation Bar Component
 * Handles desktop and mobile menu functionality
 */

(function() {
  'use strict';

  // Initialize navbar when DOM is ready
  function initNavbar() {
    // Get DOM elements
    const navbar = document.getElementById('navbar');
    const hamburgerButton = document.getElementById('navbar-hamburger');
    const mobileMenu = document.getElementById('navbar-mobile');
    const tabletMenu = document.getElementById('navbar-tablet-menu');
    const navbarContainer = document.querySelector('.navbar-container');
    const closeButton = document.getElementById('navbar-close');
    const menuItems = document.querySelectorAll('.navbar-menu-item, .navbar-mobile-item, .navbar-tablet-item');
    const desktopMenu = document.querySelector('.navbar-desktop');
    
    if (!navbar) {
      console.warn('Navbar element not found');
      return;
    }
  
    // Check if we're on tablet viewport
    function isTabletViewport() {
      return window.innerWidth >= 768 && window.innerWidth <= 1024;
    }
    
    // Check if we're on mobile viewport
    function isMobileViewport() {
      return window.innerWidth < 768;
    }

    // Toggle tablet menu
    function toggleTabletMenu() {
      if (tabletMenu && navbarContainer) {
        tabletMenu.classList.toggle('active');
        navbarContainer.classList.toggle('expanded');
        if (hamburgerButton) {
          hamburgerButton.classList.toggle('active');
        }
      }
    }
    
    // Toggle mobile menu
    function toggleMobileMenu() {
      if (mobileMenu) {
        mobileMenu.classList.toggle('active');
        if (hamburgerButton) {
          hamburgerButton.classList.toggle('active');
        }
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
      }
    }
    
    // Unified toggle function
    function toggleMenu() {
      if (isMobileViewport()) {
        toggleMobileMenu();
      } else if (isTabletViewport()) {
        toggleTabletMenu();
      }
    }

    // Close tablet menu
    function closeTabletMenu() {
      if (tabletMenu) {
        tabletMenu.classList.remove('active');
        if (navbarContainer) {
          navbarContainer.classList.remove('expanded');
        }
        if (hamburgerButton) {
          hamburgerButton.classList.remove('active');
        }
      }
    }
    
    // Close mobile menu
    function closeMobileMenu() {
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        if (hamburgerButton) {
          hamburgerButton.classList.remove('active');
        }
        document.body.style.overflow = '';
      }
    }
    
    // Close all menus
    function closeAllMenus() {
      closeMobileMenu();
      closeTabletMenu();
    }

    // Smooth scroll to section or navigate to page
    function smoothScrollToSection(event) {
      const href = event.currentTarget.getAttribute('href');
      
      if (!href) return;
      
      // Handle page navigation (HTML files)
      if (href.includes('.html')) {
        // Allow default navigation behavior for page links
        // Close menus before navigation
        if (isMobileViewport() && mobileMenu && mobileMenu.classList.contains('active')) {
          closeMobileMenu();
        } else if (isTabletViewport() && tabletMenu && tabletMenu.classList.contains('active')) {
          closeTabletMenu();
        }
        // Let the browser handle the navigation
        return;
      }
      
      // Handle anchor links (same page)
      if (href.startsWith('#')) {
        event.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement && navbar) {
          const offsetTop = targetElement.offsetTop - (navbar.offsetHeight || 80);
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          // Close menus if open
          if (isMobileViewport() && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
          } else if (isTabletViewport() && tabletMenu && tabletMenu.classList.contains('active')) {
            closeTabletMenu();
          }
        }
      }
    }

    // Update active menu item based on scroll position
    function updateActiveMenuItem() {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + (navbar ? navbar.offsetHeight : 80) + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all items
          menuItems.forEach(item => {
            item.classList.remove('active');
          });
          
          // Add active class to matching items
          const matchingItems = document.querySelectorAll(`[data-section="${sectionId}"]`);
          matchingItems.forEach(item => {
            item.classList.add('active');
          });
          
          // Update tablet indicator position
          updateTabletIndicator();
        }
      });
    }
    
    // Update tablet indicator position
    function updateTabletIndicator() {
      if (!tabletMenu || !isTabletViewport()) return;
      
      const activeItem = tabletMenu.querySelector('.navbar-tablet-item.active');
      const indicator = document.getElementById('navbar-tablet-indicator');
      
      if (!indicator) return;
      
      if (activeItem) {
        const activeSection = activeItem.getAttribute('data-section');
        const positions = {
          'home': '109px',
          'bicycles': '252px',
          'about': '408px',
          'technology': '599px',
          'contact': '802px'
        };
        
        const position = positions[activeSection] || '109px';
        indicator.style.left = position;
        indicator.style.opacity = '1';
      } else {
        indicator.style.opacity = '0';
      }
    }

    // Set active menu item based on current page
    function setActiveMenuItemByPage() {
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const currentHash = window.location.hash.substring(1);
      
      // Remove active class from all items
      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      
      // Set active based on current page
      if (currentPage === 'technology.html') {
        const technologyItems = document.querySelectorAll('[data-section="technology"]');
        technologyItems.forEach(item => {
          item.classList.add('active');
        });
        updateTabletIndicator();
      } else if (currentPage === 'bicycles.html') {
        const bicyclesItems = document.querySelectorAll('[data-section="bicycles"]');
        bicyclesItems.forEach(item => {
          item.classList.add('active');
        });
        updateTabletIndicator();
      } else if (currentPage === 'about.html') {
        const aboutItems = document.querySelectorAll('[data-section="about"]');
        aboutItems.forEach(item => {
          item.classList.add('active');
        });
        updateTabletIndicator();
      } else if (currentPage === 'contact.html') {
        const contactItems = document.querySelectorAll('[data-section="contact"]');
        contactItems.forEach(item => {
          item.classList.add('active');
        });
        updateTabletIndicator();
      } else if (currentHash) {
        // For index.html with hash
        const hashItems = document.querySelectorAll(`[data-section="${currentHash}"]`);
        hashItems.forEach(item => {
          item.classList.add('active');
        });
        updateTabletIndicator();
      }
    }

    // Initialize on page load
    setActiveMenuItemByPage();
    
    // Update active menu item on scroll (for single page navigation)
    window.addEventListener('scroll', updateActiveMenuItem);
    
    // Update active menu item on hash change
    window.addEventListener('hashchange', () => {
      setActiveMenuItemByPage();
      updateActiveMenuItem();
    });

    // Event listeners
    if (hamburgerButton) {
      hamburgerButton.addEventListener('click', toggleMenu);
    }

    if (closeButton) {
      closeButton.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu when clicking outside
    if (mobileMenu) {
      mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
          closeMobileMenu();
        }
      });
    }

    // Add smooth scroll to all menu items
    menuItems.forEach(item => {
      item.addEventListener('click', smoothScrollToSection);
    });

    // Update active menu item on scroll
    window.addEventListener('scroll', updateActiveMenuItem);

    // Update active menu item on page load
    updateActiveMenuItem();

    // Close menus on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        // Desktop view - close all menus
        closeAllMenus();
      } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
        // Tablet view - close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          closeMobileMenu();
        }
      } else {
        // Mobile view - close tablet menu if open
        if (tabletMenu && tabletMenu.classList.contains('active')) {
          closeTabletMenu();
        }
      }
      
      // Update active menu item after resize
      updateActiveMenuItem();
    });

    // Handle escape key to close menus
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (isMobileViewport() && mobileMenu && mobileMenu.classList.contains('active')) {
          closeMobileMenu();
        } else if (isTabletViewport() && tabletMenu && tabletMenu.classList.contains('active')) {
          closeTabletMenu();
        }
      }
    });
    
    // Update tablet indicator on menu item click
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        setTimeout(() => {
          updateTabletIndicator();
        }, 100);
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }

})();



