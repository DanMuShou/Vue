const app = Vue.createApp({
  data() {
    return {
      courseCoalA: "完成 Vue 课程 01",
      courseCoalB: "<h2>学习 Vue 课程 02</h2>",
      vueLink: "https://cn.vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseCoalA;
      }
      return this.courseCoalB;
    },
  },
});

app.mount("#user-goal");
