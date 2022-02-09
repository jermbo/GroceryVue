import { acceptHMRUpdate, defineStore } from "pinia";
import { inventoryItems } from "../data/inventory";
import { Cart, InventoryItem } from "../types/Item";

interface State {
  inventoryItems: InventoryItem[];
  cart: Cart;
}

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      inventoryItems,
      cart: {},
    } as State;
  },
  actions: {
    addToCart(item: InventoryItem) {
      // this.cart.push(item);
      console.clear();
      console.log("add to cart");
      console.log(item.name);

      if (!this.cart[item.name]) {
        this.cart[item.name] = {
          name: item.name,
          totalCost: item.price,
          totalAmount: 0,
        };
      }

      this.cart[item.name].totalAmount++;
      this.cart[item.name].totalCost =
        this.cart[item.name].totalAmount * item.price;

      console.log(this.cart[item.name]);
    },
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    cartAmountTotal(state) {
      let total = 0;
      for (let key in this.cart) {
        total += this.cart[key].totalCost;
      }
      return total.toFixed(2);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
