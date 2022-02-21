<script setup lang="ts">
import { toRefs } from "vue";
import { useMainStore } from "../store/store";
import CartDetails from "./CartDetails.vue";

const { cartAmountTotal, toggleCartDetailsState } = toRefs(useMainStore());
</script>

<template>
  <div>
    <button @click="toggleCartDetailsState()">
      Cart {{ cartAmountTotal }}
    </button>
    <CartDetails />
  </div>
</template>

<style scoped></style>
