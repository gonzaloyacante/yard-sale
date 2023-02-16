const desktopMenuMail = document.querySelector(".desktop-navbar-right_email");
const desktopMenuUser = document.querySelector(
  ".desktop-navbar-right_icon-user"
);
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileBurgerMenu = document.querySelector(".mobile-navbar-icon_menu");

const shoppingCart = document.querySelector(".shopping-cart");
const desktopIconCart = document.querySelector(
  ".desktop-navbar-right_icon-cart"
);
const mobileIconCart = document.querySelector(".mobile-navbar-icon_cart");

const cardsContainer = document.querySelector(".cards-container");

const productDetail = document.querySelector(".products-details");
const productDetailCloseIcon = document.querySelector(
  ".products-details-close"
);

// function toggleClassInactive(elemento){
//   elemento.classList.toggle("inactive");
// }

desktopMenuMail.addEventListener("click", toggleDesktopMenu);
desktopMenuUser.addEventListener("click", toggleDesktopMenu);
mobileBurgerMenu.addEventListener("click", toggleMobileMenu);

desktopIconCart.addEventListener("click", toggleShoppingCart);
mobileIconCart.addEventListener("click", toggleShoppingCart);

productDetailCloseIcon.addEventListener("click", closeProductDetail);

function showProductDetail() {
  productDetail.classList.remove("inactive");
  orderDetail.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCart.classList.add("inactive");
}

function closeProductDetail() {
  productDetail.classList.add("inactive");
}

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  orderDetail.classList.add("inactive");
  productDetail.classList.add("inactive");
  shoppingCart.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCart.classList.add("inactive");
  orderDetail.classList.add("inactive");
  productDetail.classList.add("inactive");
}

function toggleShoppingCart() {
  shoppingCart.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  orderDetail.classList.add("inactive");
  productDetail.classList.add("inactive");
}

function toggleOrderDetail() {
  orderDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetail.classList.add("inactive");
}

// function toggleDesktopMenu() {
//   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

//   if (!isAsideClosed) {
//     shoppingCartContainer.classList.add('inactive');
//   }

//   desktopMenu.classList.toggle('inactive');
// }

// function toggleMobileMenu() {
//   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

//   if (!isAsideClosed) {
//     shoppingCartContainer.classList.add('inactive');
//   }

//   closeProductDetailAside();

//   mobileMenu.classList.toggle('inactive');
// }

// function toggleCarritoAside() {
//   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

//   if (!isMobileMenuClosed) {
//     mobileMenu.classList.add('inactive');
//   }

//   const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

//   if (!isProductDetailClosed) {
//     productDetailContainer.classList.add('inactive');
//   }

//   shoppingCartContainer.classList.toggle('inactive');
// }

// function openProductDetailAside() {
//   shoppingCartContainer.classList.add('inactive');
//   productDetailContainer.classList.remove('inactive');
// }

// function closeProductDetailAside() {
//   productDetailContainer.classList.add('inactive');
// }

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Computadora",
  price: 565.89,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Patines",
  price: 230.25,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Autito",
  price: 60.0,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Escalera",
  price: 950.64,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Computadora",
  price: 565.89,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Patines",
  price: 230.25,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Autito",
  price: 60.0,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Escalera",
  price: 950.64,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Computadora",
  price: 565.89,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Patines",
  price: 230.25,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Autito",
  price: 60.0,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

productList.push({
  name: "Escalera",
  price: 950.64,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image product',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("products-card");

    const cardImage = document.createElement("img");
    cardImage.src = product.image;
    cardImage.addEventListener("click", showProductDetail);

    const cardInfo = document.createElement("div");
    const cardInfoDiv = document.createElement("div");
    cardInfo.classList.add("cards-info");

    const cardInfoPrice = document.createElement("p");
    cardInfoPrice.classList.add("cards-info_price");
    cardInfoPrice.innerText = `$ ${product.price}`;

    const cardInfoName = document.createElement("p");
    cardInfoName.classList.add("cards-info_title");
    cardInfoName.innerText = product.name;

    const cardFigure = document.createElement("figure");
    const cardFigureImgCart = document.createElement("img");
    cardFigureImgCart.src = "./assets/icons/bt_add_to_cart.svg";

    productCard.appendChild(cardImage);
    productCard.appendChild(cardInfo);
    cardInfo.appendChild(cardInfoDiv);
    cardInfoDiv.appendChild(cardInfoPrice);
    cardInfoDiv.appendChild(cardInfoName);
    cardInfo.appendChild(cardFigure);
    cardFigure.appendChild(cardFigureImgCart);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
