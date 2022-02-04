<script setup lang="ts">
interface Props {
  title: string;
}
const { title } = defineProps<Props>();
</script>

<template>
  <header class="page-header">
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  @apply my-2;
}
.title {
  @apply text-2xl font-semibold text-gray-900;
}
</style>
