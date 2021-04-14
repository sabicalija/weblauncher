import Vue from "vue";
import VueRouter from "vue-router";
import FavoritesView from "../views/FavoritesView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FavoritesView",
    component: FavoritesView
  }
];

const router = new VueRouter({
  routes
});

export default router;
