<template>
  <div class="container">
    <h2>{{ post[0].title.rendered }}</h2>
    <div v-html="post[0].content.rendered"></div>
  </div>
</template>

<script>
export default {
  name: 'PagePostDetail',
  data() {
    return {
      slug: this.$route.params.slug,
      post: [],
    }
  },
  methods: {
    async getPost(slug) {
      try {
        let response = await fetch(`https://headless.collectr.nl/wp-json/wp/v2/posts?slug=${slug}`);
        this.post = await response.json();
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getPost(this.slug);
  }
}
</script>