let button = document.querySelector('.navigation__button');
let elem = document.querySelector('.header__nav');
let menuClose = document.querySelector('.navigation__closed');

button.addEventListener('click', function() {
	elem.classList.toggle('header-nav--opened');
  menuClose.classList.toggle('close');
});
