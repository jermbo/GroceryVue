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
    <div class="img">
      <img
        :src="item.image"
        :alt="item.name"
        width="50"
        height="50"
        loading="lazy"
      />
    </div>
    <div class="details">
      <div class="detail">
        <p class="name">{{ item.name }}</p>
        <p class="price">{{ item.price }}</p>
      </div>
      <div class="detail -right">
        <p>Stock</p>
        <p class="stock">{{ item.stock }}</p>
      </div>
    </div>
  </button>
</template>

<style scoped lang="scss">
.item {
  display: grid;
  height: 100%;
  @apply gap-4 rounded-md
  bg-slate-100
  border-black shadow-md
  overflow-hidden;
}

.details {
  background: goldenrod;
  @apply flex justify-between p-4;
}

.detail {
  @apply flex flex-col items-start;

  &.-right {
    @apply items-end;
  }
}

.name {
  @apply font-black;
}

.img {
  // overflow: hidden;
  height: 100%;
}

img {
  @apply w-full shadow-md;
}
</style>
