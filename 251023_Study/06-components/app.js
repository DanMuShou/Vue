const app = Vue.createApp({
  data() {
    return {
      isDetilsVisible: false,
      friends: [
        { id: "IdA", name: "NameA", phone: "PhoneA", email: "EmailA" },
        { id: "IdB", name: "NameB", phone: "PhoneB", email: "EmailB" },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.isDetilsVisible = !this.isDetilsVisible;
    },
  },
});

app.component("friend-contact", {
  template: `
	<li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">Show details</button>
        <ul v-if="isDetailsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
	`,
  data() {
    return {
      isDetailsVisible: true,
      friend: { id: "IdA", name: "NameA", phone: "PhoneA", email: "EmailA" },
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },
});

const vm = app.mount("#app");
