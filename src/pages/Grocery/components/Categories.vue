<script setup lang="ts">
import { useMainStore } from "@/store/store";
import { toRefs } from "vue";

const { allCategories, filterInventory } = toRefs(useMainStore());
</script>

<template>
  <button v-for="cat in allCategories" :key="cat" @click="filterInventory(cat)">
    {{ cat }}
  </button>
</template>

<style scoped lang="scss">
button {
  @apply border-2 p-4 mr-4;
}
</style>
