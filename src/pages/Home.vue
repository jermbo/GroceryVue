<script setup lang="ts">
console.log("what up");
</script>

<template>
  <div>
    <h1>App Store</h1>
    <p>Pick which app you want to work with.</p>

    <div>
      <RouterLink :to="{ name: 'grocery' }">Grocery</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
