
(function () {
  let elem = document.querySelector('.header__nav');
  let menuClose = document.querySelector('.navigation div');
  let button = document.querySelector('.button');
  let navigation = document.querySelector('.navigation');
  let logo = document.querySelector('.header__logo');
  let back = document.querySelector('.header');

  /*Стили подключаюемые при загрузке файла*/
  button.classList.add('navigation__button');
  elem.classList.add('navigation__closed');

  back.classList.add('header__content--js');
  navigation.classList.add('navigation--js');
  logo.classList.add('header__logo--js');

  /*Стили, подключаемые при нажатии на кнопку*/
  button.addEventListener('click', function() {
  elem.classList.toggle('header-nav--opened');
  menuClose.classList.toggle('close');
  });
})();
