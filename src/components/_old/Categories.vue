<script setup lang="ts">
defineProps({
  title: String,
  likes: Number,
});
</script>

<template>
  <section>
    <h3>{{ title }}</h3>
    <p>{{ likes }}</p>
  </section>
</template>
