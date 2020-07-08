import Router from "vue-router";
import vue from "vue";


import Signup from "./Views/Signup.vue";
import Welcome from "./Views/Introduction.vue";
import Comments from "./Views/Comments.vue";
import Login from "./Views/Login.vue";
import Vars from './Views/Vars.vue';
import Oprators from './Views/Operators.vue'
import FlussKtrl from './Views/FlussKntrl.vue'
import For from './Views/Loop.vue'
import Eingabe from './Views/Gabe.vue'


vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/",
      name: "welcome",
      component:  Welcome
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/vars",
      name: "vars",
      component: Vars
    },
    {
      path: "/comments",
      name: "comments",
      component: Comments
    },
        {
      path: "/oprators",
      name: "oprators",
      component: Oprators
    }, 
    {
      path: "/ifelse",
      name: "ifelse",
      component: FlussKtrl
    },
    {
      path: "/for",
      name: "for",
      component:  For
    },
    {
      path: "/gabe",
      name: "gabe",
      component:  Eingabe
    }
   ]
});
