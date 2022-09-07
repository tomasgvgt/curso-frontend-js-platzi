const navbarEmail = document.querySelector('.navbar-email');
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const mobileHamburguerMenuIcon = document.querySelector('.mobile-hamburguer-menu');
const myOrders = document.querySelector(".my-orders");
const productDetails = document.querySelector(".product-detail");
const prodDetailsCloseIcon = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");


navbarEmail.addEventListener('click', toggleDesktopMenu);
mobileHamburguerMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMyOrders);
prodDetailsCloseIcon.addEventListener('click', closeProdDetails);



function toggleDesktopMenu(){
    myOrders.classList.add('inactive');
    productDetails.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    myOrders.classList.add('inactive');
    productDetails.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleMyOrders(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetails.classList.add('inactive');
    myOrders.classList.toggle('inactive');
}

function openProdDetails(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    myOrders.classList.add('inactive');
    productDetails.classList.remove('inactive');
}

function closeProdDetails(){
    productDetails.classList.add('inactive');
}


function product(prodName, price, imgUrl){
    this.prodName = prodName;
    this.price = price;
    this.imgUrl = imgUrl;
}


//List of articles being sold in the ecommerce.
const productList = [];
productList.push(new product("Glasses", 250, "https://image4.cdnsbg.com/2/73/601369_1651585367163.jpg?width=900&height=450&q=90"));
productList.push(new product("sneaker", 100, "https://media1.popsugar-assets.com/files/thumbor/_pb-tGgTHMuKTwztuYu2Gu0P2Aw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/07/864/n/1922564/4bd3f98bbff821a9_netimgcNQjT8/i/Vans-Style-36.jpg"));
productList.push(new product("tshirt", 50, 'https://img01.ztat.net/article/spp-media-p1/8f6d6138e437492b8893c5b3b0aa650f/ad5fd4218dc34c2f90f77818950775a5.jpg?imwidth=762'));

//articles and their container HTML
function renderProducts(arr){
    for(product of arr){
        const prodCard = document.createElement('div');
        prodCard.classList.add('product-card');
        cardsContainer.appendChild(prodCard);

        const prodImg = document.createElement('img');
        prodImg.setAttribute('src', product.imgUrl);
        prodCard.appendChild(prodImg);
        prodImg.addEventListener('click', openProdDetails);

        const prodInfo = document.createElement('div');
        prodInfo.classList.add('product-info');
        prodCard.appendChild(prodInfo);

        const infoContainer = document.createElement('div');
        prodInfo.appendChild(infoContainer);

        const prodPrice = document.createElement('p');
        prodPrice.innerHTML = "$" + product.price;
        infoContainer.appendChild(prodPrice);

        const prodName = document.createElement('p');
        prodName.innerHTML = product.prodName;
        infoContainer.appendChild(prodName);

        const addToCart = document.createElement('figure');
        const addToCartImg = document.createElement('img');
        addToCartImg.setAttribute('src', "./icons/bt_add_to_cart.svg");
        addToCart.appendChild(addToCartImg);
        prodInfo.appendChild(addToCart);
    }
}
renderProducts(productList);


