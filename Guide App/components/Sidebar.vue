<template>
    <nav>
        <img class="logo m-3" alt="Logo" :src="$config.env.logo">
        <span class="sidebar-label d-block">{{$config.env.subtitle.replace('"', "")}}</span>
        <ul class="nav nav-pills nav-stacked flex-column p-3">
            <li v-for="(link, item) in sidebar" :key="item" v-bind:class="item == active ? 'sidebar-item nav-item active' : 'sidebar-item nav-item'"><nuxt-link class="nav-link" :to="item">{{link.title}}</nuxt-link></li>
        </ul>
    </nav>
</template>

<script>
import list from "../articles/list.json"

export default {
    computed: {
        sidebar() {
            return list
        },
        active() {
            return this.$route.params.pathMatch || "/";
        }
    },
    head() {
        const slug = this.$route.params.pathMatch;
        return {
            title: list[slug] ? `${list[slug].title} | ${this.$config.env.title || "Guide"}` : (this.$config.env.title || "Guide")
        };
    }
}
</script>