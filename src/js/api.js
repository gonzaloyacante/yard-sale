const API = "https://api.escuelajs.co/api/v1";
const cardsContainer = document.getElementById('cards-container');
const categoriesDesktopContainer = document.querySelector('.desktop-navbar-items-container');
const categoriesMobileContainer = document.querySelector('#mobile-navbar-items-container');

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

function showProducts() {
  (async () => {
    try {
      const products = await fetchData(`${API}/products`);
      const categories = await fetchData(`${API}/categories`);

      let card = `
        ${products.map(product => `
          <div onclick="showProductDetail()" class="products-card">
            <img
              src="${product.images}"
              alt="Imagen de ${product.title}"
            />
            <div class="cards-info">
              <div>
                <p class="cards-info_price">
                  $ ${product.price}
                </p>
                <p class="cards-info_title">
                  ${product.title}
                </p>
              </div>
              <figure>
                <img
                  src="./assets/icons/bt_add_to_cart.svg"
                  alt="Icono de un carrito, presionarlo agrega el producto al carrito." />
              </figure>
            </div>
          </div>
        `).slice(0,30).join('')}
      `;
      let navDesktopCategories = `
        ${categories.map(category => `
          <li>
            <input type="radio" id="${category.name}" checked />
            <label for="${category.name}">${category.name}</label>
          </li>
        `).join('')}
      `;
      let navMobileCategories = `
        <h2 class="title">CATEGORIES</h2>
        ${categories.map(category => `
          <li>
            <a href="#">${category.name}</a>
          </li>
        `).join('')}
      `;

      cardsContainer.innerHTML = card;
      categoriesDesktopContainer.innerHTML = navDesktopCategories;
      categoriesMobileContainer.innerHTML = navMobileCategories;
    } catch (error) {
      cardsContainer.classList.remove("cards-container")
      cardsContainer.classList.add("cards-container-cards-error")
      const showError= `
        <div class="cards-error-info">
          <h3>
            Ups! Ocurrió un error al intentar mostrar los productos, inténtalo nuevamente.
          </h3>
        </div>
      `;
      cardsContainer.innerHTML = showError;
    }
  })();
}

window.onload = showProducts;