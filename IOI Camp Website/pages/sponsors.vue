<template lang="pug">
.container
  nuxt-section-block(
    v-for="sponsor in sponsors",
    :id="sponsor.id",
    :document="sponsor",
    :key="sponsor.id"
  )
  .cutter
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "贊助夥伴",
  },
  data() {
    return {
      sponsors: [],
    };
  },
  async fetch() {
    this.sponsors = await this.$content("sponsors").sortBy("slug", "asc").fetch();
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-space;
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
