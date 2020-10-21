import ShoppingList from "./shoppingList.js";

const app = document.querySelector("#app");

const shoppingList = [
  {
    itemName: "carrots",
    description: "Delicious carrots from the greenest fields"
  },
  {
    itemName: "bread",
    description: "Organic bread baked in wooden oven"
  },
  {
    itemName: "oil",
    description: "Natural hand picked olive oil"
  },
  {
    itemName: "pasta",
    description: "Real Italian pasta"
  },
  {
    itemName: "rice",
    description: "Coming from the fields of Vietnam"
  },
  {
    itemName: "chiken",
    description: "Chiken feed with corn from Mexico"
  }
];

shoppingList.forEach((item) => {
  new ShoppingList(item);
});
