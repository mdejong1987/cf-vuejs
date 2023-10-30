<template>
    <div v-for="post in wpPosts" v-bind:key="post.id" class="animate__animated animate__fadeIn">
      <div v-if="(post.status === 'publish') && (post.type === 'post')">
        <h2>{{ post.title.rendered }}</h2>
        <div v-html="post.excerpt.rendered"></div>
      </div>
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