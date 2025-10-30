<template>
  <base-card>
    <base-button
      @click="switchTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resource</base-button
    >
    <base-button @click="switchTab('add-resource')" :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>
<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: "stored-resources",
      storeResources: [
        {
          id: "official-guide",
          title: "官方指南",
          description: "Vue.js 官方指南",
          link: "https://cn.vuejs.org/v2/guide/",
        },
        {
          id: "google-guide",
          title: "谷歌指南",
          description: "谷歌指南",
          link: "https://developers.google.cn/web/tools/chrome-devtools/",
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    switchTab(tab) {
      this.selectedTab = tab;
    },
    addResource(resourceData) {
      const newResource = {
        id: new Date().toISOString(),
        title: resourceData.title,
        description: resourceData.description,
        link: resourceData.link,
      };
      this.storeResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    removeResource(resourceId) {
      // 全新的数组赋值给了storeResources, 所以并不会通知组件更新, 仍使用的是旧数据
      // this.storeResources = this.storeResources.filter(
      //   (resource) => resource.id !== resourceId
      // );
      const index = this.storeResources.findIndex(
        (resource) => resource.id === resourceId
      );
      this.storeResources.splice(index, 1);
      console.log(this.storeResources);
    },
  },
  provide() {
    return {
      resources: this.storeResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
};
</script>
<style lang=""></style>
