import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import store from "./store";
import Axios from "axios";
import router from "./router";


Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = accessToken;
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
