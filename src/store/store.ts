import { acceptHMRUpdate, defineStore } from "pinia";
import { inventoryItems } from "../data/inventory";
import { Category } from "../types/Category";
import { Cart, CartItem, InventoryItem } from "../types/Item";

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
    outOfStock(name: string) {
      // TODO: Add Toast message for which item is out of stock
      console.log(`Sorry, ${name} are currently out of stock.`);
    },
    addToCart(item: InventoryItem) {
      const { name, price, stock } = item;

      if (!stock) {
        this.outOfStock(name);
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

      this.updateStockAmount(name, "reduce");
    },
    decrementCartItem(item: CartItem) {
      this.updateStockAmount(item.name, "increase");
      item.totalAmount--;

      if (item.totalAmount < 1) {
        delete this.cart[item.name];
      }
    },
    incrementCartItem(item: CartItem) {
      if (!this.stockAvailable(item.name)) {
        this.outOfStock(item.name);
        return;
      }

      this.updateStockAmount(item.name, "reduce");
      item.totalAmount++;
    },
    stockAvailable(name: string): boolean {
      let isAvailable = false;
      this.inventoryItems.forEach((item) => {
        if (item.name !== name) return;
        isAvailable = item.stock > 0;
      });
      return isAvailable;
    },
    updateStockAmount(name: string, type: "reduce" | "increase") {
      this.inventoryItems.forEach((item) => {
        if (item.name !== name) return;
        item.stock = type === "reduce" ? item.stock - 1 : item.stock + 1;
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
