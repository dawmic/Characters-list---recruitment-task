import { createRouter, createWebHistory } from "vue-router";
import CharactersList from "../views/CharactersList.vue";
import FilteredCharactersList from "../views/FilteredCharactersList.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "CharactersList",
      component: CharactersList,
    },
    {
      path: "/:query",
      name: "FilteredCharactersList",
      component: FilteredCharactersList,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    
  ],
});

export default router;
