<script setup lang="ts">
import { useMainStore } from "@/store/store";
import { onMounted, toRefs } from "vue";
import InventoryItem from "./InventoryItem.vue";

const { filteredItems, addToCart, filterInventory } = toRefs(useMainStore());

onMounted(() => {
  console.log("I should only run once while mounting Inventory Items");
  filterInventory.value();
});
</script>

<template>
  <div class="inventory-items">
    <template v-if="filteredItems.length">
      <InventoryItem
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
        @click="addToCart(item)"
      />
    </template>
    <template v-else="!filteredItems.length">
      <p>Currently out of stock of this category</p>
    </template>
  </div>
</template>

<style scoped lang="scss">
.inventory-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 200px;
  grid-auto-rows: minmax(200px, 200px);
  @apply gap-4 p-4 overflow-y-auto h-full;
}
</style>
