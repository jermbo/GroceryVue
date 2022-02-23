<script setup lang="ts">
import Header from "@/components/Header.vue";
import Cart from "@/components/Cart.vue";
import Categories from "@/components/Categories.vue";
import InventoryItems from "@/components/InventoryItems.vue";
import { onMounted, toRefs } from "vue";
import { useMainStore } from "@/store/store";
import { AppState } from "@/types/AppState";
import LoadingOverlay from "@/components/LoadingOverlay.vue";

const { appState, fetchInventoryData } = toRefs(useMainStore());

onMounted(() => {
  console.log("I should only run once while mounting Grocery App");
  fetchInventoryData.value();
});
</script>

<template>
  <template v-if="appState === AppState.LOADING">
    <LoadingOverlay />
  </template>
  <template v-if="appState === AppState.CHECKOUT">
    <p>Checkout</p>
  </template>
  <template v-if="appState === AppState.NORMAL">
    <main class="main">
      <header class="header">
        <Header />
      </header>
      <div class="inventory">
        <InventoryItems />
      </div>
      <div class="categories">
        <Categories />
      </div>
      <div class="cart">
        <Cart />
      </div>
    </main>
  </template>
  <template v-if="appState === AppState.ERROR">
    <p>Something went wrong</p>
  </template>
</template>

<style scoped lang="scss">
.main {
  display: grid;
  grid-template-columns: 1fr 1fr minmax(250px, 1fr);
  grid-template-rows: 8vh 82vh 10vh;
  grid-template-areas:
    "header header cart"
    "content content cart"
    "category category cart";
  @apply max-h-screen  max-w-full bg-gray-200;

  @media (max-width: 55em) {
    grid-template-columns: 1fr;
    grid-template-rows: 8vh 60vh 8vh 22vh;
    grid-template-areas:
      "header"
      "content"
      "category"
      "cart";
  }
}

.header {
  height: 100%;
  grid-area: header;
  @apply p-4;
}

.cart {
  grid-area: cart;
}

.inventory {
  grid-area: content;
}

.categories {
  grid-area: category;
}
</style>
