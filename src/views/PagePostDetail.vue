<template>
  <div class="container">
    <h2>{{ post.title.rendered }}</h2>
    <div v-html="post.content.rendered"></div>
  </div>
</template>

<script>
export default {
  name: 'PagePostDetail',
  data() {
    return {
      id: this.$route.params.id,
      post: [],
    }
  },
  methods: {
    async getPost(id) {
      try {
        let response = await fetch(`https://headless.collectr.nl/wp-json/wp/v2/posts/${id}`);
        this.post = await response.json();
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getPost(this.id);
  }
}
</script>