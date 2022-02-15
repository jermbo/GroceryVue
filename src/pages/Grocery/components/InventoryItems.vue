<script setup lang="ts">
import { useMainStore } from "@/store/store";
import { toRefs } from "vue";
import InventoryItem from "./InventoryItem.vue";

const { inventoryItems, addToCart } = toRefs(useMainStore());
</script>

<template>
  <div class="inventory-items">
    <InventoryItem
      v-for="item in inventoryItems"
      :key="item.id"
      :item="item"
      @click="addToCart(item)"
    />
  </div>
</template>

<style scoped lang="scss">
.inventory-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  height: 95%;
  @apply gap-4 p-4 overflow-y-auto;
}
</style>
