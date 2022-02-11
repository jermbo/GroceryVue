<script setup lang="ts">
import { toRefs } from "vue";
import { useMainStore } from "../store/store";
import CloseButton from "./CloseButton.vue";
import CartDetailItem from "./CartDetailItem.vue";

const { cartDetailsState, toggleCartDetailsState, closeCartDetails } = toRefs(
  useMainStore()
);
</script>

<template>
  <div
    class="panel-wrapper"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
    :class="{ closed: cartDetailsState == 'closed' }"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="fade-overlay"
        aria-hidden="true"
        :class="{ closed: cartDetailsState == 'closed' }"
      ></div>
      <!-- Background overlay, show/hide based on slide-over state. -->
      <div class="absolute inset-0" aria-hidden="true">
        <div class="panel" :class="{ closed: cartDetailsState == 'closed' }">
          <div class="w-screen max-w-md">
            <div class="h-full divide-y divide-gray-200 flex flex-col bg-white">
              <div class="min-h-0 flex-1 flex flex-col">
                <div class="header">
                  <div class="flex items-start justify-between">
                    <h2
                      class="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Panel title {{ cartDetailsState }}
                    </h2>
                    <div class="ml-3 h-7 flex items-center">
                      <CloseButton @click="toggleCartDetailsState()" />
                    </div>
                  </div>
                </div>
                <div class="relative flex-1 overflow-y-auto">
                  <!-- Replace with your content -->
                  <CartDetailItem v-for="i in 100" :key="i" />
                  <!-- /End replace -->
                </div>
              </div>
              <div class="flex-shrink-0 p-6 flex justify-end">
                <button
                  @click="closeCartDetails()"
                  type="button"
                  class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue Shopping
                </button>
                <button
                  type="submit"
                  class="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel-wrapper {
  @apply fixed inset-0 overflow-hidden transform transition 
  ease-in-out duration-1000;
  &.closed {
    @apply inset-full;
  }
}

.panel {
  @apply fixed inset-y-0 right-0 pl-10
  max-w-full flex
  transform transition 
  ease-in-out duration-500;

  &.closed {
    @apply translate-x-full;
  }
}

.header {
  @apply bg-gray-200 p-4 border-b-2 border-b-gray-500 sticky top-0 z-10;
}

.fade-overlay {
  @apply absolute 
    inset-0 bg-gray-500 bg-opacity-75 
    transition-opacity ease-in-out duration-500;

  &.closed {
    @apply opacity-0;
  }
}
</style>
