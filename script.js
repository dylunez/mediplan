document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const iconBurger = document.querySelector('.nav__toggle__icon--burger');
  const iconClose = document.querySelector('.nav__toggle__icon--close');


  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--active');

    const isMenuOpen = navLinks.classList.contains('nav__links--active');
    iconBurger.style.display = isMenuOpen ? 'none' : 'block';
    iconClose.style.display = isMenuOpen ? 'block' : 'none';
  });

  // const faqCard = document.getElementsByClassName('faq-card')
  // const faqToggle = document.getElementsByClassName('faq-card__toggle');
  // const faqIconOpen = document.querySelector('faq-card__toggle__icon--chevron-down');
  // const faqIconClose = document.querySelector('faq-card__toggle__icon--chevron-up');
  // const faqDesc = document.getElementsByClassName("faq-card__description");

  // faqToggle.addEventListener('click', () => {
  //   faqDesc.classList.toggle('faq-card__description');

  //   const isFaqOpen = faqCard.classList.contains('faq-card__description')
  //   faqIconOpen.style.display = isFaqOpen ? 'none' : 'block';
  //   faqIconClose.style.display = isFaqOpen ? 'block' : 'none';
  // })

  const toggleButtons = document.querySelectorAll('.faq-card__toggle');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.faq-card'); // busca la tarjeta más cercana
    const description = card.querySelector('.faq-card__description');
    const iconDown = button.querySelector('.faq-card__toggle__icon--chevron-down');
    const iconUp = button.querySelector('.faq-card__toggle__icon--chevron-up');

    // Alternamos la visibilidad de la descripción
    description.classList.toggle('faq-card__description--visible');

    // Alternamos los íconos
    const isVisible = description.classList.contains('faq-card__description--visible');
    iconDown.style.display = isVisible ? 'none' : 'block';
    iconUp.style.display = isVisible ? 'block' : 'none';
  });
});
});