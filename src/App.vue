<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{ name: 'grocery' }">Grocery</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
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
