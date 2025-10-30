<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="addGoal()">Set Goals</button>

  <teleport to="body">
    <ErrorAlert v-if="isInputInvalid">
      <h2>请输入有效文本</h2>
      <p>重新输入</p>
      <button @click="configError()">确定</button>
    </ErrorAlert>
  </teleport>
</template>
<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert: ErrorAlert,
  },
  data() {
    return {
      isInputInvalid: false,
    };
  },
  methods: {
    addGoal() {
      const enterInput = this.$refs.goal.value;
      if (enterInput === "") {
        this.isInputInvalid = true;
      } else {
        this.isInputInvalid = false;
        alert("Goal added!");
      }
    },
    configError() {
      {
        this.isInputInvalid = false;
      }
    },
  },
};
</script>
<style></style>
