<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

type NavState = "open" | "closed";

const navState = ref<NavState>("closed");

const toggleNavState = () => {
  console.log("toggleState");
  navState.value = navState.value == "open" ? "closed" : "open";
};
</script>

<template>
  <nav :class="{ open: navState === 'open' }">
    <span class="action" @click="toggleNavState">X</span>
    <h1>Main Navigation</h1>
    <div class="nav-inner">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink :to="{ name: 'grocery' }">Grocery</RouterLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  @apply absolute 
    h-screen 
    w-[25vw]
    py-4
  bg-slate-800
    text-slate-50 
    transition-all
    ease-in-out
    shadow-2xl
    -translate-x-full
    z-50;

  &.open {
    @apply translate-x-0;
  }
}

h1 {
  @apply text-xl p-4 pt-0 text-sky-400;
}

.action {
  @apply left-full
    top-0
    absolute
    p-2
    bg-inherit
    rounded-r-md
    transition-all
    ease-in-out
    duration-300
    shadow-md
    cursor-pointer;

  &:hover {
    background: #000;
  }
}

.nav-inner {
  @apply flex flex-col;

  a {
    @apply p-4 transition-all ease-in-out duration-500;

    &.router-link-active,
    &:hover {
      @apply bg-sky-400 text-slate-900;
    }
  }
}
</style>
