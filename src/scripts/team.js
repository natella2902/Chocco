const team = document.querySelector('.team__list');
const team__li = document.querySelector('.team__list').getElementsByTagName('li');

for (var i=0; i < team__li.length; i++) {
    team__li[i].addEventListener( 'click', function(event) {
      event.preventDefault();
      event.currentTarget.querySelector('.team__author').classList.toggle('team__author--active');
    })
}
  
 
  



 

