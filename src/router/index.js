import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/cards",
    name: "cards",
    component: () => import("../pages/cards"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
