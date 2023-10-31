<template>
  <h1 class="title is-1">Home</h1>
  <GetPosts :wpPosts="posts" />
  <GetMembers :wpMembers="members" />
</template>
  
<script>
import GetPosts from '@/components/posts/GetPosts.vue'
import GetMembers from '@/components/posts/GetMembers.vue'

export default {
  components: {
    GetPosts,
    GetMembers
  },
  data() {
    return {
      posts: [],
      members: [],
    }
  },
  methods: {
    async getPosts() {
      try {
        let response = await fetch("https://headless.collectr.nl/wp-json/wp/v2/posts");
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    async getMembers() {
      try {
        let response = await fetch("https://headless.collectr.nl/wp-json/wp/v2/member");
        this.members = await response.json();
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getPosts();
    this.getMembers();
  }
}
</script>