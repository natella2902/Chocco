let teams = document.querySelectorAll('.team__item');

for (let i=0; i < teams.length; i++) {

    teams[i].addEventListener( 'click', function(event) {
      event.preventDefault();
      let cl =  event.currentTarget.childNodes[3].childNodes[1];
      let team__author = teams[i].querySelector('.team__author');
      

      for (let i=0; i < teams.length; i++) {
        teams[i].childNodes[3].childNodes[1].classList.remove('team__author--active');  
      }

      cl.classList.add('team__author--active');
 
    })


}
  
 
