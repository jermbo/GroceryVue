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
    <div class="items">
      <section class="item" v-for="item in items" :key="item.id">
        <div class="image">
          <img :src="item.image" :alt="`Picture of ${item.name}`" lazy="true" />
        </div>
        <header>
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </header>
      </section>
    </div>
  </section>
</template>

<style lang="scss">
.items {
  @apply relative
    grid 
    grid-cols-4 
    gap-4;
}
.item {
  @apply relative
    cursor-pointer 
  bg-zinc-100 
    p-4 
    rounded-md 
    transition-all 
    shadow-sm 
    hover:shadow-md 
    hover:scale-105;
}

.image {
  @apply h-1/2;

  img {
    @apply object-cover w-full h-full;
  }
}
</style>
