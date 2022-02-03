<script setup lang="ts">
import Header from "./Header.vue";
import Dashboard from "./Dashboard.vue";
import Sidebar from "./Sidebar.vue";
</script>

<template>
  <div>
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->

    <!-- Static sidebar for desktop -->
    <Sidebar />

    <div class="md:pl-64">
      <div class="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
        <Header />
        <Dashboard />
      </div>
    </div>
  </div>
</template>
