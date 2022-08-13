import { createRouter, createWebHistory } from "vue-router";
import CharactersList from "../views/CharactersList.vue";
import Error from "../views/Error.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "CharactersList",
      component: CharactersList,
    },
    {
      path: "/error",
      name: "error",
      component: Error,

    }
  ],
});

export default router;
