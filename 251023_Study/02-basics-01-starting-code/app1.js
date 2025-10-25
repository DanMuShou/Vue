const app = Vue.createApp({
  data() {
    return {
      counter: 12,
      name: " ",
      lastName: " ",
      confirmName: "confirmName",
      // fullname: "",
    };
  },
  // 计算属性
  // 能观察到多个属性的变化
  computed: {
    fullname() {
      console.log("running");
      if (this.name === " " || this.lastName === " ") return " ";
      else return this.name + " " + this.lastName;
    },
  },
  // name发生改变, 触发watch, 有两个参数oldvalue, newvalue
  // 只能观察单个属性
  watch: {
    // name(value) {
    //   if (value === " ") this.fullname = "";
    //   this.fullname = value + " " + this.lastName;
    // },
    // lastName(newvalue, oldvalue) {
    //   if (newvalue === " ") this.fullname = "";
    //   this.fullname = this.name + " " + newvalue;
    // },
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    submitForm(event) {
      alert("提交完成!");
    },
    confirmInput() {
      this.confirmName = this.name;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      console.log("outputFullName() called");
      if (this.name === "") return "";
      return this.name + " " + "Huang";
    },
  },
});

app.mount("#event");
