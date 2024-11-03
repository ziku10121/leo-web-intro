import { createRouter, createWebHistory } from "vue-router";

// const defaultChildRoutes = () => [
//   {
//     path: "",
//     name: "",
//     meta: { title: "Home Page" },
//   },
// ];

const errorChildRoutes = () => [
  {
    path: "401",
    name: "Page401",
    component: () => import("../views/Error/401.vue"),
    meta: { title: "401" },
  },
  {
    path: "404",
    name: "Page404",
    component: () => import("../views/Error/404.vue"),
    meta: { title: "404" },
  },
];

const routes = [
  {
    path: "/",
    alias: "/home", //讓一個元件回應多個路徑，可使用別名（alias）功能
    name: "Home",
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About/index.vue"),
  },
  {
    path: "/gear",
    name: "Gear",
    component: () => import("../views/Gear/index.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../views/Portfolio/index.vue"),
  },
  {
    path: "/error",
    name: "ErrorPages",
    component: () => import("../views/Error/404.vue"),
    children: errorChildRoutes(),
  },
  {
    path: "/:pathMatch(.*)*", // 捕獲所有未匹配的路由
    name: "Error404",
    component: () => import("../views/Error/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }), // 切換路由時，頁面滾動置頂
  routes,
});

export default router;
