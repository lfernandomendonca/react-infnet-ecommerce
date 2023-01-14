const products = {
  1: {
    name: "Pokémon Blue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://www.mobygames.com/images/covers/l/14426-pokemon-blue-version-game-boy-front-cover.jpg",
      "https://www.mobygames.com/images/covers/l/14427-pokemon-blue-version-game-boy-back-cover.jpg",
      "https://www.mobygames.com/images/covers/l/23702-pokemon-blue-version-game-boy-media.jpg"
    ],
    price: 299.99,
    promo_price: 254.99,
    percent: 15, 
    categories: [1, 2, 3],
  },
  2: {
    name: "Pokémon Red",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://www.mobygames.com/images/covers/l/30873-pokemon-red-version-game-boy-front-cover.jpg",
      "https://www.mobygames.com/images/covers/l/30874-pokemon-red-version-game-boy-back-cover.jpg",
      "https://www.mobygames.com/images/covers/l/30875-pokemon-red-version-game-boy-media.jpg",
    ],
    price: 299.99,
    promo_price: 254.99,
    percent: 15,
    categories: [1, 2],
  },
  3: {
    name: "Pokémon Yellow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://www.mobygames.com/images/covers/l/72185-pokemon-yellow-version-special-pikachu-edition-game-boy-front-cover.jpg",
      "https://www.mobygames.com/images/covers/l/72186-pokemon-yellow-version-special-pikachu-edition-game-boy-back-cover.jpg",
      "https://www.mobygames.com/images/covers/l/36287-pokemon-yellow-version-special-pikachu-edition-game-boy-media.jpg",
    ],
    price: 299.99,
    promo_price: 254.99,
    percent: 15,
    categories: [1, 3],
  },
  4: {
    name: "Pokemon Gold",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://www.mobygames.com/images/covers/l/51564-pokemon-gold-version-game-boy-color-front-cover.jpg",
      "https://www.mobygames.com/images/covers/l/465059-pokemon-gold-version-game-boy-color-back-cover.jpg",
      "https://www.mobygames.com/images/covers/l/35582-pokemon-gold-version-game-boy-color-media.jpg",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: 33,
    categories: [1, 3, 4],
  },

  5: {
    name: "Pokémon Silver",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://www.mobygames.com/images/covers/l/34814-pokemon-silver-version-game-boy-color-front-cover.jpg",
      "https://www.mobygames.com/images/covers/l/34815-pokemon-silver-version-game-boy-color-back-cover.jpg",
      "https://www.mobygames.com/images/covers/l/47727-pokemon-silver-version-game-boy-color-media.jpg"
    ],
    price: 269.99,
    percent: 15,
    categories: [1, 2, 3],
  },

  6: {
    name: "Pokémon Crystal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://www.mobygames.com/images/covers/l/242737-pokemon-crystal-version-game-boy-color-front-cover.png",
      "https://www.mobygames.com/images/covers/l/242752-pokemon-crystal-version-game-boy-color-back-cover.png",
      "https://www.mobygames.com/images/covers/l/87781-pokemon-crystal-version-game-boy-color-media.png"
    ],
    price: 299.99,
    promo_price: 254.99,
    percent: 15,
    categories: [5, 2, 3],
  },

  7: {
    name: "Pokémon Ruby",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://www.mobygames.com/images/covers/l/64624-pokemon-ruby-version-game-boy-advance-front-cover.jpg",
      "https://www.mobygames.com/images/covers/l/36207-pokemon-ruby-version-game-boy-advance-back-cover.jpg",
      "https://www.mobygames.com/images/covers/l/36208-pokemon-ruby-version-game-boy-advance-media.jpg"
    ],
    price: 299.99,
    promo_price: 254.99,
    percent: 15,
    categories: [5, 3, 4],
  },
  
  8: {
    name: "Pokémon Sapphire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://www.mobygames.com/images/covers/l/31130-pokemon-sapphire-version-game-boy-advance-front-cover.jpg",
      "https://www.mobygames.com/images/covers/l/31131-pokemon-sapphire-version-game-boy-advance-back-cover.jpg",
      "https://www.mobygames.com/images/covers/l/36447-pokemon-sapphire-version-game-boy-advance-media.jpg"
    ],
    price: 299.99,
    promo_price: 254.99,
    percent: 15,
    categories: [5, 3],
  },

  9: {
    name: "Pokémon Emerald",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://www.mobygames.com/images/covers/l/47698-pokemon-emerald-version-game-boy-advance-front-cover.jpg",
      "https://www.mobygames.com/images/covers/l/47699-pokemon-emerald-version-game-boy-advance-back-cover.jpg",
      "https://www.mobygames.com/images/covers/l/87488-pokemon-emerald-version-game-boy-advance-media.jpg"
    ],
    price: 299.99,
    promo_price: 254.99,
    percent: 15,
    categories: [2, 3, 4],
  },
  

};

const categories = {
  1: { name: "GameBoy" },
  2: { name: "Bestseller" },
  3: { name: "Usado" },
  4: { name: "Sem Caixa" },
  5: { name: "GameBoy Advance"}
};

module.exports = {
  products,
  categories,
};
