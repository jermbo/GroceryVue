import { acceptHMRUpdate, defineStore } from "pinia";
import { inventoryItems } from "../data/inventory";
import { InventoryItem } from "../types/Item";

interface State {
  inventoryItems: InventoryItem[];
  cart: InventoryItem[];
}

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      inventoryItems,
      cart: [],
    } as State;
  },
  actions: {
    addToCart(item: InventoryItem) {
      if (!item) return;
      this.cart.push(item);
    },
  },
  getters: {
    cartAmountTotal(state) {
      const total = state.cart.reduce((acc, next) => acc + next.price, 0);
      return total.toFixed(2);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
