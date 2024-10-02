<template>
  <section class="grid md:grid-cols-2 mb-4 md:mb-5">
    <h1 class="text-3xl md:text-5xl mt-11 mb-4">
      🖱️ Website Dev /
      <span class="font-semibold">Projects</span>
    </h1>
    <EstimateLinkBtn/>
    <SiteTagline/>
  </section>

  <section class="mb-8 transparent-bg p-8">
    <h2 class="inline-block text-2xl md:text-3xl mb-5 font-semibold dark:text-neutral-100 border-b-1 border-white pb-6">
      Recent Projects
    </h2>

    <section class="grid md:grid-cols-2 gap-10">
      <div 
        v-for="project in data?.viewer.repositories.nodes" 
        :key="project.id" 
        class="p-8 border-4 mt-4 rounded-lg border-neutral-100 dark:border-neutral-400 bg-gray-300 dark:bg-gray-900"
      >
        <a :href="project.url" target="_blank">
          <h2 class="text-2xl dark:text-gray-100 font-semibold mb-2 hover:underline">
            {{ project.name }}
          </h2>
        </a>
        <p class="dark:text-gray-300">{{ project.description }}</p>

        <div class="text-white dark:text-neutral-100">
          <button class="rounded-md border-2 border-neutral-100 dark:border-0 bg-sky-500 dark:bg-sky-600 hover:bg-sky-600 dark:hover:bg-sky-500 p-2 pt-1 mt-4 mr-3">
            <a :href="project.homepageUrl" target="_blank">
              View Site
            </a>
          </button>
          <button class="rounded-md border-2 border-neutral-100 dark:border-0 bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-500 p-2 pt-1">
            <a :href="project.url" target="_blank">
              View Code
            </a>
          </button>
        </div>

        <!-- Additional GitHub Repo Data -->
        <!-- <div class="mt-4">
          <Icon name="uil:star" size="1.1rem" class="text-indigo-700"/> Stars: {{ project.stargazerCount }}
          <Icon name="system-uicons:branch" size="1.1rem" class="text-indigo-700"/> Forks: {{ project.forkCount }}
          <Icon name="uil:eye" size="1.1rem" class="text-indigo-700"/> Watchers: {{ project.watchers.totalCount }}
        </div> -->
      </div>
    </section>
  </section>

  <SiteBottom/>
</template>

<script setup>
const query = gql`
  {
    viewer {
      repositories(first: 8, orderBy: {field: CREATED_AT, direction: DESC}, privacy: PUBLIC) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          url,
          homepageUrl
          # forkCount
          # watchers {
          #   totalCount
          # }
          # stargazerCount
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>