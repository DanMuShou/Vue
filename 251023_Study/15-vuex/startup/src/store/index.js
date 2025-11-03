import { createStore } from "vuex";

import rootAction from "./actions";
import rootGetter from "./getter";
import rootMutations from "./mutations";

import counterModel from "./counter/index";

const store = createStore({
  modules: {
    numbers: counterModel,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: rootGetter,
  mutations: rootMutations,
  actions: rootAction,
});

export default store;
