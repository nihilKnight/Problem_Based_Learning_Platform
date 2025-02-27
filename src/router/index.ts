import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import IntroView from "@/views/IntroView.vue";
import CoursesListView from "@/views/CoursesListView.vue";
import PBLIntroView from "@/views/PBLIntroView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/courseList",
    name: "courseList",
    component: CoursesListView,
  },
  {
    path: "/pblIntro",
    name: "pblIntro",
    component: PBLIntroView,
  },
  {
    path: "/intro",
    name: "intro",
    component: IntroView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
