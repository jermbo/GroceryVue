<script setup lang="ts">
console.log("what up");
</script>

<template>
  <div class="home-wrapper">
    <h1>App Store</h1>
    <p>Pick which app you want to work with.</p>

    <div>
      <RouterLink :to="{ name: 'grocery' }">Grocery</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-wrapper {
  @apply text-center p-4 h-screen w-screen bg-slate-200;
}
h1 {
  @apply text-2xl font-bold;
}
</style>
