<script setup lang="ts">
import { toRefs } from "vue";
import { useMainStore } from "@/store/store";
import { CartItem } from "@/types/Item";

interface Props {
  item: CartItem;
}

const props = defineProps<Props>();
const { item } = toRefs(props);

const { decrementCartItem, incrementCartItem, stockAvailable } = toRefs(
  useMainStore()
);
</script>

<template>
  <section class="cart-item">
    <img
      class="item-image"
      :src="item.image"
      width="50"
      height="50"
      loading="lazy"
      :alt="item.title"
    />
    <div class="item-description">
      <p class="item-title">{{ item.title }}</p>
      <p class="item-price">${{ item.price }}</p>
    </div>
    <div class="cart-actions">
      <button
        :aria-label="`Decrease ${item.title}`"
        class="cart-button"
        @click="decrementCartItem(item)"
      >
        <span>-</span>
      </button>
      <span class="cart-item-quantity">{{ item.quantity }}</span>
      <button
        :aria-label="`Increase ${item.title}`"
        class="cart-button"
        @click="incrementCartItem(item)"
        :disabled="!stockAvailable(item.title)"
      >
        <span>+</span>
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cart-item {
  display: grid;
  grid-template-columns: 50px 3fr 1fr;
  @apply gap-4 shadow-md rounded-full p-2 bg-slate-200;
}

.item-image {
  @apply rounded-full;
}

.item-description {
  color: red;
}

.item-title {
  @apply font-bold text-slate-600;
}

.item-price {
  @apply font-light text-slate-400;
}
.cart-actions {
  @apply flex justify-center items-center;
}

.cart-item-quantity {
  @apply px-2 font-black;
}

.cart-button {
  @apply py-2 px-4 rounded-full bg-blue-200 hover:bg-blue-100 transition-all duration-200 ease-in-out select-none;

  span {
    @apply text-blue-800 group-hover:text-blue-500;
  }

  &:disabled {
    @apply bg-slate-200;

    span {
      @apply text-slate-400;
    }
  }
}
</style>
