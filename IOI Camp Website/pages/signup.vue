<template lang="pug">
.container
  form-section
    h1
      font-awesome-icon(icon='chevron-right')
      | &nbsp;建立帳號
    .content
      p
        | 報名截止囉！感謝您的支持ヾ(≧▽≦*)o
    h2
      font-awesome-icon(icon='chevron-right')
      | &nbsp;已經有帳號？
    .content
      p
        NuxtLink(to="/signin/") 馬上登入
        | &nbsp;IOICamp 2021！
  .cutter
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "我要報名",
  },
  middleware: 'auth',
  auth: 'guest',
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-space + 20px;
  padding-bottom: 70px;
  padding-left: 20vw;
  padding-right: 20vw;
  @include with-mobile {
    padding-top: $mobile-nav-header-space + 20px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}
</style>
