const products = [
  {
    id: "1a",
    image: "./Fotot/Produktet/blinder.jpg",
    name: "Blender",
    desc: "Pajisje kuzhine, performancë e lartë",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 5990,
  },
  {
    id: "2a",
    image: "./Fotot/Produktet/cante-shpine-zeze.jpg",
    name: "Cante shpine",
    desc: "Cante shpine e zeze, me tre patente",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 1779,
  },
  {
    id: "3a",
    image: "./Fotot/Produktet/duks-portokallt.jpg",
    name: "Duks",
    desc: "Duks Adidas i portokallt, dizajn modern dhe i pershtashem",
    rating: {
      stars: 3.5,
      count: 52,
    },
    priceCents: 2090,
  },
  {
    id: "4a",
    image: "./Fotot/Produktet/embrella.jpg",
    name: "Embrella",
    desc: "Cader praktike Doppler London, e gjelber",
    rating: {
      stars: 5,
      count: 39,
    },
    priceCents: 1000,
  },
  {
    id: "5a",
    image: "./Fotot/Produktet/kapele-dielli.webp",
    name: "Kapele dielli",
    desc: "Kapele dielli per plazhe, e verdhe me vija te zeza",
    rating: {
      stars: 3,
      count: 25,
    },
    priceCents: 1515,
  },
  {
    id: "6a",
    image: "./Fotot/Produktet/kosh-mbeturinash-60-litersh.jpg",
    name: "Kosh plehrash",
    desc: "Kosh plehrash 60L me pedale, i argjente",
    rating: {
      stars: 5,
      count: 27,
    },
    priceCents: 1130,
  },
  {
    id: "7a",
    image: "./Fotot/Produktet/meshkuj-golf-polo-maice-kalter.jpg",
    name: "Maice golf polo",
    desc: "Maice per meshkuj golf polo, e kalter",
    rating: {
      stars: 5,
      count: 61,
    },
    priceCents: 1050,
  },
  {
    id: "8a",
    image: "./Fotot/Produktet/meshkuj-maice-pambuk-2-cope-kalter.jpg",
    name: "Maice pambuku",
    desc: "Maice pambuku 2-Cope, te kalterta ",
    rating: {
      stars: 1,
      count: 12,
    },
    priceCents: 1350,
  },
  {
    id: "9a",
    image: "./Fotot/Produktet/meshkuj-pantolla-krem.jpg",
    name: "Pantolla krem",
    desc: "Pantolla per meshkuj masa-XXL, krem",
    rating: {
      stars: 4.5,
      count: 54,
    },
    priceCents: 1799,
  },
  {
    id: "10a",
    image: "./Fotot/Produktet/meshkuj-patike-gjelber.jpg",
    name: "Patike per sport",
    desc: "Patike sportive per meshkuj, te gjelberta",
    rating: {
      stars: 5,
      count: 23,
    },
    priceCents: 2050,
  },
  {
    id: "11a",
    image: "./Fotot/Produktet/meshkuj-syze-dielli-kafte.jpg",
    name: "Syze dielli",
    desc: "Syze kunder diellit Mont Blanc, te kafta",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 1090,
  },
  {
    id: "12a",
    image: "./Fotot/Produktet/pjata-6-cope-seti.jpg",
    name: "Set pjata 6-cope",
    desc: "Set pjata Lamart Dine, 6-cope, te bardha",
    rating: {
      stars: 2.5,
      count: 17,
    },
    priceCents: 1750,
  },
  {
    id: "13a",
    image: "./Fotot/Produktet/top-basketbolli.jpg",
    name: "Top Basketbolli",
    desc: "Top basketbolli Amazon Size-5, i kafte",
    rating: {
      stars: 5,
      count: 38,
    },
    priceCents: 1250,
  },
  {
    id: "14a",
    image: "./Fotot/Produktet/toster-zeze.jpg",
    name: "Toster 1800W",
    desc: "Toster 1800W Esperanza me 2 vende, i zi",
    rating: {
      stars: 4.5,
      count: 58,
    },
    priceCents: 4020,
  },
  {
    id: "15a",
    image: "./Fotot/Produktet/vath-lule.webp",
    name: "Vathe forme lule",
    desc: "Vathe forme luleje, 18 karatesh, guri i kaltert",
    rating: {
      stars: 4,
      count: 9,
    },
    priceCents: 2299,
  },
  {
    id: "16a",
    image: "./Fotot/Produktet/vlues-uji.webp",
    name: "Vlues uji 1.5L",
    desc: "Vlues uji Amazon 1.5L 2200W, transparent",
    rating: {
      stars: 4.5,
      count: 55,
    },
    priceCents: 1499,
  },
];

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
   <div class="col">
     <div class="card shadow-sm">
      <img src="${product.image}" class="card-img-top" alt="..." />
       <div class="card-body">
       <div class="rating d-flex justify-content-between align-items-center mb-2">
            <img src="./Fotot/Vleresimet/vleresimi-${
              product.rating.stars * 10
            }.png" class="w-50" alt="" />
                <span>${product.rating.count}</span>
        </div>
         <h5 class="card-title fw-semibold">${product.name}</h5>
          <p class="card-text ">
           ${product.desc}
          </p>
          <p>${product.priceCents} &euro;</p>
          <button class="btn btn-danger w-100">Shto ne shporte<i class="bi bi-bag ms-2"></i></button>
      </div>
     </div>
   </div>
   `;
});

let productCard = document.getElementById("products-container");
productCard.innerHTML = productsHTML;
