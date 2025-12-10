// Royal Smoke & Tobacco Animation Functionality

document.addEventListener('DOMContentLoaded', function() {
  // Initialize scroll animations
  initializeScrollAnimations();
  
  // Initialize hover animations
  initializeHoverAnimations();
  
  // Initialize form animations
  initializeFormAnimations();
});

function initializeScrollAnimations() {
  // Check if Intersection Observer is supported
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animate class to trigger animation
          entry.target.classList.add('animate');
          
          // Stop observing this element after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all elements with scroll-animation class
    const animatedElements = document.querySelectorAll('.scroll-animation');
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback for browsers that don't support Intersection Observer
    // Just add the animate class to show elements
    const animatedElements = document.querySelectorAll('.scroll-animation');
    animatedElements.forEach(element => {
      element.classList.add('animate');
    });
  }
}

function initializeHoverAnimations() {
  // Add hover animations to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('hover-lift');
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('hover-lift');
    });
  });
  
  // Add hover animations to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.classList.add('hover-lift');
    });
    
    button.addEventListener('mouseleave', function() {
      this.classList.remove('hover-lift');
    });
  });
}

function initializeFormAnimations() {
  // Add focus animations to form elements
 const formControls = document.querySelectorAll('.form-control');
  formControls.forEach(control => {
    control.addEventListener('focus', function() {
      this.style.boxShadow = '0 0 8px rgba(25, 215, 0, 0.5)';
      this.style.borderColor = 'var(--primary-royal-gold)';
    });
    
    control.addEventListener('blur', function() {
      this.style.boxShadow = 'none';
      this.style.borderColor = 'var(--border-primary)';
    });
  });
}

// Function to animate elements on demand
function animateElement(element, animationClass) {
  element.classList.add(animationClass);
  
  // Remove the class after animation completes
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, 1000);
}

// Function to create a ripple effect on buttons
function createRipple(event) {
  const button = event.currentTarget;
  
  // Create ripple element
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  
  // Position the ripple
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.offsetX - radius}px`;
  ripple.style.top = `${event.offsetY - radius}px`;
  
  // Add ripple to button
  const rippleContainer = button.querySelector('.ripple-container');
  if (rippleContainer) {
    rippleContainer.appendChild(ripple);
  } else {
    button.appendChild(ripple);
  }
  
  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
 }, 600);
}

// Add ripple effect to all buttons
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
    const button = e.target.classList.contains('btn') ? e.target : e.target.closest('.btn');
    if (button) {
      createRipple(e);
    }
  }
});

// Function to handle page load animations
function pageLoadAnimations() {
 // Fade in the main content
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
      mainContent.style.opacity = '1';
    }, 100);
  }
}

// Initialize page load animations
window.addEventListener('load', pageLoadAnimations);
