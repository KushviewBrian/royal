// Royal Smoke & Tobacco Age Verification Modal

document.addEventListener('DOMContentLoaded', function() {
 // Check if user has already verified their age
  const ageVerified = localStorage.getItem('ageVerified');
  
  if (!ageVerified) {
    // Show the age verification modal
    showAgeVerificationModal();
  }
  
  // Initialize the age verification modal
  initializeAgeVerification();
});

function showAgeVerificationModal() {
  const modal = document.getElementById('age-verification-modal');
  if (modal) {
    modal.classList.add('active');
  } else {
    // Create the modal if it doesn't exist
    createAgeVerificationModal();
  }
}

function createAgeVerificationModal() {
  // Create modal HTML
  const modalHTML = `
    <div id="age-verification-modal" class="active">
      <div class="age-verification-content">
        <h2>Age Verification Required</h2>
        <p>You must be 21 years of age or older to enter this website.</p>
        <p>This website contains information about tobacco products and smoking accessories.</p>
        <div class="age-verification-buttons">
          <button id="age-verify-yes" class="btn btn-primary">I am 21 or older</button>
          <button id="age-verify-no" class="btn btn-accent">I am under 21</button>
        </div>
      </div>
    </div>
  `;
  
  // Add modal to the body
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Initialize the age verification after modal is created
  initializeAgeVerification();
}

function initializeAgeVerification() {
  const verifyYesBtn = document.getElementById('age-verify-yes');
  const verifyNoBtn = document.getElementById('age-verify-no');
  const modal = document.getElementById('age-verification-modal');
  
  if (verifyYesBtn) {
    verifyYesBtn.addEventListener('click', function() {
      // Set age verification in localStorage
      localStorage.setItem('ageVerified', 'true');
      
      // Hide the modal
      if (modal) {
        modal.classList.remove('active');
        
        // Remove modal from DOM after animation completes
        setTimeout(() => {
          if (modal && modal.parentNode) {
            modal.parentNode.removeChild(modal);
          }
        }, 300);
      }
    });
  }
  
  if (verifyNoBtn) {
    verifyNoBtn.addEventListener('click', function() {
      // Redirect to a warning page or just close the window
      alert('You must be 21 years of age or older to enter this website.');
      
      // Close the current window/tab
      window.close();
      
      // If window.close() doesn't work, redirect to a warning page
      if (!window.closed) {
        window.location.href = 'https://www.google.com';
      }
    });
  }
  
  // Close modal if user clicks outside the content
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        // Don't allow closing the modal by clicking outside
        // Age verification is required
      }
    });
  }
}

// Function to check age verification status
function isAgeVerified() {
  return localStorage.getItem('ageVerified') === 'true';
}

// Function to reset age verification (for testing purposes)
function resetAgeVerification() {
  localStorage.removeItem('ageVerified');
}
