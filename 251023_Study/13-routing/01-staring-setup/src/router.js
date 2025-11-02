import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "./pages/TeamsList.vue";
import TeamFooter from "./pages/TeamFooter.vue";
import UsersList from "./pages/UsersList.vue";
import UserFooter from "./pages/UserFooter.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 高优先级

    // route-view 只负责注册在顶层的路由, 子路由会被 route-view 渲染
    { path: "/", redirect: "/teams" },
    {
      name: "teams",
      path: "/teams",
      meta: { needAuth: true },
      components: { default: TeamsList, footer: TeamFooter },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        }, // /teams/t1
      ],
    }, // ,alias : "/" 别名同
    {
      path: "/users",
      components: { default: UsersList, footer: UserFooter },
      beforeEnter(to, from, next) {
        console.log("users beforeEnter");
        console.log(to, from);
        next();
      },
    },
    { path: "/:notFound(.*)", component: NotFound },
    // 低优先级
  ],
  // Css Active Class
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach(function (to, from, next) {
  console.log("Global beforeEach");
  console.log(to, from);
  if (to.meta.needAuth) {
    console.log("Need Auth");
    next();
  } else {
    next();
  }
  // if (to.name === "team-members") next();
  // else next({ name: "team-members", params: { teamId: "t2" } });
});

router.afterEach(function (to, from) {
  console.log("Global afterEach");
  console.log(to, from);
});

export default router;
