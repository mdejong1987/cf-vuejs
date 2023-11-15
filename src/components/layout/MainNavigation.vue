<template>
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper">
                <div class="container">
                    <a href="/" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><router-link to="/">Home</router-link></li>
                        <li v-for="page in pages" :key="page.id">
                            <router-link :to="`/${page.slug}`">{{ page.title.rendered
                            }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
.parallax-container {
    height: 250px;
}
</style>

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
                let response = await fetch("https://headless.collectr.nl/wp-json/wp/v2/pages/?_embed");
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