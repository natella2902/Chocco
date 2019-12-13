const left = document.querySelector("#left");
const right = document.querySelector("#right");
const item = document.querySelector("#item");
const computed = getComputedStyle(item);

const minRight = -100;
const maxRight = 0;
const step = 100;
const reset = minRight;
let currentRight = 0;


item.style["transform"] = `translateX(${currentRight}vw)`;


right.addEventListener('click', function (e) {
    e.preventDefault();

    if (currentRight >= minRight ) {
        currentRight -= step;
        item.style["transform"] = `translateX(${currentRight}vw)`;

    } 

   
    if (currentRight < minRight) {
        currentRight = maxRight;
        item.style["transform"] = `translateX(${currentRight}vw)`;
        
    }

});


left.addEventListener('click', function (e) {
    e.preventDefault();

    if (currentRight <= maxRight) {
        currentRight += step;
        item.style["transform"] = `translateX(${currentRight}vw)`;

    }

    if (currentRight > maxRight) {
        currentRight = minRight;
        item.style["transform"] = `translateX(${currentRight}vw)`;
    
    }
});
