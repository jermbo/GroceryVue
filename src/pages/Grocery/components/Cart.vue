<script setup lang="ts">
import { useMainStore } from "@/store/store";
import { toRefs } from "vue";
import CartSingle from "./CartSingle.vue";
import EmptyCart from "./EmptyCart.vue";
const { cartAmountTotal, cart } = toRefs(useMainStore());
</script>

<template>
  <section class="cart-section">
    <div class="cart-inner">
      <template v-if="cartAmountTotal">
        <CartSingle v-for="item in cart" :key="item.name" :item="item" />
        <div class="cart-total">
          <p>Grand Total: {{ cartAmountTotal }}</p>
        </div>
      </template>
      <template v-if="!cartAmountTotal">
        <EmptyCart />
      </template>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cart-section {
  @apply h-screen p-6;
}

.cart-inner {
  @apply h-full bg-gray-100 rounded-2xl;
}
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
