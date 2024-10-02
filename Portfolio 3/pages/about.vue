<template>
  <section class="grid md:grid-cols-2 mb-4 md:mb-5">
    <h1 class="text-3xl md:text-5xl mt-11 mb-4">
      🖱️ Website Dev /
      <span class="font-semibold">About</span>
    </h1>
    <EstimateLinkBtn/>
    <SiteTagline/>
  </section>

  <section class="flex flex-col md:flex-row transparent-bg-gray dark:text-neutral-200 md:mb-12">
    <div class="order-last md:order-first md:w-3/4 pt-0 md:pt-8 p-8 md:pr-2">
      <div class="flex justify-between">
        <h2 class="w-full text-2xl md:text-4xl font-medium text-center md:text-left mb-1">
          Brandon Winger-Air
        </h2>

        <button class="hidden md:block w-32 h-10 bg-slate-100 dark:bg-slate-200 hover:bg-slate-200 dark:hover:bg-slate-300 border-1 border-slate-400 rounded-md -mt-1">
          <a href="https://github.com/BrandonWingerAir" target="_blank" class="text-slate-800 text-right justify-self-end font-semibold">
            Github <Icon name="uil:github" size="1.75rem" class="text-green-500 ml-1 -mt-1"/>
          </a>
        </button>
      </div>

      <hr class="mt-6 mb-5 border-white">

      <AboutDescription/>
      <AboutContactBtn/>
    </div>

    <div class="w-1/2 md:max-w-sm p-0 md:p-10 self-center mx-auto mt-9 mb-6 md:mt-0">
      <img src="~/assets/images/profile.jpg" alt="" class="w-85 mx-auto my-auto border-2 border-zinc-100 rounded-full">
    </div>
  </section>

  <SiteBottom/>
</template>