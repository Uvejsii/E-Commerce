import { cart, addToCart } from "./shporta.js";
import { products } from "./produktet.js";

function fixPrice(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

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
});

let productCard = document.getElementById("products-container");
productCard.innerHTML = productsHTML;

let addBtn = document.querySelectorAll(".add-to-cart-btn");

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".card-quantity").innerHTML = cartQuantity;
}

addBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    addToCart(productId);
    updateCartQuantity();
  });
});
