<template>
  <div class="columns">
    <div v-for="post in wpPosts" :key="post.id" class="animate__animated animate__fadeIn content column">
      <div class="media">
        <div v-if="(post.status === 'publish') && (post.type === 'post')" class="media-content">
          <h2><a :href="`post/${post.id}`">{{ post.title.rendered }}</a></h2>
          <div>{{ formatDate(post.date) }}</div>
          <div v-html="post.excerpt.rendered"></div>
          <a :href="`post/${post.id}`" class="button is-link">Lees verder</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetPosts',
  props: ['wpPosts'],
  methods: {
    formatDate(value) {
      return new Date(value).toLocaleDateString('nl-NL', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    }
  }
}
</script>