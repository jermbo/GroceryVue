<script setup lang="ts">
import Inventory from "./Inventory.vue";
import SectionHeader from "./SectionHeader.vue";
import InventoryCategory from "./InventoryCategory.vue";
</script>

<template>
  <main class="">
    <SectionHeader title="Inventory" />
    <InventoryCategory />
    <Inventory />
  </main>
</template>

<style lang="scss" scoped>
nav {
  @apply flex justify-between;
}
</style>
