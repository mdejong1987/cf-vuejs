<template>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <a href="/">
                <span class="font-semibold text-xl tracking-tight">Website Ding</span>
            </a>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-normal lg:flex-grow">
                <router-link to="/"
                    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Home</router-link>
                <div v-for="page in pages" :key="page.id">
                    <router-link :to="`/${page.slug}`"
                        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">{{
                            page.title.rendered }}</router-link>
                </div>
            </div>
        </div>
    </nav>
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