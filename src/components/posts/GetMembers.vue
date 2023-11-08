<template>
    <div class="columns">
        <div v-for="member in wpMembers" :key="member.id" class="column">

            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src="member.featured_media" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img :src="member.acf.image" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{ member.acf.name }}</p>
                            <p class="subtitle is-6">
                                <a href="">
                                    {{ member.acf.email }}
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class="content" v-html="member.content.rendered"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GetMembers',
    props: ['wpMembers'],
    data() {
        return {
            id: 28,
            media: []
        }
    },
    methods: {
        async getMedia(id) {
            try {
                let response = await fetch(`https://headless.collectr.nl/wp-json/wp/v2/media/${id}`);
                this.media = await response.json();

            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
    }
}
</script>