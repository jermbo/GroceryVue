<script setup lang="ts">
console.log("loading");
</script>

<template>
  <div class="loader-wrapper">
    <div class="loader">
      <span class="letter">L</span>
      <span class="letter">o</span>
      <span class="letter">a</span>
      <span class="letter">d</span>
      <span class="letter">i</span>
      <span class="letter">n</span>
      <span class="letter">g</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loader-wrapper {
  animation: hue 20s linear infinite;
  @apply h-screen bg-sky-600;
}

.loader {
  @apply w-full h-full flex justify-center items-center;
}
.letter {
  animation: bounce 0.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite alternate;
  @apply uppercase text-slate-50 font-bold p-2 text-2xl inline-block;

  @for $i from 0 through 6 {
    &:nth-child(#{$i + 1}) {
      animation-delay: $i * 0.05s;
    }
  }
}

@keyframes bounce {
  0% {
    transform: scale(30%);
  }
  100% {
    transform: scale(130%);
  }
}
@keyframes hue {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
