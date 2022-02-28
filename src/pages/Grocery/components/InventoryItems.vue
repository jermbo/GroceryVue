<script setup lang="ts">
import { toRefs } from "vue";
import { useMainStore } from "@/store/store";
import InventoryItem from "./InventoryItem.vue";

const { filteredItems, addToCart } = toRefs(useMainStore());
</script>

<template>
  <div class="inventory-items">
    <div class="inventory-items-inner">
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
  </div>
</template>

<style scoped lang="scss">
.inventory-items {
  @apply pl-4 h-full;
}

.inventory-items-inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  @apply gap-4 p-4 overflow-x-hidden overflow-y-auto bg-slate-100 h-full rounded-xl;
}
</style>
