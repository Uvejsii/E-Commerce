import { products } from "./produktet.js";

export const cart = [
  {
    productId: "3a",
    quantity: 2,
  },
  {
    productId: "2a",
    quantity: 1,
  },
];

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

  cartHTML += `
    <div class="card mb-3 shadow-lg">
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
                    <p class="card-text fw-semibold">${
                      matchingProduct.priceCents / 100
                    } &euro;</p>
                    <p class="card-text fw-bold">
                    Sasia: <span>${
                      cartItem.quantity
                    }</span> <a href="" class="ms-3">Hiq nga shporta</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;
});

document.querySelector(".added-products").innerHTML = cartHTML;
console.log(cartHTML);
