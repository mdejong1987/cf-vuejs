<template>
    <div v-for="post in wpPosts" :key="post.id" class="animate__animated animate__fadeIn">
      <div v-if="(post.status === 'publish') && (post.type === 'post')">
        <h2><a :href="`post/${post.id}`">{{ post.title.rendered }}</a></h2>
        <div v-html="post.excerpt.rendered"></div>
        {{ post.date }}
        <a :href="`post/${post.id}`">Lees verder</a>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'GetPosts',
    props: ['wpPosts']
  }
</script>