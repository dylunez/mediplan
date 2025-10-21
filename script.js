// -----------------------------
// NAVIGATION + OVERLAY
// -----------------------------
const navToggle = document.querySelectorAll('.nav__toggle-btn');
const navOverlay = document.getElementById('overlay');
const navItem = document.querySelectorAll('.overlay__link');
const navBtnBurger = document.getElementById('nav-btn-burger');

// Manejo del nav
navToggle.forEach(btn => {
  btn.addEventListener('click', () => {
    navOverlay.classList.toggle('overlay--active');

    const isMenuOpen = navOverlay.classList.contains('overlay--active');

    navBtnBurger.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');
    navOverlay.hidden = !isMenuOpen;

    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  });
});

// Manejo de los items
navItem.forEach(item => {
  item.addEventListener('click', () => {
    navOverlay.classList.remove('overlay--active');
    navOverlay.hidden = true;

    navBtnBurger.setAttribute('aria-expanded', 'false');

    document.body.style.overflow = '';
  });
});


// -----------------------------
// DYNAMIC NAV HEIGHT
// -----------------------------
const nav = document.getElementById("nav");

function setNavHeight() {
  const height = nav.offsetHeight;
  document.documentElement.style.setProperty("--nav-height", `${height}px`);
}

setNavHeight();
window.addEventListener("resize", setNavHeight);


// -----------------------------
// FAQ CARDS
// -----------------------------
const toggleButtons = document.querySelectorAll('.faq-card__toggle');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.faq-card'); // buscar la tarjeta más cercana
    const description = card.querySelector('.faq-card__description');
    const iconDown = button.querySelector('.faq-card__toggle-icon--chevron-down');
    const iconUp = button.querySelector('.faq-card__toggle-icon--chevron-up');

    // Alternar visibilidad de la descripción
    description.classList.toggle('faq-card__description--visible');

    // Alternar íconos
    const isVisible = description.classList.contains('faq-card__description--visible');
    iconDown.style.display = isVisible ? 'none' : 'block';
    iconUp.style.display = isVisible ? 'block' : 'none';
  });
});