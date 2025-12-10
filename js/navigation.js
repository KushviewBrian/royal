// Royal Smoke & Tobacco Navigation Functionality

document.addEventListener('DOMContentLoaded', function() {
 // Initialize mobile menu toggle
  initializeMobileMenu();
  
  // Initialize sticky header
  initializeStickyHeader();
  
  // Initialize smooth scrolling for anchor links
  initializeSmoothScrolling();
  
  // Initialize back to top button
  initializeBackToTop();
});

function initializeMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navbarNav = document.querySelector('.navbar-nav');
  
  if (hamburger && navbarNav) {
    hamburger.addEventListener('click', function() {
      navbarNav.classList.toggle('active');
      hamburger.classList.toggle('active');
      
      // Toggle aria-expanded attribute
      const expanded = navbarNav.classList.contains('active');
      hamburger.setAttribute('aria-expanded', expanded);
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbarNav.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

function initializeStickyHeader() {
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    const navbarHeight = navbar.offsetHeight;
    
    // Add padding to body to account for fixed header
    document.body.style.paddingTop = navbarHeight + 'px';
    
    // Add scroll event listener
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

function initializeSmoothScrolling() {
  // Add smooth scrolling to anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Check if the href is not just # (which is sometimes used as a placeholder)
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
        return;
      }
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        e.preventDefault();
        
        // Calculate offset position (account for fixed header)
        const offsetPosition = targetSection.offsetTop - 80; // 80px is approximate header height
        
        // Scroll to the target section
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL hash without causing jump
        history.pushState(null, null, targetId);
      }
    });
  });
}

function initializeBackToTop() {
 const backToTopButton = document.createElement('button');
  backTopButton.classList.add('back-to-top');
  backToTopButton.innerHTML = '↑';
  backToTopButton.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopButton);
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  // Add click event to scroll to top
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
 });
}

// Function to update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
 navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Add scroll event listener to update active nav link
window.addEventListener('scroll', updateActiveNavLink);
