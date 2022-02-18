<script setup lang="ts">
import Bag from "./Bag.vue";
</script>

<template>
  <div class="empty-cart">
    <Bag />
    <h3>Your shopping basket is empty</h3>
  </div>
</template>

<style scoped lang="scss">
.empty-cart {
  @apply w-full 
    h-full
    p-6
    flex 
    flex-col 
    justify-center 
    items-center
    select-none;
}
h3 {
  @apply text-black 
    text-3xl
    font-bold
    text-center
    leading-normal;
}
</style>
