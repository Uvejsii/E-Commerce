import { products } from "./produktet.js";
import { fixPrice } from "./money.js";

export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "3a",
      quantity: 2,
    },
    {
      productId: "2a",
      quantity: 1,
    },
  ];
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);

  addedMessage.classList.add("added-to-cart-visible");
  setTimeout(() => {
    addedMessage.classList.remove("added-to-cart-visible");
  }, 1250);

  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }

  saveToStorage();
}

let cartHTML = "";

cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

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
                      }">Hiq nga shporta</button>
                  </div>
              </div>
          </div>
      </div>
      `;
  });

  // if (matchingProduct) {
  //   cartHTML += `
  //   <div class="card mb-3 shadow-lg cart-item-container-${matchingProduct.id}">
  //       <div class="row g-0">
  //           <div class="col-md-4 d-flex align-items-center justify-content-center">
  //               <img
  //                   src="${matchingProduct.image}"
  //                   class="img-fluid rounded-start"
  //                   alt="..."
  //               />
  //           </div>
  //           <div class="col-md-8">
  //               <div class="card-body">
  //                   <h5 class="card-title fw-semibold">${
  //                     matchingProduct.name
  //                   }</h5>
  //                   <p class="card-text fw-bold text-danger">${fixPrice(
  //                     matchingProduct.priceCents
  //                   )} &euro;</p>
  //                   <p class="card-text fw-bold">
  //                   Sasia: ${cartItem.quantity}
  //                   </p>
  //                   <button class="btn btn-outline-danger delete-btn fw-semibold w-100" data-product-id="${
  //                     matchingProduct.id
  //                   }">Hiq nga shporta</button>
  //               </div>
  //           </div>
  //       </div>
  //   </div>
  //   `;
  // } else {
  //   console.error(`No matching product found for ID: ${productId}`);
  // }
});

let addedContainer = document.querySelector(".added-products");

if (addedContainer) {
  addedContainer.innerHTML = cartHTML;
}

function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

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
