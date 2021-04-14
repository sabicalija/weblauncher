import Vue from "vue";
import App from "./App.vue";
import "../plugins/icons";

const app = document.createElement("div");
app.setAttribute("id", "app");
document.body.appendChild(app);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
