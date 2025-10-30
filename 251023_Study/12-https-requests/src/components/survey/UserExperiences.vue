<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <h4 v-if="isLoading">Loading...</h4>
      <h4 v-else-if="!isLoading && error">{{ error }}</h4>
      <h4 v-else-if="!isLoading && results?.length === 0">
        No stored experiences found. Start adding some survey results first.
      </h4>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  inject: ["supabase"],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async loadExperiences() {
      this.isLoading = true;
      this.error = null;

      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { data, error } = await this.supabase.from("surveys").select();

      this.isLoading = false;
      if (error) {
        this.error = error.message;
        return;
      }
      this.results = data;
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
