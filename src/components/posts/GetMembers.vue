<template>
    <div class="container">
        <div class="row">
            <div class="col s4">
                <h2>Meet our leadership</h2>
                <p>Libero fames augue nisl porttitor nisi, quis. Id ac elitodio vitae elementum enim vitae ullamcorper
                    suspendisse.</p>
            </div>
            <div class="col s8">
                <div class="row">
                    <div v-for="member in  wpMembers " :key="member.id" class="col s4">
                        <div class="card">
                            <div class="card-image">
                                <img :src="member._embedded['wp:featuredmedia'][0].source_url" alt="">
                            </div>
                            <div class="card-content">
                                <h3>{{ member.acf.name }}</h3>
                                <a v-bind:href="'mailto:' + member.acf.email">{{ member.acf.email }}</a>
                            </div>
                        </div>
                    </div>
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