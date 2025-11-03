<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isAuth = computed(() => store.getters.isUserAutthenticated);

const login = () => {
  store.dispatch("login");
};
const logout = () => {
  store.dispatch("logout");
};
</script>
<style lang=""></style>
