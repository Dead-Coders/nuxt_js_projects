<template>
  <section class="mb-8 md:mb-7">
    <h1 class="text-3xl md:text-5xl mt-11 mb-6">
      🖱️ Website Dev /
      <span class="font-semibold">Blog</span>
    </h1>
    <SiteTagline/>
  </section>

  <section class="w-full transparent-bg-dark p-8 dark:text-white">
    <main>
      <h2 class="text-2xl md:text-3xl font-semibold border-b-2 border-neutral-800 dark:border-gray-200 inline-block mb-8 pb-7">
        {{ data.title }}
      </h2>
      <h3 class="text-lg font-bold mb-6">Posted by: <a href="https://brandonwinger-air.com" target="_blank" class="font-thin">Brandon Winger-Air</a></h3>
      <ContentRenderer :value="data" class="prose dark:prose-invert mb-4 mx-auto max-w-7xl"/>
      <div class="my-8">
        <!-- TODO: Create Tags Page -->
        <!-- <a 
          v-for="tag in data.tags" 
          :key="tag" 
          :href="`/blog/tags/${tag}`"
          class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 mr-4"
        >
          <Icon name="uil:tag" size="1.5rem" class="text-gray-100 mr-2"/>
          {{ tag }}
        </a> -->
        <span 
          v-for="tag in data.tags" 
          :key="tag"
          class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 mr-4"
        >
          <Icon name="uil:tag" size="1.5rem" class="text-gray-100 mr-2"/>
          {{ tag }}
        </span>
      </div>
    </main>
  </section>

  <SiteBottom/>
</template>

<script setup>
const props = defineProps(['tags']);

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({ _path: path })
    .findOne();
});
</script>