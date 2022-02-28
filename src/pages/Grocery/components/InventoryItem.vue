<script setup lang="ts">
import useNumberFormat from "../../../composables/numberFormat";
import { InventoryItem } from "../../../types/Item";
import { toRefs } from "vue";

interface Props {
  item: InventoryItem;
}

const props = defineProps<Props>();
const { item } = toRefs(props);
</script>

<template>
  <button class="item" :disabled="item.stock < 1">
    <div class="img">
      <img
        :src="item.image"
        :alt="item.title"
        width="50"
        height="50"
        loading="lazy"
      />
    </div>
    <div class="details">
      <div class="detail">
        <p class="title">{{ item.title }}</p>
        <p class="price">${{ item.price }}</p>
      </div>
      <div class="detail -right">
        <p>Stock</p>
        <p class="stock">{{ useNumberFormat(item.stock) }}</p>
      </div>
    </div>
  </button>
</template>

<style scoped lang="scss">
.item {
  display: grid;
  grid-template-rows: minmax(120px, 150px);
  @apply rounded-xl overflow-hidden bg-slate-100 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out;

  &:active {
    @apply hover:scale-95;
  }

  &:disabled {
    @apply cursor-not-allowed opacity-50 hover:shadow-md hover:scale-100 transition-none;
    &:active {
      @apply hover:scale-100;
    }
  }
}

.img {
  @apply w-full h-full overflow-hidden;

  img {
    @apply w-full h-full object-center object-fill relative;

    &::before {
      content: "";
      @apply bg-slate-300 absolute w-full h-full left-0;
    }

    &::after {
      content: "\2639"" " attr(alt);
      @apply text-xl text-slate-500 w-full h-full absolute flex justify-center items-center left-0;
    }
  }
}

.details {
  @apply flex justify-between p-4 h-full;
}

.detail {
  @apply flex flex-col justify-end items-start text-left h-full;

  &.-right {
    @apply items-end;
  }
}

.title {
  @apply font-black;
}
</style>
