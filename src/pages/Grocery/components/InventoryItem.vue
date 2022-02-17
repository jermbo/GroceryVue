<script setup lang="ts">
import { InventoryItem } from "@/types/Item";
import { toRefs } from "vue";

interface Props {
  item: InventoryItem;
}
const props = defineProps<Props>();
const { item } = toRefs(props);
</script>

<template>
  <button class="item">
    <img :src="item.image" :alt="item.name" />
    <div class="details">
      <p class="name">{{ item.name }}</p>
      <p class="stock">{{ item.stock }}</p>
    </div>
  </button>
</template>

<style scoped lang="scss">
.item {
  @apply p-2
    border-2
    rounded-md
  bg-slate-200
  border-black block shadow-md;
}

.details {
  @apply flex justify-between px-2 pt-2;
}

.name {
  @apply font-black;
}

img {
  aspect-ratio: 2/1;
  @apply w-full shadow-md;
}
</style>
