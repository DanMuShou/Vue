<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'good' }">
      <button type="button" @click="activate('good')">Good</button>
    </li>
    <li :class="{ active: modelValue === 'perfect' }">
      <button type="button" @click="activate('perfect')">Perfect</button>
    </li>
  </ul>
</template>
<script>
export default {
  // 定义了一个名为 modelValue 的 prop，用于接收父组件传递的值
  props: ["modelValue"],
  // 声明了一个自定义事件 update:modelValue，用于向父组件传递数据更新
  emits: ["update:modelValue"],
  //   data() {
  //     return {
  //       activeOption: this.modelValue,
  //     };
  //   },
  //   computed: {
  //     activeOption() {
  //       return this.modelValue;
  //     },
  //   },
  methods: {
    activate(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>
<style scoped>
.active {
  border-color: blueviolet;
}

.active button {
  color: blueviolet;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 2px solid gray;
  padding: 1rem;
  display: flex;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
