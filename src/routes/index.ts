import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/grocery",
      name: "grocery",
      component: () => import("../pages/Grocery/GroceryApp.vue"),
    },
  ],
});

export default router;
