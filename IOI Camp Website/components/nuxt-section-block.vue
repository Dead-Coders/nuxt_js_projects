<template lang="pug">
.section-block
  .section-header
    h2
      font-awesome-icon(icon="terminal", class="title-icon")
      | {{ document.title }}
    label(v-if="date") {{ (new Date(document.createdAt)).toLocaleString('zh-TW') }}
  nuxt-content(:document="document")
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    document: {
      type: Object,
      default: {
        title: '',
      },
    },
    date: {
      type: Boolean,
      default: false
    }
  },
});
</script>

<style lang="scss">
@include section-block('.nuxt-content');
</style>
