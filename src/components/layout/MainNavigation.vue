<template>
    <div class="navbar-menu">
        <div class="navbar-start">
            <div class="navbar-item">
                <router-link to="/">Home</router-link>
            </div>
            <div v-for="page in pages" :key="page.id" class="navbar-item">
                <router-link :to="`/${page.slug}`">{{ page.title.rendered }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: []
        }
    },
    methods: {
        async getPages() {
            try {
                let response = await fetch("https://headless.collectr.nl/wp-json/wp/v2/pages");
                this.pages = await response.json();
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getPages();
    }
}
</script>