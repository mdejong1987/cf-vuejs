<template>
    <div class="navbar-fixed">
        <nav class="nav-transparent">
            <div class="nav-wrapper">
                <div class="container">
                    <a href="/" class="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><router-link to="/">Home</router-link></li>
                        <li v-for="page in pages" :key="page.id">
                            <router-link :to="`/${page.slug}`">{{ page.title.rendered
                            }}</router-link>
                        </li>
                    </ul>
                </div>
                <ul class="sidenav" id="mobile-demo">
                    <li><router-link to="/">Home</router-link></li>
                    <li v-for="page in pages" :key="page.id">
                        <router-link :to="`/${page.slug}`">{{ page.title.rendered
                        }}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
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