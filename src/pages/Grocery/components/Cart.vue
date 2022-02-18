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
        <div class="cart-details">
          <div class="cart-items">
            <CartSingle v-for="item in cart" :key="item.name" :item="item" />
          </div>
          <div class="cart-total">
            <p>Grand Total: {{ cartAmountTotal }}</p>
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
  @apply h-full bg-gray-100 rounded-2xl p-4;
}

.cart-details {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 150px;
}

.cart-items {
  @apply flex flex-col overflow-y-auto gap-4;
}

.cart-total {
  border: 1px solid red;
}
</style>
