const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const mobileHamburguerMenu = document.querySelector('.mobile-hamburguer-menu');
const myOrders = document.querySelector(".my-orders");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");

navbarEmail.addEventListener('click', toggleDesktopMenu);
mobileHamburguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMyOrders);



function toggleDesktopMenu(){
    myOrders.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    myOrders.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleMyOrders(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    myOrders.classList.toggle('inactive');
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
        //Create all the elements
        const prodCard = document.createElement('div');
        prodCard.classList.add('product-card');
        cardsContainer.appendChild(prodCard);

        const prodImg = document.createElement('img');
        prodImg.setAttribute('src', product.imgUrl);
        prodCard.appendChild(prodImg);

        const prodInfo = document.createElement('div');
        prodInfo.classList.add('product-info');
        prodCard.appendChild(prodInfo);

        const infoContainer = document.createElement('div');
        prodInfo.appendChild(infoContainer);

        const prodPrice = document.createElement('p');
        prodPrice.innerHTML = product.price;
        infoContainer.appendChild(prodPrice);

        const prodName = document.createElement('p');
        prodName.innerHTML = product.prodName;
        infoContainer.appendChild(prodName);

        //insert classes
        //insert atributes
        //insert text
        //append child elements to each parent
    }
}

renderProducts(productList);
