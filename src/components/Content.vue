<script setup lang="ts">
import Inventory from "./Inventory.vue";
import SectionHeader from "./SectionHeader.vue";
import { categories } from "../data/Categories";
import { useMainStore } from "../store/store";
import { toRefs } from "vue";

const { getInventoryCategory } = toRefs(useMainStore());
</script>

<template>
  <main class="">
    <SectionHeader title="Inventory" />
    <nav>
      <button
        v-for="cat in categories"
        :key="cat"
        @click="getInventoryCategory(cat)"
      >
        {{ cat }}
      </button>
    </nav>
    <Inventory />
  </main>
</template>

<style lang="scss" scoped>
nav {
  @apply flex justify-between;
}
</style>
