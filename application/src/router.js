import Router from "vue-router";
import vue from "vue";

import store from './store'
import Signup from "./Views/Signup.vue";
import Welcome from "./Views/Introduction.vue";
import Comments from "./Views/Comments.vue";
import Login from "./Views/Login.vue";
import Vars from './Views/Vars.vue';
import Oprators from './Views/Operators.vue'
import FlussKtrl from './Views/FlussKntrl.vue'
import For from './Views/Loop.vue'
import Eingabe from './Views/Gabe.vue'
import Arrays from './Views/Arrays.vue'


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isLoggedIn) {
    next('/login')
    return
  }
  next()
}
const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next('/')
    return
  }
  next()
}
vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: Signup,
      beforeEnter: ifAuthenticated
    },
    {
      path: "/",
      name: "welcome",
      component: Welcome,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: ifAuthenticated

    },
    {
      path: "/Datentypen",
      name: "vars",
      component: Vars,
      beforeEnter: ifNotAuthenticated

    },
    {
      path: "/Kommentare",
      name: "comments",
      component: Comments,
      beforeEnter: ifNotAuthenticated

    },
    {
      path: "/Operatoren",
      name: "oprators",
      component: Oprators,
      beforeEnter: ifNotAuthenticated

    },
    {
      path: "/ifelse",
      name: "ifelse",
      component: FlussKtrl,
      beforeEnter: ifNotAuthenticated

    },
    {
      path: "/Schleifen",
      name: "for",
      component: For,
      beforeEnter: ifNotAuthenticated

    },
    {
      path: "/Ausgabe",
      name: "gabe",
      component: Eingabe,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/arrays",
      name: "arrays",
      component: Arrays,
      beforeEnter: ifNotAuthenticated
    }
  ]
});
