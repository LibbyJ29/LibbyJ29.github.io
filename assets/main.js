const toggleButton = document.querySelector('.navToggle');
const navigationLinks = document.querySelector('.navLinks');

toggleButton.addEventListener('click', () => {
  navigationLinks.classList.toggle('active');
});
