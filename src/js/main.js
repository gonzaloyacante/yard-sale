const desktopMenuMail = document.querySelector(".desktop-navbar-right_email");
const desktopMenuUser = document.querySelector(
  ".desktop-navbar-right_icon-user"
);
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileBurgerMenu = document.querySelector(".mobile-navbar-icon_menu");

const shoppingCart = document.querySelector(".shopping-cart");
const desktopIconCart = document.querySelector(".desktop-navbar-right_icon-cart");
const mobileIconCart = document.querySelector(".mobile-navbar-icon_cart");

// const cardsContainer = document.querySelector(".cards-container");

const productDetail = document.querySelector(".products-details");
const productDetailCloseIcon = document.querySelector(".products-details-close");

const productsCard = document.querySelector('.products-card');

desktopMenuMail.addEventListener("click", toggleDesktopMenu);
desktopMenuUser.addEventListener("click", toggleDesktopMenu);
mobileBurgerMenu.addEventListener("click", toggleMobileMenu);

desktopIconCart.addEventListener("click", toggleShoppingCart);
mobileIconCart.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCart.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCart.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCart.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCart.classList.add("inactive");
  }

  closeProductDetail();

  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }

  shoppingCart.classList.toggle("inactive");
}

function showProductDetail() {
  shoppingCart.classList.add("inactive");
  productDetail.classList.remove("inactive");
}

function closeProductDetail() {
  productDetail.classList.add("inactive");
}