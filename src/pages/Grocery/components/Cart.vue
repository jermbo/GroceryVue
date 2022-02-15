<script setup lang="ts">
import { useMainStore } from "@/store/store";
import { toRefs } from "vue";
import CartSingle from "./CartSingle.vue";
const { cartAmountTotal, cart } = toRefs(useMainStore());
</script>

<template>
  <section>
    <template v-if="cartAmountTotal">
      <CartSingle v-for="item in cart" :key="item.name" :item="item" />
      <div class="cart-total">
        <p>Grand Total: {{ cartAmountTotal }}</p>
      </div>
    </template>
    <template v-if="!cartAmountTotal">
      <p>Add items to your cart</p>
    </template>
  </section>
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
