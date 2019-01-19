var btnNavOpen = document.querySelector('.btn__open--nav');
var navigation = document.querySelector('.navigation');

btnNavOpen.addEventListener('click', function() {
  navigation.classList.add('nav--show');
});
