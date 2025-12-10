// Royal Smoke & Tobacco Main JavaScript Entry Point

// Import or include other JavaScript modules
// Note: For browser compatibility, we'll initialize all modules directly in this file

document.addEventListener('DOMContentLoaded', function() {
  console.log('Royal Smoke & Tobacco website initialized');
  
  // Initialize all functionality
  initializeAll();
});

function initializeAll() {
 // Initialize age verification
  if (typeof initializeAgeVerification === 'function') {
    initializeAgeVerification();
  }
  
  // Initialize navigation
  if (typeof initializeNavigation === 'function') {
    initializeNavigation();
  }
  
  // Initialize animations
  if (typeof initializeAnimations === 'function') {
    initializeAnimations();
  }
  
  // Initialize lazy loading
 if (typeof initializeLazyLoading === 'function') {
    initializeLazyLoading();
  }
  
  // Initialize analytics
  if (typeof initializeAnalytics === 'function') {
    initializeAnalytics();
  }
  
  // Initialize additional functionality
  initializeMapFunctionality();
  initializeProductGallery();
  initializeTestimonials();
  initializeNewsletterSignup();
}

function initializeMapFunctionality() {
  // Initialize Google Maps or other map functionality if needed
 // This would be implemented when the map section is created
  console.log('Map functionality initialized');
}

function initializeProductGallery() {
  // Initialize product gallery/carousel if needed
 console.log('Product gallery initialized');
}

function initializeTestimonials() {
  // Initialize testimonials carousel if needed
  console.log('Testimonials initialized');
}

function initializeNewsletterSignup() {
  // Initialize newsletter signup form if needed
  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && validateEmail(emailInput.value)) {
        // Process newsletter signup
        console.log('Newsletter signup attempted with email:', emailInput.value);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        
        // Reset form
        this.reset();
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
}

// Email validation helper function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Utility function to check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Utility function to get query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Utility function to set cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Utility function to get cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to handle browser-specific features
function handleBrowserCompatibility() {
 // Add any browser-specific fixes or polyfills here
  console.log('Browser compatibility handled');
}

// Function to handle offline functionality
function handleOfflineFunctionality() {
  // Handle offline state if needed
  window.addEventListener('online', function() {
    console.log('Back online');
  });
  
 window.addEventListener('offline', function() {
    console.log('Offline mode');
    // Show offline message or queue actions
  });
}

// Initialize browser compatibility and offline functionality
handleBrowserCompatibility();
handleOfflineFunctionality();

// Add any additional utility functions as needed
// ... additional functions would go here

// Export functions for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeAll,
    validateEmail,
    isElementInViewport,
    getQueryParam,
    setCookie,
    getCookie
  };
}
