<template lang="pug">
.container
  .banner
    banner
  nuxt-section-block(
    v-for="article in news",
    :id="article.id",
    :document="article",
    :date="true",
    :key="article.id"
  )
  .cutter
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "最新消息",
  },
  data() {
    return {
      news: [],
    };
  },
  async fetch() {
    this.news = await this.$content("news").sortBy("prio", "desc").sortBy("createdAt", "desc").fetch();
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-height + 20px;
  padding-left: 10vw;
  padding-right: 10vw;
  @include with-mobile {
    padding-top: $mobile-nav-header-space;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .cutter {
    height: 1px;
  }
}
</style>
