document.addEventListener('DOMContentLoaded', () => {
  toggleHeaderClass();
  window.addEventListener('scroll', toggleHeaderClass);

  const burger = document.querySelector('.header__burger');
  const header = document.querySelector('header.header');
  const body = document.body;
  const navItems = document.querySelectorAll('.header-mob-menu .header__nav-item');

  if (burger && header) {
    burger.addEventListener('click', () => {
      header.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
  }

  if (navItems.length > 0) {
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        header.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    });
  }
});

function toggleHeaderClass() {
  const header = document.querySelector('header.header');
  if (!header) return;

  const halfScreenHeight = window.innerHeight / 2;
  const scrolled = window.scrollY;

  if (scrolled > halfScreenHeight) {
    header.classList.add('move');
  } else {
    header.classList.remove('move');
  }
}
