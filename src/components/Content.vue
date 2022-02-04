<script setup lang="ts">
import Inventory from "./Inventory.vue";
import SectionHeader from "./SectionHeader.vue";

import { inventoryItems } from "../data/inventory";
</script>

<template>
  <main class="">
    <SectionHeader title="Inventory" />
    <Inventory :items="inventoryItems" />
  </main>
</template>
