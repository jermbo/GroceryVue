<script setup lang="ts">
import { DateTimeFormatOptions } from "@/types/DateTime";

const options: DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "numeric",
};
const date = new Date().toLocaleDateString("en-US", options);
</script>

<template>
  <div class="header-inner">
    <p class="order">Order #0001</p>
    <p class="date">{{ date }}</p>
  </div>
</template>

<style scoped lang="scss">
.header-inner {
  @apply flex justify-between h-full items-center;
}

.order {
  @apply font-bold text-2xl;
}
</style>
