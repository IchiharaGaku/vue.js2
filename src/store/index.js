import Vue from "vue";
import Vuex from "vuex";
import createdPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createdPersistedState()],
  state: {
    user: "",
  },
  mutations: {
    changeUserData(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    changeUserAction({ commit }, { user }) {
      commit("changeUserData", user);
    },
  },
  modules: {},
});
