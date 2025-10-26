<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="enterName" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" id="phone" v-model="enterPhone" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" v-model="enterEmail" />
    </div>

    <button type="submit">Add Friend</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      enterName: "",
      enterPhone: "",
      enterEmail: "",
    };
  },
  emits: {
    "add-contact": function (name, phone, email) {
      console.log("addContact in emits", name, phone, email);
      if (name && phone && email) {
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    },
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enterName,
        this.enterPhone,
        this.enterEmail
      );
    },
  },
};
</script>
<style></style>
