<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
    <favorite-value></favorite-value>
  </base-container>
  <base-container title="Vuex">
    <user-auth></user-auth>
    <p>{{ testAuth }}</p>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import UserAuth from "./components/UserAuth.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  methods: {
    addOne() {
      this.$store.dispatch("numbers/increase", { value: 10 });
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.isUserAutthenticated;
    },
    testAuth() {
      return this.$store.getters.testAuth;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
