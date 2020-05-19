; (function() {
    const acco__list = document.querySelector('.acco__list');

    acco__list.addEventListener('click', function(e){
        if (e.target.className === "acco__title") {
            e.target.parentNode.parentElement.classList.toggle('activel');
            const itemId = localStorage.getItem('itemId');
            localStorage.setItem('itemId', e.target.parentNode.parentElement.id);
    
            if (itemId != e.target.parentNode.parentElement.id) {
                document.getElementById(itemId).classList.remove('activel');
                localStorage.removeItem('itemId');
                localStorage.setItem('itemId', e.target.parentNode.parentElement.id);        
            }
    
            if (window.innerWidth <= 770 && e.target.parentNode.parentElement.classList.contains('activel')) {
                
                if(!e.target.parentNode.parentElement.previouseElementSibling) {
                    acco__list.style.transform = 'translateX(170px)';                
                } else if (e.target.parentNode.parentElement.nextElementSibling) {
                    acco__list.style.transform = 'translateX(0)';
                } else {
                    acco__list.style.transform = 'translateX(85px)';
                }
                e.target.nextElementSibling.style.width = `${window.innerWidth - 85}px`;
            } else {
                acco__list.style.transform = 'translateX(0)';
            }
        }
    })
    
    
})();

