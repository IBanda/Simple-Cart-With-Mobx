import { observable } from "mobx";

const store = observable(
  {
    cart: [],
    quantity: 1,
    modalState: false,
    addToCart(newProduct) {
      let existingproduct = this.cart.find(
        product => product.sku === newProduct.sku
      );
      if (existingproduct) {
        return (existingproduct.productQuantity += newProduct.productQuantity);
      }
      this.cart.push(newProduct);
    },
    removeItem(sku) {
      this.cart = this.cart.filter(
        existingProduct => existingProduct.sku !== sku
      );
    },
    updateCart(sku, value) {
      let existingProduct = this.cart.find(product => product.sku === sku);
      existingProduct.productQuantity = value;
    },
    updateQuantity(value) {
      this.quantity = parseInt(value);
    },
    setModal() {
      this.modalState = !this.modalState;
    },
    get count() {
      return this.cart.reduce(
        (prev, current) => prev + current.productQuantity,
        0
      );
    }
  },
  undefined,
  { autoBind: true }
);

export default store;
