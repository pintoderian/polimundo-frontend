import Vue from "vue";
import Vuex from "vuex";
import results from "./data/results";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    results: results,
  },
});

export default store;
