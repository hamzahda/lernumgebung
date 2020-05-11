import Router from "vue-router";
import vue from "vue";

vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: () => import("./Views/Signup.vue")
    },
    {
      path: "/",
      name: "welcome",
      component: () => import("./Views/Welcome.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./Views/Login.vue")
    },
    {
      path: "/topic",
      name: "topic",
      component: () => import("./Views/Topic.vue")
    }

  ]
});
