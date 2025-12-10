// Royal Smoke & Tobacco Analytics Tracking

// Initialize Google Analytics 4
function initializeAnalytics() {
  // Check if Google Analytics is already loaded
  if (typeof gtag !== 'undefined') {
    console.log('Google Analytics already loaded');
    return;
  }
  
  // Load Google Analytics script
 loadGoogleAnalytics();
}

function loadGoogleAnalytics() {
  // Google Analytics Measurement ID for Royal Smoke & Tobacco
  const MEASUREMENT_ID = 'G-XXXXXXXXXX'; // This would be replaced with the actual Measurement ID
  
  // Create script element for gtag
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
 window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, {
    'page_title': document.title,
    'page_location': window.location.href,
    'page_path': window.location.pathname
  });
  
  // Track page views
  trackPageViews();
  
  // Track important events
  trackImportantEvents();
}

function trackPageViews() {
  // Track virtual pageviews for single page applications
 // For a static site, this happens automatically with gtag
  console.log('Page view tracking initialized');
}

function trackImportantEvents() {
  // Track clicks on important buttons
  trackButtonClicks();
  
  // Track form interactions
  trackFormInteractions();
  
  // Track outbound links
  trackOutboundLinks();
  
  // Track phone number clicks
  trackPhoneNumberClicks();
  
  // Track email clicks
  trackEmailClicks();
}

function trackButtonClicks() {
  // Track clicks on important buttons like "Get Directions", "View Products", etc.
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonLabel = this.textContent.trim() || this.getAttribute('aria-label') || 'Button';
      const buttonType = this.classList.contains('btn-primary') ? 'primary' : 
                        this.classList.contains('btn-secondary') ? 'secondary' : 
                        this.classList.contains('btn-accent') ? 'accent' : 'default';
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'Button',
          'event_label': `${buttonLabel} (${buttonType} button)`,
          'event_callback': function() {
            console.log(`Tracked button click: ${buttonLabel}`);
          }
        });
      }
    });
  });
}

function trackFormInteractions() {
  // Track form submissions
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const formId = this.id || this.getAttribute('name') || 'Unknown Form';
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          'event_category': 'Form',
          'event_label': formId,
          'event_callback': function() {
            console.log(`Tracked form submission: ${formId}`);
          }
        });
      }
    });
  });
  
  // Track form field interactions
 const formFields = document.querySelectorAll('input, textarea, select');
  
  formFields.forEach(field => {
    field.addEventListener('focus', function() {
      const fieldName = this.name || this.id || 'Unknown Field';
      const fieldType = this.type || this.tagName.toLowerCase();
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_focus', {
          'event_category': 'FormField',
          'event_label': `${fieldName} (${fieldType})`,
          'event_callback': function() {
            console.log(`Tracked form field focus: ${fieldName}`);
          }
        });
      }
    });
  });
}

function trackOutboundLinks() {
  // Track clicks on outbound links
  const outboundLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
  
  outboundLinks.forEach(link => {
    link.addEventListener('click', function() {
      const linkUrl = this.href;
      const linkText = this.textContent.trim() || this.getAttribute('aria-label') || 'Outbound Link';
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'outbound_click', {
          'event_category': 'Outbound Link',
          'event_label': linkUrl,
          'transport_type': 'beacon'
        });
      }
    });
  });
}

function trackPhoneNumberClicks() {
  // Track clicks on phone number links
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  
  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      const phoneNumber = this.href.replace('tel:', '');
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_click', {
          'event_category': 'Phone',
          'event_label': phoneNumber,
          'transport_type': 'beacon'
        });
      }
    });
  });
}

function trackEmailClicks() {
  // Track clicks on email links
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  
  emailLinks.forEach(link => {
    link.addEventListener('click', function() {
      const email = this.href.replace('mailto:', '');
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'email_click', {
          'event_category': 'Email',
          'event_label': email,
          'transport_type': 'beacon'
        });
      }
    });
  });
}

// Custom event tracking function
function trackCustomEvent(eventName, eventParams) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
  } else {
    console.log(`Custom event (not tracked - GA not loaded): ${eventName}`, eventParams);
  }
}

// Track product category views
function trackProductCategoryView(categoryName) {
  trackCustomEvent('product_category_view', {
    'category_name': categoryName,
    'page_location': window.location.href
  });
}

// Track age verification completion
function trackAgeVerification() {
  trackCustomEvent('age_verification', {
    'verification_status': 'completed',
    'page_location': window.location.href
  });
}

// Track store location views
function trackStoreLocationView() {
  trackCustomEvent('store_location_view', {
    'page_location': window.location.href
  });
}

// Initialize analytics when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
 initializeAnalytics();
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeAnalytics,
    trackCustomEvent,
    trackProductCategoryView,
    trackAgeVerification,
    trackStoreLocationView
  };
}
