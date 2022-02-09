<script setup lang="ts">
import { toRefs } from "vue";
import { useMainStore } from "../store/store";
import Inventory from "./Inventory.vue";
import SectionHeader from "./SectionHeader.vue";
</script>

<template>
  <main class="">
    <SectionHeader title="Inventory" />
    <Inventory />
  </main>
</template>
