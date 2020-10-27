import Vue from "vue";
import VueRouter from "vue-router";

const Regiter = () => import("../views/Regiter.vue");
const Login = () => import("../views/Login.vue");
const UserInfo = () => import("../views/UserInfo.vue");
const Home = () => import("../views/Home.vue");
const Edit = () => import("../views/Edit.vue");
const Article = () => import("../views/Article.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      keepalive: true,
    },
  },
  {
    path: "/regiter",
    name: "regiter",
    component: Regiter,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/userinfo",
    name: "userinfo",
    component: UserInfo,
    meta: {
      istoken: true,
    },
  },
  {
    path: "/edit",
    name: "edit",
    component: Edit,
    meta: {
      istoken: true,
    },
  },
  {
    path: "/article/:id",
    component: Article,
  },
];
const router = new VueRouter({
  routes,
  // mode: "history",
});
// 路由守卫
router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token") && localStorage.getItem("id")) {
    next();
  } else if (to.meta.istoken == true) {
    Vue.prototype.$toast.fail("请登录");
    next({ name: "login" });
    return false;
  } else {
    next();
  }
});

export default router;
