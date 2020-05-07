import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    accessToken: localStorage.getItem("accessToken") || "",
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_error(state) {
      state.status = "error";
    },
    auth_success(state, accessToken, user) {
      state.status = "success";
      state.accessToken = accessToken;
      state.user = user;
    },
    logout(state) {
      state.status = "";
      state.accessToken = "";
    },
  },




















  
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:3000/auth/login",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const accessToken = resp.data.accessToken;
            const user = resp.data.user;
            localStorage.setItem("accessToken", accessToken);
            axios.defaults.headers.common["Authorization"] = accessToken;
            commit("auth_success", accessToken, user);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("accessToken");
            reject(err);
          });
      });
    },
    signup({ commit }, user) {
      return new Promise(() => {
        commit("auth_request");
        axios({
          url: "http://localhost:3000/auth/register",
          data: user,
          method: "POST",
        // eslint-disable-next-line no-console
        }).then((resp) => {console.log(resp)});
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("accessToken");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.accessToken,
    authStatus: (state) => state.status,
  },
});
