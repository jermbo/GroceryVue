import { acceptHMRUpdate, defineStore } from "pinia";
import { inventoryItems } from "../data/inventory";
import { Category } from "../types/Category";
import { Cart, InventoryItem } from "../types/Item";

type CartDetailsState = "open" | "closed";
interface State {
  inventoryItems: InventoryItem[];
  filteredItems: InventoryItem[];
  cart: Cart;
  cartDetailsState: CartDetailsState;
}

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      inventoryItems,
      filteredItems: inventoryItems,
      cart: {},
      cartDetailsState: "open",
    } as State;
  },
  actions: {
    addToCart(item: InventoryItem) {
      const { name, price, stock } = item;

      if (!stock) {
        console.log("Sorry this item cannot be added");
        return;
      }

      if (!this.cart[name]) {
        this.cart[name] = {
          name: name,
          totalCost: price,
          totalAmount: 0,
        };
      }

      this.cart[name].totalAmount++;
      this.cart[name].totalCost = this.cart[name].totalAmount * price;

      this.reduceStock(name);
    },
    reduceStock(name: string) {
      this.inventoryItems.forEach((item) => {
        if (item.name === name) {
          item.stock--;
        }
      });
    },
    getInventoryCategory(category: Category) {
      if (category === Category.all) {
        console.log(this.inventoryItems);
        this.filteredItems = this.inventoryItems;
        return;
      }
      this.filteredItems = this.inventoryItems.filter(
        (item) => item.category == category
      );
    },
    toggleCartDetailsState() {
      this.cartDetailsState =
        this.cartDetailsState === "open" ? "closed" : "open";
    },
    closeCartDetails() {
      this.cartDetailsState = "closed";
    },
  },
  getters: {
    getCarItems(state: State) {
      const items = Object.keys(state.cart);
      return items;
    },
    cartAmountTotal(state: State) {
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
