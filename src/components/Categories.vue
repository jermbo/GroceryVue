<script setup lang="ts">
import { useMainStore } from "@/store/store";
import { Category } from "@/types/Category";
import { toRefs } from "vue";

const { filterInventory } = toRefs(useMainStore());
const allCategories = Object.keys(Category) as Category[];
</script>

<template>
  <button v-for="cat in allCategories" :key="cat" @click="filterInventory(cat)">
    {{ cat }}
  </button>
</template>

<style scoped lang="scss">
button {
  @apply border-2 p-4 mr-4 capitalize;
}
</style>
