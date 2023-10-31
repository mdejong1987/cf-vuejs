<template>
    <h1>test</h1>
    {{ post }}
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      post: [],
    }
  },
  methods: {
    async getPost(id) {
      try {
        let response = await fetch(`https://headless.collectr.nl/wp-json/wp/v2/posts/${id}`);
        this.posts = await response.json();
      } catch(error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getPost();
  }
}
</script>

<style>

</style>