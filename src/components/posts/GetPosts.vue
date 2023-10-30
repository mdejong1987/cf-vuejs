<template>
    {{ wpPosts.status }}
    {{ wpPosts.type }}

    <div v-for="post in wpPosts" v-bind:key="post.id" class="animate__animated animate__fadeIn">
        <h2>{{ post.title.rendered }}</h2>
        <div v-html="post.excerpt.rendered"></div>
    </div>
</template>

<script>
export default {
  name: 'GetPosts',
  props: ['wpPosts'],
  data() {
    return {
    }
  },
}
</script>