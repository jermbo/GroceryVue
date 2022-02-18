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
    <template v-if="filteredItems">
      <InventoryItem
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
        @click="addToCart(item)"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.inventory-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 95%;
  @apply gap-4 p-4 overflow-y-auto;
}
</style>
