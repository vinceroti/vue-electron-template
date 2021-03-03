import module from "./module";
import { createSharedMutations } from "vuex-electron";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    module,
  },
  plugins: [createSharedMutations()],
});
