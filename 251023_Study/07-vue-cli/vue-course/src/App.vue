<template>
  <h2>My friends</h2>
  <ul>
    <li v-for="friend in friends" :key="friend.id">
      {{ friend.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        { id: "f1", name: "name 01", phone: "phone 01", email: "email 01" },
        { id: "f2", name: "name 02", phone: "phone 02", email: "email 02" },
        { id: "f3", name: "name 03", phone: "phone 03", email: "email 03" },
        { id: "f4", name: "name 04", phone: "phone 04", email: "email 04" },
      ],
    };
  },
};
</script>

// 77/100
