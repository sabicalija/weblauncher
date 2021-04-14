import Vue from "vue";
import VueRouter from "vue-router";
import Favorites from "../views/Favorites.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Favorites",
    component: Favorites
  }
];

const router = new VueRouter({
  routes
});

export default router;
