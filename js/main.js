if(document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", ready)
}else {
    ready();
}

function ready() {
    const cartButton = document.getElementsByClassName("product__addToCart");
    let counter = 0;
    for(let i = 0; i < cartButton.length; i++) {
        cartButton[i].addEventListener("click", () => {
            counter = counter + 1;
            addProductCounter(counter)
        })
    }
}

function addProductCounter(counter) {
    document.getElementsByClassName("header__addToCart-counter")[0].innerText = counter;
}