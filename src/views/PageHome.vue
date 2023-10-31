<template>
    <h1>Home</h1>
    <GetPosts :wpPosts="posts" />
</template>
  
  <script>
  import GetPosts from '@/components/posts/GetPosts.vue'
  
  export default {
    name: 'App',
    components: {
      GetPosts
    },
    data() {
      return {
        posts: [],
      }
    },
    methods: {
      async getPosts() {
        try {
          let response = await fetch("https://headless.collectr.nl/wp-json/wp/v2/posts");
          this.posts = await response.json();
        } catch(error) {
          console.log(error);
        }
      }
    },
    created() {
      this.getPosts();
    }
  }
  </script>
  
  <style>
  
  </style>
  