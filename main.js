const navbarEmail = document.querySelector('.navbar-email');
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const mobileHamburguerMenuIcon = document.querySelector('.mobile-hamburguer-menu');
const myOrders = document.querySelector(".my-orders");
let productDetails;
let prodDetailsCloseIcon;
const cardsContainer = document.querySelector(".cards-container");


navbarEmail.addEventListener('click', toggleDesktopMenu);
mobileHamburguerMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMyOrders);



function toggleDesktopMenu(){
    if(productDetails != undefined){
        productDetails.classList.add('inactive');
    }
    myOrders.classList.add('inactive');
    productDetails.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    if(productDetails != undefined){
        productDetails.classList.add('inactive');
    }
    myOrders.classList.add('inactive');
    productDetails.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleMyOrders(){
    if(productDetails != undefined){
        productDetails.classList.add('inactive');
    }
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetails.classList.add('inactive');
    myOrders.classList.toggle('inactive');
}


function openProdDetails(event){
    if(productDetails != undefined){
        productDetails.classList.add('inactive');
    }
    const id = event.target.parentElement.id;
    const prodDetails = document.querySelector(`.${id}`);
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    myOrders.classList.add('inactive');
    prodDetails.classList.remove('inactive');
    productDetails = prodDetails;
}

function closeProdDetails(){
    productDetails.classList.add('inactive');
}



function product(_id, prodName, price, imgUrl, description){
    this._id = _id;
    this.prodName = prodName;
    this.price = price;
    this.imgUrl = imgUrl;
    this.description = description;
}

//List of articles being sold in the ecommerce.
const productList = [];
productList.push(new product(
    'g1',
    "Glasses",
    250,
    "https://image4.cdnsbg.com/2/73/601369_1651585367163.jpg?width=900&height=450&q=90",
    "A pair of nice rowndly shaped honey colored glasses."));
productList.push(new product(
    's1',
    "Sneakers",
    100,
    "https://media1.popsugar-assets.com/files/thumbor/_pb-tGgTHMuKTwztuYu2Gu0P2Aw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/07/864/n/1922564/4bd3f98bbff821a9_netimgcNQjT8/i/Vans-Style-36.jpg",
    "A pair of orange vans sneakers that strike the eye."));
productList.push(new product(
    't1',
    "tshirt",
    50,
    'https://img01.ztat.net/article/spp-media-p1/8f6d6138e437492b8893c5b3b0aa650f/ad5fd4218dc34c2f90f77818950775a5.jpg?imwidth=762',
    "Comfortable fitted black tshirt."));

//articles and their container HTML
function renderProductsAndInfo(arr){
    for(product of arr){
        //render product details
        const prodCard = document.createElement('div');
        prodCard.classList.add(`product-card`);
        prodCard.setAttribute('id', product._id);
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

        //Render product detail cards
        const prodDetailsCard = document.createElement('aside');
        prodDetailsCard.classList.add(`product-detail`);
        prodDetailsCard.classList.add('inactive');
        prodDetailsCard.classList.add(product._id);
        document.body.appendChild(prodDetailsCard);

        prodDetailsCloseIcon = document.createElement('div');
        prodDetailsCloseIcon.classList.add('product-detail-close');
        prodDetailsCard.appendChild(prodDetailsCloseIcon);
        prodDetailsCloseIcon.addEventListener('click', closeProdDetails);

        const prodDetailsCloseImg = document.createElement('img');
        prodDetailsCloseImg.setAttribute('src', './icons/icon_close.png');
        prodDetailsCloseIcon.appendChild(prodDetailsCloseImg);

        const prodImg2 = document.createElement('img');
        prodImg2.setAttribute('src', product.imgUrl);
        prodDetailsCard.appendChild(prodImg2);

        const prodInfo2 = document.createElement('div');
        prodInfo2.classList.add('product-info');
        prodDetailsCard.appendChild(prodInfo2);

        const prodPrice2 = document.createElement('p');
        prodPrice2.innerHTML = '$' + product.price;
        prodInfo2.appendChild(prodPrice2);

        const prodName2 = document.createElement('p');
        prodName2.innerHTML =  product.prodName;
        prodInfo2.appendChild(prodName2);

        const prodDescription= document.createElement('p');
        prodDescription.innerHTML =  product.description;
        prodInfo2.appendChild(prodDescription);

        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('primary-button');
        addToCartButton.classList.add('add-to-cart-button');
        addToCartButton.innerHTML = 'Add to cart';
        prodInfo2.appendChild(addToCartButton);

        const  addToCartButtonImg = document.createElement('img');
        addToCartButtonImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        addToCartButton.appendChild(addToCartButtonImg);
    }
}
renderProductsAndInfo(productList);
