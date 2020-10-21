import Cart from "./cart.js";

class ShoppingList {
  constructor(details) {
    this.details = details;
    this.state = {
      cart: {}
    };

    this.render();
  }

  createShoppingListItem() {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item");

    return element;
  }

  createGrid() {
    const element = document.createElement("div");
    element.classList.add("grid");

    return element;
  }

  createGridItem() {
    const element = document.createElement("div");
    element.classList.add("grid__item");

    return element;
  }

  createShoppingListItemElement() {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__element");

    return element;
  }

  createShoppingListItemName() {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__name");
    element.innerText = this.details.itemName;

    this.state.cart.name = this.details.itemName;

    return element;
  }

  createShoppingListItemDescription() {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__description");
    element.innerText = this.details.description;

    this.state.cart.description = this.details.description;

    return element;
  }

  handleAddItemButtonClick() {
    const cart = new Cart(this.state.cart);
    // console.log(this.state.cart);
  }

  createAddItemButton() {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = "Add to Cart";

    button.addEventListener("click", () => {
      this.handleAddItemButtonClick();
    });

    return button;
  }

  render() {
    const parent = this.createShoppingListItem();
    const grid = this.createGrid();
    const gridItem = this.createGridItem();
    const gridItemTwo = this.createGridItem();
    const element = this.createShoppingListItemElement();
    const header = this.createShoppingListItemName();
    const description = this.createShoppingListItemDescription();

    const button = this.createAddItemButton();

    parent.appendChild(grid);
    grid.appendChild(gridItem);
    grid.appendChild(gridItemTwo);
    gridItem.appendChild(element);
    gridItemTwo.appendChild(button);
    element.appendChild(header);
    element.appendChild(description);

    app.appendChild(parent);
  }
}

export default ShoppingList;
