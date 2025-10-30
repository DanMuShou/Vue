<template>
  <ul>
    <li v-for="goal in goals" :key="goal.text">
      <slot :item="goal" other-prop="..."></slot>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      goals: [
        { text: "Learn Vue - 01" },
        { text: "Learn Vue - 02" },
        { text: "Learn Vue - 03" },
      ],
    };
  },
};
</script>
<style></style>
