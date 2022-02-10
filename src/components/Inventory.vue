<script setup lang="ts">
import { toRefs } from "vue";
import { useMainStore } from "../store/store";

interface Props {}

const { addToCart, filteredItems } = toRefs(useMainStore());
const items = filteredItems;
</script>

<template>
  <section class="items-wrapper">
    <TransitionGroup>
      <article
        v-for="item in items"
        :key="item.id"
        class="item"
        :class="{
          'out-of-stock': !item.stock,
        }"
      >
        <button @click="addToCart(item)" :disabled="!item.stock">
          <div class="image-wrapper">
            <img :src="item.image" :alt="item.name" class="" />
          </div>
          <div class="header">
            <h3 class="name">{{ item.name }} - {{ item.stock }}</h3>
            <p class="price">${{ item.price }}</p>
          </div>
        </button>
      </article>
    </TransitionGroup>
  </section>
</template>

<style lang="scss" scoped>
.out-of-stock {
  @apply cursor-not-allowed opacity-50;
}
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

button {
  @apply w-full;
  &:disabled {
    @apply cursor-not-allowed;
  }
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

.list-enter-active,
.list-leave-active {
  transition: all 1.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
