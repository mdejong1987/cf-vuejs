<template>
    <h1>Posts</h1>
    <div v-for="post in wpPosts" v-bind:key="post.id">
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