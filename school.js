let menuIcon = document.querySelector('.menu');
let closeIcon = document.querySelector('.close');
let navBar = document.querySelector('.nav-link');

menuIcon.addEventListener('click', ()=>{
    navBar.classList.add('open-active');
});
closeIcon.addEventListener('click', ()=>{
    navBar.classList.remove('open-active');
})

// Entering another page
var tabContents = document.getElementsByClassName('tab-contents');

function openname(tabname){
    for(tabContent of tabContents){
        tabContent.classList.remove('tab-active');
    }
    document.getElementById(tabname).classList.add('tab-active');
}

//The Dropdown on Top in the Header begin here
const dropDown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
dropDown.addEventListener('click', ()=>{
    dropdownMenu.classList.toggle('menu-active');
})
window.onscroll = function(){
    dropdownMenu.classList.remove('menu-active');
}

//Js for clicking the SignOut
const signOut = document.querySelector('.sign-out');
signOut.addEventListener('click', ()=>{
    window.location.href = "sign.html";
    window.location.remove = "school.html";
})
//The Dropdown on Top in the Header End here

//School Cart Begin here
if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
};

function ready(){
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    //Quantity Change

    //Adding to Cart
    var addCart = document.getElementsByClassName("add-cart");
    for(var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
}

//Remove Item from cart 2
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//Adding to cart 2
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('pro-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    
    addProductToCart(title,price);
    updatetotal();
}
//calling the addProductToCart function
function addProductToCart(title,price){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsName = cartItems.getElementsByClassName('cart-title');
    for(var i = 0; i < cartItemsName.length; i++){
        if(cartItemsName[i].innerText == title){
            alert("You have added this product before");
            return;
        }
    }
    //Putting content into Js
    var cartBoxContent = `                              
           
            <div class="cart-title">${title}</div>
            <div class="cart-price">${price}</div>
            <i class="fa fa-trash cart-remove"></i>
            `;
    cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem)


}


// function for the updateTotal()
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        //var priceEle = cartBox.getElementsByClassName('cart-price');
        //var pri = parseFloat(priceEle.innerText.replace("N", ""));
        var price = parseFloat(priceElement.innerText.replace("N", ""));
        //var quantityEle = cartBox.getElementsByClassName('cart-quantity');
        total = total + (price);
    }

    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('total-price')[0].innerText = 'N' + total;
}

//School Cart End here*/