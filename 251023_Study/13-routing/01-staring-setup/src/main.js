import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 高优先级

    // route-view 只负责注册在顶层的路由, 子路由会被 route-view 渲染
    { path: "/", redirect: "/teams" },
    {
      name: "teams",
      path: "/teams",
      component: TeamsList,
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        }, // /teams/t1
      ],
    }, // ,alias : "/" 别名同
    { path: "/users", component: UsersList },
    { path: "/:notFound(.*)", component: NotFound },
    // 低优先级
  ],
  // Css Active Class
  linkActiveClass: "active",
});

const app = createApp(App);
app.use(router);

app.mount("#app");

// 58/100
