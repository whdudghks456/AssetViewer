import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/test",
    nameL: "test",
    component: () => import("../views/TestView.vue"),
  },
  {
    path: "/test2",
    nameL: "test2",
    component: () => import("../views/TestView2.vue"),
  },
  {
    path: "/resize",
    nameL: "resize",
    component: () => import("../views/TestResize.vue"),
  },
  {
    path: "/detail",
    nameL: "detail",
    component: () => import("../views/DetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
