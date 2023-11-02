<template>
    <div class="columns">
        <div v-for="member in wpMembers" :key="member.id" class="column">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
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
    props: ['wpMembers']
}
</script>