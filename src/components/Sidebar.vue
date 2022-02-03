<template>
  <div class="sidebar-wrapper">
    <div class="sidebar">
      <div class="logo">
        <img
          src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
          alt="Workflow"
        />
      </div>
      <div class="nav-wrapper">
        <nav class="nav">
          <a href="#" class="nav-item group" v-for="i of 10" :key="i">
            Reports {{ i }}
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-wrapper {
  @apply flex w-64 flex-col fixed h-screen;
}
.sidebar {
  @apply border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto;
}

.logo {
  @apply flex-shrink-0 px-4 flex items-center;

  img {
    @apply h-8 w-auto;
  }
}

.nav-wrapper {
  @apply flex-grow mt-5 flex flex-col;
}

.nav {
  @apply flex-1 px-2 pb-4 space-y-1;
}

.nav-item {
  @apply text-gray-600 hover:bg-gray-50 hover:text-gray-900  rounded-md py-2 px-2 flex items-center text-sm font-medium;
}
</style>
