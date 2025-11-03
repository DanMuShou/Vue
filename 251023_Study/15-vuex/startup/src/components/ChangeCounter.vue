<template>
  <button @click="increment">Add 1</button>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    // addOne() {
    //   this.$store.commit("increment");
    // },
    ...mapMutations("numbers", ["increment", "increase"]),
  },
};
</script>
<style></style>
