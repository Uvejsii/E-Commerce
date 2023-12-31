export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "../Fotot/Produktet/blinder.jpg",
    name: "Blender",
    desc: "Pajisje kuzhine, performancë e lartë",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 5990,
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "../Fotot/Produktet/pasqyre-silver.jpg",
    name: "Pasqyre Silver",
    desc: "Pasqyre Silver, levizese, masa e vogel",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 1779,
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "../Fotot/Produktet/duks-portokallt.jpg",
    name: "Duks",
    desc: "Duks Adidas i portokallt, dizajn modern dhe i pershtashem",
    rating: {
      stars: 3.5,
      count: 52,
    },
    priceCents: 2090,
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "../Fotot/Produktet/peshqir-pambuku-kalter.webp",
    name: "Peshqir pambuku",
    desc: "Peshqir 100% pambuk, 2cope, kalter",
    rating: {
      stars: 5,
      count: 39,
    },
    priceCents: 1000,
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "../Fotot/Produktet/kapele-dielli.webp",
    name: "Kapele dielli",
    desc: "Kapele dielli per plazhe, e verdhe me vija te zeza",
    rating: {
      stars: 3,
      count: 25,
    },
    priceCents: 1515,
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "../Fotot/Produktet/kosh-mbeturinash-60-litersh.jpg",
    name: "Kosh plehrash",
    desc: "Kosh plehrash 60L me pedale, i argjente",
    rating: {
      stars: 5,
      count: 27,
    },
    priceCents: 1130,
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "../Fotot/Produktet/meshkuj-golf-polo-maice-kalter.jpg",
    name: "Maice golf polo",
    desc: "Maice per meshkuj golf polo, e kalter",
    rating: {
      stars: 5,
      count: 61,
    },
    priceCents: 1050,
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "../Fotot/Produktet/meshkuj-maice-pambuk-2-cope-kalter.jpg",
    name: "Maice pambuku",
    desc: "Maice pambuku 2-Cope, te kalterta ",
    rating: {
      stars: 1,
      count: 12,
    },
    priceCents: 1350,
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "../Fotot/Produktet/meshkuj-pantolla-krem.jpg",
    name: "Pantolla krem",
    desc: "Pantolla per meshkuj masa-XXL, krem",
    rating: {
      stars: 4.5,
      count: 54,
    },
    priceCents: 1799,
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "../Fotot/Produktet/meshkuj-patike-gjelber.jpg",
    name: "Patike per sport",
    desc: "Patike sportive per meshkuj, te gjelberta",
    rating: {
      stars: 5,
      count: 23,
    },
    priceCents: 2050,
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "../Fotot/Produktet/meshkuj-syze-dielli-kafte.jpg",
    name: "Syze dielli",
    desc: "Syze kunder diellit Mont Blanc SOVL274, te kafta",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 1090,
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "../Fotot/Produktet/pjata-6-cope-seti.jpg",
    name: "Set pjata 6-cope",
    desc: "Set pjata Lamart Dine, 6-cope, te bardha",
    rating: {
      stars: 2.5,
      count: 17,
    },
    priceCents: 1750,
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "../Fotot/Produktet/corape-pambuku-6-cope.jpg",
    name: "Corape pambuku",
    desc: "Corape pambuku per sport, 6-cope",
    rating: {
      stars: 5,
      count: 38,
    },
    priceCents: 1250,
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "../Fotot/Produktet/toster-zeze.jpg",
    name: "Toster 1800W",
    desc: "Toster 1800W Esperanza me 2 vende, i zi",
    rating: {
      stars: 4.5,
      count: 58,
    },
    priceCents: 4020,
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "../Fotot/Produktet/vath-lule.webp",
    name: "Vathe forme lule",
    desc: "Vathe forme luleje, 18 karatesh, guri i kaltert",
    rating: {
      stars: 4,
      count: 9,
    },
    priceCents: 2299,
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "../Fotot/Produktet/vlues-uji.webp",
    name: "Vlues uji 1.5L",
    desc: "Vlues uji Amazon 1.5L 2200W, transparent",
    rating: {
      stars: 4.5,
      count: 55,
    },
    priceCents: 1499,
  },
];
