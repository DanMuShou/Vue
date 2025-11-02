<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  inject: ["users", "teams"],
  props: ["teamId"],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: "",
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      // teams/[teamId]
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      if (selectedTeam) {
        // map阶段遍历每一个memverid
        // filter阶段过滤掉undefined的member
        this.teamName = selectedTeam.name;
        this.members = selectedTeam.members
          .map((memberId) => this.users.find((user) => user.id === memberId))
          .filter((member) => member !== undefined);
      }
    },
  },
  // created() {
  //   this.loadTeamMembers(this.teamId);
  //   console.log(this.$route.query);
  // },
  beforeRouteUpdate(to, from, next) {
    console.log("TeamMembers beforeRouteUpdate");
    console.log(to, from);
    this.loadTeamMembers(to.params.teamId);
    next();
  },

  // watch: {
  //   // route并不会销毁重建组件, 而是缓存, 当路由改变时, 并不会调用created方法
  //   teamId(newId) {
  //     this.loadTeamMembers(newId);
  //   },
  // },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
