const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoalValue.trim() === "") {
        this.goals.push("Null" + this.goals.length);
        return;
      }
      this.goals.push(this.enteredGoalValue);
    },
    removeLastGoal() {
      this.goals.pop();
    },
    removeGoal(index) {
      //第一个参数 index 表示开始修改数组的位置, 第二个参数表示删除的个数
      this.goals.splice(index, 1);
    },
  },
});

vm = app.mount("#user-goals");

44 / 100;
