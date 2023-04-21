import API from "../api";
function showProducts() {
  const cardsContainer = document.getElementById('cards-container');

  (async () => {
    try {
      const products = await fetchData(`${API}/products`);

      let card = `
        ${products.map(product => `
          <div class="products-card">
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
      cardsContainer.innerHTML = card;
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  })();

  window.onload = showProducts;
}

export default showProducts;