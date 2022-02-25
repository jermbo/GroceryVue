<script setup lang="ts">
import Main from "./components/Main.vue";
import GroceryApp from "./pages/Grocery/GroceryApp.vue";
</script>

<template>
  <GroceryApp />
</template>

<style lang="scss">
::-webkit-scrollbar-track {
  @apply rounded-md bg-slate-200 shadow-inner;
}

::-webkit-scrollbar {
  width: 5px;
  @apply rounded-md bg-slate-100 shadow-md;
}

::-webkit-scrollbar-thumb {
  @apply rounded-md bg-blue-400 shadow-md;
}
</style>
