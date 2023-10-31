<template>
  <div v-for="post in wpPosts" :key="post.id" class="animate__animated animate__fadeIn content">
    <div v-if="(post.status === 'publish') && (post.type === 'post')">
      <h2><a :href="`post/${post.id}`">{{ post.title.rendered }}</a></h2>
      <div>{{ post.date }}</div>
      <div v-html="post.excerpt.rendered"></div>
      <a :href="`post/${post.id}`" class="button is-link">Lees verder</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetPosts',
  props: ['wpPosts']
}
</script>