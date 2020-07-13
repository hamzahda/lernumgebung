import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    accessToken: localStorage.getItem("accessToken") || "",
    user: {},
    name:""
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_error(state) {
      state.status = "error";
    },
    auth_success(state, data) {
      state.status = "success";
      state.accessToken = data.accessToken;
      
      state.user = data.user;
      
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
            console.log("user  "+ JSON.stringify(user));
            localStorage.setItem("accessToken", accessToken);
            axios.defaults.headers.common["Authorization"] = accessToken;
            commit("auth_success",{
              accessToken: accessToken,
              user: user              
            });
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
      console.log('test')
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("name");
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
