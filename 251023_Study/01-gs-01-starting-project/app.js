// // 只会返回插叙到的第一个元素
// const btnEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// btnEl.addEventListener('click', addGoal);

// function addGoal() {
// 	const enterValue = inputEl.value;
// 	const listItemEl = document.createElement('li');
// 	listItemEl.textContent = enterValue;
// 	listEl.appendChild(listItemEl);
// 	inputEl.value = '';
// }

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },

  methods: {
    addGoal() {
      // Vue 需要通过 this 来追踪数据变化
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
