<script setup lang="ts">
import { useMainStore } from "@/store/store";
import { Category } from "@/types/Category";
import { toRefs } from "vue";

const { filterInventory } = toRefs(useMainStore());
const allCategories = Object.keys(Category) as Category[];
</script>

<template>
  <section class="categories-section">
    <div class="categories-inner">
      <button
        v-for="cat in allCategories"
        :key="cat"
        @click="filterInventory(cat)"
      >
        {{ cat }}
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.categories-section {
  @apply pl-4 pt-4;
}

.categories-inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  @apply h-full bg-slate-100 rounded-2xl gap-4 p-4;
}
button {
  @apply p-2 capitalize bg-blue-300 rounded-2xl;
}
</style>
