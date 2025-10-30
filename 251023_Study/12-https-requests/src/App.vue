<template>
  <!-- <learning-survey @survey-submit="storeSurvey"></learning-survey>-->
  <!-- <user-experiences :results="savedSurveyResults"></user-experiences> -->

  <learning-survey></learning-survey>
  <user-experiences></user-experiences>
</template>

<script>
import LearningSurvey from "./components/survey/LearningSurvey.vue";
import UserExperiences from "./components/survey/UserExperiences.vue";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://dyzshjopvzdubtfxlkns.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5enNoam9wdnpkdWJ0Znhsa25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NDM4ODUsImV4cCI6MjA3NzMxOTg4NX0.pTn1ZcGlUmGu8R775glRFRWuibp4oYjVyGG7BINcFLA"
);

export default {
  provide() {
    return {
      supabase: supabase,
    };
  },
  components: {
    LearningSurvey,
    UserExperiences,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
