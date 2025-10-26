<template>
  <li>
    <h2>{{ name }} {{ isLove ? "(Love)" : "" }}</h2>
    <button @click="toggleLove()">Toggle Love</button>
    <button @click="toggleDetails()">Show Details</button>
    <ul v-if="isDetailsVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
  <button @click="deleteFriend">Delect</button>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isLove"],
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
      default: "No Email",
      validator(value) {
        return value.includes("@") && value.includes(".");
      },
    },
    isLove: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-love", "delete-friend"],
  // emits: {
  //   "toggle-love"(id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },

  data() {
    return {
      isDetailsVisible: false,
      // isFriendLove: this.isLove,
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
    toggleLove() {
      this.$emit("toggle-love");
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>

82/100
