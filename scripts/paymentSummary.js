import { cart } from "./shporta.js";
import { getProduct } from "./produktet.js";
import { fixPrice } from "./money.js";

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 1000;
  let taxPercentage = 0.08;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
  });

  let totalBeforeTax = productPriceCents + shippingPriceCents;
  let taxPriceCents = totalBeforeTax * taxPercentage;
  let overallPriceCents = totalBeforeTax + taxPriceCents;

  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  if (cartQuantity === 0) {
    shippingPriceCents = 0;
    totalBeforeTax = 0;
    taxPercentage = 0;
    overallPriceCents = 0;

    document.querySelector(".added-products").innerHTML = `
                      <h2 class="text-danger fw-semibold">
                        Ju nuk keni produkte ne shporte <i class="bi bi-bag-x fs-1"></i>
                      </h2>
                    `;
  }

  const paymentSummaryHTML = ` 
  <div class="card-header text-light bg-danger">
    Detajet e porosise
  </div>
  <div class="card-body">
    <div class="card-text">
      <div class="d-flex justify-content-between">
        <p>Artikujt (<span class="text-danger">${cartQuantity}</span>):</p>
        <p>${fixPrice(productPriceCents)} &euro;</p>
      </div>
      <div class="d-flex justify-content-between">
        <p>Transporti :</p>
        <p>${fixPrice(shippingPriceCents)} &euro;</p>
      </div>
      <div class="d-flex justify-content-between border-danger border-top">
        <p>Totali pa TVSH:</p>
        <p>${fixPrice(totalBeforeTax)} &euro;</p>
      </div>
      <div class="d-flex justify-content-between">
        <p>TVSH (8%) :</p>
        <p>${fixPrice(taxPriceCents)} &euro;</p>
      </div>
    </div>
  </div>
  <div class="card-footer border-top border-5 border-danger">
    <div class="d-flex justify-content-between text-danger">
      <h5 class="fw-semibold">Totali i porosise</h5>
      <h5 class="fw-semibold">${fixPrice(overallPriceCents)} &euro;</h5>
    </div>
    <button class="btn btn-danger w-100 fs-5 fw-semibold my-3">
      Porosit
    </button>
  </div>
  `;

  document.querySelector(".payment-summary").innerHTML = paymentSummaryHTML;
  document.querySelector(".cart-quantity-shporta").innerHTML = cartQuantity;
}
