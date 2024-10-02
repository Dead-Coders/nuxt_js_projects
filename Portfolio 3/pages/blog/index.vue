<template>
  <section class="mb-8 md:mb-7">
    <h1 class="text-3xl md:text-5xl mt-11 mb-7">
      🖱️ Website Dev /
      <span class="font-semibold">Blog</span>
    </h1>
    <SiteTagline/>
  </section>

  <section class="transparent-bg p-8">
    <h2 class="inline-block text-2xl md:text-3xl mb-1 font-semibold dark:text-neutral-100 border-b-1 border-white pb-6">
      All Blog Posts
    </h2>
    <BlogPosts :posts="posts"/>
  </section>

  <SiteBottom/>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog').sort({ date: -1 }).find()
);
</script>