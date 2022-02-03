<script setup lang="ts">
import { InventoryItem } from "../types/Item";

interface Props {
  items: InventoryItem[];
}

const props = defineProps<Props>();

console.log(props.items);
</script>

<template>
  <section>
    <h2>Inventory Goes here</h2>
    <div class="items-wrapper">
      <a href="#" class="item" v-for="item in items" :key="item.id">
        <div class="image-wrapper">
          <img :src="item.image" :alt="item.name" class="" />
        </div>
        <div class="header">
          <h3 class="name">{{ item.name }}</h3>
          <p class="price">${{ item.price }}</p>
        </div>
      </a>
    </div>
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
    overflow-hidden;
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
