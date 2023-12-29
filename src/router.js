import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import FavoritesPage from "@/pages/FavoritesPage";
import ProfilePage from "@/pages/ProfilePage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/favorites", component: FavoritesPage },
  { path: "/profile", component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
