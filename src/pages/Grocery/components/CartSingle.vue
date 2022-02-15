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
  <div>
    <p>{{ item.name }}</p>
    <div>
      <button @click="decrementCartItem(item)">-</button>
      <span>{{ item.totalAmount }}</span>
      <button
        @click="incrementCartItem(item)"
        :disabled="!stockAvailable(item.name)"
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
span {
  padding: 1rem;
}

button {
  padding: 1rem;
  border: 1px solid red;

  &:disabled {
    background: gray;
  }
}
</style>
