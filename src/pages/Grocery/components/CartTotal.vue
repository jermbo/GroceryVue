<script setup lang="ts">
import { useMainStore } from "@/store/store";
import { computed, toRefs } from "vue";

const { cartAmountTotal } = toRefs(useMainStore());

const tax = computed(() => {
  //@ts-ignore
  return (cartAmountTotal?.value * 0.06).toFixed(2);
});
</script>

<template>
  <div class="cart-total-inner">
    <div class="cart-total-details">
      <p class="cart-amount">
        Sub Total <span>${{ cartAmountTotal }}</span>
      </p>
      <p class="tax">
        Tax <span>${{ tax }}</span>
      </p>
    </div>
    <p class="grand-total">
      Grand Total <span>${{ cartAmountTotal }}</span>
    </p>
    <button class="checkout">Checkout</button>
  </div>
</template>

<style scoped lang="scss">
.cart-total-inner {
  @apply p-2 h-full flex flex-col justify-between;
}

.cart-amount,
.tax {
  @apply flex justify-between;

  span {
    @apply font-bold;
  }
}

.grand-total {
  @apply text-2xl flex justify-between;

  span {
    @apply font-bold;
  }
}

.checkout {
  @apply w-full
    bg-blue-400
    rounded-full
    p-4
    uppercase
    text-slate-100
    tracking-widest
    font-bold
    hover:bg-blue-200
    hover:text-slate-600
    ease-in-out
    transition-all
    duration-200;
}
</style>
