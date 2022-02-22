<script setup lang="ts">
import { useMainStore } from "@/store/store";
import { toRefs } from "vue";
import CartSingle from "./CartSingle.vue";
import EmptyCart from "./EmptyCart.vue";
import CartTotal from "./CartTotal.vue";
const { cartAmountTotal, cart } = toRefs(useMainStore());
</script>

<template>
  <section class="cart-section">
    <div class="cart-inner">
      <template v-if="cartAmountTotal">
        <div class="cart-details">
          <div class="cart-items">
            <CartSingle v-for="item in cart" :key="item.title" :item="item" />
          </div>
          <div class="cart-total">
            <CartTotal />
          </div>
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
  @apply h-full bg-slate-100 rounded-2xl;
}

.cart-details {
  display: grid;
  grid-template-rows: 1fr 175px;
  @apply gap-4 h-full;
}

.cart-items {
  @apply flex flex-col-reverse overflow-y-auto gap-4 p-2;
}
</style>
