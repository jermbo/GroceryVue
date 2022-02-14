<script setup lang="ts">
import { useMainStore } from "@/store/store";
import { toRefs } from "vue";

const { cart, decrementCartItem, incrementCartItem, stockAvailable } = toRefs(
  useMainStore()
);
</script>

<template>
  <div v-for="item in cart" :key="item.name">
    <p>{{ item.name }}</p>
    <div>
      <button @click="decrementCartItem(item)">-</button>
      <span>{{ item.totalAmount }}</span>
      <button
        @click="incrementCartItem(item)"
        :disabled="!stockAvailable(item.name)"
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
span {
  padding: 1rem;
}

button {
  padding: 1rem;
  border: 1px solid red;

  &:disabled {
    background: gray;
  }
}
</style>
