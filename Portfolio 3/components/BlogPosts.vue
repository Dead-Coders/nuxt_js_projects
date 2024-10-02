<template>
  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <div 
      v-for="post in props.posts"
      :key="post.slug"
      class="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden hover:opacity-75 dark:hover:opacity-85"
    >
      <NuxtLink :to="post._path">
        <img :src="`${config.public.baseURL}/images/blog/${post.cover}`" alt="Blog Post Cover Image" class="w-full h-48 object-cover">
      </NuxtLink>

      <div class="p-6">
        <h2 class="text-xl font-bold dark:text-neutral-200 mb-2">{{ post.title }}</h2>
        <p class="text-gray-700 dark:text-neutral-400 mb-6">{{ post.description }}</p>

        <div class="flex justify-center">
          <NuxtLink
            :to="post._path"
            class="bg-sky-500 hover:bg-sky-600 text-white pt-2 pb-3 px-4 rounded mb-2"
          >
            Read Article
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig();
const props = defineProps(['posts']);
</script>