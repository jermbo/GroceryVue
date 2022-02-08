<template>
  <div>
    <p>Cart {{ cartAmountTotal }}</p>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { useMainStore } from "../store/store";

const { cartAmountTotal } = toRefs(useMainStore());
</script>

<style scoped></style>
