// Royal Smoke & Tobacco Image Lazy Loading

document.addEventListener('DOMContentLoaded', function() {
  // Initialize image lazy loading
  initializeLazyLoading();
  
  // Initialize content lazy loading
  initializeContentLazyLoading();
});

function initializeLazyLoading() {
  // Check if Intersection Observer is supported
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Load the image if it has a data-src attribute
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            
            // Add loaded class for CSS animations
            img.classList.add('loaded');
            
            // Stop observing this image
            observer.unobserve(img);
          }
        }
      });
    });
    
    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
 } else {
    // Fallback for browsers that don't support Intersection Observer
    // Just load all images immediately
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      img.classList.add('loaded');
    });
  }
}

function initializeContentLazyLoading() {
  // For content that should be loaded when it comes into view
 // This can be used for product listings, testimonials, etc.
  
  if ('IntersectionObserver' in window) {
    const contentObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const content = entry.target;
          
          // Load content if it has a data-src attribute for content
          if (content.dataset.src) {
            loadContent(content, content.dataset.src);
            content.removeAttribute('data-src');
            
            // Stop observing this element
            observer.unobserve(content);
          }
        }
      });
    });
    
    // Observe all content elements with data-src attribute
    const lazyContent = document.querySelectorAll('[data-src]:not(img)');
    lazyContent.forEach(content => {
      contentObserver.observe(content);
    });
 }
}

function loadContent(element, source) {
  // Load content from source and add it to the element
  // This is a placeholder function - implement based on your content needs
  element.classList.add('loaded');
}

// Function to preload images that are likely to be viewed soon
function preloadImages(imageUrls) {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

// Function to get all images that need to be lazy loaded
function getLazyImages() {
  return document.querySelectorAll('img[data-src]');
}

// Function to manually trigger lazy loading for a specific image
function loadImage(img) {
  if (img.dataset.src) {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
    img.classList.add('loaded');
  }
}

// Function to add a loading indicator
function addLoadingIndicator(img) {
  // Create a loading indicator element
  const loader = document.createElement('div');
  loader.classList.add('image-loader');
  loader.innerHTML = '<div class="loading"></div>';
  
  // Add the loader before the image
  img.parentNode.insertBefore(loader, img);
  
  // Remove loader when image is loaded
  img.addEventListener('load', function() {
    if (loader.parentNode) {
      loader.parentNode.removeChild(loader);
    }
  });
  
  // Also remove loader if image fails to load
 img.addEventListener('error', function() {
    if (loader.parentNode) {
      loader.parentNode.removeChild(loader);
    }
  });
}

// Initialize loading indicators for all lazy images
function initializeLoadingIndicators() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => {
    addLoadingIndicator(img);
 });
}

// Initialize loading indicators
initializeLoadingIndicators();
