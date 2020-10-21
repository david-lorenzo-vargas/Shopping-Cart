class Cart {
  constructor(details) {
    this.details = details;
    this.elements = {};

    this.render();
  }

  createCart() {
    const cart = document.createElement("div");
    cart.classList.add("cart");

    this.elements = cart;
    console.log(this.elements);

    return cart;
  }

  createCartItemsContainer() {
    const element = document.createElement("div");
    element.classList.add("cart__item");
    element.innerText = "Cart Item";
    return element;
  }

  createCartItemName() {
    const element = document.createElement("div");
    element.classList.add("cart__item__name");
    element.innerText = this.details.name;

    return element;
  }

  createCartItemDescription() {
    const element = document.createElement("div");
    element.classList.add("cart__item__description");
    element.innerText = this.details.description;

    return element;
  }

  handleRemoveButtonClick() {
    this.elements.style.display = "none";
  }

  createRemoveButton() {
    const element = document.createElement("button");
    element.classList.add("btn--remove");
    element.innerText = "Remove from Cart";

    element.addEventListener("click", () => {
      this.handleRemoveButtonClick();
    });

    return element;
  }
  render() {
    const parent = this.createCart();
    const itemsContainer = this.createCartItemsContainer();
    const cartItemName = this.createCartItemName();
    const cartItemDescription = this.createCartItemDescription();
    const removeButton = this.createRemoveButton();

    itemsContainer.appendChild(cartItemName);
    itemsContainer.appendChild(cartItemDescription);
    itemsContainer.appendChild(removeButton);

    parent.appendChild(itemsContainer);

    app.appendChild(parent);
  }
}

export default Cart;
