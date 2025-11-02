<template>
  <button @click="confirmInput">confirm</button>
  <button @click="saveChange">Save Change</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "@/components/users/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data() {
    return { changeSaved: false };
  },
  methods: {
    confirmInput() {
      console.log("confirm");
      this.$router.push("/teams");
    },
    saveChange() {
      console.log("save change");
      this.changeSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("UsersList beforeRouteEnter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("UsersList beforeRouteLeave");
    console.log(to, from);
    if (this.changeSaved) {
      next();
    } else {
      const userWantToLeave = confirm("Are you sure? You got unsaved changes.");
      next(userWantToLeave);
    }
  },
  unmounted() {
    console.log("UsersList unmounted");
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
