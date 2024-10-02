<template>
  <section class="grid md:grid-cols-2 mb-4 md:mb-5">
    <h1 class="text-3xl md:text-5xl mt-11 mb-4">
      🖱️ Website Dev /
      <span class="font-semibold">Home</span>
    </h1>
    <EstimateLinkBtn/>
    <SiteTagline/>
  </section>

  <section class="transparent-bg p-8 mb-10 dark:text-neutral-100">
    <h2 class="inline-block text-2xl md:text-3xl font-semibold mb-1 border-b-1 border-white pb-6">
      Recent Blog Posts
    </h2>
    <BlogPosts :posts="posts"/>
  </section>

  <section class="transparent-bg p-8 mb-10 dark:text-neutral-100">
    <h2 class="inline-block text-2xl md:text-3xl font-semibold mb-2 border-b-1 border-white pb-6">
      Project Case Studies
    </h2>
    <CaseStudies :studies="studies"/>
  </section>
  
  <section class="flex flex-col md:flex-row transparent-bg-gray dark:text-neutral-100">
    <div class="md:w-3/4 pt-8 p-8 md:pr-2">
      <h2 class="text-2xl md:text-3xl font-bold text-center md:text-left">
        <span class="border-gray-800 md:border-0 text-center pb-5 md:pb-0 font-semibold md:font-semibold border-b-2">About </span><span class="hidden md:inline-block font-normal">|</span> <span class="block md:inline-block mt-10 md:mt-0 font-normal">Brandon Winger-Air</span>
      </h2>

      <hr class="mt-6 mb-4 border-gray-600">

      <AboutDescription/>
      <AboutContactBtn/>
    </div>

    <div class="w-1/2 md:max-w-sm p-0 md:p-10 self-center mx-auto mb-6 md:mt-0">
      <img src="~/assets/images/Brandon_Winger-Air_logo.png" alt="" class="mx-auto my-auto">
    </div>
  </section>

  <SiteBottom/>
</template>

<script setup>
definePageMeta({
  layout: 'animated-bg'
});

const { data: posts } = await useAsyncData('latest-posts', () => 
  queryContent('/blog')
    .sort({ date: -1 })
    .limit(3)
    .find()
);

const { data: studies } = await useAsyncData('latest-studies', () => 
  queryContent('/studies')
    .sort({ date: -1 })
    .limit(3)
    .find()
);
</script>