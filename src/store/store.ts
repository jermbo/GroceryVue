import { defineStore } from "pinia";
import { inventoryItems } from "../data/inventory";

export const useStore = defineStore("main", {
  state: () => {
    return {
      inventoryItems,
    };
  },
});
