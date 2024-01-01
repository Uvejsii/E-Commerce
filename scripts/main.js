import { cart, addToCart } from "./shporta.js";
import { products } from "./produktet.js";
import { fixPrice } from "./money.js";

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
    <div class="col">
    <div class="card shadow-lg">
      <img src="${product.image}" class="card-img-top" alt="..." />
      <div class="card-body position-relative">
        <div class="rating d-flex justify-content-between align-items-center mb-2">
          <img src="../Fotot/Vleresimet/vleresimi-${
            product.rating.stars * 10
          }.png" class="w-50" alt="" />
          <span class="text-primary">${product.rating.count}</span>
        </div>
        <h5 class="card-title fw-semibold">${product.name}</h5>
        <p class="card-text">${product.desc}</p>
        <h5 class="fw-semibold">${fixPrice(product.priceCents)} &euro;</h5>
        <div class="added-to-cart js-added-to-cart-${
          product.id
        } d-flex align-items-center fw-semibold text-success position-absolute top-50 my-5">
          <i class="bi bi-bag-check-fill"></i> <span class="ms-2 mt-1">U Shtua</span>
        </div>
        <button class="btn btn-danger add-to-cart-btn w-100 mt-3" data-product-id="${
          product.id
        }">Shto ne<i class="bi bi-bag ms-2"></i>
        </button>
      </div>
    </div>
  </div>
     `;
});

let productsContainer = document.getElementById("products-container");
productsContainer.innerHTML = productsHTML;

let addBtn = document.querySelectorAll(".add-to-cart-btn");

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}

addBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    addToCart(productId);
    updateCartQuantity();
  });
});

window.onload = function () {
  updateCartQuantity();
};

const input = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  const searchTxt = input.value.trim().toLowerCase();
  const matchedProducts = searchProducts(searchTxt);

  updateProducts(matchedProducts);
});

function searchProducts(searchTxt) {
  const lowerCaseSearchTerm = searchTxt.toLowerCase();
  const matchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(lowerCaseSearchTerm)
  );
  return matchedProducts;
}

function updateProducts(products) {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "col";
    productCard.innerHTML = `
      <div class="card shadow-lg">
        <img src="${product.image}" class="card-img-top" alt="..." />
        <div class="card-body position-relative">
        <div class="rating d-flex justify-content-between align-items-center mb-2">
        <img src="../Fotot/Vleresimet/vleresimi-${
          product.rating.stars * 10
        }.png" class="w-50" alt="" />
        <span class="text-primary">${product.rating.count}</span>
      </div>
      <h5 class="card-title fw-semibold">${product.name}</h5>
      <p class="card-text">${product.desc}</p>
      <p class="fw-semibold">${fixPrice(product.priceCents)} &euro;</p>
      <div class="added-to-cart js-added-to-cart-${
        product.id
      } d-flex align-items-center fw-semibold text-success position-absolute top-50 my-5">
        <i class="bi bi-bag-check-fill"></i> <span class="ms-2 mt-1">U Shtua</span>
      </div>
      <button class="btn btn-danger add-to-cart-btn w-100 mt-3" data-product-id="${
        product.id
      }">Shto ne<i class="bi bi-bag ms-2"></i>
      </button>
    </div>
        </div>
      </div>
    `;
    productsContainer.appendChild(productCard);

    document.querySelector(".carousel").style.display = "none";
    productsContainer.style.marginTop = "200px";
  });
  let addBtn = document.querySelectorAll(".add-to-cart-btn");

  updateCartQuantity();
  addBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;

      addToCart(productId);
      updateCartQuantity();
    });
  });
}
