<template>
  <MainHeader />
  <GetPosts :wpPosts="posts" />
  <router-view />
  <MainFooter />
</template>

<script>
import MainHeader from '@/components/layout/MainHeader.vue'
import MainFooter from '@/components/layout/MainFooter.vue'
import GetPosts from '@/components/posts/GetPosts.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
    GetPosts
  },
  data() {
    return {
      posts: [],
      pages: [],
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
    },
    async getPages() {
      try {
        let response = await fetch("https://headless.collectr.nl/wp-json/wp/v2/pages");
        this.pages = await response.json();
      } catch(error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getPosts();
    this.getPages();
  }
}
</script>

<style>

</style>
