<template>
    <div class="container">
        <div v-if="page.title">
            <h2 class="title is-2">{{ page.title.rendered }}</h2>
            <div v-html="page.content.rendered"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: []
        }
    },
    methods: {
        async getPage() {
            try {
                let response = await fetch("https://headless.collectr.nl/wp-json/wp/v2/pages/50");
                this.page = await response.json();
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getPage();
    },
    mounted() {
        document.title = 'About | VueJS'
    }
}
</script>