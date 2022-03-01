<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNav from "./components/MainNav.vue";
</script>

<template>
  <header>
    <MainNav />
  </header>

  <main class="main-wrapper">
    <RouterView />
  </main>
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

.main-wrapper {
  // @apply p-4;
}
</style>
