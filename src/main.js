import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "es6-promise/auto";
import store from "./store";

Vue.config.productionTip = false;

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.use(VueRouter);

import routes from "./routes/index";
const router = new VueRouter({
  routes,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
