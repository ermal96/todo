import { createRouter, createWebHistory } from "vue-router";
import Todos from "../views/Todos.vue";

const routes = [
  {
    path: "/",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/active",
    name: "Active",
    component: () => import("../views/Active.vue"),
  },
  {
    path: "/completed",
    name: "Completed",
    component: () => import("../views/Completed.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
