let feedback__items = document.querySelectorAll('.feedback__item');
let feedback__slider__list = document.querySelector('.feedback__slider__list');
let feedback__item__active = document.querySelector('.feedback__item--active');

for (var i=0; i < feedback__items.length; i++) {

  feedback__items[i].addEventListener('click', function (event) {
    event.preventDefault();

    const ndx__fb = this.getAttribute('data-slide-index');

    console.log(this)

    feedback__slider__list.style.left = - ndx__fb * 100 + '%';

    arr = this.parentElement.children;
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove('feedback__item--active');
    }
    
    this.classList.add('feedback__item--active');
  }) 
    
}

  
