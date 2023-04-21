const API = "https://api.escuelajs.co/api/v1";
const categoriesContainer = document.getElementById('categories-container');

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

function showCategories() {
  (async () => {
    try {
      const categories = await fetchData(`${API}/categories`);

      let navCategories = `
        ${categories.map(category => `
          <li>
            <input type="radio" name="desktop-navbar" id="${category.name}" checked />
            <label for="${category.name}">${category.name}</label>
          </li>
        `).join('')}
      `;

      cardsContainer.innerHTML = card;
      categoriesContainer.innerHTML = navCategories;
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  })();
}

window.onload = showCategories;