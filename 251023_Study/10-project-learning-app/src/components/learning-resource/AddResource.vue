<template>
  <base-dialog
    v-if="isInputInvalid"
    title="Invalid Input !!!"
    @close="confirmError"
  >
    <template #default>
      <p>至少有个一输入不合格</p>
      <p>请重新输入</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData()">
      <div class="form-control">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          ref="titleInput"
        />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="3"
          ref="descriptionInput"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input
          type="url"
          id="link"
          name="link"
          placeholder="Link"
          ref="linkInput"
        />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>
<script>
export default {
  inject: ["addResource"],
  data() {
    return {
      isInputInvalid: false,
    };
  },
  methods: {
    submitData() {
      const title = this.$refs.titleInput.value;
      const description = this.$refs.descriptionInput.value;
      const link = this.$refs.linkInput.value;
      if (
        title.trim() === "" ||
        description.trim() === "" ||
        link.trim() === ""
      ) {
        this.isInputInvalid = true;
        return;
      }
      this.addResource(title, description, link);
      console.log("submit");
    },
    confirmError() {
      this.isInputInvalid = false;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 2px solid var(--gray);
  padding: 0.5em;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--orange-light);
  background: var(--orange-light-2);
}

.form-control {
  margin: 1rem 0 1.6rem;
}
</style>
