<template>
  <section class="mb-8 md:mb-7">
    <h1 class="text-3xl md:text-5xl mt-11 mb-7">
      🖱️ Website Dev /
      <span class="font-semibold">Studies</span>
    </h1>
    <SiteTagline/>
  </section>

  <section class="mb-8 transparent-bg p-8 dark:text-neutral-100">
    <h2 class="inline-block text-2xl md:text-3xl font-semibold mb-6 border-b-1 border-white pb-6">
      Case Study: Design and Development Projects
    </h2>

    <p class="text-lg mb-7">
      UI/UX decisions, features and use cases during my project development.
    </p>


    <CaseStudies :studies="studies"/>
  </section>    
  
  <SiteBottom/>
</template>

<script setup>
const { data: studies } = await useAsyncData('studies', () => 
  queryContent('/studies').sort({ date: -1 }).find()
);
</script>