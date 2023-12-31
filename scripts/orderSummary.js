import { cart, removeFromCart } from "./shporta.js";
import { products } from "./produktet.js";
import { fixPrice } from "./money.js";

export function renderOrderSummary() {
  let cartHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingProduct;

    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });

    cartHTML += `
              <div class="card mb-3 shadow-lg cart-item-container-${
                matchingProduct.id
              }">
                  <div class="row g-0">
                      <div class="col-md-4 d-flex align-items-center justify-content-center">
                          <img
                              src="${matchingProduct.image}"
                              class="img-fluid rounded-start"
                              alt="..."
                          />
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title fw-semibold">${
                                matchingProduct.name
                              }</h5>
                              <p class="card-text fw-bold text-danger">${fixPrice(
                                matchingProduct.priceCents
                              )} &euro;</p>
                              <p class="card-text fw-bold">
                              Sasia: ${cartItem.quantity}
                              </p>
                              <button class="btn btn-outline-danger delete-btn fw-semibold w-100" data-product-id="${
                                matchingProduct.id
                              }">Hiq nga shporta
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
              `;
  });

  document.querySelector(".added-products").innerHTML = cartHTML;

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = btn.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(
        `.cart-item-container-${productId}`
      );
      container.remove();
    });
  });
}
