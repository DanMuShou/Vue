<template>
  <div>
    <input type="text" v-model="inputUser" />
    <button @click="addUser">Add Button</button>
  </div>
  <TransitionGroup tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </TransitionGroup>
</template>
<script>
export default {
  data() {
    return {
      users: ["User1", "User2", "User3", "User4", "User5"],
      inputUser: "",
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.inputUser + " " + (this.users.length + 1));
    },
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
  },
};
</script>
<style>
ul {
  list-style: none;
  padding: 0;
  margin: 1rem;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-leave-to,
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-48%);
}

.user-list-enter-active {
  transition: all 0.5s ease-out;
}
.user-list-leave-active {
  transition: all 0.5s ease-in;
  position: absolute;
}

.user-list-leave-from,
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.user-list-move {
  transition: transform 0.8s ease;
}
</style>
