const btn__hero = document.querySelector('.hamburger-menu-link');
const popup = document.querySelector('.popup');


btn__hero.addEventListener('click', function(e) {
  e.preventDefault();
  popup.style["display"] = 'flex';

});

popup.addEventListener('click', function(e){
  e.preventDefault();
  popup.style["display"] = 'none';
})

