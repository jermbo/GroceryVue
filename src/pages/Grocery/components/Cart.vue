<script setup lang="ts">
import { useMainStore } from "@/store/store";
import { toRefs } from "vue";

const { cart, decrementCartItem, incrementCartItem } = toRefs(useMainStore());
</script>

<template>
  <div v-for="item in cart" :key="item.name">
    <p>{{ item.name }}</p>
    <div>
      <button @click="decrementCartItem()">-</button>
      <span>{{ item.totalAmount }}</span>
      <button @click="incrementCartItem()">+</button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
