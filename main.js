// Mobile navigation toggle
const toggleButton = document.querySelector('.navToggle');
const navigationLinks = document.querySelector('.navLinks');

if (toggleButton && navigationLinks) {
  toggleButton.addEventListener('click', () => {
    const isOpen = navigationLinks.classList.toggle('active');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu once a link is chosen
  navigationLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigationLinks.classList.remove('active');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Highlight the nav link that matches the current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navLinks a').forEach((link) => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});