import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";
import NotFound from '../views/404.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;