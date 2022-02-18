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
  <div class="cart-item">
    <img
      class="item-image"
      :src="item.image"
      width="50"
      height="50"
      loading="lazy"
      :alt="item.name"
    />
    <div class="item-description">
      <p class="item-name">{{ item.name }}</p>
      <p class="item-price">${{ item.itemPrice }}</p>
    </div>
    <div class="cart-actions">
      <button class="cart-button" @click="decrementCartItem(item)">
        <span>-</span>
      </button>
      <span class="cart-item-quantity">{{ item.itemQuantity }}</span>
      <button
        class="cart-button"
        @click="incrementCartItem(item)"
        :disabled="!stockAvailable(item.name)"
      >
        <span>+</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-item {
  display: grid;
  grid-template-columns: 50px 3fr 1fr;
  @apply gap-4;
}

.item-image {
  @apply rounded-full;
}

.item-description {
  color: red;
}

.item-name {
  @apply font-bold text-gray-600;
}

.item-price {
  @apply font-light text-gray-400;
}
.cart-actions {
  border-color: green;
  @apply flex justify-center items-center;
}

.cart-item-quantity {
  @apply px-2 font-black;
}

.cart-button {
  @apply py-2 px-4 rounded-full bg-blue-200 hover:bg-blue-100 transition-all duration-200 ease-in-out;

  span {
    @apply text-blue-800 group-hover:text-blue-500;
  }

  &:disabled {
    @apply bg-gray-200;

    span {
      @apply text-gray-400;
    }
  }
}
</style>
