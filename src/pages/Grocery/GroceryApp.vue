<script setup lang="ts">
import Header from "./components/Header.vue";
import Cart from "./components/Cart.vue";
import Categories from "./components/Categories.vue";
import InventoryItems from "./components/InventoryItems.vue";
</script>

<template>
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

<style scoped lang="scss">
.main {
  display: grid;
  grid-template-columns: 1fr 1fr minmax(250px, 500px);
  grid-template-rows: minmax(100px, 150px) 1fr minmax(75px, 100px);
  grid-template-areas:
    "header header cart"
    "content content cart"
    "category category cart";
  @apply h-screen w-screen;
}

.header {
  grid-area: header;
  @apply bg-gray-200;
}

.cart {
  grid-area: cart;
  @apply bg-gray-100;
}

.inventory {
  grid-area: content;
  @apply bg-gray-300;
}

.categories {
  grid-area: category;
  @apply bg-gray-400;
}
</style>
