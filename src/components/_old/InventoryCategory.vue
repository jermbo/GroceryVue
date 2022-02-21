<script setup lang="ts">
import { categories } from "../data/Categories";
import { useMainStore } from "../store/store";
import { toRefs } from "vue";

const { getInventoryCategory } = toRefs(useMainStore());
</script>

<template>
  <nav>
    <button
      v-for="cat in categories"
      :key="cat"
      @click="getInventoryCategory(cat)"
    >
      {{ cat }}
    </button>
  </nav>
</template>

<style scoped></style>
