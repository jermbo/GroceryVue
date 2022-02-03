<script setup lang="ts">
import { storeToRefs } from "pinia";
import Categories from "./components/Categories.vue";
import Inventory from "./components/Inventory.vue";
import Main from "./components/Main.vue";
import { useStore } from "./store/store";

const store = useStore();
const { inventoryItems } = storeToRefs(store);
</script>

<template>
  <Main />
  <!-- <div class="main">
    <Categories title="what" :likes="3" />
    <Inventory :items="inventoryItems" />
  </div> -->
</template>

<style>
/* body {
  @apply bg-gray-300;
}
.main {
  @apply p-8;
} */
</style>
