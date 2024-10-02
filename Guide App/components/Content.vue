<template>
    <div class="mt-5">
        <main class="p-2 pr-3 pl-3">
            <h1 class="text-center">{{this.$config.env.title}}</h1>
            <article class="text-justify" v-html="content"></article>
        </main>
        <footer class="m-0 pb-1">
            <p class="text-center text-muted" v-html="this.$config.env.footer"></p>
        </footer>
    </div>
</template>

<script>
export default {
    computed: {
        content() {
            const article = this.$route.path == "/" ? this.articles["_"] : this.articles[this.$route.params.pathMatch];
            if(article) return article
                .replaceAll("{", "<span class='badge badge-guide'>")
                .replaceAll("}", "</span>")
                .replaceAll("((", `<img class='icon d-block d-lg-inline' alt='Item icon' src='${this.$config.env.icon_url.split("[NAME]")[0]}`)
                .replaceAll("))", `${this.$config.env.icon_url.split("[NAME]")[1]}'>`)
                .replaceAll("<h2>", "<h2><span class='hash'># </span>")
                .replaceAll("<h3>", "<h3><span class='hash'># </span>")
                .replaceAll("<h4>", "<h4><span class='hash'># </span>")
        }
    },
    data() {
        return {
            articles: {}
        }
    },
    created() {
        this.importAll(require.context("../articles/", true, /\.md$/));
    },
    methods: {
        importAll(r) {
            r.keys().forEach(key => (this.articles[key.replace("./", "").replace(".md", "")] = r(key).default));
        }
    }
}
</script>