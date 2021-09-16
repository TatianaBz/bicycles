let button = document.querySelector('.sait-nav__button');
let elem = document.querySelector('.myDropdown');

button.addEventListener('click', function() {
	elem.classList.toggle('opened');
});
