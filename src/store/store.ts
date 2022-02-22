import { AppState } from "@/types/AppState";
import { acceptHMRUpdate, defineStore } from "pinia";
import { inventoryItems } from "../data/inventory";
import { Category } from "../types/Category";
import { Cart, CartItem, InventoryItem } from "../types/Item";

type CartDetailsState = "open" | "closed";

interface State {
  appState: AppState;
  inventoryItems: InventoryItem[];
  filteredItems: InventoryItem[];
  cart: Cart;
  cartDetailsState: CartDetailsState;
}

const TempCartData: Cart = {
  "Def-Con Owl Traps": {
    title: "Def-Con Owl Traps",
    image: "https://unsplash.it/id/10/200/200/",
    price: 309.29,
    quantity: 3,
  },
  "Human traps": {
    title: "Human traps",
    image: "https://unsplash.it/id/11/200/200/",
    price: 999.99,
    quantity: 1,
  },
  "Arachno Spores": {
    title: "Arachno Spores",
    image: "https://unsplash.it/id/12/200/200/",
    price: 1.99,
    quantity: 2,
  },
};

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      appState: AppState.LOADING,
      inventoryItems: [],
      filteredItems: [],
      cart: TempCartData,
      cartDetailsState: "open",
    } as State;
  },
  actions: {
    async fetchInventoryData() {
      const resp = await fetch("https://api.sampleapis.com/futurama/inventory");
      const data: InventoryItem[] = await resp.json();
      const newData = data.map((d, i) => {
        return { ...d, image: `https://unsplash.it/id/${i + 10}/200/200/` };
      });
      setTimeout(() => {
        this.inventoryItems = newData;
        this.filteredItems = newData;
        this.appState = AppState.NORMAL;
      }, 2000);
    },
    checkout() {
      this.appState = AppState.CHECKOUT;
    },
    outOfStock(title: string) {
      // TODO: Add Toast message for which item is out of stock
      console.log(`Sorry, ${title} are currently out of stock.`);
    },
    addToCart(item: InventoryItem) {
      const { title, price, stock, image } = item;

      if (!stock) {
        this.outOfStock(title);
        return;
      }

      if (!this.cart[title]) {
        this.cart[title] = {
          title,
          image: image || "",
          price,
          quantity: 0,
        };
      }

      this.cart[title].quantity++;
      this.updateStockAmount(title, "reduce");
    },
    decrementCartItem(item: CartItem) {
      this.updateStockAmount(item.title, "increase");
      item.quantity--;

      if (item.quantity < 1) {
        delete this.cart[item.title];
      }
    },
    incrementCartItem(item: CartItem) {
      if (!this.stockAvailable(item.title)) {
        this.outOfStock(item.title);
        return;
      }

      this.updateStockAmount(item.title, "reduce");
      item.quantity++;
    },
    stockAvailable(title: string): boolean {
      let isAvailable = false;
      this.inventoryItems.forEach((item) => {
        if (item.title !== title) return;
        isAvailable = item.stock > 0;
      });
      return isAvailable;
    },
    updateStockAmount(title: string, type: "reduce" | "increase") {
      this.inventoryItems.forEach((item) => {
        if (item.title !== title) return;
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
    filterInventory(category: Category = Category.all) {
      const filtered = this.$state.inventoryItems.filter((item) => {
        if (category == Category.all) {
          return item;
        }

        return item.category == category;
      });
      this.filteredItems = filtered;
    },
  },
  getters: {
    getCarItems(state: State) {
      const items = Object.keys(state.cart);
      return items;
    },
    cartAmountTotal(state: State): string | null {
      if (!Object.keys(state.cart).length) return null;

      let grandTotal = 0;
      for (let key in state.cart) {
        const { price, quantity } = state.cart[key];
        grandTotal += price * quantity;
      }
      return grandTotal.toFixed(2);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
