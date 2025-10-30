<template>
  <the-header title="Vue.js 官方资源"></the-header>
  <the-resources></the-resources>
</template>
<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResources from "./components/learning-resource/TheResources.vue";

export default {
  components: {
    TheHeader,
    TheResources,
  },
};
</script>

<style>
:root {
  --orange: #f0932b;
  --orange-light: #f5d5ae;
  --orange-light-2: #fff2e1;
  --gray: #cacaca;
  --gray-2: #a5a5a5;
  --gray-3: #8a8a8a;
  --color-light: white;
  --color-dark: black;
}

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
