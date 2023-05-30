const navEmail = document.querySelector('.navbar-email');
const desktMen = document.querySelector('.desktop-menu');
const hidMen = document.querySelector('.menu');
const mobileHidMen = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')


hidMen.addEventListener("click", showHidMen )
navEmail.addEventListener("click", showDesktMenu );
shoppingCart.addEventListener("click", showShoppingCart)

function showHidMen(){
    const isShoppingCartContainer = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainer) {
     shoppingCartContainer.classList.add('inactive')
    }
    mobileHidMen.classList.toggle('inactive');
}

function showDesktMenu (){
    const isAsideProductDetailClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideProductDetailClose) {
        shoppingCartContainer.classList.add('inactive')
    }
    desktMen.classList.toggle('inactive');
}
function showShoppingCart(){
    const isMobileHidMenClose = mobileHidMen.classList.contains('inactive');
    
    if (!isMobileHidMenClose) {
    mobileHidMen.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')
}

const productList = [];

productList.push({
name: "Bike",
price: 200,
image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"   
});
productList.push({
name: "Pantalla",
price: 400,
image: "https://http2.mlstatic.com/D_NQ_NP_916724-MLA46165310467_052021-O.jpg"   
});
productList.push({
name: "Computadora",
price: 600,
image: "https://http2.mlstatic.com/D_NQ_NP_896471-MLA53515357380_012023-O.jpg"   
});
productList.push({
    name: "X-BOX 360",
    price: 900,
    image: "https://m.media-amazon.com/images/I/51fAvpBWgmL.jpg"   
    });

function renderProducts(arr){
for (product of arr){
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')
    
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName)
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    
    productInfoFigure.append(productImgCart);
    productInfo.append(productInfoDiv, productInfoFigure)
    productCard.append(productImg, productInfo)
    cardsContainer.append(productCard);
}
};
renderProducts(productList);