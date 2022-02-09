<script setup lang="ts">
import { toRefs } from "vue";
import { useMainStore } from "../store/store";

interface Props {}

const { addToCart, inventoryItems } = toRefs(useMainStore());
const items = inventoryItems;
</script>

<template>
  <section class="items-wrapper">
    <article v-for="item in items" :key="item.id" class="item">
      <a href="#" @click="addToCart(item)">
        <div class="image-wrapper">
          <img :src="item.image" :alt="item.name" class="" />
        </div>
        <div class="header">
          <h3 class="name">{{ item.name }} - {{ item.stock }}</h3>
          <p class="price">${{ item.price }}</p>
        </div>
      </a>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.items-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  @apply gap-4;
}

.item {
  @apply bg-slate-200
    rounded-md
    overflow-hidden
    hover:scale-105
    transition-all;
}

.image-wrapper {
  @apply w-full 
    h-[150px]
    overflow-hidden;
}

img {
  @apply w-full 
    h-full 
    object-center 
    object-cover 
    group-hover:opacity-75;
}

.header {
  @apply p-2 
    flex 
    justify-between;
}

.name {
  @apply text-sm 
    text-gray-700;
}

.price {
  @apply text-lg 
    font-bold 
    text-gray-900;
}
</style>
